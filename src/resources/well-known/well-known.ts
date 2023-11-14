// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'moneykit/resource';
import * as JwksAPI from 'moneykit/resources/well-known/jwks';

export class WellKnown extends APIResource {
  jwks: JwksAPI.Jwks = new JwksAPI.Jwks(this._client);
}

export namespace WellKnown {
  export import Jwks = JwksAPI.Jwks;
  export import JwkSet = JwksAPI.JwkSet;
  export import JwkJsonParams = JwksAPI.JwkJsonParams;
}
