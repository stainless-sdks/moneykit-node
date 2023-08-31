// File generated from our OpenAPI spec by Stainless.

import * as Core from 'moneykit/core';
import { APIResource } from 'moneykit/resource';
import { isRequestOptions } from 'moneykit/core';
import * as Accounts_ from 'moneykit/resources/links/accounts/index';
import * as Shared from 'moneykit/resources/shared';
import * as API from './index';

export class Accounts extends APIResource {
  /**
   * Fetches all accounts belonging to a
   * <a href=#operation/get_user_accounts>user</a>.
   */
  list(
    id: string,
    params?: AccountListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetUserAccountsResponse>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<GetUserAccountsResponse>;
  list(
    id: string,
    params: AccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetUserAccountsResponse> {
    if (isRequestOptions(params)) {
      return this.list(id, {}, params);
    }
    const { 'moneykit-version': moneykitVersion, ...query } = params;
    return this.get(`/users/${id}/accounts`, {
      query,
      ...options,
      headers: { 'moneykit-version': moneykitVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface GetUserAccountsResponse {
  /**
   * The set of all accounts belonging to this user, as a dictionary of
   * `{link_id:[accounts]}`.
   */
  links: Record<string, GetUserAccountsResponse.Links>;
}

export namespace GetUserAccountsResponse {
  export interface Links {
    accounts: Array<Accounts_.Account>;

    /**
     * An ISO-8601 timestamp indicating the last time that the account was updated.
     */
    last_synced_at?: string | null;
  }
}

export interface AccountListParams {
  /**
   * Query param: If present, filters results to accounts matching the given IDs.
   */
  account_id?: Array<string> | null;

  /**
   * Query param: If present, filters results to accounts at institutions matching
   * the given IDs.
   */
  institution_id?: Array<string> | null;

  /**
   * Header param: An enumeration.
   */
  'moneykit-version'?: Shared.SupportedVersion;
}

export namespace Accounts {
  export import GetUserAccountsResponse = API.GetUserAccountsResponse;
  export import AccountListParams = API.AccountListParams;
}
