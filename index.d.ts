/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface GetCheckApiKeySuccessfulResponse {
  status: "success";
  /** @example {"environment_id":"2Uev1YUTqLFdvMPD3Jtrg2FX","customer_id":"2Uev1YUTqLFdvMPD3Jtrg2FX"} */
  data: {
    environment_id: string;
    /** **(⚠️ Deprecated)** Renamed to `environment_id`. */
    customer_id: string;
  };
}
export interface GetCheckApiKeyErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export interface PostForceSyncSuccessfulResponse {
  status: "success";
  data: {
    already_queued: boolean;
  };
}
export interface PostForceSyncErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostForceSyncRequestBody = object;
/** The ID of the tool whose pass-through API you want to call (e.g., `personio`). */
export declare type PostPassthroughToolApiParameterTool = string;
/** The ID of the pass-through API you want to call (some tools provide multiple). Check the endpoint description for a list of all available APIs. */
export declare type PostPassthroughToolApiParameterApi = string;
export interface PostPassthroughToolApiSuccessfulResponse {
  status: "success";
  data: {
    /**
     * The full URL of the request that we automatically assemble for you based on the specified `api`, the specified `path`, and the integration's auth credentials. You can use this to debug path-related issues (e.g., the API returning 404 errors).
     * @format url
     */
    url: string;
    /**
     * The HTTP status code returned from the remote system.
     * @format int64
     * @min -9007199254740991
     * @exclusiveMin false
     * @max 9007199254740991
     * @exclusiveMax false
     */
    status: number;
    /** The HTTP headers returned from the remote system. */
    headers: Record<string, string | string[]>;
    /**
     * The HTTP body returned from the remote system. This will either be an array or object (in the case that JSON was returned) or a string (in any other case).
     * @format any
     */
    data?: any;
  };
}
export interface PostPassthroughToolApiErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostPassthroughToolApiRequestBody = {
  /** The HTTP method (e.g., `GET`) of the request. */
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  /**
   * The path of the endpoint you want to call. We automatically prepend the base URL of the API (all base URLs are documented in the endpoint description).
   * @pattern /^\//
   */
  path: string;
  /** The headers to send with the request. Note that we automatically supply any authentication-related headers. */
  headers?: Record<string, string>;
  /**
   * The data to submit as part of the request body. This can either be an array or object (in which case we will forward it as JSON) or a string (in which case we will forward it raw).
   * @format any
   */
  data?: any;
};
export declare type DeleteIntegrationsIntegrationIdParameterIntegrationId = string;
export interface DeleteIntegrationsIntegrationIdSuccessfulResponse {
  status: "success";
  data: object;
}
export interface DeleteIntegrationsIntegrationIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type DeleteIntegrationsIntegrationIdRequestBody = object;
export declare type GetIntegrationsIntegrationIdParameterIntegrationId = string;
export interface GetIntegrationsIntegrationIdSuccessfulResponse {
  status: "success";
  /** @example {"id":"factorial:8d1hpPsbjxUkoCoa1veLZGe5","tool":{"id":"factorial","label":"Factorial","logo_url":"https://storage.googleapis.com/kombo-assets/integrations/factorial/logo.svg","icon_url":"https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg"},"category":"HRIS","status":"ACTIVE","end_user":{"organization_name":"Acme","creator_email":"example-integration-creator@acme.com","origin_id":"2DQJAUtSzzzKP9buDTvUvPk3"},"created_at":"2022-08-07T14:01:29.196Z"} */
  data: {
    id: string;
    tool: {
      /** The ID of the connected tool in Kombo (e.g. `factorial`). */
      id: string;
      label: string;
      /**
       * URL to an SVG logo of the connected tool. The logo usually contains the tool name.
       * @format url
       */
      logo_url: string;
      /**
       * URL to a square SVG icon of the connected tool.
       * @format url
       */
      icon_url: string;
    };
    category: "HRIS" | "ATS";
    status: "ACTIVE" | "INVALID" | "INACTIVE";
    end_user: {
      organization_name: string;
      /** @format email */
      creator_email: string | null;
      /** The ID you have passed initially to the connection flow to create this integration. */
      origin_id: string | null;
    };
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    created_at: string;
  };
}
export interface GetIntegrationsIntegrationIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostIntegrationsIntegrationIdRelinkParameterIntegrationId = string;
export interface PostIntegrationsIntegrationIdRelinkSuccessfulResponse {
  status: "success";
  data: {
    /** @format url */
    link: string;
  };
}
export interface PostIntegrationsIntegrationIdRelinkErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostIntegrationsIntegrationIdRelinkRequestBody = {
  /**
   * Language of the connection flow UI.
   * @default "en"
   */
  language?: "en" | "de" | "fr";
};
export declare enum GetToolsCategoryParameterCategory {
  Hris = "hris",
  Ats = "ats",
}
export interface GetToolsCategorySuccessfulResponse {
  status: "success";
  /** @example {"tools":[{"id":"factorial","label":"Factorial","assets":{"logo_url":"https://storage.googleapis.com/kombo-assets/integrations/factorial/logo.svg","icon_url":"https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg","icon_black_url":"https://storage.googleapis.com/kombo-assets/integrations/factorial/icon-black.svg"}}]} */
  data: {
    tools: {
      id: string;
      label: string;
      assets: {
        logo_url: string;
        icon_url: string;
        icon_black_url: string;
      };
    }[];
  };
}
export interface GetToolsCategoryErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export declare type GetHrisEmployeesParameterCursor = string;
/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export declare type GetHrisEmployeesParameterPageSize = number;
/**
 * Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetHrisEmployeesParameterUpdatedAfter = string;
/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export declare enum GetHrisEmployeesParameterIncludeDeleted {
  True = "true",
  False = "false",
}
/**
 * Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`.
 * @pattern /^([\da-z]{24}(,[\da-z]{24})*)?$/i
 */
export declare type GetHrisEmployeesParameterIds = string;
/** Filter by a comma-separated list of remote IDs. */
export declare type GetHrisEmployeesParameterRemoteIds = string;
/** Filter by the `employment_status` field. */
export declare enum GetHrisEmployeesParameterEmploymentStatus {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  INACTIVE = "INACTIVE",
  LEAVE = "LEAVE",
}
/** Filter by a comma-separated list of group IDs. We will return all employees that are members of _any_ of the groups. */
export declare type GetHrisEmployeesParameterGroupIds = string;
/** Filter by a comma-separated list of legal entity IDs. We will return all employees that are members of _any_ of the legal entities. */
export declare type GetHrisEmployeesParameterLegalEntityIds = string;
export interface GetHrisEmployeesSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","employee_number":"3243422","first_name":"John","last_name":"Doe","nationality":"French","display_full_name":"John Doe","job_title":"Integrations Team Lead","work_email":"john.doe@acme.com","personal_email":"john@doe.me","mobile_phone_number":"801-555-4687","ssn":"555-32-6395","tax_id":"12 345 678 901","gender":"MALE","ethnicity":"BLACK_AFRICAN_AMERICAN","marital_status":"MARRIED","employment_status":"INACTIVE","employment_type":"FULL_TIME","avatar":"https://resources.bamboohr.com/images/photo_person_150x150.png","work_location_id":"7E2gyuv6TmvtByzBxW9Sxt53","legal_entity_id":"xB32bied320csBSsl3XWdlw33","manager_id":"9pf2pxBB8VX8EQMC9aipW2Bo","home_address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"},"bank_accounts":[{"account_number":"1234567890","bank_name":"Commerzbank","bic":"COBADEFFXXX","holder_name":"John Doe","iban":"DE12345678901234567890"}],"date_of_birth":"1986-01-01T00:00:00.000Z","start_date":"2020-04-07T00:00:00.000Z","termination_date":"2022-05-20T00:00:00.000Z","remote_created_at":"2020-04-07T12:32:01.000Z","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"custom_fields":{},"remote_data":null,"employments":[{"id":"12vpXR7BeqYNWDShXRgsonnm","remote_id":"859","employee_id":"8Xk99QfVKYA6vfEafEUBdEPJ","job_title":"Social Media Marketer","pay_rate":85000,"pay_period":"YEAR","pay_frequency":"SEMIMONTHLY","pay_currency":"EUR","effective_date":"2021-01-30T00:00:00.000Z","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"remote_data":null}],"time_off_balances":[{"id":"FuyRuk5NqP3qTcThED3ymTuE","remote_id":"124123","employee_id":"2Up4ZCvq1bFVzmzXG6EWzV3j","type_id":"BQJaBxRCiqN46G27VTegvkEr","balance":14,"balance_unit":"DAYS","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"used":3,"used_unit":"DAYS","remote_data":null}],"manager":{"first_name":"John","last_name":"Doe","id":"26vafvWSRmbhNcxJYqjCzuJg","work_email":"john.doe@acme.com","remote_id":"32"},"groups":[{"id":"4B9bKBpX5tnwjiG93TAqF7ci","remote_id":"49","name":"Customer Success","type":"TEAM"}],"legal_entity":{"id":"4B9bKBpX5tnwjiG93TAqF7ci","remote_id":"49","name":"ACME Inc.","address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin, Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"}},"teams":[{"id":"4B9bKBpX5tnwjiG93TAqF7ci","remote_id":"49","name":"Customer Success","type":"TEAM"}],"work_location":{"id":"22st2Ji8XpncEYEak8mvQgQF","remote_id":"1348","name":"Kombo HQ","address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin, Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"},"type":"OFFICE","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":"2022-08-07T14:01:29.196Z","remote_data":null}}]} */
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: ({
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** An optional, organization-internal employee number. */
      employee_number: string | null;
      /** The employee’s first name. */
      first_name: string | null;
      /** The employee’s last name. */
      last_name: string | null;
      /** The employee’s nationality. */
      nationality: string | null;
      /** The employee’s full name, including middle names. Not all HR systems provide an explicit display name, so we recommend falling back to `first_name` and `last_name`. */
      display_full_name: string | null;
      /** The employee’s job title. */
      job_title: string | null;
      /**
       * The employee’s work email address. If the email address is invalid, we will set this to `null`.
       * @format email
       */
      work_email: string | null;
      /**
       * The employee’s personal email address. If the email address is invalid, we will set this to `null`.
       * @format email
       */
      personal_email: string | null;
      mobile_phone_number: string | null;
      /** Social security number */
      ssn: string | null;
      tax_id: string | null;
      /** One of 4 standardized values (`MALE`, `FEMALE`, `NON_BINARY`, or `NOT_SPECIFIED`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
      gender: "MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED" | string | null;
      /** One of 8 standardized values (`WHITE`, `ASIAN`, `HISPANIC_LATINO`, `HAWAIIAN`, `NATIVE_AMERICAN`, `BLACK_AFRICAN_AMERICAN`, `MULTIPLE_ETHNICITIES`, or `DECLINE_TO_SPECIFY`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
      ethnicity:
        | "WHITE"
        | "ASIAN"
        | "HISPANIC_LATINO"
        | "HAWAIIAN"
        | "NATIVE_AMERICAN"
        | "BLACK_AFRICAN_AMERICAN"
        | "MULTIPLE_ETHNICITIES"
        | "DECLINE_TO_SPECIFY"
        | string
        | null;
      /** One of 7 standardized values (`SINGLE`, `MARRIED`, `DOMESTIC_PARTNERSHIP`, `WIDOWED`, `DIVORCED`, `SEPARATED`, or `NOT_MARRIED`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
      marital_status:
        | "SINGLE"
        | "MARRIED"
        | "DOMESTIC_PARTNERSHIP"
        | "WIDOWED"
        | "DIVORCED"
        | "SEPARATED"
        | "NOT_MARRIED"
        | string
        | null;
      /** One of 4 standardized values (`ACTIVE`, `PENDING`, `INACTIVE`, or `LEAVE`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
      employment_status: "ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE" | string | null;
      /** One of 8 standardized values (`FULL_TIME`, `PART_TIME`, `CONTRACT`, `INTERNSHIP`, `FREELANCE`, `WORKING_STUDENT`, `APPRENTICESHIP`, or `TRAINING`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
      employment_type:
        | "FULL_TIME"
        | "PART_TIME"
        | "CONTRACT"
        | "INTERNSHIP"
        | "FREELANCE"
        | "WORKING_STUDENT"
        | "APPRENTICESHIP"
        | "TRAINING"
        | string
        | null;
      /** URL to the employee’s avatar. This is either the raw URL from the HR system (in cases where it can be requested without short-lived authentication) _or_ a URL to a temporarily cached version of the file hosted by Kombo. Kombo will delete the cached file after its deletion in the source system. */
      avatar: string | null;
      /** The ID of the employee’s work location. Can be used to retrieve the work location from the `hris_locations` endpoint. */
      work_location_id: string | null;
      /** The ID of the employee’s legal entity. */
      legal_entity_id: string | null;
      manager_id: string | null;
      home_address: {
        /** @default null */
        city?: string | null;
        /**
         * Contains the ISO2 country code if possible. If not, it contains the original value.
         * @default null
         */
        country?: string | null;
        /** @default null */
        raw?: string | null;
        /** @default null */
        state?: string | null;
        /** @default null */
        street_1?: string | null;
        /** @default null */
        street_2?: string | null;
        /** @default null */
        zip_code?: string | null;
      };
      bank_accounts: {
        /**
         * The bank-specific account number. Some companies use the account number field to put the IBAN here.
         * @default null
         */
        account_number?: string | null;
        /**
         * The name of the bank behind this account.
         * @default null
         */
        bank_name?: string | null;
        /**
         * The internationally unique BIC/SWIFT code identifying the bank behind this account.
         * @default null
         */
        bic?: string | null;
        /**
         * The name of the holder of this account.
         * @default null
         */
        holder_name?: string | null;
        /**
         * The internationally unique IBAN identifying this account.
         * @default null
         */
        iban?: string | null;
      }[];
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      date_of_birth: string | null;
      /**
       * The date the employee started working for the organization.
       * @format date-time
       */
      start_date: string | null;
      /**
       * The where the employment ends. Can be in the past or future.
       * @format date-time
       */
      termination_date: string | null;
      /**
       * The date and time the object was created in the remote system.
       * @format date-time
       */
      remote_created_at: string | null;
      /**
       * The timestamp when this object was last changed. This value is tracked by Kombo based on changes in the data.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      custom_fields: Record<string, any>;
      remote_data: Record<string, any>;
    } & {
      employments: {
        id: string;
        remote_id: string | null;
        employee_id: string;
        /** **(⚠️ Deprecated)** We now provide the `job_title` directly on the employee model. */
        job_title: string | null;
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        pay_rate: number | null;
        /** One of 10 standardized values (`HOUR`, `DAY`, `WEEK`, `TWO_WEEKS`, `HALF_MONTH`, `MONTH`, `TWO_MONTHS`, `QUARTER`, `HALF_YEAR`, or `YEAR`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
        pay_period:
          | "HOUR"
          | "DAY"
          | "WEEK"
          | "TWO_WEEKS"
          | "HALF_MONTH"
          | "MONTH"
          | "TWO_MONTHS"
          | "QUARTER"
          | "HALF_YEAR"
          | "YEAR"
          | string
          | null;
        /** One of 8 standardized values (`WEEKLY`, `BIWEEKLY`, `MONTHLY`, `SEMIMONTHLY`, `QUARTERLY`, `SEMIANNUALLY`, `ANNUALLY`, or `PRO_RATA`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
        pay_frequency:
          | "WEEKLY"
          | "BIWEEKLY"
          | "MONTHLY"
          | "SEMIMONTHLY"
          | "QUARTERLY"
          | "SEMIANNUALLY"
          | "ANNUALLY"
          | "PRO_RATA"
          | string
          | null;
        /** Pay currency usually returned in [ISO 4217 currency codes](https://www.iso.org/iso-4217-currency-codes.html). */
        pay_currency: string | null;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        effective_date: string | null;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        changed_at: string;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        remote_deleted_at: string | null;
        remote_data: Record<string, any>;
      }[];
      time_off_balances: {
        id: string;
        remote_id: string | null;
        employee_id: string;
        type_id: string;
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        balance: number | null;
        balance_unit: "HOURS" | "DAYS" | null;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        changed_at: string;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        remote_deleted_at: string | null;
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        used: number | null;
        used_unit: "HOURS" | "DAYS" | null;
        remote_data: Record<string, any>;
      }[];
      /** @example {"first_name":"John","last_name":"Doe","id":"26vafvWSRmbhNcxJYqjCzuJg","work_email":"john.doe@acme.com","remote_id":"32"} */
      manager: {
        /** The employee’s first name. */
        first_name: string | null;
        /** The employee’s last name. */
        last_name: string | null;
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /**
         * The employee’s work email address. If the email address is invalid, we will set this to `null`.
         * @format email
         */
        work_email: string | null;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
      };
      groups: {
        id: string;
        remote_id: string;
        name: string | null;
        /** Type of the group. Can be any of `DEPARTMENT`, `TEAM`, and `COST_CENTER` */
        type: "DEPARTMENT" | "TEAM" | "COST_CENTER" | null;
      }[];
      /** @example {"id":"4B9bKBpX5tnwjiG93TAqF7ci","remote_id":"49","name":"ACME Inc.","address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin, Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"}} */
      legal_entity: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        name: string | null;
        address: {
          /** @default null */
          city?: string | null;
          /**
           * Contains the ISO2 country code if possible. If not, it contains the original value.
           * @default null
           */
          country?: string | null;
          /** @default null */
          raw?: string | null;
          /** @default null */
          state?: string | null;
          /** @default null */
          street_1?: string | null;
          /** @default null */
          street_2?: string | null;
          /** @default null */
          zip_code?: string | null;
        };
      };
      /** **(⚠️ Deprecated)** Please use the `groups` field. It includes the same data and the naming is less confusing. */
      teams: {
        id: string;
        remote_id: string;
        name: string | null;
        /** Type of the group. Can be any of `DEPARTMENT`, `TEAM`, and `COST_CENTER` */
        type: "DEPARTMENT" | "TEAM" | "COST_CENTER" | null;
      }[];
      /** @example {"id":"22st2Ji8XpncEYEak8mvQgQF","remote_id":"1348","name":"Kombo HQ","address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin, Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"},"type":"OFFICE","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":"2022-08-07T14:01:29.196Z","remote_data":null} */
      work_location: {
        id: string;
        remote_id: string | null;
        name: string | null;
        address: {
          /** @default null */
          city?: string | null;
          /**
           * Contains the ISO2 country code if possible. If not, it contains the original value.
           * @default null
           */
          country?: string | null;
          /** @default null */
          raw?: string | null;
          /** @default null */
          state?: string | null;
          /** @default null */
          street_1?: string | null;
          /** @default null */
          street_2?: string | null;
          /** @default null */
          zip_code?: string | null;
        };
        type: string | null;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        changed_at: string;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        remote_deleted_at: string | null;
        remote_data: Record<string, any>;
      };
    })[];
  };
}
export interface GetHrisEmployeesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export interface PostHrisEmployeesSuccessfulResponse {
  status: "success";
  /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","employee_number":"3243422","first_name":"John","last_name":"Doe","nationality":"French","display_full_name":"John Doe","job_title":"Integrations Team Lead","work_email":"john.doe@acme.com","personal_email":"john@doe.me","mobile_phone_number":"801-555-4687","ssn":"555-32-6395","tax_id":"12 345 678 901","gender":"MALE","ethnicity":"BLACK_AFRICAN_AMERICAN","marital_status":"MARRIED","employment_status":"INACTIVE","employment_type":"FULL_TIME","avatar":"https://resources.bamboohr.com/images/photo_person_150x150.png","work_location_id":"7E2gyuv6TmvtByzBxW9Sxt53","legal_entity_id":"xB32bied320csBSsl3XWdlw33","manager_id":"9pf2pxBB8VX8EQMC9aipW2Bo","home_address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"},"bank_accounts":[{"account_number":"1234567890","bank_name":"Commerzbank","bic":"COBADEFFXXX","holder_name":"John Doe","iban":"DE12345678901234567890"}],"date_of_birth":"1986-01-01T00:00:00.000Z","start_date":"2020-04-07T00:00:00.000Z","termination_date":"2022-05-20T00:00:00.000Z","remote_created_at":"2020-04-07T12:32:01.000Z","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"custom_fields":{},"remote_data":null} */
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
    remote_id: string;
    /** An optional, organization-internal employee number. */
    employee_number: string | null;
    /** The employee’s first name. */
    first_name: string | null;
    /** The employee’s last name. */
    last_name: string | null;
    /** The employee’s nationality. */
    nationality: string | null;
    /** The employee’s full name, including middle names. Not all HR systems provide an explicit display name, so we recommend falling back to `first_name` and `last_name`. */
    display_full_name: string | null;
    /** The employee’s job title. */
    job_title: string | null;
    /**
     * The employee’s work email address. If the email address is invalid, we will set this to `null`.
     * @format email
     */
    work_email: string | null;
    /**
     * The employee’s personal email address. If the email address is invalid, we will set this to `null`.
     * @format email
     */
    personal_email: string | null;
    mobile_phone_number: string | null;
    /** Social security number */
    ssn: string | null;
    tax_id: string | null;
    /** One of 4 standardized values (`MALE`, `FEMALE`, `NON_BINARY`, or `NOT_SPECIFIED`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
    gender: "MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED" | string | null;
    /** One of 8 standardized values (`WHITE`, `ASIAN`, `HISPANIC_LATINO`, `HAWAIIAN`, `NATIVE_AMERICAN`, `BLACK_AFRICAN_AMERICAN`, `MULTIPLE_ETHNICITIES`, or `DECLINE_TO_SPECIFY`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
    ethnicity:
      | "WHITE"
      | "ASIAN"
      | "HISPANIC_LATINO"
      | "HAWAIIAN"
      | "NATIVE_AMERICAN"
      | "BLACK_AFRICAN_AMERICAN"
      | "MULTIPLE_ETHNICITIES"
      | "DECLINE_TO_SPECIFY"
      | string
      | null;
    /** One of 7 standardized values (`SINGLE`, `MARRIED`, `DOMESTIC_PARTNERSHIP`, `WIDOWED`, `DIVORCED`, `SEPARATED`, or `NOT_MARRIED`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
    marital_status:
      | "SINGLE"
      | "MARRIED"
      | "DOMESTIC_PARTNERSHIP"
      | "WIDOWED"
      | "DIVORCED"
      | "SEPARATED"
      | "NOT_MARRIED"
      | string
      | null;
    /** One of 4 standardized values (`ACTIVE`, `PENDING`, `INACTIVE`, or `LEAVE`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
    employment_status: "ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE" | string | null;
    /** One of 8 standardized values (`FULL_TIME`, `PART_TIME`, `CONTRACT`, `INTERNSHIP`, `FREELANCE`, `WORKING_STUDENT`, `APPRENTICESHIP`, or `TRAINING`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
    employment_type:
      | "FULL_TIME"
      | "PART_TIME"
      | "CONTRACT"
      | "INTERNSHIP"
      | "FREELANCE"
      | "WORKING_STUDENT"
      | "APPRENTICESHIP"
      | "TRAINING"
      | string
      | null;
    /** URL to the employee’s avatar. This is either the raw URL from the HR system (in cases where it can be requested without short-lived authentication) _or_ a URL to a temporarily cached version of the file hosted by Kombo. Kombo will delete the cached file after its deletion in the source system. */
    avatar: string | null;
    /** The ID of the employee’s work location. Can be used to retrieve the work location from the `hris_locations` endpoint. */
    work_location_id: string | null;
    /** The ID of the employee’s legal entity. */
    legal_entity_id: string | null;
    manager_id: string | null;
    home_address: {
      /** @default null */
      city?: string | null;
      /**
       * Contains the ISO2 country code if possible. If not, it contains the original value.
       * @default null
       */
      country?: string | null;
      /** @default null */
      raw?: string | null;
      /** @default null */
      state?: string | null;
      /** @default null */
      street_1?: string | null;
      /** @default null */
      street_2?: string | null;
      /** @default null */
      zip_code?: string | null;
    };
    bank_accounts: {
      /**
       * The bank-specific account number. Some companies use the account number field to put the IBAN here.
       * @default null
       */
      account_number?: string | null;
      /**
       * The name of the bank behind this account.
       * @default null
       */
      bank_name?: string | null;
      /**
       * The internationally unique BIC/SWIFT code identifying the bank behind this account.
       * @default null
       */
      bic?: string | null;
      /**
       * The name of the holder of this account.
       * @default null
       */
      holder_name?: string | null;
      /**
       * The internationally unique IBAN identifying this account.
       * @default null
       */
      iban?: string | null;
    }[];
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    date_of_birth: string | null;
    /**
     * The date the employee started working for the organization.
     * @format date-time
     */
    start_date: string | null;
    /**
     * The where the employment ends. Can be in the past or future.
     * @format date-time
     */
    termination_date: string | null;
    /**
     * The date and time the object was created in the remote system.
     * @format date-time
     */
    remote_created_at: string | null;
    /**
     * The timestamp when this object was last changed. This value is tracked by Kombo based on changes in the data.
     * @format date-time
     */
    changed_at: string;
    /**
     * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
     * @format date-time
     */
    remote_deleted_at: string | null;
    custom_fields: Record<string, any>;
    remote_data: Record<string, any>;
  };
}
export interface PostHrisEmployeesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostHrisEmployeesRequestBody = {
  first_name: string;
  last_name: string;
  /** @format email */
  work_email: string;
  /** The gender of the employee. */
  gender?: "MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED";
  /** Title of the position this person is working in. */
  job_title?: string;
  /** Nested object of the home address. */
  home_address?: {
    street_1?: string;
    street_2?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    /**
     * The uppercase two-letter ISO country (e.g., `DE`) of the applicant. For systems that have other formats than `ISO 3166-1 alpha-2` codes, Kombo transforms the ISO Codes to the appropriate value.
     * @pattern /^[A-Z]{2}$/
     */
    country?: string;
  };
  /**
   * YYYY-MM-DDTHH:mm:ss.sssZ
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  date_of_birth?: string;
  /**
   * Start date of the employee. Also considered to be the hire date.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  start_date?: string;
};
/** ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`) */
export declare type PatchHrisEmployeesEmployeeIdParameterEmployeeId = string;
export interface PatchHrisEmployeesEmployeeIdSuccessfulResponse {
  status: "success";
  /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","employee_number":"3243422","first_name":"John","last_name":"Doe","nationality":"French","display_full_name":"John Doe","job_title":"Integrations Team Lead","work_email":"john.doe@acme.com","personal_email":"john@doe.me","mobile_phone_number":"801-555-4687","ssn":"555-32-6395","tax_id":"12 345 678 901","gender":"MALE","ethnicity":"BLACK_AFRICAN_AMERICAN","marital_status":"MARRIED","employment_status":"INACTIVE","employment_type":"FULL_TIME","avatar":"https://resources.bamboohr.com/images/photo_person_150x150.png","work_location_id":"7E2gyuv6TmvtByzBxW9Sxt53","legal_entity_id":"xB32bied320csBSsl3XWdlw33","manager_id":"9pf2pxBB8VX8EQMC9aipW2Bo","home_address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"},"bank_accounts":[{"account_number":"1234567890","bank_name":"Commerzbank","bic":"COBADEFFXXX","holder_name":"John Doe","iban":"DE12345678901234567890"}],"date_of_birth":"1986-01-01T00:00:00.000Z","start_date":"2020-04-07T00:00:00.000Z","termination_date":"2022-05-20T00:00:00.000Z","remote_created_at":"2020-04-07T12:32:01.000Z","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"custom_fields":{},"remote_data":null} */
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
    remote_id: string;
    /** An optional, organization-internal employee number. */
    employee_number: string | null;
    /** The employee’s first name. */
    first_name: string | null;
    /** The employee’s last name. */
    last_name: string | null;
    /** The employee’s nationality. */
    nationality: string | null;
    /** The employee’s full name, including middle names. Not all HR systems provide an explicit display name, so we recommend falling back to `first_name` and `last_name`. */
    display_full_name: string | null;
    /** The employee’s job title. */
    job_title: string | null;
    /**
     * The employee’s work email address. If the email address is invalid, we will set this to `null`.
     * @format email
     */
    work_email: string | null;
    /**
     * The employee’s personal email address. If the email address is invalid, we will set this to `null`.
     * @format email
     */
    personal_email: string | null;
    mobile_phone_number: string | null;
    /** Social security number */
    ssn: string | null;
    tax_id: string | null;
    /** One of 4 standardized values (`MALE`, `FEMALE`, `NON_BINARY`, or `NOT_SPECIFIED`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
    gender: "MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED" | string | null;
    /** One of 8 standardized values (`WHITE`, `ASIAN`, `HISPANIC_LATINO`, `HAWAIIAN`, `NATIVE_AMERICAN`, `BLACK_AFRICAN_AMERICAN`, `MULTIPLE_ETHNICITIES`, or `DECLINE_TO_SPECIFY`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
    ethnicity:
      | "WHITE"
      | "ASIAN"
      | "HISPANIC_LATINO"
      | "HAWAIIAN"
      | "NATIVE_AMERICAN"
      | "BLACK_AFRICAN_AMERICAN"
      | "MULTIPLE_ETHNICITIES"
      | "DECLINE_TO_SPECIFY"
      | string
      | null;
    /** One of 7 standardized values (`SINGLE`, `MARRIED`, `DOMESTIC_PARTNERSHIP`, `WIDOWED`, `DIVORCED`, `SEPARATED`, or `NOT_MARRIED`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
    marital_status:
      | "SINGLE"
      | "MARRIED"
      | "DOMESTIC_PARTNERSHIP"
      | "WIDOWED"
      | "DIVORCED"
      | "SEPARATED"
      | "NOT_MARRIED"
      | string
      | null;
    /** One of 4 standardized values (`ACTIVE`, `PENDING`, `INACTIVE`, or `LEAVE`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
    employment_status: "ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE" | string | null;
    /** One of 8 standardized values (`FULL_TIME`, `PART_TIME`, `CONTRACT`, `INTERNSHIP`, `FREELANCE`, `WORKING_STUDENT`, `APPRENTICESHIP`, or `TRAINING`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
    employment_type:
      | "FULL_TIME"
      | "PART_TIME"
      | "CONTRACT"
      | "INTERNSHIP"
      | "FREELANCE"
      | "WORKING_STUDENT"
      | "APPRENTICESHIP"
      | "TRAINING"
      | string
      | null;
    /** URL to the employee’s avatar. This is either the raw URL from the HR system (in cases where it can be requested without short-lived authentication) _or_ a URL to a temporarily cached version of the file hosted by Kombo. Kombo will delete the cached file after its deletion in the source system. */
    avatar: string | null;
    /** The ID of the employee’s work location. Can be used to retrieve the work location from the `hris_locations` endpoint. */
    work_location_id: string | null;
    /** The ID of the employee’s legal entity. */
    legal_entity_id: string | null;
    manager_id: string | null;
    home_address: {
      /** @default null */
      city?: string | null;
      /**
       * Contains the ISO2 country code if possible. If not, it contains the original value.
       * @default null
       */
      country?: string | null;
      /** @default null */
      raw?: string | null;
      /** @default null */
      state?: string | null;
      /** @default null */
      street_1?: string | null;
      /** @default null */
      street_2?: string | null;
      /** @default null */
      zip_code?: string | null;
    };
    bank_accounts: {
      /**
       * The bank-specific account number. Some companies use the account number field to put the IBAN here.
       * @default null
       */
      account_number?: string | null;
      /**
       * The name of the bank behind this account.
       * @default null
       */
      bank_name?: string | null;
      /**
       * The internationally unique BIC/SWIFT code identifying the bank behind this account.
       * @default null
       */
      bic?: string | null;
      /**
       * The name of the holder of this account.
       * @default null
       */
      holder_name?: string | null;
      /**
       * The internationally unique IBAN identifying this account.
       * @default null
       */
      iban?: string | null;
    }[];
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    date_of_birth: string | null;
    /**
     * The date the employee started working for the organization.
     * @format date-time
     */
    start_date: string | null;
    /**
     * The where the employment ends. Can be in the past or future.
     * @format date-time
     */
    termination_date: string | null;
    /**
     * The date and time the object was created in the remote system.
     * @format date-time
     */
    remote_created_at: string | null;
    /**
     * The timestamp when this object was last changed. This value is tracked by Kombo based on changes in the data.
     * @format date-time
     */
    changed_at: string;
    /**
     * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
     * @format date-time
     */
    remote_deleted_at: string | null;
    custom_fields: Record<string, any>;
    remote_data: Record<string, any>;
  };
}
export interface PatchHrisEmployeesEmployeeIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PatchHrisEmployeesEmployeeIdRequestBody = {
  first_name: string;
  last_name: string;
  /** @format email */
  work_email: string;
  /** The gender of the employee. */
  gender?: "MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED";
  /** Title of the position this person is working in. */
  job_title?: string;
  /** Nested object of the home address. */
  home_address?: {
    street_1?: string;
    street_2?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    /**
     * The uppercase two-letter ISO country (e.g., `DE`) of the applicant. For systems that have other formats than `ISO 3166-1 alpha-2` codes, Kombo transforms the ISO Codes to the appropriate value.
     * @pattern /^[A-Z]{2}$/
     */
    country?: string;
  };
  /**
   * YYYY-MM-DDTHH:mm:ss.sssZ
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  date_of_birth?: string;
  /**
   * Start date of the employee. Also considered to be the hire date.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  start_date?: string;
} & {
  /** Social security number of the employee. */
  ssn?: string;
  /** Marital status of an employee. */
  marital_status?: "SINGLE" | "MARRIED" | "DOMESTIC_PARTNERSHIP" | "WIDOWED" | "DIVORCED" | "SEPARATED" | "NOT_MARRIED";
  /**
   * Date on which the employment ends.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  termination_date?: string;
  /** Tax ID of the employee. Most contries have different formats of that. In Germany, this is the `Steuer ID` and in the US it's the `TIN`. */
  tax_id?: string;
};
export declare type PostHrisEmployeesEmployeeIdAttachmentsParameterEmployeeId = string;
export interface PostHrisEmployeesEmployeeIdAttachmentsSuccessfulResponse {
  status: "success";
  data: object;
}
export interface PostHrisEmployeesEmployeeIdAttachmentsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostHrisEmployeesEmployeeIdAttachmentsRequestBody = object;
/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export declare type GetHrisTeamsParameterCursor = string;
/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export declare type GetHrisTeamsParameterPageSize = number;
/**
 * Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetHrisTeamsParameterUpdatedAfter = string;
/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export declare enum GetHrisTeamsParameterIncludeDeleted {
  True = "true",
  False = "false",
}
/**
 * Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`.
 * @pattern /^([\da-z]{24}(,[\da-z]{24})*)?$/i
 */
export declare type GetHrisTeamsParameterIds = string;
/** Filter by a comma-separated list of remote IDs. */
export declare type GetHrisTeamsParameterRemoteIds = string;
export interface GetHrisTeamsSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"4B9bKBpX5tnwjiG93TAqF7ci","name":"Customer Success","remote_id":"49","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"type":"TEAM","remote_data":null}]} */
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      id: string;
      name: string | null;
      remote_id: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      changed_at: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      remote_deleted_at: string | null;
      /** Type of the group. Can be any of `DEPARTMENT`, `TEAM`, and `COST_CENTER` */
      type: "DEPARTMENT" | "TEAM" | "COST_CENTER" | null;
      remote_data: Record<string, any>;
    }[];
  };
}
export interface GetHrisTeamsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export declare type GetHrisGroupsParameterCursor = string;
/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export declare type GetHrisGroupsParameterPageSize = number;
/**
 * Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetHrisGroupsParameterUpdatedAfter = string;
/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export declare enum GetHrisGroupsParameterIncludeDeleted {
  True = "true",
  False = "false",
}
/**
 * Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`.
 * @pattern /^([\da-z]{24}(,[\da-z]{24})*)?$/i
 */
export declare type GetHrisGroupsParameterIds = string;
/** Filter by a comma-separated list of remote IDs. */
export declare type GetHrisGroupsParameterRemoteIds = string;
export interface GetHrisGroupsSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"4B9bKBpX5tnwjiG93TAqF7ci","name":"Customer Success","remote_id":"49","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"type":"TEAM","remote_data":null}]} */
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      id: string;
      name: string | null;
      remote_id: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      changed_at: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      remote_deleted_at: string | null;
      /** Type of the group. Can be any of `DEPARTMENT`, `TEAM`, and `COST_CENTER` */
      type: "DEPARTMENT" | "TEAM" | "COST_CENTER" | null;
      remote_data: Record<string, any>;
    }[];
  };
}
export interface GetHrisGroupsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export declare type GetHrisEmploymentsParameterCursor = string;
/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export declare type GetHrisEmploymentsParameterPageSize = number;
/**
 * Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetHrisEmploymentsParameterUpdatedAfter = string;
/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export declare enum GetHrisEmploymentsParameterIncludeDeleted {
  True = "true",
  False = "false",
}
/**
 * Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`.
 * @pattern /^([\da-z]{24}(,[\da-z]{24})*)?$/i
 */
export declare type GetHrisEmploymentsParameterIds = string;
/** Filter by a comma-separated list of remote IDs. */
export declare type GetHrisEmploymentsParameterRemoteIds = string;
export interface GetHrisEmploymentsSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"12vpXR7BeqYNWDShXRgsonnm","remote_id":"859","employee_id":"8Xk99QfVKYA6vfEafEUBdEPJ","job_title":"Social Media Marketer","pay_rate":85000,"pay_period":"YEAR","pay_frequency":"SEMIMONTHLY","pay_currency":"EUR","effective_date":"2021-01-30T00:00:00.000Z","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"remote_data":null}]} */
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      id: string;
      remote_id: string | null;
      employee_id: string;
      /** **(⚠️ Deprecated)** We now provide the `job_title` directly on the employee model. */
      job_title: string | null;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      pay_rate: number | null;
      /** One of 10 standardized values (`HOUR`, `DAY`, `WEEK`, `TWO_WEEKS`, `HALF_MONTH`, `MONTH`, `TWO_MONTHS`, `QUARTER`, `HALF_YEAR`, or `YEAR`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
      pay_period:
        | "HOUR"
        | "DAY"
        | "WEEK"
        | "TWO_WEEKS"
        | "HALF_MONTH"
        | "MONTH"
        | "TWO_MONTHS"
        | "QUARTER"
        | "HALF_YEAR"
        | "YEAR"
        | string
        | null;
      /** One of 8 standardized values (`WEEKLY`, `BIWEEKLY`, `MONTHLY`, `SEMIMONTHLY`, `QUARTERLY`, `SEMIANNUALLY`, `ANNUALLY`, or `PRO_RATA`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
      pay_frequency:
        | "WEEKLY"
        | "BIWEEKLY"
        | "MONTHLY"
        | "SEMIMONTHLY"
        | "QUARTERLY"
        | "SEMIANNUALLY"
        | "ANNUALLY"
        | "PRO_RATA"
        | string
        | null;
      /** Pay currency usually returned in [ISO 4217 currency codes](https://www.iso.org/iso-4217-currency-codes.html). */
      pay_currency: string | null;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      effective_date: string | null;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      changed_at: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      remote_deleted_at: string | null;
      remote_data: Record<string, any>;
    }[];
  };
}
export interface GetHrisEmploymentsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export declare type GetHrisLocationsParameterCursor = string;
/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export declare type GetHrisLocationsParameterPageSize = number;
/**
 * Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetHrisLocationsParameterUpdatedAfter = string;
/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export declare enum GetHrisLocationsParameterIncludeDeleted {
  True = "true",
  False = "false",
}
/**
 * Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`.
 * @pattern /^([\da-z]{24}(,[\da-z]{24})*)?$/i
 */
export declare type GetHrisLocationsParameterIds = string;
/** Filter by a comma-separated list of remote IDs. */
export declare type GetHrisLocationsParameterRemoteIds = string;
export interface GetHrisLocationsSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"22st2Ji8XpncEYEak8mvQgQF","remote_id":"1348","name":"Kombo HQ","address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin, Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"},"type":"OFFICE","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":"2022-08-07T14:01:29.196Z","remote_data":null}]} */
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      id: string;
      remote_id: string | null;
      name: string | null;
      address: {
        /** @default null */
        city?: string | null;
        /**
         * Contains the ISO2 country code if possible. If not, it contains the original value.
         * @default null
         */
        country?: string | null;
        /** @default null */
        raw?: string | null;
        /** @default null */
        state?: string | null;
        /** @default null */
        street_1?: string | null;
        /** @default null */
        street_2?: string | null;
        /** @default null */
        zip_code?: string | null;
      };
      type: string | null;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      changed_at: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      remote_deleted_at: string | null;
      remote_data: Record<string, any>;
    }[];
  };
}
export interface GetHrisLocationsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export declare type GetHrisAbsenceTypesParameterCursor = string;
/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export declare type GetHrisAbsenceTypesParameterPageSize = number;
/**
 * Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetHrisAbsenceTypesParameterUpdatedAfter = string;
/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export declare enum GetHrisAbsenceTypesParameterIncludeDeleted {
  True = "true",
  False = "false",
}
/**
 * Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`.
 * @pattern /^([\da-z]{24}(,[\da-z]{24})*)?$/i
 */
export declare type GetHrisAbsenceTypesParameterIds = string;
/** Filter by a comma-separated list of remote IDs. */
export declare type GetHrisAbsenceTypesParameterRemoteIds = string;
export interface GetHrisAbsenceTypesSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"xzZoKssDaMZAd62kxayzzQvD","name":"Vacation","unit":"DAYS","half_days_supported":true,"exact_times_supported":false,"remote_id":"91","remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null}]} */
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      id: string;
      name: string | null;
      unit: "HOURS" | "DAYS" | null;
      /** Whether the integration supports half-day absences (represented through `start_half_day` and `end_half_day`) for this absence type. */
      half_days_supported: boolean | null;
      /** `true` if the system supports exact times (absences with a `start_time` and an `end_time`) for this absence, `false` if not. */
      exact_times_supported: boolean | null;
      remote_id: string;
      remote_data: Record<string, any>;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      changed_at: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      remote_deleted_at: string | null;
    }[];
  };
}
export interface GetHrisAbsenceTypesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export declare type GetHrisTimeOffBalancesParameterCursor = string;
/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export declare type GetHrisTimeOffBalancesParameterPageSize = number;
/**
 * Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetHrisTimeOffBalancesParameterUpdatedAfter = string;
/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export declare enum GetHrisTimeOffBalancesParameterIncludeDeleted {
  True = "true",
  False = "false",
}
/**
 * Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`.
 * @pattern /^([\da-z]{24}(,[\da-z]{24})*)?$/i
 */
export declare type GetHrisTimeOffBalancesParameterIds = string;
/** Filter by a comma-separated list of remote IDs. */
export declare type GetHrisTimeOffBalancesParameterRemoteIds = string;
/** Filter by a specific employee using their ID. */
export declare type GetHrisTimeOffBalancesParameterEmployeeId = string;
export interface GetHrisTimeOffBalancesSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"FuyRuk5NqP3qTcThED3ymTuE","remote_id":"124123","employee_id":"2Up4ZCvq1bFVzmzXG6EWzV3j","type_id":"BQJaBxRCiqN46G27VTegvkEr","balance":14,"balance_unit":"DAYS","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"used":3,"used_unit":"DAYS","remote_data":null,"type":{"id":"xzZoKssDaMZAd62kxayzzQvD","name":"Vacation","unit":"DAYS","half_days_supported":true,"exact_times_supported":false,"remote_id":"91","remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null}}]} */
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: ({
      id: string;
      remote_id: string | null;
      employee_id: string;
      type_id: string;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      balance: number | null;
      balance_unit: "HOURS" | "DAYS" | null;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      changed_at: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      remote_deleted_at: string | null;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      used: number | null;
      used_unit: "HOURS" | "DAYS" | null;
      remote_data: Record<string, any>;
    } & {
      /** @example {"id":"xzZoKssDaMZAd62kxayzzQvD","name":"Vacation","unit":"DAYS","half_days_supported":true,"exact_times_supported":false,"remote_id":"91","remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null} */
      type: {
        id: string;
        name: string | null;
        unit: "HOURS" | "DAYS" | null;
        /** Whether the integration supports half-day absences (represented through `start_half_day` and `end_half_day`) for this absence type. */
        half_days_supported: boolean | null;
        /** `true` if the system supports exact times (absences with a `start_time` and an `end_time`) for this absence, `false` if not. */
        exact_times_supported: boolean | null;
        remote_id: string;
        remote_data: Record<string, any>;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        changed_at: string;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        remote_deleted_at: string | null;
      };
    })[];
  };
}
export interface GetHrisTimeOffBalancesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export declare type GetHrisAbsencesParameterCursor = string;
/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export declare type GetHrisAbsencesParameterPageSize = number;
/**
 * Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetHrisAbsencesParameterUpdatedAfter = string;
/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export declare enum GetHrisAbsencesParameterIncludeDeleted {
  True = "true",
  False = "false",
}
/**
 * Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`.
 * @pattern /^([\da-z]{24}(,[\da-z]{24})*)?$/i
 */
export declare type GetHrisAbsencesParameterIds = string;
/** Filter by a comma-separated list of remote IDs. */
export declare type GetHrisAbsencesParameterRemoteIds = string;
/**
 * Filter for all the absences that either start _or_ haven't ended yet on/after this day. If you imagine a calendar displaying absences, this defines the left-most visible day.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetHrisAbsencesParameterDateFrom = string;
/**
 * Filter for absences that start on or before this day (but might continue after). If you imagine a calendar displaying absences, this defines the right-most visible day.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetHrisAbsencesParameterDateUntil = string;
/** Filter by a specific employee using their ID. */
export declare type GetHrisAbsencesParameterEmployeeId = string;
/**
 * **(⚠️ Deprecated)** Filter for absences that either start after or start before and end after a certain time. Please use `date_from` instead.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetHrisAbsencesParameterTimeFrom = string;
/**
 * **(⚠️ Deprecated)** Filter for absences that start before a certain time. Please use `date_until` instead.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetHrisAbsencesParameterTimeUntil = string;
export interface GetHrisAbsencesSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"22st2Ji8XpncEYEak8mvQgQF","remote_id":"1348","employee_id":"JDdUy9kiH5APaGizFrgNmQjM","approver_id":"AgXEispYPP1BbToHpqnqcpxy","start_date":"2022-08-04","end_date":"2022-08-05","start_half_day":true,"end_half_day":false,"start_time":"13:15:00","end_time":"17:00:00","amount":2,"unit":"DAYS","status":"APPROVED","employee_note":"Visiting my family.","type_id":"xzZoKssDaMZAd62kxayzzQvD","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":"2022-08-07T14:01:29.196Z","remote_data":null,"type":{"id":"xzZoKssDaMZAd62kxayzzQvD","name":"Vacation","unit":"DAYS","half_days_supported":true,"exact_times_supported":false,"remote_id":"91","remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null}}]} */
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: ({
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      employee_id: string;
      /** **(⚠️ Deprecated)** The ID of the employee who is responsible for approving this absence. */
      approver_id: string | null;
      /** The date this absence starts in the `yyyy-MM-dd` format. */
      start_date: string | null;
      /** The date this absence ends in the `yyyy-MM-dd` format. */
      end_date: string | null;
      /** `true` if the absence starts in the middle of the day, `false` if not, and `null` if the system doesn't support half-day absences. */
      start_half_day: boolean | null;
      /** `true` if the absence ends in the middle of the day, `false` if not, and `null` if the system doesn't support half-day absences. */
      end_half_day: boolean | null;
      /** The time at which this absence starts. Follows the format `HH:mm:ss` (e.g., `14:45:15`). */
      start_time: string | null;
      /** The time at which this absence ends. Follows the format `HH:mm:ss` (e.g., `14:45:15`). */
      end_time: string | null;
      /**
       * The amount of time this absence takes.
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      amount: number | null;
      /** The unit of time for this absence. Can be `HOURS` or `DAYS`. */
      unit: "HOURS" | "DAYS" | null;
      /** One of 5 standardized values (`REQUESTED`, `APPROVED`, `DECLINED`, `CANCELLED`, or `DELETED`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
      status: "REQUESTED" | "APPROVED" | "DECLINED" | "CANCELLED" | "DELETED" | string | null;
      /** A note the employee has added to this absence. */
      employee_note: string | null;
      /** The Kombo absence type ID of this absence. */
      type_id: string | null;
      /**
       * The timestamp when this object was last changed. This value is tracked by Kombo based on changes in the data.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      remote_data: Record<string, any>;
    } & {
      /** @example {"id":"xzZoKssDaMZAd62kxayzzQvD","name":"Vacation","unit":"DAYS","half_days_supported":true,"exact_times_supported":false,"remote_id":"91","remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null} */
      type: {
        id: string;
        name: string | null;
        unit: "HOURS" | "DAYS" | null;
        /** Whether the integration supports half-day absences (represented through `start_half_day` and `end_half_day`) for this absence type. */
        half_days_supported: boolean | null;
        /** `true` if the system supports exact times (absences with a `start_time` and an `end_time`) for this absence, `false` if not. */
        exact_times_supported: boolean | null;
        remote_id: string;
        remote_data: Record<string, any>;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        changed_at: string;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        remote_deleted_at: string | null;
      };
    })[];
  };
}
export interface GetHrisAbsencesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export interface PostHrisAbsencesSuccessfulResponse {
  status: "success";
  /** @example {"id":"22st2Ji8XpncEYEak8mvQgQF","remote_id":"1348","employee_id":"JDdUy9kiH5APaGizFrgNmQjM","approver_id":"AgXEispYPP1BbToHpqnqcpxy","start_date":"2022-08-04","end_date":"2022-08-05","start_half_day":true,"end_half_day":false,"start_time":"13:15:00","end_time":"17:00:00","amount":2,"unit":"DAYS","status":"APPROVED","employee_note":"Visiting my family.","type_id":"xzZoKssDaMZAd62kxayzzQvD","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":"2022-08-07T14:01:29.196Z","remote_data":null} */
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
    remote_id: string | null;
    employee_id: string;
    /** **(⚠️ Deprecated)** The ID of the employee who is responsible for approving this absence. */
    approver_id: string | null;
    /** The date this absence starts in the `yyyy-MM-dd` format. */
    start_date: string | null;
    /** The date this absence ends in the `yyyy-MM-dd` format. */
    end_date: string | null;
    /** `true` if the absence starts in the middle of the day, `false` if not, and `null` if the system doesn't support half-day absences. */
    start_half_day: boolean | null;
    /** `true` if the absence ends in the middle of the day, `false` if not, and `null` if the system doesn't support half-day absences. */
    end_half_day: boolean | null;
    /** The time at which this absence starts. Follows the format `HH:mm:ss` (e.g., `14:45:15`). */
    start_time: string | null;
    /** The time at which this absence ends. Follows the format `HH:mm:ss` (e.g., `14:45:15`). */
    end_time: string | null;
    /**
     * The amount of time this absence takes.
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    amount: number | null;
    /** The unit of time for this absence. Can be `HOURS` or `DAYS`. */
    unit: "HOURS" | "DAYS" | null;
    /** One of 5 standardized values (`REQUESTED`, `APPROVED`, `DECLINED`, `CANCELLED`, or `DELETED`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
    status: "REQUESTED" | "APPROVED" | "DECLINED" | "CANCELLED" | "DELETED" | string | null;
    /** A note the employee has added to this absence. */
    employee_note: string | null;
    /** The Kombo absence type ID of this absence. */
    type_id: string | null;
    /**
     * The timestamp when this object was last changed. This value is tracked by Kombo based on changes in the data.
     * @format date-time
     */
    changed_at: string;
    /**
     * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
     * @format date-time
     */
    remote_deleted_at: string | null;
    remote_data: Record<string, any>;
  };
}
export interface PostHrisAbsencesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostHrisAbsencesRequestBody = {
  /** The ID of the employee in Kombo or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`) */
  employee_id: string;
  /** The ID of the absence type in Kombo (not its `remote_id`). */
  absence_type_id: string;
  /**
   * Specify if the absence should be created in the requested or approved state. Please note that some tools might approve absences automatically if they were created for an absence type that does not require approval. There are more edge cases that might cause an absence to be approved automatically.
   * @default "REQUESTED"
   */
  status?: "REQUESTED" | "APPROVED";
  /**
   * When the absence starts. This is a plain date (i.e., `yyyy-MM-dd`), all time information is discarded.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  start_date?: string;
  /**
   * When the absence ends. This is a plain date (i.e., `yyyy-MM-dd`), all time information is discarded.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  end_date?: string;
  /**
   * `true` if the absence should start in the middle of the day.
   * @default false
   */
  start_half_day?: boolean;
  /**
   * `true` if the absence should end in the middle of the day.
   * @default false
   */
  end_half_day?: boolean;
  /**
   * Specifying this also requires specifying `unit`. This is supported by very few tools.
   * @format double
   * @min 0
   * @exclusiveMin false
   * @max 1.7976931348623157e+308
   * @exclusiveMax false
   */
  amount?: number;
  /** Specifying this also requires specifying `amount`. */
  unit?: "HOURS" | "DAYS";
  /** A note describing the reason for this absence. */
  employee_note: string | null;
  /**
   * When the absence begins. Follows the format `HH:mm` or `HH:mm:ss` (e.g., `14:45:15`). If `start_time` is specified, `end_time` has to be specified as well.
   * @pattern /^(?:2[0-3]|[01]?\d):[0-5]?\d(:[0-5]?\d)?$/
   */
  start_time?: string;
  /**
   * When the absence ends. Follows the format `HH:mm` or `HH:mm:ss` (e.g., `14:45:15`). If `end_time` is specified, `start_time` has to be specified as well.
   * @pattern /^(?:2[0-3]|[01]?\d):[0-5]?\d(:[0-5]?\d)?$/
   */
  end_time?: string;
};
/** The ID of the absence */
export declare type DeleteHrisAbsencesAbsenceIdParameterAbsenceId = string;
export interface DeleteHrisAbsencesAbsenceIdSuccessfulResponse {
  status: "success";
  /** @example {"id":"22st2Ji8XpncEYEak8mvQgQF","remote_id":"1348","employee_id":"JDdUy9kiH5APaGizFrgNmQjM","approver_id":"AgXEispYPP1BbToHpqnqcpxy","start_date":"2022-08-04","end_date":"2022-08-05","start_half_day":true,"end_half_day":false,"start_time":"13:15:00","end_time":"17:00:00","amount":2,"unit":"DAYS","status":"APPROVED","employee_note":"Visiting my family.","type_id":"xzZoKssDaMZAd62kxayzzQvD","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":"2022-08-07T14:01:29.196Z","remote_data":null} */
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
    remote_id: string | null;
    employee_id: string;
    /** **(⚠️ Deprecated)** The ID of the employee who is responsible for approving this absence. */
    approver_id: string | null;
    /** The date this absence starts in the `yyyy-MM-dd` format. */
    start_date: string | null;
    /** The date this absence ends in the `yyyy-MM-dd` format. */
    end_date: string | null;
    /** `true` if the absence starts in the middle of the day, `false` if not, and `null` if the system doesn't support half-day absences. */
    start_half_day: boolean | null;
    /** `true` if the absence ends in the middle of the day, `false` if not, and `null` if the system doesn't support half-day absences. */
    end_half_day: boolean | null;
    /** The time at which this absence starts. Follows the format `HH:mm:ss` (e.g., `14:45:15`). */
    start_time: string | null;
    /** The time at which this absence ends. Follows the format `HH:mm:ss` (e.g., `14:45:15`). */
    end_time: string | null;
    /**
     * The amount of time this absence takes.
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    amount: number | null;
    /** The unit of time for this absence. Can be `HOURS` or `DAYS`. */
    unit: "HOURS" | "DAYS" | null;
    /** One of 5 standardized values (`REQUESTED`, `APPROVED`, `DECLINED`, `CANCELLED`, or `DELETED`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
    status: "REQUESTED" | "APPROVED" | "DECLINED" | "CANCELLED" | "DELETED" | string | null;
    /** A note the employee has added to this absence. */
    employee_note: string | null;
    /** The Kombo absence type ID of this absence. */
    type_id: string | null;
    /**
     * The timestamp when this object was last changed. This value is tracked by Kombo based on changes in the data.
     * @format date-time
     */
    changed_at: string;
    /**
     * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
     * @format date-time
     */
    remote_deleted_at: string | null;
    remote_data: Record<string, any>;
  };
}
export interface DeleteHrisAbsencesAbsenceIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type DeleteHrisAbsencesAbsenceIdRequestBody = object;
/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export declare type GetHrisLegalEntitiesParameterCursor = string;
/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export declare type GetHrisLegalEntitiesParameterPageSize = number;
/**
 * Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetHrisLegalEntitiesParameterUpdatedAfter = string;
/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export declare enum GetHrisLegalEntitiesParameterIncludeDeleted {
  True = "true",
  False = "false",
}
/**
 * Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`.
 * @pattern /^([\da-z]{24}(,[\da-z]{24})*)?$/i
 */
export declare type GetHrisLegalEntitiesParameterIds = string;
/** Filter by a comma-separated list of remote IDs. */
export declare type GetHrisLegalEntitiesParameterRemoteIds = string;
export interface GetHrisLegalEntitiesSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"4B9bKBpX5tnwjiG93TAqF7ci","remote_id":"49","name":"ACME Inc.","address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin, Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"},"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"remote_data":null}]} */
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      name: string | null;
      address: {
        /** @default null */
        city?: string | null;
        /**
         * Contains the ISO2 country code if possible. If not, it contains the original value.
         * @default null
         */
        country?: string | null;
        /** @default null */
        raw?: string | null;
        /** @default null */
        state?: string | null;
        /** @default null */
        street_1?: string | null;
        /** @default null */
        street_2?: string | null;
        /** @default null */
        zip_code?: string | null;
      };
      /**
       * The timestamp when this object was last changed. This value is tracked by Kombo based on changes in the data.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      remote_data: Record<string, any>;
    }[];
  };
}
export interface GetHrisLegalEntitiesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export declare type GetAtsApplicationsParameterCursor = string;
/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export declare type GetAtsApplicationsParameterPageSize = number;
/**
 * Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetAtsApplicationsParameterUpdatedAfter = string;
/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export declare enum GetAtsApplicationsParameterIncludeDeleted {
  True = "true",
  False = "false",
}
/**
 * Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`.
 * @pattern /^([\da-z]{24}(,[\da-z]{24})*)?$/i
 */
export declare type GetAtsApplicationsParameterIds = string;
/** Filter by a comma-separated list of remote IDs. */
export declare type GetAtsApplicationsParameterRemoteIds = string;
export interface GetAtsApplicationsSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","outcome":"HIRED","current_stage_id":"5J7L4b48wBfffYwek9Az9pkM","job_id":"H5daSm8e85Dmvmne3wLeCPhX","candidate_id":"H77fDF8uvEzGNPRubiz5DvQ7","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"remote_data":null,"candidate":{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","first_name":"John","last_name":"Doe","email_addresses":[{"email_address":"john.doe@example.com","type":"PRIVATE"}],"tags":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"High Potential"}]},"current_stage":{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"Initial Screening"},"job":{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"Backend Engineer"}}]} */
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: ({
      id: string;
      remote_id: string | null;
      /**
       * Parsed status of the application. If Kombo identifies that the application was accepted and the candidate hired, it will be `HIRED`. If the application was rejected or the candidate declined, it will be `DECLINED`. If the application is still in process, it will be `PENDING`.
       * Kombo will always try to deliver this infomation as reliably as possible.
       */
      outcome: "PENDING" | "HIRED" | "DECLINED" | null;
      /** ID of the current application stage */
      current_stage_id: string | null;
      job_id: string | null;
      candidate_id: string | null;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      changed_at: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      remote_deleted_at: string | null;
      remote_data: Record<string, any>;
    } & {
      candidate: {
        id: string;
        remote_id: string;
        /** First name of the candidate. */
        first_name: string | null;
        /** Last name of the candidate. */
        last_name: string | null;
        /**
         * A list of email addresses of the candidate with an optional type. If an email address is invalid, it will be filtered out.
         * @default []
         */
        email_addresses: {
          /** @format email */
          email_address?: string | null;
          /** Kombo exposes type information through this field. If we don't get any information from the tool, we will set this to `null`. */
          type: string | null;
        }[];
      } & {
        tags: {
          id: string;
          remote_id: string | null;
          name: string | null;
        }[];
      };
      /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"Initial Screening"} */
      current_stage: {
        id: string;
        remote_id: string | null;
        name: string | null;
      };
      /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"Backend Engineer"} */
      job: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
        /** Title of the job. */
        name: string | null;
      };
    })[];
  };
}
export interface GetAtsApplicationsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PutAtsApplicationsApplicationIdStageParameterApplicationId = string;
export interface PutAtsApplicationsApplicationIdStageSuccessfulResponse {
  status: "success";
  data: object;
}
export interface PutAtsApplicationsApplicationIdStageErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PutAtsApplicationsApplicationIdStageRequestBody = {
  /** The ID of the stage to move the application to. This ID must be the ID of a stage that is connected to the job that the application is connected to. */
  stage_id: string;
  /** Additional fields that we will pass through to specific ATS systems. */
  remote_fields?: {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /**
         * ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it.
         * @default null
         */
        "On-Behalf-Of"?: string | null;
      };
    };
  };
};
/** Kombo ID of the application you want to create the link for. */
export declare type PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = string;
export interface PostAtsApplicationsApplicationIdResultLinksSuccessfulResponse {
  status: "success";
  data: object;
}
export interface PostAtsApplicationsApplicationIdResultLinksErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostAtsApplicationsApplicationIdResultLinksRequestBody = {
  /** If we can display a display name for the link, we will use this label. */
  label: string;
  /**
   * URL of the link.
   * @format url
   */
  url: string;
  /**
   * Additional details with attributes that will be added to the result. This can be percentages, scores, or any text.
   *
   * We generally recommend using short attribute keys and a short custom_field_name_prefix to avoid overflowing the ATS UI.
   */
  details?: {
    /** That will be added to the attribute labels if they are used for custom fields. If you specify `Acme:` as the prefix, the custom field will be named `Acme: Score`. Putting in the name of your company/product is a good idea. */
    custom_field_name_prefix: string;
    attributes: {
      /** The name of the attribute */
      key: string;
      /** The value of the attribute */
      value: string;
    }[];
  };
};
/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export declare type GetAtsCandidatesParameterCursor = string;
/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export declare type GetAtsCandidatesParameterPageSize = number;
/**
 * Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetAtsCandidatesParameterUpdatedAfter = string;
/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export declare enum GetAtsCandidatesParameterIncludeDeleted {
  True = "true",
  False = "false",
}
/**
 * Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`.
 * @pattern /^([\da-z]{24}(,[\da-z]{24})*)?$/i
 */
export declare type GetAtsCandidatesParameterIds = string;
/** Filter by a comma-separated list of remote IDs. */
export declare type GetAtsCandidatesParameterRemoteIds = string;
export interface GetAtsCandidatesSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","first_name":"John","last_name":"Doe","company":"Acme, Inc.","title":"Head of Marketing","confidential":false,"source":"Employee Referral","phone_numbers":[{"phone_number":"+1-541-754-3010","type":"HOME"}],"email_addresses":[{"email_address":"john.doe@example.com","type":"PRIVATE"}],"social_media":[{"link":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","type":"YOUTUBE","username":null}],"location":{"city":"Berlin","country":"DE","raw":"Berlin, Germany","state":"Berlin","street_1":"Lohmühlenstraße 65","street_2":null,"zip_code":"12435"},"remote_created_at":"2022-04-02T00:00:00.000Z","remote_updated_at":"2022-04-04T00:00:00.000Z","remote_data":null,"changed_at":"2022-04-04T00:00:00.000Z","remote_deleted_at":null,"applications":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","current_stage":{"id":"26vafvWSRmbhNcxJYqjCzuJg","name":"Initial Screening","remote_id":"32"},"job":{"id":"26vafvWSRmbhNcxJYqjCzuJg","name":"Backend Engineer","remote_id":"32"}}],"tags":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","name":"High Potential","remote_id":"32"}]}]} */
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: ({
      id: string;
      remote_id: string;
      /** First name of the candidate. */
      first_name: string | null;
      /** Last name of the candidate. */
      last_name: string | null;
      /** The current company of the candidate. */
      company: string | null;
      /** The current job title of the candidate. */
      title: string | null;
      /** Whether the candidate's profile is confidential in the ATS. */
      confidential: boolean | null;
      source: string | null;
      /**
       * A list of phone numbers of the candidate.
       * @default []
       */
      phone_numbers: {
        phone_number: string;
        /**
         * Kombo exposes type information through this field. If we don't get any information from the tool, we will set this to `null`.
         * @default null
         */
        type?: string | null;
      }[];
      /**
       * A list of email addresses of the candidate with an optional type. If an email address is invalid, it will be filtered out.
       * @default []
       */
      email_addresses: {
        /** @format email */
        email_address?: string | null;
        /** Kombo exposes type information through this field. If we don't get any information from the tool, we will set this to `null`. */
        type: string | null;
      }[];
      /**
       * List of social media accounts of the candidate.
       * @default []
       */
      social_media: {
        /** @default null */
        link?: string | null;
        /** @default null */
        type?: string | null;
        /** @default null */
        username?: string | null;
      }[];
      /** Location of the candidate. */
      location: {
        /** @default null */
        city?: string | null;
        /**
         * Contains the ISO2 country code if possible. If not, it contains the original value.
         * @default null
         */
        country?: string | null;
        /** @default null */
        raw?: string | null;
        /** @default null */
        state?: string | null;
        /** @default null */
        street_1?: string | null;
        /** @default null */
        street_2?: string | null;
        /** @default null */
        zip_code?: string | null;
      };
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      remote_created_at: string | null;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      remote_updated_at: string | null;
      remote_data: Record<string, any>;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      changed_at: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      remote_deleted_at: string | null;
    } & {
      applications: ({
        id: string;
        remote_id: string | null;
      } & {
        /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","name":"Initial Screening","remote_id":"32"} */
        current_stage: {
          id: string;
          name: string | null;
          remote_id: string | null;
        };
        /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","name":"Backend Engineer","remote_id":"32"} */
        job: {
          /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
          id: string;
          /** Title of the job. */
          name: string | null;
          /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
          remote_id: string;
        };
      })[];
      tags: {
        id: string;
        name: string | null;
        remote_id: string | null;
      }[];
    })[];
  };
}
export interface GetAtsCandidatesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export interface PostAtsCandidatesSuccessfulResponse {
  status: "success";
  data: {
    id: string;
    remote_id: string;
    /** First name of the candidate. */
    first_name: string | null;
    /** Last name of the candidate. */
    last_name: string | null;
    /** The current company of the candidate. */
    company: string | null;
    /** The current job title of the candidate. */
    title: string | null;
    /** Whether the candidate's profile is confidential in the ATS. */
    confidential: boolean | null;
    source: string | null;
    /**
     * A list of phone numbers of the candidate.
     * @default []
     */
    phone_numbers: {
      phone_number: string;
      /**
       * Kombo exposes type information through this field. If we don't get any information from the tool, we will set this to `null`.
       * @default null
       */
      type?: string | null;
    }[];
    /**
     * A list of email addresses of the candidate with an optional type. If an email address is invalid, it will be filtered out.
     * @default []
     */
    email_addresses: {
      /** @format email */
      email_address?: string | null;
      /** Kombo exposes type information through this field. If we don't get any information from the tool, we will set this to `null`. */
      type: string | null;
    }[];
    /**
     * List of social media accounts of the candidate.
     * @default []
     */
    social_media: {
      /** @default null */
      link?: string | null;
      /** @default null */
      type?: string | null;
      /** @default null */
      username?: string | null;
    }[];
    /** Location of the candidate. */
    location: {
      /** @default null */
      city?: string | null;
      /**
       * Contains the ISO2 country code if possible. If not, it contains the original value.
       * @default null
       */
      country?: string | null;
      /** @default null */
      raw?: string | null;
      /** @default null */
      state?: string | null;
      /** @default null */
      street_1?: string | null;
      /** @default null */
      street_2?: string | null;
      /** @default null */
      zip_code?: string | null;
    };
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    remote_created_at: string | null;
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    remote_updated_at: string | null;
    remote_data: Record<string, any>;
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    changed_at: string;
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    remote_deleted_at: string | null;
  } & {
    applications: ({
      id: string;
      remote_id: string | null;
    } & {
      /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","name":"Initial Screening","remote_id":"32"} */
      current_stage: {
        id: string;
        name: string | null;
        remote_id: string | null;
      };
      /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","name":"Backend Engineer","remote_id":"32"} */
      job: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** Title of the job. */
        name: string | null;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
      };
    })[];
    tags: {
      id: string;
      name: string | null;
      remote_id: string | null;
    }[];
  };
  warnings: {
    message: string;
  }[];
}
export interface PostAtsCandidatesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostAtsCandidatesRequestBody = {
  candidate: {
    first_name: string;
    last_name: string;
    /**
     * The primary email address this application will be created with.
     * @format email
     */
    email_address: string;
    /** The company where the applicant is currently working. */
    company?: string;
    /** The current job title of the applicant. */
    title?: string;
    phone_number?: string;
    location?: {
      city?: string;
      /**
       * The uppercase two-letter ISO country (e.g., `DE`) of the applicant.
       * @pattern /^[A-Z]{2}$/
       */
      country: string;
    };
    /** The gender of the applicant. Must be one of `MALE`, `FEMALE`, or `OTHER`. */
    gender?: "MALE" | "FEMALE" | "OTHER";
    /**
     * The date the applicant is available to start working.
     * @format date-time
     * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
     */
    availability_date?: string;
    /** The salary expectations of the applicant. We will automatically convert the amount to a format that is suitable for the ATS you are using. For example, if you are using monthly salary expectations, we will convert the amount to a yearly salary if the ATS expects yearly salary expectations. */
    salary_expectations?: {
      /** The period of the salary expectations. Must be one of `MONTH` or `YEAR`. */
      period: "MONTH" | "YEAR";
      /**
       * The amount of the salary expectations.
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      amount: number;
    };
  };
  /** Currently, every candidate has one application. If you are interested in talent pools, please contact Kombo. */
  application: {
    /** Kombo ID or Remote ID of the Job this candidate should apply for. If you want to use the ID of the integrated system (remote_id) you need to prefix the id with "remote:". You can use the remote ID if you do not want to sync jobs. */
    job_id: string;
    /** Stage this candidate should be in. If left out, the default stage for this job will be used. */
    stage_id?: string;
  };
  /**
   * Array of answers to screening questions. Currently, not all question types are supported and unsupported ones will not be submitted.
   *
   * The available questions a job can be retrieved from the get jobs endpoint. The answers will be validated based on the format of the the questions. Make sure to follow this schema to avoid errors.
   * @example [{"question_id":"D8yPrjXXvA2XeBksTmrVvKSn","answer":"Yes"}]
   */
  screening_question_answers?: {
    /** ID of the question returned by the Kombo API. Will throw an error if the question is not connected to the job. */
    question_id: string;
    /** Answer to a question. This will be validated based on the question format and throw an error if the answer is invalid. */
    answer: string | boolean | number | string[];
  }[];
  /**
   * Array of the attachments you would like upload.
   * @default []
   */
  attachments?: {
    /** Name of the file you want to upload. */
    name: string;
    type: "CV" | "COVER_LETTER" | "OTHER";
    /**
     * Content/MIME type of the file (e.g., `application/pdf`). This is required if you provide `data` and optional if you provide `data_url`.
     * @pattern /^[\w.-]+\/[\w.-]+$/
     */
    content_type?: string;
    /** Base64-encoded contents of the file you want to upload. You must provide either this or `data_url`. */
    data?: string;
    /**
     * Publicly accessible URL to the file you want to upload. You must provide either this or `data`.
     * @format url
     */
    data_url?: string;
  }[];
  /** Optional source information that will be attached to the candidate. If you're a job board or recruiting service, you can use this to make sure your customers can see which candidates came from you. */
  source?: {
    /**
     * Name of the source (e.g., `"Example Job Board"`).
     *
     * Note that this **only** works for ATS systems that support creating a source through the API right now. This includes Breezy HR, Fountain, Pinpoint, RECRU, Recruitee, Sage HR, and Haufe Umantis. For all other ATSs, the source will be ignored at the moment.
     */
    name?: string;
  };
  /** Optional GDPR consent information required in some jurisdictions (like the Czech Republic or Slovakia). */
  gdpr_consent?: {
    /**
     * Until when the candidate has granted the company they're applying to permission to process their personal data.
     * @format date-time
     * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
     */
    expires_at?: string;
    /** Whether the candidate has given consent. */
    given?: boolean;
  };
  /** Additional fields that we will pass through to specific ATS systems. */
  remote_fields?: {
    /** Fields specific to SAP SuccessFactors. */
    successfactors?: {
      /** Fields that we will pass through to SuccessFactor's `Candidate` object. */
      Candidate?: Record<string, any>;
      /** Fields that we will pass through to SuccessFactor's `JobApplication` object. */
      JobApplication?: Record<string, any>;
    };
  } & {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /**
         * ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it.
         * @default null
         */
        "On-Behalf-Of"?: string | null;
      };
    };
  };
};
export declare type PatchAtsCandidatesCandidateIdParameterCandidateId = string;
export interface PatchAtsCandidatesCandidateIdSuccessfulResponse {
  status: "success";
  data: object;
}
export interface PatchAtsCandidatesCandidateIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PatchAtsCandidatesCandidateIdRequestBody = object;
export declare type PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = string;
export interface PostAtsCandidatesCandidateIdAttachmentsSuccessfulResponse {
  status: "success";
  data: object;
}
export interface PostAtsCandidatesCandidateIdAttachmentsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostAtsCandidatesCandidateIdAttachmentsRequestBody = {
  attachment: {
    /** Name of the file you want to upload. */
    name: string;
    type: "CV" | "COVER_LETTER" | "OTHER";
    /**
     * Content/MIME type of the file (e.g., `application/pdf`). This is required if you provide `data` and optional if you provide `data_url`.
     * @pattern /^[\w.-]+\/[\w.-]+$/
     */
    content_type?: string;
    /** Base64-encoded contents of the file you want to upload. You must provide either this or `data_url`. */
    data?: string;
    /**
     * Publicly accessible URL to the file you want to upload. You must provide either this or `data`.
     * @format url
     */
    data_url?: string;
  };
  /** Additional fields that we will pass through to specific ATS systems. */
  remote_fields?: {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /**
         * ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it.
         * @default null
         */
        "On-Behalf-Of"?: string | null;
      };
    };
  };
};
/** Kombo ID of the candidate you want to create the link for. */
export declare type PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = string;
export interface PostAtsCandidatesCandidateIdResultLinksSuccessfulResponse {
  status: "success";
  data: object;
}
export interface PostAtsCandidatesCandidateIdResultLinksErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostAtsCandidatesCandidateIdResultLinksRequestBody = {
  /** If we can display a display name for the link, we will use this label. */
  label: string;
  /**
   * URL of the link.
   * @format url
   */
  url: string;
  /**
   * Additional details with attributes that will be added to the result. This can be percentages, scores, or any text.
   *
   * We generally recommend using short attribute keys and a short custom_field_name_prefix to avoid overflowing the ATS UI.
   */
  details?: {
    /** That will be added to the attribute labels if they are used for custom fields. If you specify `Acme:` as the prefix, the custom field will be named `Acme: Score`. Putting in the name of your company/product is a good idea. */
    custom_field_name_prefix: string;
    attributes: {
      /** The name of the attribute */
      key: string;
      /** The value of the attribute */
      value: string;
    }[];
  };
  /** Additional fields that we will pass through to specific ATS systems. */
  remote_fields?: {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /**
         * ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it.
         * @default null
         */
        "On-Behalf-Of"?: string | null;
      };
    };
  };
};
/** Kombo ID of the candidate you want to add the tag to. */
export declare type PostAtsCandidatesCandidateIdTagsParameterCandidateId = string;
export interface PostAtsCandidatesCandidateIdTagsSuccessfulResponse {
  status: "success";
  data: object;
}
export interface PostAtsCandidatesCandidateIdTagsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostAtsCandidatesCandidateIdTagsRequestBody = {
  tag: {
    /**
     * The name of the tag you would like to add. Kombo will find out the right ID of the tag so you don't have to.
     * @minLength 1
     */
    name: string;
  };
  /** Additional fields that we will pass through to specific ATS systems. */
  remote_fields?: {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /**
         * ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it.
         * @default null
         */
        "On-Behalf-Of"?: string | null;
      };
    };
  };
};
/** Kombo ID of the candidate you want to remove the tag from. */
export declare type DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = string;
export interface DeleteAtsCandidatesCandidateIdTagsSuccessfulResponse {
  status: "success";
  data: object;
}
export interface DeleteAtsCandidatesCandidateIdTagsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type DeleteAtsCandidatesCandidateIdTagsRequestBody = {
  tag: {
    /** The name of the tag you would like to remove. */
    name: string;
  };
  /** Additional fields that we will pass through to specific ATS systems. */
  remote_fields?: {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /**
         * ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it.
         * @default null
         */
        "On-Behalf-Of"?: string | null;
      };
    };
  };
};
/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export declare type GetAtsTagsParameterCursor = string;
/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export declare type GetAtsTagsParameterPageSize = number;
/**
 * Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetAtsTagsParameterUpdatedAfter = string;
/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export declare enum GetAtsTagsParameterIncludeDeleted {
  True = "true",
  False = "false",
}
/**
 * Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`.
 * @pattern /^([\da-z]{24}(,[\da-z]{24})*)?$/i
 */
export declare type GetAtsTagsParameterIds = string;
/** Filter by a comma-separated list of remote IDs. */
export declare type GetAtsTagsParameterRemoteIds = string;
export interface GetAtsTagsSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"High Potential","remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null}]} */
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      id: string;
      remote_id: string | null;
      name: string | null;
      remote_data: Record<string, any>;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      changed_at: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      remote_deleted_at: string | null;
    }[];
  };
}
export interface GetAtsTagsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export declare type GetAtsApplicationStagesParameterCursor = string;
/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export declare type GetAtsApplicationStagesParameterPageSize = number;
/**
 * Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetAtsApplicationStagesParameterUpdatedAfter = string;
/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export declare enum GetAtsApplicationStagesParameterIncludeDeleted {
  True = "true",
  False = "false",
}
/**
 * Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`.
 * @pattern /^([\da-z]{24}(,[\da-z]{24})*)?$/i
 */
export declare type GetAtsApplicationStagesParameterIds = string;
/** Filter by a comma-separated list of remote IDs. */
export declare type GetAtsApplicationStagesParameterRemoteIds = string;
export interface GetAtsApplicationStagesSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"Initial Screening","remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null}]} */
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      id: string;
      remote_id: string | null;
      name: string | null;
      remote_data: Record<string, any>;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      changed_at: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      remote_deleted_at: string | null;
    }[];
  };
}
export interface GetAtsApplicationStagesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export declare type GetAtsJobsParameterCursor = string;
/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export declare type GetAtsJobsParameterPageSize = number;
/**
 * Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetAtsJobsParameterUpdatedAfter = string;
/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export declare enum GetAtsJobsParameterIncludeDeleted {
  True = "true",
  False = "false",
}
/**
 * Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`.
 * @pattern /^([\da-z]{24}(,[\da-z]{24})*)?$/i
 */
export declare type GetAtsJobsParameterIds = string;
/** Filter by a comma-separated list of remote IDs. */
export declare type GetAtsJobsParameterRemoteIds = string;
/** Filter by the `post_url` field. Can be used to find a job based on its public posting URL. */
export declare type GetAtsJobsParameterPostUrl = string;
export interface GetAtsJobsSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"Backend Engineer","description":"<p>Kombo is hiring engineers! If you are reading this and you are located in Berlin, Germany, feel free to contact us about this position.</p>","confidential":false,"weekly_hours":37,"employment_type":"FULL_TIME","status":"OPEN","visibility":"PUBLIC","category":"Technical Job","department":"Engineering","post_url":"https://jobs.example.com/post/159829112","experience_level":"Mid-Senior","salary_amount":4200,"salary_amount_from":null,"salary_amount_to":null,"salary_currency":"EUR","salary_period":"MONTH","location":{"city":"Berlin","country":"DE","raw":"Berlin, Germany","state":"Berlin","street_1":"Lohmühlenstraße 65","street_2":null,"zip_code":"12435"},"opened_at":"2022-08-07T14:01:29.196Z","closed_at":null,"remote_created_at":"2022-08-07T14:01:29.196Z","remote_updated_at":"2022-08-07T14:01:29.196Z","contact_id":"6gT2yLMBEipd3zpezATv3Rhu","remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"stages":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"Initial Screening","index":0}],"screening_questions":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"48b4d36a-1d4b-4c50-ada7-9519078e65b4","title":"Which is your primary programming language?","description":"Please enter the language you are most comfortable with.","format":{"display_type":"SINGLE_LINE","max_length":null,"type":"TEXT"},"index":0,"required":true}],"hiring_team":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","first_name":"John","last_name":"Doe","email":"john.doe@kombo.dev","hiring_team_roles":["RECRUITER"]}]}]} */
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: ({
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** Title of the job. */
      name: string | null;
      /** Description of the job. This field is usually returned as HTML. */
      description: string | null;
      /** **(⚠️ Deprecated)** It makes more sense to store the visibility of a job in an enum. Therefore, we introduced the `visibility` enum on jobs. */
      confidential: boolean | null;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      weekly_hours: number | null;
      /** The type of employment contract. */
      employment_type: "FULL_TIME" | "PART_TIME" | "CONTRACT" | "SEASONAL" | "INTERNSHIP" | string | null;
      /** One of 4 standardized values (`OPEN`, `CLOSED`, `DRAFT`, or `ARCHIVED`) **or** — in rare cases where can't find a clear mapping — the original string passed through. */
      status: "OPEN" | "CLOSED" | "DRAFT" | "ARCHIVED" | string | null;
      /**
       * Describes the visibility of the job:
       *
       * - `PUBLIC`: visible to everyone, published on a job board
       * - `INTERNAL`: only visible to employees of the company itself
       * - `UNLISTED`: anyone can apply but only if they have the link to it
       * - `CONFIDENTIAL`: nobody can apply and it's only visible in the ATS to people who were invited to it
       *
       * Useful if you are providing a job board and want to post public open jobs of your customers/partners.
       */
      visibility: "PUBLIC" | "INTERNAL" | "UNLISTED" | "CONFIDENTIAL" | string | null;
      /** The category of the job (often the job industry). */
      category: string | null;
      department: string | null;
      /** The public job posting URL of the ATS itself. This can be used by external job boards to redirect applicants. */
      post_url: string | null;
      experience_level: string | null;
      /**
       * The salary amount in the given currency.
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      salary_amount: number | null;
      /**
       * The lower bound of the salary range.
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      salary_amount_from: number | null;
      /**
       * The upper bound of the salary range.
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      salary_amount_to: number | null;
      /** Salary currency usually returned in [ISO 4217 currency codes](https://www.iso.org/iso-4217-currency-codes.html). */
      salary_currency: string | null;
      /** The period of the salary amount (not equal to the pay frequency). */
      salary_period: "YEAR" | "MONTH" | "TWO_WEEKS" | "WEEK" | "DAY" | "HOUR" | string | null;
      /** The location of the listed job. */
      location: {
        /** @default null */
        city?: string | null;
        /**
         * Contains the ISO2 country code if possible. If not, it contains the original value.
         * @default null
         */
        country?: string | null;
        /** @default null */
        raw?: string | null;
        /** @default null */
        state?: string | null;
        /** @default null */
        street_1?: string | null;
        /** @default null */
        street_2?: string | null;
        /** @default null */
        zip_code?: string | null;
      };
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      opened_at: string | null;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      closed_at: string | null;
      /**
       * The date and time the object was created in the remote system.
       * @format date-time
       */
      remote_created_at: string | null;
      /**
       * A timestamp retrieved from the remote system, describing when the resource was last updated.
       * @format date-time
       */
      remote_updated_at: string | null;
      /** **(⚠️ Deprecated)** The user ID of the contact person for this job. We strongly recommend using the new `hiring_team` property instead as it provides more complete and accurate information about the ATS users connected to a job. */
      contact_id: string | null;
      remote_data: Record<string, any>;
      /**
       * The timestamp when this object was last changed. This value is tracked by Kombo based on changes in the data.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
    } & {
      stages: ({
        id: string;
        remote_id: string | null;
        name: string | null;
      } & {
        /**
         * @format int64
         * @min -9007199254740991
         * @exclusiveMin false
         * @max 9007199254740991
         * @exclusiveMax false
         * @default null
         */
        index: number | null;
      })[];
      screening_questions: ({
        id: string;
        remote_id: string | null;
        title: string | null;
        description: string | null;
        format:
          | {
              /**
               * If unavailable, we recommend displaying a single-line input.
               * @default null
               */
              display_type?: "SINGLE_LINE" | "MULTI_LINE" | null;
              /**
               * @format int64
               * @min -9007199254740991
               * @exclusiveMin false
               * @max 9007199254740991
               * @exclusiveMax false
               * @default null
               */
              max_length?: number | null;
              type: "TEXT";
            }
          | {
              /** @default "FIELD" */
              display_type?: "SLIDER" | "FIELD" | null;
              /**
               * @format double
               * @min 5e-324
               * @exclusiveMin false
               * @max 1.7976931348623157e+308
               * @exclusiveMax false
               * @default null
               */
              max?: number | null;
              /**
               * @format double
               * @min 5e-324
               * @exclusiveMin false
               * @max 1.7976931348623157e+308
               * @exclusiveMax false
               * @default null
               */
              min?: number | null;
              type: "NUMBER";
            }
          | {
              type: "FILE";
            }
          | {
              /** @default null */
              display_type?: "DROPDOWN" | "RADIO" | null;
              options: {
                /** Content of the question option. */
                name: string;
                /**
                 * ID in the connected ATS. This might be null as some systems only use the name to identify the option.
                 * @default null
                 */
                remote_id?: string | null;
                /** Kombo ID of this question option. Use this ID to specify the answer to this question. */
                id: string;
              }[];
              type: "SINGLE_SELECT";
            }
          | {
              type: "BOOLEAN";
            }
          | {
              type: "DATE";
            }
          | {
              options: {
                /** Content of the question option. */
                name: string;
                /**
                 * ID in the connected ATS. This might be null as some systems only use the name to identify the option.
                 * @default null
                 */
                remote_id?: string | null;
                /** Kombo ID of this question option. Use this ID to specify the answer to this question. */
                id: string;
              }[];
              type: "MULTI_SELECT";
            }
          | {
              /** This is just a text block. */
              type: "INFORMATION";
            }
          | {
              /**
               * We pass the original question data along so you can handle it.
               * @format any
               */
              raw_question?: any;
              /** When we're not able to map a specific question type yet, we will return this type. Every `UNKNOWN` question will also be parsed and unified by us at some point. This is just a temporary workaround so you still get all questions. */
              type: "UNKNOWN";
            };
      } & {
        /**
         * @format int64
         * @min -9007199254740991
         * @exclusiveMin false
         * @max 9007199254740991
         * @exclusiveMax false
         * @default null
         */
        index: number | null;
        required: boolean | null;
      })[];
      hiring_team: ({
        id: string;
        remote_id: string | null;
        /** First name of the user. */
        first_name: string | null;
        /** Last name of the user. */
        last_name: string | null;
        /**
         * Email of the user.
         * @format email
         */
        email: string | null;
      } & {
        /** Array of the roles of the user for this specific job. Currently only `RECRUITER` and `HIRING_MANAGER` are mapped into our unified schema. */
        hiring_team_roles: ("RECRUITER" | "HIRING_MANAGER")[];
      })[];
    })[];
  };
}
export interface GetAtsJobsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type GetAtsJobsJobIdPostingsParameterJobId = string;
export interface GetAtsJobsJobIdPostingsSuccessfulResponse {
  status: "success";
  data: object;
}
export interface GetAtsJobsJobIdPostingsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/** Kombo ID or Remote ID of the Job this candidate should apply for. If you want to use the ID of the integrated system (remote_id) you need to prefix the id with "remote:". You can use the remote ID if you do not want to sync jobs. */
export declare type PostAtsJobsJobIdApplicationsParameterJobId = string;
export interface PostAtsJobsJobIdApplicationsSuccessfulResponse {
  status: "success";
  data: {
    id: string;
    remote_id: string | null;
    /**
     * Parsed status of the application. If Kombo identifies that the application was accepted and the candidate hired, it will be `HIRED`. If the application was rejected or the candidate declined, it will be `DECLINED`. If the application is still in process, it will be `PENDING`.
     * Kombo will always try to deliver this infomation as reliably as possible.
     */
    outcome: "PENDING" | "HIRED" | "DECLINED" | null;
    /** ID of the current application stage */
    current_stage_id: string | null;
    job_id: string | null;
    candidate_id: string | null;
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    changed_at: string;
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    remote_deleted_at: string | null;
    remote_data: Record<string, any>;
  } & {
    /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","name":"Initial Screening","remote_id":"32"} */
    current_stage: {
      id: string;
      name: string | null;
      remote_id: string | null;
    };
    /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","name":"Backend Engineer","remote_id":"32"} */
    job: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** Title of the job. */
      name: string | null;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
    };
    candidate: {
      id: string;
      remote_id: string;
      /** First name of the candidate. */
      first_name: string | null;
      /** Last name of the candidate. */
      last_name: string | null;
      /** The current company of the candidate. */
      company: string | null;
      /** The current job title of the candidate. */
      title: string | null;
      /** Whether the candidate's profile is confidential in the ATS. */
      confidential: boolean | null;
      source: string | null;
      /**
       * A list of phone numbers of the candidate.
       * @default []
       */
      phone_numbers: {
        phone_number: string;
        /**
         * Kombo exposes type information through this field. If we don't get any information from the tool, we will set this to `null`.
         * @default null
         */
        type?: string | null;
      }[];
      /**
       * A list of email addresses of the candidate with an optional type. If an email address is invalid, it will be filtered out.
       * @default []
       */
      email_addresses: {
        /** @format email */
        email_address?: string | null;
        /** Kombo exposes type information through this field. If we don't get any information from the tool, we will set this to `null`. */
        type: string | null;
      }[];
      /**
       * List of social media accounts of the candidate.
       * @default []
       */
      social_media: {
        /** @default null */
        link?: string | null;
        /** @default null */
        type?: string | null;
        /** @default null */
        username?: string | null;
      }[];
      /** Location of the candidate. */
      location: {
        /** @default null */
        city?: string | null;
        /**
         * Contains the ISO2 country code if possible. If not, it contains the original value.
         * @default null
         */
        country?: string | null;
        /** @default null */
        raw?: string | null;
        /** @default null */
        state?: string | null;
        /** @default null */
        street_1?: string | null;
        /** @default null */
        street_2?: string | null;
        /** @default null */
        zip_code?: string | null;
      };
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      remote_created_at: string | null;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      remote_updated_at: string | null;
      remote_data: Record<string, any>;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      changed_at: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      remote_deleted_at: string | null;
    } & {
      tags: {
        id: string;
        name: string | null;
        remote_id: string | null;
      }[];
    };
  };
  warnings: {
    message: string;
  }[];
}
export interface PostAtsJobsJobIdApplicationsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostAtsJobsJobIdApplicationsRequestBody = {
  /** Stage this candidate should be in. If left out, the default stage for this job will be used. */
  stage_id?: string;
  candidate: {
    first_name: string;
    last_name: string;
    /**
     * The primary email address this application will be created with.
     * @format email
     */
    email_address: string;
    /** The company where the applicant is currently working. */
    company?: string;
    /** The current job title of the applicant. */
    title?: string;
    phone_number?: string;
    location?: {
      city?: string;
      /**
       * The uppercase two-letter ISO country (e.g., `DE`) of the applicant.
       * @pattern /^[A-Z]{2}$/
       */
      country: string;
    };
    /** The gender of the applicant. Must be one of `MALE`, `FEMALE`, or `OTHER`. */
    gender?: "MALE" | "FEMALE" | "OTHER";
    /**
     * The date the applicant is available to start working.
     * @format date-time
     * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
     */
    availability_date?: string;
    /** The salary expectations of the applicant. We will automatically convert the amount to a format that is suitable for the ATS you are using. For example, if you are using monthly salary expectations, we will convert the amount to a yearly salary if the ATS expects yearly salary expectations. */
    salary_expectations?: {
      /** The period of the salary expectations. Must be one of `MONTH` or `YEAR`. */
      period: "MONTH" | "YEAR";
      /**
       * The amount of the salary expectations.
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      amount: number;
    };
  };
  /**
   * Array of the attachments you would like upload.
   * @default []
   */
  attachments?: {
    /** Name of the file you want to upload. */
    name: string;
    type: "CV" | "COVER_LETTER" | "OTHER";
    /**
     * Content/MIME type of the file (e.g., `application/pdf`). This is required if you provide `data` and optional if you provide `data_url`.
     * @pattern /^[\w.-]+\/[\w.-]+$/
     */
    content_type?: string;
    /** Base64-encoded contents of the file you want to upload. You must provide either this or `data_url`. */
    data?: string;
    /**
     * Publicly accessible URL to the file you want to upload. You must provide either this or `data`.
     * @format url
     */
    data_url?: string;
  }[];
  /** Optional source information that will be attached to the candidate. If you're a job board or recruiting service, you can use this to make sure your customers can see which candidates came from you. */
  source?: {
    /**
     * Name of the source (e.g., `"Example Job Board"`).
     *
     * Note that this **only** works for ATS systems that support creating a source through the API right now. This includes Breezy HR, Fountain, Pinpoint, RECRU, Recruitee, Sage HR, and Haufe Umantis. For all other ATSs, the source will be ignored at the moment.
     */
    name?: string;
  };
  /** Optional GDPR consent information required in some jurisdictions (like the Czech Republic or Slovakia). */
  gdpr_consent?: {
    /**
     * Until when the candidate has granted the company they're applying to permission to process their personal data.
     * @format date-time
     * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
     */
    expires_at?: string;
    /** Whether the candidate has given consent. */
    given?: boolean;
  };
  /** Additional fields that we will pass through to specific ATS systems. */
  remote_fields?: {
    /** Fields specific to SAP SuccessFactors. */
    successfactors?: {
      /** Fields that we will pass through to SuccessFactor's `Candidate` object. */
      Candidate?: Record<string, any>;
      /** Fields that we will pass through to SuccessFactor's `JobApplication` object. */
      JobApplication?: Record<string, any>;
    };
  } & {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /**
         * ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it.
         * @default null
         */
        "On-Behalf-Of"?: string | null;
      };
    };
  };
  /**
   * Array of answers to screening questions. Currently, not all question types are supported and unsupported ones will not be submitted.
   *
   * The available questions a job can be retrieved from the get jobs endpoint. The answers will be validated based on the format of the the questions. Make sure to follow this schema to avoid errors.
   * @example [{"question_id":"D8yPrjXXvA2XeBksTmrVvKSn","answer":"Yes"}]
   */
  screening_question_answers?: {
    /** ID of the question returned by the Kombo API. Will throw an error if the question is not connected to the job. */
    question_id: string;
    /** Answer to a question. This will be validated based on the question format and throw an error if the answer is invalid. */
    answer: string | boolean | number | string[];
  }[];
};
/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export declare type GetAtsUsersParameterCursor = string;
/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export declare type GetAtsUsersParameterPageSize = number;
/**
 * Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export declare type GetAtsUsersParameterUpdatedAfter = string;
/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export declare enum GetAtsUsersParameterIncludeDeleted {
  True = "true",
  False = "false",
}
/**
 * Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`.
 * @pattern /^([\da-z]{24}(,[\da-z]{24})*)?$/i
 */
export declare type GetAtsUsersParameterIds = string;
/** Filter by a comma-separated list of remote IDs. */
export declare type GetAtsUsersParameterRemoteIds = string;
export interface GetAtsUsersSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","first_name":"John","last_name":"Doe","email":"john.doe@kombo.dev","remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null}]} */
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      id: string;
      remote_id: string | null;
      /** First name of the user. */
      first_name: string | null;
      /** Last name of the user. */
      last_name: string | null;
      /**
       * Email of the user.
       * @format email
       */
      email: string | null;
      remote_data: Record<string, any>;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      changed_at: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      remote_deleted_at: string | null;
    }[];
  };
}
export interface GetAtsUsersErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export interface PostConnectCreateLinkSuccessfulResponse {
  status: "success";
  /** @example {"link":"https://connect.kombo.dev/v1?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.SWYgeW91IGFyZSByZWFkaW5nIHRoaXMsIHdlIHdvdWxkIGxpa2UgdG8gbGV0IHlvdSBrbm93IHRoYXQgd2UgYXJlIGhpcmluZyBwZW9wbGUgbGlrZSB5b3UgOikuIFJlYWNoIG91dCB0byBhbGV4QGtvbWJvLmRldiB0byBnZXQgaW4gY29udGFjdCBhbmQgdGVsbCBoaW0geW91IGNvbWUgZnJvbSB0aGUgSldUIDsp._hhX5YTtHfLn9ZC806dZceRn2whzxHyrhft1ONzNgOE"} */
  data: {
    /** @format url */
    link: string;
  };
}
export interface PostConnectCreateLinkErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostConnectCreateLinkRequestBody = {
  /**
   * The email of the user this link is meant for.
   * @format email
   */
  end_user_email: string;
  /**
   * The name of the user's organization.
   * @minLength 1
   */
  end_user_organization_name: string;
  /**
   * The id the user/organization has in your own database.
   * @minLength 1
   * @default null
   */
  end_user_origin_id?: string | null;
  /**
   * If the tool you want to connect offers different environments, you can specify which one you want to connect to here. If you don't specify this, we'll assume you want to use the production environment. Note that this can only be used if you've also specified a tool through `integration_tool`.
   * @default null
   */
  remote_environment?: string | null;
  /**
   * Category of the integration you want your customer to create.
   * @default "HRIS"
   */
  integration_category?: "HRIS" | "ATS";
  /**
   * Pre-define a tool this integration link can be used for.
   * @default null
   */
  integration_tool?:
    | "personio"
    | "workday"
    | "successfactors"
    | "smartrecruiters"
    | "factorial"
    | "lever"
    | "recruitee"
    | "greenhouse"
    | "teamtailor"
    | "ashby"
    | "onlyfy"
    | "rexx"
    | "afas"
    | "bamboohr"
    | "bullhorn"
    | "workable"
    | "payfit"
    | "fountain"
    | "kenjo"
    | "heavenhr"
    | "hibob"
    | "softgarden"
    | "azuread"
    | "googleworkspace"
    | "pinpoint"
    | "welcometothejungle"
    | "dvinci"
    | "join"
    | "deel"
    | "jobvite"
    | "okta"
    | "sagehr"
    | "humaans"
    | "traffit"
    | "erecruiter"
    | "eurecia"
    | "umantis"
    | "taleez"
    | "officient"
    | "sesamehr"
    | "charliehr"
    | "hrworks"
    | "otys"
    | "rippling"
    | "nmbrs"
    | "heyrecruit"
    | "peoplehr"
    | "recruhr"
    | "jazzhr"
    | "lucca"
    | "bite"
    | "haileyhr"
    | "silae"
    | "datev"
    | "sympa"
    | "breezyhr"
    | "flatchr"
    | "applicantstack"
    | "oraclehcm"
    | null;
  /**
   * Language of the connection flow UI.
   * @default "en"
   */
  language?: "en" | "de" | "fr";
  /**
   * Specify a scope config that should be used for this integration. This is an advanced feature, only use it if you know what you're doing!
   * @default null
   */
  scope_config_id?: string | null;
};
export interface PostConnectActivateIntegrationSuccessfulResponse {
  status: "success";
  /** @example {"tool":"personio","id":"personio:CBNMt7dSNCzBdnRTx87dev4E","end_user_origin_id":"36123","end_user_organization_name":"Acme, Inc.","end_user_email":"user@example.com"} */
  data: {
    tool: string;
    id: string;
    end_user_origin_id: string | null;
    end_user_organization_name: string;
    /** @format email */
    end_user_email: string | null;
  };
}
export interface PostConnectActivateIntegrationErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostConnectActivateIntegrationRequestBody = {
  token: string;
};
/** ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`) */
export declare type PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = string;
export interface PutCustomDatevEmployeesEmployeeIdPreparePayrollSuccessfulResponse {
  status: "success";
  data: object;
}
export interface PutCustomDatevEmployeesEmployeeIdPreparePayrollErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = {
  payroll_run: {
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
     */
    date: string;
  };
  /** Add entries for all the hourly calculated supplements here. For example you can write "Overtime" or "Work on Holidays" (in hours here). Unfortunately, DATEV doens't allow showing a lable for the entries. */
  hourly_payments: {
    /**
     * Number of hours this employee has worked.
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    hours: number;
    /**
     * The "Lohnart" (payment-type) in DATEV. Make sure a Lohnart is selected that actually supports hours.
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    lohnart: number;
  }[];
  /** Add entries for all the fixed supplements here. For example you can write "Bonuses" (in Euros here). Unfortunately, DATEV doens't allow showing a lable for the entries. */
  fixed_payments: {
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    amount: number;
    /**
     * The "Lohnart" (payment-type) in DATEV. Make sure a Lohnart is selected that actually supports fixed payments (no hourly modifier).
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    lohnart: number;
  }[];
};
/** ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`) */
export declare type PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = string;
export interface PutCustomDatevEmployeesEmployeeIdCompensationsSuccessfulResponse {
  status: "success";
  data: object;
}
export interface PutCustomDatevEmployeesEmployeeIdCompensationsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = {
  /**
   * Date from which the submitted compensations should be valid. Please note that it might not be possible to set compensations for the past if the payroll was already run.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  effective_date: string;
  compensations: {
    /**
     * The amount that this employee will be paid.
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    amount: number;
    /** The currency in which the employee gets paid. Currently, only euro is supported as integrated systems only work with Euro. */
    currency: "EUR";
    /** The period for which the specified amount is paid. Currently, integrated systems only support "HOUR" and "MONTH". */
    period: "HOUR" | "MONTH";
  }[];
};
export interface GetCustomDatevDataPushesSuccessfulResponse {
  status: "success";
  data: {
    data_pushes: {
      id: string;
      /** Type of the executed data push. */
      type: "GENERAL" | "PAYROLL";
      /**
       * Date when the push-data endpoint was called.
       * @format date-time
       */
      created_at: string;
      /** List of all the submitted files. This can include multiple files if data was edited for multiple months. */
      upload_jobs: {
        id: string;
        file_name: string;
        /** If we were not able to send the file to DATEV, we will set the state "FAILED". The other values are synced from DATEV for the respective import jobs. */
        state: "FAILED" | "UPLOADED" | "IMPORTED" | "CORRUPTED" | "DELETED" | "AUTO_DELETED";
        /** Actual content of the file. */
        file: string;
      }[];
    }[];
  };
}
export interface GetCustomDatevDataPushesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export interface PostCustomDatevPushDataGeneralSuccessfulResponse {
  status: "success";
  data: {
    files: {
      name: string;
      content: string;
    }[];
  };
}
export interface PostCustomDatevPushDataGeneralErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostCustomDatevPushDataGeneralRequestBody = object;
export interface PostCustomDatevPushDataPayrollSuccessfulResponse {
  status: "success";
  data: {
    files: {
      name: string;
      content: string;
    }[];
  };
}
export interface PostCustomDatevPushDataPayrollErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export declare type PostCustomDatevPushDataPayrollRequestBody = {
  /**
   * Specify the month for which the payroll data should be submitted. The date must be specified as the first day of a month (e.g. 2022-12-01).
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  payroll_month: string;
};
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}
export declare class HttpClient<SecurityDataType = unknown> {
  baseUrl: string;
  private securityData;
  private securityWorker?;
  private abortControllers;
  private customFetch;
  private baseApiParams;
  constructor(apiConfig?: ApiConfig<SecurityDataType>);
  setSecurityData: (data: SecurityDataType | null) => void;
  protected encodeQueryParam(key: string, value: any): string;
  protected addQueryParam(query: QueryParamsType, key: string): string;
  protected addArrayQueryParam(query: QueryParamsType, key: string): any;
  protected toQueryString(rawQuery?: QueryParamsType): string;
  protected addQueryParams(rawQuery?: QueryParamsType): string;
  private contentFormatters;
  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams;
  protected createAbortSignal: (cancelToken: CancelToken) => AbortSignal | undefined;
  abortRequest: (cancelToken: CancelToken) => void;
  request: <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title Kombo API
 * @version 1.0.0
 * @baseUrl https://api.kombo.dev/v1
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  checkApiKey: {
    /**
     * @description Check whether your API key is working properly.
     *
     * @tags General
     * @name GetCheckApiKey
     * @summary Check API key
     * @request GET:/check-api-key
     * @secure
     */
    getCheckApiKey: (
      params?: RequestParams,
    ) => Promise<HttpResponse<GetCheckApiKeySuccessfulResponse, GetCheckApiKeyErrorResponse>>;
  };
  forceSync: {
    /**
     * @description Trigger a sync for a specific integration. <Warning>Please note that it is **not** necessary nor recommended to call this endpoint periodically on your side. Kombo already performs period syncs for you and you should only trigger syncs yourself in special cases (like when a user clicks on a "Sync" button in your app).</Warning>
     *
     * @tags General
     * @name PostForceSync
     * @summary Trigger sync
     * @request POST:/force-sync
     * @secure
     */
    postForceSync: (
      data: PostForceSyncRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PostForceSyncSuccessfulResponse,
        | PostForceSyncErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
  };
  passthrough: {
    /**
     * @description Send a request to the specified integration's native API. At Kombo we put a lot of work into making sure that our unified API covers all our customers' use cases and that they never have to think about integration-specific logic again. There are cases, however, where our customers want to build features that are very integration-specfic. That's where this endpoint comes in. Pass in details about the request you want to make to the integration's API and we'll forward it for you. We'll also take care of setting the right base URL and authenticating your requests. To get started, please pick the relevant API (some tools provide multiple to due different base URLs or authentication schemes) from the table below and pass in the `{tool}/{api}` identifier as part of the path. |Integration|`{tool}/{api}`|Description| |---|---|---| |Personio|`personio/personnel`|Personio's [Personnel Data API](https://developer.personio.de/reference/get_company-employees). We automatically authenticate all requests using the client ID and secret and use `https://api.personio.de/v1` as the base URL.| |Personio|`personio/recruiting`|Personio's [Recruiting API](https://developer.personio.de/reference/get_company-employees). We automatically authenticate all requests using the Recruiting access token and use `https://api.personio.de/v1/recruiting` as the base URL.| |Personio|`personio/jobboard`|API endpoints exposed on Personio's public job board pages ([currently just the XML feed](https://developer.personio.de/reference/get_xml)). We automatically use the right `https://{company}.jobs.personio.de` base URL.| |SAP SuccessFactors|`successfactors/odata-v2`|[SuccessFactors' OData V2 API](https://help.sap.com/doc/74597e67f54d4f448252bad4c2b601c9/2211/en-US/SF_HCM_OData_API_REF_en.pdf). We automatically authenticate all requests and use `https://{api_domain}/odata/v2` as the base URL.| |Recruitee|`recruitee/default`|The [Recruitee API](https://api.recruitee.com/docs/index.html). We automatically authenticate all requests and use `https://api.recruitee.com/c/{company_id}` as the base URL.| |HiBob|`hibob/v1`|[HibBob's v1 API](https://apidocs.hibob.com/reference/get_people). We automatically authenticate all requests using the service user credentials (or, for old integrations, the API key) and use `https://api.hibob.com/v1` as the base URL.| <Note>Please note that the pass-through API endpoints are only meant for edge cases. That's why we only expose them for new integrations after understanding a concrete customer use case. If you have such a use case in mind, please reach out to Kombo.</Note>
     *
     * @tags General
     * @name PostPassthroughToolApi
     * @summary Send pass-through request
     * @request POST:/passthrough/{tool}/{api}
     * @secure
     */
    postPassthroughToolApi: (
      tool: PostPassthroughToolApiParameterTool,
      api: PostPassthroughToolApiParameterApi,
      data: PostPassthroughToolApiRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PostPassthroughToolApiSuccessfulResponse,
        | PostPassthroughToolApiErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
  };
  integrations: {
    /**
     * @description Delete the specified integration. **⚠️ This can not be undone!**
     *
     * @tags General
     * @name DeleteIntegrationsIntegrationId
     * @summary Delete integration
     * @request DELETE:/integrations/{integration_id}
     * @secure
     */
    deleteIntegrationsIntegrationId: (
      integrationId: DeleteIntegrationsIntegrationIdParameterIntegrationId,
      data: DeleteIntegrationsIntegrationIdRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        DeleteIntegrationsIntegrationIdSuccessfulResponse,
        | DeleteIntegrationsIntegrationIdErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Get the specified integration with everything you need to display it to your customer.
     *
     * @tags General
     * @name GetIntegrationsIntegrationId
     * @summary Get integration details
     * @request GET:/integrations/{integration_id}
     * @secure
     */
    getIntegrationsIntegrationId: (
      integrationId: GetIntegrationsIntegrationIdParameterIntegrationId,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        GetIntegrationsIntegrationIdSuccessfulResponse,
        | GetIntegrationsIntegrationIdErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Create a link that will allow the user to reconnect an integration. This is useful if you want to allow your users to update the credentials if the old ones for example expired. Embed this the same way you would [embed the connect link](/connect/embedded-flow). By default, the link will be valid for 1 hour. ### Example Request Body ```json { "language": "en" } ```
     *
     * @tags General
     * @name PostIntegrationsIntegrationIdRelink
     * @summary Create reconnection link
     * @request POST:/integrations/{integration_id}/relink
     * @secure
     */
    postIntegrationsIntegrationIdRelink: (
      integrationId: PostIntegrationsIntegrationIdRelinkParameterIntegrationId,
      data: PostIntegrationsIntegrationIdRelinkRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PostIntegrationsIntegrationIdRelinkSuccessfulResponse,
        | PostIntegrationsIntegrationIdRelinkErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
  };
  tools: {
    /**
     * @description Get a list of the tools (i.e., integrations) enabled in your environment. This can (in combination with the `integration_tool` parameter of [the "Create Link" endpoint](/v1/post-create-link)) be used to, for example, display a custom list or grid of available integrations to your end users instead of exposing Kombo Connect's standard tool selector.
     *
     * @tags General
     * @name GetToolsCategory
     * @summary Get tools
     * @request GET:/tools/{category}
     * @secure
     */
    getToolsCategory: (
      category: GetToolsCategoryParameterCategory,
      params?: RequestParams,
    ) => Promise<HttpResponse<GetToolsCategorySuccessfulResponse, GetToolsCategoryErrorResponse>>;
  };
  hris: {
    /**
     * @description Retrieve all employees. <Note>Not interested in most fields? You can use our [our Scopes feature](/scopes) to customize what data points will synced.</Note>
     *
     * @tags Unified HRIS API
     * @name GetHrisEmployees
     * @summary Get employees
     * @request GET:/hris/employees
     * @secure
     */
    getHrisEmployees: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetHrisEmployeesParameterCursor;
        /** The number of results to return per page. */
        page_size?: GetHrisEmployeesParameterPageSize;
        /** Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisEmployeesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisEmployeesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisEmployeesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisEmployeesParameterRemoteIds;
        /** Filter by the `employment_status` field. */
        employment_status?: GetHrisEmployeesParameterEmploymentStatus;
        /** Filter by a comma-separated list of group IDs. We will return all employees that are members of _any_ of the groups. */
        group_ids?: GetHrisEmployeesParameterGroupIds;
        /** Filter by a comma-separated list of legal entity IDs. We will return all employees that are members of _any_ of the legal entities. */
        legal_entity_ids?: GetHrisEmployeesParameterLegalEntityIds;
      },
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        GetHrisEmployeesSuccessfulResponse,
        | GetHrisEmployeesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Create a new employee. <Note> This endpoint requires the permission **Create and manage employees** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "first_name": "John", "last_name": "Doe", "work_email": "john.doe@acme.com", "gender": "MALE", "job_title": "Integrations Team Lead", "home_address": { "city": "Berlin", "country": "DE", "state": "Berlin", "street_1": "Sonnenallee 63", "zip_code": "12045" }, "date_of_birth": "1986-01-01", "start_date": "2020-04-07" } ```
     *
     * @tags Unified HRIS API
     * @name PostHrisEmployees
     * @summary Create employee
     * @request POST:/hris/employees
     * @secure
     */
    postHrisEmployees: (
      data: PostHrisEmployeesRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PostHrisEmployeesSuccessfulResponse,
        | PostHrisEmployeesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Update an employee. <Note> This endpoint requires the permission **Create and manage employees** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "BkgfzSr5muN9cUTMD4wDQFn4", "first_name": "John", "last_name": "Doe", "work_email": "john.doe@acme.com", "ssn": "555-32-6395", "tax_id": "12 345 678 901", "gender": "MALE", "marital_status": "MARRIED", "date_of_birth": "1986-01-01", "start_date": "2020-04-07", "termination_date": "2022-05-20", "job_title": "Integrations Team Lead", "home_address": { "city": "Berlin", "country": "DE", "state": "Berlin", "street_1": "Sonnenallee 63", "zip_code": "12045" } } ```
     *
     * @tags Unified HRIS API
     * @name PatchHrisEmployeesEmployeeId
     * @summary Update employee
     * @request PATCH:/hris/employees/{employee_id}
     * @secure
     */
    patchHrisEmployeesEmployeeId: (
      employeeId: PatchHrisEmployeesEmployeeIdParameterEmployeeId,
      data: PatchHrisEmployeesEmployeeIdRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PatchHrisEmployeesEmployeeIdSuccessfulResponse,
        | PatchHrisEmployeesEmployeeIdErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Currently in closed beta. <Warning>**This endpoint is currently in closed beta!** We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning>
     *
     * @tags Unified HRIS API
     * @name PostHrisEmployeesEmployeeIdAttachments
     * @summary Add attachment to employees 🦄
     * @request POST:/hris/employees/{employee_id}/attachments
     * @secure
     */
    postHrisEmployeesEmployeeIdAttachments: (
      employeeId: PostHrisEmployeesEmployeeIdAttachmentsParameterEmployeeId,
      data: PostHrisEmployeesEmployeeIdAttachmentsRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PostHrisEmployeesEmployeeIdAttachmentsSuccessfulResponse,
        PostHrisEmployeesEmployeeIdAttachmentsErrorResponse
      >
    >;
    /**
     * @description Get the teams. **(⚠️ Deprecated)** Please use [the `/groups` endpoint](/hris/v1/get-groups) instead. It returns the same data but the naming makes more sense as the model not only includes teams but also departments and cost centers.
     *
     * @tags Unified HRIS API
     * @name GetHrisTeams
     * @summary Get teams (deprecated)
     * @request GET:/hris/teams
     * @secure
     */
    getHrisTeams: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetHrisTeamsParameterCursor;
        /** The number of results to return per page. */
        page_size?: GetHrisTeamsParameterPageSize;
        /** Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisTeamsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisTeamsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisTeamsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisTeamsParameterRemoteIds;
      },
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        GetHrisTeamsSuccessfulResponse,
        | GetHrisTeamsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Retrieve all "groups" (teams, departments, and cost centers).
     *
     * @tags Unified HRIS API
     * @name GetHrisGroups
     * @summary Get groups
     * @request GET:/hris/groups
     * @secure
     */
    getHrisGroups: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetHrisGroupsParameterCursor;
        /** The number of results to return per page. */
        page_size?: GetHrisGroupsParameterPageSize;
        /** Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisGroupsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisGroupsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisGroupsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisGroupsParameterRemoteIds;
      },
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        GetHrisGroupsSuccessfulResponse,
        | GetHrisGroupsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Retrieve all employments.
     *
     * @tags Unified HRIS API
     * @name GetHrisEmployments
     * @summary Get employments
     * @request GET:/hris/employments
     * @secure
     */
    getHrisEmployments: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetHrisEmploymentsParameterCursor;
        /** The number of results to return per page. */
        page_size?: GetHrisEmploymentsParameterPageSize;
        /** Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisEmploymentsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisEmploymentsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisEmploymentsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisEmploymentsParameterRemoteIds;
      },
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        GetHrisEmploymentsSuccessfulResponse,
        | GetHrisEmploymentsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Retrieve all locations.
     *
     * @tags Unified HRIS API
     * @name GetHrisLocations
     * @summary Get locations
     * @request GET:/hris/locations
     * @secure
     */
    getHrisLocations: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetHrisLocationsParameterCursor;
        /** The number of results to return per page. */
        page_size?: GetHrisLocationsParameterPageSize;
        /** Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisLocationsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisLocationsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisLocationsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisLocationsParameterRemoteIds;
      },
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        GetHrisLocationsSuccessfulResponse,
        | GetHrisLocationsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Retrieve all absence types.
     *
     * @tags Unified HRIS API
     * @name GetHrisAbsenceTypes
     * @summary Get absence types
     * @request GET:/hris/absence-types
     * @secure
     */
    getHrisAbsenceTypes: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetHrisAbsenceTypesParameterCursor;
        /** The number of results to return per page. */
        page_size?: GetHrisAbsenceTypesParameterPageSize;
        /** Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisAbsenceTypesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisAbsenceTypesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisAbsenceTypesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisAbsenceTypesParameterRemoteIds;
      },
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        GetHrisAbsenceTypesSuccessfulResponse,
        | GetHrisAbsenceTypesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Retrieve all time off balances.
     *
     * @tags Unified HRIS API
     * @name GetHrisTimeOffBalances
     * @summary Get time off balances
     * @request GET:/hris/time-off-balances
     * @secure
     */
    getHrisTimeOffBalances: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetHrisTimeOffBalancesParameterCursor;
        /** The number of results to return per page. */
        page_size?: GetHrisTimeOffBalancesParameterPageSize;
        /** Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisTimeOffBalancesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisTimeOffBalancesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisTimeOffBalancesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisTimeOffBalancesParameterRemoteIds;
        /** Filter by a specific employee using their ID. */
        employee_id?: GetHrisTimeOffBalancesParameterEmployeeId;
      },
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        GetHrisTimeOffBalancesSuccessfulResponse,
        | GetHrisTimeOffBalancesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Retrieve all absences.
     *
     * @tags Unified HRIS API
     * @name GetHrisAbsences
     * @summary Get absences
     * @request GET:/hris/absences
     * @secure
     */
    getHrisAbsences: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetHrisAbsencesParameterCursor;
        /** The number of results to return per page. */
        page_size?: GetHrisAbsencesParameterPageSize;
        /** Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisAbsencesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisAbsencesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisAbsencesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisAbsencesParameterRemoteIds;
        /** Filter for all the absences that either start _or_ haven't ended yet on/after this day. If you imagine a calendar displaying absences, this defines the left-most visible day. */
        date_from?: GetHrisAbsencesParameterDateFrom;
        /** Filter for absences that start on or before this day (but might continue after). If you imagine a calendar displaying absences, this defines the right-most visible day. */
        date_until?: GetHrisAbsencesParameterDateUntil;
        /** Filter by a specific employee using their ID. */
        employee_id?: GetHrisAbsencesParameterEmployeeId;
        /** **(⚠️ Deprecated)** Filter for absences that either start after or start before and end after a certain time. Please use `date_from` instead. */
        time_from?: GetHrisAbsencesParameterTimeFrom;
        /** **(⚠️ Deprecated)** Filter for absences that start before a certain time. Please use `date_until` instead. */
        time_until?: GetHrisAbsencesParameterTimeUntil;
      },
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        GetHrisAbsencesSuccessfulResponse,
        | GetHrisAbsencesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Create a new absence. Check [this page](/hris/features/creating-absences) for a detailed guide. <Note> This endpoint requires the permission **Manage absences** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "wXJMxwDvPAjrJ4CyqdV9", "absence_type_id": "3YKtQ7qedsrcCady1jSyAkY1", "start_date": "2019-09-17", "end_date": "2019-09-21", "start_half_day": false, "end_half_day": false, "employee_note": "Visiting the aliens", "start_time": "08:30:00", "end_time": "16:00:00" } ```
     *
     * @tags Unified HRIS API
     * @name PostHrisAbsences
     * @summary Create absence
     * @request POST:/hris/absences
     * @secure
     */
    postHrisAbsences: (
      data: PostHrisAbsencesRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PostHrisAbsencesSuccessfulResponse,
        | PostHrisAbsencesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Delete this absence. <Note> This endpoint requires the permission **Manage absences** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "absence_id": "wXJMxwDvPAjrJ4CyqdV9" } ```
     *
     * @tags Unified HRIS API
     * @name DeleteHrisAbsencesAbsenceId
     * @summary Delete absence
     * @request DELETE:/hris/absences/{absence_id}
     * @secure
     */
    deleteHrisAbsencesAbsenceId: (
      absenceId: DeleteHrisAbsencesAbsenceIdParameterAbsenceId,
      data: DeleteHrisAbsencesAbsenceIdRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        DeleteHrisAbsencesAbsenceIdSuccessfulResponse,
        | DeleteHrisAbsencesAbsenceIdErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Retrieve all legal entites.
     *
     * @tags Unified HRIS API
     * @name GetHrisLegalEntities
     * @summary Get legal entities
     * @request GET:/hris/legal-entities
     * @secure
     */
    getHrisLegalEntities: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetHrisLegalEntitiesParameterCursor;
        /** The number of results to return per page. */
        page_size?: GetHrisLegalEntitiesParameterPageSize;
        /** Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisLegalEntitiesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisLegalEntitiesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisLegalEntitiesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisLegalEntitiesParameterRemoteIds;
      },
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        GetHrisLegalEntitiesSuccessfulResponse,
        | GetHrisLegalEntitiesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
  };
  ats: {
    /**
     * @description Retrieve all applications.
     *
     * @tags Unified ATS API
     * @name GetAtsApplications
     * @summary Get applications
     * @request GET:/ats/applications
     * @secure
     */
    getAtsApplications: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetAtsApplicationsParameterCursor;
        /** The number of results to return per page. */
        page_size?: GetAtsApplicationsParameterPageSize;
        /** Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetAtsApplicationsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsApplicationsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAtsApplicationsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsApplicationsParameterRemoteIds;
      },
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        GetAtsApplicationsSuccessfulResponse,
        | GetAtsApplicationsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Moves an application to a specified stage. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "stage_id": "3PJ8PZhZZa1eEdd2DtPNtVup" } ```
     *
     * @tags Unified ATS API
     * @name PutAtsApplicationsApplicationIdStage
     * @summary Move application to stage
     * @request PUT:/ats/applications/{application_id}/stage
     * @secure
     */
    putAtsApplicationsApplicationIdStage: (
      applicationId: PutAtsApplicationsApplicationIdStageParameterApplicationId,
      data: PutAtsApplicationsApplicationIdStageRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PutAtsApplicationsApplicationIdStageSuccessfulResponse,
        | PutAtsApplicationsApplicationIdStageErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Add a result link to an application. This can, for example, be used to link a candidate back to a test result/assessment in your application. As not all ATS tools have a "result link" feature, we sometimes repurpose other fields to expose it. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "application_id": "8Xi6iZrwusZqJmDGXs49GBmJ", "label": "Assessment Result", "url": "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG", "details": { "custom_field_name_prefix": "Acme:", "attributes": [ { "key": "Score", "value": "100%" }, { "key": "Time", "value": "2:30h" } ] } } ```
     *
     * @tags Unified ATS API
     * @name PostAtsApplicationsApplicationIdResultLinks
     * @summary Add result link to application
     * @request POST:/ats/applications/{application_id}/result-links
     * @secure
     */
    postAtsApplicationsApplicationIdResultLinks: (
      applicationId: PostAtsApplicationsApplicationIdResultLinksParameterApplicationId,
      data: PostAtsApplicationsApplicationIdResultLinksRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PostAtsApplicationsApplicationIdResultLinksSuccessfulResponse,
        | PostAtsApplicationsApplicationIdResultLinksErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Retrieve all candidates.
     *
     * @tags Unified ATS API
     * @name GetAtsCandidates
     * @summary Get candidates
     * @request GET:/ats/candidates
     * @secure
     */
    getAtsCandidates: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetAtsCandidatesParameterCursor;
        /** The number of results to return per page. */
        page_size?: GetAtsCandidatesParameterPageSize;
        /** Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetAtsCandidatesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsCandidatesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAtsCandidatesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsCandidatesParameterRemoteIds;
      },
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        GetAtsCandidatesSuccessfulResponse,
        | GetAtsCandidatesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description > We recommend the endpoint **Create Application** as it returns the application as the root object. That makes it easier to understand which application was created. Create a new candidate and application for the specified job. The first CV in the attachments will be treated as the resume of the candidate when the tool allows previewing a resume. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "candidate": { "first_name": "Frank", "last_name": "Doe", "company": "Acme Inc.", "title": "Head of Integrations", "email_address": "frank.doe@example.com", "phone_number": "+1-541-754-3010", "gender": "MALE", "salary_expectations": { "amount": 100000, "period": "YEAR" }, "availability_date": "2021-01-01", "location": { "city": "New York", "country": "US" } }, "application": { "job_id": "BDpgnpZ148nrGh4mYHNxJBgx", "stage_id": "8x3YKRDcuRnwShdh96ShBNn1" }, "screening_question_answers": [ { "question_id": "3phFBNXRweGnDmsU9o2vdPuQ", "answer": "Yes" }, { "question_id": "EYJjhMQT3LtVKXnTbnRT8s6U", "answer": [ "GUzE666zfyjeoCJX6A8n7wh6", "5WPHzzKAv8cx97KtHRUV96U8", "7yZfKGzWigXxxRTygqAfHvyE" ] } ], "attachments": [ { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } ] } ```
     *
     * @tags Unified ATS API
     * @name PostAtsCandidates
     * @summary Create candidate
     * @request POST:/ats/candidates
     * @secure
     */
    postAtsCandidates: (
      data: PostAtsCandidatesRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PostAtsCandidatesSuccessfulResponse,
        | PostAtsCandidatesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Currently in closed beta. <Warning>**This endpoint is currently in closed beta!** We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning>
     *
     * @tags Unified ATS API
     * @name PatchAtsCandidatesCandidateId
     * @summary Update candidate 🦄
     * @request PATCH:/ats/candidates/{candidate_id}
     * @secure
     */
    patchAtsCandidatesCandidateId: (
      candidateId: PatchAtsCandidatesCandidateIdParameterCandidateId,
      data: PatchAtsCandidatesCandidateIdRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<PatchAtsCandidatesCandidateIdSuccessfulResponse, PatchAtsCandidatesCandidateIdErrorResponse>
    >;
    /**
     * @description Uploads an attachment file for the specified candidate. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "candidate_id": "GRKdd9dibYKKCrmGRSMJf3wu", "attachment": { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } } ```
     *
     * @tags Unified ATS API
     * @name PostAtsCandidatesCandidateIdAttachments
     * @summary Add attachment to candidate
     * @request POST:/ats/candidates/{candidate_id}/attachments
     * @secure
     */
    postAtsCandidatesCandidateIdAttachments: (
      candidateId: PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId,
      data: PostAtsCandidatesCandidateIdAttachmentsRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PostAtsCandidatesCandidateIdAttachmentsSuccessfulResponse,
        | PostAtsCandidatesCandidateIdAttachmentsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description **(⚠️ Deprecated)** Add a result link to a candidate. Please use [add result link to application](/ats/v1/post-applications-application-id-result-links) instead. This can, for example, be used to link a candidate back to a test result/assessment in your application. As not all ATS tools have a "result link" feature, we sometimes repurpose other fields to expose it. This action is deprecated because result links usually concern applications and not candidates. Use endpoint nested under `/applications` instead. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "label": "Assessment Result", "url": "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG", "details": { "custom_field_name_prefix": "Acme:", "attributes": [ { "key": "Score", "value": "100%" }, { "key": "Time", "value": "2:30h" } ] } } ```
     *
     * @tags Unified ATS API
     * @name PostAtsCandidatesCandidateIdResultLinks
     * @summary Add result link to candidate
     * @request POST:/ats/candidates/{candidate_id}/result-links
     * @secure
     */
    postAtsCandidatesCandidateIdResultLinks: (
      candidateId: PostAtsCandidatesCandidateIdResultLinksParameterCandidateId,
      data: PostAtsCandidatesCandidateIdResultLinksRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PostAtsCandidatesCandidateIdResultLinksSuccessfulResponse,
        | PostAtsCandidatesCandidateIdResultLinksErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Add a tag to a candidate. Kombo takes care of creating the tag if required, finding out the right ID, and appending it to the list of tags. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "tag": { "name": "Excellent Fit" } } ```
     *
     * @tags Unified ATS API
     * @name PostAtsCandidatesCandidateIdTags
     * @summary Add tag to candidate
     * @request POST:/ats/candidates/{candidate_id}/tags
     * @secure
     */
    postAtsCandidatesCandidateIdTags: (
      candidateId: PostAtsCandidatesCandidateIdTagsParameterCandidateId,
      data: PostAtsCandidatesCandidateIdTagsRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PostAtsCandidatesCandidateIdTagsSuccessfulResponse,
        | PostAtsCandidatesCandidateIdTagsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Remove a tag from a candidate based on its name. This will also succeed if the tag does not exist on the candidate. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "tag": { "name": "Excellent Fit" } } ```
     *
     * @tags Unified ATS API
     * @name DeleteAtsCandidatesCandidateIdTags
     * @summary Remove tag from candidate
     * @request DELETE:/ats/candidates/{candidate_id}/tags
     * @secure
     */
    deleteAtsCandidatesCandidateIdTags: (
      candidateId: DeleteAtsCandidatesCandidateIdTagsParameterCandidateId,
      data: DeleteAtsCandidatesCandidateIdTagsRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        DeleteAtsCandidatesCandidateIdTagsSuccessfulResponse,
        | DeleteAtsCandidatesCandidateIdTagsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Retrieve all tags.
     *
     * @tags Unified ATS API
     * @name GetAtsTags
     * @summary Get tags
     * @request GET:/ats/tags
     * @secure
     */
    getAtsTags: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetAtsTagsParameterCursor;
        /** The number of results to return per page. */
        page_size?: GetAtsTagsParameterPageSize;
        /** Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetAtsTagsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsTagsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAtsTagsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsTagsParameterRemoteIds;
      },
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        GetAtsTagsSuccessfulResponse,
        | GetAtsTagsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Get all application stages available in the ATS. **(⚠️ Deprecated)** Get all application stages available in the ATS. This is deprecated because most ATS systems have separate sets of stages for each job. We'd recommend using the `stages` property on jobs instead.
     *
     * @tags Unified ATS API
     * @name GetAtsApplicationStages
     * @summary Get application stages
     * @request GET:/ats/application-stages
     * @secure
     */
    getAtsApplicationStages: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetAtsApplicationStagesParameterCursor;
        /** The number of results to return per page. */
        page_size?: GetAtsApplicationStagesParameterPageSize;
        /** Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetAtsApplicationStagesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsApplicationStagesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAtsApplicationStagesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsApplicationStagesParameterRemoteIds;
      },
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        GetAtsApplicationStagesSuccessfulResponse,
        | GetAtsApplicationStagesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Retrieve all jobs.
     *
     * @tags Unified ATS API
     * @name GetAtsJobs
     * @summary Get jobs
     * @request GET:/ats/jobs
     * @secure
     */
    getAtsJobs: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetAtsJobsParameterCursor;
        /** The number of results to return per page. */
        page_size?: GetAtsJobsParameterPageSize;
        /** Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetAtsJobsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsJobsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAtsJobsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsJobsParameterRemoteIds;
        /** Filter by the `post_url` field. Can be used to find a job based on its public posting URL. */
        post_url?: GetAtsJobsParameterPostUrl;
      },
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        GetAtsJobsSuccessfulResponse,
        | GetAtsJobsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Currently in closed beta. <Warning>**This endpoint is currently in closed beta!** We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning>
     *
     * @tags Unified ATS API
     * @name GetAtsJobsJobIdPostings
     * @summary Get job postings 🦄
     * @request GET:/ats/jobs/{job_id}/postings
     * @secure
     */
    getAtsJobsJobIdPostings: (
      jobId: GetAtsJobsJobIdPostingsParameterJobId,
      params?: RequestParams,
    ) => Promise<HttpResponse<GetAtsJobsJobIdPostingsSuccessfulResponse, GetAtsJobsJobIdPostingsErrorResponse>>;
    /**
     * @description Create a new application and candidate for the specified job. The first CV in the attachments will be treated as the resume of the candidate when the tool allows previewing a resume. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "stage_id": "8x3YKRDcuRnwShdh96ShBNn1", "candidate": { "first_name": "Frank", "last_name": "Doe", "company": "Acme Inc.", "title": "Head of Integrations", "email_address": "frank.doe@example.com", "phone_number": "+1-541-754-3010", "gender": "MALE", "salary_expectations": { "amount": 100000, "period": "YEAR" }, "availability_date": "2021-01-01", "location": { "city": "New York", "country": "US" } }, "attachments": [ { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } ], "screening_question_answers": [ { "question_id": "3phFBNXRweGnDmsU9o2vdPuQ", "answer": "Yes" }, { "question_id": "EYJjhMQT3LtVKXnTbnRT8s6U", "answer": [ "GUzE666zfyjeoCJX6A8n7wh6", "5WPHzzKAv8cx97KtHRUV96U8", "7yZfKGzWigXxxRTygqAfHvyE" ] } ] } ```
     *
     * @tags Unified ATS API
     * @name PostAtsJobsJobIdApplications
     * @summary Create application
     * @request POST:/ats/jobs/{job_id}/applications
     * @secure
     */
    postAtsJobsJobIdApplications: (
      jobId: PostAtsJobsJobIdApplicationsParameterJobId,
      data: PostAtsJobsJobIdApplicationsRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PostAtsJobsJobIdApplicationsSuccessfulResponse,
        | PostAtsJobsJobIdApplicationsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Retrieve all users.
     *
     * @tags Unified ATS API
     * @name GetAtsUsers
     * @summary Get users
     * @request GET:/ats/users
     * @secure
     */
    getAtsUsers: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetAtsUsersParameterCursor;
        /** The number of results to return per page. */
        page_size?: GetAtsUsersParameterPageSize;
        /** Filter the entries based on the modification date. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetAtsUsersParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsUsersParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAtsUsersParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsUsersParameterRemoteIds;
      },
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        GetAtsUsersSuccessfulResponse,
        | GetAtsUsersErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
  };
  connect: {
    /**
     * @description Generate a unique link that allows your user to enter the embedded Kombo Connect flow. > Check out [our full guide](/connect/embedded-flow) for more details about implementing the connection flow into your app. > Kombo will not deduplicate integrations for you that are created with this endpoint. You are responsible for keeping track of integrations in your system and prevent customers from connecting the same tool again. Use the [reconnection link](/v1/post-integrations-integration-id-relink) endpoint if you want a customer to update their credentials. ### Example Request Body ```json { "end_user_email": "test@example.com", "end_user_organization_name": "Test Inc.", "end_user_origin_id": "123", "integration_category": "HRIS", "integration_tool": "personio", "language": "en" } ```
     *
     * @tags Kombo Connect
     * @name PostConnectCreateLink
     * @summary Create connection link
     * @request POST:/connect/create-link
     * @secure
     */
    postConnectCreateLink: (
      data: PostConnectCreateLinkRequestBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<PostConnectCreateLinkSuccessfulResponse, PostConnectCreateLinkErrorResponse>>;
    /**
     * @description Activate an integration that was just created via Kombo Connect. > Check out [our full guide](/connect/embedded-flow) for more details about implementing the connection flow into your app. ### Example Request Body ```json { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiVGhpcyBpcyBub3QgYW4gYWN0dWFsIHRva2VuLiJ9.JulqgOZBMKceI8vh9YLpVX51efND0ZyfUNHDXLrPz_4" } ```
     *
     * @tags Kombo Connect
     * @name PostConnectActivateIntegration
     * @summary Activate integration
     * @request POST:/connect/activate-integration
     * @secure
     */
    postConnectActivateIntegration: (
      data: PostConnectActivateIntegrationRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<PostConnectActivateIntegrationSuccessfulResponse, PostConnectActivateIntegrationErrorResponse>
    >;
  };
  custom: {
    /**
     * @description What DATEV requires to prepare payroll is very specific and currently, as DATEV is not providing "read", this is not part of the unified model. <Note> This endpoint requires the permission **Manage payroll** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "EvLV61zdahkN4ftPJbmPCkdv", "payroll_run": { "date": "2022-05-01" }, "hourly_payments": [ { "hours": 14, "lohnart": 200 }, { "hours": 16, "lohnart": 232 } ], "fixed_payments": [ { "amount": 560, "lohnart": 100 } ] } ```
     *
     * @tags Custom Endpoints
     * @name PutCustomDatevEmployeesEmployeeIdPreparePayroll
     * @summary Prepare DATEV Payroll
     * @request PUT:/custom/datev/employees/{employee_id}/prepare-payroll
     * @secure
     */
    putCustomDatevEmployeesEmployeeIdPreparePayroll: (
      employeeId: PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId,
      data: PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PutCustomDatevEmployeesEmployeeIdPreparePayrollSuccessfulResponse,
        | PutCustomDatevEmployeesEmployeeIdPreparePayrollErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Sets the compensations for an employee on the specified effective date. Other compensations will end at the effective date. That means, if you would like to add a compensation, you also have to include the compensations that you would like to keep. <Note> This endpoint requires the permission **Manage payroll** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "3bdhemmSP1TPQDGWtRveRot9", "effective_date": "2022-12-01", "compensations": [ { "amount": 4500, "currency": "EUR", "period": "MONTH" } ] } ```
     *
     * @tags Custom Endpoints
     * @name PutCustomDatevEmployeesEmployeeIdCompensations
     * @summary Set DATEV compensations
     * @request PUT:/custom/datev/employees/{employee_id}/compensations
     * @secure
     */
    putCustomDatevEmployeesEmployeeIdCompensations: (
      employeeId: PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId,
      data: PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PutCustomDatevEmployeesEmployeeIdCompensationsSuccessfulResponse,
        | PutCustomDatevEmployeesEmployeeIdCompensationsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Returns all "DATEV Data Pushes" of the last 2 months. You can use this endpoint to give your users transparency about submitted "ASCII-Files" and their status. Each data push can contain multiple files that were submitted.
     *
     * @tags Custom Endpoints
     * @name GetCustomDatevDataPushes
     * @summary Get DATEV data pushes
     * @request GET:/custom/datev/data-pushes
     * @secure
     */
    getCustomDatevDataPushes: (params?: RequestParams) => Promise<
      HttpResponse<
        GetCustomDatevDataPushesSuccessfulResponse,
        | GetCustomDatevDataPushesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Uploads the currently relevant general data (employees, compensations, and time offs) to DATEV. This will create so called ASCII files that the accountant has to import in DATEV. You can call this endpoint to implement an on-demand sync to DATEV, for example if you want to offer your users a button to do that in your application.
     *
     * @tags Custom Endpoints
     * @name PostCustomDatevPushDataGeneral
     * @summary Push general data to DATEV
     * @request POST:/custom/datev/push-data/general
     * @secure
     */
    postCustomDatevPushDataGeneral: (
      data: PostCustomDatevPushDataGeneralRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PostCustomDatevPushDataGeneralSuccessfulResponse,
        | PostCustomDatevPushDataGeneralErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
    /**
     * @description Uploads the currently relevant payroll data (supplements) to DATEV. This will create so called ASCII files that the accountant has to import in DATEV. After finishing the payroll preparation or after correcting payroll, you can call this.
     *
     * @tags Custom Endpoints
     * @name PostCustomDatevPushDataPayroll
     * @summary Push payroll data to DATEV
     * @request POST:/custom/datev/push-data/payroll
     * @secure
     */
    postCustomDatevPushDataPayroll: (
      data: PostCustomDatevPushDataPayrollRequestBody,
      params?: RequestParams,
    ) => Promise<
      HttpResponse<
        PostCustomDatevPushDataPayrollSuccessfulResponse,
        | PostCustomDatevPushDataPayrollErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >
    >;
  };
}
export {};
