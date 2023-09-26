// File generated from our OpenAPI spec by Stainless.

import * as Core from 'moneykit/core';
import { APIResource } from 'moneykit/resource';
import * as LinkSessionAPI from 'moneykit/resources/link-session/link-session';
import * as Shared from 'moneykit/resources/shared';
import * as ExchangeTokenAPI from 'moneykit/resources/link-session/exchange-token';

export class LinkSession extends APIResource {
  exchangeToken: ExchangeTokenAPI.ExchangeToken = new ExchangeTokenAPI.ExchangeToken(this.client);

  /**
   * This endpoint is to be called by your back end, to establish a new link session
   * for creating a link to your end user's institution.
   */
  create(
    params: LinkSessionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateLinkSessionResponse> {
    const { 'moneykit-version': moneykitVersion, ...body } = params;
    return this.post('/link-session', {
      body,
      ...options,
      headers: { 'moneykit-version': moneykitVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface CreateLinkSessionResponse {
  /**
   * A unique token identifying this link session.
   */
  link_session_token: string;
}

export interface LinkSessionCreateParams {
  /**
   * Body param: Details about your end user. These details are used to improve
   * conversion and streamline the linking flow, and to support the MoneyID system,
   * which provides enhanced debugging and improved privacy controls for your end
   * user.
   */
  customer_user: LinkSessionCreateParams.CustomerUser;

  /**
   * Body param: For Oauth linking, a URI indicating the destination, in your
   * application, where the user should be sent after authenticating with the
   * institution. The `redirect_uri` should not contain any query parameters, and it
   * must be pre-approved by MoneyKit during the customer setup process.
   */
  redirect_uri: string;

  /**
   * Body param: Supply the existing `link_id` if you are asking the user to
   * reconnect this link.
   */
  existing_link_id?: string | null;

  /**
   * Body param: The ID of the institution you want to link to. Providing this will
   * skip the institution selection step. `existing_link_id` will take precedence
   * over this field if both are provided.
   */
  institution_id?: string | null;

  /**
   * Body param: You can supply one or more arbitrary strings as tags to describe
   * this link.
   */
  link_tags?: Array<string>;

  /**
   * Body param: Enables optional testing and UI features.
   */
  moneylink_features?: LinkSessionCreateParams.MoneylinkFeatures;

  /**
   * Body param: If provided, these settings will override your default settings for
   * this session.
   */
  settings?: LinkSessionCreateParams.Settings;

  /**
   * Body param: The destination URL to which any webhooks should be sent.
   */
  webhook?: string | null;

  /**
   * Header param: An enumeration.
   */
  'moneykit-version'?: Shared.SupportedVersion;
}

export namespace LinkSessionCreateParams {
  /**
   * Details about your end user. These details are used to improve conversion and
   * streamline the linking flow, and to support the MoneyID system, which provides
   * enhanced debugging and improved privacy controls for your end user.
   */
  export interface CustomerUser {
    /**
     * Your own unique ID for this user. Typically this will be a UUID or primary key
     * from your application.
     */
    id: string;

    /**
     * The user's email address. This field is optional, but either email or phone must
     * be provided to enable improved link conversion via the MoneyID system.
     */
    email?: CustomerUser.Email;

    /**
     * The user's mobile phone number. This field is optional, but either email or
     * phone must be provided to enable improved link conversion via the MoneyID
     * system.
     */
    phone?: CustomerUser.Phone;
  }

  export namespace CustomerUser {
    /**
     * The user's email address. This field is optional, but either email or phone must
     * be provided to enable improved link conversion via the MoneyID system.
     */
    export interface Email {
      /**
       * The user's email address.
       */
      address: string;

      /**
       * Optional timestamp that marks when you last verified this email (such as when
       * the user most recently clicked a verification url sent to this address). Only
       * include this field if you verified the address. You may supply zeros if the time
       * (but not the date) is unknown.
       */
      customer_verified_at?: string | null;
    }

    /**
     * The user's mobile phone number. This field is optional, but either email or
     * phone must be provided to enable improved link conversion via the MoneyID
     * system.
     */
    export interface Phone {
      /**
       * The user's phone number, preferably in E164 format, including the country code.
       */
      number: string;

      /**
       * An enumeration.
       */
      country?: 'US' | 'GB' | 'CA';

      /**
       * Optional timestamp that marks when you last verified this number (such as when
       * the user most recently returned a verification code sent via SMS to this
       * number). Only include this field if you verified the number. You may supply
       * zeros if the time (but not the date) is unknown.
       */
      customer_verified_at?: string | null;
    }
  }

  /**
   * Enables optional testing and UI features.
   */
  export interface MoneylinkFeatures {
    /**
     * If enabled, the user can perform a gesture that displays a bug reporter directly
     * in the SDK's UI.
     */
    bug_reporter?: boolean;

    /**
     * If enabled, the user can register for, or login into, Money ID.
     */
    enable_money_id?: boolean;
  }

  /**
   * If provided, these settings will override your default settings for this
   * session.
   */
  export interface Settings {
    /**
     * Restricts the available institutions to those in **any** of these countries.
     */
    countries?: Array<'US' | 'GB' | 'CA'> | null;

    /**
     * A set of permissions that the user will be prompted to grant. **Required**
     * permissions will restrict the available institutions list to those which support
     * that type of data. The data you will be able to fetch from the link is limited
     * to the granted permissions set.
     */
    link_permissions?: Settings.LinkPermissions;

    /**
     * If provided, configures what institutions are available and how data should be
     * fetched.
     */
    products?: Settings.Products;

    /**
     * If provided, restricts the available institutions to those supported by **any**
     * of these providers.
     */
    providers?: Array<'moneykit' | 'finicity' | 'plaid' | 'yodlee' | 'mx' | 'akoya' | 'sophtron'> | null;
  }

  export namespace Settings {
    /**
     * A set of permissions that the user will be prompted to grant. **Required**
     * permissions will restrict the available institutions list to those which support
     * that type of data. The data you will be able to fetch from the link is limited
     * to the granted permissions set.
     */
    export interface LinkPermissions {
      requested: Array<LinkPermissions.Requested>;
    }

    export namespace LinkPermissions {
      export interface Requested {
        /**
         * A **brief** description of the reason your app wants this data. This description
         * will be displayed to the user when permission is requested.
         */
        reason: string;

        /**
         * If true, only institutions that support this data type will be available, and
         * the user **must** grant this permission or the link will not be created. If
         * false, then the available institutions list may include those that do not
         * support this data type, and even if the user declines to grant this permission,
         * the link will still be created (so long as at least one permission is granted).
         */
        required: boolean;

        /**
         * Permissions that a link has access to. These are accepted by a user.
         */
        scope: 'accounts' | 'account_numbers' | 'identity' | 'transactions';
      }
    }

    /**
     * If provided, configures what institutions are available and how data should be
     * fetched.
     */
    export interface Products {
      account_numbers?: Products.AccountNumbers;

      identity?: Products.Identity;

      transactions?: Products.Transactions;
    }

    export namespace Products {
      export interface AccountNumbers {
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

      export interface Identity {
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

      export interface Transactions {
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

export namespace LinkSession {
  export type CreateLinkSessionResponse = LinkSessionAPI.CreateLinkSessionResponse;
  export type LinkSessionCreateParams = LinkSessionAPI.LinkSessionCreateParams;
  export import ExchangeToken = ExchangeTokenAPI.ExchangeToken;
  export type ExchangeTokenResponse = ExchangeTokenAPI.ExchangeTokenResponse;
  export type ExchangeTokenCreateParams = ExchangeTokenAPI.ExchangeTokenCreateParams;
}
