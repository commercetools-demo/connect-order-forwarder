import { readConfiguration } from '../../src/utils/config.utils';
import { expect } from '@jest/globals';

describe('Validate Config', () => {
  test('Post to non existing route', async () => {
    const response = readConfiguration();
    expect(response).toEqual({
      message: 'Path not found.',
    });
  });
});
