// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'moneykit/resource';
import * as JwksAPI from 'moneykit/resources/well-known/jwks';

export class WellKnown extends APIResource {
  jwks: JwksAPI.Jwks = new JwksAPI.Jwks(this.client);
}

export namespace WellKnown {
  export import Jwks = JwksAPI.Jwks;
  export type JwkSet = JwksAPI.JwkSet;
  export type JwkJsonParams = JwksAPI.JwkJsonParams;
}
