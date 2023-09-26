// File generated from our OpenAPI spec by Stainless.

import * as Core from 'moneykit/core';
import { APIResource } from 'moneykit/resource';
import * as ExchangeTokenAPI from 'moneykit/resources/link-session/exchange-token';
import * as Shared from 'moneykit/resources/shared';
import * as LinksAPI from 'moneykit/resources/links/links';

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
  link: LinksAPI.LinkCommon;

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
  'moneykit-version'?: Shared.SupportedVersion;
}

export namespace ExchangeToken {
  export type ExchangeTokenResponse = ExchangeTokenAPI.ExchangeTokenResponse;
  export type ExchangeTokenCreateParams = ExchangeTokenAPI.ExchangeTokenCreateParams;
}
