// File generated from our OpenAPI spec by Stainless.

import * as Core from 'moneykit/core';
import { APIResource } from 'moneykit/resource';
import { isRequestOptions } from 'moneykit/core';
import * as InstitutionsAPI from 'moneykit/resources/institutions';
import * as Shared from 'moneykit/resources/shared';

export class Institutions extends APIResource {
  /**
   * Fetches details about a single institution.
   */
  retrieve(
    institutionId: string,
    params?: InstitutionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Institution>;
  retrieve(institutionId: string, options?: Core.RequestOptions): Core.APIPromise<Institution>;
  retrieve(
    institutionId: string,
    params: InstitutionRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Institution> {
    if (isRequestOptions(params)) {
      return this.retrieve(institutionId, {}, params);
    }
    const { 'moneykit-version': moneykitVersion } = params;
    return this.get(`/institutions/${institutionId}`, {
      ...options,
      headers: { 'moneykit-version': moneykitVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * Fetches a list of institutions, optionally filtered by name. Results are
   * paginated.
   */
  list(
    params?: InstitutionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetInstitutionsResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<GetInstitutionsResponse>;
  list(
    params: InstitutionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetInstitutionsResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'moneykit-version': moneykitVersion, ...query } = params;
    return this.get('/institutions', {
      query,
      ...options,
      headers: { 'moneykit-version': moneykitVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface GetInstitutionsResponse {
  /**
   * Pagination information.
   */
  cursors: GetInstitutionsResponse.Cursors;

  /**
   * The list of institutions for this page.
   */
  institutions: Array<Institution>;
}

export namespace GetInstitutionsResponse {
  /**
   * Pagination information.
   */
  export interface Cursors {
    /**
     * A cursor value pointing to the next result set.
     */
    next?: string | null;
  }
}

export interface Institution {
  /**
   * The primary color of this institution, represented as hexcode.
   */
  color: string;

  /**
   * An enumeration.
   */
  country: 'US' | 'GB' | 'CA';

  /**
   * MoneyKit's unique ID for this institution.
   */
  institution_id: string;

  /**
   * Alternative institution IDs that point to this institution that can be used for
   * lookup.
   */
  institution_id_aliases: Array<string>;

  /**
   * True for institutions that should be visually promoted to the end-user.
   */
  is_featured: boolean;

  /**
   * The name of the institution.
   */
  name: string;

  /**
   * The dark-mode primary color of this institution, represented as hexcode.
   */
  color_dark?: string | null;

  /**
   * The domain of the institution's customer-facing website.
   */
  domain?: string | null;
}

export interface InstitutionRetrieveParams {
  /**
   * An enumeration.
   */
  'moneykit-version'?: Shared.SupportedVersion;
}

export interface InstitutionListParams {
  /**
   * Query param: Cursor to fetch the next set of institutions. (You get this value
   * from the previous call to `/institutions`.)
   */
  cursor?: string | null;

  /**
   * Query param: If true, returns only featured institutions.
   */
  featured?: boolean | null;

  /**
   * Query param: A limit on the number of institutions to be returned.
   */
  limit?: number;

  /**
   * Query param: If provided, returns only institutions containing this name (wholly
   * or as a prefix).
   */
  name?: string | null;

  /**
   * Header param: An enumeration.
   */
  'moneykit-version'?: Shared.SupportedVersion;
}

export namespace Institutions {
  export import GetInstitutionsResponse = InstitutionsAPI.GetInstitutionsResponse;
  export import Institution = InstitutionsAPI.Institution;
  export import InstitutionRetrieveParams = InstitutionsAPI.InstitutionRetrieveParams;
  export import InstitutionListParams = InstitutionsAPI.InstitutionListParams;
}
