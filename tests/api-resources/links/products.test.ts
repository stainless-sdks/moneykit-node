// File generated from our OpenAPI spec by Stainless.

import Moneykit from 'moneykit';
import { Response } from 'node-fetch';

const moneykit = new Moneykit({ apiKey: 'My API Key', baseURL: 'http://127.0.0.1:4010' });

describe('resource products', () => {
  test('create: only required params', async () => {
    const responsePromise = moneykit.links.products.create('mk_eqkWN34UEoa2NxyALG8pcV', {
      products: ['account_numbers', 'transactions'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await moneykit.links.products.create('mk_eqkWN34UEoa2NxyALG8pcV', {
      products: ['account_numbers', 'transactions'],
      'moneykit-version': '2023-02-18',
    });
  });
});
