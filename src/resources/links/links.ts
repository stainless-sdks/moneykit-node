// File generated from our OpenAPI spec by Stainless.

import * as Core from 'moneykit/core';
import { APIResource } from 'moneykit/resource';
import { isRequestOptions } from 'moneykit/core';
import * as LinksAPI from 'moneykit/resources/links/links';
import * as Shared from 'moneykit/resources/shared';
import * as IdentityAPI from 'moneykit/resources/links/identity';
import * as ProductsAPI from 'moneykit/resources/links/products';
import * as TransactionsAPI from 'moneykit/resources/links/transactions';
import * as AccountsAPI from 'moneykit/resources/links/accounts/accounts';

export class Links extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this.client);
  identity: IdentityAPI.Identity = new IdentityAPI.Identity(this.client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this.client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this.client);

  /**
   * Fetches details about a link.
   */
  retrieve(
    id: string,
    params?: LinkRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LinkResponse>;
  retrieve(
    id: string,
    params: LinkRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'moneykit-version': moneykitVersion } = params;
    return this.get(`/links/${id}`, {
      ...options,
      headers: { 'moneykit-version': moneykitVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * Updates the link configuration.
   */
  update(id: string, params: LinkUpdateParams, options?: Core.RequestOptions): Core.APIPromise<LinkResponse> {
    const { 'moneykit-version': moneykitVersion, ...body } = params;
    return this.patch(`/links/${id}`, {
      body,
      ...options,
      headers: { 'moneykit-version': moneykitVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * Deletes this link and disables its access token. <p>After deletion, the link id
   * and access token are no longer valid and cannot be used to access any data that
   * was associated with it.
   */
  del(id: string, params?: LinkDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  del(id: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  del(
    id: string,
    params: LinkDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.del(id, {}, params);
    }
    const { 'moneykit-version': moneykitVersion } = params;
    return this.delete(`/links/${id}`, {
      ...options,
      headers: { Accept: '', 'moneykit-version': moneykitVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface LinkCommon {
  /**
   * The unique ID for the institution this link is connected to.
   */
  institution_id: string;

  /**
   * The institution name this link is connected to.
   */
  institution_name: string;

  /**
   * The unique ID for this link.
   */
  link_id: string;

  /**
   * The granted products available for this link.
   */
  products: LinkCommon.Products;

  /**
   * An enumeration.
   */
  state: 'connecting' | 'awaiting_token_exchange' | 'connected' | 'deleted' | 'error';

  /**
   * An enumeration.
   */
  error_code?:
    | 'system_error'
    | 'provider_error'
    | 'institution_error'
    | 'user_error'
    | 'auth_expired'
    | 'incomplete';

  /**
   * An ISO-8601 timestamp indicating the last time that the account was updated.
   */
  last_synced_at?: string | null;

  /**
   * Arbitrary strings used to describe this link.
   */
  tags?: Array<string> | null;
}

export namespace LinkCommon {
  /**
   * The granted products available for this link.
   */
  export interface Products {
    account_numbers?: Products.AccountNumbers | null;

    accounts?: Products.Accounts | null;

    identity?: Products.Identity | null;

    transactions?: Products.Transactions | null;
  }

  export namespace Products {
    export interface AccountNumbers {
      settings: AccountNumbers.Settings;

      /**
       * An ISO-8601 timestamp indicating the last time that the product was attempted.
       */
      last_attempted_at?: string | null;

      /**
       * An ISO-8601 timestamp indicating the last time that the product was updated.
       */
      refreshed_at?: string | null;
    }

    export namespace AccountNumbers {
      export interface Settings {
        /**
         * If true, the data will be available as soon as possible after linking, even if
         * `required` is false. If false, the data will be available after the first manual
         * data refresh.
         */
        prefetch?: boolean;

        /**
         * If true, only institutions supporting this product will be available.
         */
        required?: boolean;
      }
    }

    export interface Accounts {
      /**
       * An ISO-8601 timestamp indicating the last time that the product was attempted.
       */
      last_attempted_at?: string | null;

      /**
       * An ISO-8601 timestamp indicating the last time that the product was updated.
       */
      refreshed_at?: string | null;
    }

    export interface Identity {
      settings: Identity.Settings;

      /**
       * An ISO-8601 timestamp indicating the last time that the product was attempted.
       */
      last_attempted_at?: string | null;

      /**
       * An ISO-8601 timestamp indicating the last time that the product was updated.
       */
      refreshed_at?: string | null;
    }

    export namespace Identity {
      export interface Settings {
        /**
         * If true, the data will be available as soon as possible after linking, even if
         * `required` is false. If false, the data will be available after the first manual
         * data refresh.
         */
        prefetch?: boolean;

        /**
         * If true, only institutions supporting this product will be available.
         */
        required?: boolean;
      }
    }

    export interface Transactions {
      settings: Transactions.Settings;

      /**
       * An ISO-8601 timestamp indicating the last time that the product was attempted.
       */
      last_attempted_at?: string | null;

      /**
       * An ISO-8601 timestamp indicating the last time that the product was updated.
       */
      refreshed_at?: string | null;
    }

    export namespace Transactions {
      export interface Settings {
        /**
         * If true, MoneyKit will attempt to fetch as much transaction history as possible.
         * Not all institutions supply the same extent of transaction history. Generally,
         * however, at least the past 30 days of transactions are available.
         */
        extend_history?: boolean;

        /**
         * If true, the data will be available as soon as possible after linking, even if
         * `required` is false. If false, the data will be available after the first manual
         * data refresh.
         */
        prefetch?: boolean;

        /**
         * If true, only institutions supporting this product will be available.
         */
        required?: boolean;
      }
    }
  }
}

export interface LinkResponse {
  /**
   * The unique ID for the institution this link is connected to.
   */
  institution_id: string;

  /**
   * The institution name this link is connected to.
   */
  institution_name: string;

  /**
   * The unique ID for this link.
   */
  link_id: string;

  /**
   * The granted products available for this link.
   */
  products: LinkResponse.Products;

  /**
   * An enumeration.
   */
  provider: 'moneykit' | 'finicity' | 'plaid' | 'yodlee' | 'mx' | 'akoya' | 'sophtron';

  /**
   * An enumeration.
   */
  state: 'connecting' | 'awaiting_token_exchange' | 'connected' | 'deleted' | 'error';

  /**
   * An enumeration.
   */
  error_code?: unknown;

  /**
   * An ISO-8601 timestamp indicating the last time that the account was updated.
   */
  last_synced_at?: string | null;

  /**
   * Arbitrary strings used to describe this link.
   */
  tags?: Array<string> | null;

  /**
   * The webhook url assigned to this link.
   */
  webhook?: string | null;
}

export namespace LinkResponse {
  /**
   * The granted products available for this link.
   */
  export interface Products {
    account_numbers?: Products.AccountNumbers | null;

    accounts?: Products.Accounts | null;

    identity?: Products.Identity | null;

    transactions?: Products.Transactions | null;
  }

  export namespace Products {
    export interface AccountNumbers {
      settings: AccountNumbers.Settings;

      /**
       * An ISO-8601 timestamp indicating the last time that the product was attempted.
       */
      last_attempted_at?: string | null;

      /**
       * An ISO-8601 timestamp indicating the last time that the product was updated.
       */
      refreshed_at?: string | null;
    }

    export namespace AccountNumbers {
      export interface Settings {
        /**
         * If true, the data will be available as soon as possible after linking, even if
         * `required` is false. If false, the data will be available after the first manual
         * data refresh.
         */
        prefetch?: boolean;

        /**
         * If true, only institutions supporting this product will be available.
         */
        required?: boolean;
      }
    }

    export interface Accounts {
      /**
       * An ISO-8601 timestamp indicating the last time that the product was attempted.
       */
      last_attempted_at?: string | null;

      /**
       * An ISO-8601 timestamp indicating the last time that the product was updated.
       */
      refreshed_at?: string | null;
    }

    export interface Identity {
      settings: Identity.Settings;

      /**
       * An ISO-8601 timestamp indicating the last time that the product was attempted.
       */
      last_attempted_at?: string | null;

      /**
       * An ISO-8601 timestamp indicating the last time that the product was updated.
       */
      refreshed_at?: string | null;
    }

    export namespace Identity {
      export interface Settings {
        /**
         * If true, the data will be available as soon as possible after linking, even if
         * `required` is false. If false, the data will be available after the first manual
         * data refresh.
         */
        prefetch?: boolean;

        /**
         * If true, only institutions supporting this product will be available.
         */
        required?: boolean;
      }
    }

    export interface Transactions {
      settings: Transactions.Settings;

      /**
       * An ISO-8601 timestamp indicating the last time that the product was attempted.
       */
      last_attempted_at?: string | null;

      /**
       * An ISO-8601 timestamp indicating the last time that the product was updated.
       */
      refreshed_at?: string | null;
    }

    export namespace Transactions {
      export interface Settings {
        /**
         * If true, MoneyKit will attempt to fetch as much transaction history as possible.
         * Not all institutions supply the same extent of transaction history. Generally,
         * however, at least the past 30 days of transactions are available.
         */
        extend_history?: boolean;

        /**
         * If true, the data will be available as soon as possible after linking, even if
         * `required` is false. If false, the data will be available after the first manual
         * data refresh.
         */
        prefetch?: boolean;

        /**
         * If true, only institutions supporting this product will be available.
         */
        required?: boolean;
      }
    }
  }
}

export interface LinkRetrieveParams {
  /**
   * An enumeration.
   */
  'moneykit-version'?: Shared.SupportedVersion;
}

export interface LinkUpdateParams {
  /**
   * Body param: Arbitrary strings used to describe this link.
   */
  tags?: Array<string> | null;

  /**
   * Body param: Sets the webhook URL for this link. To remove a webhook for this
   * link, set to `null`.
   */
  webhook?: string | null;

  /**
   * Header param: An enumeration.
   */
  'moneykit-version'?: Shared.SupportedVersion;
}

export interface LinkDeleteParams {
  /**
   * An enumeration.
   */
  'moneykit-version'?: Shared.SupportedVersion;
}

export namespace Links {
  export import LinkCommon = LinksAPI.LinkCommon;
  export import LinkResponse = LinksAPI.LinkResponse;
  export import LinkRetrieveParams = LinksAPI.LinkRetrieveParams;
  export import LinkUpdateParams = LinksAPI.LinkUpdateParams;
  export import LinkDeleteParams = LinksAPI.LinkDeleteParams;
  export import Accounts = AccountsAPI.Accounts;
  export import Account = AccountsAPI.Account;
  export import AccountRetrieveResponse = AccountsAPI.AccountRetrieveResponse;
  export import AccountListResponse = AccountsAPI.AccountListResponse;
  export import AccountRetrieveParams = AccountsAPI.AccountRetrieveParams;
  export import AccountListParams = AccountsAPI.AccountListParams;
  export import Identity = IdentityAPI.Identity;
  export import IdentityResponse = IdentityAPI.IdentityResponse;
  export import IdentityRetrieveParams = IdentityAPI.IdentityRetrieveParams;
  export import Transactions = TransactionsAPI.Transactions;
  export import GetTransactionsResponse = TransactionsAPI.GetTransactionsResponse;
  export import TransactionSyncResponse = TransactionsAPI.TransactionSyncResponse;
  export import TransactionListParams = TransactionsAPI.TransactionListParams;
  export import TransactionSyncParams = TransactionsAPI.TransactionSyncParams;
  export import Products = ProductsAPI.Products;
  export import ProductCreateParams = ProductsAPI.ProductCreateParams;
}
