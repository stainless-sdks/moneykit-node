# Shared

Types:

- <code><a href="./src/resources/shared.ts">SupportedVersion</a></code>

# Links

Types:

- <code><a href="./src/resources/links/links.ts">LinkCommon</a></code>
- <code><a href="./src/resources/links/links.ts">LinkResponse</a></code>

Methods:

- <code title="get /links/{id}">client.links.<a href="./src/resources/links/links.ts">retrieve</a>(id, { ...params }) -> SDK_Symbol_0_LinkResponse</code>
- <code title="patch /links/{id}">client.links.<a href="./src/resources/links/links.ts">update</a>(id, { ...params }) -> SDK_Symbol_1_LinkResponse</code>
- <code title="delete /links/{id}">client.links.<a href="./src/resources/links/links.ts">del</a>(id, { ...params }) -> void</code>

## Accounts

Types:

- <code><a href="./src/resources/links/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/links/accounts/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/links/accounts/accounts.ts">AccountListResponse</a></code>

Methods:

- <code title="get /links/{id}/accounts/{account_id}">client.links.accounts.<a href="./src/resources/links/accounts/accounts.ts">retrieve</a>(id, accountId, { ...params }) -> SDK_Symbol_2_AccountRetrieveResponse</code>
- <code title="get /links/{id}/accounts">client.links.accounts.<a href="./src/resources/links/accounts/accounts.ts">list</a>(id, { ...params }) -> SDK_Symbol_3_AccountListResponse</code>

### Numbers

Types:

- <code><a href="./src/resources/links/accounts/numbers.ts">NumberListResponse</a></code>

Methods:

- <code title="get /links/{id}/accounts/numbers">client.links.accounts.numbers.<a href="./src/resources/links/accounts/numbers.ts">list</a>(id, { ...params }) -> SDK_Symbol_4_NumberListResponse</code>

## Identity

Types:

- <code><a href="./src/resources/links/identity.ts">IdentityResponse</a></code>

Methods:

- <code title="get /links/{id}/identity">client.links.identity.<a href="./src/resources/links/identity.ts">retrieve</a>(id, { ...params }) -> SDK_Symbol_5_IdentityResponse</code>

## Transactions

Types:

- <code><a href="./src/resources/links/transactions.ts">GetTransactionsResponse</a></code>
- <code><a href="./src/resources/links/transactions.ts">TransactionSyncResponse</a></code>

Methods:

- <code title="get /links/{id}/transactions">client.links.transactions.<a href="./src/resources/links/transactions.ts">list</a>(id, { ...params }) -> SDK_Symbol_6_GetTransactionsResponse</code>
- <code title="get /links/{id}/transactions/sync">client.links.transactions.<a href="./src/resources/links/transactions.ts">sync</a>(id, { ...params }) -> SDK_Symbol_7_TransactionSyncResponse</code>

## Products

Methods:

- <code title="post /links/{id}/products">client.links.products.<a href="./src/resources/links/products.ts">create</a>(id, { ...params }) -> void</code>

# Auth

## Token

Types:

- <code><a href="./src/resources/auth/token.ts">GenerateAccessTokenResponse</a></code>

## Introspect

Types:

- <code><a href="./src/resources/auth/introspect.ts">IntrospectClientResponse</a></code>

Methods:

- <code title="get /auth/introspect">client.auth.introspect.<a href="./src/resources/auth/introspect.ts">retrieve</a>({ ...params }) -> SDK_Symbol_8_IntrospectClientResponse</code>

# Institutions

Types:

- <code><a href="./src/resources/institutions.ts">GetInstitutionsResponse</a></code>
- <code><a href="./src/resources/institutions.ts">Institution</a></code>

Methods:

- <code title="get /institutions/{institution_id}">client.institutions.<a href="./src/resources/institutions.ts">retrieve</a>(institutionId, { ...params }) -> SDK_Symbol_9_Institution</code>
- <code title="get /institutions">client.institutions.<a href="./src/resources/institutions.ts">list</a>({ ...params }) -> SDK_Symbol_10_GetInstitutionsResponse</code>

# LinkSession

Types:

- <code><a href="./src/resources/link-session/link-session.ts">CreateLinkSessionResponse</a></code>

Methods:

- <code title="post /link-session">client.linkSession.<a href="./src/resources/link-session/link-session.ts">create</a>({ ...params }) -> SDK_Symbol_11_CreateLinkSessionResponse</code>

## ExchangeToken

Types:

- <code><a href="./src/resources/link-session/exchange-token.ts">ExchangeTokenResponse</a></code>

Methods:

- <code title="post /link-session/exchange-token">client.linkSession.exchangeToken.<a href="./src/resources/link-session/exchange-token.ts">create</a>({ ...params }) -> SDK_Symbol_12_ExchangeTokenResponse</code>

# Users

## Transactions

Types:

- <code><a href="./src/resources/users/transactions.ts">GetUserTransactionsResponse</a></code>

Methods:

- <code title="get /users/{id}/transactions">client.users.transactions.<a href="./src/resources/users/transactions.ts">list</a>(id, { ...params }) -> SDK_Symbol_13_GetUserTransactionsResponse</code>

## Accounts

Types:

- <code><a href="./src/resources/users/accounts.ts">GetUserAccountsResponse</a></code>

Methods:

- <code title="get /users/{id}/accounts">client.users.accounts.<a href="./src/resources/users/accounts.ts">list</a>(id, { ...params }) -> SDK_Symbol_14_GetUserAccountsResponse</code>

# WellKnown

## Jwks

Types:

- <code><a href="./src/resources/well-known/jwks.ts">JwkSet</a></code>

Methods:

- <code title="get /.well-known/jwks.json">client.wellKnown.jwks.<a href="./src/resources/well-known/jwks.ts">json</a>({ ...params }) -> SDK_Symbol_15_JwkSet</code>
