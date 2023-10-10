// File generated from our OpenAPI spec by Stainless.

import * as Core from 'moneykit/core';
import { APIResource } from 'moneykit/resource';
import { isRequestOptions } from 'moneykit/core';
import * as TransactionsAPI from 'moneykit/resources/users/transactions';
import * as Shared from 'moneykit/resources/shared';

export class Transactions extends APIResource {
  /**
   * Fetches transactions for a <a href=#operation/get_user_accounts>user</a>.
   * <p>This endpoint fetches all transactions for a user across all of their links.
   * You can use it to retrieve transactions from any or all accounts at once,
   * regardless of which institution they belong to.
   */
  list(
    id: string,
    params?: TransactionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetUserTransactionsResponse>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<GetUserTransactionsResponse>;
  list(
    id: string,
    params: TransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetUserTransactionsResponse> {
    if (isRequestOptions(params)) {
      return this.list(id, {}, params);
    }
    const { 'moneykit-version': moneykitVersion, ...query } = params;
    return this.get(`/users/${id}/transactions`, {
      query,
      ...options,
      headers: { 'moneykit-version': moneykitVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface GetUserTransactionsResponse {
  accounts: Record<string, GetUserTransactionsResponse.Accounts>;

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

  transactions: Array<GetUserTransactionsResponse.Transaction>;
}

export namespace GetUserTransactionsResponse {
  export interface Accounts {
    institution_id: string;

    /**
     * The unique ID of the link this account belongs to.
     */
    link_id: string;

    /**
     * The account name, according to the institution. Note that some institutions
     * allow the end user to nickname the account; in such cases this field may be the
     * name assigned by the user
     */
    name: string;

    /**
     * An ISO-8601 timestamp indicating the last time that the account was updated.
     */
    last_synced_at?: string | null;
  }

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

export interface TransactionListParams {
  /**
   * Query param: If present, filters results to transactions in accounts matching
   * the given IDs.
   */
  account_id?: Array<string> | null;

  /**
   * Query param:
   */
  category?: Array<string> | null;

  /**
   * Query param: The latest date for which data should be returned, formatted as
   * YYYY-MM-DD. Defaults to today.
   */
  end_date?: string | null;

  /**
   * Query param: If present, filters results to transactions at institutions
   * matching the given IDs.
   */
  institution_id?: Array<string> | null;

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
   * Query param:
   */
  transaction_type?: Array<'credit' | 'debit'> | null;

  /**
   * Header param: An enumeration.
   */
  'moneykit-version'?: Shared.SupportedVersion;
}

export namespace Transactions {
  export type GetUserTransactionsResponse = TransactionsAPI.GetUserTransactionsResponse;
  export type TransactionListParams = TransactionsAPI.TransactionListParams;
}
