// File generated from our OpenAPI spec by Stainless.

import * as Core from 'moneykit/core';
import { APIResource } from 'moneykit/resource';
import { isRequestOptions } from 'moneykit/core';
import * as Shared from 'moneykit/resources/shared';
import * as API from './index';

export class Introspect extends APIResource {
  /**
   * Get details about the client and application associated with your
   * `access_token`.
   */
  retrieve(
    params?: IntrospectRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntrospectClientResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<IntrospectClientResponse>;
  retrieve(
    params: IntrospectRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntrospectClientResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve({}, params);
    }
    const { 'moneykit-version': moneykitVersion } = params;
    return this.get('/auth/introspect', {
      ...options,
      headers: { 'moneykit-version': moneykitVersion?.toString() || '', ...options?.headers },
    });
  }
}

/**
 * MoneyKit API client for an application.
 */
export interface IntrospectClientResponse {
  /**
   * Customer Application for a specific environment
   */
  app: IntrospectClientResponse.App;

  /**
   * Your application's MoneyKit client ID.
   */
  client_id: string;

  /**
   * Friendly API client name for identification.
   */
  client_name: string;

  /**
   * Actions allowed by the client.
   */
  scope: string;

  /**
   * Set to timestamp if the client has been disabled.
   */
  disabled_at?: string | null;
}

export namespace IntrospectClientResponse {
  /**
   * Customer Application for a specific environment
   */
  export interface App {
    /**
     * Your app's ID.
     */
    id: string;

    /**
     * Your app's name.
     */
    app_name: string;
  }
}

export interface IntrospectRetrieveParams {
  /**
   * An enumeration.
   */
  'moneykit-version'?: Shared.SupportedVersion;
}

export namespace Introspect {
  export import IntrospectClientResponse = API.IntrospectClientResponse;
  export import IntrospectRetrieveParams = API.IntrospectRetrieveParams;
}
