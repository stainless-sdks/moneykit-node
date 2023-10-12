// File generated from our OpenAPI spec by Stainless.

import Moneykit from 'moneykit';
import { Response } from 'node-fetch';

const moneykit = new Moneykit({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource links', () => {
  test('retrieve', async () => {
    const responsePromise = moneykit.links.retrieve('mk_eqkWN34UEoa2NxyALG8pcV');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      moneykit.links.retrieve('mk_eqkWN34UEoa2NxyALG8pcV', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Moneykit.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      moneykit.links.retrieve(
        'mk_eqkWN34UEoa2NxyALG8pcV',
        { 'moneykit-version': '2023-02-18' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Moneykit.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = moneykit.links.update('mk_eqkWN34UEoa2NxyALG8pcV', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('del', async () => {
    const responsePromise = moneykit.links.del('mk_eqkWN34UEoa2NxyALG8pcV');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('del: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      moneykit.links.del('mk_eqkWN34UEoa2NxyALG8pcV', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Moneykit.NotFoundError);
  });

  test('del: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      moneykit.links.del(
        'mk_eqkWN34UEoa2NxyALG8pcV',
        { 'moneykit-version': '2023-02-18' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Moneykit.NotFoundError);
  });
});
