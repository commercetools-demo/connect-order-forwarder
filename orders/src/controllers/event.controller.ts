import { Request, Response } from 'express';
import CustomError from '../errors/custom.error';
import { logger } from '../utils/logger.utils';
import { Message, OrderCreatedMessage } from '@commercetools/platform-sdk';
import axios from 'axios';
import {
  readEndpointConfiguration,
  readOrderConfiguration,
} from '../utils/config.utils';
import { createApiRoot } from '../client/create.client';

const EXPANDS = [
  'lineItems[*].productType',
  'lineItems[*].price.discounted.discount',
];
/**
 * Exposed event POST endpoint.
 * Receives the Pub/Sub message and works with it
 *
 * @param {Request} request The express request
 * @param {Response} response The express response
 * @returns
 */
export const post = async (request: Request, response: Response) => {
  // Check request body
  if (!request.body) {
    logger.error('Missing request body.');
    throw new CustomError(400, 'Bad request: No Pub/Sub message was received');
  }

  // Check if the body comes in a message
  if (!request.body.message) {
    logger.error('Missing body message');
    throw new CustomError(400, 'Bad request: Wrong No Pub/Sub message format');
  }
  try {
    const endpointConfig = readEndpointConfiguration();
    const orderConfiguration = readOrderConfiguration();
    // Receive the Pub/Sub message
    const pubSubMessage = request.body.message;

    // For our example we will use the customer id as a var
    // and the query the commercetools sdk with that info
    const decodedData = pubSubMessage.data
      ? Buffer.from(pubSubMessage.data, 'base64').toString().trim()
      : undefined;

    if (decodedData) {
      const message: Message | undefined = JSON.parse(decodedData);

      if (message && message.type === 'OrderCreated') {
        const orderCreateMessage = message as OrderCreatedMessage;
        let order = orderCreateMessage.order;
        if (orderCreateMessage.order.id) {
          const result = await createApiRoot()
            .orders()
            .withId({ ID: orderCreateMessage.order.id })
            .get({
              queryArgs: {
                expand: EXPANDS,
              },
            })
            .execute()
            .then(({ body }) => {
              if (!body.orderNumber && orderConfiguration.orderPrefix) {
                return createApiRoot()
                  .orders()
                  .withId({ ID: orderCreateMessage.order.id })
                  .post({
                    queryArgs: {
                      expand: EXPANDS,
                    },
                    body: {
                      version: body.version,
                      actions: [
                        {
                          action: 'setOrderNumber',
                          orderNumber:
                            orderConfiguration.orderPrefix + Date.now(),
                        },
                      ],
                    },
                  })
                  .execute()
                  .then((order) => {
                    return order.body;
                  });
              } else {
                return body;
              }
            });
          if (result) {
            order = result;
          }
        }
        const result = await axios.post(
          `${endpointConfig.endpoint}`,
          { ...message, order: order },
          {
            auth:
              endpointConfig.endpointUsername && endpointConfig.endpointPassword
                ? {
                    username: endpointConfig.endpointUsername,
                    password: endpointConfig.endpointPassword,
                  }
                : undefined,
          }
        );
        response.status(result.status).send();
        return;
      }
    }

    // Return the response for the client
    response.status(204).send();
  } catch (e) {
    logger.error(e);
    response.status(500).send();
  }
};
