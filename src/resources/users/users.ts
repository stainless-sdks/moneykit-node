// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'moneykit/resource';
import { Transactions } from './transactions';
import { Accounts } from './accounts';
import * as API from './index';

export class Users extends APIResource {
  transactions: Transactions = new Transactions(this.client);
  accounts: Accounts = new Accounts(this.client);
}

export namespace Users {
  export import Transactions = API.Transactions;
  export import GetUserTransactionsResponse = API.GetUserTransactionsResponse;
  export import TransactionListParams = API.TransactionListParams;

  export import Accounts = API.Accounts;
  export import GetUserAccountsResponse = API.GetUserAccountsResponse;
  export import AccountListParams = API.AccountListParams;
}
