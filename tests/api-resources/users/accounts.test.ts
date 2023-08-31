// File generated from our OpenAPI spec by Stainless.

import Moneykit from 'moneykit';
import { Response } from 'node-fetch';

const moneykit = new Moneykit({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource accounts', () => {
  test('list', async () => {
    const responsePromise = moneykit.users.accounts.list('MyUser1234');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      moneykit.users.accounts.list('MyUser1234', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Moneykit.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      moneykit.users.accounts.list(
        'MyUser1234',
        { account_id: ['x', 'x', 'x'], institution_id: ['x', 'x', 'x'], 'moneykit-version': '2023-02-18' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Moneykit.NotFoundError);
  });
});