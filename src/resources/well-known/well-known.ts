// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'moneykit/resource';
import { Jwks } from './jwks';
import * as API from './index';

export class WellKnown extends APIResource {
  jwks: Jwks = new Jwks(this.client);
}

export namespace WellKnown {
  export import Jwks = API.Jwks;
  export import JwkSet = API.JwkSet;
  export import JwkJsonParams = API.JwkJsonParams;
}
