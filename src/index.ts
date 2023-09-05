// File generated from our OpenAPI spec by Stainless.

import * as Core from './core';
import * as API from './resources/index';
import * as Errors from './error';
import type { Agent } from 'moneykit/_shims/agent';
import * as Uploads from './uploads';
import * as qs from 'qs';

const environments = {
  production: 'https://production.moneykit.com',
  sandbox: 'https://sandbox.moneykit.com',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Defaults to process.env["MONEYKIT_API_KEY"].
   */
  apiKey?: string;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://production.moneykit.com`
   * - `sandbox` corresponds to `https://sandbox.moneykit.com`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   */
  baseURL?: string;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Moneykit API. */
export class Moneykit extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Moneykit API.
   *
   * @param {string} [opts.apiKey=process.env['MONEYKIT_API_KEY']] - The API Key to send to the API.
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ apiKey = Core.readEnv('MONEYKIT_API_KEY'), ...opts }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Error(
        "The MONEYKIT_API_KEY environment variable is missing or empty; either provide it, or instantiate the Moneykit client with an apiKey option, like new Moneykit({ apiKey: 'my apiKey' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      environment: opts.environment ?? 'production',
    };

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;

    this.apiKey = apiKey;
  }

  links: API.Links = new API.Links(this);
  auth: API.Auth = new API.Auth(this);
  institutions: API.Institutions = new API.Institutions(this);
  linkSession: API.LinkSession = new API.LinkSession(this);
  users: API.Users = new API.Users(this);
  wellKnown: API.WellKnown = new API.WellKnown(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Moneykit = this;

  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;
}

export const {
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Moneykit {
  // Helper functions
  export import toFile = Uploads.toFile;
  export import fileFromPath = Uploads.fileFromPath;

  export import RequestOptions = Core.RequestOptions;

  export import Links = API.Links;
  export import LinkCommon = API.LinkCommon;
  export import LinkResponse = API.LinkResponse;
  export import LinkRetrieveParams = API.LinkRetrieveParams;
  export import LinkUpdateParams = API.LinkUpdateParams;
  export import LinkDeleteParams = API.LinkDeleteParams;

  export import Auth = API.Auth;

  export import Institutions = API.Institutions;
  export import GetInstitutionsResponse = API.GetInstitutionsResponse;
  export import Institution = API.Institution;
  export import InstitutionRetrieveParams = API.InstitutionRetrieveParams;
  export import InstitutionListParams = API.InstitutionListParams;

  export import LinkSession = API.LinkSession;
  export import CreateLinkSessionResponse = API.CreateLinkSessionResponse;
  export import LinkSessionCreateParams = API.LinkSessionCreateParams;

  export import Users = API.Users;

  export import WellKnown = API.WellKnown;

  export import SupportedVersion = API.SupportedVersion;
}

export default Moneykit;
