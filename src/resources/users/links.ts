// File generated from our OpenAPI spec by Stainless.

import * as Core from 'moneykit/core';
import { APIResource } from 'moneykit/resource';
import { isRequestOptions } from 'moneykit/core';
import * as Links_ from 'moneykit/resources/links/index';
import * as API from './index';

export class Links extends APIResource {
  /**
   * Fetches all links belonging to a <a href=#operation/get_user_accounts>user</a>.
   */
  list(
    id: string,
    query?: LinkListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetUserLinksResponse>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<GetUserLinksResponse>;
  list(
    id: string,
    query: LinkListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetUserLinksResponse> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    const { 'moneykit-version': moneykitVersion } = query;
    return this.get(`/users/${id}/links`, {
      ...options,
      headers: { 'moneykit-version': moneykitVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface GetUserLinksResponse {
  /**
   * The set of links belonging to this user, as a dictionary of `{link_id:link}`.
   */
  links: Record<string, Links_.LinkCommon>;
}

export interface LinkListParams {
  /**
   * An enumeration.
   */
  'moneykit-version'?: '2023-02-18';
}

export namespace Links {
  export import GetUserLinksResponse = API.GetUserLinksResponse;
  export import LinkListParams = API.LinkListParams;
}
