// File generated from our OpenAPI spec by Stainless.

import Moneykit from 'moneykit';
import { Response } from 'node-fetch';

const moneykit = new Moneykit({ apiKey: 'My API Key', baseURL: 'http://127.0.0.1:4010' });

describe('resource transactions', () => {
  test('list', async () => {
    const responsePromise = moneykit.links.transactions.list('mk_eqkWN34UEoa2NxyALG8pcV');
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
      moneykit.links.transactions.list('mk_eqkWN34UEoa2NxyALG8pcV', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Moneykit.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      moneykit.links.transactions.list(
        'mk_eqkWN34UEoa2NxyALG8pcV',
        {
          account_ids: ['string', 'string', 'string'],
          end_date: 'string',
          page: 1,
          size: 1,
          start_date: 'string',
          'moneykit-version': '2023-02-18',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Moneykit.NotFoundError);
  });

  test('sync', async () => {
    const responsePromise = moneykit.links.transactions.sync('mk_eqkWN34UEoa2NxyALG8pcV');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sync: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      moneykit.links.transactions.sync('mk_eqkWN34UEoa2NxyALG8pcV', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Moneykit.NotFoundError);
  });

  test('sync: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      moneykit.links.transactions.sync(
        'mk_eqkWN34UEoa2NxyALG8pcV',
        { cursor: 'string', size: 1, 'moneykit-version': '2023-02-18' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Moneykit.NotFoundError);
  });
});
