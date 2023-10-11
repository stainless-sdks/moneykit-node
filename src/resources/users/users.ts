// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'moneykit/resource';
import * as AccountsAPI from 'moneykit/resources/users/accounts';
import * as TransactionsAPI from 'moneykit/resources/users/transactions';

export class Users extends APIResource {
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this.client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this.client);
}

export namespace Users {
  export import Transactions = TransactionsAPI.Transactions;
  export import GetUserTransactionsResponse = TransactionsAPI.GetUserTransactionsResponse;
  export import TransactionListParams = TransactionsAPI.TransactionListParams;
  export import Accounts = AccountsAPI.Accounts;
  export import GetUserAccountsResponse = AccountsAPI.GetUserAccountsResponse;
  export import AccountListParams = AccountsAPI.AccountListParams;
}
