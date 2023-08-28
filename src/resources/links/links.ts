// File generated from our OpenAPI spec by Stainless.

import * as Core from 'moneykit/core';
import { APIResource } from 'moneykit/resource';
import { isRequestOptions } from 'moneykit/core';
import { Accounts } from './accounts/accounts';
import { Identity } from './identity';
import { Transactions } from './transactions';
import { Products } from './products';
import * as API from './index';

export class Links extends APIResource {
  accounts: Accounts = new Accounts(this.client);
  identity: Identity = new Identity(this.client);
  transactions: Transactions = new Transactions(this.client);
  products: Products = new Products(this.client);

  /**
   * Fetches details about a link.
   */
  retrieve(
    id: string,
    query?: LinkRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LinkResponse>;
  retrieve(
    id: string,
    query: LinkRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    const { 'moneykit-version': moneykitVersion } = query;
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
  del(id: string, body?: LinkDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  del(id: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  del(
    id: string,
    body: LinkDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.del(id, {}, body);
    }
    const { 'moneykit-version': moneykitVersion } = body;
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
  'moneykit-version'?: '2023-02-18';
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
  'moneykit-version'?: '2023-02-18';
}

export interface LinkDeleteParams {
  /**
   * An enumeration.
   */
  'moneykit-version'?: '2023-02-18';
}

export namespace Links {
  export import LinkCommon = API.LinkCommon;
  export import LinkResponse = API.LinkResponse;
  export import LinkRetrieveParams = API.LinkRetrieveParams;
  export import LinkUpdateParams = API.LinkUpdateParams;
  export import LinkDeleteParams = API.LinkDeleteParams;

  export import Accounts = API.Accounts;
  export import Account = API.Account;
  export import AccountRetrieveResponse = API.AccountRetrieveResponse;
  export import AccountListResponse = API.AccountListResponse;
  export import AccountRetrieveParams = API.AccountRetrieveParams;
  export import AccountListParams = API.AccountListParams;

  export import Identity = API.Identity;
  export import IdentityResponse = API.IdentityResponse;
  export import IdentityRetrieveParams = API.IdentityRetrieveParams;

  export import Transactions = API.Transactions;
  export import GetTransactionsResponse = API.GetTransactionsResponse;
  export import TransactionSyncResponse = API.TransactionSyncResponse;
  export import TransactionListParams = API.TransactionListParams;
  export import TransactionSyncParams = API.TransactionSyncParams;

  export import Products = API.Products;
  export import ProductCreateParams = API.ProductCreateParams;
}
