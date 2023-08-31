// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'moneykit/resource';
import * as API from './index';

export class Token extends APIResource {}

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

export namespace Token {
  export import GenerateAccessTokenResponse = API.GenerateAccessTokenResponse;
}
