// File generated from our OpenAPI spec by Stainless.

import * as Core from 'moneykit/core';
import { APIResource } from 'moneykit/resource';
import * as ProductsAPI from 'moneykit/resources/links/products';
import * as Shared from 'moneykit/resources/shared';

export class Products extends APIResource {
  /**
   * Requests an update of the provided products for the link. This is an
   * asynchronous operation. The response will be a 202 Accepted if the request was
   * successful.
   */
  create(id: string, params: ProductCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'moneykit-version': moneykitVersion, ...body } = params;
    return this.post(`/links/${id}/products`, {
      body,
      ...options,
      headers: { Accept: '', 'moneykit-version': moneykitVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface ProductCreateParams {
  /**
   * Body param: At list of at least one product to refresh.
   */
  products: Array<'accounts' | 'account_numbers' | 'identity' | 'transactions'>;

  /**
   * Header param: An enumeration.
   */
  'moneykit-version'?: Shared.SupportedVersion;
}

export namespace Products {
  export type ProductCreateParams = ProductsAPI.ProductCreateParams;
}
