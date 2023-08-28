// File generated from our OpenAPI spec by Stainless.

import * as Core from 'moneykit/core';
import { APIResource } from 'moneykit/resource';
import * as Links from 'moneykit/resources/links/index';
import * as API from './index';

export class ExchangeToken extends APIResource {
  /**
   * After the end user has successfully completed the linking process, your back end
   * calls this endpoint to exchange the token received by your front end for
   * a`link_id` that can be used to access the link's data.
   */
  create(
    params: ExchangeTokenCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExchangeTokenResponse> {
    const { 'moneykit-version': moneykitVersion, ...body } = params;
    return this.post('/link-session/exchange-token', {
      body,
      ...options,
      headers: { 'moneykit-version': moneykitVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface ExchangeTokenResponse {
  /**
   * Details of the new link.
   */
  link: Links.LinkCommon;

  /**
   * The unique ID associated with this link.
   */
  link_id: string;
}

export interface ExchangeTokenCreateParams {
  /**
   * Body param: The token returned to your front end by MoneyLink's onSuccess
   * callback.
   */
  exchangeable_token: string;

  /**
   * Header param: An enumeration.
   */
  'moneykit-version'?: '2023-02-18';
}

export namespace ExchangeToken {
  export import ExchangeTokenResponse = API.ExchangeTokenResponse;
  export import ExchangeTokenCreateParams = API.ExchangeTokenCreateParams;
}
