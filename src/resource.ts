// File generated from our OpenAPI spec by Stainless.

import type { Moneykit } from './index';

export class APIResource {
  protected client: Moneykit;
  constructor(client: Moneykit) {
    this.client = client;

    this.get = client.get.bind(client);
    this.post = client.post.bind(client);
    this.patch = client.patch.bind(client);
    this.put = client.put.bind(client);
    this.delete = client.delete.bind(client);
    this.getAPIList = client.getAPIList.bind(client);
  }

  protected get: Moneykit['get'];
  protected post: Moneykit['post'];
  protected patch: Moneykit['patch'];
  protected put: Moneykit['put'];
  protected delete: Moneykit['delete'];
  protected getAPIList: Moneykit['getAPIList'];
}
