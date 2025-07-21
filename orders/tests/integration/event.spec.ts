import { describe } from '@jest/globals';
import { createRequest, createResponse } from 'node-mocks-http';
import { OrderCreatedMessage, Order } from '@commercetools/platform-sdk';
import { post } from '../../src/controllers/event.controller';

describe('Testing Event Controller', () => {
  it('Order Created', () => {
    const orderId = '62e10dcc-1c76-4e26-823a-5b3829b8f9f8';

    const order: Order = {
      customLineItems: [],
      customerEmail: 'jen@example.uk',
      totalPrice: {
        type: 'centPrecision',
        currencyCode: 'GBP',
        centAmount: 461799,
        fractionDigits: 2,
      },
      id: orderId,
      createdAt: '2024-09-25T13:44:12.776Z',
      lastModifiedAt: '2024-10-09T15:41:45.130Z',
      lineItems: [],
      refusedGifts: [],
      syncInfo: [],
      version: 0,
      country: 'GB',
      orderState: 'Confirmed',
      shipmentState: 'Pending',
      origin: 'Merchant',
      shippingMode: 'Single',
      shipping: [],
    };
    const orderCreatedMessage: OrderCreatedMessage = {
      createdAt: '',
      id: '',
      lastModifiedAt: '',
      resource: { id: orderId, typeId: 'order' },
      resourceVersion: 0,
      sequenceNumber: 0,
      type: 'OrderCreated',
      version: 0,
      order: order,
    };
    const request = createRequest({
      method: 'POST',
      body: {
        message: {
          data: Buffer.from(JSON.stringify(orderCreatedMessage)).toString(
            'base64'
          ),
        },
      },
    });
    post(request, createResponse());
  });
});
