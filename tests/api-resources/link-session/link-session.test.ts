// File generated from our OpenAPI spec by Stainless.

import Moneykit from 'moneykit';
import { Response } from 'node-fetch';

const moneykit = new Moneykit({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource linkSession', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('create: only required params', async () => {
    const responsePromise = moneykit.linkSession.create({
      customer_user: { id: 'xxxx' },
      redirect_uri: 'https://yourdomain.com/oauth.html',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('create: required and optional params', async () => {
    const response = await moneykit.linkSession.create({
      customer_user: {
        id: 'xxxx',
        email: { address: 'xxxx', customer_verified_at: '2019-12-27T18:11:19.117Z' },
        phone: { number: '+16175551212', country: 'US', customer_verified_at: '2019-12-27T18:11:19.117Z' },
      },
      redirect_uri: 'https://yourdomain.com/oauth.html',
      existing_link_id: 'mk_eqkWN34UEoa2NxyALG8pcV',
      institution_id: 'c7318ff7-257c-490e-8242-03a815b223b7',
      link_tags: ['smoke_test', 'user_type:admin'],
      moneylink_features: { bug_reporter: true, enable_money_id: true },
      settings: {
        providers: ['moneykit'],
        link_permissions: {
          requested: [
            { scope: 'accounts', reason: 'display your account balances', required: true },
            { scope: 'accounts', reason: 'display your account balances', required: true },
            { scope: 'accounts', reason: 'display your account balances', required: true },
          ],
        },
        products: {
          account_numbers: { required: true, prefetch: true },
          identity: { required: true, prefetch: true },
          transactions: { required: true, prefetch: true, extend_history: true },
        },
        countries: ['US'],
      },
      webhook: 'https://yourdomain.com/moneykit_webhook',
      'moneykit-version': '2023-02-18',
    });
  });
});
