// File generated from our OpenAPI spec by Stainless.

import * as Core from 'moneykit/core';
import { APIResource } from 'moneykit/resource';
import { isRequestOptions } from 'moneykit/core';
import * as API from './index';

export class Token extends APIResource {
  /**
   * Create a new short-lived access token by validating your `client_id` and
   * `client_secret`.
   *
   * The `access_token` is to be forwarded with all subsequent requests as
   * `Authorization: Bearer {access_token}` HTTP header.
   *
   * When the token expires you must regenerate your `access_token`.
   *
   * The `client_id` and `client_secret` can be supplied as POST body parameters, or
   * as a HTTP basic auth header.
   */
  create(
    params?: TokenCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateAccessTokenResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<GenerateAccessTokenResponse>;
  create(
    params: TokenCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateAccessTokenResponse> {
    if (isRequestOptions(params)) {
      return this.create({}, params);
    }
    const { 'moneykit-version': moneykitVersion, ...body } = params;
    return this.post('/auth/token', {
      body,
      ...options,
      headers: { 'moneykit-version': moneykitVersion?.toString() || '', ...options?.headers },
    });
  }
}

/**
 * MoneyKit API access token.
 */
export interface GenerateAccessTokenResponse {
  /**
   * Short-lived access token.
   */
  access_token: string;

  /**
   * How long until `access_token` expires in seconds.
   */
  expires_in: number;

  /**
   * Always "bearer".
   */
  token_type: string;
}

export interface TokenCreateParams {
  /**
   * Body param: Your application's MoneyKit client ID.
   */
  client_id?: string | null;

  /**
   * Body param: Your application's MoneyKit client secret.
   */
  client_secret?: string | null;

  /**
   * Body param: Token grant type. Only `client_credentials` supported.
   */
  grant_type?: string | null;

  /**
   * Body param: Actions to be allowed for this token, given as one or more strings
   * separated by spaces. If omitted, all actions allowed for your application will
   * be granted to this token.
   */
  scope?: string;

  /**
   * Header param: An enumeration.
   */
  'moneykit-version'?: '2023-02-18';
}

export namespace Token {
  export import GenerateAccessTokenResponse = API.GenerateAccessTokenResponse;
  export import TokenCreateParams = API.TokenCreateParams;
}
