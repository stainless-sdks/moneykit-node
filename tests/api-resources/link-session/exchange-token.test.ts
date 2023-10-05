// File generated from our OpenAPI spec by Stainless.

import Moneykit from 'moneykit';
import { Response } from 'node-fetch';

const moneykit = new Moneykit({
  apiKey: 'something1234',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource exchangeToken', () => {
  test('create: only required params', async () => {
    const responsePromise = moneykit.linkSession.exchangeToken.create({
      exchangeable_token: 'c7318ff7-257c-490e-8242-03a815b223b7',
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
    const response = await moneykit.linkSession.exchangeToken.create({
      exchangeable_token: 'c7318ff7-257c-490e-8242-03a815b223b7',
      'moneykit-version': '2023-02-18',
    });
  });
});
