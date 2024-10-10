import CustomError from '../errors/custom.error';
import envValidators, {
  envEndpointConfigValidators,
} from '../validators/env.validators';
import { getValidateMessages } from '../validators/helpers.validators';

/**
 * Read the configuration env vars
 * (Add yours accordingly)
 *
 * @returns The configuration with the correct env vars
 */
export const readConfiguration = () => {
  const envVars = {
    clientId: process.env.CTP_CLIENT_ID as string,
    clientSecret: process.env.CTP_CLIENT_SECRET as string,
    projectKey: process.env.CTP_PROJECT_KEY as string,
    scope: process.env.CTP_SCOPE,
    region: process.env.CTP_REGION as string,
  };

  const validationErrors = getValidateMessages(envValidators, envVars);

  if (validationErrors.length) {
    throw new CustomError(
      'InvalidEnvironmentVariablesError',
      'Invalid Environment Variables please check your .env file',
      validationErrors
    );
  }

  return envVars;
};

export const readEndpointConfiguration = () => {
  const envVars = {
    endpoint: process.env.ENDPOINT as string,
    endpointUsername: process.env.ENDPOINT_USERNAME as string,
    endpointPassword: process.env.ENDPOINT_PASSWORD as string,
  };

  const validationErrors = getValidateMessages(
    envEndpointConfigValidators,
    envVars
  );

  if (validationErrors.length) {
    throw new CustomError(
      'InvalidEnvironmentVariablesError',
      'Invalid Environment Variables please check your .env file',
      validationErrors
    );
  }

  return envVars;
};
