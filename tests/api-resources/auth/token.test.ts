// File generated from our OpenAPI spec by Stainless.

import Moneykit from 'moneykit';
import { Response } from 'node-fetch';

const moneykit = new Moneykit({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource token', () => {
  test('create', async () => {
    const responsePromise = moneykit.auth.token.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(moneykit.auth.token.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Moneykit.NotFoundError,
    );
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      moneykit.auth.token.create(
        {
          client_id: 'string',
          client_secret: 'string',
          grant_type: 'string',
          scope: 'string',
          'moneykit-version': '2023-02-18',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Moneykit.NotFoundError);
  });
});
