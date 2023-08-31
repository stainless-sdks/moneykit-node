// File generated from our OpenAPI spec by Stainless.

import * as Core from 'moneykit/core';
import { APIResource } from 'moneykit/resource';
import { isRequestOptions } from 'moneykit/core';
import * as Accounts from 'moneykit/resources/links/accounts/index';
import * as Links from 'moneykit/resources/links/index';
import * as Shared from 'moneykit/resources/shared';
import * as API from './index';

export class Transactions extends APIResource {
  /**
   * Fetches transactions for the accounts associated with a
   * <a href=#tag/Links>link</a>. Results are paginated, and returned in reverse
   * chronological order. <p>MoneyKit checks for updated account data, including
   * transactions, periodically throughout the day, but the update frequency can
   * vary, depending on the downstream data provider and the institution. To force a
   * check for updated transactions, you can use the
   * <a href=#operation/refresh_products>/products</a> endpoint.
   */
  list(
    id: string,
    params?: TransactionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetTransactionsResponse>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<GetTransactionsResponse>;
  list(
    id: string,
    params: TransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetTransactionsResponse> {
    if (isRequestOptions(params)) {
      return this.list(id, {}, params);
    }
    const { 'moneykit-version': moneykitVersion, ...query } = params;
    return this.get(`/links/${id}/transactions`, {
      query,
      ...options,
      headers: { 'moneykit-version': moneykitVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * Provides a paginated feed of transactions, grouped into `created`, `updated`,
   * and `removed` lists. <p>Each call will also return a `next_cursor` value. In
   * subsequent calls, include that value to receive only changes that have occurred
   * since the previous call. <p>Large numbers of transactions will be paginated, and
   * the `has_more` field will be true. You should continue calling this endpoint
   * with each new `next_cursor` value until `has_more` is false. <p>Note also that
   * the `transactions.updates_available` webhook will alert you when new data is
   * available.
   */
  sync(
    id: string,
    params?: TransactionSyncParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionSyncResponse>;
  sync(id: string, options?: Core.RequestOptions): Core.APIPromise<TransactionSyncResponse>;
  sync(
    id: string,
    params: TransactionSyncParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionSyncResponse> {
    if (isRequestOptions(params)) {
      return this.sync(id, {}, params);
    }
    const { 'moneykit-version': moneykitVersion, ...query } = params;
    return this.get(`/links/${id}/transactions/sync`, {
      query,
      ...options,
      headers: { 'moneykit-version': moneykitVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface GetTransactionsResponse {
  /**
   * A list of accounts for which transactions are being returned.
   */
  accounts: Array<Accounts.Account>;

  /**
   * The link that these accounts belong to.
   */
  link: Links.LinkCommon;

  /**
   * The page number corresponding to this batch of results.
   */
  page: number;

  /**
   * The number of results in this batch.
   */
  size: number;

  /**
   * The total number of results for this query.
   */
  total: number;

  /**
   * A list of transactions.
   */
  transactions: Array<GetTransactionsResponse.Transaction>;
}

export namespace GetTransactionsResponse {
  export interface Transaction {
    /**
     * The ID of the account in which this transaction occurred.
     */
    account_id: string;

    /**
     * The amount of this transaction, denominated in account currency. This amount is
     * always non-negative. The `type` field indicates whether it is entering or
     * leaving the account.
     */
    amount: string;

    /**
     * The ISO-4217 currency code of the transaction.
     */
    currency: string;

    /**
     * If true, this transaction is pending or unsettled and has not yet affected the
     * account. Commonly these are credit card transactions, particularly approvals
     * (holds) such as for hotel or restaurant reservations placed in advance where the
     * final amount is still to be determined.
     */
    pending: boolean;

    /**
     * The unique ID for this transaction.
     */
    transaction_id: string;

    /**
     * An enumeration.
     */
    type: 'credit' | 'debit';

    /**
     * The category for this transaction, given as a dotted string indicating a
     * hierarchical categorization. See <a href=/pages/categories>Transaction
     * Categories</a> for the list of possible transaction types.
     */
    category?: string | null;

    /**
     * A normalized, cleaned transaction description suitable for presentation to the
     * end user. Commonly this will be the merchant or counterparty name.
     */
    description?: string | null;

    /**
     * The raw transaction description as provided by the institution, where available.
     */
    raw_description?: string | null;
  }
}

export interface TransactionSyncResponse {
  /**
   * Pagination information
   */
  cursor: TransactionSyncResponse.Cursor;

  /**
   * This condition indicates the presence of transaction updates exceeding the
   * requested count. If true, additional updates can be retrieved by making an
   * additional request with cursor set to next_cursor.
   */
  has_more: boolean;

  /**
   * The link that these transactions belong to.
   */
  link: Links.LinkCommon;

  /**
   * list of created, updated and removed transactions.
   */
  transactions: TransactionSyncResponse.Transactions;
}

export namespace TransactionSyncResponse {
  /**
   * Pagination information
   */
  export interface Cursor {
    /**
     * A cursor value pointing to the next result set.
     */
    next?: string | null;
  }

  /**
   * list of created, updated and removed transactions.
   */
  export interface Transactions {
    /**
     * A list of transactions that have been added to the link ordered by ascending
     * datetime.
     */
    created: Array<Transactions.Created>;

    /**
     * A list of transaction ids that have been removed from the link ordered by
     * ascending datetime.
     */
    removed: Array<string>;

    /**
     * A list of transactions that have been updated on the link ordered by ascending
     * datetime.
     */
    updated: Array<Transactions.Updated>;
  }

  export namespace Transactions {
    export interface Created {
      /**
       * The ID of the account in which this transaction occurred.
       */
      account_id: string;

      /**
       * The amount of this transaction, denominated in account currency. This amount is
       * always non-negative. The `type` field indicates whether it is entering or
       * leaving the account.
       */
      amount: string;

      /**
       * The ISO-4217 currency code of the transaction.
       */
      currency: string;

      /**
       * If true, this transaction is pending or unsettled and has not yet affected the
       * account. Commonly these are credit card transactions, particularly approvals
       * (holds) such as for hotel or restaurant reservations placed in advance where the
       * final amount is still to be determined.
       */
      pending: boolean;

      /**
       * The unique ID for this transaction.
       */
      transaction_id: string;

      /**
       * An enumeration.
       */
      type: 'credit' | 'debit';

      /**
       * The category for this transaction, given as a dotted string indicating a
       * hierarchical categorization. See <a href=/pages/categories>Transaction
       * Categories</a> for the list of possible transaction types.
       */
      category?: string | null;

      /**
       * A normalized, cleaned transaction description suitable for presentation to the
       * end user. Commonly this will be the merchant or counterparty name.
       */
      description?: string | null;

      /**
       * The raw transaction description as provided by the institution, where available.
       */
      raw_description?: string | null;
    }

    export interface Updated {
      /**
       * The ID of the account in which this transaction occurred.
       */
      account_id: string;

      /**
       * The amount of this transaction, denominated in account currency. This amount is
       * always non-negative. The `type` field indicates whether it is entering or
       * leaving the account.
       */
      amount: string;

      /**
       * The ISO-4217 currency code of the transaction.
       */
      currency: string;

      /**
       * If true, this transaction is pending or unsettled and has not yet affected the
       * account. Commonly these are credit card transactions, particularly approvals
       * (holds) such as for hotel or restaurant reservations placed in advance where the
       * final amount is still to be determined.
       */
      pending: boolean;

      /**
       * The unique ID for this transaction.
       */
      transaction_id: string;

      /**
       * An enumeration.
       */
      type: 'credit' | 'debit';

      /**
       * The category for this transaction, given as a dotted string indicating a
       * hierarchical categorization. See <a href=/pages/categories>Transaction
       * Categories</a> for the list of possible transaction types.
       */
      category?: string | null;

      /**
       * A normalized, cleaned transaction description suitable for presentation to the
       * end user. Commonly this will be the merchant or counterparty name.
       */
      description?: string | null;

      /**
       * The raw transaction description as provided by the institution, where available.
       */
      raw_description?: string | null;
    }
  }
}

export interface TransactionListParams {
  /**
   * Query param: An optional list of account IDs to filter the results.
   */
  account_ids?: Array<string> | null;

  /**
   * Query param: The latest date for which data should be returned, formatted as
   * YYYY-MM-DD. Defaults to today.
   */
  end_date?: string | null;

  /**
   * Query param: The page number to return.
   */
  page?: number;

  /**
   * Query param: The number of items to return per page.
   */
  size?: number;

  /**
   * Query param: The earliest date for which data should be returned, formatted as
   * YYYY-MM-DD. Defaults to 90 days before the `end_date`. <p>If you want to
   * retrieve **all** transactions, use `1900-01-01`.
   */
  start_date?: string | null;

  /**
   * Header param: An enumeration.
   */
  'moneykit-version'?: Shared.SupportedVersion;
}

export interface TransactionSyncParams {
  /**
   * Query param: A cursor value representing the last update requested. If included,
   * the response will only return changes after this update. If omitted, a complete
   * history of updates will be returned. This value must be stored by the client as
   * we do not keep track of customer cursors.
   */
  cursor?: string | null;

  /**
   * Query param: The number of items to return.
   */
  size?: number;

  /**
   * Header param: An enumeration.
   */
  'moneykit-version'?: Shared.SupportedVersion;
}

export namespace Transactions {
  export import GetTransactionsResponse = API.GetTransactionsResponse;
  export import TransactionSyncResponse = API.TransactionSyncResponse;
  export import TransactionListParams = API.TransactionListParams;
  export import TransactionSyncParams = API.TransactionSyncParams;
}
