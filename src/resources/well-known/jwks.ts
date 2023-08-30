// File generated from our OpenAPI spec by Stainless.

import * as Core from 'moneykit/core';
import { APIResource } from 'moneykit/resource';
import { isRequestOptions } from 'moneykit/core';
import * as Shared from 'moneykit/resources/shared';
import * as API from './index';

export class Jwks extends APIResource {
  /**
   * The JSON Web Key Set (JWKS) is a set of keys containing the public keys used to
   * verify webhook JSON Web Tokens (JWT) issued by MoneyKit webhooks.
   */
  json(query?: JwkJsonParams, options?: Core.RequestOptions): Core.APIPromise<JwkSet>;
  json(options?: Core.RequestOptions): Core.APIPromise<JwkSet>;
  json(
    query: JwkJsonParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JwkSet> {
    if (isRequestOptions(query)) {
      return this.json({}, query);
    }
    const { 'moneykit-version': moneykitVersion } = query;
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
  export import JwkSet = API.JwkSet;
  export import JwkJsonParams = API.JwkJsonParams;
}
