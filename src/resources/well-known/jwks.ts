// File generated from our OpenAPI spec by Stainless.

import * as Core from 'moneykit/core';
import { APIResource } from 'moneykit/resource';
import { isRequestOptions } from 'moneykit/core';
import * as JwksAPI from 'moneykit/resources/well-known/jwks';
import * as Shared from 'moneykit/resources/shared';

export class Jwks extends APIResource {
  /**
   * The JSON Web Key Set (JWKS) is a set of keys containing the public keys used to
   * verify webhook JSON Web Tokens (JWT) issued by MoneyKit webhooks.
   */
  json(params?: JwkJsonParams, options?: Core.RequestOptions): Core.APIPromise<JwkSet>;
  json(options?: Core.RequestOptions): Core.APIPromise<JwkSet>;
  json(
    params: JwkJsonParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JwkSet> {
    if (isRequestOptions(params)) {
      return this.json({}, params);
    }
    const { 'moneykit-version': moneykitVersion } = params;
    return this.get('/.well-known/jwks.json', {
      ...options,
      headers: { 'moneykit-version': moneykitVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface JwkSet {
  /**
   * JWKs used for validating MoneyKit-issued tokens.
   */
  keys: Array<unknown>;
}

export interface JwkJsonParams {
  /**
   * An enumeration.
   */
  'moneykit-version'?: Shared.SupportedVersion;
}

export namespace Jwks {
  export type JwkSet = JwksAPI.JwkSet;
  export type JwkJsonParams = JwksAPI.JwkJsonParams;
}
