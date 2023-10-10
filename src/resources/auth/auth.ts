// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'moneykit/resource';
import * as IntrospectAPI from 'moneykit/resources/auth/introspect';
import * as TokenAPI from 'moneykit/resources/auth/token';

export class Auth extends APIResource {
  token: TokenAPI.Token = new TokenAPI.Token(this.client);
  introspect: IntrospectAPI.Introspect = new IntrospectAPI.Introspect(this.client);
}

export namespace Auth {
  export import Token = TokenAPI.Token;
  export type GenerateAccessTokenResponse = TokenAPI.GenerateAccessTokenResponse;
  export import Introspect = IntrospectAPI.Introspect;
  export type IntrospectClientResponse = IntrospectAPI.IntrospectClientResponse;
  export type IntrospectRetrieveParams = IntrospectAPI.IntrospectRetrieveParams;
}
