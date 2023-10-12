// File generated from our OpenAPI spec by Stainless.

import Moneykit from 'moneykit';
import { Response } from 'node-fetch';

const moneykit = new Moneykit({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jwks', () => {
  test('json', async () => {
    const responsePromise = moneykit.wellKnown.jwks.json();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('json: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(moneykit.wellKnown.jwks.json({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Moneykit.NotFoundError,
    );
  });

  test('json: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      moneykit.wellKnown.jwks.json(
        { 'moneykit-version': '2023-02-18' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Moneykit.NotFoundError);
  });
});
