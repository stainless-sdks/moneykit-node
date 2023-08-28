// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'moneykit/resource';
import { Token } from './token';
import { Introspect } from './introspect';
import * as API from './index';

export class Auth extends APIResource {
  token: Token = new Token(this.client);
  introspect: Introspect = new Introspect(this.client);
}

export namespace Auth {
  export import Token = API.Token;
  export import GenerateAccessTokenResponse = API.GenerateAccessTokenResponse;
  export import TokenCreateParams = API.TokenCreateParams;

  export import Introspect = API.Introspect;
  export import IntrospectClientResponse = API.IntrospectClientResponse;
  export import IntrospectRetrieveParams = API.IntrospectRetrieveParams;
}
