/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Filter users by their current status. */
export enum GetLmsUsersParameterStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetAtsInterviewsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetAtsRejectionReasonsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetAtsOffersParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetAtsUsersParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** **(⚠️ Deprecated - Use the `statuses` filter instead.)** Filter by the `status` field. Can be used to find a job based on its status. */
export enum GetAtsJobsParameterStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  DRAFT = "DRAFT",
  ARCHIVED = "ARCHIVED",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetAtsJobsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetAtsApplicationStagesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetAtsTagsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetAtsCandidatesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** **(⚠️ Deprecated - Use the `outcomes` filter instead.)** Filter applications by outcome. This allows you to get applications that are for example `PENDING`, `HIRED`, or `DECLINED`. */
export enum GetAtsApplicationsParameterOutcome {
  PENDING = "PENDING",
  HIRED = "HIRED",
  DECLINED = "DECLINED",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetAtsApplicationsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisPerformanceReviewsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisPerformanceReviewCyclesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisTimesheetsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisLegalEntitiesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisAbsencesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisTimeOffBalancesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisAbsenceTypesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisLocationsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisEmploymentsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisGroupsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisTeamsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** **(⚠️ Deprecated - Use the `employment_statuses` filter instead.)** Filter by the `employment_status` field. */
export enum GetHrisEmployeesParameterEmploymentStatus {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  INACTIVE = "INACTIVE",
  LEAVE = "LEAVE",
}

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisEmployeesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

export enum GetToolsCategoryParameterCategory {
  Hris = "hris",
  Ats = "ats",
  Assessment = "assessment",
}

export type Schema2 =
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?:
        | "first_name"
        | "last_name"
        | "date_of_birth"
        | "gender"
        | "home_address.city"
        | "home_address.country"
        | "home_address.state"
        | "home_address.street_1"
        | "home_address.street_2"
        | "home_address.zip_code"
        | "job_title"
        | "legal_entity_id"
        | "location_id"
        | "mobile_phone_number"
        | "home_phone_number"
        | "nationality"
        | "start_date"
        | "work_email"
        | "private_email"
        | "yearly_salary";
      type: "text";
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      min_length?: number | null;
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      max_length?: number | null;
      reg_exp?: string | null;
    }
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?:
        | "first_name"
        | "last_name"
        | "date_of_birth"
        | "gender"
        | "home_address.city"
        | "home_address.country"
        | "home_address.state"
        | "home_address.street_1"
        | "home_address.street_2"
        | "home_address.zip_code"
        | "job_title"
        | "legal_entity_id"
        | "location_id"
        | "mobile_phone_number"
        | "home_phone_number"
        | "nationality"
        | "start_date"
        | "work_email"
        | "private_email"
        | "yearly_salary";
      type: "number";
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      min?: number | null;
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      max?: number | null;
    }
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?:
        | "first_name"
        | "last_name"
        | "date_of_birth"
        | "gender"
        | "home_address.city"
        | "home_address.country"
        | "home_address.state"
        | "home_address.street_1"
        | "home_address.street_2"
        | "home_address.zip_code"
        | "job_title"
        | "legal_entity_id"
        | "location_id"
        | "mobile_phone_number"
        | "home_phone_number"
        | "nationality"
        | "start_date"
        | "work_email"
        | "private_email"
        | "yearly_salary";
      type: "date";
    }
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?:
        | "first_name"
        | "last_name"
        | "date_of_birth"
        | "gender"
        | "home_address.city"
        | "home_address.country"
        | "home_address.state"
        | "home_address.street_1"
        | "home_address.street_2"
        | "home_address.zip_code"
        | "job_title"
        | "legal_entity_id"
        | "location_id"
        | "mobile_phone_number"
        | "home_phone_number"
        | "nationality"
        | "start_date"
        | "work_email"
        | "private_email"
        | "yearly_salary";
      type: "single_select";
      options:
        | {
            type: "inline";
            entries: {
              id: string;
              label: string;
              unified_value?: string;
              remote_id: string | number;
            }[];
          }
        | {
            type: "referenced";
            link: string;
          };
    }
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?: string | null;
      type: "multi_select";
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      min_items?: number | null;
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      max_items?: number | null;
      options:
        | {
            type: "inline";
            entries: {
              id: string;
              label: string;
              unified_value?: string;
              remote_id: string | number;
            }[];
          }
        | {
            type: "referenced";
            link: string;
          };
    }
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?:
        | "first_name"
        | "last_name"
        | "date_of_birth"
        | "gender"
        | "home_address.city"
        | "home_address.country"
        | "home_address.state"
        | "home_address.street_1"
        | "home_address.street_2"
        | "home_address.zip_code"
        | "job_title"
        | "legal_entity_id"
        | "location_id"
        | "mobile_phone_number"
        | "home_phone_number"
        | "nationality"
        | "start_date"
        | "work_email"
        | "private_email"
        | "yearly_salary";
      type: "checkbox";
    }
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?:
        | "first_name"
        | "last_name"
        | "date_of_birth"
        | "gender"
        | "home_address.city"
        | "home_address.country"
        | "home_address.state"
        | "home_address.street_1"
        | "home_address.street_2"
        | "home_address.zip_code"
        | "job_title"
        | "legal_entity_id"
        | "location_id"
        | "mobile_phone_number"
        | "home_phone_number"
        | "nationality"
        | "start_date"
        | "work_email"
        | "private_email"
        | "yearly_salary";
      type: "object";
      properties: Schema1;
    }
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?:
        | "first_name"
        | "last_name"
        | "date_of_birth"
        | "gender"
        | "home_address.city"
        | "home_address.country"
        | "home_address.state"
        | "home_address.street_1"
        | "home_address.street_2"
        | "home_address.zip_code"
        | "job_title"
        | "legal_entity_id"
        | "location_id"
        | "mobile_phone_number"
        | "home_phone_number"
        | "nationality"
        | "start_date"
        | "work_email"
        | "private_email"
        | "yearly_salary";
      type: "array";
      item_type: Schema2;
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      min_items?: number | null;
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      max_items?: number | null;
    }
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?:
        | "first_name"
        | "last_name"
        | "date_of_birth"
        | "gender"
        | "home_address.city"
        | "home_address.country"
        | "home_address.state"
        | "home_address.street_1"
        | "home_address.street_2"
        | "home_address.zip_code"
        | "job_title"
        | "legal_entity_id"
        | "location_id"
        | "mobile_phone_number"
        | "home_phone_number"
        | "nationality"
        | "start_date"
        | "work_email"
        | "private_email"
        | "yearly_salary";
      type: "file";
      file_restrictions: {
        accepted_mime_types: string[];
        /**
         * @format double
         * @min -1.7976931348623157e+308
         */
        max_file_size?: number | null;
      };
    };

export interface GetCheckApiKeyPositiveResponse {
  status: "success";
  data: {
    environment_id: string;
    /** **(⚠️ Deprecated)** Renamed to `environment_id`. */
    customer_id: string;
  };
}

export interface PostForceSyncPositiveResponse {
  status: "success";
  data: {
    /** We only allow 1 concurrent sync to be running or queued. */
    already_queued: boolean;
    /** ID of the newly-created or already-queued-or-running sync. */
    sync_id: string;
    /** The type of the triggered sync. May differ from request, if the integration does not support delta syncs or if another sync is already running. */
    type: "FULL" | "DELTA";
  };
}

export interface PostForceSyncRequestBody {
  /**
   * The type of the triggered sync.
   * @default "FULL"
   */
  type?: "FULL" | "DELTA";
}

/** The ID of the tool whose passthrough API you want to call (e.g., `personio`). */
export type PostPassthroughToolApiParameterTool = string;

/** The ID of the passthrough API you want to call (some tools provide multiple). Check the endpoint description for a list of all available APIs. */
export type PostPassthroughToolApiParameterApi = string;

export interface PostPassthroughToolApiPositiveResponse {
  status: "success";
  data: {
    /**
     * The full URL of the request that we automatically assemble for you based on the specified `api`, the specified `path`, and the integration's auth credentials. You can use this to debug path-related issues (e.g., the API returning 404 errors).
     * @format uri
     */
    url: string;
    /**
     * The HTTP status code returned from the remote system.
     * @format int64
     */
    status: number;
    /** The HTTP headers returned from the remote system. */
    headers: Record<string, string | string[]>;
    /** The HTTP body returned from the remote system. This will either be an array or object (in the case that JSON was returned) or a string (in any other case). */
    data?: any;
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostPassthroughToolApiRequestBody {
  /** The HTTP method (e.g., `GET`) of the request. */
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  /**
   * The path of the endpoint you want to call. We automatically prepend the base URL of the API (all base URLs are documented in the endpoint description).
   * @pattern ^\/
   */
  path: string;
  /** The headers to send with the request. Note that we automatically supply any authentication-related headers. */
  headers?: Record<string, string>;
  /** The query parameters to send in addition to the ones in the `path`. */
  params?: Record<string, string>;
  /** The data to submit as part of the request body. This can either be an array or object (in which case we will forward it as JSON) or a string (in which case we will forward it raw). */
  data?: any;
  /** If set to `true`, the response will be returned as a base64-encoded string. This is useful for binary data (e.g., PDFs). */
  response_as_base64?: boolean;
  multipart_form_data?: {
    /** The key of the form data */
    name: string;
    /** The value of the form data (Can be an object if the field is of the type file) */
    value:
      | string
      | {
          /** File name of the file you want to upload. We recommend providing something human-readable with a valid file extension (like `Resume.pdf`), as this might be shown in your customer's system. */
          name: string;
          /**
           * Content/MIME type of the file (e.g., `application/pdf`).
           *
           * If you provide `data`, this is required. If you provide `data_url`, this is optional and we'll attempt to use the `Content-Type` header of the response.
           *
           * **Note:** Please validate that the content type you provide is actually meaningful (and not something generic like [`application/octet-stream`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types#applicationoctet-stream)). Especially when using object storage (like AWS S3), it's easy to accidentally discard the content types of user-provided files, so make sure to explicitly persist them when processing uploads from your users (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.html#SysMetadata), [Google Cloud](https://cloud.google.com/storage/docs/metadata#content-type), and [Azure](https://learn.microsoft.com/en-us/rest/api/storageservices/put-blob#request-headers-all-blob-types)).
           * @pattern ^[\w.-]+\/[\w.-]+$
           */
          content_type?: string;
          /**
           * URL to the file you want to upload that can be accessed without authentication headers. We will download the content immediately when receiving the request, so the URL can be short-lived.
           *
           * If you're using an object storage provider (like AWS S3), we strongly recommend providing a signed URL for secure access (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html), [Google Cloud](https://cloud.google.com/storage/docs/access-control/signed-urls), and [Azure](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)).
           *
           * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
           * @format uri
           */
          data_url?: string;
          /**
           * Base64-encoded contents of the file you want to upload.
           *
           * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
           */
          data?: string;
        };
  }[];
  /** Custom options interpreted by the passthrough API adapter you've selected. These options are not documented right now as they're only for very advanced use cases. */
  api_options?: Record<string, string>;
}

export type DeleteIntegrationsIntegrationIdParameterIntegrationId = string;

export interface DeleteIntegrationsIntegrationIdPositiveResponse {
  status: "success";
  data: object;
}

export type DeleteIntegrationsIntegrationIdRequestBody = object;

export type GetIntegrationsIntegrationIdParameterIntegrationId = string;

export interface GetIntegrationsIntegrationIdPositiveResponse {
  status: "success";
  data: {
    id: string;
    tool: {
      /** The ID of the connected tool in Kombo (e.g. `factorial`). */
      id: string;
      label: string;
      /** Internal label that can help you debug specific variants of the integration. Only show the `label` to your users. */
      internal_label: string | null;
      /**
       * URL to an SVG logo of the connected tool. The logo usually contains the tool name.
       * @format uri
       */
      logo_url: string;
      /**
       * URL to a square SVG icon of the connected tool.
       * @format uri
       */
      icon_url: string;
    };
    category: "HRIS" | "ATS" | "ASSESSMENT";
    /**
     * The current status of the integration.
     *
     * - `ACTIVE`: The integration is syncing data as expected.
     * - `INVALID`: The integration has stopped syncing data because of invalid credentials. To fix this, reach out to your customer to [reconnect the integration](../guides/integration-states#credentials-invalid).
     * - `INACTIVE`: The integration has stopped syncing as it's been manually set to inactive. You can [enable it again](../guides/integration-states#inactive) in the integration's page.
     */
    status: "ACTIVE" | "INVALID" | "INACTIVE";
    /**
     * The setup_status is used in conjunction with the filtering and field mapping features. If these are enabled in the connection flow, the integration will start in an "INCOMPLETE" state and move to "COMPLETE" once all steps are finished.
     *
     * - `INCOMPLETE`: Setup is still in progress. Some steps aren’t finished, so no data is available yet. Syncs only run as needed for setup.
     * - `FINAL_SYNC_PENDING`: Setup is complete, and the final sync is running. Data will be available after this sync is done.
     * - `COMPLETED`: Setup is fully finished, and the integration is ready to use.
     */
    setup_status: "INCOMPLETE" | "FINAL_SYNC_PENDING" | "COMPLETED";
    end_user: {
      organization_name: string;
      /** @pattern ^(?!\.)(?!.*\.\.)([\w'+-.]*)[\w+-]@([\da-z][\da-z-]*\.)+[a-z]{2,}$ */
      creator_email: string | null;
      /** The ID you have passed initially to the connection flow to create this integration. */
      origin_id: string | null;
    };
    scope_config: {
      id: string;
      name: string | null;
    };
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    created_at: string;
    beta: boolean;
    read_models: {
      /** ID of the model (e.g. hris_employees). */
      id: string;
      /** Label of the model (e.g. Employees). */
      label: string;
      /** Whether the datapoint is available and enabled and not opted out of. */
      is_available: boolean;
      /**
       * The status of a datapoint of an integrated tool:
       *
       * - `SUPPORTED`: the tool supports the datapoint and it can be used through Kombo.
       * - `UNSUPPORTED`: the tool does not support the datapoint.
       * - `NOT_IMPLEMENTED`: tool supports the datapoint but it was not integrated by Kombo for a given reason (see coverage grid).
       * - `UNKNOWN`: the datapoint is not integrated yet and Kombo has no information about it's availability in the tool.
       */
      coverage_status:
        | "SUPPORTED"
        | "UNSUPPORTED"
        | "NOT_IMPLEMENTED"
        | "UNKNOWN";
      /** The setting of the datapoint in the scope config that you configured in the Kombo dashboard. */
      scope_config_setting: "ENABLED" | "DISABLED" | "OPTIONAL";
      /** Whether the datapoint is opted out by your customer in the connection flow. */
      opted_out_by_customer: boolean;
      fields: {
        /** Key of the field in the API (e.g. first_name). */
        id: string;
        /** Whether the datapoint is available and enabled and not opted out of. */
        is_available: boolean;
        /**
         * The status of a datapoint of an integrated tool:
         *
         * - `SUPPORTED`: the tool supports the datapoint and it can be used through Kombo.
         * - `UNSUPPORTED`: the tool does not support the datapoint.
         * - `NOT_IMPLEMENTED`: tool supports the datapoint but it was not integrated by Kombo for a given reason (see coverage grid).
         * - `UNKNOWN`: the datapoint is not integrated yet and Kombo has no information about it's availability in the tool.
         */
        coverage_status:
          | "SUPPORTED"
          | "UNSUPPORTED"
          | "NOT_IMPLEMENTED"
          | "UNKNOWN";
        /** The setting of the datapoint in the scope config that you configured in the Kombo dashboard. */
        scope_config_setting: "ENABLED" | "DISABLED" | "OPTIONAL";
        /** Whether the datapoint is opted out by your customer in the connection flow. */
        opted_out_by_customer: boolean;
      }[];
    }[];
  };
}

export type PostIntegrationsIntegrationIdRelinkParameterIntegrationId = string;

export interface PostIntegrationsIntegrationIdRelinkPositiveResponse {
  status: "success";
  data: {
    /** @format uri */
    link: string;
  };
}

export interface PostIntegrationsIntegrationIdRelinkRequestBody {
  /**
   * Language of the connection flow UI.
   * @default "en"
   */
  language?: "en" | "de" | "fr" | "it" | "es";
  /**
   * Specify a scope config which the integration will start using once the reconnection flow has been completed.
   *
   * This can be useful if you want to update the permissions of an integration, but only want the change to take effect once the user has updated their API credentials to prevent sync issues.
   */
  scope_config_id?: string | null;
  /**
   * The type of link you want to create. `EMBEDDED` is for the [embedded flow](../guides/connect/embedded-flow) using the Kombo Connect SDK (these links are valid for 1 hour) and `MAGIC_LINK` is for [magic links](../guides/connect/magic-links) which you send out manually to customers (there are valid for 1 year).
   *
   * This defaults to `EMBEDDED`, which is our recommended method of implementing the connection flow for a seamless user experience.
   * @default "EMBEDDED"
   */
  link_type?: "EMBEDDED" | "MAGIC_LINK";
}

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId =
  string;

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor =
  string;

/**
 * The number of results to return per page. Maximum is 2000.
 * @format int64
 * @min 1
 * @max 2000
 * @default 100
 */
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize =
  number;

export interface GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse {
  status: "success";
  data: {
    results: {
      /** The unique ID of the field. */
      id: string;
      /** The key of the field in the remote system. */
      key: string;
      /** The model the field is associated with. */
      model: string;
      /** The type of the integration field. There is a type to avoid collisions between DEFAULT fields and CUSTOM fields with the same key. */
      type: "DEFAULT" | "CUSTOM";
      /** The label of the field in the remote system. */
      label: string | null;
      /** Whether the field is included in the integrations_fields array of the corresponding model. */
      is_passthrough_enabled: boolean;
      /** This field is related to a deprecated feature and means nothing, but is kept for backwards compatibility. */
      is_writable: false;
    }[];
    /** **(⚠️ Deprecated - Use `next` instead.)** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next_cursor: string | null;
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
  };
}

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId =
  string;

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId =
  string;

export interface PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse {
  status: "success";
  data: {
    /** The unique ID of the field. */
    id: string;
    /** The key of the field in the remote system. */
    key: string;
    /** The model the field is associated with. */
    model: string;
    /** The type of the integration field. There is a type to avoid collisions between DEFAULT fields and CUSTOM fields with the same key. */
    type: "DEFAULT" | "CUSTOM";
    /** The label of the field in the remote system. */
    label: string | null;
    /** Whether the field is included in the integrations_fields array of the corresponding model. */
    is_passthrough_enabled: boolean;
    /** This field is related to a deprecated feature and means nothing, but is kept for backwards compatibility. */
    is_writable: false;
  };
}

export interface PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody {
  enable_passthrough: boolean | null;
}

export type GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId =
  string;

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetIntegrationsIntegrationIdCustomFieldsParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = number;

export interface GetIntegrationsIntegrationIdCustomFieldsPositiveResponse {
  status: "success";
  data: {
    results: {
      /** The unique ID of the field */
      id: string;
      /** The key of the custom field as it will be used in the custom_field object of the corresponding model */
      key: string;
      /** The integration field the custom field is mapped to. Null if not mapped. */
      integration_field: {
        /** The integration field's unique ID */
        id: string;
        /** The key of the integration field in the remote system */
        key: string;
        /** The type of the integration field. There is a type to avoid collisions between DEFAULT fields and CUSTOM fields with the same key. */
        type: "DEFAULT" | "CUSTOM";
        /** The label of the integration field in the remote system */
        label: string | null;
      };
      /** The model the field is associated with */
      model: string;
      /** The label of the custom field */
      label: string | null;
      /** The description of the custom field */
      description: string | null;
    }[];
    /** **(⚠️ Deprecated - Use `next` instead.)** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next_cursor: string | null;
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
  };
}

/** The unique ID of the integration where the custom field mapping should be updated */
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId =
  string;

/** The unique ID of the custom field that should be updated */
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId =
  string;

export interface PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse {
  status: "success";
  data: {
    /** The unique ID of the field */
    id: string;
    /** The key of the custom field as it will be used in the custom_field object of the corresponding model */
    key: string;
    /** The integration field the custom field is mapped to. Null if not mapped. */
    integration_field: {
      /** The integration field's unique ID */
      id: string;
      /** The key of the integration field in the remote system */
      key: string;
      /** The type of the integration field. There is a type to avoid collisions between DEFAULT fields and CUSTOM fields with the same key. */
      type: "DEFAULT" | "CUSTOM";
      /** The label of the integration field in the remote system */
      label: string | null;
    };
    /** The model the field is associated with */
    model: string;
    /** The label of the custom field */
    label: string | null;
    /** The description of the custom field */
    description: string | null;
  };
}

export interface PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody {
  /** The integration field's unique ID which the custom field should be mapped to. Null to remove a mapping. */
  integration_field_id: string | null;
}

export interface GetToolsCategoryPositiveResponse {
  status: "success";
  data: {
    tools: {
      id: string;
      label: string;
      /** Internal label that can help you debug specific variants of the integration. Only show the `label` to your users. */
      internal_label: string | null;
      assets: {
        logo_url: string;
        icon_url: string;
        icon_black_url: string;
      };
      /** Markdown formatted text that describes details about the paid API. `null` if the tool is not paid. */
      paid_api_details_markdown: string | null;
      /** Markdown formatted text that describes details about the fast track process. `null` if the fast track process is not available. */
      fast_track_details_markdown: string | null;
      /** Markdown formatted text that describes partnership requirements. `null` if the tool does not require a partnership. */
      partner_only_details_markdown: string | null;
      /** URL to the connection guide for this tool. `null` if no connection guide is available. */
      connection_guide_url: string | null;
      /** This describes the supported models and actions of this tool. */
      coverage: {
        read_models: {
          /** ID of the model (e.g. hris_employees). */
          id: string;
          /** Label of the model (e.g. Employees). */
          label: string;
          /**
           * The status of a datapoint of an integrated tool:
           *
           * - `SUPPORTED`: the tool supports the datapoint and it can be used through Kombo.
           * - `UNSUPPORTED`: the tool does not support the datapoint.
           * - `NOT_IMPLEMENTED`: tool supports the datapoint but it was not integrated by Kombo for a given reason (see coverage grid).
           * - `UNKNOWN`: the datapoint is not integrated yet and Kombo has no information about it's availability in the tool.
           */
          coverage_status:
            | "SUPPORTED"
            | "UNSUPPORTED"
            | "NOT_IMPLEMENTED"
            | "UNKNOWN";
          fields: {
            /** Key of the field in the model (e.g. first_name). */
            id: string;
            /**
             * The status of a datapoint of an integrated tool:
             *
             * - `SUPPORTED`: the tool supports the datapoint and it can be used through Kombo.
             * - `UNSUPPORTED`: the tool does not support the datapoint.
             * - `NOT_IMPLEMENTED`: tool supports the datapoint but it was not integrated by Kombo for a given reason (see coverage grid).
             * - `UNKNOWN`: the datapoint is not integrated yet and Kombo has no information about it's availability in the tool.
             */
            coverage_status:
              | "SUPPORTED"
              | "UNSUPPORTED"
              | "NOT_IMPLEMENTED"
              | "UNKNOWN";
          }[];
        }[];
        write_actions: {
          id: string;
          label: string;
          /**
           * The status of a datapoint of an integrated tool:
           *
           * - `SUPPORTED`: the tool supports the datapoint and it can be used through Kombo.
           * - `UNSUPPORTED`: the tool does not support the datapoint.
           * - `NOT_IMPLEMENTED`: tool supports the datapoint but it was not integrated by Kombo for a given reason (see coverage grid).
           * - `UNKNOWN`: the datapoint is not integrated yet and Kombo has no information about it's availability in the tool.
           */
          coverage_status:
            | "SUPPORTED"
            | "UNSUPPORTED"
            | "NOT_IMPLEMENTED"
            | "UNKNOWN";
        }[];
        features: {
          id: string;
          label: string;
          /**
           * The status of a datapoint of an integrated tool:
           *
           * - `SUPPORTED`: the tool supports the datapoint and it can be used through Kombo.
           * - `UNSUPPORTED`: the tool does not support the datapoint.
           * - `NOT_IMPLEMENTED`: tool supports the datapoint but it was not integrated by Kombo for a given reason (see coverage grid).
           * - `UNKNOWN`: the datapoint is not integrated yet and Kombo has no information about it's availability in the tool.
           */
          coverage_status:
            | "SUPPORTED"
            | "UNSUPPORTED"
            | "NOT_IMPLEMENTED"
            | "UNKNOWN";
        }[];
      };
    }[];
  };
}

/** ID of the provisioning group (currently only `default` is allowed). */
export type PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = string;

export interface PostHrisProvisioningGroupsGroupIdDiffPositiveResponse {
  status: "success";
  /** The users to provision, deprovision, and optionally update. */
  data: {
    users: {
      /** The users we've found in the HR systems who match the provisioning filters but haven't been provisioned in your system yet. */
      to_provision: {
        /**
         * The email address of the user.
         * @pattern ^(?!\.)(?!.*\.\.)([\w'+-.]*)[\w+-]@([\da-z][\da-z-]*\.)+[a-z]{2,}$
         */
        email: string | null;
        /** The field of the underlying employee (which ones are included depends on the `employee_fields` array you supplied). */
        employee: {
          id?: string;
          remote_id?: string | null;
          first_name?: string | null;
          last_name?: string | null;
          groups?: {
            id: string;
            remote_id: string | null;
            name: string | null;
          }[];
          avatar?: string | null;
          work_location_id?: string | null;
          legal_entity_id?: string | null;
        };
      }[];
      /** The users who've been provisioned in your system but couldn't be found in the HR system or don't match the provisioning filters. */
      to_deprovision: {
        /** _Your_ ID for this user (that you submitted through `origin_id`). */
        origin_id: string;
        /**
         * The email address of the user.
         * @format email
         */
        email: string;
      }[];
      /** The users who are in the HR system and match the provisioning filters but have already been provisioned in your system. */
      already_provisioned: {
        /** _Your_ ID for this user (that you submitted through `origin_id`). */
        origin_id: string;
        /**
         * The email address of the user.
         * @format email
         */
        email: string;
        /** The field of the underlying employee (which ones are included depends on the `employee_fields` array you supplied). */
        employee: {
          id?: string;
          remote_id?: string | null;
          first_name?: string | null;
          last_name?: string | null;
          groups?: {
            id: string;
            remote_id: string | null;
            name: string | null;
          }[];
          avatar?: string | null;
          work_location_id?: string | null;
          legal_entity_id?: string | null;
        };
      }[];
    };
  };
}

export interface PostHrisProvisioningGroupsGroupIdDiffRequestBody {
  /** Array of the already provisioned users in your system. */
  provisioned_users: {
    /** _Your_ ID for this user (_not_ an ID retrieved from Kombo). */
    origin_id: string;
    /**
     * This user's email address.
     * @format email
     */
    email: string;
  }[];
  /** Options to customize what we return. */
  options: {
    /** The employee fields relevant for your use case. */
    employee_fields: (
      | "id"
      | "remote_id"
      | "first_name"
      | "last_name"
      | "groups"
      | "avatar"
      | "work_location_id"
      | "legal_entity_id"
    )[];
  };
}

/** ID of the provisioning group (currently only `default` is allowed). */
export type PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId =
  string;

export interface PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse {
  status: "success";
  data: {
    /**
     * The setup link URL to pass to the Kombo Connect SDK.
     * @format uri
     */
    url: string;
    /**
     * When this link expires.
     * @format date-time
     */
    expires_at: string;
  };
}

export interface PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody {
  /**
   * Language of the UI. Please note that the provisioning setup UI is _not_ translated yet but we're working on it and setting this already will make sure the translations appear once released.
   * @default "en"
   */
  language?: "en" | "de" | "fr" | "it" | "es";
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisEmployeesParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetHrisEmployeesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisEmployeesParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetHrisEmployeesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisEmployeesParameterRemoteIds = string;

/**
 * Filter by a comma-separated list of `ACTIVE`, `PENDING`, `INACTIVE`, `LEAVE`
 * * `ACTIVE`: the employee is **actively employed**
 * * `PENDING`: the employee is **not actively employed yet** (but they signed their contract or are part of an onboarding process)
 * * `INACTIVE`: a full-time employee is no longer employed, or, for a contract worker when their contract runs out
 * * `LEAVE`: the employee is still employed but **currently on leave** (note that not all HR systems support this status — use our absences API for detailed information)
 *
 *
 * Leave this blank to get results matching all values.
 */
export type GetHrisEmployeesParameterEmploymentStatuses = string;

/** Filter by a comma-separated list of group IDs. We will only return employees that are members of _any_ of the groups. */
export type GetHrisEmployeesParameterGroupIds = string;

/** Filter by a comma-separated list of legal entity IDs. We will only return employees that are members of _any_ of the legal entities. */
export type GetHrisEmployeesParameterLegalEntityIds = string;

/** Filter by a comma-separated list of work location IDs. We will only return employees who are at _any_ of the work locations. */
export type GetHrisEmployeesParameterWorkLocationIds = string;

/** Filter by a comma-separated list of work emails. We will only return employees who have _any_ of the work emails. The format of the emails is case-insensitive. */
export type GetHrisEmployeesParameterWorkEmails = string;

/** Filter by a comma-separated list of personal emails. We will only return employees who have _any_ of the personal emails. The format of the emails is case-insensitive. */
export type GetHrisEmployeesParameterPersonalEmails = string;

/** A JSON string with a single key-value pair like {"fieldKey":"fieldValue"} to filter employees by a specific custom field value. Note that the value must be a string, number, boolean or null and the key must be a valid custom field key. Custom fields with a value of type array or object are not supported. */
export type GetHrisEmployeesParameterCustomFields = string;

export interface GetHrisEmployeesPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** The employee’s organization-internal employee number. */
      employee_number: string | null;
      /** The employee’s first name. */
      first_name: string | null;
      /** The employee’s last name. */
      last_name: string | null;
      /** The employee’s nationality. */
      nationality: string | null;
      /** The employee’s full name, including any middle names. Not all HR systems provide an explicit display name, so we recommend falling back to `first_name` and `last_name`. */
      display_full_name: string | null;
      /** The employee’s job title. */
      job_title: string | null;
      /**
       * The employee’s work email address. If the email address is invalid, we will set this to `null`.
       * @pattern ^(?!\.)(?!.*\.\.)([\w'+-.]*)[\w+-]@([\da-z][\da-z-]*\.)+[a-z]{2,}$
       */
      work_email?: string | null;
      /**
       * The employee’s personal email address. If the email address is invalid, we will set this to `null`.
       * @pattern ^(?!\.)(?!.*\.\.)([\w'+-.]*)[\w+-]@([\da-z][\da-z-]*\.)+[a-z]{2,}$
       */
      personal_email?: string | null;
      /** The employee’s mobile phone number. */
      mobile_phone_number: string | null;
      /** The employee’s social security number */
      ssn: string | null;
      /** The employee’s tax ID. */
      tax_id: string | null;
      /** The employee’s gender. */
      gender?:
        | "MALE"
        | "FEMALE"
        | "NON_BINARY"
        | "NOT_SPECIFIED"
        | string
        | null;
      /** The employee’s ethnicity. In rare cases where we can’t find a clear mapping, the original string is passed through. */
      ethnicity?:
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
      /** The employee’s current marital status. In rare cases where we can’t find a clear mapping, the original string is passed through. */
      marital_status?:
        | "SINGLE"
        | "MARRIED"
        | "DOMESTIC_PARTNERSHIP"
        | "WIDOWED"
        | "DIVORCED"
        | "SEPARATED"
        | "NOT_MARRIED"
        | string
        | null;
      /**
       * The employee’s current employment status:
       *
       * - `ACTIVE`: the employee is **actively employed**
       * - `PENDING`: the employee is **not actively employed yet** (but they signed their contract or are part of an onboarding process)
       * - `INACTIVE`: the employee is **not actively employed** anymore
       * - `LEAVE`: the employee is still employed but **currently on leave** (note that not all HR systems support this status — use our absences API for detailed information)
       *
       *  In rare cases where we can’t find a clear mapping, the original string is passed through.
       */
      employment_status?:
        | "ACTIVE"
        | "PENDING"
        | "INACTIVE"
        | "LEAVE"
        | string
        | null;
      /**
       * The employee’s current employment type:
       *
       * - `FULL_TIME`: the employee is actively employed
       * - `PART_TIME`: the employee is working only part of the usual working hours
       * - `CONTRACT`: the employee is working temporarily under a contract
       * - `INTERNSHIP`: the employee is working as an intern
       * - `FREELANCE`: the employee is working as a freelancer
       * - `WORKING_STUDENT`: the employee is working as a working student
       * - `APPRENTICESHIP`: the employee is working in an apprenticeship
       * - `TRAINING`: the employee is working in a training program
       *
       *  In rare cases where we can’t find a clear mapping, the original string is passed through.
       */
      employment_type?:
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
      /**
       * The employee’s weekly working hours.
       * @format double
       * @min -1.7976931348623157e+308
       */
      weekly_hours: number | null;
      /** URL to the employee’s avatar. This is either the raw URL from the HR system (in cases where it can be requested without short-lived authentication) _or_ a URL to a temporarily cached version of the file hosted by Kombo. Kombo will delete the cached file after its deletion in the source system. */
      avatar: string | null;
      /** The Kombo ID of the employee’s work location. The ID can be used to retrieve the work location from the `get work locations` endpoint. */
      work_location_id: string | null;
      /** The Kombo ID of the employee’s legal entity. The ID can be used to retrieve the legal entity from the `get legal entities` endpoint. */
      legal_entity_id: string | null;
      /** The Kombo ID of the employee’s manager. The ID can be used to retrieve the manager from the `get employees` endpoint. */
      manager_id: string | null;
      /** The employee’s home address. */
      home_address?: {
        city?: string | null;
        /** Contains the ISO2 country code if possible. If not, it contains the original value. */
        country?: string | null;
        /** If we have address data, this is filled with the raw address string. */
        raw?: string | null;
        state?: string | null;
        /** If we can parse the address data, this field contains the first part of the street information. */
        street_1?: string | null;
        street_2?: string | null;
        zip_code?: string | null;
      };
      /** The employee’s bank accounts. */
      bank_accounts?: any[] | null;
      /**
       * The employee’s date of birth.
       * @format date-time
       */
      date_of_birth: string | null;
      /**
       * The date the employee started working for the organization.
       * @format date-time
       */
      start_date: string | null;
      /**
       * The date when the employment ends. Can be in the past or future.
       * @format date-time
       */
      termination_date: string | null;
      /**
       * The date and time the object was created in the remote system.
       * @format date-time
       */
      remote_created_at: string | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
      custom_fields: object | null;
      /** An array of selected passthrough integration fields. [Read more](/integration-fields) */
      integration_fields: {
        /** The globally unique ID of this object. */
        id: string;
        /** The key of the field in the remote system. */
        key: string;
        /**
         * - `DEFAULT`: static fields in the remote system.
         * - `CUSTOM`: fields that are created/editable by the user.
         */
        type: "DEFAULT" | "CUSTOM";
        /** The field's value. */
        value?: null;
        /** The label of the field. (not always available) */
        label: string | null;
      }[];
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      employments: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /** The Kombo ID of the employment’s employee. The ID can be used to retrieve the employee from the `get employees` endpoint. */
        employee_id: string;
        /** This field can contain historic job titles. Please use the `job_title` field on the employee for the active job title of an employee. */
        job_title: string | null;
        /**
         * The monetary amount paid to an employee.
         * @format double
         * @min -1.7976931348623157e+308
         */
        pay_rate: number | null;
        /**
         * The time interval which the `pay_rate` is describing.
         *
         * A `pay_rate` value of `12000` with a `pay_period` of `YEAR` would indicate that the employee receives 12000 over the course of a year. In rare cases where we can’t find a clear mapping, the original string is passed through.
         */
        pay_period?:
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
        /**
         * The time interval at which the employee receives payment.
         *
         * A `pay_rate` of `12000`, with a `pay_period` of `YEAR`, and a `pay_frequency` of `MONTHLY` would indicate that the employee is paid 1000 every month. In rare cases where we can’t find a clear mapping, the original string is passed through.
         */
        pay_frequency?:
          | "DAILY"
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
        /**
         * The employee’s current employment type:
         *
         * - `FULL_TIME`: the employee is actively employed
         * - `PART_TIME`: the employee is working only part of the usual working hours
         * - `CONTRACT`: the employee is working temporarily under a contract
         * - `INTERNSHIP`: the employee is working as an intern
         * - `FREELANCE`: the employee is working as a freelancer
         * - `WORKING_STUDENT`: the employee is working as a working student
         * - `APPRENTICESHIP`: the employee is working in an apprenticeship
         * - `TRAINING`: the employee is working in a training program
         *
         *  In rare cases where we can’t find a clear mapping, the original string is passed through.
         */
        employment_type?:
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
        /** The currency that the employee is paid in. Usually returned in [ISO 4217 currency codes](https://www.iso.org/iso-4217-currency-codes.html). */
        pay_currency: string | null;
        /**
         * The date of when the employment started.
         * @format date-time
         */
        effective_date: string | null;
        /**
         * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
         * @format date-time
         */
        changed_at: string;
        /**
         * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
         * @format date-time
         */
        remote_deleted_at: string | null;
        /**
         * Includes the data fetched from the remote system.
         * Please be aware that including this in you scope config might violate other
         * scopes that are set.
         *
         * Remote data always has the endpoint path that we got the data from as the
         * top level key. For example, it could look like: `{ "/companies": { ... }}`
         *
         * This is not available on all plans. Reach out to Kombo if you need it.
         */
        remote_data: object | null;
        /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
        custom_fields: object | null;
        /** An array of selected passthrough integration fields. [Read more](/integration-fields) */
        integration_fields: {
          /** The globally unique ID of this object. */
          id: string;
          /** The key of the field in the remote system. */
          key: string;
          /**
           * - `DEFAULT`: static fields in the remote system.
           * - `CUSTOM`: fields that are created/editable by the user.
           */
          type: "DEFAULT" | "CUSTOM";
          /** The field's value. */
          value?: null;
          /** The label of the field. (not always available) */
          label: string | null;
        }[];
      }[];
      time_off_balances: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /** The Kombo ID of the employee to which the balance belongs to. The ID can be used to retrieve the employee from the `get employees` endpoint. */
        employee_id: string;
        type_id: string;
        /**
         * The amount of time available to the employee.
         * @format double
         * @min -1.7976931348623157e+308
         */
        balance: number | null;
        /** The time-unit of the balance. */
        balance_unit: "HOURS" | "DAYS";
        /**
         * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
         * @format date-time
         */
        changed_at: string;
        /**
         * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
         * @format date-time
         */
        remote_deleted_at: string | null;
        /**
         * The amount of time used by the employee.
         * @format double
         * @min -1.7976931348623157e+308
         */
        used: number | null;
        /** The time-unit of the used time. */
        used_unit: "HOURS" | "DAYS";
        /**
         * Includes the data fetched from the remote system.
         * Please be aware that including this in you scope config might violate other
         * scopes that are set.
         *
         * Remote data always has the endpoint path that we got the data from as the
         * top level key. For example, it could look like: `{ "/companies": { ... }}`
         *
         * This is not available on all plans. Reach out to Kombo if you need it.
         */
        remote_data: object | null;
      }[];
      manager: {
        /** The employee’s first name. */
        first_name: string | null;
        /** The employee’s last name. */
        last_name: string | null;
        /** The employee’s full name, including any middle names. Not all HR systems provide an explicit display name, so we recommend falling back to `first_name` and `last_name`. */
        display_full_name: string | null;
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The employee’s organization-internal employee number. */
        employee_number: string | null;
        /**
         * The employee’s work email address. If the email address is invalid, we will set this to `null`.
         * @pattern ^(?!\.)(?!.*\.\.)([\w'+-.]*)[\w+-]@([\da-z][\da-z-]*\.)+[a-z]{2,}$
         */
        work_email?: string | null;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
        /**
         * The employee’s current employment status:
         *
         * - `ACTIVE`: the employee is **actively employed**
         * - `PENDING`: the employee is **not actively employed yet** (but they signed their contract or are part of an onboarding process)
         * - `INACTIVE`: the employee is **not actively employed** anymore
         * - `LEAVE`: the employee is still employed but **currently on leave** (note that not all HR systems support this status — use our absences API for detailed information)
         *
         *  In rare cases where we can’t find a clear mapping, the original string is passed through.
         */
        employment_status?:
          | "ACTIVE"
          | "PENDING"
          | "INACTIVE"
          | "LEAVE"
          | string
          | null;
        /**
         * The date when the employment ends. Can be in the past or future.
         * @format date-time
         */
        termination_date: string | null;
      };
      groups: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
        /** The name of the group. */
        name: string | null;
        /** Type of the group. */
        type: "DEPARTMENT" | "TEAM" | "COST_CENTER";
      }[];
      legal_entity: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /** The legal entity’s name. */
        name: string | null;
        /** The legal entity’s address. */
        address?: {
          city?: string | null;
          /** Contains the ISO2 country code if possible. If not, it contains the original value. */
          country?: string | null;
          /** If we have address data, this is filled with the raw address string. */
          raw?: string | null;
          state?: string | null;
          /** If we can parse the address data, this field contains the first part of the street information. */
          street_1?: string | null;
          street_2?: string | null;
          zip_code?: string | null;
        };
      };
      /** **(⚠️ Deprecated - Please use `groups` instead.  It includes the same data and the naming is less confusing.)** Maintained field for backwards compatibility. */
      teams: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
        /** The name of the group. */
        name: string | null;
        /** Type of the group. */
        type: "DEPARTMENT" | "TEAM" | "COST_CENTER";
      }[];
      work_location: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /** The work location’s name */
        name: string | null;
        /** The work location’s address */
        address?: {
          city?: string | null;
          /** Contains the ISO2 country code if possible. If not, it contains the original value. */
          country?: string | null;
          /** If we have address data, this is filled with the raw address string. */
          raw?: string | null;
          state?: string | null;
          /** If we can parse the address data, this field contains the first part of the street information. */
          street_1?: string | null;
          street_2?: string | null;
          zip_code?: string | null;
        };
        /** The work location’s type. A freeform string. */
        type: string | null;
        /**
         * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
         * @format date-time
         */
        changed_at: string;
        /**
         * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
         * @format date-time
         */
        remote_deleted_at: string | null;
        /**
         * Includes the data fetched from the remote system.
         * Please be aware that including this in you scope config might violate other
         * scopes that are set.
         *
         * Remote data always has the endpoint path that we got the data from as the
         * top level key. For example, it could look like: `{ "/companies": { ... }}`
         *
         * This is not available on all plans. Reach out to Kombo if you need it.
         */
        remote_data: object | null;
      };
    }[];
  };
}

export interface PostHrisEmployeesPositiveResponse {
  status: "success";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
    remote_id: string;
    /** The employee’s organization-internal employee number. */
    employee_number: string | null;
    /** The employee’s first name. */
    first_name: string | null;
    /** The employee’s last name. */
    last_name: string | null;
    /** The employee’s nationality. */
    nationality: string | null;
    /** The employee’s full name, including any middle names. Not all HR systems provide an explicit display name, so we recommend falling back to `first_name` and `last_name`. */
    display_full_name: string | null;
    /** The employee’s job title. */
    job_title: string | null;
    /**
     * The employee’s work email address. If the email address is invalid, we will set this to `null`.
     * @pattern ^(?!\.)(?!.*\.\.)([\w'+-.]*)[\w+-]@([\da-z][\da-z-]*\.)+[a-z]{2,}$
     */
    work_email?: string | null;
    /**
     * The employee’s personal email address. If the email address is invalid, we will set this to `null`.
     * @pattern ^(?!\.)(?!.*\.\.)([\w'+-.]*)[\w+-]@([\da-z][\da-z-]*\.)+[a-z]{2,}$
     */
    personal_email?: string | null;
    /** The employee’s mobile phone number. */
    mobile_phone_number: string | null;
    /** The employee’s social security number */
    ssn: string | null;
    /** The employee’s tax ID. */
    tax_id: string | null;
    /** The employee’s gender. */
    gender?: "MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED" | string | null;
    /** The employee’s ethnicity. In rare cases where we can’t find a clear mapping, the original string is passed through. */
    ethnicity?:
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
    /** The employee’s current marital status. In rare cases where we can’t find a clear mapping, the original string is passed through. */
    marital_status?:
      | "SINGLE"
      | "MARRIED"
      | "DOMESTIC_PARTNERSHIP"
      | "WIDOWED"
      | "DIVORCED"
      | "SEPARATED"
      | "NOT_MARRIED"
      | string
      | null;
    /**
     * The employee’s current employment status:
     *
     * - `ACTIVE`: the employee is **actively employed**
     * - `PENDING`: the employee is **not actively employed yet** (but they signed their contract or are part of an onboarding process)
     * - `INACTIVE`: the employee is **not actively employed** anymore
     * - `LEAVE`: the employee is still employed but **currently on leave** (note that not all HR systems support this status — use our absences API for detailed information)
     *
     *  In rare cases where we can’t find a clear mapping, the original string is passed through.
     */
    employment_status?:
      | "ACTIVE"
      | "PENDING"
      | "INACTIVE"
      | "LEAVE"
      | string
      | null;
    /**
     * The employee’s current employment type:
     *
     * - `FULL_TIME`: the employee is actively employed
     * - `PART_TIME`: the employee is working only part of the usual working hours
     * - `CONTRACT`: the employee is working temporarily under a contract
     * - `INTERNSHIP`: the employee is working as an intern
     * - `FREELANCE`: the employee is working as a freelancer
     * - `WORKING_STUDENT`: the employee is working as a working student
     * - `APPRENTICESHIP`: the employee is working in an apprenticeship
     * - `TRAINING`: the employee is working in a training program
     *
     *  In rare cases where we can’t find a clear mapping, the original string is passed through.
     */
    employment_type?:
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
    /**
     * The employee’s weekly working hours.
     * @format double
     * @min -1.7976931348623157e+308
     */
    weekly_hours: number | null;
    /** URL to the employee’s avatar. This is either the raw URL from the HR system (in cases where it can be requested without short-lived authentication) _or_ a URL to a temporarily cached version of the file hosted by Kombo. Kombo will delete the cached file after its deletion in the source system. */
    avatar: string | null;
    /** The Kombo ID of the employee’s work location. The ID can be used to retrieve the work location from the `get work locations` endpoint. */
    work_location_id: string | null;
    /** The Kombo ID of the employee’s legal entity. The ID can be used to retrieve the legal entity from the `get legal entities` endpoint. */
    legal_entity_id: string | null;
    /** The Kombo ID of the employee’s manager. The ID can be used to retrieve the manager from the `get employees` endpoint. */
    manager_id: string | null;
    /** The employee’s home address. */
    home_address?: {
      city?: string | null;
      /** Contains the ISO2 country code if possible. If not, it contains the original value. */
      country?: string | null;
      /** If we have address data, this is filled with the raw address string. */
      raw?: string | null;
      state?: string | null;
      /** If we can parse the address data, this field contains the first part of the street information. */
      street_1?: string | null;
      street_2?: string | null;
      zip_code?: string | null;
    };
    /** The employee’s bank accounts. */
    bank_accounts?: any[] | null;
    /**
     * The employee’s date of birth.
     * @format date-time
     */
    date_of_birth: string | null;
    /**
     * The date the employee started working for the organization.
     * @format date-time
     */
    start_date: string | null;
    /**
     * The date when the employment ends. Can be in the past or future.
     * @format date-time
     */
    termination_date: string | null;
    /**
     * The date and time the object was created in the remote system.
     * @format date-time
     */
    remote_created_at: string | null;
    /**
     * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
     * @format date-time
     */
    changed_at: string;
    /**
     * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
     * @format date-time
     */
    remote_deleted_at: string | null;
    /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
    custom_fields: object | null;
    /** An array of selected passthrough integration fields. [Read more](/integration-fields) */
    integration_fields: {
      /** The globally unique ID of this object. */
      id: string;
      /** The key of the field in the remote system. */
      key: string;
      /**
       * - `DEFAULT`: static fields in the remote system.
       * - `CUSTOM`: fields that are created/editable by the user.
       */
      type: "DEFAULT" | "CUSTOM";
      /** The field's value. */
      value?: null;
      /** The label of the field. (not always available) */
      label: string | null;
    }[];
    /**
     * Includes the data fetched from the remote system.
     * Please be aware that including this in you scope config might violate other
     * scopes that are set.
     *
     * Remote data always has the endpoint path that we got the data from as the
     * top level key. For example, it could look like: `{ "/companies": { ... }}`
     *
     * This is not available on all plans. Reach out to Kombo if you need it.
     */
    remote_data: object | null;
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostHrisEmployeesRequestBody {
  /** The first name of the employee. */
  first_name: string;
  /** The last name of the employee. */
  last_name: string;
  /**
   * The email address of the employee to be created. For tools where the personal email address is required, we map this input to the personal email. This is documented on a per-tool basis.
   * @format email
   */
  work_email?: string;
  /** The gender of the employee. */
  gender?: "MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED";
  /** The title of the position this person is working in. */
  job_title?: string;
  /** The employee's home address. */
  home_address?: {
    street_1?: string;
    street_2?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    /**
     * The uppercase two-letter ISO country (e.g., `DE`). For systems that use codes in formats other than `ISO 3166-1 alpha-2`, Kombo transforms the ISO Codes to the appropriate value.
     * @pattern ^[A-Z]{2}$
     */
    country?: string;
  };
  /**
   * The employee's date of birth. This is a plain date (i.e., `yyyy-MM-dd`), all time information is discarded.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  date_of_birth?: string;
  mobile_phone_number?: string;
  home_phone_number?: string;
  /**
   * The uppercase two-letter ISO country (e.g., `DE`). For systems that use codes in formats other than `ISO 3166-1 alpha-2`, Kombo transforms the ISO Codes to the appropriate value.
   * @pattern ^[A-Z]{2}$
   */
  nationality?: string;
  /**
   * Start date of the employee. Also considered to be the hire date. This is a plain date (i.e., `yyyy-MM-dd`), all time information is discarded.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  start_date?: string;
  /** The Kombo ID of the legal entity the employee should be in. This field is required for certain integrations. */
  legal_entity_id?: string;
  /** The Kombo ID of the location the employee should be in. This field is required for certain integrations. */
  location_id?: string;
  /** Additional fields that we will pass through to specific HRIS systems. */
  remote_fields?: {
    /** Fields specific to Humaans. */
    humaans?: {
      /** Fields that we will pass through to Humaans `Employee` object. */
      employee?: Record<string, any>;
    };
    /** Fields specific to Hibob. */
    hibob?: {
      /** Fields that we will pass through to Hibob's `Person` endpoint. */
      employee?: Record<string, any>;
    };
    /** Fields specific to Sympa. */
    sympa?: {
      /** Fields that we will pass through to Sympa's `Employee` object. */
      GenericNewHire?: Record<string, any>;
    };
    /** Fields specific to Silae. */
    silae?: {
      /** The siret of the company. The siret can be found as the remote ID of a Silae legal entity. */
      siret?: string;
      /** Fields that we will passed through to Silae `Employee` object. */
      employee?: Record<string, any>;
      /** Fields that we will passed through to Silae `Employment` object. */
      employment?: Record<string, any>;
    };
    /** Fields specific to PeopleHR. */
    peoplehr?: {
      /**
       * The effective date of the employee's current role. This is a plain date (i.e., `yyyy-MM-dd`), all time information is discarded.
       * @format date-time
       * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
       */
      job_role_effective_date?: string;
      department?: string;
    };
    /** Fields specific to Zoho People. */
    zohopeople?: {
      /**
       * A personnel code used to identify individuals working for the business.
       * @minLength 1
       */
      employee_id?: string;
    };
    /** Fields specific to Workday. */
    workday?: {
      /** Workday job requisition ID of that the employee should be hired for. Provide either this or `position_id`. */
      job_requisition_id?: string;
      /** Workday position ID of that the employee should be hired to. Provide either this or `job_requisition_id`. */
      position_id?: string;
      /** The social security number of the employee. */
      ssn?: string;
      /** The employee's bank account. */
      bank_account?: {
        iban: string;
        bic: string;
        bank_name: string;
      };
    };
    /** Fields specific to Deel. */
    deel?: {
      /** The unique identifier of the candidate in the ATS. */
      candidate_id: string;
      /** The link to the candidate's profile in the ATS. */
      candidate_link: string;
    };
    /** Fields specific to BambooHR. */
    bamboohr?: {
      /** Fields that we will pass through to BambooHR `Employee` object. */
      employee?: Record<string, any>;
    };
    /** Fields specific to Oracle HCM. */
    oracle?: {
      /** The business unit group ID for which the employee should be created. It can be found as a group with the type `null`. */
      group_id: string;
      /** The department group ID for which the employee should be created. It can be found as a group with the type `DEPARTMENT`. */
      department_id: string;
    };
    /** Fields specific to ADP Workforce Now. */
    adpworkforcenow?: {
      /** The onboarding template to be used for the created employee. View the possible values in the Kombo dashboard by clicking on the ADP Workforce Now integration and viewing the field report in the settings tab. */
      onboarding_template_code: string;
      /** The payroll group code (a.k.a. "Company Code") to be used for the created employee. View the possible values in the Kombo dashboard by clicking on the ADP Workforce Now integration and viewing the field report in the settings tab. */
      applicant_payroll_profile_group_code: string;
      /** The position ID of the employment of the manager. Available as mappable custom field on employments. Not the employment ID or employment remote ID! */
      manager_position_id?: string;
      /** The remote id of a Kombo group with type "DEPARTMENT" that will be used as the employee's home department. */
      home_organization_unit_code?: string;
      /** The personal email for the employee. */
      personal_email?: string;
    };
    /** Fields specific to Azure AD/Entra ID. */
    azuread?: {
      /** Azure / entra requires a password to be set when creating a user. The user has to use the password on his initial sign-in and will be forced to change the password once signed in. */
      password: string;
    };
    /** Fields specific to Paycor. */
    paycor?: {
      /** [REQUIRED] Remote ID of a Kombo Group with type "COST_CENTER" */
      paygroupRemoteId: string;
      /** [REQUIRED] Remote ID of a Kombo Group with type "DEPARTMENT" */
      departmentRemoteId: string;
    };
    /** Fields specific to PlanDay. */
    planday?: {
      /** The remote ID of the department for which the employee should be assigned to. It can be found as a group with the type `DEPARTMENT`. */
      department_remote_id: string;
    };
    /** Fields specific to Dayforce. */
    dayforce?: {
      /** The social security number of the employee */
      social_security_number: string;
      /** The pay type of the employee. This needs to be a valid XRefCode from Dayforce. */
      pay_type: string;
      /** The pay class of the employee. This needs to be a valid XRefCode from Dayforce. */
      pay_class: string;
      /** The pay group of the employee. This needs to be a valid XRefCode from Dayforce. */
      pay_group: string;
      /**
       * The base rate of the employee.
       * @format double
       * @min -1.7976931348623157e+308
       */
      base_rate: number;
      /** The role of the employee. This needs to be a valid XRefCode from Dayforce. */
      role: string;
      /** The location of the employee. This needs to be a valid XRefCode from Dayforce. */
      location: string;
      /** The department of the employee. This needs to be a valid XRefCode from Dayforce. */
      department: string;
      /** The job of the employee. This needs to be a valid XRefCode from Dayforce. */
      job: string;
      /** The country of the employee. This needs to be a valid XRefCode from Dayforce. */
      country: string;
    };
  };
}

export type Schema1 = Record<
  string,
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?:
        | "first_name"
        | "last_name"
        | "date_of_birth"
        | "gender"
        | "home_address.city"
        | "home_address.country"
        | "home_address.state"
        | "home_address.street_1"
        | "home_address.street_2"
        | "home_address.zip_code"
        | "job_title"
        | "legal_entity_id"
        | "location_id"
        | "mobile_phone_number"
        | "home_phone_number"
        | "nationality"
        | "start_date"
        | "work_email"
        | "private_email"
        | "yearly_salary";
      type: "text";
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      min_length?: number | null;
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      max_length?: number | null;
      reg_exp?: string | null;
    }
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?:
        | "first_name"
        | "last_name"
        | "date_of_birth"
        | "gender"
        | "home_address.city"
        | "home_address.country"
        | "home_address.state"
        | "home_address.street_1"
        | "home_address.street_2"
        | "home_address.zip_code"
        | "job_title"
        | "legal_entity_id"
        | "location_id"
        | "mobile_phone_number"
        | "home_phone_number"
        | "nationality"
        | "start_date"
        | "work_email"
        | "private_email"
        | "yearly_salary";
      type: "number";
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      min?: number | null;
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      max?: number | null;
    }
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?:
        | "first_name"
        | "last_name"
        | "date_of_birth"
        | "gender"
        | "home_address.city"
        | "home_address.country"
        | "home_address.state"
        | "home_address.street_1"
        | "home_address.street_2"
        | "home_address.zip_code"
        | "job_title"
        | "legal_entity_id"
        | "location_id"
        | "mobile_phone_number"
        | "home_phone_number"
        | "nationality"
        | "start_date"
        | "work_email"
        | "private_email"
        | "yearly_salary";
      type: "date";
    }
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?:
        | "first_name"
        | "last_name"
        | "date_of_birth"
        | "gender"
        | "home_address.city"
        | "home_address.country"
        | "home_address.state"
        | "home_address.street_1"
        | "home_address.street_2"
        | "home_address.zip_code"
        | "job_title"
        | "legal_entity_id"
        | "location_id"
        | "mobile_phone_number"
        | "home_phone_number"
        | "nationality"
        | "start_date"
        | "work_email"
        | "private_email"
        | "yearly_salary";
      type: "single_select";
      options:
        | {
            type: "inline";
            entries: {
              id: string;
              label: string;
              unified_value?: string;
              remote_id: string | number;
            }[];
          }
        | {
            type: "referenced";
            link: string;
          };
    }
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?: string | null;
      type: "multi_select";
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      min_items?: number | null;
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      max_items?: number | null;
      options:
        | {
            type: "inline";
            entries: {
              id: string;
              label: string;
              unified_value?: string;
              remote_id: string | number;
            }[];
          }
        | {
            type: "referenced";
            link: string;
          };
    }
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?:
        | "first_name"
        | "last_name"
        | "date_of_birth"
        | "gender"
        | "home_address.city"
        | "home_address.country"
        | "home_address.state"
        | "home_address.street_1"
        | "home_address.street_2"
        | "home_address.zip_code"
        | "job_title"
        | "legal_entity_id"
        | "location_id"
        | "mobile_phone_number"
        | "home_phone_number"
        | "nationality"
        | "start_date"
        | "work_email"
        | "private_email"
        | "yearly_salary";
      type: "checkbox";
    }
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?:
        | "first_name"
        | "last_name"
        | "date_of_birth"
        | "gender"
        | "home_address.city"
        | "home_address.country"
        | "home_address.state"
        | "home_address.street_1"
        | "home_address.street_2"
        | "home_address.zip_code"
        | "job_title"
        | "legal_entity_id"
        | "location_id"
        | "mobile_phone_number"
        | "home_phone_number"
        | "nationality"
        | "start_date"
        | "work_email"
        | "private_email"
        | "yearly_salary";
      type: "object";
      properties: Schema1;
    }
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?:
        | "first_name"
        | "last_name"
        | "date_of_birth"
        | "gender"
        | "home_address.city"
        | "home_address.country"
        | "home_address.state"
        | "home_address.street_1"
        | "home_address.street_2"
        | "home_address.zip_code"
        | "job_title"
        | "legal_entity_id"
        | "location_id"
        | "mobile_phone_number"
        | "home_phone_number"
        | "nationality"
        | "start_date"
        | "work_email"
        | "private_email"
        | "yearly_salary";
      type: "array";
      item_type: Schema2;
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      min_items?: number | null;
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      max_items?: number | null;
    }
  | {
      label: string;
      required: boolean;
      description?: string | null;
      unified_key?:
        | "first_name"
        | "last_name"
        | "date_of_birth"
        | "gender"
        | "home_address.city"
        | "home_address.country"
        | "home_address.state"
        | "home_address.street_1"
        | "home_address.street_2"
        | "home_address.zip_code"
        | "job_title"
        | "legal_entity_id"
        | "location_id"
        | "mobile_phone_number"
        | "home_phone_number"
        | "nationality"
        | "start_date"
        | "work_email"
        | "private_email"
        | "yearly_salary";
      type: "file";
      file_restrictions: {
        accepted_mime_types: string[];
        /**
         * @format double
         * @min -1.7976931348623157e+308
         */
        max_file_size?: number | null;
      };
    }
>;

export interface GetHrisEmployeesFormPositiveResponse {
  status: "success";
  data: {
    properties: Record<
      string,
      | {
          label: string;
          required: boolean;
          description?: string | null;
          unified_key?:
            | "first_name"
            | "last_name"
            | "date_of_birth"
            | "gender"
            | "home_address.city"
            | "home_address.country"
            | "home_address.state"
            | "home_address.street_1"
            | "home_address.street_2"
            | "home_address.zip_code"
            | "job_title"
            | "legal_entity_id"
            | "location_id"
            | "mobile_phone_number"
            | "home_phone_number"
            | "nationality"
            | "start_date"
            | "work_email"
            | "private_email"
            | "yearly_salary";
          type: "text";
          /**
           * @format double
           * @min -1.7976931348623157e+308
           */
          min_length?: number | null;
          /**
           * @format double
           * @min -1.7976931348623157e+308
           */
          max_length?: number | null;
          reg_exp?: string | null;
        }
      | {
          label: string;
          required: boolean;
          description?: string | null;
          unified_key?:
            | "first_name"
            | "last_name"
            | "date_of_birth"
            | "gender"
            | "home_address.city"
            | "home_address.country"
            | "home_address.state"
            | "home_address.street_1"
            | "home_address.street_2"
            | "home_address.zip_code"
            | "job_title"
            | "legal_entity_id"
            | "location_id"
            | "mobile_phone_number"
            | "home_phone_number"
            | "nationality"
            | "start_date"
            | "work_email"
            | "private_email"
            | "yearly_salary";
          type: "number";
          /**
           * @format double
           * @min -1.7976931348623157e+308
           */
          min?: number | null;
          /**
           * @format double
           * @min -1.7976931348623157e+308
           */
          max?: number | null;
        }
      | {
          label: string;
          required: boolean;
          description?: string | null;
          unified_key?:
            | "first_name"
            | "last_name"
            | "date_of_birth"
            | "gender"
            | "home_address.city"
            | "home_address.country"
            | "home_address.state"
            | "home_address.street_1"
            | "home_address.street_2"
            | "home_address.zip_code"
            | "job_title"
            | "legal_entity_id"
            | "location_id"
            | "mobile_phone_number"
            | "home_phone_number"
            | "nationality"
            | "start_date"
            | "work_email"
            | "private_email"
            | "yearly_salary";
          type: "date";
        }
      | {
          label: string;
          required: boolean;
          description?: string | null;
          unified_key?:
            | "first_name"
            | "last_name"
            | "date_of_birth"
            | "gender"
            | "home_address.city"
            | "home_address.country"
            | "home_address.state"
            | "home_address.street_1"
            | "home_address.street_2"
            | "home_address.zip_code"
            | "job_title"
            | "legal_entity_id"
            | "location_id"
            | "mobile_phone_number"
            | "home_phone_number"
            | "nationality"
            | "start_date"
            | "work_email"
            | "private_email"
            | "yearly_salary";
          type: "single_select";
          options:
            | {
                type: "inline";
                entries: {
                  id: string;
                  label: string;
                  unified_value?: string;
                  remote_id: string | number;
                }[];
              }
            | {
                type: "referenced";
                link: string;
              };
        }
      | {
          label: string;
          required: boolean;
          description?: string | null;
          unified_key?: string | null;
          type: "multi_select";
          /**
           * @format double
           * @min -1.7976931348623157e+308
           */
          min_items?: number | null;
          /**
           * @format double
           * @min -1.7976931348623157e+308
           */
          max_items?: number | null;
          options:
            | {
                type: "inline";
                entries: {
                  id: string;
                  label: string;
                  unified_value?: string;
                  remote_id: string | number;
                }[];
              }
            | {
                type: "referenced";
                link: string;
              };
        }
      | {
          label: string;
          required: boolean;
          description?: string | null;
          unified_key?:
            | "first_name"
            | "last_name"
            | "date_of_birth"
            | "gender"
            | "home_address.city"
            | "home_address.country"
            | "home_address.state"
            | "home_address.street_1"
            | "home_address.street_2"
            | "home_address.zip_code"
            | "job_title"
            | "legal_entity_id"
            | "location_id"
            | "mobile_phone_number"
            | "home_phone_number"
            | "nationality"
            | "start_date"
            | "work_email"
            | "private_email"
            | "yearly_salary";
          type: "checkbox";
        }
      | {
          label: string;
          required: boolean;
          description?: string | null;
          unified_key?:
            | "first_name"
            | "last_name"
            | "date_of_birth"
            | "gender"
            | "home_address.city"
            | "home_address.country"
            | "home_address.state"
            | "home_address.street_1"
            | "home_address.street_2"
            | "home_address.zip_code"
            | "job_title"
            | "legal_entity_id"
            | "location_id"
            | "mobile_phone_number"
            | "home_phone_number"
            | "nationality"
            | "start_date"
            | "work_email"
            | "private_email"
            | "yearly_salary";
          type: "object";
          properties: Schema1;
        }
      | {
          label: string;
          required: boolean;
          description?: string | null;
          unified_key?:
            | "first_name"
            | "last_name"
            | "date_of_birth"
            | "gender"
            | "home_address.city"
            | "home_address.country"
            | "home_address.state"
            | "home_address.street_1"
            | "home_address.street_2"
            | "home_address.zip_code"
            | "job_title"
            | "legal_entity_id"
            | "location_id"
            | "mobile_phone_number"
            | "home_phone_number"
            | "nationality"
            | "start_date"
            | "work_email"
            | "private_email"
            | "yearly_salary";
          type: "array";
          item_type: Schema2;
          /**
           * @format double
           * @min -1.7976931348623157e+308
           */
          min_items?: number | null;
          /**
           * @format double
           * @min -1.7976931348623157e+308
           */
          max_items?: number | null;
        }
      | {
          label: string;
          required: boolean;
          description?: string | null;
          unified_key?:
            | "first_name"
            | "last_name"
            | "date_of_birth"
            | "gender"
            | "home_address.city"
            | "home_address.country"
            | "home_address.state"
            | "home_address.street_1"
            | "home_address.street_2"
            | "home_address.zip_code"
            | "job_title"
            | "legal_entity_id"
            | "location_id"
            | "mobile_phone_number"
            | "home_phone_number"
            | "nationality"
            | "start_date"
            | "work_email"
            | "private_email"
            | "yearly_salary";
          type: "file";
          file_restrictions: {
            accepted_mime_types: string[];
            /**
             * @format double
             * @min -1.7976931348623157e+308
             */
            max_file_size?: number | null;
          };
        }
    >;
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostHrisEmployeesFormPositiveResponse {
  status: "success";
  data: {
    /** The Kombo id of the created employee. If null, we only created a pre-hire which shows up in the next sync after a successful onboarding. */
    id: string | null;
    /** The raw ID of the created employee in the remote system. This is only populated when `id` is set (i.e., when a full employee was created). For pre-hires, use `prehire_id` instead. */
    remote_id: string | null;
    /** The temporary ID returned by the remote system when creating a pre-hire. This ID may change or become invalid when the pre-hire becomes a full employee. Only populated when `id` is null. */
    prehire_id: string | null;
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export type Schema5 = Record<string, Schema4>;

export type Schema6 = Schema4[];

export type Schema4 = string | number | boolean | Schema5 | Schema6;

export type Schema3 = Record<string, Schema4>;

export interface PostHrisEmployeesFormRequestBody {
  properties: Schema3;
}

/** The ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`) */
export type PatchHrisEmployeesEmployeeIdParameterEmployeeId = string;

export interface PatchHrisEmployeesEmployeeIdPositiveResponse {
  status: "success";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
    remote_id: string;
    /** The employee’s organization-internal employee number. */
    employee_number: string | null;
    /** The employee’s first name. */
    first_name: string | null;
    /** The employee’s last name. */
    last_name: string | null;
    /** The employee’s nationality. */
    nationality: string | null;
    /** The employee’s full name, including any middle names. Not all HR systems provide an explicit display name, so we recommend falling back to `first_name` and `last_name`. */
    display_full_name: string | null;
    /** The employee’s job title. */
    job_title: string | null;
    /**
     * The employee’s work email address. If the email address is invalid, we will set this to `null`.
     * @pattern ^(?!\.)(?!.*\.\.)([\w'+-.]*)[\w+-]@([\da-z][\da-z-]*\.)+[a-z]{2,}$
     */
    work_email?: string | null;
    /**
     * The employee’s personal email address. If the email address is invalid, we will set this to `null`.
     * @pattern ^(?!\.)(?!.*\.\.)([\w'+-.]*)[\w+-]@([\da-z][\da-z-]*\.)+[a-z]{2,}$
     */
    personal_email?: string | null;
    /** The employee’s mobile phone number. */
    mobile_phone_number: string | null;
    /** The employee’s social security number */
    ssn: string | null;
    /** The employee’s tax ID. */
    tax_id: string | null;
    /** The employee’s gender. */
    gender?: "MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED" | string | null;
    /** The employee’s ethnicity. In rare cases where we can’t find a clear mapping, the original string is passed through. */
    ethnicity?:
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
    /** The employee’s current marital status. In rare cases where we can’t find a clear mapping, the original string is passed through. */
    marital_status?:
      | "SINGLE"
      | "MARRIED"
      | "DOMESTIC_PARTNERSHIP"
      | "WIDOWED"
      | "DIVORCED"
      | "SEPARATED"
      | "NOT_MARRIED"
      | string
      | null;
    /**
     * The employee’s current employment status:
     *
     * - `ACTIVE`: the employee is **actively employed**
     * - `PENDING`: the employee is **not actively employed yet** (but they signed their contract or are part of an onboarding process)
     * - `INACTIVE`: the employee is **not actively employed** anymore
     * - `LEAVE`: the employee is still employed but **currently on leave** (note that not all HR systems support this status — use our absences API for detailed information)
     *
     *  In rare cases where we can’t find a clear mapping, the original string is passed through.
     */
    employment_status?:
      | "ACTIVE"
      | "PENDING"
      | "INACTIVE"
      | "LEAVE"
      | string
      | null;
    /**
     * The employee’s current employment type:
     *
     * - `FULL_TIME`: the employee is actively employed
     * - `PART_TIME`: the employee is working only part of the usual working hours
     * - `CONTRACT`: the employee is working temporarily under a contract
     * - `INTERNSHIP`: the employee is working as an intern
     * - `FREELANCE`: the employee is working as a freelancer
     * - `WORKING_STUDENT`: the employee is working as a working student
     * - `APPRENTICESHIP`: the employee is working in an apprenticeship
     * - `TRAINING`: the employee is working in a training program
     *
     *  In rare cases where we can’t find a clear mapping, the original string is passed through.
     */
    employment_type?:
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
    /**
     * The employee’s weekly working hours.
     * @format double
     * @min -1.7976931348623157e+308
     */
    weekly_hours: number | null;
    /** URL to the employee’s avatar. This is either the raw URL from the HR system (in cases where it can be requested without short-lived authentication) _or_ a URL to a temporarily cached version of the file hosted by Kombo. Kombo will delete the cached file after its deletion in the source system. */
    avatar: string | null;
    /** The Kombo ID of the employee’s work location. The ID can be used to retrieve the work location from the `get work locations` endpoint. */
    work_location_id: string | null;
    /** The Kombo ID of the employee’s legal entity. The ID can be used to retrieve the legal entity from the `get legal entities` endpoint. */
    legal_entity_id: string | null;
    /** The Kombo ID of the employee’s manager. The ID can be used to retrieve the manager from the `get employees` endpoint. */
    manager_id: string | null;
    /** The employee’s home address. */
    home_address?: {
      city?: string | null;
      /** Contains the ISO2 country code if possible. If not, it contains the original value. */
      country?: string | null;
      /** If we have address data, this is filled with the raw address string. */
      raw?: string | null;
      state?: string | null;
      /** If we can parse the address data, this field contains the first part of the street information. */
      street_1?: string | null;
      street_2?: string | null;
      zip_code?: string | null;
    };
    /** The employee’s bank accounts. */
    bank_accounts?: any[] | null;
    /**
     * The employee’s date of birth.
     * @format date-time
     */
    date_of_birth: string | null;
    /**
     * The date the employee started working for the organization.
     * @format date-time
     */
    start_date: string | null;
    /**
     * The date when the employment ends. Can be in the past or future.
     * @format date-time
     */
    termination_date: string | null;
    /**
     * The date and time the object was created in the remote system.
     * @format date-time
     */
    remote_created_at: string | null;
    /**
     * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
     * @format date-time
     */
    changed_at: string;
    /**
     * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
     * @format date-time
     */
    remote_deleted_at: string | null;
    /**
     * Includes the data fetched from the remote system.
     * Please be aware that including this in you scope config might violate other
     * scopes that are set.
     *
     * Remote data always has the endpoint path that we got the data from as the
     * top level key. For example, it could look like: `{ "/companies": { ... }}`
     *
     * This is not available on all plans. Reach out to Kombo if you need it.
     */
    remote_data: object | null;
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PatchHrisEmployeesEmployeeIdRequestBody {
  /** The first name of the employee. */
  first_name?: string;
  /** The last name of the employee. */
  last_name?: string;
  /**
   * The email address of the employee to be updated. For tools where the personal email address is required, we map this input to the personal email. This is documented on a per-tool basis.
   * @format email
   */
  work_email: string;
  /** The gender of the employee. */
  gender?: "MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED";
  /** The title of the position this person is working in. */
  job_title?: string;
  /** The employee's home address. */
  home_address?: {
    street_1?: string;
    street_2?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    /**
     * The uppercase two-letter ISO country (e.g., `DE`). For systems that use codes in formats other than `ISO 3166-1 alpha-2`, Kombo transforms the ISO Codes to the appropriate value.
     * @pattern ^[A-Z]{2}$
     */
    country?: string;
  };
  /**
   * The employee's date of birth. This is a plain date (i.e., `yyyy-MM-dd`), all time information is discarded.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  date_of_birth?: string;
  mobile_phone_number?: string;
  home_phone_number?: string;
  /**
   * The uppercase two-letter ISO country (e.g., `DE`). For systems that use codes in formats other than `ISO 3166-1 alpha-2`, Kombo transforms the ISO Codes to the appropriate value.
   * @pattern ^[A-Z]{2}$
   */
  nationality?: string;
  /**
   * Start date of the employee. Also considered to be the hire date. This is a plain date (i.e., `yyyy-MM-dd`), all time information is discarded.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  start_date?: string;
  /** The Kombo ID of the legal entity the employee should be in. This field is required for certain integrations. */
  legal_entity_id?: string;
  /** The Kombo ID of the location the employee should be in. This field is required for certain integrations. */
  location_id?: string;
  /** Additional fields that we will pass through to specific HRIS systems. */
  remote_fields?: {
    /** Fields specific to Humaans. */
    humaans?: {
      /** Fields that we will pass through to Humaans `Employee` object. */
      employee?: Record<string, any>;
    };
    /** Fields specific to Hibob. */
    hibob?: {
      /** Fields that we will pass through to Hibob's `Person` endpoint. */
      employee?: Record<string, any>;
    };
    /** Fields specific to Sympa. */
    sympa?: {
      /** Fields that we will pass through to Sympa's `Employee` object. */
      GenericNewHire?: Record<string, any>;
    };
    /** Fields specific to Silae. */
    silae?: {
      /** The siret of the company. The siret can be found as the remote ID of a Silae legal entity. */
      siret?: string;
      /** Fields that we will passed through to Silae `Employee` object. */
      employee?: Record<string, any>;
      /** Fields that we will passed through to Silae `Employment` object. */
      employment?: Record<string, any>;
    };
    /** Fields specific to PeopleHR. */
    peoplehr?: {
      /**
       * The effective date of the employee's current role. This is a plain date (i.e., `yyyy-MM-dd`), all time information is discarded.
       * @format date-time
       * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
       */
      job_role_effective_date?: string;
      department?: string;
    };
    /** Fields specific to Zoho People. */
    zohopeople?: {
      /**
       * A personnel code used to identify individuals working for the business.
       * @minLength 1
       */
      employee_id?: string;
    };
    /** Fields specific to Workday. */
    workday?: {
      /** Workday job requisition ID of that the employee should be hired for. Provide either this or `position_id`. */
      job_requisition_id?: string;
      /** Workday position ID of that the employee should be hired to. Provide either this or `job_requisition_id`. */
      position_id?: string;
      /** The social security number of the employee. */
      ssn?: string;
      /** The employee's bank account. */
      bank_account?: {
        iban: string;
        bic: string;
        bank_name: string;
      };
    };
    /** Fields specific to Deel. */
    deel?: {
      /** The unique identifier of the candidate in the ATS. */
      candidate_id: string;
      /** The link to the candidate's profile in the ATS. */
      candidate_link: string;
    };
    /** Fields specific to BambooHR. */
    bamboohr?: {
      /** Fields that we will pass through to BambooHR `Employee` object. */
      employee?: Record<string, any>;
    };
    /** Fields specific to Oracle HCM. */
    oracle?: {
      /** The business unit group ID for which the employee should be created. It can be found as a group with the type `null`. */
      group_id: string;
      /** The department group ID for which the employee should be created. It can be found as a group with the type `DEPARTMENT`. */
      department_id: string;
    };
    /** Fields specific to ADP Workforce Now. */
    adpworkforcenow?: {
      /** The onboarding template to be used for the created employee. View the possible values in the Kombo dashboard by clicking on the ADP Workforce Now integration and viewing the field report in the settings tab. */
      onboarding_template_code: string;
      /** The payroll group code (a.k.a. "Company Code") to be used for the created employee. View the possible values in the Kombo dashboard by clicking on the ADP Workforce Now integration and viewing the field report in the settings tab. */
      applicant_payroll_profile_group_code: string;
      /** The position ID of the employment of the manager. Available as mappable custom field on employments. Not the employment ID or employment remote ID! */
      manager_position_id?: string;
      /** The remote id of a Kombo group with type "DEPARTMENT" that will be used as the employee's home department. */
      home_organization_unit_code?: string;
      /** The personal email for the employee. */
      personal_email?: string;
    };
    /** Fields specific to Azure AD/Entra ID. */
    azuread?: {
      /** Azure / entra requires a password to be set when creating a user. The user has to use the password on his initial sign-in and will be forced to change the password once signed in. */
      password: string;
    };
    /** Fields specific to Paycor. */
    paycor?: {
      /** [REQUIRED] Remote ID of a Kombo Group with type "COST_CENTER" */
      paygroupRemoteId: string;
      /** [REQUIRED] Remote ID of a Kombo Group with type "DEPARTMENT" */
      departmentRemoteId: string;
    };
    /** Fields specific to PlanDay. */
    planday?: {
      /** The remote ID of the department for which the employee should be assigned to. It can be found as a group with the type `DEPARTMENT`. */
      department_remote_id: string;
    };
    /** Fields specific to Dayforce. */
    dayforce?: {
      /** The social security number of the employee */
      social_security_number: string;
      /** The pay type of the employee. This needs to be a valid XRefCode from Dayforce. */
      pay_type: string;
      /** The pay class of the employee. This needs to be a valid XRefCode from Dayforce. */
      pay_class: string;
      /** The pay group of the employee. This needs to be a valid XRefCode from Dayforce. */
      pay_group: string;
      /**
       * The base rate of the employee.
       * @format double
       * @min -1.7976931348623157e+308
       */
      base_rate: number;
      /** The role of the employee. This needs to be a valid XRefCode from Dayforce. */
      role: string;
      /** The location of the employee. This needs to be a valid XRefCode from Dayforce. */
      location: string;
      /** The department of the employee. This needs to be a valid XRefCode from Dayforce. */
      department: string;
      /** The job of the employee. This needs to be a valid XRefCode from Dayforce. */
      job: string;
      /** The country of the employee. This needs to be a valid XRefCode from Dayforce. */
      country: string;
    };
  };
  /** The social security number of the employee. */
  ssn?: string;
  /** The marital status of an employee. */
  marital_status?:
    | "SINGLE"
    | "MARRIED"
    | "DOMESTIC_PARTNERSHIP"
    | "WIDOWED"
    | "DIVORCED"
    | "SEPARATED"
    | "NOT_MARRIED";
  /**
   * The date on which the employment ends. This date can be in the past or in the future. This is a plain date (i.e., `yyyy-MM-dd`), all time information is discarded.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  termination_date?: string;
  /** Tax ID of the employee. Most countries have different formats of that. In Germany, this is the `Steuer ID` and in the US it's the `TIN`. */
  tax_id?: string;
}

export type PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = string;

export interface PostHrisEmployeesEmployeeIdDocumentsPositiveResponse {
  status: "success";
  data: object;
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostHrisEmployeesEmployeeIdDocumentsRequestBody {
  category_id: string;
  document: {
    /** File name of the file you want to upload. We recommend providing something human-readable with a valid file extension (like `Resume.pdf`), as this might be shown in your customer's system. */
    name: string;
    /**
     * Content/MIME type of the file (e.g., `application/pdf`).
     *
     * If you provide `data`, this is required. If you provide `data_url`, this is optional and we'll attempt to use the `Content-Type` header of the response.
     *
     * **Note:** Please validate that the content type you provide is actually meaningful (and not something generic like [`application/octet-stream`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types#applicationoctet-stream)). Especially when using object storage (like AWS S3), it's easy to accidentally discard the content types of user-provided files, so make sure to explicitly persist them when processing uploads from your users (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.html#SysMetadata), [Google Cloud](https://cloud.google.com/storage/docs/metadata#content-type), and [Azure](https://learn.microsoft.com/en-us/rest/api/storageservices/put-blob#request-headers-all-blob-types)).
     * @pattern ^[\w.-]+\/[\w.-]+$
     */
    content_type?: string;
    /**
     * URL to the file you want to upload that can be accessed without authentication headers. We will download the content immediately when receiving the request, so the URL can be short-lived.
     *
     * If you're using an object storage provider (like AWS S3), we strongly recommend providing a signed URL for secure access (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html), [Google Cloud](https://cloud.google.com/storage/docs/access-control/signed-urls), and [Azure](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)).
     *
     * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
     * @format uri
     */
    data_url?: string;
    /**
     * Base64-encoded contents of the file you want to upload.
     *
     * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
     */
    data?: string;
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisEmployeeDocumentCategoriesParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetHrisEmployeeDocumentCategoriesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetHrisEmployeeDocumentCategoriesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisEmployeeDocumentCategoriesParameterRemoteIds = string;

export interface GetHrisEmployeeDocumentCategoriesPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      /** The employee document category name. For example, "Employment contract". */
      name: string | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
    }[];
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisTeamsParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetHrisTeamsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisTeamsParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetHrisTeamsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisTeamsParameterRemoteIds = string;

export interface GetHrisTeamsPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** The name of the group. */
      name: string | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /** Type of the group. */
      type: "DEPARTMENT" | "TEAM" | "COST_CENTER";
      /** The Kombo ID of the group’s parent group in the organizational structure. The ID can be used to retrieve the group from the `get groups` endpoint. */
      parent_id: string | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
    }[];
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisGroupsParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetHrisGroupsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisGroupsParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetHrisGroupsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisGroupsParameterRemoteIds = string;

/**
 * Filter by a comma-separated list of group types: `DEPARTMENT`, `TEAM`, `COST_CENTER`, or `null` to filter groups without a type.
 *
 * Leave this blank to get results matching all values.
 */
export type GetHrisGroupsParameterTypes = string;

/** Filter by the `name` field. Can be used to find a group by keywords present in the group name. */
export type GetHrisGroupsParameterNameContains = string;

export interface GetHrisGroupsPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** The name of the group. */
      name: string | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /** Type of the group. */
      type: "DEPARTMENT" | "TEAM" | "COST_CENTER";
      /** The Kombo ID of the group’s parent group in the organizational structure. The ID can be used to retrieve the group from the `get groups` endpoint. */
      parent_id: string | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
    }[];
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisEmploymentsParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetHrisEmploymentsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisEmploymentsParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetHrisEmploymentsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisEmploymentsParameterRemoteIds = string;

export interface GetHrisEmploymentsPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      /** The Kombo ID of the employment’s employee. The ID can be used to retrieve the employee from the `get employees` endpoint. */
      employee_id: string;
      /** This field can contain historic job titles. Please use the `job_title` field on the employee for the active job title of an employee. */
      job_title: string | null;
      /**
       * The monetary amount paid to an employee.
       * @format double
       * @min -1.7976931348623157e+308
       */
      pay_rate: number | null;
      /**
       * The time interval which the `pay_rate` is describing.
       *
       * A `pay_rate` value of `12000` with a `pay_period` of `YEAR` would indicate that the employee receives 12000 over the course of a year. In rare cases where we can’t find a clear mapping, the original string is passed through.
       */
      pay_period?:
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
      /**
       * The time interval at which the employee receives payment.
       *
       * A `pay_rate` of `12000`, with a `pay_period` of `YEAR`, and a `pay_frequency` of `MONTHLY` would indicate that the employee is paid 1000 every month. In rare cases where we can’t find a clear mapping, the original string is passed through.
       */
      pay_frequency?:
        | "DAILY"
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
      /**
       * The employee’s current employment type:
       *
       * - `FULL_TIME`: the employee is actively employed
       * - `PART_TIME`: the employee is working only part of the usual working hours
       * - `CONTRACT`: the employee is working temporarily under a contract
       * - `INTERNSHIP`: the employee is working as an intern
       * - `FREELANCE`: the employee is working as a freelancer
       * - `WORKING_STUDENT`: the employee is working as a working student
       * - `APPRENTICESHIP`: the employee is working in an apprenticeship
       * - `TRAINING`: the employee is working in a training program
       *
       *  In rare cases where we can’t find a clear mapping, the original string is passed through.
       */
      employment_type?:
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
      /** The currency that the employee is paid in. Usually returned in [ISO 4217 currency codes](https://www.iso.org/iso-4217-currency-codes.html). */
      pay_currency: string | null;
      /**
       * The date of when the employment started.
       * @format date-time
       */
      effective_date: string | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
      custom_fields: object | null;
      /** An array of selected passthrough integration fields. [Read more](/integration-fields) */
      integration_fields: {
        /** The globally unique ID of this object. */
        id: string;
        /** The key of the field in the remote system. */
        key: string;
        /**
         * - `DEFAULT`: static fields in the remote system.
         * - `CUSTOM`: fields that are created/editable by the user.
         */
        type: "DEFAULT" | "CUSTOM";
        /** The field's value. */
        value?: null;
        /** The label of the field. (not always available) */
        label: string | null;
      }[];
    }[];
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisLocationsParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetHrisLocationsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisLocationsParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetHrisLocationsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisLocationsParameterRemoteIds = string;

/** Filter by the `name` field. Can be used to find a location by keywords present in the location name. */
export type GetHrisLocationsParameterNameContains = string;

export interface GetHrisLocationsPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      /** The work location’s name */
      name: string | null;
      /** The work location’s address */
      address?: {
        city?: string | null;
        /** Contains the ISO2 country code if possible. If not, it contains the original value. */
        country?: string | null;
        /** If we have address data, this is filled with the raw address string. */
        raw?: string | null;
        state?: string | null;
        /** If we can parse the address data, this field contains the first part of the street information. */
        street_1?: string | null;
        street_2?: string | null;
        zip_code?: string | null;
      };
      /** The work location’s type. A freeform string. */
      type: string | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
    }[];
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisAbsenceTypesParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetHrisAbsenceTypesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisAbsenceTypesParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetHrisAbsenceTypesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisAbsenceTypesParameterRemoteIds = string;

export interface GetHrisAbsenceTypesPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** The absence’s name. */
      name: string | null;
      /** The time-unit of the absence. */
      unit: "HOURS" | "DAYS";
      /** Whether the integration supports half-day absences (represented through `start_half_day` and `end_half_day`) for this absence type. */
      half_days_supported: boolean | null;
      /** `true` if the system supports exact times (absences with a `start_time` and an `end_time`) for this absence, `false` if not. */
      exact_times_supported: boolean | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
    }[];
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisTimeOffBalancesParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetHrisTimeOffBalancesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisTimeOffBalancesParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetHrisTimeOffBalancesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisTimeOffBalancesParameterRemoteIds = string;

/** Filter by a specific employee using their ID. */
export type GetHrisTimeOffBalancesParameterEmployeeId = string;

export interface GetHrisTimeOffBalancesPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      /** The Kombo ID of the employee to which the balance belongs to. The ID can be used to retrieve the employee from the `get employees` endpoint. */
      employee_id: string;
      type_id: string;
      /**
       * The amount of time available to the employee.
       * @format double
       * @min -1.7976931348623157e+308
       */
      balance: number | null;
      /** The time-unit of the balance. */
      balance_unit: "HOURS" | "DAYS";
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /**
       * The amount of time used by the employee.
       * @format double
       * @min -1.7976931348623157e+308
       */
      used: number | null;
      /** The time-unit of the used time. */
      used_unit: "HOURS" | "DAYS";
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      type: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
        /** The absence’s name. */
        name: string | null;
        /** The time-unit of the absence. */
        unit: "HOURS" | "DAYS";
        /** Whether the integration supports half-day absences (represented through `start_half_day` and `end_half_day`) for this absence type. */
        half_days_supported: boolean | null;
        /** `true` if the system supports exact times (absences with a `start_time` and an `end_time`) for this absence, `false` if not. */
        exact_times_supported: boolean | null;
        /**
         * Includes the data fetched from the remote system.
         * Please be aware that including this in you scope config might violate other
         * scopes that are set.
         *
         * Remote data always has the endpoint path that we got the data from as the
         * top level key. For example, it could look like: `{ "/companies": { ... }}`
         *
         * This is not available on all plans. Reach out to Kombo if you need it.
         */
        remote_data: object | null;
        /**
         * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
         * @format date-time
         */
        changed_at: string;
        /**
         * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
         * @format date-time
         */
        remote_deleted_at: string | null;
      };
    }[];
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisAbsencesParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetHrisAbsencesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisAbsencesParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetHrisAbsencesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisAbsencesParameterRemoteIds = string;

/**
 * Filter for all the absences that either start _or_ haven't ended yet on/after this day. If you imagine a calendar displaying absences, this defines the left-most visible day. This is a plain date (i.e., `yyyy-MM-dd`), all time information is discarded.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisAbsencesParameterDateFrom = string;

/**
 * Filter for absences that start on or before this day (but might continue after). If you imagine a calendar displaying absences, this defines the right-most visible day. This is a plain date (i.e., `yyyy-MM-dd`), all time information is discarded.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisAbsencesParameterDateUntil = string;

/** Filter by a comma-separated list of absence type IDs. */
export type GetHrisAbsencesParameterTypeIds = string;

/** Filter by a specific employee using their ID. */
export type GetHrisAbsencesParameterEmployeeId = string;

/**
 * **(⚠️ Deprecated - Use the `date_from` filter instead.)** Filter for absences that either start after or start before and end after a certain time.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisAbsencesParameterTimeFrom = string;

/**
 * **(⚠️ Deprecated - Use the `date_until` filter instead.)** Filter for absences that start before a certain time.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisAbsencesParameterTimeUntil = string;

export interface GetHrisAbsencesPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      /** The Kombo ID of the employee to which the absence belongs to. The ID can be used to retrieve the employee from the `get employees` endpoint. */
      employee_id: string;
      /** **(⚠️ Deprecated - We won't increase coverage for this feature)** The Kombo ID of the employee who is responsible for approving this absence. */
      approver_id: string | null;
      /** The date this absence starts in the `yyyy-MM-dd` format. */
      start_date: null;
      /** The date this absence ends in the `yyyy-MM-dd` format. */
      end_date: null;
      /** `true` if the absence starts in the middle of the day, `false` if not, and `null` if the absence type doesn't support half-day absences. For multi-day absences, this only applies to the first day of the absence. */
      start_half_day: boolean | null;
      /** `true` if the absence ends in the middle of the day, `false` if not, and `null` if the absence type doesn't support half-day absences. For multi-day absences, this only applies to the last day of the absence. */
      end_half_day: boolean | null;
      /** The time at which this absence starts. Follows the format `HH:mm:ss` (e.g., `14:45:15`). */
      start_time: null;
      /** The time at which this absence ends. Follows the format `HH:mm:ss` (e.g., `14:45:15`). */
      end_time: null;
      /**
       * The amount of time this absence takes.
       * @format double
       * @min -1.7976931348623157e+308
       */
      amount: number | null;
      /** The unit of time for this absence. Can be `HOURS` or `DAYS`. */
      unit: "HOURS" | "DAYS";
      /** The absence’s current status. In rare cases where we can’t find a clear mapping, the original string is passed through. */
      status?:
        | "REQUESTED"
        | "APPROVED"
        | "DECLINED"
        | "CANCELLED"
        | "DELETED"
        | string
        | null;
      /** A note the employee has added to this absence. */
      employee_note: string | null;
      /** The Kombo absence type ID of this absence. */
      type_id: string | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      type: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
        /** The absence’s name. */
        name: string | null;
        /** The time-unit of the absence. */
        unit: "HOURS" | "DAYS";
        /** Whether the integration supports half-day absences (represented through `start_half_day` and `end_half_day`) for this absence type. */
        half_days_supported: boolean | null;
        /** `true` if the system supports exact times (absences with a `start_time` and an `end_time`) for this absence, `false` if not. */
        exact_times_supported: boolean | null;
        /**
         * Includes the data fetched from the remote system.
         * Please be aware that including this in you scope config might violate other
         * scopes that are set.
         *
         * Remote data always has the endpoint path that we got the data from as the
         * top level key. For example, it could look like: `{ "/companies": { ... }}`
         *
         * This is not available on all plans. Reach out to Kombo if you need it.
         */
        remote_data: object | null;
        /**
         * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
         * @format date-time
         */
        changed_at: string;
        /**
         * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
         * @format date-time
         */
        remote_deleted_at: string | null;
      };
    }[];
  };
}

export interface PostHrisAbsencesPositiveResponse {
  status: "success";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
    remote_id: string | null;
    /** The Kombo ID of the employee to which the absence belongs to. The ID can be used to retrieve the employee from the `get employees` endpoint. */
    employee_id: string;
    /** **(⚠️ Deprecated - We won't increase coverage for this feature)** The Kombo ID of the employee who is responsible for approving this absence. */
    approver_id: string | null;
    /** The date this absence starts in the `yyyy-MM-dd` format. */
    start_date: null;
    /** The date this absence ends in the `yyyy-MM-dd` format. */
    end_date: null;
    /** `true` if the absence starts in the middle of the day, `false` if not, and `null` if the absence type doesn't support half-day absences. For multi-day absences, this only applies to the first day of the absence. */
    start_half_day: boolean | null;
    /** `true` if the absence ends in the middle of the day, `false` if not, and `null` if the absence type doesn't support half-day absences. For multi-day absences, this only applies to the last day of the absence. */
    end_half_day: boolean | null;
    /** The time at which this absence starts. Follows the format `HH:mm:ss` (e.g., `14:45:15`). */
    start_time: null;
    /** The time at which this absence ends. Follows the format `HH:mm:ss` (e.g., `14:45:15`). */
    end_time: null;
    /**
     * The amount of time this absence takes.
     * @format double
     * @min -1.7976931348623157e+308
     */
    amount: number | null;
    /** The unit of time for this absence. Can be `HOURS` or `DAYS`. */
    unit: "HOURS" | "DAYS";
    /** The absence’s current status. In rare cases where we can’t find a clear mapping, the original string is passed through. */
    status?:
      | "REQUESTED"
      | "APPROVED"
      | "DECLINED"
      | "CANCELLED"
      | "DELETED"
      | string
      | null;
    /** A note the employee has added to this absence. */
    employee_note: string | null;
    /** The Kombo absence type ID of this absence. */
    type_id: string | null;
    /**
     * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
     * @format date-time
     */
    changed_at: string;
    /**
     * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
     * @format date-time
     */
    remote_deleted_at: string | null;
    /**
     * Includes the data fetched from the remote system.
     * Please be aware that including this in you scope config might violate other
     * scopes that are set.
     *
     * Remote data always has the endpoint path that we got the data from as the
     * top level key. For example, it could look like: `{ "/companies": { ... }}`
     *
     * This is not available on all plans. Reach out to Kombo if you need it.
     */
    remote_data: object | null;
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostHrisAbsencesRequestBody {
  /** The ID of the employee in Kombo or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`) */
  employee_id: string;
  /** The ID of the absence type in Kombo (not its `remote_id`). */
  absence_type_id: string;
  /**
   * The state that the absence should be created in. Some tools may approve absences automatically if they were created for an absence type that does not require approval.
   * @default "REQUESTED"
   */
  status?: "REQUESTED" | "APPROVED";
  /**
   * The date that the absence starts. This is a plain date (i.e., `yyyy-MM-dd`), with all time information discarded.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  start_date: string;
  /**
   * When the absence ends.The date that the absence ends. This is a plain date (i.e., `yyyy-MM-dd`), with all time information discarded.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  end_date: string;
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
   * The amount of time of the absence. Specifying this also requires specifying `unit`. This is supported by very few tools.
   * @format double
   * @min 0
   */
  amount?: number;
  /** The time unit of the `amount` value. Specifying this also requires specifying `amount`. */
  unit?: "HOURS" | "DAYS";
  /** A note describing the reason for this absence. */
  employee_note: string | null;
  /**
   * The time of when the absence begins. Follows the format `HH:mm` or `HH:mm:ss` (e.g., `14:45:15`). If `start_time` is specified, `end_time` has to be specified as well.
   * @pattern ^(?:2[0-3]|[01]?\d):[0-5]?\d(:[0-5]?\d)?$
   */
  start_time?: string;
  /**
   * The time of when the absence ends. Follows the format `HH:mm` or `HH:mm:ss` (e.g., `14:45:15`). If `end_time` is specified, `start_time` has to be specified as well.
   * @pattern ^(?:2[0-3]|[01]?\d):[0-5]?\d(:[0-5]?\d)?$
   */
  end_time?: string;
  /** Additional fields that we will pass through to specific HRIS systems. */
  remote_fields?: {
    /** Fields specific to ADP Workforce Now. */
    adpworkforcenow?: {
      /** [Required] The employment ID of the employee that the absence will be added to. */
      employment_id?: string;
      /** Whether the absence is paid or not. */
      paid_leave?: boolean;
    };
  };
}

/** The Kombo ID of the absence */
export type DeleteHrisAbsencesAbsenceIdParameterAbsenceId = string;

export interface DeleteHrisAbsencesAbsenceIdPositiveResponse {
  status: "success";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
    remote_id: string | null;
    /** The Kombo ID of the employee to which the absence belongs to. The ID can be used to retrieve the employee from the `get employees` endpoint. */
    employee_id: string;
    /** **(⚠️ Deprecated - We won't increase coverage for this feature)** The Kombo ID of the employee who is responsible for approving this absence. */
    approver_id: string | null;
    /** The date this absence starts in the `yyyy-MM-dd` format. */
    start_date: null;
    /** The date this absence ends in the `yyyy-MM-dd` format. */
    end_date: null;
    /** `true` if the absence starts in the middle of the day, `false` if not, and `null` if the absence type doesn't support half-day absences. For multi-day absences, this only applies to the first day of the absence. */
    start_half_day: boolean | null;
    /** `true` if the absence ends in the middle of the day, `false` if not, and `null` if the absence type doesn't support half-day absences. For multi-day absences, this only applies to the last day of the absence. */
    end_half_day: boolean | null;
    /** The time at which this absence starts. Follows the format `HH:mm:ss` (e.g., `14:45:15`). */
    start_time: null;
    /** The time at which this absence ends. Follows the format `HH:mm:ss` (e.g., `14:45:15`). */
    end_time: null;
    /**
     * The amount of time this absence takes.
     * @format double
     * @min -1.7976931348623157e+308
     */
    amount: number | null;
    /** The unit of time for this absence. Can be `HOURS` or `DAYS`. */
    unit: "HOURS" | "DAYS";
    /** The absence’s current status. In rare cases where we can’t find a clear mapping, the original string is passed through. */
    status?:
      | "REQUESTED"
      | "APPROVED"
      | "DECLINED"
      | "CANCELLED"
      | "DELETED"
      | string
      | null;
    /** A note the employee has added to this absence. */
    employee_note: string | null;
    /** The Kombo absence type ID of this absence. */
    type_id: string | null;
    /**
     * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
     * @format date-time
     */
    changed_at: string;
    /**
     * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
     * @format date-time
     */
    remote_deleted_at: string | null;
    /**
     * Includes the data fetched from the remote system.
     * Please be aware that including this in you scope config might violate other
     * scopes that are set.
     *
     * Remote data always has the endpoint path that we got the data from as the
     * top level key. For example, it could look like: `{ "/companies": { ... }}`
     *
     * This is not available on all plans. Reach out to Kombo if you need it.
     */
    remote_data: object | null;
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface DeleteHrisAbsencesAbsenceIdRequestBody {
  /** Additional fields that we will pass through to specific HRIS systems. */
  remote_fields?: {
    /** Fields specific to ADP Workforce Now. */
    adpworkforcenow?: {
      /** [Required] The employment ID of the employee that the absence will be deleted from. */
      employment_id?: string;
    };
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisLegalEntitiesParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetHrisLegalEntitiesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisLegalEntitiesParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetHrisLegalEntitiesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisLegalEntitiesParameterRemoteIds = string;

/** Filter by the `name` field. Can be used to find a legal entity by keywords present in the legal entity name. */
export type GetHrisLegalEntitiesParameterNameContains = string;

export interface GetHrisLegalEntitiesPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      /** The legal entity’s name. */
      name: string | null;
      /** The legal entity’s address. */
      address?: {
        city?: string | null;
        /** Contains the ISO2 country code if possible. If not, it contains the original value. */
        country?: string | null;
        /** If we have address data, this is filled with the raw address string. */
        raw?: string | null;
        state?: string | null;
        /** If we can parse the address data, this field contains the first part of the street information. */
        street_1?: string | null;
        street_2?: string | null;
        zip_code?: string | null;
      };
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
    }[];
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisTimesheetsParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetHrisTimesheetsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisTimesheetsParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetHrisTimesheetsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisTimesheetsParameterRemoteIds = string;

/** Returns timesheets for a specific employee. */
export type GetHrisTimesheetsParameterEmployeeId = string;

/**
 * Return timesheets whose start time is before the given timestamp.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisTimesheetsParameterStartedBefore = string;

/**
 * Return timesheets whose start time is on or after the given timestamp.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisTimesheetsParameterStartedAfter = string;

/**
 * Return timesheets whose end time is on or before the given timestamp.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisTimesheetsParameterEndedBefore = string;

/**
 * Return timesheets whose end time is on or after the given timestamp.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisTimesheetsParameterEndedAfter = string;

export interface GetHrisTimesheetsPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      /** The Kombo ID of the employee to which the timesheet belongs. The ID can be used to retrieve the employee from the `get employees` endpoint. */
      employee_id: string;
      /**
       * Start time of the shift, converted into UTC time zone.
       * @format date-time
       */
      started_at: string | null;
      /**
       * End time of the shift, converted into UTC time zone.
       * @format date-time
       */
      ended_at: string | null;
      /**
       * The ISO 8601 numeric UTC offset of the timesheet location in the format ±HH:MM (e.g., "+02:00", "-05:30"). If null, the original offset information was not available. You can use this to display the right timezone for the timesheet in the UI.
       * @pattern ^[+-](?:0\d|1[0-4]):[0-5]\d$
       */
      timezone: string | null;
      /**
       * Payable hours including grace periods - only if available in the HRIS. Won't be calculated through Kombo.
       * @format double
       * @min -1.7976931348623157e+308
       */
      payable_hours: number | null;
      /**
       * Unpaid break in minutes - will be from the HRIS or calculated by Kombo if we have concrete unpaid break times.
       * @format double
       * @min -1.7976931348623157e+308
       */
      unpaid_break_minutes: number | null;
      /** Concrete times of the breaks. */
      breaks?: any[] | null;
      /** Approval status of the shift. Can be PENDING, APPROVED, REJECTED, or null. */
      approval_status: string | null;
      /**
       * The time when the shift was approved.
       * @format date-time
       */
      approved_at: string | null;
      /** Comment on the shift. */
      comment: string | null;
      /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
      custom_fields: object | null;
      /** An array of selected passthrough integration fields. [Read more](/integration-fields) */
      integration_fields: {
        /** The globally unique ID of this object. */
        id: string;
        /** The key of the field in the remote system. */
        key: string;
        /**
         * - `DEFAULT`: static fields in the remote system.
         * - `CUSTOM`: fields that are created/editable by the user.
         */
        type: "DEFAULT" | "CUSTOM";
        /** The field's value. */
        value?: null;
        /** The label of the field. (not always available) */
        label: string | null;
      }[];
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
    }[];
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisPerformanceReviewCyclesParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetHrisPerformanceReviewCyclesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisPerformanceReviewCyclesParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetHrisPerformanceReviewCyclesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisPerformanceReviewCyclesParameterRemoteIds = string;

export interface GetHrisPerformanceReviewCyclesPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** The name of the performance review cycle. */
      name: string | null;
      /**
       * The start date of the review period of the performance review cycle. It is the start date of the evaluation timeframe and the earliest date reviews can be submitted for this cycle.
       * @format date-time
       */
      review_period_start_date: string | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
    }[];
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisPerformanceReviewsParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetHrisPerformanceReviewsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisPerformanceReviewsParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetHrisPerformanceReviewsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisPerformanceReviewsParameterRemoteIds = string;

/**
 * Filter by a comma-separated list of `MANAGER`, `DIRECT_REPORT`, `PEER`, `SELF`
 *
 * Leave this blank to get results matching all values.
 */
export type GetHrisPerformanceReviewsParameterTypes = string;

/** Filter by a comma-separated list of review cycle IDs. */
export type GetHrisPerformanceReviewsParameterReviewCycleIds = string;

/** Filter by a comma-separated list of reviewee IDs. */
export type GetHrisPerformanceReviewsParameterRevieweeIds = string;

export interface GetHrisPerformanceReviewsPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** The relationship between the reviewee and reviewer. Manager: The reviewer is the manager of the reviewee. Direct Report: The reviewer is a direct report of the reviewee (reverse MANAGER). Peer: The reviewer is a peer of the reviewee. Self: The reviewer is the reviewee himself/herself. null: The relationship cannot be determined or the reviewer is missing. */
      type: "MANAGER" | "DIRECT_REPORT" | "PEER" | "SELF";
      /** The summary comment of the performance review. */
      summary_comment: string | null;
      /** The summary rating of the performance review. */
      summary_rating?:
        | {
            type: "NUMERIC";
            /**
             * The minimum value of the summary rating.
             * @format double
             * @min -1.7976931348623157e+308
             */
            min: number | null;
            /**
             * The maximum value of the summary rating.
             * @format double
             * @min -1.7976931348623157e+308
             */
            max: number | null;
            /**
             * The numeric value of the summary rating.
             * @format double
             * @min -1.7976931348623157e+308
             */
            value: number | null;
          }
        | {
            type: "SINGLE_SELECT";
            /** The options of the summary rating. Ordered from bad to good. */
            ordered_options: any[] | null;
            /** The text value of the summary rating. */
            value: string | null;
          }
        | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      /** The employee receiving the review. */
      reviewee: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
        /** The employee’s first name. */
        first_name: string | null;
        /** The employee’s last name. */
        last_name: string | null;
        /** The employee’s full name, including any middle names. Not all HR systems provide an explicit display name, so we recommend falling back to `first_name` and `last_name`. */
        display_full_name: string | null;
        /**
         * The employee’s work email address. If the email address is invalid, we will set this to `null`.
         * @pattern ^(?!\.)(?!.*\.\.)([\w'+-.]*)[\w+-]@([\da-z][\da-z-]*\.)+[a-z]{2,}$
         */
        work_email?: string | null;
        /**
         * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
         * @format date-time
         */
        remote_deleted_at: string | null;
      };
      /** The employee giving/writing the review. */
      reviewer: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
        /** The employee’s first name. */
        first_name: string | null;
        /** The employee’s last name. */
        last_name: string | null;
        /** The employee’s full name, including any middle names. Not all HR systems provide an explicit display name, so we recommend falling back to `first_name` and `last_name`. */
        display_full_name: string | null;
        /**
         * The employee’s work email address. If the email address is invalid, we will set this to `null`.
         * @pattern ^(?!\.)(?!.*\.\.)([\w'+-.]*)[\w+-]@([\da-z][\da-z-]*\.)+[a-z]{2,}$
         */
        work_email?: string | null;
        /**
         * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
         * @format date-time
         */
        remote_deleted_at: string | null;
      };
      review_cycle: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
        /** The name of the performance review cycle. */
        name: string | null;
        /**
         * The start date of the review period of the performance review cycle. It is the start date of the evaluation timeframe and the earliest date reviews can be submitted for this cycle.
         * @format date-time
         */
        review_period_start_date: string | null;
        /**
         * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
         * @format date-time
         */
        changed_at: string;
        /**
         * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
         * @format date-time
         */
        remote_deleted_at: string | null;
        /**
         * Includes the data fetched from the remote system.
         * Please be aware that including this in you scope config might violate other
         * scopes that are set.
         *
         * Remote data always has the endpoint path that we got the data from as the
         * top level key. For example, it could look like: `{ "/companies": { ... }}`
         *
         * This is not available on all plans. Reach out to Kombo if you need it.
         */
        remote_data: object | null;
      };
    }[];
  };
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetHrisSkillsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisSkillsParameterRemoteIds = string;

/** Filter by the `name` field. Can be used to find a skills by keywords present in the skill name. */
export type GetHrisSkillsParameterNameContains = string;

export interface GetHrisSkillsPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** The name of the skill. */
      name: string;
      /** The description of the skill. */
      description: string | null;
      /** List of available skill levels in order of proficiency (e.g., ["Beginner", "Intermediate", "Advanced"]). */
      ordered_levels: any[] | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
    }[];
  };
}

export interface PostHrisSkillsPositiveResponse {
  status: "success";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
    remote_id: string;
    /** The name of the skill. */
    name: string;
    /** The description of the skill. */
    description: string | null;
    /** List of available skill levels in order of proficiency (e.g., ["Beginner", "Intermediate", "Advanced"]). */
    ordered_levels: any[] | null;
    /**
     * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
     * @format date-time
     */
    changed_at: string;
    /**
     * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
     * @format date-time
     */
    remote_deleted_at: string | null;
    /**
     * Includes the data fetched from the remote system.
     * Please be aware that including this in you scope config might violate other
     * scopes that are set.
     *
     * Remote data always has the endpoint path that we got the data from as the
     * top level key. For example, it could look like: `{ "/companies": { ... }}`
     *
     * This is not available on all plans. Reach out to Kombo if you need it.
     */
    remote_data: object | null;
  };
}

export interface PostHrisSkillsRequestBody {
  /** The name of the skill */
  name: string;
  /** List of available skill levels (e.g., ["Beginner", "Intermediate", "Advanced"]) */
  levels?: string[];
}

/** The ID of the skill */
export type PatchHrisSkillsSkillIdParameterSkillId = string;

export interface PatchHrisSkillsSkillIdPositiveResponse {
  status: "success";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
    remote_id: string;
    /** The name of the skill. */
    name: string;
    /** The description of the skill. */
    description: string | null;
    /** List of available skill levels in order of proficiency (e.g., ["Beginner", "Intermediate", "Advanced"]). */
    ordered_levels: any[] | null;
    /**
     * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
     * @format date-time
     */
    changed_at: string;
    /**
     * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
     * @format date-time
     */
    remote_deleted_at: string | null;
    /**
     * Includes the data fetched from the remote system.
     * Please be aware that including this in you scope config might violate other
     * scopes that are set.
     *
     * Remote data always has the endpoint path that we got the data from as the
     * top level key. For example, it could look like: `{ "/companies": { ... }}`
     *
     * This is not available on all plans. Reach out to Kombo if you need it.
     */
    remote_data: object | null;
  };
}

export interface PatchHrisSkillsSkillIdRequestBody {
  /** The name of the skill */
  name?: string;
  /** List of available skill levels (e.g., ["Beginner", "Intermediate", "Advanced"]) */
  levels?: string[];
}

/** The ID of the skill */
export type DeleteHrisSkillsSkillIdParameterSkillId = string;

export interface DeleteHrisSkillsSkillIdPositiveResponse {
  status: "success";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
    remote_id: string;
    /** The name of the skill. */
    name: string;
    /** The description of the skill. */
    description: string | null;
    /** List of available skill levels in order of proficiency (e.g., ["Beginner", "Intermediate", "Advanced"]). */
    ordered_levels: any[] | null;
    /**
     * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
     * @format date-time
     */
    changed_at: string;
    /**
     * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
     * @format date-time
     */
    remote_deleted_at: string | null;
    /**
     * Includes the data fetched from the remote system.
     * Please be aware that including this in you scope config might violate other
     * scopes that are set.
     *
     * Remote data always has the endpoint path that we got the data from as the
     * top level key. For example, it could look like: `{ "/companies": { ... }}`
     *
     * This is not available on all plans. Reach out to Kombo if you need it.
     */
    remote_data: object | null;
  };
}

export type DeleteHrisSkillsSkillIdRequestBody = object;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetHrisEmployeeSkillAssignmentsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisEmployeeSkillAssignmentsParameterRemoteIds = string;

/** Filter by a comma-separated list of employee IDs. */
export type GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = string;

/** Filter by a comma-separated list of skill IDs. */
export type GetHrisEmployeeSkillAssignmentsParameterSkillIds = string;

export interface GetHrisEmployeeSkillAssignmentsPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The unique identifier for the employee skill assignment */
      id: string;
      /** The ID of the employee */
      employee_id: string;
      /** The ID of the skill */
      skill_id: string;
      /** The current skill level of the employee */
      current_level: string | null;
    }[];
  };
}

export interface PostHrisEmployeeSkillAssignmentsPositiveResponse {
  status: "success";
  data: {
    /** The unique identifier for the employee skill assignment */
    id: string;
    /** The ID of the employee */
    employee_id: string;
    /** The ID of the skill */
    skill_id: string;
    /** The current skill level of the employee */
    current_level: string | null;
  };
}

export interface PostHrisEmployeeSkillAssignmentsRequestBody {
  /** The ID of the employee */
  employee_id: string;
  /** The ID of the skill */
  skill_id: string;
  /** The current skill level of the employee */
  current_level?: string;
}

/** The ID of the employee skill assignment */
export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId =
  string;

export interface PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse {
  status: "success";
  data: {
    /** The unique identifier for the employee skill assignment */
    id: string;
    /** The ID of the employee */
    employee_id: string;
    /** The ID of the skill */
    skill_id: string;
    /** The current skill level of the employee */
    current_level: string | null;
  };
}

export interface PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody {
  /** The current skill level of the employee. Can be `null` to remove the skill level. */
  current_level: string | null;
}

/** The ID of the employee skill assignment */
export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId =
  string;

export interface DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse {
  status: "success";
  data: {
    /** The unique identifier for the employee skill assignment */
    id: string;
    /** The ID of the employee */
    employee_id: string;
    /** The ID of the skill */
    skill_id: string;
    /** The current skill level of the employee */
    current_level: string | null;
  };
}

export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody =
  object;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetHrisJobPositionsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisJobPositionsParameterRemoteIds = string;

export interface GetHrisJobPositionsPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** The name of the job position */
      name: string | null;
      /** The description of the job position */
      description: string | null;
      /** The ID of the legal entity */
      legal_entity_id: string | null;
      /** The ID of the location */
      location_id: string | null;
      /** The ID of the department */
      department_id: string | null;
      /** The IDs of the groups associated with this position */
      group_ids: string[];
      /** The ID of the parent job position */
      parent_position_id: string | null;
      /** The skills associated with this position */
      skills: any[] | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
    }[];
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAtsApplicationsParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetAtsApplicationsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsApplicationsParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetAtsApplicationsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetAtsApplicationsParameterRemoteIds = string;

/**
 * Filter by a comma-separated list of `PENDING`, `HIRED`, `DECLINED`
 * * `PENDING`: The application is still being processed.
 * * `HIRED`: The candidate was hired.
 * * `DECLINED`: The candidate was declined.
 *
 *
 * Leave this blank to get results matching all values.
 */
export type GetAtsApplicationsParameterOutcomes = string;

/** Filter by a comma-separated list of job IDs. We will only return applications that are related to _any_ of the jobs. */
export type GetAtsApplicationsParameterJobIds = string;

/** Filter by a comma-separated list of job remote IDs. We will only return applications that are related to _any_ of the jobs. */
export type GetAtsApplicationsParameterJobRemoteIds = string;

/** Filter by a comma-separated list of application stage IDs. We will only return applications that are currently in _any_ of the stages. */
export type GetAtsApplicationsParameterCurrentStageIds = string;

/**
 * Filter applications by the day they were created in the remote system. This allows you to get applications that were created on or after a certain day.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsApplicationsParameterRemoteCreatedAfter = string;

export interface GetAtsApplicationsPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      /**
       * Parsed status of the application. If Kombo identifies that the application was accepted and the candidate hired, it will be `HIRED`. If the application was rejected or the candidate declined, it will be `DECLINED`. If the application is still in process, it will be `PENDING`.
       * Kombo will always try to deliver this information as reliably as possible.
       */
      outcome: "PENDING" | "HIRED" | "DECLINED";
      /** Reason for the rejection of the candidate. */
      rejection_reason_name: string | null;
      /**
       * The time that the application was rejected.
       * @format date-time
       */
      rejected_at: string | null;
      /** ID of the current application stage */
      current_stage_id: string | null;
      /** The Kombo ID of the job which the candidate applied to. The ID can be used to retrieve the job from the `get jobs` endpoint. */
      job_id: string | null;
      /** The Kombo ID of the candidate who applied to the job. The ID can be used to retrieve the candidate from the `get candidates` endpoint. */
      candidate_id: string | null;
      /**
       * A list of answers to screening questions. The screening answer type `FILE` is currently unsupported.
       * @default []
       */
      screening_question_answers?: any[] | null;
      /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
      custom_fields: object | null;
      /** An array of selected passthrough integration fields. [Read more](/integration-fields) */
      integration_fields: {
        /** The globally unique ID of this object. */
        id: string;
        /** The key of the field in the remote system. */
        key: string;
        /**
         * - `DEFAULT`: static fields in the remote system.
         * - `CUSTOM`: fields that are created/editable by the user.
         */
        type: "DEFAULT" | "CUSTOM";
        /** The field's value. */
        value?: null;
        /** The label of the field. (not always available) */
        label: string | null;
      }[];
      /**
       * URL to the application in the source ATS system. When embedding this in your system, please consider that not for all ATS a dedicated application URL is available, so you might need to fall back to the candidate URL.
       * @format uri
       */
      remote_url: string | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
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
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      candidate: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
        /** First name of the candidate. */
        first_name: string | null;
        /** Last name of the candidate. */
        last_name: string | null;
        /**
         * A list of email addresses of the candidate with an optional type. If an email address is invalid, it will be filtered out.
         * @default []
         */
        email_addresses?: any[] | null;
        /**
         * A list of phone numbers of the candidate.
         * @default []
         */
        phone_numbers?: any[] | null;
        /**
         * List of social media accounts of the candidate.
         * @default []
         */
        social_media?: any[] | null;
        /** The hiring source of the candidate. If you're a job board or recruiting service, you can use this to validate which candidates applied through your service and ensure that the correct referral compensation is paid out. */
        source: string | null;
        /**
         * URL to the candidate profile in the source ATS system. When embedding this in your system, please consider that not for all ATS a dedicated candidate profile URL is available, so you might need to fall back to the application URL.
         * @format uri
         */
        remote_url: string | null;
        tags: {
          /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
          id: string;
          /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
          remote_id: string | null;
          name: string | null;
        }[];
      };
      current_stage: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /** The application stage name. For example, "Initial Screening". */
        name: string | null;
        /** @format int64 */
        index: number | null;
      };
      job: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
        /** Title of the job. */
        name: string | null;
      };
      interviews: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /** The title of the interview. */
        title: string | null;
        /**
         * The start time of the interview.
         * @format date-time
         */
        starting_at: string | null;
        /**
         * The end time of the interview.
         * @format date-time
         */
        ending_at: string | null;
        /** Location of the interview. */
        location?: {
          city?: string | null;
          /** Contains the ISO2 country code if possible. If not, it contains the original value. */
          country?: string | null;
          /** If we have address data, this is filled with the raw address string. */
          raw?: string | null;
          state?: string | null;
          /** If we can parse the address data, this field contains the first part of the street information. */
          street_1?: string | null;
          street_2?: string | null;
          zip_code?: string | null;
        };
        /** Whether the interview was canceled or not. If we have no information, this field will be `null`. */
        canceled: boolean | null;
      }[];
      offers: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /**
         * The offer’s current status. The usual flow of statuses is as follows:
         * `DRAFT` -> `APPROVED` -> `SENT` -> `ACCEPTED` or `DECLINED`.
         *
         * Please note that not all systems will expose all statuses. For example, most systems do not include the `APPROVED` status
         *
         * - `ACCEPTED`: The offer was accepted by the candidate.
         * - `DECLINED`: The offer was declined by the candidate.
         * - `SENT`: The offer was sent to the candidate.
         * - `APPROVED`: The draft was approved.
         * - `DRAFT`: The offer is a draft and has not yet been sent to the candidate.
         * - `ABANDONED`: The offer has expired or is no longer valid and should not be considered.
         */
        status:
          | "ACCEPTED"
          | "DECLINED"
          | "SENT"
          | "APPROVED"
          | "DRAFT"
          | "ABANDONED";
      }[];
    }[];
  };
}

/** The Kombo ID of the application you want to move to a different stage. */
export type PutAtsApplicationsApplicationIdStageParameterApplicationId = string;

export interface PutAtsApplicationsApplicationIdStagePositiveResponse {
  status: "success";
  data: object;
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PutAtsApplicationsApplicationIdStageRequestBody {
  /** The Kombo ID of the stage to move the application to. This stage must be allowed for the job that the application is connected to. Get available stages from the `stages` property on the job, not from the deprecated application-stages endpoint. */
  stage_id: string;
  /** Additional fields that we will pass through to specific ATS systems. */
  remote_fields?: {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /** ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it. */
        "On-Behalf-Of"?: string | null;
      };
    };
    /** Workable specific remote fields for ATS actions. */
    workable?: {
      /** The remote ID of the user that will be displayed in the UI as the one that performed the action. */
      on_behalf_of_user_remote_id?: string;
    };
  };
}

/** The Kombo ID of the application you want to create the link for. */
export type PostAtsApplicationsApplicationIdResultLinksParameterApplicationId =
  string;

export interface PostAtsApplicationsApplicationIdResultLinksPositiveResponse {
  status: "success";
  data: object;
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostAtsApplicationsApplicationIdResultLinksRequestBody {
  /** If we can display a display name for the link, we will use this label. */
  label: string;
  /**
   * URL of the link.
   * @format uri
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
    /** Fields specific to iCIMS. */
    icims?: {
      /** The package ID of the assessment that the result link will be added to. */
      assessment_package_id?: string;
    };
    /** Fields specific to Oracle. */
    oracle?: {
      /** Allows you to override the document category for the url. (Default: MISC) */
      override_document_category?:
        | "IRC_CANDIDATE_RESUME"
        | "IRC_CANDIDATE_COVERLETTER"
        | "MISC"
        | "IRC_INTERNAL";
      /** If true, the result link will be posted to all current applications for the candidate. */
      multi_post_to_all_current_applications?: boolean;
    };
  } & {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /** ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it. */
        "On-Behalf-Of"?: string | null;
      };
    };
    /** Workable specific remote fields for ATS actions. */
    workable?: {
      /** The remote ID of the user that will be displayed in the UI as the one that performed the action. */
      on_behalf_of_user_remote_id?: string;
    };
  };
}

/** The Kombo ID of the application you want to create the note for. */
export type PostAtsApplicationsApplicationIdNotesParameterApplicationId =
  string;

export interface PostAtsApplicationsApplicationIdNotesPositiveResponse {
  status: "success";
  data: object;
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostAtsApplicationsApplicationIdNotesRequestBody {
  /** UTF-8 content of the note. */
  content: string;
  /** Content type of the note. Currently only `PLAIN_TEXT` is supported. */
  content_type: "PLAIN_TEXT";
  /** Tool specific remote fields for the note. */
  remote_fields?: {
    /** Teamtailor specific remote fields for the note. */
    teamtailor?: {
      /** ID of the user that created the note. Defaults to the first admin user found. */
      user_id?: string;
    };
    /** Greenhouse specific remote fields for the note. */
    greenhouse?: {
      /** Visibility of the created note. */
      visibility?: "admin_only" | "private" | "public";
    };
    /** Recruitee specific remote fields for the note. */
    recruitee?: {
      /** Visibility of the created note. */
      visibility?: any;
      /** Whether the note is in a stringified JSON format. If true, content should contain a valid JSON as per the [Recruitee API documentation](https://docs.recruitee.com/reference/candidatesidnotes) (body_json field). If false we add the note as a plain text. */
      is_json?: boolean;
    };
    /** Bullhorn specific remote fields for the note. */
    bullhorn?: {
      /** The action (or type) associated with a Note. You can find all available note actions in a Bullhorn instance under System Settings > commentActionList. The default action is `Note`. */
      action?: string;
    };
  } & {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /** ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it. */
        "On-Behalf-Of"?: string | null;
      };
    };
    /** Workable specific remote fields for ATS actions. */
    workable?: {
      /** The remote ID of the user that will be displayed in the UI as the one that performed the action. */
      on_behalf_of_user_remote_id?: string;
    };
  };
}

/** The Kombo ID of the application you want to obtain attachments for. */
export type GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId =
  string;

export interface GetAtsApplicationsApplicationIdAttachmentsPositiveResponse {
  status: "success";
  data: {
    results: {
      type: "CV" | "COVER_LETTER" | "OTHER";
      id: string;
      remote_id: string;
      data_url: string;
      file_name: string;
      content_type: string;
      /**
       * The date when the attachment was created.
       * @format date-time
       */
      remote_created_at: string | null;
      /**
       * The date when the attachment was last updated.
       * @format date-time
       */
      remote_updated_at: string | null;
    }[];
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export type PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId =
  string;

export interface PostAtsApplicationsApplicationIdAttachmentsPositiveResponse {
  status: "success";
  data: object;
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostAtsApplicationsApplicationIdAttachmentsRequestBody {
  attachment: {
    /** File name of the file you want to upload. We recommend providing something human-readable with a valid file extension (like `Resume.pdf`), as this might be shown in your customer's system. */
    name: string;
    /**
     * Content/MIME type of the file (e.g., `application/pdf`).
     *
     * If you provide `data`, this is required. If you provide `data_url`, this is optional and we'll attempt to use the `Content-Type` header of the response.
     *
     * **Note:** Please validate that the content type you provide is actually meaningful (and not something generic like [`application/octet-stream`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types#applicationoctet-stream)). Especially when using object storage (like AWS S3), it's easy to accidentally discard the content types of user-provided files, so make sure to explicitly persist them when processing uploads from your users (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.html#SysMetadata), [Google Cloud](https://cloud.google.com/storage/docs/metadata#content-type), and [Azure](https://learn.microsoft.com/en-us/rest/api/storageservices/put-blob#request-headers-all-blob-types)).
     * @pattern ^[\w.-]+\/[\w.-]+$
     */
    content_type?: string;
    /**
     * URL to the file you want to upload that can be accessed without authentication headers. We will download the content immediately when receiving the request, so the URL can be short-lived.
     *
     * If you're using an object storage provider (like AWS S3), we strongly recommend providing a signed URL for secure access (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html), [Google Cloud](https://cloud.google.com/storage/docs/access-control/signed-urls), and [Azure](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)).
     *
     * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
     * @format uri
     */
    data_url?: string;
    /**
     * Base64-encoded contents of the file you want to upload.
     *
     * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
     */
    data?: string;
    /** Type of the attachment in the ATS. This may affect where the uploaded file will be shown in your customer's system. */
    type: "CV" | "COVER_LETTER" | "OTHER";
  };
  /** Additional fields that we will pass through to specific ATS systems. */
  remote_fields?: {
    /** Oracle specific remote fields for the attachment. */
    oracle?: {
      /** Allows you to override the document category for the attachment. */
      override_document_category?:
        | "IRC_CANDIDATE_RESUME"
        | "IRC_CANDIDATE_COVERLETTER"
        | "MISC"
        | "IRC_INTERNAL";
      /** If true, the attachment will be posted to all current applications for the candidate. */
      multi_post_to_all_current_applications?: boolean;
    };
  } & {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /** ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it. */
        "On-Behalf-Of"?: string | null;
      };
    };
    /** Workable specific remote fields for ATS actions. */
    workable?: {
      /** The remote ID of the user that will be displayed in the UI as the one that performed the action. */
      on_behalf_of_user_remote_id?: string;
    };
  };
}

/** The Kombo ID of the application you want to reject. */
export type PostAtsApplicationsApplicationIdRejectParameterApplicationId =
  string;

export interface PostAtsApplicationsApplicationIdRejectPositiveResponse {
  status: "success";
  data: object;
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostAtsApplicationsApplicationIdRejectRequestBody {
  /** The Kombo ID of the rejection reason. */
  rejection_reason_id: string;
  /** A optional free text rejection note. Passed through if possible. */
  note?: string;
  /** Additional fields that we will pass through to specific ATS systems. */
  remote_fields?: {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Additional data fields that we will pass through to the `rejection_email` field of Greenhouse's [reject application](https://developers.greenhouse.io/harvest.html#post-reject-application) endpoint. */
      rejection_email?: Record<string, any>;
    };
  } & {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /** ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it. */
        "On-Behalf-Of"?: string | null;
      };
    };
    /** Workable specific remote fields for ATS actions. */
    workable?: {
      /** The remote ID of the user that will be displayed in the UI as the one that performed the action. */
      on_behalf_of_user_remote_id?: string;
    };
  };
}

/** The ID of the application */
export type PostAtsApplicationsApplicationIdInterviewsParameterApplicationId =
  string;

export interface PostAtsApplicationsApplicationIdInterviewsPositiveResponse {
  status: "success";
  data: object;
}

export interface PostAtsApplicationsApplicationIdInterviewsRequestBody {
  /** The title of the interview */
  title: string;
  /** The start time of the interview */
  start_time: string;
  /** The end time of the interview */
  end_time: string;
  /** The IDs of the interviewers */
  interviewer_user_ids: string[];
  /** The ID of the organizer */
  organizer_user_id: string;
  location: {
    type: "PHYSICAL" | "VIRTUAL";
    /** The address of the interview */
    address?: string;
  };
}

/** The ID of the application */
export type PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId =
  string;

export interface PatchAtsApplicationsApplicationIdInterviewsPositiveResponse {
  status: "success";
  data: object;
}

export interface PatchAtsApplicationsApplicationIdInterviewsRequestBody {
  /** The ID of the interview */
  interview_id: string;
  /** The title of the interview */
  title: string;
  /** The start time of the interview */
  start_time: string;
  /** The end time of the interview */
  end_time: string;
  /** The IDs of the interviewers */
  interviewer_user_ids: string[];
  /** The ID of the organizer */
  organizer_user_id: string;
  location: {
    type: "PHYSICAL" | "VIRTUAL";
    address?: string;
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAtsCandidatesParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetAtsCandidatesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsCandidatesParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetAtsCandidatesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetAtsCandidatesParameterRemoteIds = string;

/**
 * Filter the candidates based on an email address. When set, returns only the candidates where the given `email` is in `email_addresses`. This filter is case-insensitive.
 * @format email
 */
export type GetAtsCandidatesParameterEmail = string;

/** Filter by a comma-separated list of job IDs. We will only return candidates that have applied to _any_ of the jobs. */
export type GetAtsCandidatesParameterJobIds = string;

/** Filter candidates by first name. This filter is case-insensitive and matches the exact first name. Fuzzy matching might be enabled in the future, so consider this for your implementation. */
export type GetAtsCandidatesParameterFirstName = string;

/** Filter candidates by last name. This filter is case-insensitive and matches the exact last name. Fuzzy matching might be enabled in the future, so consider this for your implementation. */
export type GetAtsCandidatesParameterLastName = string;

export interface GetAtsCandidatesPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** First name of the candidate. */
      first_name: string | null;
      /** Last name of the candidate. */
      last_name: string | null;
      /** The current company of the candidate. */
      company: string | null;
      /** The current job title of the candidate. */
      title: string | null;
      /** Whether the candidate’s profile is confidential in the ATS. */
      confidential: boolean | null;
      /** The hiring source of the candidate. If you're a job board or recruiting service, you can use this to validate which candidates applied through your service and ensure that the correct referral compensation is paid out. */
      source: string | null;
      /**
       * A list of phone numbers of the candidate.
       * @default []
       */
      phone_numbers?: any[] | null;
      /**
       * A list of email addresses of the candidate with an optional type. If an email address is invalid, it will be filtered out.
       * @default []
       */
      email_addresses?: any[] | null;
      /**
       * List of social media accounts of the candidate.
       * @default []
       */
      social_media?: any[] | null;
      /** Location of the candidate. */
      location?: {
        city?: string | null;
        /** Contains the ISO2 country code if possible. If not, it contains the original value. */
        country?: string | null;
        /** If we have address data, this is filled with the raw address string. */
        raw?: string | null;
        state?: string | null;
        /** If we can parse the address data, this field contains the first part of the street information. */
        street_1?: string | null;
        street_2?: string | null;
        zip_code?: string | null;
      };
      /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
      custom_fields: object | null;
      /** An array of selected passthrough integration fields. [Read more](/integration-fields) */
      integration_fields: {
        /** The globally unique ID of this object. */
        id: string;
        /** The key of the field in the remote system. */
        key: string;
        /**
         * - `DEFAULT`: static fields in the remote system.
         * - `CUSTOM`: fields that are created/editable by the user.
         */
        type: "DEFAULT" | "CUSTOM";
        /** The field's value. */
        value?: null;
        /** The label of the field. (not always available) */
        label: string | null;
      }[];
      /**
       * URL to the candidate profile in the source ATS system. When embedding this in your system, please consider that not for all ATS a dedicated candidate profile URL is available, so you might need to fall back to the application URL.
       * @format uri
       */
      remote_url: string | null;
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
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      applications: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /**
         * Parsed status of the application. If Kombo identifies that the application was accepted and the candidate hired, it will be `HIRED`. If the application was rejected or the candidate declined, it will be `DECLINED`. If the application is still in process, it will be `PENDING`.
         * Kombo will always try to deliver this information as reliably as possible.
         */
        outcome: "PENDING" | "HIRED" | "DECLINED";
        /** Reason for the rejection of the candidate. */
        rejection_reason_name: string | null;
        /**
         * The time that the application was rejected.
         * @format date-time
         */
        rejected_at: string | null;
        /**
         * URL to the application in the source ATS system. When embedding this in your system, please consider that not for all ATS a dedicated application URL is available, so you might need to fall back to the candidate URL.
         * @format uri
         */
        remote_url: string | null;
        /**
         * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
         * @format date-time
         */
        changed_at: string;
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
        current_stage: {
          /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
          id: string;
          /** The application stage name. For example, "Initial Screening". */
          name: string | null;
          /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
          remote_id: string | null;
          /** @format int64 */
          index: number | null;
        };
        job: {
          /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
          id: string;
          /** Title of the job. */
          name: string | null;
          /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
          remote_id: string;
        };
      }[];
      tags: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        name: string | null;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
      }[];
    }[];
  };
}

export interface PostAtsCandidatesPositiveResponse {
  status: "success";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
    remote_id: string;
    /** First name of the candidate. */
    first_name: string | null;
    /** Last name of the candidate. */
    last_name: string | null;
    /** The current company of the candidate. */
    company: string | null;
    /** The current job title of the candidate. */
    title: string | null;
    /** Whether the candidate’s profile is confidential in the ATS. */
    confidential: boolean | null;
    /** The hiring source of the candidate. If you're a job board or recruiting service, you can use this to validate which candidates applied through your service and ensure that the correct referral compensation is paid out. */
    source: string | null;
    /**
     * A list of phone numbers of the candidate.
     * @default []
     */
    phone_numbers?: any[] | null;
    /**
     * A list of email addresses of the candidate with an optional type. If an email address is invalid, it will be filtered out.
     * @default []
     */
    email_addresses?: any[] | null;
    /**
     * List of social media accounts of the candidate.
     * @default []
     */
    social_media?: any[] | null;
    /** Location of the candidate. */
    location?: {
      city?: string | null;
      /** Contains the ISO2 country code if possible. If not, it contains the original value. */
      country?: string | null;
      /** If we have address data, this is filled with the raw address string. */
      raw?: string | null;
      state?: string | null;
      /** If we can parse the address data, this field contains the first part of the street information. */
      street_1?: string | null;
      street_2?: string | null;
      zip_code?: string | null;
    };
    /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
    custom_fields: object | null;
    /** An array of selected passthrough integration fields. [Read more](/integration-fields) */
    integration_fields: {
      /** The globally unique ID of this object. */
      id: string;
      /** The key of the field in the remote system. */
      key: string;
      /**
       * - `DEFAULT`: static fields in the remote system.
       * - `CUSTOM`: fields that are created/editable by the user.
       */
      type: "DEFAULT" | "CUSTOM";
      /** The field's value. */
      value?: null;
      /** The label of the field. (not always available) */
      label: string | null;
    }[];
    /**
     * URL to the candidate profile in the source ATS system. When embedding this in your system, please consider that not for all ATS a dedicated candidate profile URL is available, so you might need to fall back to the application URL.
     * @format uri
     */
    remote_url: string | null;
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
    /**
     * Includes the data fetched from the remote system.
     * Please be aware that including this in you scope config might violate other
     * scopes that are set.
     *
     * Remote data always has the endpoint path that we got the data from as the
     * top level key. For example, it could look like: `{ "/companies": { ... }}`
     *
     * This is not available on all plans. Reach out to Kombo if you need it.
     */
    remote_data: object | null;
    /**
     * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
     * @format date-time
     */
    changed_at: string;
    /**
     * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
     * @format date-time
     */
    remote_deleted_at: string | null;
    applications: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      /**
       * Parsed status of the application. If Kombo identifies that the application was accepted and the candidate hired, it will be `HIRED`. If the application was rejected or the candidate declined, it will be `DECLINED`. If the application is still in process, it will be `PENDING`.
       * Kombo will always try to deliver this information as reliably as possible.
       */
      outcome: "PENDING" | "HIRED" | "DECLINED";
      /** Reason for the rejection of the candidate. */
      rejection_reason_name: string | null;
      /**
       * The time that the application was rejected.
       * @format date-time
       */
      rejected_at: string | null;
      /**
       * URL to the application in the source ATS system. When embedding this in your system, please consider that not for all ATS a dedicated application URL is available, so you might need to fall back to the candidate URL.
       * @format uri
       */
      remote_url: string | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
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
      current_stage: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The application stage name. For example, "Initial Screening". */
        name: string | null;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /** @format int64 */
        index: number | null;
      };
      job: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** Title of the job. */
        name: string | null;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
      };
    }[];
    tags: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      name: string | null;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
    }[];
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostAtsCandidatesRequestBody {
  candidate: {
    /** The first name of the candidate. */
    first_name: string;
    /** The last name of the candidate. */
    last_name: string;
    /**
     * The primary email address this application will be created with.
     * @format email
     */
    email_address: string;
    additional_email_addresses?: {
      type: "PERSONAL" | "WORK" | "OTHER";
      /** @format email */
      email_address: string;
    }[];
    /** The company where the candidate is currently working. */
    company?: string;
    /** The current job title of the candidate. */
    title?: string;
    /** The phone number of the candidate. */
    phone_number?: string;
    additional_phone_numbers?: {
      type: "PERSONAL" | "WORK" | "OTHER";
      phone_number: string;
    }[];
    /** The location of the candidate. */
    location?: {
      city?: string;
      /**
       * The uppercase two-letter ISO country (e.g., `DE`). For systems that use codes in formats other than `ISO 3166-1 alpha-2`, Kombo transforms the ISO Codes to the appropriate value.
       * @pattern ^[A-Z]{2}$
       */
      country: string;
      state?: string;
      zip_code?: string;
    };
    /** The gender of the candidate. Must be one of `MALE`, `FEMALE`, or `OTHER`. */
    gender?: "MALE" | "FEMALE" | "OTHER";
    /**
     * The date the candidate is available to start working.
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
       * @min -1.7976931348623157e+308
       */
      amount: number;
    };
    /**
     * A list of social media links of the candidate. The links must be valid URLs.
     * @default []
     */
    social_links?: {
      /** @format uri */
      url: string;
    }[];
  };
  /** Currently, every candidate has one application. If you are interested in talent pools, please contact Kombo. */
  application: {
    /** The Kombo ID or Remote ID of the Job this candidate should apply to. If you want to use the ID of the integrated system (remote_id) you need to prefix the ID with "remote:". You can use the remote ID if you do not want to sync jobs. */
    job_id: string;
    /** Stage this candidate should be in. If left out, the default stage for this job will be used. */
    stage_id?: string;
  };
  /**
   * Array of answers to screening questions. Currently, not all question types are supported, and unsupported ones will not be submitted.
   *
   * The available questions for a job can be retrieved from the get jobs endpoint. The answers will be validated based on the format of the questions. Make sure to follow this schema to avoid errors.
   */
  screening_question_answers?: {
    /** ID of the question returned by the Kombo API. We'll report a warning in the logs if the question can't be found on the job. */
    question_id: string;
    /**
     * Answer to a question. This will be validated based on the question format and throw an error if the answer is invalid. Here is a description of each question type and the required answer format:
     *
     * `TEXT` - Simply provide a "string" answer.
     *
     * `SINGLE_SELECT` - Provide the ID of the answer as a string.
     *
     * `MULTI_SELECT` - Provide a string array containing the question IDs of the selected options.
     *
     * `BOOLEAN` - Either `true` or `false`.
     *
     * `NUMBER` - A number.
     *
     * `DATE` - Provide the answer as an ISO 8601 date string.
     *
     * `FILE` - Please select Option 6 in the dropdown above to see the required format.
     */
    answer:
      | string
      | boolean
      | number
      | string[]
      | {
          /** File name of the file you want to upload. We recommend providing something human-readable with a valid file extension (like `Resume.pdf`), as this might be shown in your customer's system. */
          name: string;
          /**
           * Content/MIME type of the file (e.g., `application/pdf`).
           *
           * If you provide `data`, this is required. If you provide `data_url`, this is optional and we'll attempt to use the `Content-Type` header of the response.
           *
           * **Note:** Please validate that the content type you provide is actually meaningful (and not something generic like [`application/octet-stream`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types#applicationoctet-stream)). Especially when using object storage (like AWS S3), it's easy to accidentally discard the content types of user-provided files, so make sure to explicitly persist them when processing uploads from your users (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.html#SysMetadata), [Google Cloud](https://cloud.google.com/storage/docs/metadata#content-type), and [Azure](https://learn.microsoft.com/en-us/rest/api/storageservices/put-blob#request-headers-all-blob-types)).
           * @pattern ^[\w.-]+\/[\w.-]+$
           */
          content_type?: string;
          /**
           * URL to the file you want to upload that can be accessed without authentication headers. We will download the content immediately when receiving the request, so the URL can be short-lived.
           *
           * If you're using an object storage provider (like AWS S3), we strongly recommend providing a signed URL for secure access (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html), [Google Cloud](https://cloud.google.com/storage/docs/access-control/signed-urls), and [Azure](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)).
           *
           * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
           * @format uri
           */
          data_url?: string;
          /**
           * Base64-encoded contents of the file you want to upload.
           *
           * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
           */
          data?: string;
        };
  }[];
  /**
   * An array of the attachments you would like upload.
   * @default []
   */
  attachments?: {
    /** File name of the file you want to upload. We recommend providing something human-readable with a valid file extension (like `Resume.pdf`), as this might be shown in your customer's system. */
    name: string;
    /**
     * Content/MIME type of the file (e.g., `application/pdf`).
     *
     * If you provide `data`, this is required. If you provide `data_url`, this is optional and we'll attempt to use the `Content-Type` header of the response.
     *
     * **Note:** Please validate that the content type you provide is actually meaningful (and not something generic like [`application/octet-stream`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types#applicationoctet-stream)). Especially when using object storage (like AWS S3), it's easy to accidentally discard the content types of user-provided files, so make sure to explicitly persist them when processing uploads from your users (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.html#SysMetadata), [Google Cloud](https://cloud.google.com/storage/docs/metadata#content-type), and [Azure](https://learn.microsoft.com/en-us/rest/api/storageservices/put-blob#request-headers-all-blob-types)).
     * @pattern ^[\w.-]+\/[\w.-]+$
     */
    content_type?: string;
    /**
     * URL to the file you want to upload that can be accessed without authentication headers. We will download the content immediately when receiving the request, so the URL can be short-lived.
     *
     * If you're using an object storage provider (like AWS S3), we strongly recommend providing a signed URL for secure access (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html), [Google Cloud](https://cloud.google.com/storage/docs/access-control/signed-urls), and [Azure](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)).
     *
     * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
     * @format uri
     */
    data_url?: string;
    /**
     * Base64-encoded contents of the file you want to upload.
     *
     * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
     */
    data?: string;
    /** Type of the attachment in the ATS. This may affect where the uploaded file will be shown in your customer's system. */
    type: "CV" | "COVER_LETTER" | "OTHER";
  }[];
  /**
   * **(⚠️ Deprecated - Use [automatic source writing](/ats/features/application-attribution#automatic-attribution) instead)** Optional source information that will be attached to the candidate. If
   * you're a job board or recruiting service, you can use this to make sure your
   * customers can see which candidates came from you.
   *
   * This is deprecated because writing sources requires users to do some setup in most ATSs.
   */
  source?: {
    /** Name of the source (e.g., `"Example Job Board"`). */
    name?: string;
    unified_key?: string;
    id?: string;
  };
  /**
   * Credit the recruiter or team member who sourced this candidate.
   *
   * While the `source` field tracks the channel/platform (e.g., "Awesome Jobboard"), the `sourced_by` field tracks the individual person responsible for finding the candidate.
   */
  sourced_by?: {
    /** The Kombo ID or Remote ID of the User. Use the Kombo ID directly, or prefix the remote ID with "remote:" to reference the user by their ID in the remote system. */
    user_id: string;
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
      /** If set to true, we will copy custom attachments from the JobApplication to the Candidate. */
      copyJobApplicationAttachments?: boolean;
      /** When the candidate already exists, whether to update the Candidate with the remote fields found under the Candidate entity. */
      update_existing_candidate?: boolean | null;
    };
    /** Fields specific to Personio. */
    personio?: {
      /** Fields that we will pass through to Personio's `application` object. */
      application?: Record<string, any>;
    };
    /** Fields specific to TalentSoft. */
    talentsoft?: {
      /** Fields that we will pass through to TalentSoft's `applicant` object. */
      applicant?: Record<string, any>;
      /** Fields that we will pass through to TalentSoft's `application` object. */
      application?: Record<string, any>;
    };
    teamtailor?: {
      /** Fields that we will pass through to Teamtailor's `Candidate` object. */
      candidate?: Record<string, any>;
      application?: {
        /** Fields that we will pass through to Teamtailor's attributes section `Job application` object. */
        attributes?: Record<string, any>;
      };
    };
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Fields that we will pass through to Greenhouse's `Candidate` object. */
      candidate?: Record<string, any>;
      /** Fields that we will pass through to Greenhouse's `Application` object. */
      application?: Record<string, any>;
    };
    /** Fields specific to Lever. */
    lever?: {
      /** Fields that we will pass through to Lever's `Candidate` object. Note: make sure to submit the keys and values in the correct form data format. */
      candidate?: Record<string, any>;
    };
    /** Fields specific to Workable. */
    workable?: {
      /** Fields that we will pass through to Workable's `Candidate` object. */
      candidate?: Record<string, any>;
    };
    /** Fields specific to Workday. The remote fields schema follows the documentation at https://community.workday.com/sites/default/files/file-hosting/productionapi/Recruiting/v43.0/Put_Candidate.html. Only defined fields are supported, if you need additional field support please reach out to Kombo support. */
    workday?: {
      Candidate_Data?: {
        Name_Detail_Data?: {
          /** The candidate's middle name */
          Middle_Name?: string;
          /** The WID of the social suffix reference for the candidate */
          Social_Suffix_Reference?: {
            Predefined_Name_Component_ID: string;
          };
        };
        /** Used to set the candidate's primary language */
        Language_Reference?: {
          WID: string;
        };
        Job_Application_Data?: {
          Job_Applied_To_Data?: {
            Global_Personal_Information_Data?: {
              Date_of_Birth?: string;
            };
          };
          Resume_Data?: {
            Education_Data?: {
              School_Name?: string;
              /**
               * @format double
               * @min -1.7976931348623157e+308
               */
              First_Year_Attended?: number;
              /**
               * @format double
               * @min -1.7976931348623157e+308
               */
              Last_Year_Attended?: number;
              Field_of_Study_Reference?: {
                WID: string;
              };
              Degree_Reference?: {
                WID: string;
              };
              Grade_Average?: string;
            }[];
            Skill_Data?: {
              Skill_Name?: string;
            }[];
            Language_Data?: {
              Language_Reference?: {
                WID?: string;
              };
              Language?: {
                Native?: boolean;
                Language_Ability: {
                  Language_Ability_Data?: {
                    Language_Proficiency_Reference?: {
                      WID: string;
                    };
                    Language_Ability_Type_Reference?: {
                      WID: string;
                    };
                  };
                }[];
              };
            }[];
            Experience_Data?: {
              Company_Name: string;
              Title: string;
              Location?: string;
              /**
               * YYYY-MM-DDTHH:mm:ss.sssZ
               * @format date-time
               * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
               */
              Start_Date: string;
              /**
               * YYYY-MM-DDTHH:mm:ss.sssZ
               * @format date-time
               * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
               */
              End_Date?: string;
              Currently_Work_Here?: boolean;
              Description?: string;
            }[];
          };
        };
        Contact_Data?: {
          Location_Data?: {
            Address_Line_1?: string;
            Address_Line_2?: string;
            Region_Subdivision_1?: string;
            Country_Region_Reference?: {
              Country_Region_ID: string;
            };
            Country_City_Reference?: {
              WID: string;
            };
          };
        };
        /** Reference to the Worker (employee) to link the candidate to. Provide either WID or Employee_ID. */
        Worker_Reference?: {
          WID?: string;
          Employee_ID?: string;
        };
      };
      /** Used to override the automatic source WID. */
      Override_Source_Reference_WID?: string;
    };
    /** Fields specific to Zoho Recruit. */
    zohorecruit?: {
      /** Fields that we will pass through to Zoho Recruit's `Candidate` object. */
      candidate?: Record<string, any>;
    };
    /** Fields specific to Bullhorn. */
    bullhorn?: {
      /** Fields that we will pass through to Bullhorn's `Candidate` object. */
      candidate?: Record<string, any>;
      /** Fields that we will pass through to Bullhorn's `JobSubmission` object. */
      job_submission?: Record<string, any>;
    };
    /** Fields specific to SmartRecruiters. */
    smartrecruiters?: {
      /** **(⚠️ Deprecated - Use the `candidate` field instead.)** Fields that we will pass through to the SmartRecruiters's `Candidate` object when created with screening question answers. This API is used: https://developers.smartrecruiters.com/reference/createcandidate-1 */
      candidate_with_questions?: Record<string, any>;
      /** **(⚠️ Deprecated - Use the `candidate` field instead.)** Fields that we will pass through to the SmartRecruiters's `Candidate` object when created with screening question answers. This API is used: https://developers.smartrecruiters.com/reference/candidatesaddtojob-1 */
      candidate_without_questions?: Record<string, any>;
      /** Fields that we will pass through to the SmartRecruiters's `Candidate` object. This API is used: https://developers.smartrecruiters.com/reference/createcandidate-1 */
      candidate?: Record<string, any>;
    };
    /** Fields specific to Talentadore. */
    talentadore?: {
      /** Fields that we will pass through to the Talentadore's when creating applications. */
      applications?: Record<string, any>;
    };
    /** Fields specific to GuideCom. */
    guidecom?: {
      /** Fields that we will pass through to GuideCom's `Candidate` object. */
      candidate?: Record<string, any>;
    };
    /** Fields specific to d.vinci. */
    dvinci?: {
      /** Fields that we will pass through to d.vinci's application object. This API is used: https://static.dvinci-easy.com/files/d.vinci%20application-apply-api.html#jobs__id__applyApi_post */
      application?: Record<string, any>;
    };
    /** Fields specific to GuideCom. */
    hrworks?: {
      /** Fields that we will pass through to HRWorks's `Job Application` object. This API is used: https://developers.hrworks.de/docs/hrworks-api-v2/53021f035f62d-post-job-applications */
      jobApplication?: Record<string, any>;
    };
    /** Fields specific to Jobylon. */
    jobylon?: {
      /** Fields that we will pass through to Jobylon's create application [endpoint](https://developer.jobylon.com/push-api-and-webhooks#-xL0v)'s request body. */
      application?: {
        /** The `message` field of Jobylon's create application endpoint's request body. */
        message?: string;
      };
    };
    /** Fields specific to Avature. */
    avature?: {
      workflow?: {
        step?: {
          /**
           * The ID of the workflow step to assign to the candidate.
           * @format int64
           */
          id: number;
        };
      };
    };
    /** Fields specific to Recruitee. */
    recruitee?: {
      candidate?: {
        /** The cover letter text as a string. This will be visible on the main candidate page. Can be provided together with the `cover_letter` attachment, which will end up in a separate `file` section. */
        cover_letter_text?: string;
      };
    };
    /** Fields specific to Abacus Umantis. */
    umantis?: {
      /** Fields that we will pass through to Abacus Umantis's "Create a person" endpoint's `attributes` when creating a candidate. */
      person?: Record<string, any>;
    };
    /** Fields specific to P&I Loga. */
    piloga?: {
      /** Additional candidate fields for P&I Loga that will be mapped to the application form. */
      candidate?: {
        /** The street address of the candidate. */
        street?: string;
      };
    };
  } & {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /** ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it. */
        "On-Behalf-Of"?: string | null;
      };
    };
    /** Workable specific remote fields for ATS actions. */
    workable?: {
      /** The remote ID of the user that will be displayed in the UI as the one that performed the action. */
      on_behalf_of_user_remote_id?: string;
    };
  };
}

/** The Kombo ID of the candidate you want to obtain attachments for. */
export type GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = string;

export interface GetAtsCandidatesCandidateIdAttachmentsPositiveResponse {
  status: "success";
  data: {
    results: {
      /**
       * @minLength 24
       * @maxLength 24
       * @pattern ^[1-9A-HJ-NP-Za-km-z]+$
       */
      id: string;
      /**
       * The Kombo ID of the application this attachment belongs to. When this is null, the attachment is not specific to any application but the candidate.
       * @minLength 24
       * @maxLength 24
       * @pattern ^[1-9A-HJ-NP-Za-km-z]+$
       */
      application_id: string | null;
      /**
       * The Kombo ID of the candidate this attachment belongs to.
       * @minLength 24
       * @maxLength 24
       * @pattern ^[1-9A-HJ-NP-Za-km-z]+$
       */
      candidate_id: string;
      type: "CV" | "COVER_LETTER" | "OTHER";
      remote_id: string;
      data_url: string;
      file_name: string;
      /** The MIME type of the attachment. */
      content_type: string;
      /**
       * The date when the attachment was created.
       * @format date-time
       */
      remote_created_at: string | null;
      /**
       * The date when the attachment was last updated.
       * @format date-time
       */
      remote_updated_at: string | null;
    }[];
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

/** The Kombo ID of the candidate you want to add the attachment to. */
export type PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId =
  string;

export interface PostAtsCandidatesCandidateIdAttachmentsPositiveResponse {
  status: "success";
  data: object;
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostAtsCandidatesCandidateIdAttachmentsRequestBody {
  attachment: {
    /** File name of the file you want to upload. We recommend providing something human-readable with a valid file extension (like `Resume.pdf`), as this might be shown in your customer's system. */
    name: string;
    /**
     * Content/MIME type of the file (e.g., `application/pdf`).
     *
     * If you provide `data`, this is required. If you provide `data_url`, this is optional and we'll attempt to use the `Content-Type` header of the response.
     *
     * **Note:** Please validate that the content type you provide is actually meaningful (and not something generic like [`application/octet-stream`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types#applicationoctet-stream)). Especially when using object storage (like AWS S3), it's easy to accidentally discard the content types of user-provided files, so make sure to explicitly persist them when processing uploads from your users (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.html#SysMetadata), [Google Cloud](https://cloud.google.com/storage/docs/metadata#content-type), and [Azure](https://learn.microsoft.com/en-us/rest/api/storageservices/put-blob#request-headers-all-blob-types)).
     * @pattern ^[\w.-]+\/[\w.-]+$
     */
    content_type?: string;
    /**
     * URL to the file you want to upload that can be accessed without authentication headers. We will download the content immediately when receiving the request, so the URL can be short-lived.
     *
     * If you're using an object storage provider (like AWS S3), we strongly recommend providing a signed URL for secure access (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html), [Google Cloud](https://cloud.google.com/storage/docs/access-control/signed-urls), and [Azure](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)).
     *
     * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
     * @format uri
     */
    data_url?: string;
    /**
     * Base64-encoded contents of the file you want to upload.
     *
     * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
     */
    data?: string;
    /** Type of the attachment in the ATS. This may affect where the uploaded file will be shown in your customer's system. */
    type: "CV" | "COVER_LETTER" | "OTHER";
  };
  /** Additional fields that we will pass through to specific ATS systems. */
  remote_fields?: {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /** ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it. */
        "On-Behalf-Of"?: string | null;
      };
    };
    /** Workable specific remote fields for ATS actions. */
    workable?: {
      /** The remote ID of the user that will be displayed in the UI as the one that performed the action. */
      on_behalf_of_user_remote_id?: string;
    };
  };
}

/** The Kombo ID of the candidate you want to add the result link to. */
export type PostAtsCandidatesCandidateIdResultLinksParameterCandidateId =
  string;

export interface PostAtsCandidatesCandidateIdResultLinksPositiveResponse {
  status: "success";
  data: object;
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostAtsCandidatesCandidateIdResultLinksRequestBody {
  /** If the system allows us to display a display name for the link, we will use this label. */
  label: string;
  /**
   * URL of the link.
   * @format uri
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
    /** Fields specific to iCIMS. */
    icims?: {
      /** The package ID of the assessment that the result link will be added to. */
      assessment_package_id?: string;
    };
    /** Fields specific to Oracle. */
    oracle?: {
      /** Allows you to override the document category for the url. (Default: MISC) */
      override_document_category?:
        | "IRC_CANDIDATE_RESUME"
        | "IRC_CANDIDATE_COVERLETTER"
        | "MISC"
        | "IRC_INTERNAL";
      /** If true, the result link will be posted to all current applications for the candidate. */
      multi_post_to_all_current_applications?: boolean;
    };
  } & {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /** ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it. */
        "On-Behalf-Of"?: string | null;
      };
    };
    /** Workable specific remote fields for ATS actions. */
    workable?: {
      /** The remote ID of the user that will be displayed in the UI as the one that performed the action. */
      on_behalf_of_user_remote_id?: string;
    };
  };
}

/** The Kombo ID of the candidate you want to add the tag to. */
export type PostAtsCandidatesCandidateIdTagsParameterCandidateId = string;

export interface PostAtsCandidatesCandidateIdTagsPositiveResponse {
  status: "success";
  data: object;
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostAtsCandidatesCandidateIdTagsRequestBody {
  tag: {
    /**
     * The name of the tag you would like to add. We will automatically find the matching ID of the tag in the system.
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
        /** ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it. */
        "On-Behalf-Of"?: string | null;
      };
    };
    /** Workable specific remote fields for ATS actions. */
    workable?: {
      /** The remote ID of the user that will be displayed in the UI as the one that performed the action. */
      on_behalf_of_user_remote_id?: string;
    };
  };
}

/** The Kombo ID of the candidate you want to remove the tag from. */
export type DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = string;

export interface DeleteAtsCandidatesCandidateIdTagsPositiveResponse {
  status: "success";
  data: object;
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface DeleteAtsCandidatesCandidateIdTagsRequestBody {
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
        /** ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it. */
        "On-Behalf-Of"?: string | null;
      };
    };
    /** Workable specific remote fields for ATS actions. */
    workable?: {
      /** The remote ID of the user that will be displayed in the UI as the one that performed the action. */
      on_behalf_of_user_remote_id?: string;
    };
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAtsTagsParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetAtsTagsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsTagsParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetAtsTagsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetAtsTagsParameterRemoteIds = string;

export interface GetAtsTagsPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      name: string | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
    }[];
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAtsApplicationStagesParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetAtsApplicationStagesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsApplicationStagesParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetAtsApplicationStagesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetAtsApplicationStagesParameterRemoteIds = string;

export interface GetAtsApplicationStagesPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      /** The application stage name. For example, "Initial Screening". */
      name: string | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
    }[];
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAtsJobsParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetAtsJobsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsJobsParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetAtsJobsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetAtsJobsParameterRemoteIds = string;

/** Filter by a comma-separated list of job codes. */
export type GetAtsJobsParameterJobCodes = string;

/** Filter by the `post_url` field. Can be used to find a job based on its public posting URL. */
export type GetAtsJobsParameterPostUrl = string;

/**
 * Filter by a comma-separated list of `OPEN`, `CLOSED`, `DRAFT`, `ARCHIVED`
 *
 * Leave this blank to get results matching all values.
 */
export type GetAtsJobsParameterStatuses = string;

/**
 * Filter by a comma-separated list of `FULL_TIME`, `PART_TIME`, `CONTRACT`, `SEASONAL`, `INTERNSHIP`
 *
 * Leave this blank to get results matching all values.
 */
export type GetAtsJobsParameterEmploymentTypes = string;

/**
 * Filter by a comma-separated list of `PUBLIC`, `INTERNAL`, `UNLISTED`, `CONFIDENTIAL`
 *
 * Leave this blank to get results matching all values.
 */
export type GetAtsJobsParameterVisibilities = string;

/**
 * Filter jobs by the day they were created in the remote system. This allows you to get jobs that were created on or after a certain day.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsJobsParameterRemoteCreatedAfter = string;

/** Filter by the `name` field. Can be used to find a job by keywords present in the job name. */
export type GetAtsJobsParameterNameContains = string;

export interface GetAtsJobsPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** Title of the job. */
      name: string | null;
      /** The human readable job code. Some systems expose this as the Requisition Code/ID. */
      job_code: string | null;
      /** Description of the job. This field is usually returned as HTML. */
      description: string | null;
      /** **(⚠️ Deprecated)** It makes more sense to store the visibility of a job in an enum. Therefore, we introduced the `visibility` enum on jobs. */
      confidential: boolean | null;
      /**
       * The number of hours per week an employee is expected to work.
       * @format double
       * @min -1.7976931348623157e+308
       */
      weekly_hours: number | null;
      /** The type of employment contract. In rare cases where can't find a clear mapping, the original string is passed through. */
      employment_type?:
        | "FULL_TIME"
        | "PART_TIME"
        | "CONTRACT"
        | "SEASONAL"
        | "INTERNSHIP"
        | string
        | null;
      /**
       * The job's current status.
       *
       * *Note: For any checks (e.g., "can we publish this job?"), always evaluate both `status` and `visibility`. For example, a job can be `status=OPEN` with `visibility=INTERNAL`, meaning only existing employees can apply.*
       *
       *  In rare cases where we can’t find a clear mapping, the original string is passed through.
       */
      status?: "OPEN" | "CLOSED" | "DRAFT" | "ARCHIVED" | string | null;
      /**
       * Describes the visibility of the job:
       *
       * - `PUBLIC`: visible to everyone, published on a job board
       * - `INTERNAL`: only visible to employees of the company itself
       * - `UNLISTED`: anyone can apply but only if they have the link to it
       * - `CONFIDENTIAL`: nobody can apply and it's only visible in the ATS to people who were invited to it
       *
       * *Note: For any checks (e.g., "can we publish this job?"), always evaluate both `status` and `visibility`.*
       *
       *  In rare cases where we can’t find a clear mapping, the original string is passed through.
       */
      visibility?:
        | "PUBLIC"
        | "INTERNAL"
        | "UNLISTED"
        | "CONFIDENTIAL"
        | string
        | null;
      /** The category of the job (often the job industry). The original string is passed through, for example "Information Technology", "Quality Assurance", "Marketing". */
      category: string | null;
      /** The internal department or team the job belongs to. The original string is passed through, for example "IT/Operations", "Engineering - Platform", "Customer Success". */
      department: string | null;
      /** The public job posting URL of the ATS itself. This can be used by external job boards to redirect applicants. */
      post_url: string | null;
      /** The role's seniority or experience level. The original string is passed through, for example "Mid-Senior Level", "5+ years", "Associate", "IC3". */
      experience_level: string | null;
      /** Defines if the job supports remote work and if so, to what extent. */
      remote_work_status?:
        | "REMOTE"
        | "HYBRID"
        | "TEMPORARY"
        | "ON_SITE"
        | string
        | null;
      /**
       * The salary amount in the given currency.
       * @format double
       * @min -1.7976931348623157e+308
       */
      salary_amount: number | null;
      /**
       * The lower bound of the salary range.
       * @format double
       * @min -1.7976931348623157e+308
       */
      salary_amount_from: number | null;
      /**
       * The upper bound of the salary range.
       * @format double
       * @min -1.7976931348623157e+308
       */
      salary_amount_to: number | null;
      /** Salary currency usually returned in [ISO 4217 currency codes](https://www.iso.org/iso-4217-currency-codes.html). */
      salary_currency: string | null;
      /** The period of time over which the salary amount is paid (not equal to the pay frequency). In rare cases where we can’t find a clear mapping, the original string is passed through. */
      salary_period?:
        | "YEAR"
        | "MONTH"
        | "TWO_WEEKS"
        | "WEEK"
        | "DAY"
        | "HOUR"
        | string
        | null;
      /** The location of the listed job. */
      location?: {
        city?: string | null;
        /** Contains the ISO2 country code if possible. If not, it contains the original value. */
        country?: string | null;
        /** If we have address data, this is filled with the raw address string. */
        raw?: string | null;
        state?: string | null;
        /** If we can parse the address data, this field contains the first part of the street information. */
        street_1?: string | null;
        street_2?: string | null;
        zip_code?: string | null;
      };
      /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
      custom_fields: object | null;
      /** An array of selected passthrough integration fields. [Read more](/integration-fields) */
      integration_fields: {
        /** The globally unique ID of this object. */
        id: string;
        /** The key of the field in the remote system. */
        key: string;
        /**
         * - `DEFAULT`: static fields in the remote system.
         * - `CUSTOM`: fields that are created/editable by the user.
         */
        type: "DEFAULT" | "CUSTOM";
        /** The field's value. */
        value?: null;
        /** The label of the field. (not always available) */
        label: string | null;
      }[];
      /**
       * URL to the job posting in the source ATS system.
       * @format uri
       */
      remote_url: string | null;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      opened_at: string | null;
      /**
       * The date the job closed or is scheduled to close. A future value typically indicates the job remains open for applications until that date.
       *
       * Please use the `status` and `visibility` fields to determine if a job can be published.
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
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /** Application stages a candidate can be in for this particular job.  */
      stages: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /** The application stage name. For example, "Initial Screening". */
        name: string | null;
        /**
         * Includes the data fetched from the remote system.
         * Please be aware that including this in you scope config might violate other
         * scopes that are set.
         *
         * Remote data always has the endpoint path that we got the data from as the
         * top level key. For example, it could look like: `{ "/companies": { ... }}`
         *
         * This is not available on all plans. Reach out to Kombo if you need it.
         */
        remote_data: object | null;
        /**
         * Numeric index following the order of the stages if they are ordered in the underlying tool.
         * @format int64
         */
        index?: number | null;
      }[];
      screening_questions: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        title: string | null;
        /** Additional instructions or context. Typically a short sentence, but sometimes a long detailed description (e.g., for EEO questions). May include HTML for extra formatting. */
        description: string | null;
        format?:
          | {
              /** If unavailable, we recommend displaying a single-line input. */
              display_type?: "SINGLE_LINE" | "MULTI_LINE" | "EMAIL" | "URL";
              /** @format int64 */
              max_length?: number | null;
              type: "TEXT";
            }
          | {
              /** @default "FIELD" */
              display_type?: "SLIDER" | "FIELD";
              /**
               * @format double
               * @min -1.7976931348623157e+308
               */
              max?: number | null;
              /**
               * @format double
               * @min -1.7976931348623157e+308
               */
              min?: number | null;
              type: "NUMBER";
            }
          | {
              accepted_mime_types?: any[] | null;
              /** @format int64 */
              max_file_size_bytes?: number | null;
              type: "FILE";
            }
          | {
              display_type?: "DROPDOWN" | "RADIO";
              options: {
                /** The Kombo ID of this question option. Use this ID to specify the answer to this question. */
                id: string;
                /** ID in the connected ATS. This might be null as some systems only use the name to identify the option. */
                remote_id?: string | null;
                /** Content of the question option. */
                name: string;
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
                /** The Kombo ID of this question option. Use this ID to specify the answer to this question. */
                id: string;
                /** ID in the connected ATS. This might be null as some systems only use the name to identify the option. */
                remote_id?: string | null;
                /** Content of the question option. */
                name: string;
              }[];
              type: "MULTI_SELECT";
            }
          | {
              /** This is just a text block. */
              type: "INFORMATION";
            }
          | {
              /** We pass the original question data along so you can handle it. */
              raw_question?: any;
              /** When we're not able to map a specific question type yet, we will return this type. Every `UNKNOWN` question will also be parsed and unified by us at some point. */
              type: "UNKNOWN";
            }
          | null;
        /** The category of the screening question (default `null`). "EEO" questions are related to Equal Employment Opportunity (e.g. "What is your veteran status?"), while "DEMOGRAPHIC" questions are for other diversity and demographic data collection. */
        category: "EEO" | "DEMOGRAPHIC";
        /** @format int64 */
        index?: number | null;
        required: boolean | null;
        /**
         * The Kombo ID of another screening question. Only display this question if the specified "precondition question" is answered with one of the values in `precondition_options`.
         * @minLength 24
         * @maxLength 24
         * @pattern ^[1-9A-HJ-NP-Za-km-z]+$
         */
        precondition_question_id?: string | null;
        /**
         * Where the screening question specified by `precondition_question_id` is of type `MULTI_SELECT` or `SINGLE_SELECT`, this is an array of Kombo IDs describing the valid options. If the question is of type `BOOLEAN`, this is an array containing either `true` or `false`.
         * @default null
         */
        precondition_options?: string[] | boolean[] | null;
      }[];
      job_postings: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /** The job posting’s title. */
        title: string | null;
        /** The job posting’s description in HTML format. */
        description_html: string | null;
        /** The job posting’s current status. */
        status: "ACTIVE" | "INACTIVE" | "DRAFT";
        visibility: "PUBLIC" | "INTERNAL" | "UNLISTED";
        /** The public URL to the job posting on the ATS platform. */
        url: string | null;
        /**
         * Includes the data fetched from the remote system.
         * Please be aware that including this in you scope config might violate other
         * scopes that are set.
         *
         * Remote data always has the endpoint path that we got the data from as the
         * top level key. For example, it could look like: `{ "/companies": { ... }}`
         *
         * This is not available on all plans. Reach out to Kombo if you need it.
         */
        remote_data: object | null;
      }[];
      /** The hiring team allows you to sync users into your system who can access the job and its applications. */
      hiring_team: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /** First name of the user. */
        first_name: string | null;
        /** Last name of the user. */
        last_name: string | null;
        /**
         * Email of the user. If the email address is invalid, it will be set to null.
         * @pattern ^(?!\.)(?!.*\.\.)([\w'+-.]*)[\w+-]@([\da-z][\da-z-]*\.)+[a-z]{2,}$
         */
        email?: string | null;
        /** Array of the roles of the user for this specific job. Currently only `RECRUITER` and `HIRING_MANAGER` are mapped into our unified schema. */
        hiring_team_roles: ("RECRUITER" | "HIRING_MANAGER")[];
      }[];
    }[];
  };
}

/** The Kombo ID or Remote ID of the Job this candidate should apply for. If you want to use the ID of the integrated system (remote_id) you need to prefix the id with "remote:". You can use the remote ID if you do not want to sync jobs. */
export type PostAtsJobsJobIdApplicationsParameterJobId = string;

export interface PostAtsJobsJobIdApplicationsPositiveResponse {
  status: "success";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
    remote_id: string | null;
    /**
     * Parsed status of the application. If Kombo identifies that the application was accepted and the candidate hired, it will be `HIRED`. If the application was rejected or the candidate declined, it will be `DECLINED`. If the application is still in process, it will be `PENDING`.
     * Kombo will always try to deliver this information as reliably as possible.
     */
    outcome: "PENDING" | "HIRED" | "DECLINED";
    /** Reason for the rejection of the candidate. */
    rejection_reason_name: string | null;
    /**
     * The time that the application was rejected.
     * @format date-time
     */
    rejected_at: string | null;
    /** ID of the current application stage */
    current_stage_id: string | null;
    /** The Kombo ID of the job which the candidate applied to. The ID can be used to retrieve the job from the `get jobs` endpoint. */
    job_id: string | null;
    /** The Kombo ID of the candidate who applied to the job. The ID can be used to retrieve the candidate from the `get candidates` endpoint. */
    candidate_id: string | null;
    /**
     * A list of answers to screening questions. The screening answer type `FILE` is currently unsupported.
     * @default []
     */
    screening_question_answers?: any[] | null;
    /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
    custom_fields: object | null;
    /** An array of selected passthrough integration fields. [Read more](/integration-fields) */
    integration_fields: {
      /** The globally unique ID of this object. */
      id: string;
      /** The key of the field in the remote system. */
      key: string;
      /**
       * - `DEFAULT`: static fields in the remote system.
       * - `CUSTOM`: fields that are created/editable by the user.
       */
      type: "DEFAULT" | "CUSTOM";
      /** The field's value. */
      value?: null;
      /** The label of the field. (not always available) */
      label: string | null;
    }[];
    /**
     * URL to the application in the source ATS system. When embedding this in your system, please consider that not for all ATS a dedicated application URL is available, so you might need to fall back to the candidate URL.
     * @format uri
     */
    remote_url: string | null;
    /**
     * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
     * @format date-time
     */
    changed_at: string;
    /**
     * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
     * @format date-time
     */
    remote_deleted_at: string | null;
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
    /**
     * Includes the data fetched from the remote system.
     * Please be aware that including this in you scope config might violate other
     * scopes that are set.
     *
     * Remote data always has the endpoint path that we got the data from as the
     * top level key. For example, it could look like: `{ "/companies": { ... }}`
     *
     * This is not available on all plans. Reach out to Kombo if you need it.
     */
    remote_data: object | null;
    current_stage: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The application stage name. For example, "Initial Screening". */
      name: string | null;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      /** @format int64 */
      index: number | null;
    };
    job: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** Title of the job. */
      name: string | null;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
    };
    candidate: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** First name of the candidate. */
      first_name: string | null;
      /** Last name of the candidate. */
      last_name: string | null;
      /** The current company of the candidate. */
      company: string | null;
      /** The current job title of the candidate. */
      title: string | null;
      /** Whether the candidate’s profile is confidential in the ATS. */
      confidential: boolean | null;
      /** The hiring source of the candidate. If you're a job board or recruiting service, you can use this to validate which candidates applied through your service and ensure that the correct referral compensation is paid out. */
      source: string | null;
      /**
       * A list of phone numbers of the candidate.
       * @default []
       */
      phone_numbers?: any[] | null;
      /**
       * A list of email addresses of the candidate with an optional type. If an email address is invalid, it will be filtered out.
       * @default []
       */
      email_addresses?: any[] | null;
      /**
       * List of social media accounts of the candidate.
       * @default []
       */
      social_media?: any[] | null;
      /** Location of the candidate. */
      location?: {
        city?: string | null;
        /** Contains the ISO2 country code if possible. If not, it contains the original value. */
        country?: string | null;
        /** If we have address data, this is filled with the raw address string. */
        raw?: string | null;
        state?: string | null;
        /** If we can parse the address data, this field contains the first part of the street information. */
        street_1?: string | null;
        street_2?: string | null;
        zip_code?: string | null;
      };
      /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
      custom_fields: object | null;
      /** An array of selected passthrough integration fields. [Read more](/integration-fields) */
      integration_fields: {
        /** The globally unique ID of this object. */
        id: string;
        /** The key of the field in the remote system. */
        key: string;
        /**
         * - `DEFAULT`: static fields in the remote system.
         * - `CUSTOM`: fields that are created/editable by the user.
         */
        type: "DEFAULT" | "CUSTOM";
        /** The field's value. */
        value?: null;
        /** The label of the field. (not always available) */
        label: string | null;
      }[];
      /**
       * URL to the candidate profile in the source ATS system. When embedding this in your system, please consider that not for all ATS a dedicated candidate profile URL is available, so you might need to fall back to the application URL.
       * @format uri
       */
      remote_url: string | null;
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
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      tags: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        name: string | null;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
      }[];
    };
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostAtsJobsJobIdApplicationsRequestBody {
  /** Stage this candidate should be in. If left out, the default stage for this job will be used. You can obtain the possible `stage_id`s from the `get-jobs` endpoint. */
  stage_id?: string;
  candidate: {
    /** The first name of the candidate. */
    first_name: string;
    /** The last name of the candidate. */
    last_name: string;
    /**
     * The primary email address this application will be created with.
     * @format email
     */
    email_address: string;
    additional_email_addresses?: {
      type: "PERSONAL" | "WORK" | "OTHER";
      /** @format email */
      email_address: string;
    }[];
    /** The company where the candidate is currently working. */
    company?: string;
    /** The current job title of the candidate. */
    title?: string;
    /** The phone number of the candidate. */
    phone_number?: string;
    additional_phone_numbers?: {
      type: "PERSONAL" | "WORK" | "OTHER";
      phone_number: string;
    }[];
    /** The location of the candidate. */
    location?: {
      city?: string;
      /**
       * The uppercase two-letter ISO country (e.g., `DE`). For systems that use codes in formats other than `ISO 3166-1 alpha-2`, Kombo transforms the ISO Codes to the appropriate value.
       * @pattern ^[A-Z]{2}$
       */
      country: string;
      state?: string;
      zip_code?: string;
    };
    /** The gender of the candidate. Must be one of `MALE`, `FEMALE`, or `OTHER`. */
    gender?: "MALE" | "FEMALE" | "OTHER";
    /**
     * The date the candidate is available to start working.
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
       * @min -1.7976931348623157e+308
       */
      amount: number;
    };
    /**
     * A list of social media links of the candidate. The links must be valid URLs.
     * @default []
     */
    social_links?: {
      /** @format uri */
      url: string;
    }[];
  };
  /**
   * Array of the attachments you would like to upload. The first CV in the attachments will be treated as the resume of the candidate when the tool allows previewing a resume.
   * @default []
   */
  attachments?: {
    /** File name of the file you want to upload. We recommend providing something human-readable with a valid file extension (like `Resume.pdf`), as this might be shown in your customer's system. */
    name: string;
    /**
     * Content/MIME type of the file (e.g., `application/pdf`).
     *
     * If you provide `data`, this is required. If you provide `data_url`, this is optional and we'll attempt to use the `Content-Type` header of the response.
     *
     * **Note:** Please validate that the content type you provide is actually meaningful (and not something generic like [`application/octet-stream`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types#applicationoctet-stream)). Especially when using object storage (like AWS S3), it's easy to accidentally discard the content types of user-provided files, so make sure to explicitly persist them when processing uploads from your users (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.html#SysMetadata), [Google Cloud](https://cloud.google.com/storage/docs/metadata#content-type), and [Azure](https://learn.microsoft.com/en-us/rest/api/storageservices/put-blob#request-headers-all-blob-types)).
     * @pattern ^[\w.-]+\/[\w.-]+$
     */
    content_type?: string;
    /**
     * URL to the file you want to upload that can be accessed without authentication headers. We will download the content immediately when receiving the request, so the URL can be short-lived.
     *
     * If you're using an object storage provider (like AWS S3), we strongly recommend providing a signed URL for secure access (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html), [Google Cloud](https://cloud.google.com/storage/docs/access-control/signed-urls), and [Azure](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)).
     *
     * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
     * @format uri
     */
    data_url?: string;
    /**
     * Base64-encoded contents of the file you want to upload.
     *
     * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
     */
    data?: string;
    /** Type of the attachment in the ATS. This may affect where the uploaded file will be shown in your customer's system. */
    type: "CV" | "COVER_LETTER" | "OTHER";
  }[];
  /**
   * **(⚠️ Deprecated - Use [automatic source writing](/ats/features/application-attribution#automatic-attribution) instead)** Optional source information that will be attached to the candidate. If
   * you're a job board or recruiting service, you can use this to make sure your
   * customers can see which candidates came from you.
   *
   * This is deprecated because writing sources requires users to do some setup in most ATSs.
   */
  source?: {
    /** Name of the source (e.g., `"Example Job Board"`). */
    name?: string;
    unified_key?: string;
    id?: string;
  };
  /**
   * Credit the recruiter or team member who sourced this candidate.
   *
   * While the `source` field tracks the channel/platform (e.g., "Awesome Jobboard"), the `sourced_by` field tracks the individual person responsible for finding the candidate.
   */
  sourced_by?: {
    /** The Kombo ID or Remote ID of the User. Use the Kombo ID directly, or prefix the remote ID with "remote:" to reference the user by their ID in the remote system. */
    user_id: string;
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
      /** If set to true, we will copy custom attachments from the JobApplication to the Candidate. */
      copyJobApplicationAttachments?: boolean;
      /** When the candidate already exists, whether to update the Candidate with the remote fields found under the Candidate entity. */
      update_existing_candidate?: boolean | null;
    };
    /** Fields specific to Personio. */
    personio?: {
      /** Fields that we will pass through to Personio's `application` object. */
      application?: Record<string, any>;
    };
    /** Fields specific to TalentSoft. */
    talentsoft?: {
      /** Fields that we will pass through to TalentSoft's `applicant` object. */
      applicant?: Record<string, any>;
      /** Fields that we will pass through to TalentSoft's `application` object. */
      application?: Record<string, any>;
    };
    teamtailor?: {
      /** Fields that we will pass through to Teamtailor's `Candidate` object. */
      candidate?: Record<string, any>;
      application?: {
        /** Fields that we will pass through to Teamtailor's attributes section `Job application` object. */
        attributes?: Record<string, any>;
      };
    };
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Fields that we will pass through to Greenhouse's `Candidate` object. */
      candidate?: Record<string, any>;
      /** Fields that we will pass through to Greenhouse's `Application` object. */
      application?: Record<string, any>;
    };
    /** Fields specific to Lever. */
    lever?: {
      /** Fields that we will pass through to Lever's `Candidate` object. Note: make sure to submit the keys and values in the correct form data format. */
      candidate?: Record<string, any>;
    };
    /** Fields specific to Workable. */
    workable?: {
      /** Fields that we will pass through to Workable's `Candidate` object. */
      candidate?: Record<string, any>;
    };
    /** Fields specific to Workday. The remote fields schema follows the documentation at https://community.workday.com/sites/default/files/file-hosting/productionapi/Recruiting/v43.0/Put_Candidate.html. Only defined fields are supported, if you need additional field support please reach out to Kombo support. */
    workday?: {
      Candidate_Data?: {
        Name_Detail_Data?: {
          /** The candidate's middle name */
          Middle_Name?: string;
          /** The WID of the social suffix reference for the candidate */
          Social_Suffix_Reference?: {
            Predefined_Name_Component_ID: string;
          };
        };
        /** Used to set the candidate's primary language */
        Language_Reference?: {
          WID: string;
        };
        Job_Application_Data?: {
          Job_Applied_To_Data?: {
            Global_Personal_Information_Data?: {
              Date_of_Birth?: string;
            };
          };
          Resume_Data?: {
            Education_Data?: {
              School_Name?: string;
              /**
               * @format double
               * @min -1.7976931348623157e+308
               */
              First_Year_Attended?: number;
              /**
               * @format double
               * @min -1.7976931348623157e+308
               */
              Last_Year_Attended?: number;
              Field_of_Study_Reference?: {
                WID: string;
              };
              Degree_Reference?: {
                WID: string;
              };
              Grade_Average?: string;
            }[];
            Skill_Data?: {
              Skill_Name?: string;
            }[];
            Language_Data?: {
              Language_Reference?: {
                WID?: string;
              };
              Language?: {
                Native?: boolean;
                Language_Ability: {
                  Language_Ability_Data?: {
                    Language_Proficiency_Reference?: {
                      WID: string;
                    };
                    Language_Ability_Type_Reference?: {
                      WID: string;
                    };
                  };
                }[];
              };
            }[];
            Experience_Data?: {
              Company_Name: string;
              Title: string;
              Location?: string;
              /**
               * YYYY-MM-DDTHH:mm:ss.sssZ
               * @format date-time
               * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
               */
              Start_Date: string;
              /**
               * YYYY-MM-DDTHH:mm:ss.sssZ
               * @format date-time
               * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
               */
              End_Date?: string;
              Currently_Work_Here?: boolean;
              Description?: string;
            }[];
          };
        };
        Contact_Data?: {
          Location_Data?: {
            Address_Line_1?: string;
            Address_Line_2?: string;
            Region_Subdivision_1?: string;
            Country_Region_Reference?: {
              Country_Region_ID: string;
            };
            Country_City_Reference?: {
              WID: string;
            };
          };
        };
        /** Reference to the Worker (employee) to link the candidate to. Provide either WID or Employee_ID. */
        Worker_Reference?: {
          WID?: string;
          Employee_ID?: string;
        };
      };
      /** Used to override the automatic source WID. */
      Override_Source_Reference_WID?: string;
    };
    /** Fields specific to Zoho Recruit. */
    zohorecruit?: {
      /** Fields that we will pass through to Zoho Recruit's `Candidate` object. */
      candidate?: Record<string, any>;
    };
    /** Fields specific to Bullhorn. */
    bullhorn?: {
      /** Fields that we will pass through to Bullhorn's `Candidate` object. */
      candidate?: Record<string, any>;
      /** Fields that we will pass through to Bullhorn's `JobSubmission` object. */
      job_submission?: Record<string, any>;
    };
    /** Fields specific to SmartRecruiters. */
    smartrecruiters?: {
      /** **(⚠️ Deprecated - Use the `candidate` field instead.)** Fields that we will pass through to the SmartRecruiters's `Candidate` object when created with screening question answers. This API is used: https://developers.smartrecruiters.com/reference/createcandidate-1 */
      candidate_with_questions?: Record<string, any>;
      /** **(⚠️ Deprecated - Use the `candidate` field instead.)** Fields that we will pass through to the SmartRecruiters's `Candidate` object when created with screening question answers. This API is used: https://developers.smartrecruiters.com/reference/candidatesaddtojob-1 */
      candidate_without_questions?: Record<string, any>;
      /** Fields that we will pass through to the SmartRecruiters's `Candidate` object. This API is used: https://developers.smartrecruiters.com/reference/createcandidate-1 */
      candidate?: Record<string, any>;
    };
    /** Fields specific to Talentadore. */
    talentadore?: {
      /** Fields that we will pass through to the Talentadore's when creating applications. */
      applications?: Record<string, any>;
    };
    /** Fields specific to GuideCom. */
    guidecom?: {
      /** Fields that we will pass through to GuideCom's `Candidate` object. */
      candidate?: Record<string, any>;
    };
    /** Fields specific to d.vinci. */
    dvinci?: {
      /** Fields that we will pass through to d.vinci's application object. This API is used: https://static.dvinci-easy.com/files/d.vinci%20application-apply-api.html#jobs__id__applyApi_post */
      application?: Record<string, any>;
    };
    /** Fields specific to GuideCom. */
    hrworks?: {
      /** Fields that we will pass through to HRWorks's `Job Application` object. This API is used: https://developers.hrworks.de/docs/hrworks-api-v2/53021f035f62d-post-job-applications */
      jobApplication?: Record<string, any>;
    };
    /** Fields specific to Jobylon. */
    jobylon?: {
      /** Fields that we will pass through to Jobylon's create application [endpoint](https://developer.jobylon.com/push-api-and-webhooks#-xL0v)'s request body. */
      application?: {
        /** The `message` field of Jobylon's create application endpoint's request body. */
        message?: string;
      };
    };
    /** Fields specific to Avature. */
    avature?: {
      workflow?: {
        step?: {
          /**
           * The ID of the workflow step to assign to the candidate.
           * @format int64
           */
          id: number;
        };
      };
    };
    /** Fields specific to Recruitee. */
    recruitee?: {
      candidate?: {
        /** The cover letter text as a string. This will be visible on the main candidate page. Can be provided together with the `cover_letter` attachment, which will end up in a separate `file` section. */
        cover_letter_text?: string;
      };
    };
    /** Fields specific to Abacus Umantis. */
    umantis?: {
      /** Fields that we will pass through to Abacus Umantis's "Create a person" endpoint's `attributes` when creating a candidate. */
      person?: Record<string, any>;
    };
    /** Fields specific to P&I Loga. */
    piloga?: {
      /** Additional candidate fields for P&I Loga that will be mapped to the application form. */
      candidate?: {
        /** The street address of the candidate. */
        street?: string;
      };
    };
  } & {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /** ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it. */
        "On-Behalf-Of"?: string | null;
      };
    };
    /** Workable specific remote fields for ATS actions. */
    workable?: {
      /** The remote ID of the user that will be displayed in the UI as the one that performed the action. */
      on_behalf_of_user_remote_id?: string;
    };
  };
  /**
   * Array of answers to screening questions. Currently, not all question types are supported, and unsupported ones will not be submitted.
   *
   * The available questions for a job can be retrieved from the get jobs endpoint. The answers will be validated based on the format of the questions. Make sure to follow this schema to avoid errors.
   */
  screening_question_answers?: {
    /** ID of the question returned by the Kombo API. We'll report a warning in the logs if the question can't be found on the job. */
    question_id: string;
    /**
     * Answer to a question. This will be validated based on the question format and throw an error if the answer is invalid. Here is a description of each question type and the required answer format:
     *
     * `TEXT` - Simply provide a "string" answer.
     *
     * `SINGLE_SELECT` - Provide the ID of the answer as a string.
     *
     * `MULTI_SELECT` - Provide a string array containing the question IDs of the selected options.
     *
     * `BOOLEAN` - Either `true` or `false`.
     *
     * `NUMBER` - A number.
     *
     * `DATE` - Provide the answer as an ISO 8601 date string.
     *
     * `FILE` - Please select Option 6 in the dropdown above to see the required format.
     */
    answer:
      | string
      | boolean
      | number
      | string[]
      | {
          /** File name of the file you want to upload. We recommend providing something human-readable with a valid file extension (like `Resume.pdf`), as this might be shown in your customer's system. */
          name: string;
          /**
           * Content/MIME type of the file (e.g., `application/pdf`).
           *
           * If you provide `data`, this is required. If you provide `data_url`, this is optional and we'll attempt to use the `Content-Type` header of the response.
           *
           * **Note:** Please validate that the content type you provide is actually meaningful (and not something generic like [`application/octet-stream`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types#applicationoctet-stream)). Especially when using object storage (like AWS S3), it's easy to accidentally discard the content types of user-provided files, so make sure to explicitly persist them when processing uploads from your users (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.html#SysMetadata), [Google Cloud](https://cloud.google.com/storage/docs/metadata#content-type), and [Azure](https://learn.microsoft.com/en-us/rest/api/storageservices/put-blob#request-headers-all-blob-types)).
           * @pattern ^[\w.-]+\/[\w.-]+$
           */
          content_type?: string;
          /**
           * URL to the file you want to upload that can be accessed without authentication headers. We will download the content immediately when receiving the request, so the URL can be short-lived.
           *
           * If you're using an object storage provider (like AWS S3), we strongly recommend providing a signed URL for secure access (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html), [Google Cloud](https://cloud.google.com/storage/docs/access-control/signed-urls), and [Azure](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)).
           *
           * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
           * @format uri
           */
          data_url?: string;
          /**
           * Base64-encoded contents of the file you want to upload.
           *
           * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
           */
          data?: string;
        };
  }[];
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAtsUsersParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetAtsUsersParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsUsersParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetAtsUsersParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetAtsUsersParameterRemoteIds = string;

/** Filter by a comma-separated list of emails. We will only return users who have _any_ of the emails. The format of the emails is case-insensitive. */
export type GetAtsUsersParameterEmails = string;

export interface GetAtsUsersPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      /** First name of the user. */
      first_name: string | null;
      /** Last name of the user. */
      last_name: string | null;
      /**
       * Email of the user. If the email address is invalid, it will be set to null.
       * @pattern ^(?!\.)(?!.*\.\.)([\w'+-.]*)[\w+-]@([\da-z][\da-z-]*\.)+[a-z]{2,}$
       */
      email?: string | null;
      /** Whether the user is active or inactive. Consider this field when provisioning users from the ATS. */
      status: "ACTIVE" | "INACTIVE";
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
    }[];
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAtsOffersParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetAtsOffersParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsOffersParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetAtsOffersParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetAtsOffersParameterRemoteIds = string;

export interface GetAtsOffersPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      /**
       * The offer’s current status. The usual flow of statuses is as follows:
       * `DRAFT` -> `APPROVED` -> `SENT` -> `ACCEPTED` or `DECLINED`.
       *
       * Please note that not all systems will expose all statuses. For example, most systems do not include the `APPROVED` status
       *
       * - `ACCEPTED`: The offer was accepted by the candidate.
       * - `DECLINED`: The offer was declined by the candidate.
       * - `SENT`: The offer was sent to the candidate.
       * - `APPROVED`: The draft was approved.
       * - `DRAFT`: The offer is a draft and has not yet been sent to the candidate.
       * - `ABANDONED`: The offer has expired or is no longer valid and should not be considered.
       */
      status:
        | "ACCEPTED"
        | "DECLINED"
        | "SENT"
        | "APPROVED"
        | "DRAFT"
        | "ABANDONED";
      /**
       * The date when the employment described by the offer starts. Can be in the past or future.
       * @format date-time
       */
      employment_start_date: string | null;
      /** The Kombo ID of the application this interview belongs to. The ID can be used to retrieve the application from the `get applications` endpoint. */
      application_id: string | null;
      /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
      custom_fields: object | null;
      /** An array of selected passthrough integration fields. [Read more](/integration-fields) */
      integration_fields: {
        /** The globally unique ID of this object. */
        id: string;
        /** The key of the field in the remote system. */
        key: string;
        /**
         * - `DEFAULT`: static fields in the remote system.
         * - `CUSTOM`: fields that are created/editable by the user.
         */
        type: "DEFAULT" | "CUSTOM";
        /** The field's value. */
        value?: null;
        /** The label of the field. (not always available) */
        label: string | null;
      }[];
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
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
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      application: {
        candidate: {
          /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
          id: string;
          /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
          remote_id: string;
          /** First name of the candidate. */
          first_name: string | null;
          /** Last name of the candidate. */
          last_name: string | null;
          /**
           * A list of email addresses of the candidate with an optional type. If an email address is invalid, it will be filtered out.
           * @default []
           */
          email_addresses?: any[] | null;
        };
        job: {
          /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
          id: string;
          /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
          remote_id: string;
          /** Title of the job. */
          name: string | null;
        };
      };
    }[];
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAtsRejectionReasonsParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetAtsRejectionReasonsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsRejectionReasonsParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetAtsRejectionReasonsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetAtsRejectionReasonsParameterRemoteIds = string;

export interface GetAtsRejectionReasonsPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** The title of the rejection reason. */
      name: string | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
    }[];
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAtsInterviewsParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetAtsInterviewsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
 *
 * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 *
 * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsInterviewsParameterUpdatedAfter = string;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetAtsInterviewsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetAtsInterviewsParameterRemoteIds = string;

/** Filter by a comma-separated list of job IDs. We will only return interviews for applications associated with any of these jobs. */
export type GetAtsInterviewsParameterJobIds = string;

export interface GetAtsInterviewsPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      /** The title of the interview. */
      title: string | null;
      /**
       * The start time of the interview.
       * @format date-time
       */
      starting_at: string | null;
      /**
       * The end time of the interview.
       * @format date-time
       */
      ending_at: string | null;
      /** Location of the interview. */
      location?: {
        city?: string | null;
        /** Contains the ISO2 country code if possible. If not, it contains the original value. */
        country?: string | null;
        /** If we have address data, this is filled with the raw address string. */
        raw?: string | null;
        state?: string | null;
        /** If we can parse the address data, this field contains the first part of the street information. */
        street_1?: string | null;
        street_2?: string | null;
        zip_code?: string | null;
      };
      /** The Kombo ID of the application this interview belongs to. The ID can be used to retrieve the application from the `get applications` endpoint. */
      application_id: string | null;
      /** If a system specifies to which stage this interview belongs to, this field will be the Kombo ID of the application stage. The ID can be used to retrieve the stage from the `get application stages` endpoint. */
      stage_id: string | null;
      /** Whether the interview was canceled or not. If we have no information, this field will be `null`. */
      canceled: boolean | null;
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
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      users: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /** First name of the user. */
        first_name: string | null;
        /** Last name of the user. */
        last_name: string | null;
        /**
         * Email of the user. If the email address is invalid, it will be set to null.
         * @pattern ^(?!\.)(?!.*\.\.)([\w'+-.]*)[\w+-]@([\da-z][\da-z-]*\.)+[a-z]{2,}$
         */
        email?: string | null;
      }[];
      application: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /**
         * Parsed status of the application. If Kombo identifies that the application was accepted and the candidate hired, it will be `HIRED`. If the application was rejected or the candidate declined, it will be `DECLINED`. If the application is still in process, it will be `PENDING`.
         * Kombo will always try to deliver this information as reliably as possible.
         */
        outcome: "PENDING" | "HIRED" | "DECLINED";
        /** Reason for the rejection of the candidate. */
        rejection_reason_name: string | null;
        candidate: {
          /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
          id: string;
          /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
          remote_id: string;
          /** First name of the candidate. */
          first_name: string | null;
          /** Last name of the candidate. */
          last_name: string | null;
          /**
           * A list of email addresses of the candidate with an optional type. If an email address is invalid, it will be filtered out.
           * @default []
           */
          email_addresses?: any[] | null;
        };
        job: {
          /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
          id: string;
          /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
          remote_id: string;
          /** Title of the job. */
          name: string | null;
        };
      };
    }[];
  };
}

export interface GetAtsActionsAtsCreateCandidatePositiveResponse {
  status: "success";
  data: {
    /** Restrictions with attachment types that we know about. If this is null, we don't have information about restrictions on attachments. */
    attachment_restrictions?: {
      /**
       * The maximum total size of all attachments. If null, we don' have information about the total size of all attachments. Make sure to consider the total request size limits of Kombo.
       * @format double
       * @min -1.7976931348623157e+308
       */
      total_size_bytes: number | null;
      /** Specific attachment type restrictions for each attachment type. If null, we don' have information about the attachment type restrictions. */
      types: {
        /** Specific attachment type restrictions for CV. */
        CV:
          | {
              is_supported: true;
              /**
               * The minimum amount of attachments. If null, we don' have information about the minimum amount.
               * @format double
               * @min -1.7976931348623157e+308
               */
              min_amount: number | null;
              /**
               * The maximum amount of attachments. If null, we don' have information about the maximum amount.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_amount: number | null;
              /**
               * The maximum file size in bytes. If null, we don't have information about the maximum file size.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_file_size_bytes: number | null;
              /** The accepted mime types. If null, we don't have information about the accepted mime types. */
              accepted_mime_types: any[] | null;
            }
          | {
              is_supported: false;
            };
        /** Specific attachment type restrictions for COVER_LETTER. */
        COVER_LETTER:
          | {
              is_supported: true;
              /**
               * The minimum amount of attachments. If null, we don' have information about the minimum amount.
               * @format double
               * @min -1.7976931348623157e+308
               */
              min_amount: number | null;
              /**
               * The maximum amount of attachments. If null, we don' have information about the maximum amount.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_amount: number | null;
              /**
               * The maximum file size in bytes. If null, we don't have information about the maximum file size.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_file_size_bytes: number | null;
              /** The accepted mime types. If null, we don't have information about the accepted mime types. */
              accepted_mime_types: any[] | null;
            }
          | {
              is_supported: false;
            };
        /** Specific attachment type restrictions for OTHER. */
        OTHER:
          | {
              is_supported: true;
              /**
               * The minimum amount of attachments. If null, we don' have information about the minimum amount.
               * @format double
               * @min -1.7976931348623157e+308
               */
              min_amount: number | null;
              /**
               * The maximum amount of attachments. If null, we don' have information about the maximum amount.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_amount: number | null;
              /**
               * The maximum file size in bytes. If null, we don't have information about the maximum file size.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_file_size_bytes: number | null;
              /** The accepted mime types. If null, we don't have information about the accepted mime types. */
              accepted_mime_types: any[] | null;
            }
          | {
              is_supported: false;
            };
      };
    };
  };
}

export interface GetAtsActionsAtsCreateApplicationPositiveResponse {
  status: "success";
  data: {
    /** Restrictions with attachment types that we know about. If this is null, we don't have information about restrictions on attachments. */
    attachment_restrictions?: {
      /**
       * The maximum total size of all attachments. If null, we don' have information about the total size of all attachments. Make sure to consider the total request size limits of Kombo.
       * @format double
       * @min -1.7976931348623157e+308
       */
      total_size_bytes: number | null;
      /** Specific attachment type restrictions for each attachment type. If null, we don' have information about the attachment type restrictions. */
      types: {
        /** Specific attachment type restrictions for CV. */
        CV:
          | {
              is_supported: true;
              /**
               * The minimum amount of attachments. If null, we don' have information about the minimum amount.
               * @format double
               * @min -1.7976931348623157e+308
               */
              min_amount: number | null;
              /**
               * The maximum amount of attachments. If null, we don' have information about the maximum amount.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_amount: number | null;
              /**
               * The maximum file size in bytes. If null, we don't have information about the maximum file size.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_file_size_bytes: number | null;
              /** The accepted mime types. If null, we don't have information about the accepted mime types. */
              accepted_mime_types: any[] | null;
            }
          | {
              is_supported: false;
            };
        /** Specific attachment type restrictions for COVER_LETTER. */
        COVER_LETTER:
          | {
              is_supported: true;
              /**
               * The minimum amount of attachments. If null, we don' have information about the minimum amount.
               * @format double
               * @min -1.7976931348623157e+308
               */
              min_amount: number | null;
              /**
               * The maximum amount of attachments. If null, we don' have information about the maximum amount.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_amount: number | null;
              /**
               * The maximum file size in bytes. If null, we don't have information about the maximum file size.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_file_size_bytes: number | null;
              /** The accepted mime types. If null, we don't have information about the accepted mime types. */
              accepted_mime_types: any[] | null;
            }
          | {
              is_supported: false;
            };
        /** Specific attachment type restrictions for OTHER. */
        OTHER:
          | {
              is_supported: true;
              /**
               * The minimum amount of attachments. If null, we don' have information about the minimum amount.
               * @format double
               * @min -1.7976931348623157e+308
               */
              min_amount: number | null;
              /**
               * The maximum amount of attachments. If null, we don' have information about the maximum amount.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_amount: number | null;
              /**
               * The maximum file size in bytes. If null, we don't have information about the maximum file size.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_file_size_bytes: number | null;
              /** The accepted mime types. If null, we don't have information about the accepted mime types. */
              accepted_mime_types: any[] | null;
            }
          | {
              is_supported: false;
            };
      };
    };
  };
}

export interface GetAtsActionsAtsAddApplicationAttachmentPositiveResponse {
  status: "success";
  data: {
    /** Restrictions with attachment types that we know about. If this is null, we don't have information which types are supported. */
    attachment_restrictions?: {
      types: {
        /** Specific attachment type restrictions for CV. */
        CV:
          | {
              is_supported: true;
              /**
               * The maximum file size in bytes. If null, we don't have information about the maximum file size.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_file_size_bytes: number | null;
              /** The accepted mime types. If null, we don't have information about the accepted mime types. */
              accepted_mime_types: any[] | null;
            }
          | {
              is_supported: false;
            };
        /** Specific attachment type restrictions for COVER_LETTER. */
        COVER_LETTER:
          | {
              is_supported: true;
              /**
               * The maximum file size in bytes. If null, we don't have information about the maximum file size.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_file_size_bytes: number | null;
              /** The accepted mime types. If null, we don't have information about the accepted mime types. */
              accepted_mime_types: any[] | null;
            }
          | {
              is_supported: false;
            };
        /** Specific attachment type restrictions for OTHER. */
        OTHER:
          | {
              is_supported: true;
              /**
               * The maximum file size in bytes. If null, we don't have information about the maximum file size.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_file_size_bytes: number | null;
              /** The accepted mime types. If null, we don't have information about the accepted mime types. */
              accepted_mime_types: any[] | null;
            }
          | {
              is_supported: false;
            };
      };
    };
  };
}

export interface GetAtsActionsAtsAddCandidateAttachmentPositiveResponse {
  status: "success";
  data: {
    /** Restrictions with attachment types that we know about. If this is null, we don't have information which types are supported. */
    attachment_restrictions?: {
      types: {
        /** Specific attachment type restrictions for CV. */
        CV:
          | {
              is_supported: true;
              /**
               * The maximum file size in bytes. If null, we don't have information about the maximum file size.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_file_size_bytes: number | null;
              /** The accepted mime types. If null, we don't have information about the accepted mime types. */
              accepted_mime_types: any[] | null;
            }
          | {
              is_supported: false;
            };
        /** Specific attachment type restrictions for COVER_LETTER. */
        COVER_LETTER:
          | {
              is_supported: true;
              /**
               * The maximum file size in bytes. If null, we don't have information about the maximum file size.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_file_size_bytes: number | null;
              /** The accepted mime types. If null, we don't have information about the accepted mime types. */
              accepted_mime_types: any[] | null;
            }
          | {
              is_supported: false;
            };
        /** Specific attachment type restrictions for OTHER. */
        OTHER:
          | {
              is_supported: true;
              /**
               * The maximum file size in bytes. If null, we don't have information about the maximum file size.
               * @format double
               * @min -1.7976931348623157e+308
               */
              max_file_size_bytes: number | null;
              /** The accepted mime types. If null, we don't have information about the accepted mime types. */
              accepted_mime_types: any[] | null;
            }
          | {
              is_supported: false;
            };
      };
    };
  };
}

export interface PostAtsImportTrackedApplicationPositiveResponse {
  status: "success";
  data: {
    /**
     * @minLength 24
     * @maxLength 24
     * @pattern ^[1-9A-HJ-NP-Za-km-z]+$
     */
    id: string;
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    tracked_at: string | null;
    imported_id: {
      erecruiter?:
        | {
            /** Uses the `Api/Applications/ByJob/{jobId}` endpoint to retrieve the relevant application based on the job ID. */
            id_type: "application_and_job_remote_ids";
            application_remote_id: string;
            job_remote_id: string;
          }
        | {
            /** Uses the `Api/Applications/{applicantId}` endpoint to retrieve the relevant application based on the candidate ID. */
            id_type: "application_and_candidate_remote_ids";
            candidate_remote_id: string;
            application_remote_id: string;
          };
      successfactors?: {
        /** Uses the `/JobApplication` ODATA endpoint to retrieve the relevant application based on the application ID. */
        id_type: "application_remote_id";
        application_remote_id: string;
      };
      recruitee?: {
        /** Uses the `/candidates` endpoint to retrieve all candidates, to find the relevant application based on the placement ID. */
        id_type: "placement_id";
        placement_id: string;
      };
      greenhouse?: {
        /** Uses the `/applications/{id}` endpoint to retrieve the application. */
        id_type: "application_id";
        application_id: string;
      };
      onlyfy?: {
        /** Uses the `/v1/application/{id}` endpoint to retrieve the application. */
        id_type: "application_id";
        application_id: string;
      };
      smartrecruiters?: {
        /** Uses the `/candidates/{candidateId}/jobs/{jobId}` endpoint to retrieve the application. */
        id_type: "candidate_and_job_remote_ids";
        candidate_remote_id: string;
        job_remote_id: string;
      };
    };
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostAtsImportTrackedApplicationRequestBody {
  erecruiter?:
    | {
        /** Uses the `Api/Applications/ByJob/{jobId}` endpoint to retrieve the relevant application based on the job ID. */
        id_type: "application_and_job_remote_ids";
        application_remote_id: string;
        job_remote_id: string;
      }
    | {
        /** Uses the `Api/Applications/{applicantId}` endpoint to retrieve the relevant application based on the candidate ID. */
        id_type: "application_and_candidate_remote_ids";
        candidate_remote_id: string;
        application_remote_id: string;
      };
  successfactors?: {
    /** Uses the `/JobApplication` ODATA endpoint to retrieve the relevant application based on the application ID. */
    id_type: "application_remote_id";
    application_remote_id: string;
  };
  recruitee?: {
    /** Uses the `/candidates` endpoint to retrieve all candidates, to find the relevant application based on the placement ID. */
    id_type: "placement_id";
    placement_id: string;
  };
  greenhouse?: {
    /** Uses the `/applications/{id}` endpoint to retrieve the application. */
    id_type: "application_id";
    application_id: string;
  };
  onlyfy?: {
    /** Uses the `/v1/application/{id}` endpoint to retrieve the application. */
    id_type: "application_id";
    application_id: string;
  };
  smartrecruiters?: {
    /** Uses the `/candidates/{candidateId}/jobs/{jobId}` endpoint to retrieve the application. */
    id_type: "candidate_and_job_remote_ids";
    candidate_remote_id: string;
    job_remote_id: string;
  };
  /**
   * YYYY-MM-DDTHH:mm:ss.sssZ
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  tracked_at: string | null;
}

export interface GetAssessmentPackagesPositiveResponse {
  status: "success";
  data: {
    packages: {
      id: string;
      name: string;
      description: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updated_at: string | null;
      type:
        | "BEHAVIORAL"
        | "VIDEO_INTERVIEW"
        | "SKILLS_TEST"
        | "BACKGROUND_CHECK"
        | "REFERENCE_CHECK";
    }[];
  };
}

export interface PutAssessmentPackagesPositiveResponse {
  status: "success";
  data: object;
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PutAssessmentPackagesRequestBody {
  packages: {
    /** A unique identifier for the assessment package. */
    id: string;
    type:
      | "BEHAVIORAL"
      | "VIDEO_INTERVIEW"
      | "SKILLS_TEST"
      | "BACKGROUND_CHECK"
      | "REFERENCE_CHECK";
    /** The name of the assessment package. */
    name: string;
    /** Description about the package. Some ATSs will display this in their UI. */
    description: string;
  }[];
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAssessmentOrdersOpenParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetAssessmentOrdersOpenParameterPageSize = number;

export interface GetAssessmentOrdersOpenPositiveResponse {
  status: "success";
  data: {
    next: string | null;
    results: {
      /** The unique identifier of the assessment order. */
      id: string;
      /** The identifier of the assessment package. */
      package_id: string;
      /** Information about the candidate taking the assessment. */
      candidate: {
        /**
         * The candidate's email address.
         * @format email
         */
        email: string;
        /** The candidate's first name. */
        first_name?: string | null;
        /** The candidate's last name. */
        last_name?: string | null;
        /** The candidate's phone number. */
        phone?: string | null;
        /** The candidate's identifier in the integrated system. */
        remote_id?: string | null;
      };
      /** Information about the job application. */
      application: {
        /** The application's identifier in the integrated system. */
        remote_id?: string | null;
      };
      /** Information about the job posting. */
      job: {
        /** The job's identifier in the integrated system. */
        remote_id?: string | null;
        /** The job title. */
        name?: string | null;
        /** The job location information. */
        location?: {
          city?: string | null;
          /** Contains the ISO2 country code if possible. If not, it contains the original value. */
          country?: string | null;
          /** If we have address data, this is filled with the raw address string. */
          raw?: string | null;
          state?: string | null;
          /** If we can parse the address data, this field contains the first part of the street information. */
          street_1?: string | null;
          street_2?: string | null;
          zip_code?: string | null;
        };
        /** The hiring team allows you to sync users into your system who can access the job and its applications. */
        hiring_team: {
          /** The team member's identifier in the integrated system. */
          remote_id: string;
          /** The team member's email address. */
          email: string | null;
          /** The team member's first name. */
          first_name: string | null;
          /** The team member's last name. */
          last_name: string | null;
          /** Array of the roles of the user for this specific job. Currently only `RECRUITER` and `HIRING_MANAGER` are mapped into our unified schema. */
          hiring_team_roles: ("RECRUITER" | "HIRING_MANAGER")[];
        }[];
      };
    }[];
  };
}

export type PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId =
  string;

export interface PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse {
  status: "success";
  data: object;
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PutAssessmentOrdersAssessmentOrderIdResultRequestBody {
  /**
   * Status of the assessment.
   *
   * **Please note the `status` can only be updated to a different value if its current value is `OPEN`.**
   */
  status: "COMPLETED" | "CANCELLED" | "OPEN";
  /** @format uri */
  result_url: string;
  /**
   * YYYY-MM-DDTHH:mm:ss.sssZ
   *
   * **Please make sure this value is provided when the `status` is of the type `COMPLETED` or `CANCELLED`.**
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  completed_at?: string;
  /**
   * @format double
   * @min -1.7976931348623157e+308
   */
  score?: number;
  /**
   * @format double
   * @min -1.7976931348623157e+308
   */
  max_score?: number;
  /**
   * An array of additional attributes that you would like to submit as a part of the assessment result.
   *
   * - If an ATS only supports writing text attributes, we will transform non `TEXT` attributes into formatted plain text values.
   * @default []
   */
  attributes?: (
    | {
        type: "TEXT";
        label: string;
        value: string;
      }
    | {
        type: "SUB_RESULT";
        id: string;
        label: string;
        score: {
          /**
           * @format double
           * @min -1.7976931348623157e+308
           */
          value: number;
          /**
           * @format double
           * @min 1
           */
          max: number;
        };
        status: "COMPLETED" | "CANCELLED";
      }
  )[];
  /**
   * An array of attachments containing the assessment result.
   * @maxItems 5
   * @default []
   */
  attachments?: {
    /** File name of the file you want to upload. We recommend providing something human-readable with a valid file extension (like `Resume.pdf`), as this might be shown in your customer's system. */
    name: string;
    /**
     * Content/MIME type of the file (e.g., `application/pdf`).
     *
     * If you provide `data`, this is required. If you provide `data_url`, this is optional and we'll attempt to use the `Content-Type` header of the response.
     *
     * **Note:** Please validate that the content type you provide is actually meaningful (and not something generic like [`application/octet-stream`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types#applicationoctet-stream)). Especially when using object storage (like AWS S3), it's easy to accidentally discard the content types of user-provided files, so make sure to explicitly persist them when processing uploads from your users (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.html#SysMetadata), [Google Cloud](https://cloud.google.com/storage/docs/metadata#content-type), and [Azure](https://learn.microsoft.com/en-us/rest/api/storageservices/put-blob#request-headers-all-blob-types)).
     * @pattern ^[\w.-]+\/[\w.-]+$
     */
    content_type?: string;
    /**
     * URL to the file you want to upload that can be accessed without authentication headers. We will download the content immediately when receiving the request, so the URL can be short-lived.
     *
     * If you're using an object storage provider (like AWS S3), we strongly recommend providing a signed URL for secure access (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html), [Google Cloud](https://cloud.google.com/storage/docs/access-control/signed-urls), and [Azure](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)).
     *
     * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
     * @format uri
     */
    data_url?: string;
    /**
     * Base64-encoded contents of the file you want to upload.
     *
     * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
     */
    data?: string;
  }[];
  /** Additional fields that we will pass through to specific ATS systems. */
  remote_fields?: {
    smartrecruiters?: {
      /** Value that we will pass through to SmartRecruiters' `scoreLabel` field. */
      scoreLabel?: string;
    };
  };
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetLmsUsersParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetLmsUsersParameterRemoteIds = string;

/** Filter users by their work email address. */
export type GetLmsUsersParameterEmail = string;

export interface GetLmsUsersPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** The user's first name. */
      first_name: string | null;
      /** The user's last name. */
      last_name: string | null;
      /** The user's work email address. */
      work_email: string | null;
      /** Current status of the user in the LMS. */
      status: "ACTIVE" | "INACTIVE";
      /**
       * The date and time the object was created in the remote system.
       * @format date-time
       */
      remote_created_at: string | null;
      /** Array of course progress records for this user. */
      progress: {
        /** The ID of the course this progress relates to. */
        course_id: string;
        /** Unique identifier for this progress entry. */
        progress_id: string;
        /** Current status of the learner in this course. */
        status: "ENROLLED" | "STARTED" | "COMPLETED" | "STOPPED";
        /** Date when the user enrolled in the course. */
        enrollment_date: string | null;
        /** Date when the user completed the course. */
        completion_date: string | null;
        /**
         * Numerical score achieved by the user (e.g., 85.5).
         * @format double
         * @min -1.7976931348623157e+308
         */
        score: number | null;
        /**
         * Total time spent on the course in minutes.
         * @format double
         * @min -1.7976931348623157e+308
         */
        duration: number | null;
        /** Additional comments or notes about the progress. */
        comments: string | null;
      }[];
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
    }[];
  };
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetLmsCoursesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetLmsCoursesParameterRemoteIds = string;

/** Filter by the `title` field. Can be used to find courses by keywords present in the course title. */
export type GetLmsCoursesParameterTitleContains = string;

export interface GetLmsCoursesPositiveResponse {
  status: "success";
  data: {
    /** Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. */
    next: string | null;
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** The title of the course. */
      title: string;
      /** A description of the course. */
      description: string | null;
      /** URL where the course can be accessed. */
      url: string | null;
      /**
       * The date and time the object was created in the remote system.
       * @format date-time
       */
      remote_created_at: string | null;
      /** Skills that learners will develop by completing this course. */
      skills: any[] | null;
      /** Ordered list of content items that make up this course. */
      ordered_content: {
        /** The Kombo ID of the content item. */
        id: string;
        /** The remote ID of the content item. */
        remote_id: string;
        /** The title of the content item. */
        title: string;
        /** A description of the content item. */
        description: string | null;
        /** URL where the content can be accessed. */
        url: string | null;
        /** The type of learning content. */
        type: "COACHING" | "VIDEO" | "TEXT" | "QUIZ";
        /**
         * The date and time the object was created in the remote system.
         * @format date-time
         */
        remote_created_at: string | null;
      }[];
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /** Date when the course was deleted. */
      remote_deleted_at: string | null;
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
    }[];
  };
}

export interface PostLmsCoursesPositiveResponse {
  status: "success";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
    remote_id: string;
    /** The title of the course. */
    title: string;
    /** A description of the course. */
    description: string | null;
    /** URL where the course can be accessed. */
    url: string | null;
    /**
     * The date and time the object was created in the remote system.
     * @format date-time
     */
    remote_created_at: string | null;
    /** Skills that learners will develop by completing this course. */
    skills: any[] | null;
    /** Ordered list of content items that make up this course. */
    ordered_content: {
      /** The Kombo ID of the content item. */
      id: string;
      /** The remote ID of the content item. */
      remote_id: string;
      /** The title of the content item. */
      title: string;
      /** A description of the content item. */
      description: string | null;
      /** URL where the content can be accessed. */
      url: string | null;
      /** The type of learning content. */
      type: "COACHING" | "VIDEO" | "TEXT" | "QUIZ";
      /**
       * The date and time the object was created in the remote system.
       * @format date-time
       */
      remote_created_at: string | null;
    }[];
    /**
     * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
     * @format date-time
     */
    changed_at: string;
    /** Date when the course was deleted. */
    remote_deleted_at: string | null;
    /**
     * Includes the data fetched from the remote system.
     * Please be aware that including this in you scope config might violate other
     * scopes that are set.
     *
     * Remote data always has the endpoint path that we got the data from as the
     * top level key. For example, it could look like: `{ "/companies": { ... }}`
     *
     * This is not available on all plans. Reach out to Kombo if you need it.
     */
    remote_data: object | null;
  };
}

export interface PostLmsCoursesRequestBody {
  /** The title of the course */
  title: string;
  /** A description of the course */
  description?: string | null;
  /** URL where the course can be accessed */
  url?: string | null;
  /** Skills that will be taught in this course */
  skills?: {
    /** The name of the skill */
    name: string;
    /** The proficiency level of the skill */
    skill_level?: string | null;
  }[];
}

export interface PostLmsProgressPositiveResponse {
  status: "success";
  data: {
    /** The Kombo ID of the progress entry. */
    id: string;
    /** The remote ID of the progress entry. */
    remote_id: string;
    /** The ID of the course this progress relates to. */
    course_id: string;
    /** The ID of the user this progress belongs to. */
    user_id: string;
    /** Current status of the learner in this course. */
    status: "ENROLLED" | "STARTED" | "COMPLETED" | "STOPPED";
    /** Date when the user enrolled in the course. */
    enrollment_date: string | null;
    /** Date when the user completed the course. */
    completion_date: string | null;
    /**
     * Numerical score achieved by the user (e.g., 85.5).
     * @format double
     * @min -1.7976931348623157e+308
     */
    score: number | null;
    /**
     * Total time spent on the course in minutes.
     * @format double
     * @min -1.7976931348623157e+308
     */
    duration: number | null;
    /** Additional comments or notes about the progress. */
    comments: string | null;
    /**
     * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
     * @format date-time
     */
    changed_at: string;
    /**
     * Includes the data fetched from the remote system.
     * Please be aware that including this in you scope config might violate other
     * scopes that are set.
     *
     * Remote data always has the endpoint path that we got the data from as the
     * top level key. For example, it could look like: `{ "/companies": { ... }}`
     *
     * This is not available on all plans. Reach out to Kombo if you need it.
     */
    remote_data: object | null;
  };
}

export interface PostLmsProgressRequestBody {
  /** The ID of the course. */
  course_id: string;
  /** The ID of the user. */
  user_id: string;
  /** Unique identifier for this progress entry. */
  progress_id: string;
  /** Current status of the learner in this course. */
  status: "ENROLLED" | "STARTED" | "COMPLETED" | "STOPPED";
  /** Date when the user enrolled in the course. */
  enrollment_date: string;
  /** Date when the user completed the course. */
  completion_date?: string | null;
  /**
   * Numerical score achieved (e.g., 85.5).
   * @format double
   * @min -1.7976931348623157e+308
   */
  score?: number | null;
  /**
   * Total time spent on the course in minutes.
   * @format double
   * @min -1.7976931348623157e+308
   */
  duration?: number | null;
  /** Additional comments or notes. */
  comments?: string | null;
}

/** The ID of the progress entry */
export type PatchLmsProgressProgressIdParameterProgressId = string;

export interface PatchLmsProgressProgressIdPositiveResponse {
  status: "success";
  data: {
    /** The Kombo ID of the progress entry. */
    id: string;
    /** The remote ID of the progress entry. */
    remote_id: string;
    /** The ID of the course this progress relates to. */
    course_id: string;
    /** The ID of the user this progress belongs to. */
    user_id: string;
    /** Current status of the learner in this course. */
    status: "ENROLLED" | "STARTED" | "COMPLETED" | "STOPPED";
    /** Date when the user enrolled in the course. */
    enrollment_date: string | null;
    /** Date when the user completed the course. */
    completion_date: string | null;
    /**
     * Numerical score achieved by the user (e.g., 85.5).
     * @format double
     * @min -1.7976931348623157e+308
     */
    score: number | null;
    /**
     * Total time spent on the course in minutes.
     * @format double
     * @min -1.7976931348623157e+308
     */
    duration: number | null;
    /** Additional comments or notes about the progress. */
    comments: string | null;
    /**
     * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
     * @format date-time
     */
    changed_at: string;
    /**
     * Includes the data fetched from the remote system.
     * Please be aware that including this in you scope config might violate other
     * scopes that are set.
     *
     * Remote data always has the endpoint path that we got the data from as the
     * top level key. For example, it could look like: `{ "/companies": { ... }}`
     *
     * This is not available on all plans. Reach out to Kombo if you need it.
     */
    remote_data: object | null;
  };
}

export interface PatchLmsProgressProgressIdRequestBody {
  /** The ID of the course. */
  course_id?: string;
  /** The ID of the user. */
  user_id?: string;
  /** Current status of the learner in this course. */
  status?: "ENROLLED" | "STARTED" | "COMPLETED" | "STOPPED";
  /** Date when the user enrolled in the course. */
  enrollment_date?: string;
  /** Date when the user completed the course. */
  completion_date?: string | null;
  /**
   * Numerical score achieved (e.g., 85.5).
   * @format double
   * @min -1.7976931348623157e+308
   */
  score?: number | null;
  /**
   * Total time spent on the course in minutes.
   * @format double
   * @min -1.7976931348623157e+308
   */
  duration?: number | null;
  /** Additional comments or notes. */
  comments?: string | null;
}

export interface PostLmsContentPositiveResponse {
  status: "success";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
    remote_id: string;
    /** The title of the content item. */
    title: string;
    /** A description of the content item. */
    description: string | null;
    /** URL where the content can be accessed. */
    url: string | null;
    /** The type of learning content. */
    type: "COACHING" | "VIDEO" | "TEXT" | "QUIZ";
    /** The ID of the course this content belongs to. */
    course_id: string | null;
    /**
     * The date and time the object was created in the remote system.
     * @format date-time
     */
    remote_created_at: string | null;
    /**
     * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
     * @format date-time
     */
    changed_at: string;
    /**
     * Includes the data fetched from the remote system.
     * Please be aware that including this in you scope config might violate other
     * scopes that are set.
     *
     * Remote data always has the endpoint path that we got the data from as the
     * top level key. For example, it could look like: `{ "/companies": { ... }}`
     *
     * This is not available on all plans. Reach out to Kombo if you need it.
     */
    remote_data: object | null;
  };
}

export interface PostLmsContentRequestBody {
  /** The ID of the course to add this content to */
  course_id: string;
  /** The title of the content item */
  title: string;
  /** A description of the content item */
  description?: string | null;
  /** URL where the content can be accessed */
  url?: string | null;
  /** The type of learning content */
  type: "COACHING" | "VIDEO" | "TEXT" | "QUIZ";
}

export interface PostAiApplyCareerSitesPositiveResponse {
  status: "success";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The label of the career site */
    label: string;
  };
}

export interface PostAiApplyCareerSitesRequestBody {
  /** The label of the career site */
  label: string;
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAiApplyCareerSitesParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetAiApplyCareerSitesParameterPageSize = number;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetAiApplyCareerSitesParameterIds = string;

export interface GetAiApplyCareerSitesPositiveResponse {
  status: "success";
  data: {
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The label of the career site */
      label: string;
    }[];
    next: string | null;
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAiApplyPostingsParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetAiApplyPostingsParameterPageSize = number;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetAiApplyPostingsParameterIds = string;

/** Filter by a comma-separated list of career site IDs such as `A8m9k9RhjNokMfRTWtpQ99VtH,rCbkAA3pvcKjsFYwEeXtCQkc`. */
export type GetAiApplyPostingsParameterCareerSiteIds = string;

/** Filter by a comma-separated list of job codes such as `ACME_13,ACME_14`. */
export type GetAiApplyPostingsParameterJobCodes = string;

export interface GetAiApplyPostingsPositiveResponse {
  status: "success";
  data: {
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      career_site: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        label: string;
      };
      url: string;
      job_code: string | null;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      created_at: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updated_at: string;
      /**
       * The date and time the job posting was archived. You can only send applications if the job posting is not archived.
       * @format date-time
       */
      archived_at: string | null;
      archived_reason: "JOB_POSTING_TAKEN_OFFLINE" | "MANUAL_ARCHIVE";
      /** The status of the job posting. You can only send applications if the job posting is "APPLYABLE". */
      availability: "APPLYABLE" | "PENDING" | "ARCHIVED" | "UNAVAILABLE";
    }[];
    next: string | null;
  };
}

export interface PostAiApplyPostingsPositiveResponse {
  status: "success";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    career_site: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      label: string;
    };
    url: string;
    job_code: string | null;
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    created_at: string;
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    updated_at: string;
    /**
     * The date and time the job posting was archived. You can only send applications if the job posting is not archived.
     * @format date-time
     */
    archived_at: string | null;
    archived_reason: "JOB_POSTING_TAKEN_OFFLINE" | "MANUAL_ARCHIVE";
    /** The status of the job posting. You can only send applications if the job posting is "APPLYABLE". */
    availability: "APPLYABLE" | "PENDING" | "ARCHIVED" | "UNAVAILABLE";
  };
}

export interface PostAiApplyPostingsRequestBody {
  /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
  career_site_id: string;
  /**
   * The URL of the job posting to parse
   * @format uri
   * @pattern ^https?:\/\/
   */
  url: string;
  /** Job code to associate with the job posting */
  job_code?: string;
  /** The location in which the job is located */
  location?: {
    /** The country in which the job is located */
    country:
      | "AD"
      | "AE"
      | "AF"
      | "AG"
      | "AI"
      | "AL"
      | "AM"
      | "AO"
      | "AQ"
      | "AR"
      | "AS"
      | "AT"
      | "AU"
      | "AW"
      | "AX"
      | "AZ"
      | "BA"
      | "BB"
      | "BD"
      | "BE"
      | "BF"
      | "BG"
      | "BH"
      | "BI"
      | "BJ"
      | "BL"
      | "BM"
      | "BN"
      | "BO"
      | "BQ"
      | "BR"
      | "BS"
      | "BT"
      | "BV"
      | "BW"
      | "BY"
      | "BZ"
      | "CA"
      | "CC"
      | "CD"
      | "CF"
      | "CG"
      | "CH"
      | "CI"
      | "CK"
      | "CL"
      | "CM"
      | "CN"
      | "CO"
      | "CR"
      | "CU"
      | "CV"
      | "CW"
      | "CX"
      | "CY"
      | "CZ"
      | "DE"
      | "DJ"
      | "DK"
      | "DM"
      | "DO"
      | "DZ"
      | "EC"
      | "EE"
      | "EG"
      | "EH"
      | "ER"
      | "ES"
      | "ET"
      | "FI"
      | "FJ"
      | "FK"
      | "FM"
      | "FO"
      | "FR"
      | "GA"
      | "GB"
      | "GD"
      | "GE"
      | "GF"
      | "GG"
      | "GH"
      | "GI"
      | "GL"
      | "GM"
      | "GN"
      | "GP"
      | "GQ"
      | "GR"
      | "GS"
      | "GT"
      | "GU"
      | "GW"
      | "GY"
      | "HK"
      | "HM"
      | "HN"
      | "HR"
      | "HT"
      | "HU"
      | "ID"
      | "IE"
      | "IL"
      | "IM"
      | "IN"
      | "IO"
      | "IQ"
      | "IR"
      | "IS"
      | "IT"
      | "JE"
      | "JM"
      | "JO"
      | "JP"
      | "KE"
      | "KG"
      | "KH"
      | "KI"
      | "KM"
      | "KN"
      | "KP"
      | "KR"
      | "KW"
      | "KY"
      | "KZ"
      | "LA"
      | "LB"
      | "LC"
      | "LI"
      | "LK"
      | "LR"
      | "LS"
      | "LT"
      | "LU"
      | "LV"
      | "LY"
      | "MA"
      | "MC"
      | "MD"
      | "ME"
      | "MF"
      | "MG"
      | "MH"
      | "MK"
      | "ML"
      | "MM"
      | "MN"
      | "MO"
      | "MP"
      | "MQ"
      | "MR"
      | "MS"
      | "MT"
      | "MU"
      | "MV"
      | "MW"
      | "MX"
      | "MY"
      | "MZ"
      | "NA"
      | "NC"
      | "NE"
      | "NF"
      | "NG"
      | "NI"
      | "NL"
      | "NO"
      | "NP"
      | "NR"
      | "NU"
      | "NZ"
      | "OM"
      | "PA"
      | "PE"
      | "PF"
      | "PG"
      | "PH"
      | "PK"
      | "PL"
      | "PM"
      | "PN"
      | "PR"
      | "PS"
      | "PT"
      | "PW"
      | "PY"
      | "QA"
      | "RE"
      | "RO"
      | "RS"
      | "RU"
      | "RW"
      | "SA"
      | "SB"
      | "SC"
      | "SD"
      | "SE"
      | "SG"
      | "SH"
      | "SI"
      | "SJ"
      | "SK"
      | "SL"
      | "SM"
      | "SN"
      | "SO"
      | "SR"
      | "SS"
      | "ST"
      | "SV"
      | "SX"
      | "SY"
      | "SZ"
      | "TC"
      | "TD"
      | "TF"
      | "TG"
      | "TH"
      | "TJ"
      | "TK"
      | "TL"
      | "TM"
      | "TN"
      | "TO"
      | "TR"
      | "TT"
      | "TV"
      | "TW"
      | "TZ"
      | "UA"
      | "UG"
      | "UM"
      | "US"
      | "UY"
      | "UZ"
      | "VA"
      | "VC"
      | "VE"
      | "VG"
      | "VI"
      | "VN"
      | "VU"
      | "WF"
      | "WS"
      | "YE"
      | "YT"
      | "ZA"
      | "ZM"
      | "ZW";
    /** The postal/zip code in which the job is located */
    postal_code?: string;
  };
}

/** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
export type PostAiApplyPostingsPostingIdInquireParameterPostingId = string;

export interface PostAiApplyPostingsPostingIdInquirePositiveResponse {
  status: "success";
  data: {
    application_form: (
      | {
          block_type: "QUESTION";
          /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
          question_id: string;
          label: string;
          description: string | null;
          required: boolean;
          category: "EEO";
          question_type:
            | "TEXT"
            | "NUMBER"
            | "BOOLEAN"
            | "FILE"
            | "DATE"
            | "SINGLE_SELECT"
            | "MULTI_SELECT";
          unified_key:
            | "EMAIL"
            | "RESIDENCE_TYPE"
            | "RESIDENCE_FULL_STRING"
            | "RESIDENCE_COUNTRY"
            | "RESIDENCE_CITY"
            | "RESIDENCE_STATE"
            | "RESIDENCE_LINE_1"
            | "RESIDENCE_LINE_2"
            | "RESIDENCE_ZIP_CODE"
            | "APPLICANT_POOL_CONSENT"
            | "TERMS_AND_CONDITIONS"
            | "FIRST_NAME"
            | "LAST_NAME"
            | "FULL_NAME"
            | "GENDER"
            | "EXPECTED_START_DATE"
            | "RESUME"
            | "BIRTH_DATE"
            | "PHONE_NUMBER_TYPE"
            | "FULL_PHONE_NUMBER"
            | "PHONE_COUNTRY_CODE"
            | "PHONE_NATIONAL_NUMBER"
            | "PHONE_EXTENSION";
          options: any[] | null;
          display_when: {
            /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
            question_id: string;
            /** Answer to a `TEXT` question, the option ID of the answer to a `SINGLE_SELECT` question, or the answer to a `DATE` question as an ISO 8601 date string (e.g. "2021-12-31T23:59:59.000Z"). */
            answer_equals:
              | string
              | string[]
              | number
              | boolean
              | {
                  /** The original name (e.g., "resume.pdf") */
                  name: string;
                  /** The MIME type of the file (e.g., "application/pdf", "image/jpeg") */
                  content_type: string;
                  /**
                   * The file content encoded as a base64 string
                   * @format byte
                   */
                  data: string;
                };
          };
        }
      | {
          block_type: "SECTION";
          label: string;
          children: object[];
        }
    )[];
    /** JWT token for submitting the application. Valid for 12 hours from generation. */
    submission_token: string;
  };
}

export type PostAiApplyPostingsPostingIdInquireRequestBody = object;

/** The ID of the job posting to parse a new revision for */
export type PostAiApplyPostingsPostingIdParseParameterPostingId = string;

export interface PostAiApplyPostingsPostingIdParsePositiveResponse {
  status: "success";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    career_site: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      label: string;
    };
    url: string;
    job_code: string | null;
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    created_at: string;
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    updated_at: string;
    /**
     * The date and time the job posting was archived. You can only send applications if the job posting is not archived.
     * @format date-time
     */
    archived_at: string | null;
    archived_reason: "JOB_POSTING_TAKEN_OFFLINE" | "MANUAL_ARCHIVE";
    /** The status of the job posting. You can only send applications if the job posting is "APPLYABLE". */
    availability: "APPLYABLE" | "PENDING" | "ARCHIVED" | "UNAVAILABLE";
  };
}

export type PostAiApplyPostingsPostingIdParseRequestBody = object;

export interface PostAiApplyApplyPositiveResponse {
  status: "success";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    posting_id: string;
    status: string;
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    created_at: string;
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     */
    updated_at: string;
  };
}

export interface PostAiApplyApplyRequestBody {
  /** JWT token obtained from the POST /postings/:id/inquire endpoint. Valid for 12 hours. */
  submission_token: string;
  /**
   * The email address of the candidate. This is used for deduplication (preventing duplicate applications from the same candidate) and internal tracking purposes. This field is required but should not be displayed to the candidate on your application form - you should provide this from your own system.
   * @format email
   */
  candidate_email: string;
  /** Query parameters to be appended to the job posting URL when applying. */
  query_params?: Record<string, string>;
  /** Array of screening question answers. The answers need to match exactly with the questions you received on the POST /postings/:id/inquire endpoint. Otherwise, the application will be rejected. */
  screening_question_answers: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    question_id: string;
    /** Answer to a `TEXT` question, the option ID of the answer to a `SINGLE_SELECT` question, or the answer to a `DATE` question as an ISO 8601 date string (e.g. "2021-12-31T23:59:59.000Z"). */
    answer:
      | string
      | string[]
      | number
      | boolean
      | {
          /** The original name (e.g., "resume.pdf") */
          name: string;
          /** The MIME type of the file (e.g., "application/pdf", "image/jpeg") */
          content_type: string;
          /**
           * The file content encoded as a base64 string
           * @format byte
           */
          data: string;
        };
  }[];
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAiApplyApplicationsParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 250.
 * @format int64
 * @min 1
 * @max 250
 * @default 100
 */
export type GetAiApplyApplicationsParameterPageSize = number;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetAiApplyApplicationsParameterIds = string;

/** Filter by a comma-separated list of job posting IDs such as `89V6GEKpdZwqbxQz59n1ftFb,kcGHREEXCMF26Yhpuyh1gDVE`. */
export type GetAiApplyApplicationsParameterJobPostingIds = string;

export interface GetAiApplyApplicationsPositiveResponse {
  status: "success";
  data: {
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      job_posting_id: string;
      status: "PENDING" | "SUBMITTED" | "FAILED";
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      created_at: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updated_at: string;
    }[];
    next: string | null;
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAiApplyUnifiedApiJobsParameterCursor = string;

/**
 * The number of results to return per page. Maximum is 5.
 * @format int64
 * @min 1
 * @max 5
 * @default 5
 */
export type GetAiApplyUnifiedApiJobsParameterPageSize = number;

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
export type GetAiApplyUnifiedApiJobsParameterIds = string;

/** This parameter exists for backwards compatibility with Kombo's unified API. Supplying a comma-separated list of remote IDs such as `32,33` will return no jobs because AI Apply does not interface with a remote system that issues remote IDs. */
export type GetAiApplyUnifiedApiJobsParameterRemoteIds = string;

/** Filter by a comma-separated list of job codes such as `ACME_12,ACME_14`. */
export type GetAiApplyUnifiedApiJobsParameterJobCodes = string;

/** Filter by a comma-separated list of career site IDs such as `A8m9k9RhjNokMfRTWtpQ99VtH,rCbkAA3pvcKjsFYwEeXtCQkc`. */
export type GetAiApplyUnifiedApiJobsParameterCareerSiteIds = string;

export interface GetAiApplyUnifiedApiJobsPositiveResponse {
  status: "success";
  data: {
    results: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      remote_id: string;
      name: string | null;
      job_code: string | null;
      description: string | null;
      confidential: boolean | null;
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      weekly_hours: number | null;
      category: string | null;
      department: string | null;
      post_url: string | null;
      experience_level: string | null;
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      salary_amount: number | null;
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      salary_amount_from: number | null;
      /**
       * @format double
       * @min -1.7976931348623157e+308
       */
      salary_amount_to: number | null;
      salary_currency: string | null;
      custom_fields: object | null;
      integration_fields: object[];
      /**
       * @format date-time
       * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$
       */
      opened_at: string | null;
      /**
       * @format date-time
       * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$
       */
      closed_at: string | null;
      /**
       * @format date-time
       * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$
       */
      remote_created_at: string | null;
      /**
       * @format date-time
       * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$
       */
      remote_updated_at: string | null;
      contact_id: string | null;
      remote_data: object | null;
      /**
       * @format date-time
       * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$
       */
      changed_at: string;
      /**
       * @format date-time
       * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$
       */
      remote_deleted_at: string | null;
      remote_url: string | null;
      stages: object[];
      screening_questions: any[] | null;
      job_postings: object[];
      hiring_team: object[];
      /** One of 5 standardized values or — in rare cases where we can’t find a clear mapping — the original string passed through. */
      employment_type?:
        | "FULL_TIME"
        | "PART_TIME"
        | "CONTRACT"
        | "SEASONAL"
        | "INTERNSHIP"
        | string
        | null;
      /**
       * The job's current status.
       *
       * *Note: For any checks (e.g., "can we publish this job?"), always evaluate both `status` and `visibility`. For example, a job can be `status=OPEN` with `visibility=INTERNAL`, meaning only existing employees can apply.*
       *
       *  In rare cases where we can’t find a clear mapping, the original string is passed through.
       */
      status?: "OPEN" | "CLOSED" | "DRAFT" | "ARCHIVED" | string | null;
      visibility: string | null;
      remote_work_status: string | null;
      salary_period: string | null;
      location?: {
        city?: string | null;
        /** Contains the ISO2 country code if possible. If not, it contains the original value. */
        country?: string | null;
        /** If we have address data, this is filled with the raw address string. */
        raw?: string | null;
        state?: string | null;
        /** If we can parse the address data, this field contains the first part of the street information. */
        street_1?: string | null;
        street_2?: string | null;
        zip_code?: string | null;
      };
    }[];
    next: string | null;
  };
}

/** The Kombo ID or Remote ID of the Job this candidate should apply for. If you want to use the ID of the integrated system (remote_id) you need to prefix the id with "remote:". You can use the remote ID if you do not want to sync jobs. */
export type PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = string;

export interface PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse {
  status: "success";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
    remote_id: string | null;
    /**
     * Parsed status of the application. If Kombo identifies that the application was accepted and the candidate hired, it will be `HIRED`. If the application was rejected or the candidate declined, it will be `DECLINED`. If the application is still in process, it will be `PENDING`.
     * Kombo will always try to deliver this information as reliably as possible.
     */
    outcome: "PENDING" | "HIRED" | "DECLINED";
    /** Reason for the rejection of the candidate. */
    rejection_reason_name: string | null;
    /**
     * The time that the application was rejected.
     * @format date-time
     */
    rejected_at: string | null;
    /** ID of the current application stage */
    current_stage_id: string | null;
    /** The Kombo ID of the job which the candidate applied to. The ID can be used to retrieve the job from the `get jobs` endpoint. */
    job_id: string | null;
    /** The Kombo ID of the candidate who applied to the job. The ID can be used to retrieve the candidate from the `get candidates` endpoint. */
    candidate_id: string | null;
    /**
     * A list of answers to screening questions. The screening answer type `FILE` is currently unsupported.
     * @default []
     */
    screening_question_answers?: any[] | null;
    /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
    custom_fields: object | null;
    /** An array of selected passthrough integration fields. [Read more](/integration-fields) */
    integration_fields: {
      /** The globally unique ID of this object. */
      id: string;
      /** The key of the field in the remote system. */
      key: string;
      /**
       * - `DEFAULT`: static fields in the remote system.
       * - `CUSTOM`: fields that are created/editable by the user.
       */
      type: "DEFAULT" | "CUSTOM";
      /** The field's value. */
      value?: null;
      /** The label of the field. (not always available) */
      label: string | null;
    }[];
    /**
     * URL to the application in the source ATS system. When embedding this in your system, please consider that not for all ATS a dedicated application URL is available, so you might need to fall back to the candidate URL.
     * @format uri
     */
    remote_url: string | null;
    /**
     * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
     * @format date-time
     */
    changed_at: string;
    /**
     * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
     * @format date-time
     */
    remote_deleted_at: string | null;
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
    /**
     * Includes the data fetched from the remote system.
     * Please be aware that including this in you scope config might violate other
     * scopes that are set.
     *
     * Remote data always has the endpoint path that we got the data from as the
     * top level key. For example, it could look like: `{ "/companies": { ... }}`
     *
     * This is not available on all plans. Reach out to Kombo if you need it.
     */
    remote_data: object | null;
    current_stage: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The application stage name. For example, "Initial Screening". */
      name: string | null;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      /** @format int64 */
      index: number | null;
    };
    job: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** Title of the job. */
      name: string | null;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
    };
    candidate: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string;
      /** First name of the candidate. */
      first_name: string | null;
      /** Last name of the candidate. */
      last_name: string | null;
      /** The current company of the candidate. */
      company: string | null;
      /** The current job title of the candidate. */
      title: string | null;
      /** Whether the candidate’s profile is confidential in the ATS. */
      confidential: boolean | null;
      /** The hiring source of the candidate. If you're a job board or recruiting service, you can use this to validate which candidates applied through your service and ensure that the correct referral compensation is paid out. */
      source: string | null;
      /**
       * A list of phone numbers of the candidate.
       * @default []
       */
      phone_numbers?: any[] | null;
      /**
       * A list of email addresses of the candidate with an optional type. If an email address is invalid, it will be filtered out.
       * @default []
       */
      email_addresses?: any[] | null;
      /**
       * List of social media accounts of the candidate.
       * @default []
       */
      social_media?: any[] | null;
      /** Location of the candidate. */
      location?: {
        city?: string | null;
        /** Contains the ISO2 country code if possible. If not, it contains the original value. */
        country?: string | null;
        /** If we have address data, this is filled with the raw address string. */
        raw?: string | null;
        state?: string | null;
        /** If we can parse the address data, this field contains the first part of the street information. */
        street_1?: string | null;
        street_2?: string | null;
        zip_code?: string | null;
      };
      /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
      custom_fields: object | null;
      /** An array of selected passthrough integration fields. [Read more](/integration-fields) */
      integration_fields: {
        /** The globally unique ID of this object. */
        id: string;
        /** The key of the field in the remote system. */
        key: string;
        /**
         * - `DEFAULT`: static fields in the remote system.
         * - `CUSTOM`: fields that are created/editable by the user.
         */
        type: "DEFAULT" | "CUSTOM";
        /** The field's value. */
        value?: null;
        /** The label of the field. (not always available) */
        label: string | null;
      }[];
      /**
       * URL to the candidate profile in the source ATS system. When embedding this in your system, please consider that not for all ATS a dedicated candidate profile URL is available, so you might need to fall back to the application URL.
       * @format uri
       */
      remote_url: string | null;
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
      /**
       * Includes the data fetched from the remote system.
       * Please be aware that including this in you scope config might violate other
       * scopes that are set.
       *
       * Remote data always has the endpoint path that we got the data from as the
       * top level key. For example, it could look like: `{ "/companies": { ... }}`
       *
       * This is not available on all plans. Reach out to Kombo if you need it.
       */
      remote_data: object | null;
      /**
       * The timestamp when this specific record was last modified. This field only updates when properties directly on this record change, NOT when related or nested models change. For filtering that considers nested data changes, use the `updated_after` parameter which will return records when either the record itself OR its related models have been updated.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      tags: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        name: string | null;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
      }[];
    };
  };
}

export interface PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody {
  /** Stage this candidate should be in. If left out, the default stage for this job will be used. You can obtain the possible `stage_id`s from the `get-jobs` endpoint. */
  stage_id?: string;
  candidate: {
    /** The first name of the candidate. */
    first_name: string;
    /** The last name of the candidate. */
    last_name: string;
    /**
     * The primary email address this application will be created with.
     * @format email
     */
    email_address: string;
    additional_email_addresses?: {
      type: "PERSONAL" | "WORK" | "OTHER";
      /** @format email */
      email_address: string;
    }[];
    /** The company where the candidate is currently working. */
    company?: string;
    /** The current job title of the candidate. */
    title?: string;
    /** The phone number of the candidate. */
    phone_number?: string;
    additional_phone_numbers?: {
      type: "PERSONAL" | "WORK" | "OTHER";
      phone_number: string;
    }[];
    /** The location of the candidate. */
    location?: {
      city?: string;
      /**
       * The uppercase two-letter ISO country (e.g., `DE`). For systems that use codes in formats other than `ISO 3166-1 alpha-2`, Kombo transforms the ISO Codes to the appropriate value.
       * @pattern ^[A-Z]{2}$
       */
      country: string;
      state?: string;
      zip_code?: string;
    };
    /** The gender of the candidate. Must be one of `MALE`, `FEMALE`, or `OTHER`. */
    gender?: "MALE" | "FEMALE" | "OTHER";
    /**
     * The date the candidate is available to start working.
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
       * @min -1.7976931348623157e+308
       */
      amount: number;
    };
    /**
     * A list of social media links of the candidate. The links must be valid URLs.
     * @default []
     */
    social_links?: {
      /** @format uri */
      url: string;
    }[];
  };
  /**
   * Array of the attachments you would like to upload. The first CV in the attachments will be treated as the resume of the candidate when the tool allows previewing a resume.
   * @default []
   */
  attachments?: {
    /** File name of the file you want to upload. We recommend providing something human-readable with a valid file extension (like `Resume.pdf`), as this might be shown in your customer's system. */
    name: string;
    /**
     * Content/MIME type of the file (e.g., `application/pdf`).
     *
     * If you provide `data`, this is required. If you provide `data_url`, this is optional and we'll attempt to use the `Content-Type` header of the response.
     *
     * **Note:** Please validate that the content type you provide is actually meaningful (and not something generic like [`application/octet-stream`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types#applicationoctet-stream)). Especially when using object storage (like AWS S3), it's easy to accidentally discard the content types of user-provided files, so make sure to explicitly persist them when processing uploads from your users (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.html#SysMetadata), [Google Cloud](https://cloud.google.com/storage/docs/metadata#content-type), and [Azure](https://learn.microsoft.com/en-us/rest/api/storageservices/put-blob#request-headers-all-blob-types)).
     * @pattern ^[\w.-]+\/[\w.-]+$
     */
    content_type?: string;
    /**
     * URL to the file you want to upload that can be accessed without authentication headers. We will download the content immediately when receiving the request, so the URL can be short-lived.
     *
     * If you're using an object storage provider (like AWS S3), we strongly recommend providing a signed URL for secure access (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html), [Google Cloud](https://cloud.google.com/storage/docs/access-control/signed-urls), and [Azure](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)).
     *
     * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
     * @format uri
     */
    data_url?: string;
    /**
     * Base64-encoded contents of the file you want to upload.
     *
     * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
     */
    data?: string;
    /** Type of the attachment in the ATS. This may affect where the uploaded file will be shown in your customer's system. */
    type: "CV" | "COVER_LETTER" | "OTHER";
  }[];
  /**
   * **(⚠️ Deprecated - Use [automatic source writing](/ats/features/application-attribution#automatic-attribution) instead)** Optional source information that will be attached to the candidate. If
   * you're a job board or recruiting service, you can use this to make sure your
   * customers can see which candidates came from you.
   *
   * This is deprecated because writing sources requires users to do some setup in most ATSs.
   */
  source?: {
    /** Name of the source (e.g., `"Example Job Board"`). */
    name?: string;
    unified_key?: string;
    id?: string;
  };
  /**
   * Credit the recruiter or team member who sourced this candidate.
   *
   * While the `source` field tracks the channel/platform (e.g., "Awesome Jobboard"), the `sourced_by` field tracks the individual person responsible for finding the candidate.
   */
  sourced_by?: {
    /** The Kombo ID or Remote ID of the User. Use the Kombo ID directly, or prefix the remote ID with "remote:" to reference the user by their ID in the remote system. */
    user_id: string;
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
      /** If set to true, we will copy custom attachments from the JobApplication to the Candidate. */
      copyJobApplicationAttachments?: boolean;
      /** When the candidate already exists, whether to update the Candidate with the remote fields found under the Candidate entity. */
      update_existing_candidate?: boolean | null;
    };
    /** Fields specific to Personio. */
    personio?: {
      /** Fields that we will pass through to Personio's `application` object. */
      application?: Record<string, any>;
    };
    /** Fields specific to TalentSoft. */
    talentsoft?: {
      /** Fields that we will pass through to TalentSoft's `applicant` object. */
      applicant?: Record<string, any>;
      /** Fields that we will pass through to TalentSoft's `application` object. */
      application?: Record<string, any>;
    };
    teamtailor?: {
      /** Fields that we will pass through to Teamtailor's `Candidate` object. */
      candidate?: Record<string, any>;
      application?: {
        /** Fields that we will pass through to Teamtailor's attributes section `Job application` object. */
        attributes?: Record<string, any>;
      };
    };
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Fields that we will pass through to Greenhouse's `Candidate` object. */
      candidate?: Record<string, any>;
      /** Fields that we will pass through to Greenhouse's `Application` object. */
      application?: Record<string, any>;
    };
    /** Fields specific to Lever. */
    lever?: {
      /** Fields that we will pass through to Lever's `Candidate` object. Note: make sure to submit the keys and values in the correct form data format. */
      candidate?: Record<string, any>;
    };
    /** Fields specific to Workable. */
    workable?: {
      /** Fields that we will pass through to Workable's `Candidate` object. */
      candidate?: Record<string, any>;
    };
    /** Fields specific to Workday. The remote fields schema follows the documentation at https://community.workday.com/sites/default/files/file-hosting/productionapi/Recruiting/v43.0/Put_Candidate.html. Only defined fields are supported, if you need additional field support please reach out to Kombo support. */
    workday?: {
      Candidate_Data?: {
        Name_Detail_Data?: {
          /** The candidate's middle name */
          Middle_Name?: string;
          /** The WID of the social suffix reference for the candidate */
          Social_Suffix_Reference?: {
            Predefined_Name_Component_ID: string;
          };
        };
        /** Used to set the candidate's primary language */
        Language_Reference?: {
          WID: string;
        };
        Job_Application_Data?: {
          Job_Applied_To_Data?: {
            Global_Personal_Information_Data?: {
              Date_of_Birth?: string;
            };
          };
          Resume_Data?: {
            Education_Data?: {
              School_Name?: string;
              /**
               * @format double
               * @min -1.7976931348623157e+308
               */
              First_Year_Attended?: number;
              /**
               * @format double
               * @min -1.7976931348623157e+308
               */
              Last_Year_Attended?: number;
              Field_of_Study_Reference?: {
                WID: string;
              };
              Degree_Reference?: {
                WID: string;
              };
              Grade_Average?: string;
            }[];
            Skill_Data?: {
              Skill_Name?: string;
            }[];
            Language_Data?: {
              Language_Reference?: {
                WID?: string;
              };
              Language?: {
                Native?: boolean;
                Language_Ability: {
                  Language_Ability_Data?: {
                    Language_Proficiency_Reference?: {
                      WID: string;
                    };
                    Language_Ability_Type_Reference?: {
                      WID: string;
                    };
                  };
                }[];
              };
            }[];
            Experience_Data?: {
              Company_Name: string;
              Title: string;
              Location?: string;
              /**
               * YYYY-MM-DDTHH:mm:ss.sssZ
               * @format date-time
               * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
               */
              Start_Date: string;
              /**
               * YYYY-MM-DDTHH:mm:ss.sssZ
               * @format date-time
               * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
               */
              End_Date?: string;
              Currently_Work_Here?: boolean;
              Description?: string;
            }[];
          };
        };
        Contact_Data?: {
          Location_Data?: {
            Address_Line_1?: string;
            Address_Line_2?: string;
            Region_Subdivision_1?: string;
            Country_Region_Reference?: {
              Country_Region_ID: string;
            };
            Country_City_Reference?: {
              WID: string;
            };
          };
        };
        /** Reference to the Worker (employee) to link the candidate to. Provide either WID or Employee_ID. */
        Worker_Reference?: {
          WID?: string;
          Employee_ID?: string;
        };
      };
      /** Used to override the automatic source WID. */
      Override_Source_Reference_WID?: string;
    };
    /** Fields specific to Zoho Recruit. */
    zohorecruit?: {
      /** Fields that we will pass through to Zoho Recruit's `Candidate` object. */
      candidate?: Record<string, any>;
    };
    /** Fields specific to Bullhorn. */
    bullhorn?: {
      /** Fields that we will pass through to Bullhorn's `Candidate` object. */
      candidate?: Record<string, any>;
      /** Fields that we will pass through to Bullhorn's `JobSubmission` object. */
      job_submission?: Record<string, any>;
    };
    /** Fields specific to SmartRecruiters. */
    smartrecruiters?: {
      /** **(⚠️ Deprecated - Use the `candidate` field instead.)** Fields that we will pass through to the SmartRecruiters's `Candidate` object when created with screening question answers. This API is used: https://developers.smartrecruiters.com/reference/createcandidate-1 */
      candidate_with_questions?: Record<string, any>;
      /** **(⚠️ Deprecated - Use the `candidate` field instead.)** Fields that we will pass through to the SmartRecruiters's `Candidate` object when created with screening question answers. This API is used: https://developers.smartrecruiters.com/reference/candidatesaddtojob-1 */
      candidate_without_questions?: Record<string, any>;
      /** Fields that we will pass through to the SmartRecruiters's `Candidate` object. This API is used: https://developers.smartrecruiters.com/reference/createcandidate-1 */
      candidate?: Record<string, any>;
    };
    /** Fields specific to Talentadore. */
    talentadore?: {
      /** Fields that we will pass through to the Talentadore's when creating applications. */
      applications?: Record<string, any>;
    };
    /** Fields specific to GuideCom. */
    guidecom?: {
      /** Fields that we will pass through to GuideCom's `Candidate` object. */
      candidate?: Record<string, any>;
    };
    /** Fields specific to d.vinci. */
    dvinci?: {
      /** Fields that we will pass through to d.vinci's application object. This API is used: https://static.dvinci-easy.com/files/d.vinci%20application-apply-api.html#jobs__id__applyApi_post */
      application?: Record<string, any>;
    };
    /** Fields specific to GuideCom. */
    hrworks?: {
      /** Fields that we will pass through to HRWorks's `Job Application` object. This API is used: https://developers.hrworks.de/docs/hrworks-api-v2/53021f035f62d-post-job-applications */
      jobApplication?: Record<string, any>;
    };
    /** Fields specific to Jobylon. */
    jobylon?: {
      /** Fields that we will pass through to Jobylon's create application [endpoint](https://developer.jobylon.com/push-api-and-webhooks#-xL0v)'s request body. */
      application?: {
        /** The `message` field of Jobylon's create application endpoint's request body. */
        message?: string;
      };
    };
    /** Fields specific to Avature. */
    avature?: {
      workflow?: {
        step?: {
          /**
           * The ID of the workflow step to assign to the candidate.
           * @format int64
           */
          id: number;
        };
      };
    };
    /** Fields specific to Recruitee. */
    recruitee?: {
      candidate?: {
        /** The cover letter text as a string. This will be visible on the main candidate page. Can be provided together with the `cover_letter` attachment, which will end up in a separate `file` section. */
        cover_letter_text?: string;
      };
    };
    /** Fields specific to Abacus Umantis. */
    umantis?: {
      /** Fields that we will pass through to Abacus Umantis's "Create a person" endpoint's `attributes` when creating a candidate. */
      person?: Record<string, any>;
    };
    /** Fields specific to P&I Loga. */
    piloga?: {
      /** Additional candidate fields for P&I Loga that will be mapped to the application form. */
      candidate?: {
        /** The street address of the candidate. */
        street?: string;
      };
    };
  } & {
    /** Fields specific to Greenhouse. */
    greenhouse?: {
      /** Headers we will pass with `POST` requests to Greenhouse. */
      post_headers?: {
        /** ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it. */
        "On-Behalf-Of"?: string | null;
      };
    };
    /** Workable specific remote fields for ATS actions. */
    workable?: {
      /** The remote ID of the user that will be displayed in the UI as the one that performed the action. */
      on_behalf_of_user_remote_id?: string;
    };
  };
  /**
   * Array of answers to screening questions. Currently, not all question types are supported, and unsupported ones will not be submitted.
   *
   * The available questions for a job can be retrieved from the get jobs endpoint. The answers will be validated based on the format of the questions. Make sure to follow this schema to avoid errors.
   */
  screening_question_answers?: {
    /** ID of the question returned by the Kombo API. We'll report a warning in the logs if the question can't be found on the job. */
    question_id: string;
    /**
     * Answer to a question. This will be validated based on the question format and throw an error if the answer is invalid. Here is a description of each question type and the required answer format:
     *
     * `TEXT` - Simply provide a "string" answer.
     *
     * `SINGLE_SELECT` - Provide the ID of the answer as a string.
     *
     * `MULTI_SELECT` - Provide a string array containing the question IDs of the selected options.
     *
     * `BOOLEAN` - Either `true` or `false`.
     *
     * `NUMBER` - A number.
     *
     * `DATE` - Provide the answer as an ISO 8601 date string.
     *
     * `FILE` - Please select Option 6 in the dropdown above to see the required format.
     */
    answer:
      | string
      | boolean
      | number
      | string[]
      | {
          /** File name of the file you want to upload. We recommend providing something human-readable with a valid file extension (like `Resume.pdf`), as this might be shown in your customer's system. */
          name: string;
          /**
           * Content/MIME type of the file (e.g., `application/pdf`).
           *
           * If you provide `data`, this is required. If you provide `data_url`, this is optional and we'll attempt to use the `Content-Type` header of the response.
           *
           * **Note:** Please validate that the content type you provide is actually meaningful (and not something generic like [`application/octet-stream`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types#applicationoctet-stream)). Especially when using object storage (like AWS S3), it's easy to accidentally discard the content types of user-provided files, so make sure to explicitly persist them when processing uploads from your users (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.html#SysMetadata), [Google Cloud](https://cloud.google.com/storage/docs/metadata#content-type), and [Azure](https://learn.microsoft.com/en-us/rest/api/storageservices/put-blob#request-headers-all-blob-types)).
           * @pattern ^[\w.-]+\/[\w.-]+$
           */
          content_type?: string;
          /**
           * URL to the file you want to upload that can be accessed without authentication headers. We will download the content immediately when receiving the request, so the URL can be short-lived.
           *
           * If you're using an object storage provider (like AWS S3), we strongly recommend providing a signed URL for secure access (see guides for [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html), [Google Cloud](https://cloud.google.com/storage/docs/access-control/signed-urls), and [Azure](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)).
           *
           * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
           * @format uri
           */
          data_url?: string;
          /**
           * Base64-encoded contents of the file you want to upload.
           *
           * **Note:** You must provide either this or `data_url`. We recommend `data_url` over `data` for most cases.
           */
          data?: string;
        };
  }[];
  /** Query parameters to be appended to the job posting URL when applying. */
  query_params?: Record<string, string>;
}

export interface PostConnectCreateLinkPositiveResponse {
  status: "success";
  data: {
    /** @format uri */
    link: string;
  };
}

export interface PostConnectCreateLinkRequestBody {
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
   */
  end_user_origin_id?: string | null;
  /** If the tool you want to connect offers different environments, you can specify which one you want to connect to here. If you don't specify this, we'll assume you want to use the production environment. Note that this can only be used if you've also specified a tool through `integration_tool`. */
  remote_environment?: string | null;
  /**
   * Category of the integration you want your customer to create.
   * @default "HRIS"
   */
  integration_category?: "HRIS" | "ATS" | "ASSESSMENT";
  /** Pre-define a tool this integration link can be used for. */
  integration_tool?:
    | "personio"
    | "workday"
    | "workdaycustomreport"
    | "workdaycustomreportsftp"
    | "successfactors"
    | "smartrecruiters"
    | "factorial"
    | "oraclerecruiting"
    | "lever"
    | "icims"
    | "cornerstonetalentlink"
    | "recruitee"
    | "recruiterflow"
    | "greenhouse"
    | "greenhousejobboard"
    | "teamtailor"
    | "teamtailorjobboards"
    | "ashby"
    | "talentsoft"
    | "talentsoftcustomer"
    | "concludis"
    | "talention"
    | "piloga"
    | "onlyfy"
    | "ukgpro"
    | "ukgready"
    | "adpworkforcenow"
    | "taleo"
    | "rexx"
    | "afas"
    | "bamboohr"
    | "bullhorn"
    | "bullhornlogin"
    | "workable"
    | "payfitcustomer"
    | "payfitpartner"
    | "payfit"
    | "jobvite"
    | "employmenthero"
    | "fountain"
    | "fourth"
    | "kenjo"
    | "heavenhr"
    | "hibob"
    | "softgarden"
    | "cezannehr"
    | "entraid"
    | "azuread"
    | "googleworkspace"
    | "nmbrs"
    | "pinpoint"
    | "welcometothejungle"
    | "dvinci"
    | "dvinciadmin"
    | "join"
    | "deel"
    | "remotecom"
    | "iriscascade"
    | "okta"
    | "sagehr"
    | "sagepeople"
    | "humaans"
    | "traffit"
    | "erecruiter"
    | "eurecia"
    | "abacusumantis"
    | "umantis"
    | "jobylon"
    | "oraclehcm"
    | "taleez"
    | "officient"
    | "sesamehr"
    | "charliehr"
    | "hrworks"
    | "abacus"
    | "otys"
    | "zohopeople"
    | "zohorecruit"
    | "gusto"
    | "breathehr"
    | "catalystone"
    | "mirus"
    | "alexishr"
    | "simployer"
    | "eploy"
    | "jobdiva"
    | "peple"
    | "youserve"
    | "careerplug"
    | "perview"
    | "eightfold"
    | "dayforce"
    | "hansalog"
    | "lattice"
    | "trinet"
    | "paylocity"
    | "paycor"
    | "namely"
    | "paycom"
    | "insperity"
    | "paychex"
    | "avature"
    | "apploi"
    | "phenom"
    | "rippling"
    | "sapling"
    | "heyrecruit"
    | "peoplehr"
    | "recruhr"
    | "jazzhr"
    | "lucca"
    | "bite"
    | "zelt"
    | "planday"
    | "boondmanager"
    | "homerun"
    | "haileyhr"
    | "silae"
    | "mysolution"
    | "carerix"
    | "hroffice"
    | "talentclue"
    | "inrecruiting"
    | "ubeeo"
    | "oysterhr"
    | "kiwihr"
    | "connexys"
    | "hr4you"
    | "cornerstoneondemand"
    | "zvooverecruit"
    | "square"
    | "perbilityhelix"
    | "comeet"
    | "leapsome"
    | "compleet"
    | "compleetpitcher"
    | "gem"
    | "loket"
    | "workforcecom"
    | "laura"
    | "covetorest"
    | "coveto"
    | "peoplefirst"
    | "sdworx"
    | "crelate"
    | "absenceio"
    | "manatal"
    | "avionte"
    | "a3innuvanomina"
    | "mhmhr"
    | "scim"
    | "softgardenpartner"
    | "datevhr"
    | "datev"
    | "datevlug"
    | "sympa"
    | "breezyhr"
    | "flatchr"
    | "applicantstack"
    | "reachmee"
    | "talentadore"
    | "youforce"
    | "nibelis"
    | "peoplexd"
    | "sandbox"
    | "guidecom"
    | "sftp"
    | "sftpfetch";
  /**
   * Language of the connection flow UI.
   * @default "en"
   */
  language?: "en" | "de" | "fr" | "it" | "es";
  /** Specify a scope config that should be used for this integration. This is an advanced feature, only use it if you know what you're doing! */
  scope_config_id?: string | null;
  /**
   * Enable the [filtering feature](https://docs.kombo.dev/other/filtering) for the integration. HRIS only.
   * @default false
   */
  enable_filtering?: boolean;
  /**
   * Enable the [field mapping feature](https://docs.kombo.dev/hris/features/setup-flow/introduction#field-mapping) for this integration.
   * @default false
   */
  enable_field_mapping?: boolean;
  /**
   * The type of link you want to create. `EMBEDDED` is for the [embedded flow](../guides/connect/embedded-flow) using the Kombo Connect SDK (these links are valid for 1 hour) and `MAGIC_LINK` is for [magic links](../guides/connect/magic-links) which you send out manually to customers (there are valid for 1 year).
   *
   * This defaults to `EMBEDDED`, which is our recommended method of implementing the connection flow for a seamless user experience.
   * @default "EMBEDDED"
   */
  link_type?: "EMBEDDED" | "MAGIC_LINK";
}

export type GetConnectIntegrationByTokenTokenParameterToken = string;

export interface GetConnectIntegrationByTokenTokenPositiveResponse {
  status: "success";
  data: {
    tool: string;
    id: string;
    end_user_origin_id: string | null;
    end_user_organization_name: string;
    /** @pattern ^(?!\.)(?!.*\.\.)([\w'+-.]*)[\w+-]@([\da-z][\da-z-]*\.)+[a-z]{2,}$ */
    end_user_email: string | null;
    /**
     * The setup_status is used in conjunction with the filtering and field mapping features. If these are enabled in the connection flow, the integration will start in an "INCOMPLETE" state and move to "COMPLETE" once all steps are finished.
     *
     * - `INCOMPLETE`: Setup is still in progress. Some steps aren’t finished, so no data is available yet. Syncs only run as needed for setup.
     * - `FINAL_SYNC_PENDING`: Setup is complete, and the final sync is running. Data will be available after this sync is done.
     * - `COMPLETED`: Setup is fully finished, and the integration is ready to use.
     */
    setup_status: "INCOMPLETE" | "FINAL_SYNC_PENDING" | "COMPLETED";
  };
}

export interface PostConnectActivateIntegrationPositiveResponse {
  status: "success";
  data: {
    tool: string;
    id: string;
    end_user_origin_id: string | null;
    end_user_organization_name: string;
    /** @pattern ^(?!\.)(?!.*\.\.)([\w'+-.]*)[\w+-]@([\da-z][\da-z-]*\.)+[a-z]{2,}$ */
    end_user_email: string | null;
    /**
     * The setup_status is used in conjunction with the filtering and field mapping features. If these are enabled in the connection flow, the integration will start in an "INCOMPLETE" state and move to "COMPLETE" once all steps are finished.
     *
     * - `INCOMPLETE`: Setup is still in progress. Some steps aren’t finished, so no data is available yet. Syncs only run as needed for setup.
     * - `FINAL_SYNC_PENDING`: Setup is complete, and the final sync is running. Data will be available after this sync is done.
     * - `COMPLETED`: Setup is fully finished, and the integration is ready to use.
     */
    setup_status: "INCOMPLETE" | "FINAL_SYNC_PENDING" | "COMPLETED";
  };
}

export interface PostConnectActivateIntegrationRequestBody {
  token: string;
}

export interface GetCustomDatevSystemInformationPositiveResponse {
  status: "success";
  data: {
    /**
     * The consultant number used for this DATEV integration (BeraterNr).
     * @format double
     * @min 1000
     * @max 9999999
     */
    consultant_number: number;
    /**
     * The client number used for this DATEV integration (MandantenNr).
     * @format double
     * @min 1
     * @max 99999
     */
    client_number: number;
    /** The target system's name (Ziel). */
    target_system: "LODAS" | "LuG";
  };
}

export interface PostCustomDatevPassthroughPositiveResponse {
  status: "success";
  data: object;
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostCustomDatevPassthroughRequestBody {
  /** @minLength 1 */
  file_content: string;
  /**
   * YYYY-MM-DDTHH:mm:ss.sssZ
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  accounting_month: string;
  target_system: "LODAS" | "LuG";
  file_type: "STAMMDATEN" | "BEWEGUNGSDATEN";
  file_name: string;
}

export interface GetCustomDatevCheckEauPermissionPositiveResponse {
  status: "success";
  data: {
    ready: boolean;
    error?: string;
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export type GetCustomDatevEauRequestsEauIdParameterEauId = string;

export interface GetCustomDatevEauRequestsEauIdPositiveResponse {
  status: "success";
  data: {
    raw: {
      /** DATEV source system system (LuG or LODAS). */
      source: string;
      /** 2022-01-13 */
      start_work_incapacity: string;
      /** Internal DATEV identifier. */
      collaboration_identifier?: string;
      feedbacks_from_health_insurance: {
        /** The unique identifier of the feedback. */
        guid: string;
        contact_person: {
          /** [DEPRECATED] Gender of the contact person. M (male), W (female), X (unknown), D (divers). */
          gender_contact_person?: "M" | "F" | "X" | "D";
          /** Name of the contact person. */
          name: string;
          /** Telephone number of the contact person. */
          telephone: string;
          /** Fax number of the contact person. */
          fax: string | null;
          /** Email address of the contact person. */
          email: string | null;
          /** Name of the health insurance. */
          name1_health_insurance: string;
          /** [DEPRECATED] Second part of the health insurance name. */
          name2_health_insurance?: string | null;
          /** [DEPRECATED] Third part of the health insurance name. */
          name3_health_insurance?: string | null;
          /** Postal code of the contact person. */
          postal_code: string;
          /** City of the contact person. */
          city: string;
          /** Street of the contact person. */
          street: string | null;
          /** House number of the contact person. */
          house_number: string | null;
        };
        incapacity_for_work: {
          /** yyyy-MM-dd date provided in the initial request. */
          start_work_incapacity_employer: string;
          /** yyyy-MM-dd start date of the AU. */
          start_work_incapacity_au: string | null;
          /** yyyy-MM-dd expected end date of the AU. */
          end_work_incapacity_au: string | null;
          /** yyyy-MM-dd actual end date after the hospitalization report was received. */
          actual_end_work_incapacity_au?: string | null;
          /** yyyy-MM-dd date of diagnosis */
          date_of_diagnosis: string | null;
          /**
           * Flag: 0 = unknown
           * Flag: 1 = Health insurance not responsible
           * Flag: 2 = incapacity for work
           * Flag: 3 = hospitalisation
           * Flag: 4 = eAU or hospitalisation-report is not existing
           * Flag: 5 = rehabilitation prevention
           * Flag: 6 = inpatient hospital treatment
           * Flag: 7 = in verification
           * Flag: 8 = other evidence available
           * Flag: 9 = forwarding procedure
           * @format double
           * @min -1.7976931348623157e+308
           */
          flag_current_work_incapacity: number | null;
          /** If the accident is a work accident according to § 295 Para. 1 SGB V. */
          accident_at_work: boolean;
          /** Indication of whether the insured person has been assigned to the accident insurance doctor. */
          assignment_accident_insurance_doctor: boolean;
          /** If the accident is the result of another accident according to § 295 Para. 1 SGB V. */
          other_accident: boolean;
          /** [DEPRECATED] yyyy-MM-dd start date of the hospitalization. */
          start_hospitalisation?: string | null;
          /** [DEPRECATED] yyyy-MM-dd end date of the actual hospitalization. */
          end_hospitalisation?: string | null;
          /** Whether the certificate is initial or a follow up certificate. */
          initial_certificate: boolean;
          /** yyyy-MM-dd date until the health insurance will update this requests status. */
          automatic_feedback_until: string | null;
        };
        error_block_list: any[] | null;
      }[];
    };
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface GetCustomDatevCheckDocumentPermissionPositiveResponse {
  status: "success";
  data:
    | {
        ready: boolean;
        documents_granted: string[];
      }
    | {
        ready: boolean;
        error: string;
      };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

/** Provide the period in the format YYYY-MM-DD for which to check for available documents. */
export type GetCustomDatevAvailableDocumentsParameterPeriod = string;

export interface GetCustomDatevAvailableDocumentsPositiveResponse {
  status: "success";
  data: {
    results: {
      /** The document's type. */
      document_type: string;
      /** List of employees this document is available for. */
      available_for_employees: {
        id: string | null;
        remote_id: string;
      }[];
      /** Is true if the document is a company document. */
      is_company_document: boolean;
    }[];
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostCustomDatevDownloadDocumentPositiveResponse {
  status: "success";
  data: {
    /**
     * The URL to download the document from.
     * @format uri
     */
    data_url: string;
    file_name: string;
    content_type: string;
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

/** The data to request an electronic certificate of incapacity for work (eAU). */
export interface PostCustomDatevDownloadDocumentRequestBody {
  /**
   * The month to request the document for.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  accounting_month: string;
  /**
   * Brutto/Netto (LOBN)
   *
   * Lohnsteuerbescheinigung (german/english) (LSTB/LSTE)
   *
   * SV-Nachweis (SVNW)
   *
   * A1-Bescheinigung (ABEG)
   *
   * Antragsbestätigung A1-Bescheinigung (AANB)
   *
   * Buchungsbeleg (BUBE)
   *
   * Lohnjournal (german/english) (LOJO/LJOE)
   *
   * Lohnsteueranmeldung (LSTA)
   *
   * Beitragsnachweis (KBNW)
   *
   * Beitragsnachweis-Erläuterung (SBNW)
   *
   * Übersicht Zahlungen (ZAKF)
   *
   * DÜ Zahlungen (PRZA)
   *
   * Barauszahlungswerte (ZABR)
   *
   * Überzahlungen-Werte (ZAUW)
   *
   * Personalkostenübersicht (german/english) (LOPS/LOPE)
   *
   * Kostenstellenwerte (KOST)
   *
   * Kostenträgerwerte (KOTR)
   *
   * Lohnartenwerte einfach/erweitert (LOWE/LOPN)
   *
   * Lohnkonto (LKTO)
   *
   * Personalreport (LORE)
   *
   * Mitarbeiterstammdaten (PDAT)
   *
   * Pfändungswerte (PFAN)
   *
   * Darlehenswerte (DAWE)
   *
   * Wertguthaben je Arbeitnehmer (WEAN)
   */
  document_type:
    | "AANB"
    | "ABEG"
    | "BUBE"
    | "DAWE"
    | "KBNW"
    | "KOST"
    | "KOTR"
    | "LKTO"
    | "LOBN"
    | "LJOE"
    | "LOJE"
    | "LOJO"
    | "LOPE"
    | "LOPN"
    | "LOPS"
    | "LORE"
    | "LOWE"
    | "LSTA"
    | "LSTB"
    | "LSTE"
    | "PDAT"
    | "PFAN"
    | "PRZA"
    | "SBNW"
    | "SVNW"
    | "WEAN"
    | "ZABR"
    | "ZAKF"
    | "ZAUW";
  employee_id: string | null;
}

export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId =
  | string
  | null;

export interface PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse {
  status: "success";
  data: {
    /**
     * The URL to download the document from.
     * @format uri
     */
    data_url: string;
    file_name: string;
    content_type: string;
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

/** The data to request an electronic certificate of incapacity for work (eAU). */
export interface PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody {
  /**
   * The month to request the document for.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  accounting_month: string;
  /**
   * Brutto/Netto (LOBN)
   *
   * Lohnsteuerbescheinigung (german/english) (LSTB/LSTE)
   *
   * SV-Nachweis (SVNW)
   *
   * A1-Bescheinigung (ABEG)
   *
   * Antragsbestätigung A1-Bescheinigung (AANB)
   *
   * Buchungsbeleg (BUBE)
   *
   * Lohnjournal (german/english) (LOJO/LJOE)
   *
   * Lohnsteueranmeldung (LSTA)
   *
   * Beitragsnachweis (KBNW)
   *
   * Beitragsnachweis-Erläuterung (SBNW)
   *
   * Übersicht Zahlungen (ZAKF)
   *
   * DÜ Zahlungen (PRZA)
   *
   * Barauszahlungswerte (ZABR)
   *
   * Überzahlungen-Werte (ZAUW)
   *
   * Personalkostenübersicht (german/english) (LOPS/LOPE)
   *
   * Kostenstellenwerte (KOST)
   *
   * Kostenträgerwerte (KOTR)
   *
   * Lohnartenwerte einfach/erweitert (LOWE/LOPN)
   *
   * Lohnkonto (LKTO)
   *
   * Personalreport (LORE)
   *
   * Mitarbeiterstammdaten (PDAT)
   *
   * Pfändungswerte (PFAN)
   *
   * Darlehenswerte (DAWE)
   *
   * Wertguthaben je Arbeitnehmer (WEAN)
   */
  document_type:
    | "AANB"
    | "ABEG"
    | "BUBE"
    | "DAWE"
    | "KBNW"
    | "KOST"
    | "KOTR"
    | "LKTO"
    | "LOBN"
    | "LJOE"
    | "LOJE"
    | "LOJO"
    | "LOPE"
    | "LOPN"
    | "LOPS"
    | "LORE"
    | "LOWE"
    | "LSTA"
    | "LSTB"
    | "LSTE"
    | "PDAT"
    | "PFAN"
    | "PRZA"
    | "SBNW"
    | "SVNW"
    | "WEAN"
    | "ZABR"
    | "ZAKF"
    | "ZAUW";
}

/** ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`) */
export type PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId =
  string;

export interface PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse {
  status: "success";
  data: {
    eau_id: string;
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

/** The data to request an electronic certificate of incapacity for work (eAU). */
export interface PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody {
  /**
   * Date "start_work_incapacity" from the original eAU-Request.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  start_work_incapacity: string;
  notification?: {
    /**
     * This is the email address that should be notified as soon as a feedback is received.
     * @pattern ^[\w!#$%&'*+/=?^`{|}~-]+(?:\.[\w!#$%&'*+/=?^`{|}~-]+)*@(?:[\w-]+\.)+[\w-]{2,}$
     */
    email: string;
  };
  /** The data-section for the contact person which is responsible for feedback from the health insurance. */
  contact_person?: {
    gender: "M" | "W" | "X" | "D";
    /**
     * @minLength 0
     * @maxLength 30
     */
    name: string;
    /**
     * @minLength 0
     * @maxLength 20
     * @pattern ([\d+])[\d ()/-]+
     */
    telephone: string;
    /**
     * @minLength 0
     * @maxLength 20
     * @pattern ([\d+])[\d ()/-]+
     */
    fax: string;
    /**
     * @minLength 0
     * @maxLength 70
     * @pattern ^(?=.{1,64}@)[\w-]+(\.[\w-]+)*@[^-][\dA-Za-z-]+(\.[\dA-Za-z-]+)*(\.[A-Za-z]{2,})$
     */
    email: string;
    /**
     * @minLength 0
     * @maxLength 90
     */
    company_name: string;
    /**
     * @minLength 0
     * @maxLength 10
     * @pattern [\dA-Za-z]*
     */
    postal_code: string;
    /**
     * @minLength 0
     * @maxLength 34
     */
    city: string;
    /**
     * @minLength 0
     * @maxLength 33
     */
    street: string;
    /**
     * @minLength 0
     * @maxLength 9
     */
    house_number: string;
  };
}

/** ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`) */
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId =
  string;

export interface PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse {
  status: "success";
  data: object;
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody {
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
     * @min -1.7976931348623157e+308
     */
    hours: number;
    /**
     * The "Lohnart" (payment-type) in DATEV. Make sure a Lohnart is selected that actually supports hours.
     * @format double
     * @min -1.7976931348623157e+308
     */
    lohnart: number;
  }[];
  /** Add entries for all the fixed supplements here. For example you can write "Bonuses" (in Euros here). Unfortunately, DATEV doens't allow showing a lable for the entries. */
  fixed_payments: {
    /**
     * @format double
     * @min -1.7976931348623157e+308
     */
    amount: number;
    /**
     * The "Lohnart" (payment-type) in DATEV. Make sure a Lohnart is selected that actually supports fixed payments (no hourly modifier).
     * @format double
     * @min -1.7976931348623157e+308
     */
    lohnart: number;
  }[];
  /**
   * Add custom entries to the DATEV Lodas Standard Erfassungstabelle.
   * @default []
   */
  custom_lodas?: {
    /**
     * This amount value will be mapped to Datev "Wert" field.
     * @format double
     * @min -1.7976931348623157e+308
     */
    amount: number;
    /**
     * Choose a valid Lodas Lohnart.
     * @format double
     * @min -1.7976931348623157e+308
     */
    lohnart: number;
    /**
     * Choose a valid Lodas Bearbeitungsschlüssel. We list the valid Bearbeitungsschlüssel [here](https://storage.googleapis.com/kombo-assets/integrations/datev/lodas_bs.json).
     * @format double
     * @min -1.7976931348623157e+308
     */
    bearbeitungsschluessel: number;
  }[];
}

/** ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`) */
export type PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId =
  string;

export interface PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse {
  status: "success";
  data: object;
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody {
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
     * @min -1.7976931348623157e+308
     */
    amount: number;
    /** The currency in which the employee gets paid. Currently, only euro is supported as integrated systems only work with Euro. */
    currency: "EUR";
    /** The period for which the specified amount is paid. Currently, integrated systems only support "HOUR" and "MONTH". */
    period: "HOUR" | "MONTH";
    /**
     * The Lohnart that should be used for this compensation. If not specified, the default Lohnart that was requested in the connection flow will be used. Generally Lohnart is only available for monthly compensations.
     * @format int64
     * @min 1
     * @max 9999
     */
    lohnart?: number;
  }[];
}

export interface GetCustomDatevCheckWritePermissionPositiveResponse {
  status: "success";
  data: {
    ready: boolean;
    error?: string;
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface GetCustomDatevDataPushesPositiveResponse {
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
        state:
          | "FAILED"
          | "UPLOADED"
          | "IMPORTED"
          | "CORRUPTED"
          | "DELETED"
          | "AUTO_DELETED";
        /** Actual content of the file. */
        file: string;
      }[];
    }[];
  };
}

export interface PostCustomDatevPushDataGeneralPositiveResponse {
  status: "success";
  data: {
    files: {
      name: string;
      content: string;
    }[];
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export type PostCustomDatevPushDataGeneralRequestBody = object;

export interface PostCustomDatevPushDataPayrollPositiveResponse {
  status: "success";
  data: {
    files: {
      name: string;
      content: string;
    }[];
  };
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostCustomDatevPushDataPayrollRequestBody {
  /**
   * Specify the month for which the payroll data should be submitted. The date must be specified as the first day of a month (e.g. 2022-12-01).
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  payroll_month: string;
}

/** ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`) */
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId =
  string;

export interface PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse {
  status: "success";
  data: object;
  /** These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. */
  warnings: {
    message: string;
  }[];
}

export interface PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody {
  /** The ID code of the supplement that you want to add to Silae. */
  supplement_code: string;
  /**
   * Date from which the submitted supplement should be active.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  effective_date: string;
  /**
   * The amount of the supplement if it requires a number.
   * @format double
   * @min -1.7976931348623157e+308
   */
  element_amount?: number;
  /** The string of the supplement if it requires a string. */
  element_string?: string;
}

export interface DataChangedWebhookPayload {
  /** Unique identifier for this webhook event */
  id: string;
  /** Type of the webhook event */
  type: "data-changed";
  data: {
    /** The unique identifier of the integration. */
    integration_id: string;
    /** The name of the integrated tool (e.g., "personio", "greenhouse"). */
    integration_tool: string;
    /** The category of the integration (HRIS, ATS, or ASSESSMENT). */
    integration_category: "HRIS" | "ATS" | "ASSESSMENT";
    /** List of data models and connections for which one or more records were created, updated, or deleted. */
    changed_models: {
      /** The name of the Kombo model or connection that changed. */
      name:
        | "hris_legal_entities"
        | "hris_locations"
        | "hris_employees"
        | "hris_absence_types"
        | "hris_absences"
        | "hris_employments"
        | "hris_teams"
        | "hris_time_off_balances"
        | "hris_timesheets"
        | "hris_employee_document_categories"
        | "hris_performance_reviews"
        | "hris_performance_review_cycles"
        | "ats_users"
        | "ats_jobs"
        | "ats_job_postings"
        | "ats_candidates"
        | "ats_application_stages"
        | "ats_applications"
        | "ats_screening_questions"
        | "ats_tags"
        | "ats_interviews"
        | "ats_offers"
        | "ats_rejection_reasons"
        | "hris_join_employees_teams"
        | "ats_join_candidates_tags"
        | "ats_join_jobs_application_stages"
        | "ats_join_jobs_screening_questions"
        | "ats_join_jobs_users"
        | "ats_join_interviews_users";
    }[];
  };
}

export interface ConnectionFlowFailedWebhookPayload {
  /** Unique identifier for this webhook event */
  id: string;
  /** Type of the webhook event */
  type: "connection-flow-failed";
  data: {
    /** The name of the integrated tool (e.g., "personio", "greenhouse"). */
    integration_tool: string;
    /** The category of the integration (HRIS, ATS, or ASSESSMENT). */
    integration_category: "HRIS" | "ATS" | "ASSESSMENT";
    /** Information about the end user who created the integration. */
    end_user: {
      /** The name of the organization that owns the integration. */
      organization_name: string;
      /**
       * The email address of the user who created the integration.
       * @format email
       */
      creator_email: string | null;
      /** The unique identifier of the organization in the integrated system. */
      origin_id: string | null;
    };
    /**
     * URL to view detailed logs for the operation.
     * @format uri
     */
    log_url: string;
  };
}

export interface IntegrationCreatedWebhookPayload {
  /** Unique identifier for this webhook event */
  id: string;
  /** Type of the webhook event */
  type: "integration-created";
  data: {
    /** The unique identifier of the newly created integration. */
    id: string;
    /** The name of the integrated tool. */
    tool: string;
    /** The category of the integration. */
    category: "HRIS" | "ATS" | "ASSESSMENT";
    /** Information about the end user who created the integration. */
    end_user: {
      /** The name of the organization that owns the integration. */
      organization_name: string;
      /**
       * The email address of the user who created the integration.
       * @format email
       */
      creator_email: string | null;
      /** The unique identifier of the organization in the integrated system. */
      origin_id: string | null;
    };
  };
}

export interface IntegrationDeletedWebhookPayload {
  /** Unique identifier for this webhook event */
  id: string;
  /** Type of the webhook event */
  type: "integration-deleted";
  data: {
    /** The unique identifier of the deleted integration. */
    id: string;
    /** The name of the integrated tool. */
    tool: string;
    /** The category of the integration. */
    category: "HRIS" | "ATS" | "ASSESSMENT";
    /** Information about the end user who created the integration. */
    end_user: {
      /** The name of the organization that owns the integration. */
      organization_name: string;
      /**
       * The email address of the user who created the integration.
       * @format email
       */
      creator_email: string | null;
      /** The unique identifier of the organization in the integrated system. */
      origin_id: string | null;
    };
    /**
     * ISO 8601 timestamp when the integration was deleted.
     * @format date-time
     */
    deleted_at: string;
  };
}

export interface AssessmentOrderReceivedWebhookPayload {
  /** Unique identifier for this webhook event */
  id: string;
  /** Type of the webhook event */
  type: "assessment:order-received";
  data: {
    /** The unique identifier of the assessment order. */
    id: string;
    /** The identifier of the assessment package. */
    package_id: string;
    /** The current status of the assessment order. */
    status: "OPEN" | "COMPLETED" | "CANCELLED" | "REJECTED";
    /** The unique identifier of the integration. */
    integration_id: string;
    /** Information about the candidate taking the assessment. */
    candidate: {
      /**
       * The candidate's email address.
       * @format email
       */
      email: string;
      /** The candidate's first name. */
      first_name?: string | null;
      /** The candidate's last name. */
      last_name?: string | null;
      /** The candidate's phone number. */
      phone?: string | null;
      /** The candidate's identifier in the integrated system. */
      remote_id?: string | null;
    };
    /** Information about the job application. */
    application: {
      /** The application's identifier in the integrated system. */
      remote_id?: string | null;
    };
    /** Information about the job posting. */
    job: {
      /** The job's identifier in the integrated system. */
      remote_id?: string | null;
      /** The job title. */
      name?: string | null;
      /** The job location information. */
      location?: {
        city?: string | null;
        /** Contains the ISO2 country code if possible. If not, it contains the original value. */
        country?: string | null;
        /** If we have address data, this is filled with the raw address string. */
        raw?: string | null;
        state?: string | null;
        /** If we can parse the address data, this field contains the first part of the street information. */
        street_1?: string | null;
        street_2?: string | null;
        zip_code?: string | null;
      };
      /** The hiring team allows you to sync users into your system who can access the job and its applications. */
      hiring_team: {
        /** The team member's identifier in the integrated system. */
        remote_id: string;
        /** The team member's email address. */
        email: string | null;
        /** The team member's first name. */
        first_name: string | null;
        /** The team member's last name. */
        last_name: string | null;
        /** Array of the roles of the user for this specific job. Currently only `RECRUITER` and `HIRING_MANAGER` are mapped into our unified schema. */
        hiring_team_roles: ("RECRUITER" | "HIRING_MANAGER")[];
      }[];
    };
  };
}

export interface InlineAssessmentOrderReceivedWebhookPayload {
  /** Unique identifier for this webhook event */
  id: string;
  /** Type of the webhook event */
  type: "inline-assessment:order-received";
  data: {
    /** The unique identifier of the assessment order. */
    id: string;
    /** The identifier of the assessment package. */
    package_id: string;
    /** The current status of the assessment order. */
    status: "OPEN" | "COMPLETED" | "CANCELLED" | "REJECTED";
    /** The unique identifier of the integration. */
    integration_id: string;
    /** Information about the candidate taking the assessment. */
    candidate: {
      /**
       * The candidate's email address.
       * @format email
       */
      email: string;
      /** The candidate's first name. */
      first_name?: string | null;
      /** The candidate's last name. */
      last_name?: string | null;
      /** The candidate's phone number. */
      phone?: string | null;
      /** The candidate's identifier in the integrated system. */
      remote_id?: string | null;
    };
    /** Information about the job application. */
    application: {
      /** The application's identifier in the integrated system. */
      remote_id?: string | null;
    };
    /** Information about the job posting. */
    job: {
      /** The job's identifier in the integrated system. */
      remote_id?: string | null;
      /** The job title. */
      name?: string | null;
      /** The job location information. */
      location?: {
        city?: string | null;
        /** Contains the ISO2 country code if possible. If not, it contains the original value. */
        country?: string | null;
        /** If we have address data, this is filled with the raw address string. */
        raw?: string | null;
        state?: string | null;
        /** If we can parse the address data, this field contains the first part of the street information. */
        street_1?: string | null;
        street_2?: string | null;
        zip_code?: string | null;
      };
      /** The hiring team allows you to sync users into your system who can access the job and its applications. */
      hiring_team: {
        /** The team member's identifier in the integrated system. */
        remote_id: string;
        /** The team member's email address. */
        email: string | null;
        /** The team member's first name. */
        first_name: string | null;
        /** The team member's last name. */
        last_name: string | null;
        /** Array of the roles of the user for this specific job. Currently only `RECRUITER` and `HIRING_MANAGER` are mapped into our unified schema. */
        hiring_team_roles: ("RECRUITER" | "HIRING_MANAGER")[];
      }[];
    };
  };
}

export interface IntegrationStateChangedWebhookPayload {
  /** Unique identifier for this webhook event */
  id: string;
  /** Type of the webhook event */
  type: "integration-state-changed";
  data: {
    /** The name of the integrated tool (e.g., "personio", "greenhouse"). */
    integration_tool: string;
    /** The unique identifier of the integration. */
    integration_id: string;
    /** The category of the integration (HRIS, ATS, or ASSESSMENT). */
    integration_category: "HRIS" | "ATS" | "ASSESSMENT";
    /** Information about the end user who created the integration. */
    end_user: {
      /** The name of the organization that owns the integration. */
      organization_name: string;
      /**
       * The email address of the user who created the integration.
       * @format email
       */
      creator_email: string | null;
      /** The unique identifier of the organization in the integrated system. */
      origin_id: string | null;
    };
    /** The quality assurance status of the integration. */
    qa_status: "PENDING" | "FAILED" | "PASSED";
    /** The current state of the integration. */
    state: "ACTIVE" | "INVALID" | "INACTIVE";
    /**
     * ISO 8601 timestamp when the integration state was last updated.
     * @format date-time
     */
    updated_at: string;
  };
}

export interface AiApplyApplicationStatusUpdatedWebhookPayload {
  /** Unique identifier for this webhook event */
  id: string;
  /** Type of the webhook event */
  type: "ai-apply-application-status-updated";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    job_posting_id: string;
    status: "PENDING" | "SUBMITTED" | "FAILED";
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
  };
}

export interface AiApplyJobPostingStatusUpdatedWebhookPayload {
  /** Unique identifier for this webhook event */
  id: string;
  /** Type of the webhook event */
  type: "ai-apply-job-posting-status-updated";
  data: {
    /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
    id: string;
    career_site: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      label: string;
    };
    url: string;
    job_code: string | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /**
     * The date and time the job posting was archived. You can only send applications if the job posting is not archived.
     * @format date-time
     */
    archived_at: string | null;
    archived_reason: "JOB_POSTING_TAKEN_OFFLINE" | "MANUAL_ARCHIVE" | null;
    /** The status of the job posting. You can only send applications if the job posting is "APPLYABLE". */
    availability: "APPLYABLE" | "PENDING" | "ARCHIVED" | "UNAVAILABLE";
  };
}

export interface SyncFinishedWebhookPayload {
  /** Unique identifier for this webhook event */
  id: string;
  /** Type of the webhook event */
  type: "sync-finished";
  data: {
    /** The unique identifier of the sync operation. */
    sync_id: string;
    /** The final state of the sync operation (e.g., `SUCCEEDED`, `FAILED`). */
    sync_state: string;
    /**
     * ISO 8601 timestamp when the sync operation started.
     * @format date-time
     */
    sync_started_at: string;
    /**
     * ISO 8601 timestamp when the sync operation completed.
     * @format date-time
     */
    sync_ended_at: string;
    /**
     * Duration of the sync operation in seconds.
     * @min 0
     */
    sync_duration_seconds: number;
    /** The unique identifier of the integration. */
    integration_id: string;
    /** The name of the integrated tool (e.g., "personio", "greenhouse"). */
    integration_tool: string;
    /** The category of the integration (HRIS, ATS, or ASSESSMENT). */
    integration_category: "HRIS" | "ATS" | "ASSESSMENT";
    /** Information about the end user who created the integration. */
    end_user: {
      /** The name of the organization that owns the integration. */
      organization_name: string;
      /**
       * The email address of the user who created the integration.
       * @format email
       */
      creator_email: string | null;
      /** The unique identifier of the organization in the integrated system. */
      origin_id: string | null;
    };
    /**
     * URL to view detailed logs for the operation.
     * @format uri
     */
    log_url: string;
  };
}

export interface RemoteEventReceivedWebhookPayload {
  /** Unique identifier for this webhook event */
  id: string;
  /** Type of the webhook event */
  type: "remote-event-received";
  data: {
    /** The unique identifier of the integration. */
    integration_id: string;
    /** The name of the integrated tool (e.g., "personio", "greenhouse"). */
    integration_tool: string;
    /** The category of the integration (HRIS, ATS, or ASSESSMENT). */
    integration_category: "HRIS" | "ATS" | "ASSESSMENT";
    /** Information about the end user who created the integration. */
    end_user: {
      /** The name of the organization that owns the integration. */
      organization_name: string;
      /**
       * The email address of the user who created the integration.
       * @format email
       */
      creator_email: string | null;
      /** The unique identifier of the organization in the integrated system. */
      origin_id: string | null;
    };
  };
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

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

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.kombo.dev/v1";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const responseToParse = responseFormat ? response.clone() : response;
      const data = !responseFormat
        ? r
        : await responseToParse[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Kombo API
 * @version 1.0.0
 * @baseUrl https://api.kombo.dev/v1
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  checkApiKey = {
    /**
     * @description Check whether your API key is working properly.
     *
     * @tags General
     * @name GetCheckApiKey
     * @summary Check API key
     * @request GET:/check-api-key
     * @secure
     */
    getCheckApiKey: (params: RequestParams = {}) =>
      this.request<
        GetCheckApiKeyPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/check-api-key`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  forceSync = {
    /**
     * @description Trigger a sync for a specific integration. <Warning>Please note that it is **not** necessary nor recommended to call this endpoint periodically on your side. Kombo already performs periodic syncs for you and you should only trigger syncs yourself in special cases (like when a user clicks on a "Sync" button in your app).</Warning>
     *
     * @tags General
     * @name PostForceSync
     * @summary Trigger sync
     * @request POST:/force-sync
     * @secure
     */
    postForceSync: (
      data: PostForceSyncRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostForceSyncPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/force-sync`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  passthrough = {
    /**
     * @description Send a request to the specified integration's native API. At Kombo we put a lot of work into making sure that our unified API covers all our customers' use cases and that they never have to think about integration-specific logic again. There are cases, however, where our customers want to build features that are very integration-specific. That's where this endpoint comes in. Pass in details about the request you want to make to the integration's API and we'll forward it for you. We'll also take care of setting the right base URL and authenticating your requests. To get started, please pick the relevant API (some tools provide multiple to due different base URLs or authentication schemes) from the table below and pass in the `{tool}/{api}` identifier as part of the path. |Integration|`{tool}/{api}`|Description| |---|---|---| |Personio|`personio/personnel`|Personio's [Personnel Data API](https://developer.personio.de/reference/get_company-employees). We automatically authenticate all requests using the client ID and secret and use `https://api.personio.de/v1` as the base URL.| |Personio|`personio/personnelv2`|Personio's [V2 Personnel Data API](https://developer.personio.de/v2.0/reference/introduction). We automatically authenticate all requests using the client ID and secret and use `https://api.personio.de/v2` as the base URL.| |Workday|`workday/soap`|[Workday's SOAP API](https://community.workday.com/sites/default/files/file-hosting/productionapi/index.html). We automatically authenticate all requests. Set `data` to your raw xml string. Use `/` as your `path`, as we will always send requests to `https://\{domain\}/ccx/service/\{tenant\}/\{service_name\}`. Set your `method` to `POST`. You need to specify the `api_options` object and set `service_name` to the name of the service you want to call. Find all available services [here](https://community.workday.com/sites/default/files/file-hosting/productionapi/versions/v41.0/index.html). The string that you submit as `data` will be the content of the `soapenv:Body` tag in the request. You can set the `service_version` to any valid Workday service version (the default is `38.2`).| |Workday|`workday/rest`|[Workday's REST API](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html). We automatically authenticate all requests and use the correct Workday REST base URL for your tenant. The base URL follows the format: https://\{domain\}/api/\{service_name\}/\{version\}/\{tenant\}. You can specify any valid REST endpoint and method. See the Workday REST API documentation for available endpoints. You must specify the `api_options` object and set `service_name` to the name of the service you want to call. You can also specify the `version` (e.g., "v1", "v2"); if omitted, it defaults to "v1".| |SAP SuccessFactors|`successfactors/odata-v2`|[SuccessFactors' OData V2 API](https://help.sap.com/doc/74597e67f54d4f448252bad4c2b601c9/2211/en-US/SF_HCM_OData_API_REF_en.pdf). We automatically authenticate all requests and use `https://\{api_domain\}\{path?\}/odata/v2` as the base URL (the optional `\{path\}` is used when connecting via proxied/gateway domains).| |SmartRecruiters|`smartrecruiters/default`|Smartrecruiters [API](https://developers.smartrecruiters.com/reference/apply-api). We automatically authenticate all requests using OAuth and use `https://api.smartrecruiters.com` as the base URL.| |SmartRecruiters|`smartrecruiters/default`|Smartrecruiters [API](https://developers.smartrecruiters.com/reference/apply-api). We automatically authenticate all requests using the credentials supplied by the customer and use `https://api.smartrecruiters.com` as the base URL.| |Factorial|`factorial/api`|Factorial's [API](https://apidoc.factorialhr.com/). We automatically authenticate all requests and use `https://api.factorialhr.com/api` or `https://api.demo.factorial.dev/api` as the base URL, depending on the connected instance.| |Oracle Recruiting Cloud|`oraclerecruiting/rest`|[Oracles's REST API](https://docs.oracle.com/en/cloud/saas/human-resources/24d/farws/rest-endpoints.html). We automatically authenticate all requests and use 'https://\{company_url\}' as the base url.| |Oracle Recruiting Cloud|`oraclerecruiting/rest`|[Oracle's REST API](https://docs.oracle.com/en/cloud/saas/human-resources/24d/farws/rest-endpoints.html). We automatically authenticate all requests and use 'https://\{company_url\}' as the base url.| |Lever|`lever/v1`|[Lever's v1 API](https://hire.lever.co/developer/documentation). We automatically authenticate all requests using the partner credentials which have been configured in the Lever tool settings (this uses Kombo's partner credentials by default).| |iCIMS|`icims/default`|[iCIMS Default API](https://developer-community.icims.com/). We automatically authenticate all requests and use `https://api.icims.com/customers/\{customer_id\}` as the base url.| |Recruitee|`recruitee/default`|The [Recruitee API](https://api.recruitee.com/docs/index.html). We automatically authenticate all requests and use `https://api.recruitee.com/c/\{company_id\}` as the base URL.| |RecruiterFlow|`recruiterflow/v1`|RecruiterFlow API [docs](https://docs.recruiterflow.com/). We automatically authenticate all requests using the RF-Api-Key header and use `https://api.recruiterflow.com` as the base URL.| |Greenhouse|`greenhouse/harvest`|Greenhouse [Harvest API](https://developers.greenhouse.io/harvest.html). We automatically authenticate all requests using the API key and use `https://harvest.greenhouse.io/v1` as the base URL.| |Greenhouse Job Board|`greenhousejobboard/boards-api`|[Greenhouse Job Board API](https://developers.greenhouse.io/job-board). We automatically authenticate all requests and use 'https://boards-api.greenhouse.io/v1/boards/\{job_board_token\}' as the base URL. Optionally, you can provide a custom job_board_token to use a different job board.| |Teamtailor|`teamtailor/v1`|Teamtailor's [JSON-API](https://docs.teamtailor.com/). We authenticate all request with the Teamtailor API key and use the base URL `https://api.teamtailor.com/v1`.| |Teamtailor Job Boards|`teamtailorjobboards/direct-apply`|Teamtailor's [Job Board Direct Apply API](https://partner.teamtailor.com/job_boards/direct_apply/#direct-apply). We automatically authenticate all requests and use `https://5qbn6o9x4h.execute-api.eu-west-1.amazonaws.com/production` as the base URL. All requests are automatically signed with HMAC-SHA256 signature.| |Ashby|`ashby/v1`|Ashby's [V1 API](https://developers.ashbyhq.com/reference/introduction). We automatically authenticate all requests with the provided credentials and use `https://api.ashbyhq.com` as the base URL. Please note that Ashby uses an RPC-style API. Please check [the Ashby API documentation](https://developers.ashbyhq.com/reference/introduction) for details on how to use it.| |CEGID TalentSoft FrontOffice|`talentsoft/v2`|Cegid Talentsoft Recruiting FrontOffice [API](https://developers.cegid.com/api-details). We automatically authenticate all requests using the provided credentials and use `https://\{domain\}/api/v2` as the base URL.| |CEGID TalentSoft Customer|`talentsoftcustomer/v1`|Cegid Talentsoft Recruiting FrontOffice API: [API Documentation](https://developers.cegid.com/api-details#api=cegid-talentsoft-recruiting-frontoffice) We automatically authenticate all requests and use `https://\{customer_subdomain\}.talent-soft.com/api/v1` as the base URL.| |Talention|`talention/v1`|Talention's API. We automatically authenticate all requests and use `https://\{api_domain\}/tms/\{account_id\}/external/api/1.0` as the base URL. Documentation is provided privately by Talention. Contact Kombo support for assistance with specific endpoints.| |Onlyfy|`onlyfy/v1`|Onlyfy's [Public v1 REST API](https://onlyfy.io/doc/v1#section/Introduction). We automatically authenticate all requests using the `apikey` header and use `https://api.prescreenapp.io/v1` as the base URL.| |Personio|`personio/recruiting`|Personio's [Recruiting API](https://developer.personio.de/reference/get_company-employees). We automatically authenticate all requests using the Recruiting access token and use `https://api.personio.de/v1/recruiting` as the base URL.| |Personio|`personio/recruitingV2`|Personio's [V2 Recruiting API](https://developer.personio.de/reference/get_v2-recruiting-applications). We automatically authenticate all requests using the Recruiting access token, send the `Beta` header and use `https://api.personio.de/v2/recruiting` as the base URL.| |Personio|`personio/jobboard`|API endpoints exposed on Personio's public job board pages ([currently just the XML feed](https://developer.personio.de/reference/get_xml)). We automatically use the right `https://\{company\}.jobs.personio.de` base URL.| |UKG Pro|`ukgpro/recruting`|[UKG Pro's Recruiting API](https://developer.ukg.com/hcm/reference/retrieveapplications). We automatically authenticate all requests and use  `https://\{hostname\}/talent/recruiting/v2/\{tenantalias\}/api` as the base URL.| |UKG Pro|`ukgpro/default`|[UKG Pro's HRIS API](https://developer.ukg.com/hcm/reference/get_personnel-v1-person-details). We automatically authenticate all requests and use  `https://\{hostname\}` as the base URL.| |UKG Ready|`ukgready/api`|UKG Ready [API](https://secure.saashr.com/ta/docs/rest/public/). We automatically authenticate all requests using the provided credentials and use `https://\{api_domain\}` as the base URL.| |UKG Ready|`ukgready/api`|UKG Ready [API](https://secure.saashr.com/ta/docs/rest/public/). We automatically authenticate all requests using the provided credentials and use `https://\{api_domain\}` as the base URL.| |ADP Workforce Now|`adpworkforcenow/default`|[ADP Workforce Now API v2](https://developers.adp.com/build/api-explorer/hcm-offrg-wfn). We automatically authenticate all requests and use the correct subdomain.| |Taleo|`taleo/soap`|[Taleo's API](https://docs.oracle.com/en/cloud/saas/taleo-enterprise/23b/otwsu/c-taleoapi.html). We automatically authenticate all requests and use 'https://\{your-subdomain\}.taleo.net/enterprise/soap' as base URL.| |rexx systems|`rexx/default`|Rexx's HRIS export API. There is only one endpoint: `Get /`| |AFAS Software|`afas/api`|AFAS' [API](https://connect.afas.nl/rest/get). We automatically authenticate all requests and use `https://\{domain\}/ProfitRestServices` as the base URL.| |BambooHR|`bamboohr/v1`|BambooHR's [API](https://documentation.bamboohr.com/reference/get-employee). We automatically authenticate all requests using the customer credentials `https://api.bamboohr.com/api/gateway.php/\{subdomain\}/v1` as the base URL.| |Bullhorn|`bullhorn/default`|[Bullhorn's API](https://bullhorn.github.io/rest-api-docs/index.html). We automatically use the right `https://rest.bullhornstaffing.com/rest-services/\{corpToken\}` base URL.| |Workable|`workable/v1`|Workable's [API](https://workable.readme.io/reference/generate-an-access-token). We automatically authenticate all requests using the client ID and secret and use `https://\{subdomain\}.\{environment\}.com/spi/v3` as the base URL.| |PayFit|`payfitcustomer/api`|PayFit [Partner API](https://developers.payfit.io/reference). We automatically authenticate all requests using the provided API key and use `https://partner-api.payfit.com` as the base URL.| |PayFit|`payfitpartner/partner-api`|PayFit [Partner API](https://developers.payfit.io/reference). We automatically authenticate all requests using the OAuth access token and use `https://partner-api.payfit.com` as the base URL.| |Jobvite|`jobvite/api`|We automatically authenticate all requests and use 'https://api.jobvite.com/api/v2' as the base URL.| |Employment Hero|`employmenthero/default`|EmploymentHero [API](https://developer.employmenthero.com/api-references/#icon-book-open-introduction). We automatically authenticate all requests using the credentials supplied by the customer and use `https://api.employmenthero.com/api` as the base URL.| |Fountain|`fountain/v2`|Fountain's [Hire API](https://developer.fountain.com/reference/get_v2-applicants). We automatically authenticate all requests and use `https://api.fountain.com/v2` as the base URL.| |Fourth|`fourth/uk-employee`|Fourth [UK Employee API](https://developer.fourth.com/en-gb/docs/uk-employee-api/reference) We automatically authenticate all requests and use `https://api.fourth.com/hr/organisations/\{organisation_id\}/` as the base URL. We also enforce the required query params for all requests.| |Kenjo|`kenjo/api`|Kenjo's [API](https://kenjo.readme.io/reference/generate-the-api-key). We automatically authenticate all requests using the API key and use `https://api.kenjo.io/` as the base URL.| |HeavenHR|`heavenhr/v2`|[HeavenHR API](https://api.heavenhr.com/). We automatically authenticate all requests using the provided credentials and use `https://api.heavenhr.com/api/v2` as the base URL.| |HiBob|`hibob/v1`|[HibBob's v1 API](https://apidocs.hibob.com/reference/get_people). We automatically authenticate all requests using the service user credentials (or, for old integrations, the API key) and use `https://api.hibob.com/v1` as the base URL.| |HiBob|`hibob/hire`|[HiBob's Hire API](https://apidocs.hibob.com/docs/how-to-integrate-with-ats-hire-api). We automatically authenticate all requests using the hire service user credentials. The base URL is configured during the integration setup.| |Softgarden|`softgarden/frontend-v3`|[Softgarden's Frontend API v3](https://dev.softgarden.de/frontend-v3/. We automatically authenticate all requests and use 'https://api.softgarden.io/api/rest' as base URL.| |Softgarden|`softgarden/apply-api`|[Softgarden's Apply API](https://dev.softgarden.de/apply-api/). We automatically authenticate all requests and use 'https://jobdb.softgarden.de/jobdb/public' as base URL.| |Cezanne HR|`cezannehr/dataservice`|[CezanneHR's v7 dataservice API](https://api.cezannehr.com/).We automatically authenticate all requests and use the base URL `https://subdomain.cezanneondemand.com/cezanneondemand/v7/dataservice.svc`| |Microsoft Entra ID|`entraid/v1`|[AzureAD's API](https://learn.microsoft.com/en-us/graph/api/resources/identity-network-access-overview?view=graph-rest-1.0). We automatically authenticate all requests.| |Microsoft Azure AD|`azuread/v1`|[AzureAD's API](https://learn.microsoft.com/en-us/graph/api/resources/identity-network-access-overview?view=graph-rest-1.0). We automatically authenticate all requests.| |Google Workspace|`googleworkspace/people`|[Googles's API](https://developers.google.com/people/api/rest). We automatically authenticate all requests and use 'https://people.googleapis.com' as the base URL.| |Google Workspace|`googleworkspace/admin`|[Googles's API](https://developers.google.com/admin-sdk/directory/reference/rest). We automatically authenticate all requests and use 'https://admin.googleapis.com' as the base URL.| |Nmbrs|`nmbrs/soap`|[Nmbrs SOAP API](https://api.nmbrs.nl/soap/v3/). We automatically authenticate all requests and use `https://api.nmbrs.nl/soap/v3/` as the base URL. Set `data` to your raw XML string (the content that will be placed inside the `\<soap:Body\>` tag). Use `/` as your `path`, as we will always send requests to `https://api.nmbrs.nl/soap/v3/\{service_name\}.asmx`. Set your `method` to `POST`. You need to specify the `api_options` object and set `service_name` to the name of the service you want to call. Available services include `EmployeeService` and `CompanyService`.| |Pinpoint|`pinpoint/v1`|Pinpoint's [JSON:API](https://developers.pinpointhq.com/docs). We automatically authenticate all requests using the `X-API-KEY` header and use `https://\{subdomain\}.pinpointhq.com/api/v1` as the base URL.| |d.vinci|`dvinci/rest-api`|The [DVinci REST API](https://static.dvinci-easy.com/files/d.vinci%20rest-api.html). All requests are authenticated by Kombo and use `https://\{dvinci_domain\}/restApi/` as the base URL.| |d.vinci|`dvinci/apply-api`|The [DVinci Apply API](https://static.dvinci-easy.com/files/d.vinci%20application-apply-api.html). All requests are authenticated by Kombo and use `https://\{dvinci_domain\}/p/\{portal_path\}/` as the base URL.| |d.vinci admin|`dvinciadmin/rest-api`|[DVinci REST API](https://static.dvinci-easy.com/files/d.vinci%20rest-api.html).| |d.vinci admin|`dvinciadmin/odata-api`|[DVinci ODATA API](https://dvinci.freshdesk.com/en/support/solutions/articles/75000059523-odata-reporting-api).| |JOIN|`join/v2`|Join's [V2 API](https://docs.join.com/reference/getting-started). We automatically authenticate all requests and use `https://api.join.com/v2` as the base URL.| |Deel|`deel/api`|Deel's [API](https://developer.deel.com/reference/). We automatically authenticate all requests using the provided credentials and use `https://\{api_domain\}/rest` as the base URL.| |Remote|`remotecom/default`|Remote's [API](https://remote.com/resources/api/getting-started). We automatically authenticate all requests using provided credentials.| |IRIS Cascade|`iriscascade/v2`|IRIS Cascade HR [API](https://swagger.hrapi.co.uk/). We automatically authenticate all requests using the provided credentials and use `https://api.iris.co.uk/hr/v2` as the base URL.| |Okta|`okta/v1`|[Okta's API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApiServiceIntegrations/). We automatically authenticate all request ans use 'https://\<your-okta-domain\>/api/v1' as the base URL.| |Sage HR|`sagehr/api`|Sage HR's [API](https://developer.sage.com/hr/reference/api-ref). We automatically authenticate all requests and use `https://\{subdomain\}.sage.hr/api` as the base URL.| |Sage People|`sagepeople/salesforce-rest-api`|Sage People is built on Salesforce's [API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm). We automatically authenticate all requests and use `https://\{customer_name\}.my.salesforce.com/` as the base URL.| |Humaans|`humaans/api`|Humaans' [API](https://docs.humaans.io/api/). We automatically authenticate all requests using the API key and use `https://app.humaans.io/api` as the base URL.| |TRAFFIT|`traffit/v2`|Traffit's [v2 API](https://api.traffit.com). We authenticate all requests with the Traffit API key and use the base URL `https://yourdomain.traffit.com/api/integration/v2`.| |eRecruiter|`erecruiter/api`|[eRecruiter's API](https://api.erecruiter.net/swagger/ui/index). We automatically authenticate all requests and use `https://\{domain\}/Api` as the base URL.| |Eurécia|`eurecia/api`|Eurécia [REST API](https://api.eurecia.com/eurecia/fw/swagger/index.html#/) We automatically authenticate all requests and use `https://\{domain\}/eurecia/rest` as the base URL.| |Abacus Umantis|`abacusumantis/v1`|[Umantis API v1](https://recruitingapp-91005709.umantis.com/api/v1/swagger-ui). We automatically authenticate all requests and use `https://\{subdomain\}.umantis.com/api/v1` as the base URL.| |Haufe Umantis|`umantis/v1`|[Umantis API v1](https://recruitingapp-91005709.umantis.com/api/v1/swagger-ui). We automatically authenticate all requests and use `https://\{subdomain\}.umantis.com/api/v1` as the base URL.| |Jobylon|`jobylon/push`|The [Jobylon Push API](https://developer.jobylon.com/push-api-and-webhooks/). We automatically authenticate all requests and use `https://\{subdomain\}.jobylon.com/p1` as the base URL.| |Jobylon|`jobylon/feed`|The [Jobylon Feed API](https://developer.jobylon.com/feed-api/). We automatically authenticate all requests and use `https://\{subdomain\}.jobylon.com/feeds/\{job_hash\}` as the base URL.| |Oracle HCM|`oraclehcm/api`|Oracle HCM Cloud [REST API](https://docs.oracle.com/en/cloud/saas/human-resources/24d/farws/index.html). We automatically authenticate all requests and use `https://\{domain\}/` as the base URL, where domain is your Oracle Cloud domain.| |Taleez|`taleez/0`|[Taleez's API](https://api.taleez.com/swagger-ui/index.html). We automatically authenticate all requests and use `https://api.taleez.com/0` as the base URL.| |HR WORKS|`hrworks/v2`|HRWorks's v2 [API](https://developers.hrworks.de/2.0/endpoints). We automatically authenticate all requests using the customer credentials.| |Abacus|`abacus/api`|Abacus [REST API](https://apihub.abacus.ch/). We automatically authenticate all requests and use `https://\{\{abacusUrl\}\}/api/entity/v1/mandants/\{\{mandantId\}\}` as the base URL.| |Zoho Recruit|`zohorecruit/v2`|Zoho Recruit's [V2 API](https://www.zoho.com/recruit/developer-guide/apiv2/modules-api.html). We automatically authenticate all requests and use `https://recruit.\{domain\}/recruit/v2` as the base URL.| |AlexisHR|`alexishr/v1`|[AlexisHR's v1 API](https://docs.alexishr.com/) We automatically authenticate all requests and use `https://\{subdomain\}.alexishr.com` as base URL.| |Simployer|`simployer/v1`|[AlexisHR's v1 API](https://docs.alexishr.com/) We automatically authenticate all requests and use `https://\{subdomain\}.alexishr.com` as base URL.| |Eploy|`eploy/api`|Eploy's [API](https://www.eploy.com/resources/developers/api-documentation/). We automatically authenticate all requests and use `https://\{subdomain\}.eploy.net/api` as the base URL.| |JobDiva|`jobdiva/api`|We automatically authenticate all requests and use `https://api.jobdiva.com` as the base URL.| |Visma Peple|`peple/hrm`|[Visma Payroll Reporting API](https://api.analytics1.hrm.visma.net/docs/openapi.html). We automatically authenticate all requests using the client credentials and use 'https://api.analytics1.hrm.visma.net' as the base URL.| |Visma YouServe|`youserve/learning`|Visma YouServe [Learning API](https://youserve-domain-api.github.io/SwaggerUI/learning.html). We automatically authenticate all requests using OAuth 2.0 with the provided credentials and use `https://api.youserve.nl/learning/v1.0` as the base URL.| |Dayforce|`dayforce/V1`|[Dayforce's API](https://developers.dayforce.com/Build/Home.aspx). We automatically authenticate all requests and use `\{\{baseUrl\}\}/Api/\{\{clientNamespace\}\}/V1` as the base URL| |Hansalog|`hansalog/vision`|Hansalog's [Vision API](https://hansalog-vision.document360.io/docs/). We automatically authenticate all requests and use `https://\{subdomain\}.hansalog-cloud.de/vision` as the base URL.| |Lattice|`lattice/passthrough`|Lattice's [API](https://developers.lattice.com/v2/docs/base-url-1). We automatically authenticate all requests using OAuth credentials with `https://api.latticehq.com` as the base URL.| |Lattice|`lattice/talent`|Lattice's [Talent API](https://developers.lattice.com/docs/introduction-1). We automatically authenticate all requests using OAuth credentials with `https://api.latticehq.com` as the base URL.| |Paylocity|`paylocity/default`|[Paylocity's Weblink API](https://developer.paylocity.com/integrations/reference/authentication-weblink). We automatically authenticate all requests and use 'https://\{api|dc1demogw\}.paylocity.com/' as the base URL.| |Paylocity|`paylocity/next-gen`|[Paylocity's NextGen API](https://developer.paylocity.com/integrations/reference/authentication). We automatically authenticate all requests and use 'https://dc1prodgwext.paylocity.com/' as the base URL.| |Paycor|`paycor/v1`|[Paycors's v1 API](https://developers.paycor.com/explore#section/Getting-Started). We automatically authenticate all requests and use 'https://apis.paycor.com'.| |Paycom|`paycom/v1`|Paycom's REST API. We automatically authenticate all requests using the provided SID and API Token and use `https://api.paycomonline.net/v4/rest/index.php/api/v1` as the base URL.| |Insperity|`insperity/api`|Insperity [APIs](https://developer.insperity.com/) We automatically authenticate all requests and use `https://api.insperity.com` as the base URL. For staging environments, we use `https://apistage.insperity.com`. Note that all requests require the company ID to be specified in the path or body.| |Paychex|`paychex/api`|Paychex [REST API](https://developer.paychex.com/documentation). We automatically authenticate all requests and use `https://api.paychex.com` as the base URL.| |Avature|`avature/custom-api`|Avatures's Custom API. Call `Get /openapi` to retrieve the specific custom API schema. We automatically authenticate all requests and use the instance specific custom API URL as the base URL.| |Apploi|`apploi/rest-api`|The [Apploi API](https://integrate.apploi.com/). We automatically authenticate all requests and use `https://partners.apploi.com/` as the base URL.| |Phenom|`phenom/rest-api`|The [Phenom API](https://developer.phenom.com/). We automatically authenticate all requests and use `https://api-stg.phenompro.com` as the base URL.| |Rippling|`rippling/api`|Rippling's [API](https://developer.rippling.com/documentation). We automatically authenticate all requests and use `https://api.rippling.com/platform/api` or`https://rest.ripplingapis.com` as the base URL.| |Heyrecruit|`heyrecruit/v2`|[Heyrecruit's v2 API](https://documenter.getpostman.com/view/23241256/2s9YysBLcf#47e271ac-47c8-4c75-9cc6-b8c506e9dad6). We automatically authenticate all requests using the client ID and secret and use `https://app.heyrecruit.de/api/v2` as the base URL.| |PeopleHR|`peoplehr/default`|[PeopleHR's API](https://apidocs.peoplehr.com/#). We automatically authenticate all request ans use 'https://api.peoplehr.net' as the base URL.| |JazzHR|`jazzhr/v1`|[JazzHR's v1 API](https://www.resumatorapi.com/v1/#!`).We automatically authenticate all requests and use "https://api.resumatorapi.com/v1/" as the base URL.| |Lucca|`lucca/api`|[Luccas's API](https://developers.lucca.fr/api-reference/legacy/introduction). We automatically authenticate all requests and use 'https://\{account\}.\{ilucca|ilucca-demo\}.\{region\}/' as the base URL.| |BITE|`bite/v1`|[Bite's v1 API](https://api.b-ite.io/docs/#/). We automatically authenticate all requests and use 'https://api.b-ite.io/v1' as base URL.| |Zelt|`zelt/partner`|Zelt's [Partner API](https://go.zelt.app/apiv2/swagger). We automatically authenticate all requests using the connected OAuth credentials and use `https://go.zelt.app/apiv2/partner` as the base URL.| |Planday|`planday/api`|Planday's [HR API v1.0](https://openapi.planday.com/api/hr?version=v1.0). We automatically authenticate all requests and use `https://openapi.planday.com` as the base URL.| |Hailey HR|`haileyhr/api`|Hailey HR's [API](https://api.haileyhr.app/docs/index.html). We automatically authenticate all requests using the provided credentials and use `https://api.haileyhr.app` as the base URL.| |Silae|`silae/rest`|[Silae's REST API](https://silae-api.document360.io/docs). We automatically authenticate all requests and use 'https://payroll-api.silae.fr/payroll' as the base URL.| |Mysolution|`mysolution/default`|[Mysolution's API](https://swagger.mysolution.nl/). We automatically authenticate all requests and use the customer's domain as base URL.| |InRecruiting by Zucchetti|`inrecruiting/default`|[inRecruiting's v3 API](https://inrecruiting.intervieweb.it/api-docs/). We automatically authenticate all requests and use the customers domain as base URL| |Connexys By Bullhorn|`connexys/api`|[Connexy's API](https://api.conexsys.com/client/v2/docs/#section/Overview). We automatically authenticate all requests and use `https://\{connexys_domain\}/` as the base URL.| |HR4YOU|`hr4you/v2`|[HR4YOU's v2 API](https://apiprodemo.hr4you.org/api2/docs). We automatically authenticate all requests and use the customers provided base URL (e.g., https://`\{base_url\}`/ or https://`\{subdomain\}.hr4you.org`/).| |Cornerstone OnDemand|`cornerstoneondemand/recruiting`|Cornerstone's [Recruiting API](https://csod.dev/reference/recruiting/). We automatically authenticate all requests using the client ID and secret and use `https://your_domain.csod.com/services/api` as the base URL.| |Zvoove Recruit|`zvooverecruit/jobs`|[Zvoove Recruit's Jobs API](https://api.zvoove.com/docs/). We automatically authenticate all requests using the jobs API key and use 'https://\{domain\}/api/public' as base URL.| |Zvoove Recruit|`zvooverecruit/applicants`|[Zvoove Recruit's Applicants API](https://api.zvoove.com/docs/). We automatically authenticate all requests using the applicants API key and use 'https://\{domain\}/api/public' as base URL.| |Spark Hire Recruit|`comeet/api`|[Spark Hire Recruit's API.](https://developers.comeet.com/reference/recruiting-api-overview)We automatically authenticate all requests and use `https://api.comeet.com` as the base URL.| |Leapsome|`leapsome/scim`|Leapsome [SCIM API](https://api.leapsome.com/scim/v1/api-docs/). We automatically authenticate all requests using the credentials supplied by the customer and use `https://api.leapsome.com/scim/v1` as the base URL.| |Leapsome|`leapsome/v1`|Leapsome [API](https://api.leapsome.com/v1/api-docs/). We automatically authenticate all requests using the credentials supplied by the customer and use `https://api.leapsome.com/v1` as the base URL.| |Compleet|`compleetpitcher/pitcher`|Compleet's Pitcher API. We automatically authenticate all requests and use the configured base URL.| |Gem|`gem/api`|Gem's [ATS API](https://api.gem.com/ats/v0/reference) We automatically authenticate all requests.| |workforce.com|`workforcecom/api`|Workforce.com [API](https://my.workforce.com/api/v2/documentation). We automatically authenticate all requests using the provided credentials and use `https://my.tanda.co` as the base URL.| |Laura|`laura/api`|We automatically authenticate all requests and use `https://\{subdomain\}.rekrytointi.com/api/v1.2` as the base URL.| |Coveto (REST API)|`covetorest/v1`|We automatically use `https://\{subdomain\}.coveto.de/public/api/v1` as the base URL. https://demo.coveto.de/swagger-ui/index.html#/| |Coveto (legacy SOAP API)|`coveto/public`|We automatically use `https://\{subdomain\}.coveto.de` as the base URL.| |MHR People First|`peoplefirst/v1`|MHR People First [v1 API](https://docs.people-first.com/api/api-docs/api-docs.html). We automatically authenticate all requests using the access token and tenant/environment codes. For default environments, we use `https://\{tenant_code\}.people-first.com/api/v1` as the base URL. For non-default environments, we use `https://\{tenant_code\}-\{environment_code\}.people-first.com/api/v1`.| |SD Worx|`sdworx/default`|SD Worx's [OData API](https://apistaging.cobra.sdworx.com/Resources). We automatically authenticate all requests using the client ID and secret and use `\{api_url\}` as the base URL.| |Crelate|`crelate/api`|Crelate [REST API](https://help.crelate.com/en/articles/4120536-crelate-api-developer-guide). We automatically authenticate all requests and use `https://app.crelate.com/api3` as the base URL.| |Absence.io|`absenceio/v2`|Absence.io [API](https://docs.absence.io/). We automatically authenticate all requests and use `https://app.absence.io/api/v2` as the base URL.| |Manatal|`manatal/open-api-v3`|[Manatal's Open API v3](https://developers.manatal.com/reference/getting-started). We automatically authenticate all requests and use `https://api.manatal.com/open/v3` as the base URL.| |Manatal|`manatal/career-page`|Manatal's Career Page API. We use `https://api.manatal.com/open/v3/career-page/\{client_slug\}` as the base URL.| |Avionté|`avionte/front-office-v1`|Avionte's API. We automatically authenticate all requests and use `https://api.avionte.com/front-office/v1` as the base URL. Documentation for the BOLD Front Office API: https://developer.avionte.com/reference/get-all-talent-tags| |a3innuva Nómina|`a3innuvanomina/laboral`|a3innuva Nómina API [docs](https://a3developers.wolterskluwer.es/). Requests are automatically authenticated using OAuth access tokens (refreshed when needed). Base URL: `https://a3api.wolterskluwer.es/Laboral/api`.| |DATEV|`datevhr/hr-exports`|DATEV's [hr-exports](https://developer.datev.de/en/product-detail/hr-exports/1.0.0/overview). We automatically authenticate all requests and use `https://hr-exports.api.datev.de/\{platform|platform-sandbox\}/v1/clients/\{client-id\}` as the base URL.| |DATEV|`datevhr/hr:payrollreports`|DATEV's [hr:payrollreports](https://developer.datev.de/en/product-detail/hr-payrollreports/2.0.0/overview) API. We automatically authenticate all requests and use `https://hr-payrollreports.api.datev.de/\{platform|platform-sandbox\}/v1/clients/\{client-id\}/` as the base URL.| |DATEV|`datevhr/eau`|DATEV's [eau](https://developer.datev.de/en/product-detail/eau-api/1.0.0/overview) API. We automatically authenticate all requests and use `https://eau.api.datev.de/\{platform|platform-sandbox\}/v1/clients/\{client-id\}/` as the base URL.| |Sympa|`sympa/api`|Sympa's [API](https://documenter.getpostman.com/view/33639379/2sA3kXG1vX#intro). We automatically authenticate all requests and use `https://api.sympahr.net/api/` as the base URL.| |Breezy HR|`breezyhr/v3`|[BreezyHR's v3 API](https://developer.breezy.hr/reference/overview). We automatically authenticate all requests and use "https://api.breezy.hr/v3/" as the base URL.| |Flatchr|`flatchr/api`|Flatchr's [API](https://developers.flatchr.io/docs/getting_started). We automatically authenticate all requests and use `https://api.flatchr.io` as the base URL.| |Flatchr|`flatchr/career`|Flatchr's [Career API](https://developers.flatchr.io/docs/QuickStart/Candidats/Creer_un_candidat). We automatically authenticate all requests and use `https://career.flatchr.io` as the base URL.| |ApplicantStack|`applicantstack/api`|ApplicantStack's [API](https://helpas.payrollservers.info/s/article/API-Integration-Guide). We automatically authenticate all requests and use `https://\{subdomain\}.applicantstack.com/api/` as the base URL.| |Visma Raet - Youforce|`youforce/v1.0`|[Youforce's basic v1.0 API](https://vr-api-integration.github.io/youforce-api-documentation/postman_collections.html). We automatically authenticate all requests and use 'https://api.youforce.com' as base URL.| |PeopleXD|`peoplexd/b2b`|PeopleXD's [B2B API](https://documenter.getpostman.com/view/3101638/TzeTHUDu#intro). We automatically authenticate all requests and use `https://api.corehr.com/ws/\{tenant_id\}/corehr` or `https://uatapi.corehr.com/ws/\{tenant_id\}/corehr` as the base URL.| <Note>Please note that the passthrough API endpoints are only meant for edge cases. That's why we only expose them for new integrations after understanding a concrete customer use case. If you have such a use case in mind, please reach out to Kombo.</Note>
     *
     * @tags General
     * @name PostPassthroughToolApi
     * @summary Send passthrough request
     * @request POST:/passthrough/{tool}/{api}
     * @secure
     */
    postPassthroughToolApi: (
      tool: PostPassthroughToolApiParameterTool,
      api: PostPassthroughToolApiParameterApi,
      data: PostPassthroughToolApiRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostPassthroughToolApiPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/passthrough/${tool}/${api}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  integrations = {
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
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteIntegrationsIntegrationIdPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/integrations/${integrationId}`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        GetIntegrationsIntegrationIdPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/integrations/${integrationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a link that will allow the user to reconnect an integration. This is useful if you want to allow your users to update the credentials if the old ones for example expired. Embed this the same way you would [embed the connect link](/connect/embedded-flow). By default, the link will be valid for 1 hour. ### Example Request Body ```json { "language": "en", "scope_config_id": "9Pv6aCFwNDEzPNmwjSsY9SQx", "link_type": "EMBEDDED" } ```
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
      params: RequestParams = {},
    ) =>
      this.request<
        PostIntegrationsIntegrationIdRelinkPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/integrations/${integrationId}/relink`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all fields available on the specified integration. **This includes the mapping to your custom fields**
     *
     * @tags General
     * @name GetIntegrationsIntegrationIdIntegrationFields
     * @summary Get integration fields
     * @request GET:/integrations/{integration_id}/integration-fields
     * @secure
     */
    getIntegrationsIntegrationIdIntegrationFields: (
      integrationId: GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId,
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor;
        /** The number of results to return per page. Maximum is 2000. */
        page_size?: GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/integrations/${integrationId}/integration-fields`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description When enabled, the integration field will be passed as part of the `integration_fields` array on the specific model endpoint. Providing false will disable the passthrough for the specified field.
     *
     * @tags General
     * @name PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId
     * @summary Updates an integration fields passthrough setting
     * @request PATCH:/integrations/{integration_id}/integration-fields/{integration_field_id}
     * @secure
     */
    patchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId: (
      integrationId: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId,
      integrationFieldId: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId,
      data: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/integrations/${integrationId}/integration-fields/${integrationFieldId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all custom fields available on the specified integration. **This includes the mapping to the corresponding integration field if applicable*
     *
     * @tags General
     * @name GetIntegrationsIntegrationIdCustomFields
     * @summary Get custom fields with current mappings
     * @request GET:/integrations/{integration_id}/custom-fields
     * @secure
     */
    getIntegrationsIntegrationIdCustomFields: (
      integrationId: GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId,
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetIntegrationsIntegrationIdCustomFieldsParameterCursor;
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetIntegrationsIntegrationIdCustomFieldsParameterPageSize;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetIntegrationsIntegrationIdCustomFieldsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/integrations/${integrationId}/custom-fields`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the mapping of a given custom field. If the custom field is already mapped, it will be updated.
     *
     * @tags General
     * @name PutIntegrationsIntegrationIdCustomFieldsCustomFieldId
     * @summary Put custom field mappings
     * @request PUT:/integrations/{integration_id}/custom-fields/{custom_field_id}
     * @secure
     */
    putIntegrationsIntegrationIdCustomFieldsCustomFieldId: (
      integrationId: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId,
      customFieldId: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId,
      data: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/integrations/${integrationId}/custom-fields/${customFieldId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  tools = {
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
      params: RequestParams = {},
    ) =>
      this.request<
        GetToolsCategoryPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/tools/${category}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  hris = {
    /**
     * @description Get the list of users to provision, deprovision, and optionally update based on the users you've already provisioned in your system.
     *
     * @tags Unified HRIS API
     * @name PostHrisProvisioningGroupsGroupIdDiff
     * @summary Get provisioning diff
     * @request POST:/hris/provisioning-groups/{group_id}/diff
     * @secure
     */
    postHrisProvisioningGroupsGroupIdDiff: (
      groupId: PostHrisProvisioningGroupsGroupIdDiffParameterGroupId,
      data: PostHrisProvisioningGroupsGroupIdDiffRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostHrisProvisioningGroupsGroupIdDiffPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/provisioning-groups/${groupId}/diff`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new link that can be passed to the Kombo Connect SDK to open the provisioning setup UI.
     *
     * @tags Unified HRIS API
     * @name PostHrisProvisioningGroupsGroupIdSetupLinks
     * @summary Create provisioning setup link
     * @request POST:/hris/provisioning-groups/{group_id}/setup-links
     * @secure
     */
    postHrisProvisioningGroupsGroupIdSetupLinks: (
      groupId: PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId,
      data: PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/provisioning-groups/${groupId}/setup-links`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all employees. <Note>Not interested in most fields? You can use our [our Scopes feature](/scopes) to customize what data points are synced.</Note> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetHrisEmployeesParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetHrisEmployeesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisEmployeesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisEmployeesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisEmployeesParameterRemoteIds;
        /** **(⚠️ Deprecated - Use the `employment_statuses` filter instead.)** Filter by the `employment_status` field. */
        employment_status?: GetHrisEmployeesParameterEmploymentStatus;
        /**
         * Filter by a comma-separated list of `ACTIVE`, `PENDING`, `INACTIVE`, `LEAVE`
         * * `ACTIVE`: the employee is **actively employed**
         * * `PENDING`: the employee is **not actively employed yet** (but they signed their contract or are part of an onboarding process)
         * * `INACTIVE`: a full-time employee is no longer employed, or, for a contract worker when their contract runs out
         * * `LEAVE`: the employee is still employed but **currently on leave** (note that not all HR systems support this status — use our absences API for detailed information)
         *
         *
         * Leave this blank to get results matching all values.
         */
        employment_statuses?: GetHrisEmployeesParameterEmploymentStatuses;
        /** Filter by a comma-separated list of group IDs. We will only return employees that are members of _any_ of the groups. */
        group_ids?: GetHrisEmployeesParameterGroupIds;
        /** Filter by a comma-separated list of legal entity IDs. We will only return employees that are members of _any_ of the legal entities. */
        legal_entity_ids?: GetHrisEmployeesParameterLegalEntityIds;
        /** Filter by a comma-separated list of work location IDs. We will only return employees who are at _any_ of the work locations. */
        work_location_ids?: GetHrisEmployeesParameterWorkLocationIds;
        /** Filter by a comma-separated list of work emails. We will only return employees who have _any_ of the work emails. The format of the emails is case-insensitive. */
        work_emails?: GetHrisEmployeesParameterWorkEmails;
        /** Filter by a comma-separated list of personal emails. We will only return employees who have _any_ of the personal emails. The format of the emails is case-insensitive. */
        personal_emails?: GetHrisEmployeesParameterPersonalEmails;
        /** A JSON string with a single key-value pair like {"fieldKey":"fieldValue"} to filter employees by a specific custom field value. Note that the value must be a string, number, boolean or null and the key must be a valid custom field key. Custom fields with a value of type array or object are not supported. */
        custom_fields?: GetHrisEmployeesParameterCustomFields;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisEmployeesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/employees`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new employee. <Warning> We are deprecating this endpoint in favor of the new [create employee form](/hris/features/create-employee) endpoint. </Warning> <Note> This endpoint requires the permission **Create and manage employees** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "first_name": "John", "last_name": "Doe", "work_email": "john.doe@acme.com", "gender": "MALE", "date_of_birth": "1986-01-01", "start_date": "2020-04-07", "job_title": "Integrations Team Lead", "home_address": { "city": "Berlin", "country": "DE", "state": "Berlin", "street_1": "Sonnenallee 63", "zip_code": "12045" } } ```
     *
     * @tags Unified HRIS API
     * @name PostHrisEmployees
     * @summary [DEPRECATED] Create employee
     * @request POST:/hris/employees
     * @secure
     */
    postHrisEmployees: (
      data: PostHrisEmployeesRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostHrisEmployeesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/employees`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the form for creating an employee. This form can be rendered dynamically on your frontend to allow your customers to create employees in their HRIS. Follow our [create employee guide here](/hris/features/create-employee) to learn how this form is generated and how you can use it. ### Example Form ```json { "properties": { "firstName": { "type": "text", "label": "First Name", "required": true, "description": "Employee's first name", "unified_key": "first_name", "min_length": 1, "max_length": 100 }, "startDate": { "type": "date", "label": "Start Date", "required": true, "description": "Employee's start date", "unified_key": "start_date" }, "workLocation": { "type": "object", "label": "Work Location", "required": false, "description": "Employee's work location", "unified_key": null, "properties": { "site": { "type": "single_select", "label": "Site", "required": true, "description": "Employee's site", "unified_key": null, "options": { "type": "inline", "entries": [ { "label": "Site 1", "id": "FXrER44xubBqA9DLgZ3PFNNx", "unified_value": "1", "remote_id": "site_1" }, { "label": "Site 2", "id": "2rv75UKT2XBoQXsUb9agiTUm", "unified_value": "2", "remote_id": "site_2" } ] } }, "keyNumbers": { "type": "array", "label": "Key Numbers", "required": false, "description": "Employee's key numbers", "unified_key": null, "min_items": 2, "max_items": 5, "item_type": { "type": "number", "label": "Key Number", "required": false, "description": "The number of the keys which belong to the employee", "unified_key": null, "min": 0, "max": 99 } } } } } } ```
     *
     * @tags Unified HRIS API
     * @name GetHrisEmployeesForm
     * @summary Get employee form
     * @request GET:/hris/employees/form
     * @secure
     */
    getHrisEmployeesForm: (params: RequestParams = {}) =>
      this.request<
        GetHrisEmployeesFormPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/employees/form`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create an employee, based on the form schema. <Note> This endpoint requires the permission **Create and manage employees** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "properties": { "firstName": "John", "startDate": "2025-01-01", "workLocation": { "site": "8e422bf8cav", "keyNumbers": [ 142, 525, 63 ] } } } ```
     *
     * @tags Unified HRIS API
     * @name PostHrisEmployeesForm
     * @summary Create employee with form
     * @request POST:/hris/employees/form
     * @secure
     */
    postHrisEmployeesForm: (
      data: PostHrisEmployeesFormRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostHrisEmployeesFormPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/employees/form`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update an employee. <Note> This endpoint requires the permission **Create and manage employees** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "BkgfzSr5muN9cUTMD4wDQFn4", "first_name": "John", "last_name": "Doe", "work_email": "john.doe@acme.com", "ssn": "555-32-6395", "tax_id": "12 345 678 901", "gender": "MALE", "marital_status": "MARRIED", "date_of_birth": "1986-01-01", "start_date": "2020-04-07", "termination_date": "2022-05-20", "job_title": "Integrations Team Lead", "nationality": "DE", "home_address": { "city": "Berlin", "country": "DE", "state": "Berlin", "street_1": "Sonnenallee 63", "zip_code": "12045" } } ```
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
      params: RequestParams = {},
    ) =>
      this.request<
        PatchHrisEmployeesEmployeeIdPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/employees/${employeeId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Uploads an document file for the specified employee. <Note> This endpoint requires the permission **Manage documents** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "category_id": "3Cjwu7nA7pH5cX5X1NAPmb7M", "document": { "name": "Frank Doe Employment Contract.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "content_type": "text/plain" } } ```
     *
     * @tags Unified HRIS API
     * @name PostHrisEmployeesEmployeeIdDocuments
     * @summary Add document to employee
     * @request POST:/hris/employees/{employee_id}/documents
     * @secure
     */
    postHrisEmployeesEmployeeIdDocuments: (
      employeeId: PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId,
      data: PostHrisEmployeesEmployeeIdDocumentsRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostHrisEmployeesEmployeeIdDocumentsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/employees/${employeeId}/documents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get employee document categories. Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
     *
     * @tags Unified HRIS API
     * @name GetHrisEmployeeDocumentCategories
     * @summary Get employee document categories
     * @request GET:/hris/employee-document-categories
     * @secure
     */
    getHrisEmployeeDocumentCategories: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetHrisEmployeeDocumentCategoriesParameterCursor;
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetHrisEmployeeDocumentCategoriesParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisEmployeeDocumentCategoriesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisEmployeeDocumentCategoriesParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisEmployeeDocumentCategoriesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/employee-document-categories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the teams. <Warning> **This endpoint is deprecated!** Please use [the `/groups` endpoint](/hris/v1/get-groups) instead. It returns the same data but the naming makes more sense as the model not only includes teams but also departments and cost centers.. </Warning> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetHrisTeamsParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetHrisTeamsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisTeamsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisTeamsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisTeamsParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisTeamsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/teams`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all "groups" (teams, departments, and cost centers). Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetHrisGroupsParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetHrisGroupsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisGroupsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisGroupsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisGroupsParameterRemoteIds;
        /**
         * Filter by a comma-separated list of group types: `DEPARTMENT`, `TEAM`, `COST_CENTER`, or `null` to filter groups without a type.
         *
         * Leave this blank to get results matching all values.
         */
        types?: GetHrisGroupsParameterTypes;
        /** Filter by the `name` field. Can be used to find a group by keywords present in the group name. */
        name_contains?: GetHrisGroupsParameterNameContains;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisGroupsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/groups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all employments. Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetHrisEmploymentsParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetHrisEmploymentsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisEmploymentsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisEmploymentsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisEmploymentsParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisEmploymentsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/employments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all work locations. Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
     *
     * @tags Unified HRIS API
     * @name GetHrisLocations
     * @summary Get work locations
     * @request GET:/hris/locations
     * @secure
     */
    getHrisLocations: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetHrisLocationsParameterCursor;
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetHrisLocationsParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetHrisLocationsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisLocationsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisLocationsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisLocationsParameterRemoteIds;
        /** Filter by the `name` field. Can be used to find a location by keywords present in the location name. */
        name_contains?: GetHrisLocationsParameterNameContains;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisLocationsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/locations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all absence types. Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetHrisAbsenceTypesParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetHrisAbsenceTypesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisAbsenceTypesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisAbsenceTypesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisAbsenceTypesParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisAbsenceTypesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/absence-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all time off balances. Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetHrisTimeOffBalancesParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
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
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisTimeOffBalancesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/time-off-balances`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all absences. Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetHrisAbsencesParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetHrisAbsencesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisAbsencesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisAbsencesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisAbsencesParameterRemoteIds;
        /** Filter for all the absences that either start _or_ haven't ended yet on/after this day. If you imagine a calendar displaying absences, this defines the left-most visible day. This is a plain date (i.e., `yyyy-MM-dd`), all time information is discarded. */
        date_from?: GetHrisAbsencesParameterDateFrom;
        /** Filter for absences that start on or before this day (but might continue after). If you imagine a calendar displaying absences, this defines the right-most visible day. This is a plain date (i.e., `yyyy-MM-dd`), all time information is discarded. */
        date_until?: GetHrisAbsencesParameterDateUntil;
        /** Filter by a comma-separated list of absence type IDs. */
        type_ids?: GetHrisAbsencesParameterTypeIds;
        /** Filter by a specific employee using their ID. */
        employee_id?: GetHrisAbsencesParameterEmployeeId;
        /** **(⚠️ Deprecated - Use the `date_from` filter instead.)** Filter for absences that either start after or start before and end after a certain time. */
        time_from?: GetHrisAbsencesParameterTimeFrom;
        /** **(⚠️ Deprecated - Use the `date_until` filter instead.)** Filter for absences that start before a certain time. */
        time_until?: GetHrisAbsencesParameterTimeUntil;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisAbsencesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/absences`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new absence. Check [this page](/hris/features/creating-absences) for a detailed guide. <Note> This endpoint requires the permission **Manage absences** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "wXJMxwDvPAjrJ4CyqdV9", "absence_type_id": "3YKtQ7qedsrcCady1jSyAkY1", "start_date": "2019-09-17", "end_date": "2019-09-21", "start_time": "08:30:00", "end_time": "16:00:00", "start_half_day": false, "end_half_day": false, "employee_note": "Visiting the aliens" } ```
     *
     * @tags Unified HRIS API
     * @name PostHrisAbsences
     * @summary Create absence
     * @request POST:/hris/absences
     * @secure
     */
    postHrisAbsences: (
      data: PostHrisAbsencesRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostHrisAbsencesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/absences`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteHrisAbsencesAbsenceIdPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/absences/${absenceId}`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all legal entites. Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetHrisLegalEntitiesParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetHrisLegalEntitiesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisLegalEntitiesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisLegalEntitiesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisLegalEntitiesParameterRemoteIds;
        /** Filter by the `name` field. Can be used to find a legal entity by keywords present in the legal entity name. */
        name_contains?: GetHrisLegalEntitiesParameterNameContains;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisLegalEntitiesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/legal-entities`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get timesheets Retrieve attendance data and timesheets from HRIS tools. <Warning>**Open Beta Feature:** This endpoint is currently in beta. Please reach out to our support team if you need assistance with implementation.</Warning> For a detailed explanation of the data model, validation rules, time zones, payable hours, approvals, and break patterns, see the [Time & Attendance guide](/hris/features/time-and-attendance). Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
     *
     * @tags Unified HRIS API
     * @name GetHrisTimesheets
     * @summary Get timesheets
     * @request GET:/hris/timesheets
     * @secure
     */
    getHrisTimesheets: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetHrisTimesheetsParameterCursor;
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetHrisTimesheetsParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetHrisTimesheetsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisTimesheetsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisTimesheetsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisTimesheetsParameterRemoteIds;
        /** Returns timesheets for a specific employee. */
        employee_id?: GetHrisTimesheetsParameterEmployeeId;
        /** Return timesheets whose start time is before the given timestamp. */
        started_before?: GetHrisTimesheetsParameterStartedBefore;
        /** Return timesheets whose start time is on or after the given timestamp. */
        started_after?: GetHrisTimesheetsParameterStartedAfter;
        /** Return timesheets whose end time is on or before the given timestamp. */
        ended_before?: GetHrisTimesheetsParameterEndedBefore;
        /** Return timesheets whose end time is on or after the given timestamp. */
        ended_after?: GetHrisTimesheetsParameterEndedAfter;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisTimesheetsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/timesheets`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get performance review cycles Retrieve performance review cycles data from HRIS tools. <Warning>**Open Beta Feature:** This endpoint is currently in beta. Please reach out to our support team if you need assistance with implementation.</Warning> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
     *
     * @tags Unified HRIS API
     * @name GetHrisPerformanceReviewCycles
     * @summary Get performance review cycles
     * @request GET:/hris/performance-review-cycles
     * @secure
     */
    getHrisPerformanceReviewCycles: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetHrisPerformanceReviewCyclesParameterCursor;
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetHrisPerformanceReviewCyclesParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetHrisPerformanceReviewCyclesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisPerformanceReviewCyclesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisPerformanceReviewCyclesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisPerformanceReviewCyclesParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisPerformanceReviewCyclesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/performance-review-cycles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get performance reviews Retrieve performance review data from HRIS tools. <Warning>**Open Beta Feature:** This endpoint is currently in beta. Please reach out to our support team if you need assistance with implementation.</Warning> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
     *
     * @tags Unified HRIS API
     * @name GetHrisPerformanceReviews
     * @summary Get performance reviews
     * @request GET:/hris/performance-reviews
     * @secure
     */
    getHrisPerformanceReviews: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetHrisPerformanceReviewsParameterCursor;
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetHrisPerformanceReviewsParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetHrisPerformanceReviewsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisPerformanceReviewsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisPerformanceReviewsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisPerformanceReviewsParameterRemoteIds;
        /**
         * Filter by a comma-separated list of `MANAGER`, `DIRECT_REPORT`, `PEER`, `SELF`
         *
         * Leave this blank to get results matching all values.
         */
        types?: GetHrisPerformanceReviewsParameterTypes;
        /** Filter by a comma-separated list of review cycle IDs. */
        review_cycle_ids?: GetHrisPerformanceReviewsParameterReviewCycleIds;
        /** Filter by a comma-separated list of reviewee IDs. */
        reviewee_ids?: GetHrisPerformanceReviewsParameterRevieweeIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisPerformanceReviewsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/performance-reviews`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get skills <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning> Retrieve all skills available in the HRIS system. Skills are available on employees and job positions.
     *
     * @tags Unified HRIS API
     * @name GetHrisSkills
     * @summary Get skills
     * @request GET:/hris/skills
     * @secure
     */
    getHrisSkills: (
      query?: {
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisSkillsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisSkillsParameterRemoteIds;
        /** Filter by the `name` field. Can be used to find a skills by keywords present in the skill name. */
        name_contains?: GetHrisSkillsParameterNameContains;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisSkillsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/skills`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create skill <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning> Create a new skill in the HRIS system with specified name and levels. Refer to our coverage grid for support of levels.
     *
     * @tags Unified HRIS API
     * @name PostHrisSkills
     * @summary Create skill
     * @request POST:/hris/skills
     * @secure
     */
    postHrisSkills: (
      data: PostHrisSkillsRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostHrisSkillsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/skills`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update skill <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning> Update an existing skill in the HRIS system.
     *
     * @tags Unified HRIS API
     * @name PatchHrisSkillsSkillId
     * @summary Update skill
     * @request PATCH:/hris/skills/{skill_id}
     * @secure
     */
    patchHrisSkillsSkillId: (
      skillId: PatchHrisSkillsSkillIdParameterSkillId,
      data: PatchHrisSkillsSkillIdRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PatchHrisSkillsSkillIdPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/skills/${skillId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete skill <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning> Delete a skill from the HRIS system.
     *
     * @tags Unified HRIS API
     * @name DeleteHrisSkillsSkillId
     * @summary Delete skill
     * @request DELETE:/hris/skills/{skill_id}
     * @secure
     */
    deleteHrisSkillsSkillId: (
      skillId: DeleteHrisSkillsSkillIdParameterSkillId,
      data: DeleteHrisSkillsSkillIdRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteHrisSkillsSkillIdPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/skills/${skillId}`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get employee skill assignments <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning> Retrieve all employee skill assignments. These represent the skills that employees possess and their current proficiency levels.
     *
     * @tags Unified HRIS API
     * @name GetHrisEmployeeSkillAssignments
     * @summary Get employee skill assignments
     * @request GET:/hris/employee-skill-assignments
     * @secure
     */
    getHrisEmployeeSkillAssignments: (
      query?: {
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisEmployeeSkillAssignmentsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisEmployeeSkillAssignmentsParameterRemoteIds;
        /** Filter by a comma-separated list of employee IDs. */
        employee_ids?: GetHrisEmployeeSkillAssignmentsParameterEmployeeIds;
        /** Filter by a comma-separated list of skill IDs. */
        skill_ids?: GetHrisEmployeeSkillAssignmentsParameterSkillIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisEmployeeSkillAssignmentsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/employee-skill-assignments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create employee skill assignment <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning> Assign a skill to an employee with a specified skill level.
     *
     * @tags Unified HRIS API
     * @name PostHrisEmployeeSkillAssignments
     * @summary Create employee skill assignment
     * @request POST:/hris/employee-skill-assignments
     * @secure
     */
    postHrisEmployeeSkillAssignments: (
      data: PostHrisEmployeeSkillAssignmentsRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostHrisEmployeeSkillAssignmentsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/employee-skill-assignments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update employee skill assignment <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning> Update the skill level for an employee skill assignment.
     *
     * @tags Unified HRIS API
     * @name PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId
     * @summary Update employee skill assignment
     * @request PATCH:/hris/employee-skill-assignments/{employee_skill_assignment_id}
     * @secure
     */
    patchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId: (
      employeeSkillAssignmentId: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId,
      data: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/employee-skill-assignments/${employeeSkillAssignmentId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete employee skill assignment <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning> Remove a skill assignment from an employee.
     *
     * @tags Unified HRIS API
     * @name DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId
     * @summary Delete employee skill assignment
     * @request DELETE:/hris/employee-skill-assignments/{employee_skill_assignment_id}
     * @secure
     */
    deleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId: (
      employeeSkillAssignmentId: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId,
      data: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/employee-skill-assignments/${employeeSkillAssignmentId}`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get job positions <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning> Retrieve all job positions from the HRIS system. Job positions represent the organizational structure and include information about required skills, department, location, and reporting relationships.
     *
     * @tags Unified HRIS API
     * @name GetHrisJobPositions
     * @summary Get job positions
     * @request GET:/hris/job-positions
     * @secure
     */
    getHrisJobPositions: (
      query?: {
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetHrisJobPositionsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisJobPositionsParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisJobPositionsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "HRIS.EMPLOYEE_ALREADY_EXISTS"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/hris/job-positions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  ats = {
    /**
     * @description Retrieve all applications. Visit our in-depth guides to learn more about: - 💡 [Being aware of which applications are tracked](/ats/features/implementation-guide/tracking-created-applications#be-aware-of-which-applications-are-tracked) - 🚦 [Hiring signals](/ats/features/implementation-guide/tracking-created-applications#hiring-signals) - 📈 [Application stage changes](/ats/features/implementation-guide/tracking-created-applications#application-stage-changes) - ❓ [ATS-specific limitations](/ats/features/implementation-guide/tracking-created-applications#ats-specific-limitations) Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetAtsApplicationsParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetAtsApplicationsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsApplicationsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAtsApplicationsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsApplicationsParameterRemoteIds;
        /** **(⚠️ Deprecated - Use the `outcomes` filter instead.)** Filter applications by outcome. This allows you to get applications that are for example `PENDING`, `HIRED`, or `DECLINED`. */
        outcome?: GetAtsApplicationsParameterOutcome;
        /**
         * Filter by a comma-separated list of `PENDING`, `HIRED`, `DECLINED`
         * * `PENDING`: The application is still being processed.
         * * `HIRED`: The candidate was hired.
         * * `DECLINED`: The candidate was declined.
         *
         *
         * Leave this blank to get results matching all values.
         */
        outcomes?: GetAtsApplicationsParameterOutcomes;
        /** Filter by a comma-separated list of job IDs. We will only return applications that are related to _any_ of the jobs. */
        job_ids?: GetAtsApplicationsParameterJobIds;
        /** Filter by a comma-separated list of job remote IDs. We will only return applications that are related to _any_ of the jobs. */
        job_remote_ids?: GetAtsApplicationsParameterJobRemoteIds;
        /** Filter by a comma-separated list of application stage IDs. We will only return applications that are currently in _any_ of the stages. */
        current_stage_ids?: GetAtsApplicationsParameterCurrentStageIds;
        /** Filter applications by the day they were created in the remote system. This allows you to get applications that were created on or after a certain day. */
        remote_created_after?: GetAtsApplicationsParameterRemoteCreatedAfter;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsApplicationsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/applications`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Moves an application to a specified stage. Use job-specific stages from GET /jobs, not the deprecated /application-stages endpoint. <Note> This endpoint requires the permission **Set application stage** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "stage_id": "3PJ8PZhZZa1eEdd2DtPNtVup" } ```
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
      params: RequestParams = {},
    ) =>
      this.request<
        PutAtsApplicationsApplicationIdStagePositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/applications/${applicationId}/stage`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a result link to an application. This can, for example, be used to link a candidate back to a test result/assessment in your application. As not all ATS tools have a "result link" feature, we sometimes repurpose other fields to expose it. <Note> This endpoint requires the permission **Add result links** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "application_id": "8Xi6iZrwusZqJmDGXs49GBmJ", "label": "Assessment Result", "url": "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG", "details": { "custom_field_name_prefix": "Acme:", "attributes": [ { "key": "Score", "value": "100%" }, { "key": "Time", "value": "2:30h" } ] }, "remote_fields": {} } ```
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
      params: RequestParams = {},
    ) =>
      this.request<
        PostAtsApplicationsApplicationIdResultLinksPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/applications/${applicationId}/result-links`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a note to an application. Add extra information to an application. This can be any extra text information you want to add to an application. <Note> This endpoint requires the permission **Add notes** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "content": "A new message from the candidate is available in YourChat!", "content_type": "PLAIN_TEXT", "remote_fields": {} } ```
     *
     * @tags Unified ATS API
     * @name PostAtsApplicationsApplicationIdNotes
     * @summary Add note to application
     * @request POST:/ats/applications/{application_id}/notes
     * @secure
     */
    postAtsApplicationsApplicationIdNotes: (
      applicationId: PostAtsApplicationsApplicationIdNotesParameterApplicationId,
      data: PostAtsApplicationsApplicationIdNotesRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostAtsApplicationsApplicationIdNotesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/applications/${applicationId}/notes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get attachments from a candidate or application. Get attachments from an application. If the ATS stores the attachments on the candidate, it will get the attachments from the corresponding candidate instead. <Note> This endpoint requires the permission **Read document attachments** to be enabled in [your scope config](/scopes). </Note>
     *
     * @tags Unified ATS API
     * @name GetAtsApplicationsApplicationIdAttachments
     * @summary Get application attachments
     * @request GET:/ats/applications/{application_id}/attachments
     * @secure
     */
    getAtsApplicationsApplicationIdAttachments: (
      applicationId: GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId,
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsApplicationsApplicationIdAttachmentsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/applications/${applicationId}/attachments`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Uploads an attachment file for the specified applicant. <Warning> If adding an attachment to an application is not supported by the integration, the attachment will be [added to the candidate](/ats/v1/post-candidates-candidate-id-attachments) instead. </Warning> <Note> This endpoint requires the permission **Add attachments** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "application_id": "GRKdd9dibYKKCrmGRSMJf3wu", "attachment": { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" }, "remote_fields": {} } ```
     *
     * @tags Unified ATS API
     * @name PostAtsApplicationsApplicationIdAttachments
     * @summary Add attachment to application
     * @request POST:/ats/applications/{application_id}/attachments
     * @secure
     */
    postAtsApplicationsApplicationIdAttachments: (
      applicationId: PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId,
      data: PostAtsApplicationsApplicationIdAttachmentsRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostAtsApplicationsApplicationIdAttachmentsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/applications/${applicationId}/attachments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Rejects an application with a provided reason. Rejects an application with a provided reason. Optionally, you can provide a free text note. You can get the list of rejection reasons with our [Get rejection reasons endpoint](/ats/v1/get-rejection-reasons). <Note> This endpoint requires the permission **Reject applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "rejection_reason_id": "3PJ8PZhZZa1eEdd2DtPNtVup", "note": "Candidate was a great culture fit but didn't bring the hard skills we need.", "remote_fields": {} } ```
     *
     * @tags Unified ATS API
     * @name PostAtsApplicationsApplicationIdReject
     * @summary Reject application
     * @request POST:/ats/applications/{application_id}/reject
     * @secure
     */
    postAtsApplicationsApplicationIdReject: (
      applicationId: PostAtsApplicationsApplicationIdRejectParameterApplicationId,
      data: PostAtsApplicationsApplicationIdRejectRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostAtsApplicationsApplicationIdRejectPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/applications/${applicationId}/reject`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create interview <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning>
     *
     * @tags Unified ATS API
     * @name PostAtsApplicationsApplicationIdInterviews
     * @summary Create interview
     * @request POST:/ats/applications/{application_id}/interviews
     * @secure
     */
    postAtsApplicationsApplicationIdInterviews: (
      applicationId: PostAtsApplicationsApplicationIdInterviewsParameterApplicationId,
      data: PostAtsApplicationsApplicationIdInterviewsRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostAtsApplicationsApplicationIdInterviewsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/applications/${applicationId}/interviews`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update interview <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning>
     *
     * @tags Unified ATS API
     * @name PatchAtsApplicationsApplicationIdInterviews
     * @summary Update interview
     * @request PATCH:/ats/applications/{application_id}/interviews
     * @secure
     */
    patchAtsApplicationsApplicationIdInterviews: (
      applicationId: PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId,
      data: PatchAtsApplicationsApplicationIdInterviewsRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PatchAtsApplicationsApplicationIdInterviewsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/applications/${applicationId}/interviews`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all candidates. Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetAtsCandidatesParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetAtsCandidatesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsCandidatesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAtsCandidatesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsCandidatesParameterRemoteIds;
        /** Filter the candidates based on an email address. When set, returns only the candidates where the given `email` is in `email_addresses`. This filter is case-insensitive. */
        email?: GetAtsCandidatesParameterEmail;
        /** Filter by a comma-separated list of job IDs. We will only return candidates that have applied to _any_ of the jobs. */
        job_ids?: GetAtsCandidatesParameterJobIds;
        /** Filter candidates by first name. This filter is case-insensitive and matches the exact first name. Fuzzy matching might be enabled in the future, so consider this for your implementation. */
        first_name?: GetAtsCandidatesParameterFirstName;
        /** Filter candidates by last name. This filter is case-insensitive and matches the exact last name. Fuzzy matching might be enabled in the future, so consider this for your implementation. */
        last_name?: GetAtsCandidatesParameterLastName;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsCandidatesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/candidates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new candidate and application for the specified job. <Warning> **We recommend using the [Create application](/ats/v1/post-jobs-job-id-applications) endpoint instead.** We realized that in practice it was always more about creating _applications_ instead of _candidates_, so we created a new, more aptly named one that you should use instead: [Create application](/ats/v1/post-jobs-job-id-applications) Using it also has the benefit that we return the newly created applicant at the root level, so you can easily store its ID. </Warning> <Note> This endpoint requires the permission **Create applications and candidates** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "candidate": { "first_name": "Frank", "last_name": "Doe", "company": "Acme Inc.", "title": "Head of Integrations", "email_address": "frank.doe@example.com", "phone_number": "+1-541-754-3010", "gender": "MALE", "salary_expectations": { "amount": 100000, "period": "YEAR" }, "availability_date": "2021-01-01", "location": { "city": "New York", "country": "US", "state": "NY" }, "social_links": [ { "url": "https://www.linkedin.com/in/frank-doe-123456789/" }, { "url": "https://twitter.com/frankdoe" } ] }, "application": { "job_id": "BDpgnpZ148nrGh4mYHNxJBgx", "stage_id": "8x3YKRDcuRnwShdh96ShBNn1" }, "attachments": [ { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } ], "screening_question_answers": [ { "question_id": "3phFBNXRweGnDmsU9o2vdPuQ", "answer": "Yes" }, { "question_id": "EYJjhMQT3LtVKXnTbnRT8s6U", "answer": [ "GUzE666zfyjeoCJX6A8n7wh6", "5WPHzzKAv8cx97KtHRUV96U8", "7yZfKGzWigXxxRTygqAfHvyE" ] } ], "remote_fields": {} } ```
     *
     * @tags Unified ATS API
     * @name PostAtsCandidates
     * @summary Create candidate
     * @request POST:/ats/candidates
     * @secure
     */
    postAtsCandidates: (
      data: PostAtsCandidatesRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostAtsCandidatesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/candidates`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get attachments from a candidate, including all attachments of all of their applications. <Note> This endpoint requires the permission **Read document attachments** to be enabled in [your scope config](/scopes). </Note>
     *
     * @tags Unified ATS API
     * @name GetAtsCandidatesCandidateIdAttachments
     * @summary Get candidate attachments
     * @request GET:/ats/candidates/{candidate_id}/attachments
     * @secure
     */
    getAtsCandidatesCandidateIdAttachments: (
      candidateId: GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId,
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsCandidatesCandidateIdAttachmentsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/candidates/${candidateId}/attachments`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Uploads an attachment file for the specified candidate. <Warning> **We recommend using the [add attachment to application](/ats/v1/post-applications-application-id-attachments) endpoint instead.** We realized that in practice it was always more about adding attachments to _applications_ instead of _candidates_, so we created a new, more aptly named one that you should use instead: [add attachment to application](/ats/v1/post-applications-application-id-attachments) </Warning> <Note> This endpoint requires the permission **Add attachments** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "candidate_id": "GRKdd9dibYKKCrmGRSMJf3wu", "attachment": { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } } ```
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
      params: RequestParams = {},
    ) =>
      this.request<
        PostAtsCandidatesCandidateIdAttachmentsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/candidates/${candidateId}/attachments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a result link to a candidate. <Warning> **We recommend to use [add result link to application](/ats/v1/post-applications-application-id-result-links) instead.** This can, for example, be used to link a candidate back to a test result/assessment in your application. As not all ATS tools have a "result link" feature, we sometimes repurpose other fields to expose it. </Warning> <Note> This endpoint requires the permission **Add result links** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "label": "Assessment Result", "url": "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG", "details": { "custom_field_name_prefix": "Acme:", "attributes": [ { "key": "Score", "value": "100%" }, { "key": "Time", "value": "2:30h" } ] }, "remote_fields": {} } ```
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
      params: RequestParams = {},
    ) =>
      this.request<
        PostAtsCandidatesCandidateIdResultLinksPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/candidates/${candidateId}/result-links`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a tag to a candidate. Kombo takes care of creating the tag if required, finding out the right ID, and appending it to the list of tags. <Note> This endpoint requires the permission **Manage tags** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "tag": { "name": "Excellent Fit" } } ```
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
      params: RequestParams = {},
    ) =>
      this.request<
        PostAtsCandidatesCandidateIdTagsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/candidates/${candidateId}/tags`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Remove a tag from a candidate based on its name. This will also succeed if the tag does not exist on the candidate. <Note> This endpoint requires the permission **Manage tags** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "tag": { "name": "Excellent Fit" } } ```
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
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteAtsCandidatesCandidateIdTagsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/candidates/${candidateId}/tags`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all tags. Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetAtsTagsParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetAtsTagsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsTagsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAtsTagsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsTagsParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsTagsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/tags`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all application stages available in the ATS. <Warning> **This endpoint is deprecated!** Get all application stages available in the ATS. This is deprecated because most ATS systems have separate sets of stages for each job. We'd recommend using the `stages` property from the [GET Jobs endpoint](/ats/v1/get-jobs) instead. **Important**: Using global stages can cause "Stage not found" errors when moving applications, especially with systems like Workable that have job-specific stages. [Moving Applications Guide](/ats/implementation-guide/moving-and-rejecting-candidates). </Warning> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetAtsApplicationStagesParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetAtsApplicationStagesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsApplicationStagesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAtsApplicationStagesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsApplicationStagesParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsApplicationStagesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/application-stages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all jobs. Visit our in-depth guides to learn more about: - 🔄 [Getting updates of the data](/ats/features/implementation-guide/reading-jobs#getting-updates-of-the-data) - ❗ [Handling failing syncs](/ats/features/implementation-guide/reading-jobs#handling-failing-syncs) - 🔍 [Letting your customer choose which jobs to expose](/ats/features/implementation-guide/reading-jobs#let-your-customer-choose-which-jobs-to-expose-to-you) - 🔗 [Matching jobs in your database to ATS jobs](/ats/features/implementation-guide/reading-jobs#match-jobs-in-your-database-to-ats-jobs) - 🗑️ [Reacting to deleted/closed jobs](/ats/features/implementation-guide/reading-jobs#reacting-to-deleted-closed-jobs) Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetAtsJobsParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetAtsJobsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsJobsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAtsJobsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsJobsParameterRemoteIds;
        /** Filter by a comma-separated list of job codes. */
        job_codes?: GetAtsJobsParameterJobCodes;
        /** Filter by the `post_url` field. Can be used to find a job based on its public posting URL. */
        post_url?: GetAtsJobsParameterPostUrl;
        /** **(⚠️ Deprecated - Use the `statuses` filter instead.)** Filter by the `status` field. Can be used to find a job based on its status. */
        status?: GetAtsJobsParameterStatus;
        /**
         * Filter by a comma-separated list of `OPEN`, `CLOSED`, `DRAFT`, `ARCHIVED`
         *
         * Leave this blank to get results matching all values.
         */
        statuses?: GetAtsJobsParameterStatuses;
        /**
         * Filter by a comma-separated list of `FULL_TIME`, `PART_TIME`, `CONTRACT`, `SEASONAL`, `INTERNSHIP`
         *
         * Leave this blank to get results matching all values.
         */
        employment_types?: GetAtsJobsParameterEmploymentTypes;
        /**
         * Filter by a comma-separated list of `PUBLIC`, `INTERNAL`, `UNLISTED`, `CONFIDENTIAL`
         *
         * Leave this blank to get results matching all values.
         */
        visibilities?: GetAtsJobsParameterVisibilities;
        /** Filter jobs by the day they were created in the remote system. This allows you to get jobs that were created on or after a certain day. */
        remote_created_after?: GetAtsJobsParameterRemoteCreatedAfter;
        /** Filter by the `name` field. Can be used to find a job by keywords present in the job name. */
        name_contains?: GetAtsJobsParameterNameContains;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsJobsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new application and candidate for the specified job. Visit our in-depth guides to learn more about: - 🌐 [Setting the source of the application](/ats/features/implementation-guide/creating-applications#set-the-source-of-the-application) - 📎 [Uploading attachments with the application](/ats/features/implementation-guide/creating-applications#upload-attachments-with-the-application) - ♻️ [Retry behaviour](/ats/features/implementation-guide/creating-applications#retry-behaviour) - ✏️ [Writing answers to screening questions](/ats/features/implementation-guide/creating-applications#write-answers-to-screening-questions) - ⚠️ [Handling ATS-specific limitations](/ats/features/implementation-guide/creating-applications#handle-ats-specific-limitations) <Note> This endpoint requires the permission **Create applications and candidates** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "candidate": { "first_name": "Frank", "last_name": "Doe", "company": "Acme Inc.", "title": "Head of Integrations", "email_address": "frank.doe@example.com", "phone_number": "+1-541-754-3010", "gender": "MALE", "salary_expectations": { "amount": 100000, "period": "YEAR" }, "availability_date": "2021-01-01", "location": { "city": "New York", "country": "US" } }, "stage_id": "8x3YKRDcuRnwShdh96ShBNn1", "attachments": [ { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } ], "screening_question_answers": [ { "question_id": "3phFBNXRweGnDmsU9o2vdPuQ", "answer": "Yes" }, { "question_id": "EYJjhMQT3LtVKXnTbnRT8s6U", "answer": [ "GUzE666zfyjeoCJX6A8n7wh6", "5WPHzzKAv8cx97KtHRUV96U8", "7yZfKGzWigXxxRTygqAfHvyE" ] } ], "remote_fields": {} } ```
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
      params: RequestParams = {},
    ) =>
      this.request<
        PostAtsJobsJobIdApplicationsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/jobs/${jobId}/applications`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all users. Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetAtsUsersParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetAtsUsersParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsUsersParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAtsUsersParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsUsersParameterRemoteIds;
        /** Filter by a comma-separated list of emails. We will only return users who have _any_ of the emails. The format of the emails is case-insensitive. */
        emails?: GetAtsUsersParameterEmails;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsUsersPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all offers. Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
     *
     * @tags Unified ATS API
     * @name GetAtsOffers
     * @summary Get offers
     * @request GET:/ats/offers
     * @secure
     */
    getAtsOffers: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetAtsOffersParameterCursor;
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetAtsOffersParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetAtsOffersParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsOffersParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAtsOffersParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsOffersParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsOffersPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/offers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all rejection reasons. Get all rejection reasons available in the system. The Kombo ID is required in the associated [reject application action](/ats/v1/post-applications-application-id-reject). Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
     *
     * @tags Unified ATS API
     * @name GetAtsRejectionReasons
     * @summary Get rejection reasons
     * @request GET:/ats/rejection-reasons
     * @secure
     */
    getAtsRejectionReasons: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetAtsRejectionReasonsParameterCursor;
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetAtsRejectionReasonsParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetAtsRejectionReasonsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsRejectionReasonsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAtsRejectionReasonsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsRejectionReasonsParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsRejectionReasonsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/rejection-reasons`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all interviews. Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
     *
     * @tags Unified ATS API
     * @name GetAtsInterviews
     * @summary Get interviews
     * @request GET:/ats/interviews
     * @secure
     */
    getAtsInterviews: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetAtsInterviewsParameterCursor;
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetAtsInterviewsParameterPageSize;
        /**
         * Filter the entries based on the modification date in format `YYYY-MM-DDTHH:mm:ss.sssZ`. Returns records where either the record itself **OR** its nested data has been updated since this timestamp, even if the record's own `changed_at` field remains unchanged.
         *
         * If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
         *
         * For more details, see [Understanding changed_at vs updated_after Behavior](https://docs.kombo.dev/ats/getting-started/fetching-data#understanding-changed_at-vs-updated_after-behavior).
         */
        updated_after?: GetAtsInterviewsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsInterviewsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAtsInterviewsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsInterviewsParameterRemoteIds;
        /** Filter by a comma-separated list of job IDs. We will only return interviews for applications associated with any of these jobs. */
        job_ids?: GetAtsInterviewsParameterJobIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsInterviewsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/interviews`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unified ATS API
     * @name GetAtsActionsAtsCreateCandidate
     * @request GET:/ats/actions/ats_create_candidate
     * @secure
     */
    getAtsActionsAtsCreateCandidate: (params: RequestParams = {}) =>
      this.request<
        GetAtsActionsAtsCreateCandidatePositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/actions/ats_create_candidate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unified ATS API
     * @name GetAtsActionsAtsCreateApplication
     * @request GET:/ats/actions/ats_create_application
     * @secure
     */
    getAtsActionsAtsCreateApplication: (params: RequestParams = {}) =>
      this.request<
        GetAtsActionsAtsCreateApplicationPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/actions/ats_create_application`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unified ATS API
     * @name GetAtsActionsAtsAddApplicationAttachment
     * @request GET:/ats/actions/ats_add_application_attachment
     * @secure
     */
    getAtsActionsAtsAddApplicationAttachment: (params: RequestParams = {}) =>
      this.request<
        GetAtsActionsAtsAddApplicationAttachmentPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/actions/ats_add_application_attachment`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unified ATS API
     * @name GetAtsActionsAtsAddCandidateAttachment
     * @request GET:/ats/actions/ats_add_candidate_attachment
     * @secure
     */
    getAtsActionsAtsAddCandidateAttachment: (params: RequestParams = {}) =>
      this.request<
        GetAtsActionsAtsAddCandidateAttachmentPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/actions/ats_add_candidate_attachment`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Import tracked application Retroactively import existing applications into Kombo's tracking system. This is particularly useful if you have enabled the 'sync only created applications' setting and want to start tracking applications that were created before using Kombo. To import an application, you'll need to provide specific identifiers based on the ATS. The available `id_type` values are defined by Kombo based on the tool's API capabilities. Please reach out to Kombo support if you require further types to be supported. Once imported, Kombo will automatically fetch and update the application's complete data during the next sync. ### Example Request Body ```json { "tracked_at": "2024-04-12T14:33:47.000Z", "successfactors": { "id_type": "application_remote_id", "application_remote_id": "1224042" } } ```
     *
     * @tags Unified ATS API
     * @name PostAtsImportTrackedApplication
     * @summary Import tracked application
     * @request POST:/ats/import-tracked-application
     * @secure
     */
    postAtsImportTrackedApplication: (
      data: PostAtsImportTrackedApplicationRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostAtsImportTrackedApplicationPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ats/import-tracked-application`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  assessment = {
    /**
     * @description Get all available assessment and background check packages for an integration. This is mainly intended for debugging. As you always need to submit the full list of available packages when using ["set packages"](/assessment/v1/put-packages), there shouldn't ever be a need to call this endpoint in production.
     *
     * @tags Unified ATS (Assessment & Background Check) API
     * @name GetAssessmentPackages
     * @summary Get packages
     * @request GET:/assessment/packages
     * @secure
     */
    getAssessmentPackages: (params: RequestParams = {}) =>
      this.request<
        GetAssessmentPackagesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/assessment/packages`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Set packages Replaces the list of available assessment and or background check packages. Packages that have been previously submitted through this endpoint but aren't included again will be marked as deleted. ### Example Request Body ```json { "packages": [ { "id": "1001", "type": "SKILLS_TEST", "name": "TypeScript", "description": "TypeScript coding skills assessments" }, { "id": "1002", "type": "VIDEO_INTERVIEW", "name": "Video Interview", "description": "Video interview to assess communication skills" } ] } ```
     *
     * @tags Unified ATS (Assessment & Background Check) API
     * @name PutAssessmentPackages
     * @summary Set packages
     * @request PUT:/assessment/packages
     * @secure
     */
    putAssessmentPackages: (
      data: PutAssessmentPackagesRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PutAssessmentPackagesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/assessment/packages`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all open assessment and background check orders of an integration.
     *
     * @tags Unified ATS (Assessment & Background Check) API
     * @name GetAssessmentOrdersOpen
     * @summary Get open orders
     * @request GET:/assessment/orders/open
     * @secure
     */
    getAssessmentOrdersOpen: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetAssessmentOrdersOpenParameterCursor;
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetAssessmentOrdersOpenParameterPageSize;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAssessmentOrdersOpenPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/assessment/orders/open`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates an assessment or a background check order result. ### Example Request Body ```json { "status": "COMPLETED", "score": 90, "max_score": 100, "result_url": "https://example.com", "completed_at": "2023-04-04T00:00:00.000Z", "attributes": [ { "type": "TEXT", "label": "Role fit", "value": "Excellent" }, { "type": "SUB_RESULT", "id": "<YOUR_INTERNAL_ID_OF_THE_TEST>", "label": "Personality test", "score": { "value": 97, "max": 100 }, "status": "COMPLETED" } ], "attachments": [ { "name": "Assessment Report.pdf", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "content_type": "application/pdf" } ] } ```
     *
     * @tags Unified ATS (Assessment & Background Check) API
     * @name PutAssessmentOrdersAssessmentOrderIdResult
     * @summary Update order result
     * @request PUT:/assessment/orders/{assessment_order_id}/result
     * @secure
     */
    putAssessmentOrdersAssessmentOrderIdResult: (
      assessmentOrderId: PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId,
      data: PutAssessmentOrdersAssessmentOrderIdResultRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "INTEGRATION.PERMISSION_MISSING"
              | "INTEGRATION.AUTHENTICATION_INVALID"
              | "INTEGRATION.QA_FAILED"
              | "INTEGRATION.SETUP_SYNC_PENDING"
              | "INTEGRATION.SETUP_INCOMPLETE"
              | "INTEGRATION.INACTIVE"
              | "INTEGRATION.MODEL_NOT_AVAILABLE"
              | "INTEGRATION.MODEL_DISABLED"
              | "INTEGRATION.ACTION_NOT_AVAILABLE"
              | "INTEGRATION.ACTION_DISABLED"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR"
              | "ATS.JOB_CLOSED"
              | "ATS.APPLICATION_ALREADY_EXISTS";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/assessment/orders/${assessmentOrderId}/result`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  lms = {
    /**
     * @description Get users <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning> Retrieve all users from the LMS system. Users are learners who can enroll in and complete courses. The response includes their current progress across all enrolled courses.
     *
     * @tags General
     * @name GetLmsUsers
     * @summary Get users
     * @request GET:/lms/users
     * @secure
     */
    getLmsUsers: (
      query?: {
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetLmsUsersParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetLmsUsersParameterRemoteIds;
        /** Filter users by their work email address. */
        email?: GetLmsUsersParameterEmail;
        /** Filter users by their current status. */
        status?: GetLmsUsersParameterStatus;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetLmsUsersPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/lms/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get courses <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning> Retrieve all courses available in the LMS. Courses are structured learning programs that contain ordered content items and develop specific skills.
     *
     * @tags General
     * @name GetLmsCourses
     * @summary Get courses
     * @request GET:/lms/courses
     * @secure
     */
    getLmsCourses: (
      query?: {
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetLmsCoursesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetLmsCoursesParameterRemoteIds;
        /** Filter by the `title` field. Can be used to find courses by keywords present in the course title. */
        title_contains?: GetLmsCoursesParameterTitleContains;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetLmsCoursesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/lms/courses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create course <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning> Create a new course in the LMS with a title, description, and associated skills. Content items can be added separately using the content endpoints.
     *
     * @tags General
     * @name PostLmsCourses
     * @summary Create course
     * @request POST:/lms/courses
     * @secure
     */
    postLmsCourses: (
      data: PostLmsCoursesRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostLmsCoursesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/lms/courses`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create progress <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning> Create a new progress entry for a user in a course. This records enrollment, completion, scores, and other learning metrics.
     *
     * @tags General
     * @name PostLmsProgress
     * @summary Create progress
     * @request POST:/lms/progress
     * @secure
     */
    postLmsProgress: (
      data: PostLmsProgressRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostLmsProgressPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/lms/progress`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update progress <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning> Update an existing progress entry. Use this to record changes in status, scores, completion dates, or other learning metrics.
     *
     * @tags General
     * @name PatchLmsProgressProgressId
     * @summary Update progress
     * @request PATCH:/lms/progress/{progress_id}
     * @secure
     */
    patchLmsProgressProgressId: (
      progressId: PatchLmsProgressProgressIdParameterProgressId,
      data: PatchLmsProgressProgressIdRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PatchLmsProgressProgressIdPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/lms/progress/${progressId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Add content to course <Warning>**Closed Beta Feature:** This endpoint is currently in closed beta. We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning> Add a new content item to a course. Content items are the building blocks of courses and can be videos, text materials, quizzes, or coaching sessions. They will be added to the end of the course's ordered content list.
     *
     * @tags General
     * @name PostLmsContent
     * @summary Add content to course
     * @request POST:/lms/content
     * @secure
     */
    postLmsContent: (
      data: PostLmsContentRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostLmsContentPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/lms/content`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  aiApply = {
    /**
     * @description Create a career site entry. Career sites are required to be specified when parsing job postings, grouping them under a single entity.
     *
     * @tags AI Apply
     * @name PostAiApplyCareerSites
     * @summary Create a career site
     * @request POST:/ai-apply/career-sites
     * @secure
     */
    postAiApplyCareerSites: (
      data: PostAiApplyCareerSitesRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostAiApplyCareerSitesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ai-apply/career-sites`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all career sites.
     *
     * @tags AI Apply
     * @name GetAiApplyCareerSites
     * @summary Get career sites
     * @request GET:/ai-apply/career-sites
     * @secure
     */
    getAiApplyCareerSites: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetAiApplyCareerSitesParameterCursor;
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetAiApplyCareerSitesParameterPageSize;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAiApplyCareerSitesParameterIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAiApplyCareerSitesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ai-apply/career-sites`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all job postings. To get the application form and submit applications, use the POST /postings/:id/inquire endpoint.
     *
     * @tags AI Apply
     * @name GetAiApplyPostings
     * @summary Get job postings
     * @request GET:/ai-apply/postings
     * @secure
     */
    getAiApplyPostings: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetAiApplyPostingsParameterCursor;
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetAiApplyPostingsParameterPageSize;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAiApplyPostingsParameterIds;
        /** Filter by a comma-separated list of career site IDs such as `A8m9k9RhjNokMfRTWtpQ99VtH,rCbkAA3pvcKjsFYwEeXtCQkc`. */
        career_site_ids?: GetAiApplyPostingsParameterCareerSiteIds;
        /** Filter by a comma-separated list of job codes such as `ACME_13,ACME_14`. */
        job_codes?: GetAiApplyPostingsParameterJobCodes;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAiApplyPostingsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ai-apply/postings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Submit a job posting URL to be parsed asynchronously. Returns ID to track progress.
     *
     * @tags AI Apply
     * @name PostAiApplyPostings
     * @summary Parse a job posting
     * @request POST:/ai-apply/postings
     * @secure
     */
    postAiApplyPostings: (
      data: PostAiApplyPostingsRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostAiApplyPostingsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ai-apply/postings`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Receive the application form (screening questions) for a job posting and a submission token. This endpoint must be called before submitting an application to ensure you have the latest questions and a valid submission token. The submission token is valid for 12 hours and prevents duplicate submissions. The application form may contain conditional questions that are only shown based on answers to previous questions (check the display_when field).
     *
     * @tags AI Apply
     * @name PostAiApplyPostingsPostingIdInquire
     * @summary Inquire about a job posting and the application f…
     * @request POST:/ai-apply/postings/{posting_id}/inquire
     * @secure
     */
    postAiApplyPostingsPostingIdInquire: (
      postingId: PostAiApplyPostingsPostingIdInquireParameterPostingId,
      data: PostAiApplyPostingsPostingIdInquireRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostAiApplyPostingsPostingIdInquirePositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ai-apply/postings/${postingId}/inquire`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Trigger re-parsing of an already parsed job posting.
     *
     * @tags AI Apply
     * @name PostAiApplyPostingsPostingIdParse
     * @summary Re-parse an existing job posting
     * @request POST:/ai-apply/postings/{posting_id}/parse
     * @secure
     */
    postAiApplyPostingsPostingIdParse: (
      postingId: PostAiApplyPostingsPostingIdParseParameterPostingId,
      data: PostAiApplyPostingsPostingIdParseRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostAiApplyPostingsPostingIdParsePositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ai-apply/postings/${postingId}/parse`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Submit a job application using a submission token. The application will be queued and processed asynchronously. Returns ID to track progress and match with webhooks.
     *
     * @tags AI Apply
     * @name PostAiApplyApply
     * @summary Submit job application
     * @request POST:/ai-apply/apply
     * @secure
     */
    postAiApplyApply: (
      data: PostAiApplyApplyRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostAiApplyApplyPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ai-apply/apply`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all applications.
     *
     * @tags AI Apply
     * @name GetAiApplyApplications
     * @summary Get applications
     * @request GET:/ai-apply/applications
     * @secure
     */
    getAiApplyApplications: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetAiApplyApplicationsParameterCursor;
        /** The number of results to return per page. Maximum is 250. */
        page_size?: GetAiApplyApplicationsParameterPageSize;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAiApplyApplicationsParameterIds;
        /** Filter by a comma-separated list of job posting IDs such as `89V6GEKpdZwqbxQz59n1ftFb,kcGHREEXCMF26Yhpuyh1gDVE`. */
        job_posting_ids?: GetAiApplyApplicationsParameterJobPostingIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAiApplyApplicationsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ai-apply/applications`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get jobs in a backwards compatible way as you would [via Kombo's unified API](https://docs.kombo.dev/ats/v1/get-jobs). This is not the recommended way to get jobs with AI Apply.
     *
     * @tags AI Apply
     * @name GetAiApplyUnifiedApiJobs
     * @summary Get jobs
     * @request GET:/ai-apply/unified-api/jobs
     * @secure
     */
    getAiApplyUnifiedApiJobs: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetAiApplyUnifiedApiJobsParameterCursor;
        /** The number of results to return per page. Maximum is 5. */
        page_size?: GetAiApplyUnifiedApiJobsParameterPageSize;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. */
        ids?: GetAiApplyUnifiedApiJobsParameterIds;
        /** This parameter exists for backwards compatibility with Kombo's unified API. Supplying a comma-separated list of remote IDs such as `32,33` will return no jobs because AI Apply does not interface with a remote system that issues remote IDs. */
        remote_ids?: GetAiApplyUnifiedApiJobsParameterRemoteIds;
        /** Filter by a comma-separated list of job codes such as `ACME_12,ACME_14`. */
        job_codes?: GetAiApplyUnifiedApiJobsParameterJobCodes;
        /** Filter by a comma-separated list of career site IDs such as `A8m9k9RhjNokMfRTWtpQ99VtH,rCbkAA3pvcKjsFYwEeXtCQkc`. */
        career_site_ids?: GetAiApplyUnifiedApiJobsParameterCareerSiteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAiApplyUnifiedApiJobsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ai-apply/unified-api/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create applications in a backwards compatible way as you would [via Kombo's unified API](https://docs.kombo.dev/ats/v1/post-jobs-job-id-applications). This is not the recommended way to create applications with AI Apply.
     *
     * @tags AI Apply
     * @name PostAiApplyUnifiedApiJobsJobIdApplications
     * @summary Create application
     * @request POST:/ai-apply/unified-api/jobs/{job_id}/applications
     * @secure
     */
    postAiApplyUnifiedApiJobsJobIdApplications: (
      jobId: PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId,
      data: PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "ATS.JOB_CLOSED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID"
              | "REMOTE.SERVICE_UNAVAILABLE"
              | "REMOTE.RATE_LIMIT_EXCEEDED"
              | "REMOTE.INPUT_INVALID"
              | "REMOTE.UNKNOWN_HTTP_ERROR";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/ai-apply/unified-api/jobs/${jobId}/applications`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  connect = {
    /**
     * @description Generate a unique link that allows your user to enter the embedded Kombo Connect flow. > Check out [our full guide](/connect/embedded-flow) for more details about implementing the connection flow into your app. > Kombo will not deduplicate integrations for you that are created with this endpoint. You are responsible for keeping track of integrations in your system and prevent customers from connecting the same tool again. Use the [reconnection link](/v1/post-integrations-integration-id-relink) endpoint if you want a customer to update their credentials. ### Example Request Body ```json { "end_user_email": "test@example.com", "end_user_organization_name": "Test Inc.", "integration_category": "HRIS", "integration_tool": "personio", "end_user_origin_id": "123", "language": "en", "link_type": "EMBEDDED" } ```
     *
     * @tags Kombo Connect
     * @name PostConnectCreateLink
     * @summary Create connection link
     * @request POST:/connect/create-link
     * @secure
     */
    postConnectCreateLink: (
      data: PostConnectCreateLinkRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostConnectCreateLinkPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/connect/create-link`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Use this endpoint with the token you get from the connection flow to retrieve information about the created integration. It works in a similar way as the OAuth2 code flow to securely retrieve information and connect the integration to your user. > Check out [our full guide](/connect/embedded-flow) for more details about implementing the connection flow into your app. This endpoint is used to ensure users can't trick your system connecting their account in your system to another customers integration. You don't get the integration ID from the `showKomboConnect(link)` function but only the short lived token used for this endpoint so that users can't send you arbitrary data that you would put into your system.
     *
     * @tags Kombo Connect
     * @name GetConnectIntegrationByTokenToken
     * @summary Get integration by token
     * @request GET:/connect/integration-by-token/{token}
     * @secure
     */
    getConnectIntegrationByTokenToken: (
      token: GetConnectIntegrationByTokenTokenParameterToken,
      params: RequestParams = {},
    ) =>
      this.request<
        GetConnectIntegrationByTokenTokenPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/connect/integration-by-token/${token}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Use this endpoint with the token you get from the connection flow to retrieve information about the created integration. It works in a similar way as the OAuth2 code flow to securely retrieve information and connect the integration to your user. You do not need to call this endpoint for an integration to become active. <Warning>We are deprecating this endpoint in favour of the [get integration by code endpoint](/v1/get-integration-by-token-token). To migrate you only have to change to the new API endpoint.</Warning> ### Example Request Body ```json { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiVGhpcyBpcyBub3QgYW4gYWN0dWFsIHRva2VuLiJ9.JulqgOZBMKceI8vh9YLpVX51efND0ZyfUNHDXLrPz_4" } ```
     *
     * @tags Kombo Connect
     * @name PostConnectActivateIntegration
     * @summary Activate integration (optional)
     * @request POST:/connect/activate-integration
     * @secure
     */
    postConnectActivateIntegration: (
      data: PostConnectActivateIntegrationRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostConnectActivateIntegrationPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/connect/activate-integration`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  custom = {
    /**
     * @description This endpoint returns BeraterNr (consultant_number), MandantenNr (client_number) and the payroll system (LODAS or Lohn und Gehalt). Useful to generate a DATEV ASCII file for the passthrough endpoint.
     *
     * @tags Custom Endpoints
     * @name GetCustomDatevSystemInformation
     * @summary Get DATEV system information
     * @request GET:/custom/datev/system-information
     * @secure
     */
    getCustomDatevSystemInformation: (params: RequestParams = {}) =>
      this.request<
        GetCustomDatevSystemInformationPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/custom/datev/system-information`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This action allows to send an arbitrary ASCII file directly to DATEV LODAS or Lohn und Gehalt. Kombo adds validation for the file format but not on the content. This action allows you to implement any use case that you might have with DATEV payroll ASCII imports.
     *
     * @tags Custom Endpoints
     * @name PostCustomDatevPassthrough
     * @summary Write raw DATEV ASCII file
     * @request POST:/custom/datev/passthrough
     * @secure
     */
    postCustomDatevPassthrough: (
      data: PostCustomDatevPassthroughRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostCustomDatevPassthroughPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/custom/datev/passthrough`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint validates that this DATEV integration is ready to use the eAU feature.
     *
     * @tags Custom Endpoints
     * @name GetCustomDatevCheckEauPermission
     * @summary Verify service is enabled
     * @request GET:/custom/datev/check-eau-permission
     * @secure
     */
    getCustomDatevCheckEauPermission: (params: RequestParams = {}) =>
      this.request<
        GetCustomDatevCheckEauPermissionPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/custom/datev/check-eau-permission`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint queries the status of the eAU request for the given DATEV integration.
     *
     * @tags Custom Endpoints
     * @name GetCustomDatevEauRequestsEauId
     * @summary Query the status of the eAU request
     * @request GET:/custom/datev/eau-requests/{eau_id}
     * @secure
     */
    getCustomDatevEauRequestsEauId: (
      eauId: GetCustomDatevEauRequestsEauIdParameterEauId,
      params: RequestParams = {},
    ) =>
      this.request<
        GetCustomDatevEauRequestsEauIdPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/custom/datev/eau-requests/${eauId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint returns the available document types for this DATEV integration.
     *
     * @tags Custom Endpoints
     * @name GetCustomDatevCheckDocumentPermission
     * @summary Verify service is enabled
     * @request GET:/custom/datev/check-document-permission
     * @secure
     */
    getCustomDatevCheckDocumentPermission: (params: RequestParams = {}) =>
      this.request<
        GetCustomDatevCheckDocumentPermissionPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/custom/datev/check-document-permission`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Use this endpoint to get all available documents for a specific period.
     *
     * @tags Custom Endpoints
     * @name GetCustomDatevAvailableDocuments
     * @summary Retrieve available documents
     * @request GET:/custom/datev/available-documents
     * @secure
     */
    getCustomDatevAvailableDocuments: (
      query: {
        /** Provide the period in the format YYYY-MM-DD for which to check for available documents. */
        period: GetCustomDatevAvailableDocumentsParameterPeriod;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetCustomDatevAvailableDocumentsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/custom/datev/available-documents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Download a document from DATEV <Note> This endpoint requires the permission **Manage documents** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "accounting_month": "2001-12-01", "document_type": "LOJE", "employee_id": null } ```
     *
     * @tags Custom Endpoints
     * @name PostCustomDatevDownloadDocument
     * @summary Download Payroll Document
     * @request POST:/custom/datev/download-document
     * @secure
     */
    postCustomDatevDownloadDocument: (
      data: PostCustomDatevDownloadDocumentRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostCustomDatevDownloadDocumentPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/custom/datev/download-document`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Download a document from DATEV <Note> This endpoint requires the permission **Manage documents** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "accounting_month": "2001-12-01", "document_type": "LOJE" } ```
     *
     * @tags Custom Endpoints
     * @name PostCustomDatevEmployeesEmployeeIdDownloadDocument
     * @summary Download Payroll Document
     * @request POST:/custom/datev/employees/{employee_id}/download-document
     * @secure
     */
    postCustomDatevEmployeesEmployeeIdDownloadDocument: (
      employeeId: PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId,
      data: PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/custom/datev/employees/${employeeId}/download-document`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a request for an electronic certificate of incapacity for work (eAU). <Note> This endpoint requires the permission **Manage eAU** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "start_work_incapacity": "2022-01-01" } ```
     *
     * @tags Custom Endpoints
     * @name PostCustomDatevEmployeesEmployeeIdEauRequests
     * @summary Create eAU Request
     * @request POST:/custom/datev/employees/{employee_id}/eau-requests
     * @secure
     */
    postCustomDatevEmployeesEmployeeIdEauRequests: (
      employeeId: PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId,
      data: PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/custom/datev/employees/${employeeId}/eau-requests`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description What DATEV requires to prepare payroll is very specific and currently, as DATEV is not providing "read", this is not part of the unified model. <Note> This endpoint requires the permission **Manage payroll** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "EvLV61zdahkN4ftPJbmPCkdv", "payroll_run": { "date": "2022-05-01" }, "fixed_payments": [ { "amount": 560, "lohnart": 100 } ], "hourly_payments": [ { "hours": 14, "lohnart": 200 }, { "hours": 16, "lohnart": 232 } ], "custom_lodas": [ { "amount": 8, "lohnart": 300, "bearbeitungsschluessel": 4 } ] } ```
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
      params: RequestParams = {},
    ) =>
      this.request<
        PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/custom/datev/employees/${employeeId}/prepare-payroll`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sets the compensations for an employee on the specified effective date. Other compensations will end at the effective date. That means, if you would like to add a compensation, you also have to include the compensations that you would like to keep. <Note> This endpoint requires the permission **Manage payroll** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "3bdhemmSP1TPQDGWtRveRot9", "effective_date": "2022-12-01", "compensations": [ { "amount": 4500, "currency": "EUR", "period": "MONTH", "lohnart": 200 }, { "amount": 30, "currency": "EUR", "period": "HOUR" } ] } ```
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
      params: RequestParams = {},
    ) =>
      this.request<
        PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/custom/datev/employees/${employeeId}/compensations`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint returns whether you can write to this DATEV integration.
     *
     * @tags Custom Endpoints
     * @name GetCustomDatevCheckWritePermission
     * @summary Verify service is enabled
     * @request GET:/custom/datev/check-write-permission
     * @secure
     */
    getCustomDatevCheckWritePermission: (params: RequestParams = {}) =>
      this.request<
        GetCustomDatevCheckWritePermissionPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/custom/datev/check-write-permission`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all "DATEV Data Pushes" of the last 2 months. You can use this endpoint to give your users transparency about submitted "ASCII-Files" and their status. Each data push can contain multiple files that were submitted.
     *
     * @tags Custom Endpoints
     * @name GetCustomDatevDataPushes
     * @summary Get DATEV data pushes
     * @request GET:/custom/datev/data-pushes
     * @secure
     */
    getCustomDatevDataPushes: (params: RequestParams = {}) =>
      this.request<
        GetCustomDatevDataPushesPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/custom/datev/data-pushes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        PostCustomDatevPushDataGeneralPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/custom/datev/push-data/general`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        PostCustomDatevPushDataPayrollPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/custom/datev/push-data/payroll`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Write a payroll supplement to Silae using the supplement code. <Note> This endpoint requires the permission **Manage payroll** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "EvLV61zdahkN4ftPJbmPCkdv", "supplement_code": "200", "effective_date": "2024-01-14", "element_amount": 6 } ```
     *
     * @tags Custom Endpoints
     * @name PostCustomSilaeEmployeesEmployeeIdPayrollSupplements
     * @summary Write Payroll Supplement
     * @request POST:/custom/silae/employees/{employee_id}/payroll-supplements
     * @secure
     */
    postCustomSilaeEmployeesEmployeeIdPayrollSupplements: (
      employeeId: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId,
      data: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse,
        {
          status: "error";
          /** Error details with structured code for programmatic handling. */
          error: {
            /**
             * Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).
             * @example "PLATFORM.RATE_LIMIT_EXCEEDED"
             */
            code:
              | "PLATFORM.RATE_LIMIT_EXCEEDED"
              | "PLATFORM.INTEGRATION_NOT_FOUND"
              | "PLATFORM.INPUT_INVALID"
              | "PLATFORM.UNKNOWN_ERROR"
              | "PLATFORM.IP_NOT_WHITELISTED"
              | "PLATFORM.AUTHENTICATION_INVALID";
            /** A static, human-readable label. */
            title: string | null;
            /** A dynamic, detailed description of what went wrong in this specific instance. */
            message: string;
            /**
             * The log page in the Kombo UI lists every interaction with full details. If you need assistance, share that link with our support team.
             * @format uri
             */
            log_url: string | null;
          };
        }
      >({
        path: `/custom/silae/employees/${employeeId}/payroll-supplements`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
