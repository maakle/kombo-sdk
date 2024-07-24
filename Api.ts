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
  /** @example {"already_queued":false,"sync_id":"119ihtp91nA3dqRFiV67nXS6"} */
  data: {
    /** We only allow 1 concurrent sync to be running or queued.  */
    already_queued: boolean;
    /** ID of the newly-created or already-queued-or-running sync.  */
    sync_id: string;
  };
}

export interface PostForceSyncErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PostForceSyncRequestBody = object;

/** The ID of the tool whose passthrough API you want to call (e.g., `personio`). */
export type PostPassthroughToolApiParameterTool = string;

/** The ID of the passthrough API you want to call (some tools provide multiple). Check the endpoint description for a list of all available APIs. */
export type PostPassthroughToolApiParameterApi = string;

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

export type PostPassthroughToolApiRequestBody = {
  /** The HTTP method (e.g., `GET`) of the request. */
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  /**
   * The path of the endpoint you want to call. We automatically prepend the base URL of the API (all base URLs are documented in the endpoint description).
   * @pattern /^\//
   */
  path: string;
  /** The headers to send with the request. Note that we automatically supply any authentication-related headers. */
  headers?: Record<string, string>;
  /** The query parameters to send in addition to the ones in the `path`. */
  params?: Record<string, string>;
  /**
   * The data to submit as part of the request body. This can either be an array or object (in which case we will forward it as JSON) or a string (in which case we will forward it raw).
   * @format any
   */
  data?: any;
  /** If set to `true`, the response will be returned as a base64-encoded string. This is useful for binary data (e.g., PDFs). */
  response_as_base64?: boolean;
  /** The data to submit as part of the request body if the request's `Content-Type` is `multipart/form-data`. */
  multipart_form_data?: {
    /** The key of the form data */
    name: string;
    /** The value of the form data (Can be an object if the field is of the type file) */
    value:
      | string
      | {
          /** Name of the file you want to upload. */
          name: string;
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
  }[];
  /** Custom options interpreted by the passthrough API adapter you've selected. These options are not documented right now as they're only for very advanced use cases. */
  api_options?: Record<string, string>;
};

export type DeleteIntegrationsIntegrationIdParameterIntegrationId = string;

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

export type DeleteIntegrationsIntegrationIdRequestBody = object;

export type GetIntegrationsIntegrationIdParameterIntegrationId = string;

export interface GetIntegrationsIntegrationIdSuccessfulResponse {
  status: "success";
  /** @example {"id":"factorial:8d1hpPsbjxUkoCoa1veLZGe5","tool":{"id":"factorial","label":"Factorial","internal_label":null,"logo_url":"https://storage.googleapis.com/kombo-assets/integrations/factorial/logo.svg","icon_url":"https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg"},"category":"HRIS","status":"ACTIVE","end_user":{"organization_name":"Acme","creator_email":"example-integration-creator@acme.com","origin_id":"2DQJAUtSzzzKP9buDTvUvPk3"},"scope_config":{"id":"B1hu5NGyhdjSq5X3hxEz4bAN","name":"Anonymous Scopes"},"created_at":"2022-08-07T14:01:29.196Z","beta":false,"read_models":[{"id":"hris_employees","label":"Employees","is_available":true,"coverage_status":"SUPPORTED","scope_config_setting":"ENABLED","opted_out_by_customer":false,"fields":[{"id":"date_of_birth","is_available":false,"coverage_status":"SUPPORTED","scope_config_setting":"OPTIONAL","opted_out_by_customer":true}]}]} */
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
       * @format url
       */
      logo_url: string;
      /**
       * URL to a square SVG icon of the connected tool.
       * @format url
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
    end_user: {
      organization_name: string;
      /** @format email */
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
      coverage_status: "SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN";
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
        coverage_status: "SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN";
        /** The setting of the datapoint in the scope config that you configured in the Kombo dashboard. */
        scope_config_setting: "ENABLED" | "DISABLED" | "OPTIONAL";
        /** Whether the datapoint is opted out by your customer in the connection flow. */
        opted_out_by_customer: boolean;
      }[];
    }[];
  };
}

export interface GetIntegrationsIntegrationIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PostIntegrationsIntegrationIdRelinkParameterIntegrationId = string;

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

export type PostIntegrationsIntegrationIdRelinkRequestBody = {
  /**
   * Language of the connection flow UI.
   * @default "en"
   */
  language?: "en" | "de" | "fr" | "it" | "es" | null;
};

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = string;

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 2000
 * @exclusiveMax false
 * @default 100
 */
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = number;

export interface GetIntegrationsIntegrationIdIntegrationFieldsSuccessfulResponse {
  status: "success";
  /** @example {"results":[{"id":"FFpTK47GhXnU6QAopPq2bdos","key":"tax_id","model":"hris_employees","type":"DEFAULT","label":"Tax ID","is_passthrough_enabled":true,"is_writable":true}],"next_cursor":null} */
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
      /** Whether the field is writable or not through endpoints such as `PATCH /employees/{employee_id}/integration-fields/{integration_field_id}`. */
      is_writable: boolean;
    }[];
    /** The cursor for the next page */
    next_cursor: string | null;
  };
}

export interface GetIntegrationsIntegrationIdIntegrationFieldsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = string;

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = string;

export interface PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdSuccessfulResponse {
  status: "success";
  /** @example {"id":"9suhxJU83Kon4kPTS47837uE","key":"tax_id","model":"hris_employees","type":"DEFAULT","label":"Tax ID","is_passthrough_enabled":true,"is_writable":true} */
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
    /** Whether the field is writable or not through endpoints such as `PATCH /employees/{employee_id}/integration-fields/{integration_field_id}`. */
    is_writable: boolean;
  };
}

export interface PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = {
  enable_passthrough: boolean | null;
};

export type GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = string;

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetIntegrationsIntegrationIdCustomFieldsParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = number;

export interface GetIntegrationsIntegrationIdCustomFieldsSuccessfulResponse {
  status: "success";
  /** @example {"results":[{"id":"D9CoSqqun6ix7uKEwb2kHBU1","key":"unified_tax_id","integration_field":{"id":"FFpTK47GhXnU6QAopPq2bdos","key":"tax_id","type":"DEFAULT","label":"The employee's tax ID"},"model":"hris_employees","label":null,"description":null}],"next_cursor":null} */
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
    /** The cursor for the next page */
    next_cursor: string | null;
  };
}

export interface GetIntegrationsIntegrationIdCustomFieldsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

/** The unique ID of the integration where the custom field mapping should be updated */
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = string;

/** The unique ID of the custom field that should be updated */
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = string;

export interface PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdSuccessfulResponse {
  status: "success";
  /** @example {"id":"EU3Bwa4iDfGspEELW71WDvvu","key":"tshirt_size","integration_field":{"id":"3n6geaAmKL5tFonXVAtsMDmr","key":"custom.tshirt_size","type":"CUSTOM","label":"T-Shirt Size"},"model":"hris_employees","label":"Tsirt Size","description":"Map this to the employee's tshirt size"} */
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

export interface PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = {
  /** The integration field's unique ID which the custom field should be mapped to. Null to remove a mapping. */
  integration_field_id: string | null;
};

export enum GetToolsCategoryParameterCategory {
  Hris = "hris",
  Ats = "ats",
  Assessment = "assessment",
}

export interface GetToolsCategorySuccessfulResponse {
  status: "success";
  /** @example {"tools":[{"id":"factorial","label":"Factorial","internal_label":null,"assets":{"logo_url":"https://storage.googleapis.com/kombo-assets/integrations/factorial/logo.svg","icon_url":"https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg","icon_black_url":"https://storage.googleapis.com/kombo-assets/integrations/factorial/icon-black.svg"},"coverage":{"read_models":[{"id":"hris_employees","label":"Employees","coverage_status":"SUPPORTED","fields":[{"id":"date_of_birth","coverage_status":"SUPPORTED"}]},{"id":"hris_teams","label":"Groups","coverage_status":"UNSUPPORTED","fields":[{"id":"parent_id","coverage_status":"UNSUPPORTED"}]}],"write_actions":[{"id":"hris_create_employee","label":"Create employee","coverage_status":"SUPPORTED"}],"features":[{"id":"automatic_source_writing","label":"Automatic Source Writing","coverage_status":"SUPPORTED"}]}}]} */
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
          coverage_status: "SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN";
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
            coverage_status: "SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN";
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
          coverage_status: "SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN";
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
          coverage_status: "SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN";
        }[];
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

/** ID of the provisioning group (currently only `default` is allowed). */
export type PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = string;

export interface PostHrisProvisioningGroupsGroupIdDiffSuccessfulResponse {
  status: "success";
  /** The users to provision, deprovision, and optionally update. */
  data: {
    users: {
      /** The users we've found in the HR systems who match the provisioning filters but haven't been provisioned in your system yet. */
      to_provision: {
        /**
         * The email address of the user.
         * @format email
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

export interface PostHrisProvisioningGroupsGroupIdDiffErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PostHrisProvisioningGroupsGroupIdDiffRequestBody = {
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
};

/** ID of the provisioning group (currently only `default` is allowed). */
export type PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = string;

export interface PostHrisProvisioningGroupsGroupIdSetupLinksSuccessfulResponse {
  status: "success";
  /** @example {"url":"https://connect.kombo.dev/v1/provisioning?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.SWYgeW91IGFyZSByZWFkaW5nIHRoaXMsIHdlIHdvdWxkIGxpa2UgdG8gbGV0IHlvdSBrbm93IHRoYXQgd2UgYXJlIGhpcmluZyBwZW9wbGUgbGlrZSB5b3UgOikuIFJlYWNoIG91dCB0byBhbGV4QGtvbWJvLmRldiB0byBnZXQgaW4gY29udGFjdCBhbmQgdGVsbCBoaW0geW91IGNvbWUgZnJvbSB0aGUgSldUIDsp._hhX5YTtHfLn9ZC806dZceRn2whzxHyrhft1ONzNgOE","expires_at":"2023-10-11T12:00:00.000Z"} */
  data: {
    /**
     * The setup link URL to pass to the Kombo Connect SDK.
     * @format url
     */
    url: string;
    /**
     * When this link expires.
     * @format date-time
     */
    expires_at: string;
  };
}

export interface PostHrisProvisioningGroupsGroupIdSetupLinksErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = {
  /**
   * Language of the UI. Please note that the provisioning setup UI is _not_ translated yet but we're working on it and setting this already will make sure the translations appear once released.
   * @default "en"
   */
  language?: "en" | "de" | "fr" | "it" | "es" | null;
};

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisEmployeesParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetHrisEmployeesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisEmployeesParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisEmployeesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
export type GetHrisEmployeesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisEmployeesParameterRemoteIds = string;

/** **(⚠️ Deprecated - Use the `employment_statuses` filter instead.)** Filter by the `employment_status` field. */
export enum GetHrisEmployeesParameterEmploymentStatus {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  INACTIVE = "INACTIVE",
  LEAVE = "LEAVE",
}

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

/** Filter by a comma-separated list of work emails. We will only return employees who have _any_ of the work emails. */
export type GetHrisEmployeesParameterWorkEmails = string;

/** Filter by a comma-separated list of personal emails. We will only return employees who have _any_ of the personal emails. */
export type GetHrisEmployeesParameterPersonalEmails = string;

export interface GetHrisEmployeesSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","employee_number":"3243422","first_name":"John","last_name":"Doe","nationality":"French","display_full_name":"John Doe","job_title":"Integrations Team Lead","work_email":"john.doe@acme.com","personal_email":"john@doe.me","mobile_phone_number":"801-555-4687","ssn":"555-32-6395","tax_id":"12 345 678 901","gender":"MALE","ethnicity":"BLACK_AFRICAN_AMERICAN","marital_status":"MARRIED","employment_status":"INACTIVE","employment_type":"FULL_TIME","weekly_hours":40,"avatar":"https://resources.bamboohr.com/images/photo_person_150x150.png","work_location_id":"7E2gyuv6TmvtByzBxW9Sxt53","legal_entity_id":"xB32bied320csBSsl3XWdlw33","manager_id":"9pf2pxBB8VX8EQMC9aipW2Bo","home_address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"},"bank_accounts":[{"account_number":"1234567890","bank_name":"Commerzbank","bic":"COBADEFFXXX","domestic_bank_routing":{"number":"34567890","type":"DE_BANKLEITZAHL"},"holder_name":"John Doe","iban":"DE12345678901234567890"}],"date_of_birth":"1986-01-01T00:00:00.000Z","start_date":"2020-04-07T00:00:00.000Z","termination_date":"2022-05-20T00:00:00.000Z","remote_created_at":"2020-04-07T12:32:01.000Z","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"custom_fields":{},"integration_fields":[],"remote_data":null,"employments":[{"id":"12vpXR7BeqYNWDShXRgsonnm","remote_id":"859","employee_id":"8Xk99QfVKYA6vfEafEUBdEPJ","job_title":"Social Media Marketer","pay_rate":85000,"pay_period":"YEAR","pay_frequency":"SEMIMONTHLY","employment_type":"FULL_TIME","pay_currency":"EUR","effective_date":"2021-01-30T00:00:00.000Z","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"remote_data":null,"custom_fields":{},"integration_fields":[]}],"time_off_balances":[{"id":"FuyRuk5NqP3qTcThED3ymTuE","remote_id":"124123","employee_id":"2Up4ZCvq1bFVzmzXG6EWzV3j","type_id":"BQJaBxRCiqN46G27VTegvkEr","balance":14,"balance_unit":"DAYS","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"used":3,"used_unit":"DAYS","remote_data":null}],"manager":{"first_name":"John","last_name":"Doe","display_full_name":"John Doe","id":"26vafvWSRmbhNcxJYqjCzuJg","work_email":"john.doe@acme.com","remote_id":"32"},"groups":[{"id":"4B9bKBpX5tnwjiG93TAqF7ci","remote_id":"49","name":"Customer Success","type":"TEAM"}],"legal_entity":{"id":"4B9bKBpX5tnwjiG93TAqF7ci","remote_id":"49","name":"ACME Inc.","address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin, Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"}},"teams":[{"id":"4B9bKBpX5tnwjiG93TAqF7ci","remote_id":"49","name":"Customer Success","type":"TEAM"}],"work_location":{"id":"22st2Ji8XpncEYEak8mvQgQF","remote_id":"1348","name":"Kombo HQ","address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin, Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"},"type":"OFFICE","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":"2022-08-07T14:01:29.196Z","remote_data":null}}]} */
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
       * @format email
       */
      work_email?: string | null;
      /**
       * The employee’s personal email address. If the email address is invalid, we will set this to `null`.
       * @format email
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
      employment_status?: "ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE" | string | null;
      /** The employee’s current employment type. In rare cases where we can’t find a clear mapping, the original string is passed through. */
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
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
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
        /** @default null */
        city?: string | null;
        /**
         * Contains the ISO2 country code if possible. If not, it contains the original value.
         * @default null
         */
        country?: string | null;
        /**
         * If we have address data, this is filled with the raw address string.
         * @default null
         */
        raw?: string | null;
        /** @default null */
        state?: string | null;
        /**
         * If we can parse the address data, this field contains the first part of the street information.
         * @default null
         */
        street_1?: string | null;
        /** @default null */
        street_2?: string | null;
        /** @default null */
        zip_code?: string | null;
      };
      /** The employee’s bank accounts. */
      bank_accounts?: {
        /**
         * The internationally unique IBAN identifying this account. If we detect a valid IBAN from the account number and this field would otherwise be empty, we will automatically populate this field.
         * @default null
         */
        iban?: string | null;
        /**
         * The internationally unique BIC/SWIFT code identifying the bank behind this account. If we detect a valid BIC from the domestic bank routing number and this field would otherwise be empty, we will automatically populate this field.
         * @default null
         */
        bic?: string | null;
        /**
         * The bank-specific account number. Some companies use the account number field to put the IBAN here.
         * @default null
         */
        account_number?: string | null;
        /**
         * The name of the holder of this account.
         * @default null
         */
        holder_name?: string | null;
        /**
         * The name of the bank behind this account.
         * @default null
         */
        bank_name?: string | null;
        /** @default null */
        domestic_bank_routing?: {
          /** Bank routing number (e.g. DE Bankleitzahl, GB Sort Code, US ABA routing number, AU BSB code). This field is not formatted and therefore might contain delimiters (eg. 01-23-45). */
          number: string;
          /** Enum of the routing type, prefixed with the iso-3166-1-alpha-2 banks origin country. If there is uncertainty about the type, it will be set to null. */
          type:
            | "GB_SORT_CODE"
            | "DE_BANKLEITZAHL"
            | "US_ABA_ROUTING_TRANSIT_NUMBER"
            | "CA_ROUTING_NUMBER"
            | "AU_BSB_CODE"
            | "FR_RIB"
            | null;
        };
      }[];
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
       * The timestamp when this object was last changed. This value is tracked by Kombo based on changes in the data.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
      custom_fields: Record<string, any>;
      /**
       * An array of selected pass-through integration fields. [Read more](/integration-fields)
       * @example [{"id":"5NVFhMpB9Ah6by44tzNjZLyE","key":"firstName","type":"DEFAULT","value":"Frank","label":"First Name"},{"id":"8nuajYpoRd5GnxEQaaWKUDYQ","key":"customTshirtSize","type":"CUSTOM","value":"XL","label":"T-Shirt Size"}]
       */
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
        /**
         * The field's value.
         * @format any
         */
        value?: any;
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
      remote_data: Record<string, any>;
      employments: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /** The Kombo ID of the employment’s employee. The ID can be used to retrieve the employee from the `get employees` endpoint. */
        employee_id: string;
        /** **(⚠️ Deprecated)** We now provide the `job_title` directly on the employee model. */
        job_title: string | null;
        /**
         * The amount of money paid to the employee.
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        pay_rate: number | null;
        /** The span of time over which the pay rate is paid. In rare cases where we can’t find a clear mapping, the original string is passed through. */
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
        /** How often the pay rate is paid. In rare cases where we can’t find a clear mapping, the original string is passed through. */
        pay_frequency:
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
        /** The employee’s current employment type. In rare cases where we can’t find a clear mapping, the original string is passed through. */
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
        /** The currency that the employee is paid in. Usually returned in [ISO 4217 currency codes](https://www.iso.org/iso-4217-currency-codes.html). */
        pay_currency: string | null;
        /**
         * The date of when the employment started.
         * @format date-time
         */
        effective_date: string | null;
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
        remote_data: Record<string, any>;
        /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
        custom_fields: Record<string, any>;
        /**
         * An array of selected pass-through integration fields. [Read more](/integration-fields)
         * @example [{"id":"5NVFhMpB9Ah6by44tzNjZLyE","key":"firstName","type":"DEFAULT","value":"Frank","label":"First Name"},{"id":"8nuajYpoRd5GnxEQaaWKUDYQ","key":"customTshirtSize","type":"CUSTOM","value":"XL","label":"T-Shirt Size"}]
         */
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
          /**
           * The field's value.
           * @format any
           */
          value?: any;
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
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        balance: number | null;
        /** The time-unit of the balance. */
        balance_unit: "HOURS" | "DAYS" | null;
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
        /**
         * The amount of time used by the employee.
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        used: number | null;
        /** The time-unit of the used time. */
        used_unit: "HOURS" | "DAYS" | null;
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
        remote_data: Record<string, any>;
      }[];
      /** @example {"first_name":"John","last_name":"Doe","display_full_name":"John Doe","id":"26vafvWSRmbhNcxJYqjCzuJg","work_email":"john.doe@acme.com","remote_id":"32"} */
      manager: {
        /** The employee’s first name. */
        first_name: string | null;
        /** The employee’s last name. */
        last_name: string | null;
        /** The employee’s full name, including any middle names. Not all HR systems provide an explicit display name, so we recommend falling back to `first_name` and `last_name`. */
        display_full_name: string | null;
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
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
        /** The name of the group. */
        name: string | null;
        /** Type of the group. */
        type: "DEPARTMENT" | "TEAM" | "COST_CENTER" | null;
      }[];
      /** @example {"id":"4B9bKBpX5tnwjiG93TAqF7ci","remote_id":"49","name":"ACME Inc.","address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin, Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"}} */
      legal_entity: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /** The legal entity’s name. */
        name: string | null;
        /** The legal entity’s address. */
        address: {
          /** @default null */
          city?: string | null;
          /**
           * Contains the ISO2 country code if possible. If not, it contains the original value.
           * @default null
           */
          country?: string | null;
          /**
           * If we have address data, this is filled with the raw address string.
           * @default null
           */
          raw?: string | null;
          /** @default null */
          state?: string | null;
          /**
           * If we can parse the address data, this field contains the first part of the street information.
           * @default null
           */
          street_1?: string | null;
          /** @default null */
          street_2?: string | null;
          /** @default null */
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
        type: "DEPARTMENT" | "TEAM" | "COST_CENTER" | null;
      }[];
      /** @example {"id":"22st2Ji8XpncEYEak8mvQgQF","remote_id":"1348","name":"Kombo HQ","address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin, Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"},"type":"OFFICE","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":"2022-08-07T14:01:29.196Z","remote_data":null} */
      work_location: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /** The work location’s name */
        name: string | null;
        /** The work location’s address */
        address: {
          /** @default null */
          city?: string | null;
          /**
           * Contains the ISO2 country code if possible. If not, it contains the original value.
           * @default null
           */
          country?: string | null;
          /**
           * If we have address data, this is filled with the raw address string.
           * @default null
           */
          raw?: string | null;
          /** @default null */
          state?: string | null;
          /**
           * If we can parse the address data, this field contains the first part of the street information.
           * @default null
           */
          street_1?: string | null;
          /** @default null */
          street_2?: string | null;
          /** @default null */
          zip_code?: string | null;
        };
        /** The work location’s type. A freeform string. */
        type: string | null;
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
        remote_data: Record<string, any>;
      };
    }[];
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
  /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","employee_number":"3243422","first_name":"John","last_name":"Doe","nationality":"French","display_full_name":"John Doe","job_title":"Integrations Team Lead","work_email":"john.doe@acme.com","personal_email":"john@doe.me","mobile_phone_number":"801-555-4687","ssn":"555-32-6395","tax_id":"12 345 678 901","gender":"MALE","ethnicity":"BLACK_AFRICAN_AMERICAN","marital_status":"MARRIED","employment_status":"INACTIVE","employment_type":"FULL_TIME","weekly_hours":40,"avatar":"https://resources.bamboohr.com/images/photo_person_150x150.png","work_location_id":"7E2gyuv6TmvtByzBxW9Sxt53","legal_entity_id":"xB32bied320csBSsl3XWdlw33","manager_id":"9pf2pxBB8VX8EQMC9aipW2Bo","home_address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"},"bank_accounts":[{"account_number":"1234567890","bank_name":"Commerzbank","bic":"COBADEFFXXX","domestic_bank_routing":{"number":"34567890","type":"DE_BANKLEITZAHL"},"holder_name":"John Doe","iban":"DE12345678901234567890"}],"date_of_birth":"1986-01-01T00:00:00.000Z","start_date":"2020-04-07T00:00:00.000Z","termination_date":"2022-05-20T00:00:00.000Z","remote_created_at":"2020-04-07T12:32:01.000Z","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"custom_fields":{},"integration_fields":[],"remote_data":null} */
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
     * @format email
     */
    work_email: string | null;
    /**
     * The employee’s personal email address. If the email address is invalid, we will set this to `null`.
     * @format email
     */
    personal_email: string | null;
    /** The employee’s mobile phone number. */
    mobile_phone_number: string | null;
    /** The employee’s social security number */
    ssn: string | null;
    /** The employee’s tax ID. */
    tax_id: string | null;
    /** The employee’s gender. */
    gender: "MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED" | string | null;
    /** The employee’s ethnicity. In rare cases where we can’t find a clear mapping, the original string is passed through. */
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
    /** The employee’s current marital status. In rare cases where we can’t find a clear mapping, the original string is passed through. */
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
    employment_status: "ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE" | string | null;
    /** The employee’s current employment type. In rare cases where we can’t find a clear mapping, the original string is passed through. */
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
    /**
     * The employee’s weekly working hours.
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
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
    home_address: {
      /** @default null */
      city?: string | null;
      /**
       * Contains the ISO2 country code if possible. If not, it contains the original value.
       * @default null
       */
      country?: string | null;
      /**
       * If we have address data, this is filled with the raw address string.
       * @default null
       */
      raw?: string | null;
      /** @default null */
      state?: string | null;
      /**
       * If we can parse the address data, this field contains the first part of the street information.
       * @default null
       */
      street_1?: string | null;
      /** @default null */
      street_2?: string | null;
      /** @default null */
      zip_code?: string | null;
    };
    /** The employee’s bank accounts. */
    bank_accounts: {
      /**
       * The internationally unique IBAN identifying this account. If we detect a valid IBAN from the account number and this field would otherwise be empty, we will automatically populate this field.
       * @default null
       */
      iban?: string | null;
      /**
       * The internationally unique BIC/SWIFT code identifying the bank behind this account. If we detect a valid BIC from the domestic bank routing number and this field would otherwise be empty, we will automatically populate this field.
       * @default null
       */
      bic?: string | null;
      /**
       * The bank-specific account number. Some companies use the account number field to put the IBAN here.
       * @default null
       */
      account_number?: string | null;
      /**
       * The name of the holder of this account.
       * @default null
       */
      holder_name?: string | null;
      /**
       * The name of the bank behind this account.
       * @default null
       */
      bank_name?: string | null;
      /** @default null */
      domestic_bank_routing?: {
        /** Bank routing number (e.g. DE Bankleitzahl, GB Sort Code, US ABA routing number, AU BSB code). This field is not formatted and therefore might contain delimiters (eg. 01-23-45). */
        number: string;
        /** Enum of the routing type, prefixed with the iso-3166-1-alpha-2 banks origin country. If there is uncertainty about the type, it will be set to null. */
        type:
          | "GB_SORT_CODE"
          | "DE_BANKLEITZAHL"
          | "US_ABA_ROUTING_TRANSIT_NUMBER"
          | "CA_ROUTING_NUMBER"
          | "AU_BSB_CODE"
          | "FR_RIB"
          | null;
      };
    }[];
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
     * The timestamp when this object was last changed. This value is tracked by Kombo based on changes in the data.
     * @format date-time
     */
    changed_at: string;
    /**
     * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
     * @format date-time
     */
    remote_deleted_at: string | null;
    /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
    custom_fields: Record<string, any>;
    /**
     * An array of selected pass-through integration fields. [Read more](/integration-fields)
     * @example [{"id":"5NVFhMpB9Ah6by44tzNjZLyE","key":"firstName","type":"DEFAULT","value":"Frank","label":"First Name"},{"id":"8nuajYpoRd5GnxEQaaWKUDYQ","key":"customTshirtSize","type":"CUSTOM","value":"XL","label":"T-Shirt Size"}]
     */
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
      /**
       * The field's value.
       * @format any
       */
      value?: any;
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
    remote_data: Record<string, any>;
  };
}

export interface PostHrisEmployeesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PostHrisEmployeesRequestBody = {
  /** The first name of the employee. */
  first_name: string;
  /** The last name of the employee. */
  last_name: string;
  /**
   * The email address of the employee to be created. For tools where the personal email address is required, we map this input to the personal email. This is documented on a per-tool basis.
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
     * @pattern /^[A-Z]{2}$/
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
  /**
   * The uppercase two-letter ISO country (e.g., `DE`). For systems that use codes in formats other than `ISO 3166-1 alpha-2`, Kombo transforms the ISO Codes to the appropriate value.
   * @pattern /^[A-Z]{2}$/
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
      /** Workday job requisition ID of that the employee belongs to. */
      job_requisition_id: string;
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
      /** The department group ID for which the employee should be created. It can be found as a group with thre type "DEPARTMENT". */
      department_id: string;
    };
  };
};

/** The ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`) */
export type PatchHrisEmployeesEmployeeIdParameterEmployeeId = string;

export interface PatchHrisEmployeesEmployeeIdSuccessfulResponse {
  status: "success";
  /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","employee_number":"3243422","first_name":"John","last_name":"Doe","nationality":"French","display_full_name":"John Doe","job_title":"Integrations Team Lead","work_email":"john.doe@acme.com","personal_email":"john@doe.me","mobile_phone_number":"801-555-4687","ssn":"555-32-6395","tax_id":"12 345 678 901","gender":"MALE","ethnicity":"BLACK_AFRICAN_AMERICAN","marital_status":"MARRIED","employment_status":"INACTIVE","employment_type":"FULL_TIME","weekly_hours":40,"avatar":"https://resources.bamboohr.com/images/photo_person_150x150.png","work_location_id":"7E2gyuv6TmvtByzBxW9Sxt53","legal_entity_id":"xB32bied320csBSsl3XWdlw33","manager_id":"9pf2pxBB8VX8EQMC9aipW2Bo","home_address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"},"bank_accounts":[{"account_number":"1234567890","bank_name":"Commerzbank","bic":"COBADEFFXXX","domestic_bank_routing":{"number":"34567890","type":"DE_BANKLEITZAHL"},"holder_name":"John Doe","iban":"DE12345678901234567890"}],"date_of_birth":"1986-01-01T00:00:00.000Z","start_date":"2020-04-07T00:00:00.000Z","termination_date":"2022-05-20T00:00:00.000Z","remote_created_at":"2020-04-07T12:32:01.000Z","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"remote_data":null} */
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
     * @format email
     */
    work_email: string | null;
    /**
     * The employee’s personal email address. If the email address is invalid, we will set this to `null`.
     * @format email
     */
    personal_email: string | null;
    /** The employee’s mobile phone number. */
    mobile_phone_number: string | null;
    /** The employee’s social security number */
    ssn: string | null;
    /** The employee’s tax ID. */
    tax_id: string | null;
    /** The employee’s gender. */
    gender: "MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED" | string | null;
    /** The employee’s ethnicity. In rare cases where we can’t find a clear mapping, the original string is passed through. */
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
    /** The employee’s current marital status. In rare cases where we can’t find a clear mapping, the original string is passed through. */
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
    employment_status: "ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE" | string | null;
    /** The employee’s current employment type. In rare cases where we can’t find a clear mapping, the original string is passed through. */
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
    /**
     * The employee’s weekly working hours.
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
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
    home_address: {
      /** @default null */
      city?: string | null;
      /**
       * Contains the ISO2 country code if possible. If not, it contains the original value.
       * @default null
       */
      country?: string | null;
      /**
       * If we have address data, this is filled with the raw address string.
       * @default null
       */
      raw?: string | null;
      /** @default null */
      state?: string | null;
      /**
       * If we can parse the address data, this field contains the first part of the street information.
       * @default null
       */
      street_1?: string | null;
      /** @default null */
      street_2?: string | null;
      /** @default null */
      zip_code?: string | null;
    };
    /** The employee’s bank accounts. */
    bank_accounts: {
      /**
       * The internationally unique IBAN identifying this account. If we detect a valid IBAN from the account number and this field would otherwise be empty, we will automatically populate this field.
       * @default null
       */
      iban?: string | null;
      /**
       * The internationally unique BIC/SWIFT code identifying the bank behind this account. If we detect a valid BIC from the domestic bank routing number and this field would otherwise be empty, we will automatically populate this field.
       * @default null
       */
      bic?: string | null;
      /**
       * The bank-specific account number. Some companies use the account number field to put the IBAN here.
       * @default null
       */
      account_number?: string | null;
      /**
       * The name of the holder of this account.
       * @default null
       */
      holder_name?: string | null;
      /**
       * The name of the bank behind this account.
       * @default null
       */
      bank_name?: string | null;
      /** @default null */
      domestic_bank_routing?: {
        /** Bank routing number (e.g. DE Bankleitzahl, GB Sort Code, US ABA routing number, AU BSB code). This field is not formatted and therefore might contain delimiters (eg. 01-23-45). */
        number: string;
        /** Enum of the routing type, prefixed with the iso-3166-1-alpha-2 banks origin country. If there is uncertainty about the type, it will be set to null. */
        type:
          | "GB_SORT_CODE"
          | "DE_BANKLEITZAHL"
          | "US_ABA_ROUTING_TRANSIT_NUMBER"
          | "CA_ROUTING_NUMBER"
          | "AU_BSB_CODE"
          | "FR_RIB"
          | null;
      };
    }[];
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
     * The timestamp when this object was last changed. This value is tracked by Kombo based on changes in the data.
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
    remote_data: Record<string, any>;
  };
}

export interface PatchHrisEmployeesEmployeeIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PatchHrisEmployeesEmployeeIdRequestBody = {
  /** The first name of the employee. */
  first_name: string;
  /** The last name of the employee. */
  last_name: string;
  /**
   * The email address of the employee to be created. For tools where the personal email address is required, we map this input to the personal email. This is documented on a per-tool basis.
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
     * @pattern /^[A-Z]{2}$/
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
  /**
   * The uppercase two-letter ISO country (e.g., `DE`). For systems that use codes in formats other than `ISO 3166-1 alpha-2`, Kombo transforms the ISO Codes to the appropriate value.
   * @pattern /^[A-Z]{2}$/
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
      /** Workday job requisition ID of that the employee belongs to. */
      job_requisition_id: string;
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
      /** The department group ID for which the employee should be created. It can be found as a group with thre type "DEPARTMENT". */
      department_id: string;
    };
  };
} & {
  /** The social security number of the employee. */
  ssn?: string;
  /** The marital status of an employee. */
  marital_status?: "SINGLE" | "MARRIED" | "DOMESTIC_PARTNERSHIP" | "WIDOWED" | "DIVORCED" | "SEPARATED" | "NOT_MARRIED";
  /**
   * The date on which the employment ends. This date can be in the past or in the future. This is a plain date (i.e., `yyyy-MM-dd`), all time information is discarded.
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  termination_date?: string;
  /** Tax ID of the employee. Most contries have different formats of that. In Germany, this is the `Steuer ID` and in the US it's the `TIN`. */
  tax_id?: string;
  /**
   * The uppercase two-letter ISO country (e.g., `DE`). For systems that use codes in formats other than `ISO 3166-1 alpha-2`, Kombo transforms the ISO Codes to the appropriate value.
   * @pattern /^[A-Z]{2}$/
   */
  nationality?: string;
};

export type PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = string;

export interface PostHrisEmployeesEmployeeIdDocumentsSuccessfulResponse {
  status: "success";
  data: object;
}

export interface PostHrisEmployeesEmployeeIdDocumentsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PostHrisEmployeesEmployeeIdDocumentsRequestBody = {
  category_id: string;
  document: {
    /** Name of the file you want to upload. */
    name: string;
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
};

export interface GetHrisEmployeesEmployeeIdTimesheetsSuccessfulResponse {
  status: "success";
  data: object;
}

export interface GetHrisEmployeesEmployeeIdTimesheetsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

/** The Kombo ID of the Employee you want to update. */
export type PatchHrisEmployeesEmployeeIdIntegrationFieldsIntegrationFieldIdParameterEmployeeId = string;

/** The Kombo ID of the integration field you want to update. */
export type PatchHrisEmployeesEmployeeIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = string;

export interface PatchHrisEmployeesEmployeeIdIntegrationFieldsIntegrationFieldIdSuccessfulResponse {
  status: "success";
  data: object;
}

export interface PatchHrisEmployeesEmployeeIdIntegrationFieldsIntegrationFieldIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PatchHrisEmployeesEmployeeIdIntegrationFieldsIntegrationFieldIdRequestBody = {
  value: string | number | string | null;
};

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisEmployeeDocumentCategoriesParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetHrisEmployeeDocumentCategoriesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
export type GetHrisEmployeeDocumentCategoriesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisEmployeeDocumentCategoriesParameterRemoteIds = string;

export interface GetHrisEmployeeDocumentCategoriesSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"Employment contract","remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null}]} */
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
    }[];
  };
}

export interface GetHrisEmployeeDocumentCategoriesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisTeamsParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetHrisTeamsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisTeamsParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisTeamsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
export type GetHrisTeamsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisTeamsParameterRemoteIds = string;

export interface GetHrisTeamsSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"4B9bKBpX5tnwjiG93TAqF7ci","remote_id":"49","name":"Customer Success","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"type":"TEAM","parent_id":"KGaJ5XaVPob8mYVfD49W4DGB","remote_data":null}]} */
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
       * The timestamp when this object was last changed. This value is tracked by Kombo based on changes in the data.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /** Type of the group. */
      type: "DEPARTMENT" | "TEAM" | "COST_CENTER" | null;
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
export type GetHrisGroupsParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetHrisGroupsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisGroupsParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisGroupsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
export type GetHrisGroupsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisGroupsParameterRemoteIds = string;

export interface GetHrisGroupsSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"4B9bKBpX5tnwjiG93TAqF7ci","remote_id":"49","name":"Customer Success","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"type":"TEAM","parent_id":"KGaJ5XaVPob8mYVfD49W4DGB","remote_data":null}]} */
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
       * The timestamp when this object was last changed. This value is tracked by Kombo based on changes in the data.
       * @format date-time
       */
      changed_at: string;
      /**
       * The date and time the object was deleted in the remote system. Objects are automatically marked as deleted when Kombo can't retrieve them from the remote system anymore. Kombo will also anonymize entries 14 days after they disappear.
       * @format date-time
       */
      remote_deleted_at: string | null;
      /** Type of the group. */
      type: "DEPARTMENT" | "TEAM" | "COST_CENTER" | null;
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
export type GetHrisEmploymentsParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetHrisEmploymentsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisEmploymentsParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisEmploymentsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
export type GetHrisEmploymentsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisEmploymentsParameterRemoteIds = string;

export interface GetHrisEmploymentsSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"12vpXR7BeqYNWDShXRgsonnm","remote_id":"859","employee_id":"8Xk99QfVKYA6vfEafEUBdEPJ","job_title":"Social Media Marketer","pay_rate":85000,"pay_period":"YEAR","pay_frequency":"SEMIMONTHLY","employment_type":"FULL_TIME","pay_currency":"EUR","effective_date":"2021-01-30T00:00:00.000Z","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"remote_data":null,"custom_fields":{},"integration_fields":[]}]} */
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
      /** **(⚠️ Deprecated)** We now provide the `job_title` directly on the employee model. */
      job_title: string | null;
      /**
       * The amount of money paid to the employee.
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      pay_rate: number | null;
      /** The span of time over which the pay rate is paid. In rare cases where we can’t find a clear mapping, the original string is passed through. */
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
      /** How often the pay rate is paid. In rare cases where we can’t find a clear mapping, the original string is passed through. */
      pay_frequency:
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
      /** The employee’s current employment type. In rare cases where we can’t find a clear mapping, the original string is passed through. */
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
      /** The currency that the employee is paid in. Usually returned in [ISO 4217 currency codes](https://www.iso.org/iso-4217-currency-codes.html). */
      pay_currency: string | null;
      /**
       * The date of when the employment started.
       * @format date-time
       */
      effective_date: string | null;
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
      remote_data: Record<string, any>;
      /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
      custom_fields: Record<string, any>;
      /**
       * An array of selected pass-through integration fields. [Read more](/integration-fields)
       * @example [{"id":"5NVFhMpB9Ah6by44tzNjZLyE","key":"firstName","type":"DEFAULT","value":"Frank","label":"First Name"},{"id":"8nuajYpoRd5GnxEQaaWKUDYQ","key":"customTshirtSize","type":"CUSTOM","value":"XL","label":"T-Shirt Size"}]
       */
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
        /**
         * The field's value.
         * @format any
         */
        value?: any;
        /** The label of the field. (not always available) */
        label: string | null;
      }[];
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
export type GetHrisLocationsParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetHrisLocationsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisLocationsParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisLocationsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
export type GetHrisLocationsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisLocationsParameterRemoteIds = string;

export interface GetHrisLocationsSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"22st2Ji8XpncEYEak8mvQgQF","remote_id":"1348","name":"Kombo HQ","address":{"city":"Berlin","country":"DE","raw":"Sonnenallee 63\n12045 Berlin, Berlin\nGermany","state":"Berlin","street_1":"Sonnenallee 63","street_2":null,"zip_code":"12045"},"type":"OFFICE","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":"2022-08-07T14:01:29.196Z","remote_data":null}]} */
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
      address: {
        /** @default null */
        city?: string | null;
        /**
         * Contains the ISO2 country code if possible. If not, it contains the original value.
         * @default null
         */
        country?: string | null;
        /**
         * If we have address data, this is filled with the raw address string.
         * @default null
         */
        raw?: string | null;
        /** @default null */
        state?: string | null;
        /**
         * If we can parse the address data, this field contains the first part of the street information.
         * @default null
         */
        street_1?: string | null;
        /** @default null */
        street_2?: string | null;
        /** @default null */
        zip_code?: string | null;
      };
      /** The work location’s type. A freeform string. */
      type: string | null;
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
export type GetHrisAbsenceTypesParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetHrisAbsenceTypesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisAbsenceTypesParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisAbsenceTypesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
export type GetHrisAbsenceTypesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisAbsenceTypesParameterRemoteIds = string;

export interface GetHrisAbsenceTypesSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"xzZoKssDaMZAd62kxayzzQvD","remote_id":"91","name":"Vacation","unit":"DAYS","half_days_supported":true,"exact_times_supported":false,"remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null}]} */
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
      unit: "HOURS" | "DAYS" | null;
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
export type GetHrisTimeOffBalancesParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetHrisTimeOffBalancesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisTimeOffBalancesParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisTimeOffBalancesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
export type GetHrisTimeOffBalancesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisTimeOffBalancesParameterRemoteIds = string;

/** Filter by a specific employee using their ID. */
export type GetHrisTimeOffBalancesParameterEmployeeId = string;

export interface GetHrisTimeOffBalancesSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"FuyRuk5NqP3qTcThED3ymTuE","remote_id":"124123","employee_id":"2Up4ZCvq1bFVzmzXG6EWzV3j","type_id":"BQJaBxRCiqN46G27VTegvkEr","balance":14,"balance_unit":"DAYS","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"used":3,"used_unit":"DAYS","remote_data":null,"type":{"id":"xzZoKssDaMZAd62kxayzzQvD","remote_id":"91","name":"Vacation","unit":"DAYS","half_days_supported":true,"exact_times_supported":false,"remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null}}]} */
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
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      balance: number | null;
      /** The time-unit of the balance. */
      balance_unit: "HOURS" | "DAYS" | null;
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
      /**
       * The amount of time used by the employee.
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      used: number | null;
      /** The time-unit of the used time. */
      used_unit: "HOURS" | "DAYS" | null;
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
      remote_data: Record<string, any>;
      /** @example {"id":"xzZoKssDaMZAd62kxayzzQvD","remote_id":"91","name":"Vacation","unit":"DAYS","half_days_supported":true,"exact_times_supported":false,"remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null} */
      type: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
        /** The absence’s name. */
        name: string | null;
        /** The time-unit of the absence. */
        unit: "HOURS" | "DAYS" | null;
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
      };
    }[];
  };
}

export interface GetHrisTimeOffBalancesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisAbsencesParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetHrisAbsencesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisAbsencesParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisAbsencesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
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

export interface GetHrisAbsencesSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"22st2Ji8XpncEYEak8mvQgQF","remote_id":"1348","employee_id":"JDdUy9kiH5APaGizFrgNmQjM","approver_id":"AgXEispYPP1BbToHpqnqcpxy","start_date":"2022-08-04","end_date":"2022-08-05","start_half_day":true,"end_half_day":false,"start_time":"13:15:00","end_time":"17:00:00","amount":2,"unit":"DAYS","status":"APPROVED","employee_note":"Visiting my family.","type_id":"xzZoKssDaMZAd62kxayzzQvD","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":"2022-08-07T14:01:29.196Z","remote_data":null,"type":{"id":"xzZoKssDaMZAd62kxayzzQvD","remote_id":"91","name":"Vacation","unit":"DAYS","half_days_supported":true,"exact_times_supported":false,"remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null}}]} */
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
      start_date: string | null;
      /** The date this absence ends in the `yyyy-MM-dd` format. */
      end_date: string | null;
      /** `true` if the absence starts in the middle of the day, `false` if not, and `null` if the absence type doesn't support half-day absences. If an absence goes across multiple days and `start_half_day` is set, it means that on the last day the absence is only on the first half of the day. */
      start_half_day: boolean | null;
      /** `true` if the absence ends in the middle of the day, `false` if not, and `null` if the absence type doesn't support half-day absences. If an absence goes across multiple days and `end_half_day` is set, it means that on the first day the absence only starts in the second half-day. */
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
      /** The absence’s current status. In rare cases where we can’t find a clear mapping, the original string is passed through. */
      status?: "REQUESTED" | "APPROVED" | "DECLINED" | "CANCELLED" | "DELETED" | string | null;
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
      remote_data: Record<string, any>;
      /** @example {"id":"xzZoKssDaMZAd62kxayzzQvD","remote_id":"91","name":"Vacation","unit":"DAYS","half_days_supported":true,"exact_times_supported":false,"remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null} */
      type: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string;
        /** The absence’s name. */
        name: string | null;
        /** The time-unit of the absence. */
        unit: "HOURS" | "DAYS" | null;
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
      };
    }[];
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
    /** The Kombo ID of the employee to which the absence belongs to. The ID can be used to retrieve the employee from the `get employees` endpoint. */
    employee_id: string;
    /** **(⚠️ Deprecated - We won't increase coverage for this feature)** The Kombo ID of the employee who is responsible for approving this absence. */
    approver_id: string | null;
    /** The date this absence starts in the `yyyy-MM-dd` format. */
    start_date: string | null;
    /** The date this absence ends in the `yyyy-MM-dd` format. */
    end_date: string | null;
    /** `true` if the absence starts in the middle of the day, `false` if not, and `null` if the absence type doesn't support half-day absences. If an absence goes across multiple days and `start_half_day` is set, it means that on the last day the absence is only on the first half of the day. */
    start_half_day: boolean | null;
    /** `true` if the absence ends in the middle of the day, `false` if not, and `null` if the absence type doesn't support half-day absences. If an absence goes across multiple days and `end_half_day` is set, it means that on the first day the absence only starts in the second half-day. */
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
    /** The absence’s current status. In rare cases where we can’t find a clear mapping, the original string is passed through. */
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
    remote_data: Record<string, any>;
  };
}

export interface PostHrisAbsencesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PostHrisAbsencesRequestBody = {
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
   * @exclusiveMin false
   * @max 1.7976931348623157e+308
   * @exclusiveMax false
   */
  amount?: number;
  /** The time unit of the `amount` value. Specifying this also requires specifying `amount`. */
  unit?: "HOURS" | "DAYS";
  /** A note describing the reason for this absence. */
  employee_note: string | null;
  /**
   * The time of when the absence begins. Follows the format `HH:mm` or `HH:mm:ss` (e.g., `14:45:15`). If `start_time` is specified, `end_time` has to be specified as well.
   * @pattern /^(?:2[0-3]|[01]?\d):[0-5]?\d(:[0-5]?\d)?$/
   */
  start_time?: string;
  /**
   * The time of when the absence ends. Follows the format `HH:mm` or `HH:mm:ss` (e.g., `14:45:15`). If `end_time` is specified, `start_time` has to be specified as well.
   * @pattern /^(?:2[0-3]|[01]?\d):[0-5]?\d(:[0-5]?\d)?$/
   */
  end_time?: string;
};

/** The Kombo ID of the absence */
export type DeleteHrisAbsencesAbsenceIdParameterAbsenceId = string;

export interface DeleteHrisAbsencesAbsenceIdSuccessfulResponse {
  status: "success";
  /** @example {"id":"22st2Ji8XpncEYEak8mvQgQF","remote_id":"1348","employee_id":"JDdUy9kiH5APaGizFrgNmQjM","approver_id":"AgXEispYPP1BbToHpqnqcpxy","start_date":"2022-08-04","end_date":"2022-08-05","start_half_day":true,"end_half_day":false,"start_time":"13:15:00","end_time":"17:00:00","amount":2,"unit":"DAYS","status":"APPROVED","employee_note":"Visiting my family.","type_id":"xzZoKssDaMZAd62kxayzzQvD","changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":"2022-08-07T14:01:29.196Z","remote_data":null} */
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
    start_date: string | null;
    /** The date this absence ends in the `yyyy-MM-dd` format. */
    end_date: string | null;
    /** `true` if the absence starts in the middle of the day, `false` if not, and `null` if the absence type doesn't support half-day absences. If an absence goes across multiple days and `start_half_day` is set, it means that on the last day the absence is only on the first half of the day. */
    start_half_day: boolean | null;
    /** `true` if the absence ends in the middle of the day, `false` if not, and `null` if the absence type doesn't support half-day absences. If an absence goes across multiple days and `end_half_day` is set, it means that on the first day the absence only starts in the second half-day. */
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
    /** The absence’s current status. In rare cases where we can’t find a clear mapping, the original string is passed through. */
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
    remote_data: Record<string, any>;
  };
}

export interface DeleteHrisAbsencesAbsenceIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type DeleteHrisAbsencesAbsenceIdRequestBody = object;

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetHrisLegalEntitiesParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetHrisLegalEntitiesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetHrisLegalEntitiesParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetHrisLegalEntitiesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
export type GetHrisLegalEntitiesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetHrisLegalEntitiesParameterRemoteIds = string;

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
      /** The legal entity’s name. */
      name: string | null;
      /** The legal entity’s address. */
      address: {
        /** @default null */
        city?: string | null;
        /**
         * Contains the ISO2 country code if possible. If not, it contains the original value.
         * @default null
         */
        country?: string | null;
        /**
         * If we have address data, this is filled with the raw address string.
         * @default null
         */
        raw?: string | null;
        /** @default null */
        state?: string | null;
        /**
         * If we can parse the address data, this field contains the first part of the street information.
         * @default null
         */
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

export interface GetHrisAttendanceSuccessfulResponse {
  status: "success";
  data: object;
}

export interface GetHrisAttendanceErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAtsApplicationsParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetAtsApplicationsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsApplicationsParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetAtsApplicationsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
export type GetAtsApplicationsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetAtsApplicationsParameterRemoteIds = string;

/** **(⚠️ Deprecated - Use the `outcomes` filter instead.)** Filter applications by outcome. This allows you to get applications that are for example `PENDING`, `HIRED`, or `DECLINED`. */
export enum GetAtsApplicationsParameterOutcome {
  PENDING = "PENDING",
  HIRED = "HIRED",
  DECLINED = "DECLINED",
}

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

/**
 * Filter applications by the day they were created in the remote system. This allows you to get applications that were created on or after a certain day.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsApplicationsParameterRemoteCreatedAfter = string;

export interface GetAtsApplicationsSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","outcome":"HIRED","rejection_reason_name":"Any text string","current_stage_id":"5J7L4b48wBfffYwek9Az9pkM","job_id":"H5daSm8e85Dmvmne3wLeCPhX","candidate_id":"H77fDF8uvEzGNPRubiz5DvQ7","custom_fields":{},"integration_fields":[],"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"remote_created_at":"2022-08-07T14:01:29.196Z","remote_updated_at":"2022-08-07T14:01:29.196Z","remote_data":null,"candidate":{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","first_name":"John","last_name":"Doe","email_addresses":[{"email_address":"john.doe@example.com","type":"PRIVATE"}],"tags":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"High Potential"}]},"current_stage":{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"Initial Screening"},"job":{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"Backend Engineer"},"interviews":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","title":"Interview with John Doe","starting_at":"2023-06-26T14:30:00.000Z","ending_at":"2023-06-26T15:30:00.000Z","location":{"city":"Berlin","country":"DE","raw":"Berlin, Germany","state":"Berlin","street_1":"Lohmühlenstraße 65","street_2":null,"zip_code":"12435"}}],"offers":[{"id":"76bab8LKuFtqpZ89mofCPMHX","remote_id":"6","status":"ACCEPTED"}]}]} */
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
      outcome: "PENDING" | "HIRED" | "DECLINED" | null;
      /** Reason for the rejection of the candidate. */
      rejection_reason_name: string | null;
      /** ID of the current application stage */
      current_stage_id: string | null;
      /** The Kombo ID of the job which the candidate applied to. The ID can be used to retrieve the job from the `get jobs` endpoint. */
      job_id: string | null;
      /** The Kombo ID of the candidate who applied to the job. The ID can be used to retrieve the candidate from the `get candidates` endpoint. */
      candidate_id: string | null;
      /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
      custom_fields: Record<string, any>;
      /**
       * An array of selected pass-through integration fields. [Read more](/integration-fields)
       * @example [{"id":"5NVFhMpB9Ah6by44tzNjZLyE","key":"firstName","type":"DEFAULT","value":"Frank","label":"First Name"},{"id":"8nuajYpoRd5GnxEQaaWKUDYQ","key":"customTshirtSize","type":"CUSTOM","value":"XL","label":"T-Shirt Size"}]
       */
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
        /**
         * The field's value.
         * @format any
         */
        value?: any;
        /** The label of the field. (not always available) */
        label: string | null;
      }[];
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
      remote_data: Record<string, any>;
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
        email_addresses?: {
          /** @format email */
          email_address?: string | null;
          /** Kombo exposes type information through this field. If we don't get any information from the tool, we will set this to `null`. */
          type: string | null;
        }[];
        tags: {
          /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
          id: string;
          /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
          remote_id: string | null;
          name: string | null;
        }[];
      };
      /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"Initial Screening"} */
      current_stage: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /** The application stage name. For example, "Initial Screening". */
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
        location: {
          /** @default null */
          city?: string | null;
          /**
           * Contains the ISO2 country code if possible. If not, it contains the original value.
           * @default null
           */
          country?: string | null;
          /**
           * If we have address data, this is filled with the raw address string.
           * @default null
           */
          raw?: string | null;
          /** @default null */
          state?: string | null;
          /**
           * If we can parse the address data, this field contains the first part of the street information.
           * @default null
           */
          street_1?: string | null;
          /** @default null */
          street_2?: string | null;
          /** @default null */
          zip_code?: string | null;
        };
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
        status: "ACCEPTED" | "DECLINED" | "SENT" | "APPROVED" | "DRAFT" | "ABANDONED" | null;
      }[];
    }[];
  };
}

export interface GetAtsApplicationsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

/** The Kombo ID of the application you want to move to a different stage. */
export type PutAtsApplicationsApplicationIdStageParameterApplicationId = string;

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

export type PutAtsApplicationsApplicationIdStageRequestBody = {
  /** The Kombo ID of the stage to move the application to. This stage must be allowed for the job that the application is connected to. */
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

/** The Kombo ID of the application you want to create the link for. */
export type PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = string;

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

export type PostAtsApplicationsApplicationIdResultLinksRequestBody = {
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

/** The Kombo ID of the application you want to create the note for. */
export type PostAtsApplicationsApplicationIdNotesParameterApplicationId = string;

export interface PostAtsApplicationsApplicationIdNotesSuccessfulResponse {
  status: "success";
  data: object;
}

export interface PostAtsApplicationsApplicationIdNotesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PostAtsApplicationsApplicationIdNotesRequestBody = {
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
      /**
       * Visibility of the created note.
       * @format any
       */
      visibility?: any;
      /** Whether the note is in a stringified JSON format. If true, content should contain a valid JSON as per the [Recruitee API documentation](https://docs.recruitee.com/reference/candidatesidnotes) (body_json field). If false we add the note as a plain text. */
      is_json?: boolean;
    };
  };
};

/** The Kombo ID of the application you want to obtain attachments for. */
export type GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = string;

export interface GetAtsApplicationsApplicationIdAttachmentsSuccessfulResponse {
  status: "success";
  /** @example {"results":[{"type":"CV","id":"EYJjhMQT3LtVKXnTbnRT8s6U","remote_id":"GUzE666zfyjeoCJX6A8n7wh6","data_url":"https://resources.kombo.dev/7yZfKGzWigXxxRTygqAfHvyE","file_name":"Frank Doe CV.pdf","content_type":"application/x-pdf"}]} */
  data: {
    results: {
      type: "CV" | "COVER_LETTER" | "OTHER";
      id: string;
      remote_id: string;
      data_url: string;
      file_name: string;
      content_type: string;
    }[];
  };
}

export interface GetAtsApplicationsApplicationIdAttachmentsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = string;

export interface PostAtsApplicationsApplicationIdAttachmentsSuccessfulResponse {
  status: "success";
  data: object;
}

export interface PostAtsApplicationsApplicationIdAttachmentsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PostAtsApplicationsApplicationIdAttachmentsRequestBody = {
  attachment: {
    /** Name of the file you want to upload. */
    name: string;
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
  } & {
    type: "CV" | "COVER_LETTER" | "OTHER";
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
export type GetAtsCandidatesParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetAtsCandidatesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsCandidatesParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetAtsCandidatesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
export type GetAtsCandidatesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetAtsCandidatesParameterRemoteIds = string;

/**
 * Filter the candidates based on an email address. When set, returns only the candidates where the given `email` is in `email_addresses`.
 * @format email
 */
export type GetAtsCandidatesParameterEmail = string;

/** Filter by a comma-separated list of job IDs. We will only return candidates that have applied to _any_ of the jobs. */
export type GetAtsCandidatesParameterJobIds = string;

export interface GetAtsCandidatesSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","first_name":"John","last_name":"Doe","company":"Acme, Inc.","title":"Head of Marketing","confidential":false,"source":"Employee Referral","phone_numbers":[{"phone_number":"+1-541-754-3010","type":"HOME"}],"email_addresses":[{"email_address":"john.doe@example.com","type":"PRIVATE"}],"social_media":[{"link":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","type":"YOUTUBE","username":null}],"location":{"city":"Berlin","country":"DE","raw":"Berlin, Germany","state":"Berlin","street_1":"Lohmühlenstraße 65","street_2":null,"zip_code":"12435"},"custom_fields":{},"integration_fields":[],"remote_created_at":"2022-04-02T00:00:00.000Z","remote_updated_at":"2022-04-04T00:00:00.000Z","remote_data":null,"changed_at":"2022-04-04T00:00:00.000Z","remote_deleted_at":null,"applications":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","outcome":"HIRED","rejection_reason_name":"Any text string","current_stage":{"id":"26vafvWSRmbhNcxJYqjCzuJg","name":"Initial Screening","remote_id":"32"},"job":{"id":"26vafvWSRmbhNcxJYqjCzuJg","name":"Backend Engineer","remote_id":"32"}}],"tags":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","name":"High Potential","remote_id":"32"}]}]} */
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
      phone_numbers?: {
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
      email_addresses?: {
        /** @format email */
        email_address?: string | null;
        /** Kombo exposes type information through this field. If we don't get any information from the tool, we will set this to `null`. */
        type: string | null;
      }[];
      /**
       * List of social media accounts of the candidate.
       * @default []
       */
      social_media?: {
        /** @default null */
        link?: string | null;
        /** @default null */
        type?: string | null;
        /** @default null */
        username?: string | null;
      }[];
      /** Location of the candidate. */
      location?: {
        /** @default null */
        city?: string | null;
        /**
         * Contains the ISO2 country code if possible. If not, it contains the original value.
         * @default null
         */
        country?: string | null;
        /**
         * If we have address data, this is filled with the raw address string.
         * @default null
         */
        raw?: string | null;
        /** @default null */
        state?: string | null;
        /**
         * If we can parse the address data, this field contains the first part of the street information.
         * @default null
         */
        street_1?: string | null;
        /** @default null */
        street_2?: string | null;
        /** @default null */
        zip_code?: string | null;
      };
      /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
      custom_fields: Record<string, any>;
      /**
       * An array of selected pass-through integration fields. [Read more](/integration-fields)
       * @example [{"id":"5NVFhMpB9Ah6by44tzNjZLyE","key":"firstName","type":"DEFAULT","value":"Frank","label":"First Name"},{"id":"8nuajYpoRd5GnxEQaaWKUDYQ","key":"customTshirtSize","type":"CUSTOM","value":"XL","label":"T-Shirt Size"}]
       */
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
        /**
         * The field's value.
         * @format any
         */
        value?: any;
        /** The label of the field. (not always available) */
        label: string | null;
      }[];
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
      applications: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /**
         * Parsed status of the application. If Kombo identifies that the application was accepted and the candidate hired, it will be `HIRED`. If the application was rejected or the candidate declined, it will be `DECLINED`. If the application is still in process, it will be `PENDING`.
         * Kombo will always try to deliver this information as reliably as possible.
         */
        outcome: "PENDING" | "HIRED" | "DECLINED" | null;
        /** Reason for the rejection of the candidate. */
        rejection_reason_name: string | null;
        /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","name":"Initial Screening","remote_id":"32"} */
        current_stage: {
          /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
          id: string;
          /** The application stage name. For example, "Initial Screening". */
          name: string | null;
          /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
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

export interface GetAtsCandidatesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export interface PostAtsCandidatesSuccessfulResponse {
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
    phone_numbers?: {
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
    email_addresses?: {
      /** @format email */
      email_address?: string | null;
      /** Kombo exposes type information through this field. If we don't get any information from the tool, we will set this to `null`. */
      type: string | null;
    }[];
    /**
     * List of social media accounts of the candidate.
     * @default []
     */
    social_media?: {
      /** @default null */
      link?: string | null;
      /** @default null */
      type?: string | null;
      /** @default null */
      username?: string | null;
    }[];
    /** Location of the candidate. */
    location?: {
      /** @default null */
      city?: string | null;
      /**
       * Contains the ISO2 country code if possible. If not, it contains the original value.
       * @default null
       */
      country?: string | null;
      /**
       * If we have address data, this is filled with the raw address string.
       * @default null
       */
      raw?: string | null;
      /** @default null */
      state?: string | null;
      /**
       * If we can parse the address data, this field contains the first part of the street information.
       * @default null
       */
      street_1?: string | null;
      /** @default null */
      street_2?: string | null;
      /** @default null */
      zip_code?: string | null;
    };
    /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
    custom_fields: Record<string, any>;
    /**
     * An array of selected pass-through integration fields. [Read more](/integration-fields)
     * @example [{"id":"5NVFhMpB9Ah6by44tzNjZLyE","key":"firstName","type":"DEFAULT","value":"Frank","label":"First Name"},{"id":"8nuajYpoRd5GnxEQaaWKUDYQ","key":"customTshirtSize","type":"CUSTOM","value":"XL","label":"T-Shirt Size"}]
     */
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
      /**
       * The field's value.
       * @format any
       */
      value?: any;
      /** The label of the field. (not always available) */
      label: string | null;
    }[];
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
    applications: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
      remote_id: string | null;
      /**
       * Parsed status of the application. If Kombo identifies that the application was accepted and the candidate hired, it will be `HIRED`. If the application was rejected or the candidate declined, it will be `DECLINED`. If the application is still in process, it will be `PENDING`.
       * Kombo will always try to deliver this information as reliably as possible.
       */
      outcome: "PENDING" | "HIRED" | "DECLINED" | null;
      /** Reason for the rejection of the candidate. */
      rejection_reason_name: string | null;
      /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","name":"Initial Screening","remote_id":"32"} */
      current_stage: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The application stage name. For example, "Initial Screening". */
        name: string | null;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
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
    }[];
    tags: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      name: string | null;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
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

export type PostAtsCandidatesRequestBody = {
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
    /** The company where the candidate is currently working. */
    company?: string;
    /** The current job title of the candidate. */
    title?: string;
    /** The phone number of the candidate. */
    phone_number?: string;
    /** The location of the candidate. */
    location?: {
      city?: string;
      /**
       * The uppercase two-letter ISO country (e.g., `DE`). For systems that use codes in formats other than `ISO 3166-1 alpha-2`, Kombo transforms the ISO Codes to the appropriate value.
       * @pattern /^[A-Z]{2}$/
       */
      country: string;
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
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      amount: number;
    };
    /**
     * A list of social media links of the candidate. The links must be valid URLs.
     * @default []
     */
    social_links?: {
      /** @format url */
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
   * Array of answers to screening questions. Currently, not all question types are supported and unsupported ones will not be submitted.
   *
   * The available questions a job can be retrieved from the get jobs endpoint. The answers will be validated based on the format of the the questions. Make sure to follow this schema to avoid errors.
   * @example [{"question_id":"D8yPrjXXvA2XeBksTmrVvKSn","answer":"Yes"}]
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
          /** Name of the file you want to upload. */
          name: string;
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
  }[];
  /**
   * An array of the attachments you would like upload.
   * @default []
   */
  attachments?: ({
    /** Name of the file you want to upload. */
    name: string;
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
  } & {
    type: "CV" | "COVER_LETTER" | "OTHER";
  })[];
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
      update_existing_candidate?: boolean;
    };
    teamtailor?: {
      /** Fields that we will pass through to Teamtailor's `Candidate` object. */
      candidate?: Record<string, any>;
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
    /** Fields specific to Bullhorn. */
    bullhorn?: {
      /** Fields that we will pass through to Bullhorn's `Candidate` object. */
      candidate?: Record<string, any>;
      /** Fields that we will pass through to Bullhorn's `JobSubmission` object. */
      job_submission?: Record<string, any>;
    };
    /** Fields specific to SmartRecruiters. */
    smartrecruiters?: {
      /** Fields that we will pass through to the SmartRecruiters's `Candidate` object when created with screening question answers. */
      candidate_with_questions?: Record<string, any>;
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

export type PatchAtsCandidatesCandidateIdParameterCandidateId = string;

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

export type PatchAtsCandidatesCandidateIdRequestBody = object;

/** The Kombo ID of the candidate you want to add the attachment to. */
export type PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = string;

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

export type PostAtsCandidatesCandidateIdAttachmentsRequestBody = {
  attachment: {
    /** Name of the file you want to upload. */
    name: string;
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
  } & {
    type: "CV" | "COVER_LETTER" | "OTHER";
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

/** The Kombo ID of the candidate you want to add the result link to. */
export type PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = string;

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

export type PostAtsCandidatesCandidateIdResultLinksRequestBody = {
  /** If the system allows us to display a display name for the link, we will use this label. */
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

/** The Kombo ID of the candidate you want to add the tag to. */
export type PostAtsCandidatesCandidateIdTagsParameterCandidateId = string;

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

export type PostAtsCandidatesCandidateIdTagsRequestBody = {
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
        /**
         * ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it.
         * @default null
         */
        "On-Behalf-Of"?: string | null;
      };
    };
  };
};

/** The Kombo ID of the candidate you want to remove the tag from. */
export type DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = string;

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

export type DeleteAtsCandidatesCandidateIdTagsRequestBody = {
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

/** The Kombo ID of the Candidate you want to update. */
export type PatchAtsCandidatesCandidateIdIntegrationFieldsIntegrationFieldIdParameterCandidateId = string;

/** The Kombo ID of the integration field you want to update. */
export type PatchAtsCandidatesCandidateIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = string;

export interface PatchAtsCandidatesCandidateIdIntegrationFieldsIntegrationFieldIdSuccessfulResponse {
  status: "success";
  data: object;
}

export interface PatchAtsCandidatesCandidateIdIntegrationFieldsIntegrationFieldIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PatchAtsCandidatesCandidateIdIntegrationFieldsIntegrationFieldIdRequestBody = {
  value: string | number | string | null;
};

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAtsTagsParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetAtsTagsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsTagsParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetAtsTagsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
export type GetAtsTagsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetAtsTagsParameterRemoteIds = string;

export interface GetAtsTagsSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"High Potential","remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null}]} */
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
export type GetAtsApplicationStagesParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetAtsApplicationStagesParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsApplicationStagesParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetAtsApplicationStagesParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
export type GetAtsApplicationStagesParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetAtsApplicationStagesParameterRemoteIds = string;

export interface GetAtsApplicationStagesSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"Initial Screening","remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null}]} */
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
export type GetAtsJobsParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetAtsJobsParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsJobsParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetAtsJobsParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
export type GetAtsJobsParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetAtsJobsParameterRemoteIds = string;

/** Filter by a comma-separated list of job codes. */
export type GetAtsJobsParameterJobCodes = string;

/** Filter by the `post_url` field. Can be used to find a job based on its public posting URL. */
export type GetAtsJobsParameterPostUrl = string;

/** **(⚠️ Deprecated - Use the `statuses` filter instead.)** Filter by the `status` field. Can be used to find a job based on its status. */
export enum GetAtsJobsParameterStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  DRAFT = "DRAFT",
  ARCHIVED = "ARCHIVED",
}

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

/** Filter by the `name` field. Can be used to find a job by keywords present in the job name. */
export type GetAtsJobsParameterNameContains = string;

export interface GetAtsJobsSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"Backend Engineer","job_code":"BE-2021-01","description":"<p>Kombo is hiring engineers! If you are reading this and you are located in Berlin, Germany, feel free to contact us about this position.</p>","confidential":false,"weekly_hours":37,"employment_type":"FULL_TIME","status":"OPEN","visibility":"PUBLIC","category":"Technical Job","department":"Engineering","post_url":"https://jobs.example.com/post/159829112","experience_level":"Mid-Senior","remote_work_status":"HYBRID","salary_amount":4200,"salary_amount_from":null,"salary_amount_to":null,"salary_currency":"EUR","salary_period":"MONTH","location":{"city":"Berlin","country":"DE","raw":"Berlin, Germany","state":"Berlin","street_1":"Lohmühlenstraße 65","street_2":null,"zip_code":"12435"},"custom_fields":{},"integration_fields":[],"opened_at":"2022-08-07T14:01:29.196Z","closed_at":null,"remote_created_at":"2022-08-07T14:01:29.196Z","remote_updated_at":"2022-08-07T14:01:29.196Z","contact_id":"6gT2yLMBEipd3zpezATv3Rhu","remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"stages":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"Initial Screening","index":0}],"screening_questions":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"48b4d36a-1d4b-4c50-ada7-9519078e65b4","title":"Which is your primary programming language?","description":"Please enter the language you are most comfortable with.","format":{"display_type":"SINGLE_LINE","max_length":null,"type":"TEXT"},"index":0,"required":true,"precondition_question_id":"4ZVteCSSgDw3BdwGzcQqGEPk","precondition_options":["7qd5qjPwDHarsMLFMGzXYG1K"]}],"job_postings":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"48b4d36a-1d4b-4c50-ada7-9519078e65b4","title":"Frontend Engineer","description_html":"<p>We are looking for a Frontend Engineer.</p>","status":"ACTIVE","visibility":"PUBLIC","url":"https://jobs.example.com/post/159829112","remote_data":null}],"hiring_team":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","first_name":"John","last_name":"Doe","email":"john.doe@kombo.dev","hiring_team_roles":["RECRUITER"]}]}]} */
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
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      weekly_hours: number | null;
      /** The type of employment contract. In rare cases where can't find a clear mapping, the original string is passed through. */
      employment_type?: "FULL_TIME" | "PART_TIME" | "CONTRACT" | "SEASONAL" | "INTERNSHIP" | string | null;
      /** The job’s current status. In rare cases where we can’t find a clear mapping, the original string is passed through. */
      status?: "OPEN" | "CLOSED" | "DRAFT" | "ARCHIVED" | string | null;
      /**
       * Describes the visibility of the job:
       *
       * - `PUBLIC`: visible to everyone, published on a job board
       * - `INTERNAL`: only visible to employees of the company itself
       * - `UNLISTED`: anyone can apply but only if they have the link to it
       * - `CONFIDENTIAL`: nobody can apply and it's only visible in the ATS to people who were invited to it
       *
       *  In rare cases where we can’t find a clear mapping, the original string is passed through.
       */
      visibility?: "PUBLIC" | "INTERNAL" | "UNLISTED" | "CONFIDENTIAL" | string | null;
      /** The category of the job (often the job industry). */
      category: string | null;
      department: string | null;
      /** The public job posting URL of the ATS itself. This can be used by external job boards to redirect applicants. */
      post_url: string | null;
      experience_level: string | null;
      /** Defines if the job supports remote work and if so, to what extent. */
      remote_work_status?: "REMOTE" | "HYBRID" | "TEMPORARY" | "ON_SITE" | string | null;
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
      /** The period of time over which the salary amount is paid (not equal to the pay frequency). In rare cases where we can’t find a clear mapping, the original string is passed through. */
      salary_period?: "YEAR" | "MONTH" | "TWO_WEEKS" | "WEEK" | "DAY" | "HOUR" | string | null;
      /** The location of the listed job. */
      location?: {
        /** @default null */
        city?: string | null;
        /**
         * Contains the ISO2 country code if possible. If not, it contains the original value.
         * @default null
         */
        country?: string | null;
        /**
         * If we have address data, this is filled with the raw address string.
         * @default null
         */
        raw?: string | null;
        /** @default null */
        state?: string | null;
        /**
         * If we can parse the address data, this field contains the first part of the street information.
         * @default null
         */
        street_1?: string | null;
        /** @default null */
        street_2?: string | null;
        /** @default null */
        zip_code?: string | null;
      };
      /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
      custom_fields: Record<string, any>;
      /**
       * An array of selected pass-through integration fields. [Read more](/integration-fields)
       * @example [{"id":"5NVFhMpB9Ah6by44tzNjZLyE","key":"firstName","type":"DEFAULT","value":"Frank","label":"First Name"},{"id":"8nuajYpoRd5GnxEQaaWKUDYQ","key":"customTshirtSize","type":"CUSTOM","value":"XL","label":"T-Shirt Size"}]
       */
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
        /**
         * The field's value.
         * @format any
         */
        value?: any;
        /** The label of the field. (not always available) */
        label: string | null;
      }[];
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
      /** Application stages a candidate can be in for this particular job.  */
      stages: ({
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
        remote_id: string | null;
        /** The application stage name. For example, "Initial Screening". */
        name: string | null;
      } & {
        /**
         * Numeric index following the order of the stages if they are ordered in the underlying tool.
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
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
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
                /** The Kombo ID of this question option. Use this ID to specify the answer to this question. */
                id: string;
                /**
                 * ID in the connected ATS. This might be null as some systems only use the name to identify the option.
                 * @default null
                 */
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
                /**
                 * ID in the connected ATS. This might be null as some systems only use the name to identify the option.
                 * @default null
                 */
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
        /**
         * The Kombo ID of another screening question. Only display this question if the specified "precondition question" is answered with one of the values in `precondition_options`.
         * @default null
         * @pattern /^[1-9A-HJ-NP-Za-km-z]+$/
         */
        precondition_question_id: string | null;
        /**
         * Where the screening question specified by `precondition_question_id` is of type `MULTI_SELECT` or `SINGLE_SELECT`, this is an array of Kombo IDs describing the valid options. If the question is of type `BOOLEAN`, this is an array containing either `true` or `false`.
         * @default null
         */
        precondition_options: string[] | boolean[] | null;
      })[];
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
        status: "ACTIVE" | "INACTIVE" | "DRAFT" | null;
        visibility: "PUBLIC" | "INTERNAL" | "UNLISTED" | null;
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
        remote_data: Record<string, any>;
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
         * @format email
         */
        email?: string | null;
        /** Array of the roles of the user for this specific job. Currently only `RECRUITER` and `HIRING_MANAGER` are mapped into our unified schema. */
        hiring_team_roles: ("RECRUITER" | "HIRING_MANAGER")[];
      }[];
    }[];
  };
}

export interface GetAtsJobsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

/** The Kombo ID or Remote ID of the Job this candidate should apply for. If you want to use the ID of the integrated system (remote_id) you need to prefix the id with "remote:". You can use the remote ID if you do not want to sync jobs. */
export type PostAtsJobsJobIdApplicationsParameterJobId = string;

export interface PostAtsJobsJobIdApplicationsSuccessfulResponse {
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
    outcome: "PENDING" | "HIRED" | "DECLINED" | null;
    /** Reason for the rejection of the candidate. */
    rejection_reason_name: string | null;
    /** ID of the current application stage */
    current_stage_id: string | null;
    /** The Kombo ID of the job which the candidate applied to. The ID can be used to retrieve the job from the `get jobs` endpoint. */
    job_id: string | null;
    /** The Kombo ID of the candidate who applied to the job. The ID can be used to retrieve the candidate from the `get candidates` endpoint. */
    candidate_id: string | null;
    /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
    custom_fields: Record<string, any>;
    /**
     * An array of selected pass-through integration fields. [Read more](/integration-fields)
     * @example [{"id":"5NVFhMpB9Ah6by44tzNjZLyE","key":"firstName","type":"DEFAULT","value":"Frank","label":"First Name"},{"id":"8nuajYpoRd5GnxEQaaWKUDYQ","key":"customTshirtSize","type":"CUSTOM","value":"XL","label":"T-Shirt Size"}]
     */
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
      /**
       * The field's value.
       * @format any
       */
      value?: any;
      /** The label of the field. (not always available) */
      label: string | null;
    }[];
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
    remote_data: Record<string, any>;
    /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","name":"Initial Screening","remote_id":"32"} */
    current_stage: {
      /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
      id: string;
      /** The application stage name. For example, "Initial Screening". */
      name: string | null;
      /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
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
      phone_numbers?: {
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
      email_addresses?: {
        /** @format email */
        email_address?: string | null;
        /** Kombo exposes type information through this field. If we don't get any information from the tool, we will set this to `null`. */
        type: string | null;
      }[];
      /**
       * List of social media accounts of the candidate.
       * @default []
       */
      social_media?: {
        /** @default null */
        link?: string | null;
        /** @default null */
        type?: string | null;
        /** @default null */
        username?: string | null;
      }[];
      /** Location of the candidate. */
      location?: {
        /** @default null */
        city?: string | null;
        /**
         * Contains the ISO2 country code if possible. If not, it contains the original value.
         * @default null
         */
        country?: string | null;
        /**
         * If we have address data, this is filled with the raw address string.
         * @default null
         */
        raw?: string | null;
        /** @default null */
        state?: string | null;
        /**
         * If we can parse the address data, this field contains the first part of the street information.
         * @default null
         */
        street_1?: string | null;
        /** @default null */
        street_2?: string | null;
        /** @default null */
        zip_code?: string | null;
      };
      /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
      custom_fields: Record<string, any>;
      /**
       * An array of selected pass-through integration fields. [Read more](/integration-fields)
       * @example [{"id":"5NVFhMpB9Ah6by44tzNjZLyE","key":"firstName","type":"DEFAULT","value":"Frank","label":"First Name"},{"id":"8nuajYpoRd5GnxEQaaWKUDYQ","key":"customTshirtSize","type":"CUSTOM","value":"XL","label":"T-Shirt Size"}]
       */
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
        /**
         * The field's value.
         * @format any
         */
        value?: any;
        /** The label of the field. (not always available) */
        label: string | null;
      }[];
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
      tags: {
        /** The globally unique ID of this object generated by Kombo. We recommend using this as a stable primary key for syncing. */
        id: string;
        name: string | null;
        /** The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. */
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

export type PostAtsJobsJobIdApplicationsRequestBody = {
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
    /** The company where the candidate is currently working. */
    company?: string;
    /** The current job title of the candidate. */
    title?: string;
    /** The phone number of the candidate. */
    phone_number?: string;
    /** The location of the candidate. */
    location?: {
      city?: string;
      /**
       * The uppercase two-letter ISO country (e.g., `DE`). For systems that use codes in formats other than `ISO 3166-1 alpha-2`, Kombo transforms the ISO Codes to the appropriate value.
       * @pattern /^[A-Z]{2}$/
       */
      country: string;
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
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      amount: number;
    };
    /**
     * A list of social media links of the candidate. The links must be valid URLs.
     * @default []
     */
    social_links?: {
      /** @format url */
      url: string;
    }[];
  };
  /**
   * Array of the attachments you would like to upload. The first CV in the attachments will be treated as the resume of the candidate when the tool allows previewing a resume.
   * @default []
   */
  attachments?: ({
    /** Name of the file you want to upload. */
    name: string;
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
  } & {
    type: "CV" | "COVER_LETTER" | "OTHER";
  })[];
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
      update_existing_candidate?: boolean;
    };
    teamtailor?: {
      /** Fields that we will pass through to Teamtailor's `Candidate` object. */
      candidate?: Record<string, any>;
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
    /** Fields specific to Bullhorn. */
    bullhorn?: {
      /** Fields that we will pass through to Bullhorn's `Candidate` object. */
      candidate?: Record<string, any>;
      /** Fields that we will pass through to Bullhorn's `JobSubmission` object. */
      job_submission?: Record<string, any>;
    };
    /** Fields specific to SmartRecruiters. */
    smartrecruiters?: {
      /** Fields that we will pass through to the SmartRecruiters's `Candidate` object when created with screening question answers. */
      candidate_with_questions?: Record<string, any>;
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
          /** Name of the file you want to upload. */
          name: string;
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
  }[];
};

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAtsUsersParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetAtsUsersParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsUsersParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetAtsUsersParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
export type GetAtsUsersParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetAtsUsersParameterRemoteIds = string;

export interface GetAtsUsersSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","first_name":"John","last_name":"Doe","email":"john.doe@kombo.dev","remote_data":null,"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null}]} */
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
       * @format email
       */
      email: string | null;
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
    }[];
  };
}

export interface GetAtsUsersErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAtsOffersParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetAtsOffersParameterPageSize = number;

/**
 * Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden.
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetAtsOffersParameterUpdatedAfter = string;

/**
 * By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.
 * @default "false"
 */
export enum GetAtsOffersParameterIncludeDeleted {
  True = "true",
  False = "false",
}

/** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
export type GetAtsOffersParameterIds = string;

/** Filter by a comma-separated list of remote IDs. */
export type GetAtsOffersParameterRemoteIds = string;

export interface GetAtsOffersSuccessfulResponse {
  status: "success";
  /** @example {"next":"eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=","results":[{"id":"76bab8LKuFtqpZ89mofCPMHX","remote_id":"6","status":"ACCEPTED","employment_start_date":"2022-08-07T14:01:29.196Z","application_id":"BAkbueBMBusj9Bg7L1Wps3AR","custom_fields":{},"integration_fields":[],"changed_at":"2022-08-07T14:01:29.196Z","remote_deleted_at":null,"remote_created_at":"2022-08-07T14:01:29.196Z","remote_updated_at":"2022-08-07T14:01:29.196Z","remote_data":null,"application":{"candidate":{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","first_name":"John","last_name":"Doe","email_addresses":[{"email_address":"john.doe@example.com","type":"PRIVATE"}]},"job":{"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","name":"Backend Engineer"}}}]} */
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
      status: "ACCEPTED" | "DECLINED" | "SENT" | "APPROVED" | "DRAFT" | "ABANDONED" | null;
      /**
       * The date when the employment described by the offer starts. Can be in the past or future.
       * @format date-time
       */
      employment_start_date: string | null;
      /** The Kombo ID of the application this interview belongs to. The ID can be used to retrieve the application from the `get applications` endpoint. */
      application_id: string | null;
      /** A key-value store of fields not covered by the schema. [Read more](/custom-fields) */
      custom_fields: Record<string, any>;
      /**
       * An array of selected pass-through integration fields. [Read more](/integration-fields)
       * @example [{"id":"5NVFhMpB9Ah6by44tzNjZLyE","key":"firstName","type":"DEFAULT","value":"Frank","label":"First Name"},{"id":"8nuajYpoRd5GnxEQaaWKUDYQ","key":"customTshirtSize","type":"CUSTOM","value":"XL","label":"T-Shirt Size"}]
       */
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
        /**
         * The field's value.
         * @format any
         */
        value?: any;
        /** The label of the field. (not always available) */
        label: string | null;
      }[];
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
      remote_data: Record<string, any>;
      application: {
        /** @example {"id":"26vafvWSRmbhNcxJYqjCzuJg","remote_id":"32","first_name":"John","last_name":"Doe","email_addresses":[{"email_address":"john.doe@example.com","type":"PRIVATE"}]} */
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
          email_addresses: {
            /** @format email */
            email_address?: string | null;
            /** Kombo exposes type information through this field. If we don't get any information from the tool, we will set this to `null`. */
            type: string | null;
          }[];
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
      };
    }[];
  };
}

export interface GetAtsOffersErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export interface GetAssessmentPackagesSuccessfulResponse {
  status: "success";
  /** @example {"packages":[{"id":"1001","name":"TypeScript","description":"TypeScript coding skills assessments","updated_at":"2023-06-29T18:47:40.890Z","type":"SKILLS_TEST"}]} */
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
      type: "BEHAVIORAL" | "VIDEO_INTERVIEW" | "SKILLS_TEST" | "BACKGROUND_CHECK" | "REFERENCE_CHECK" | null;
    }[];
  };
}

export interface GetAssessmentPackagesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export interface PutAssessmentPackagesSuccessfulResponse {
  status: "success";
  data: object;
}

export interface PutAssessmentPackagesErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PutAssessmentPackagesRequestBody = {
  packages: {
    /** A unique identifier for the assessment package. */
    id: string;
    type: "BEHAVIORAL" | "VIDEO_INTERVIEW" | "SKILLS_TEST" | "BACKGROUND_CHECK" | "REFERENCE_CHECK";
    /** The name of the assessment package. */
    name: string;
    /** Description about the package. Some ATSs will display this in their UI. */
    description: string;
  }[];
};

/** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
export type GetAssessmentOrdersOpenParameterCursor = string;

/**
 * The number of results to return per page.
 * @format int64
 * @min 1
 * @exclusiveMin false
 * @max 250
 * @exclusiveMax false
 * @default 100
 */
export type GetAssessmentOrdersOpenParameterPageSize = number;

export interface GetAssessmentOrdersOpenSuccessfulResponse {
  status: "success";
  data: {
    next: string | null;
    results: {
      id: string;
      package_id: string;
      candidate: {
        email: string;
        first_name?: string | null;
        last_name?: string | null;
        phone?: string | null;
        remote_id?: string | null;
      };
    }[];
  };
}

export interface GetAssessmentOrdersOpenErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = string;

export interface PutAssessmentOrdersAssessmentOrderIdResultSuccessfulResponse {
  status: "success";
  data: object;
}

export interface PutAssessmentOrdersAssessmentOrderIdResultErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PutAssessmentOrdersAssessmentOrderIdResultRequestBody = {
  /**
   * Status of the assessment.
   *
   * **Please note only the orders with the status of `OPEN` can be updated.**
   */
  status: "COMPLETED" | "CANCELLED";
  /** @format url */
  result_url: string;
  /**
   * YYYY-MM-DDTHH:mm:ss.sssZ
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  completed_at: string;
  /**
   * @format double
   * @min 5e-324
   * @exclusiveMin false
   * @max 1.7976931348623157e+308
   * @exclusiveMax false
   */
  score?: number;
  /**
   * @format double
   * @min 5e-324
   * @exclusiveMin false
   * @max 1.7976931348623157e+308
   * @exclusiveMax false
   */
  max_score?: number;
  /** @default [] */
  attributes?: {
    field: string;
    value: string;
  }[];
};

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

export type PostConnectCreateLinkRequestBody = {
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
  integration_category?: "HRIS" | "ATS" | "ASSESSMENT";
  /**
   * Pre-define a tool this integration link can be used for.
   * @default null
   */
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
    | "greenhouse"
    | "greenhousejobboard"
    | "teamtailor"
    | "ashby"
    | "talentsoft"
    | "talentsoftcustomer"
    | "concludis"
    | "onlyfy"
    | "ukgpro"
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
    | "fountain"
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
    | "eploy"
    | "jobdiva"
    | "trinet"
    | "paylocity"
    | "paycor"
    | "namely"
    | "paycom"
    | "insperity"
    | "paychex"
    | "avature"
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
    | "sandbox"
    | "guidecom"
    | "sftp"
    | null;
  /**
   * Language of the connection flow UI.
   * @default "en"
   */
  language?: "en" | "de" | "fr" | "it" | "es" | null;
  /**
   * Specify a scope config that should be used for this integration. This is an advanced feature, only use it if you know what you're doing!
   * @default null
   */
  scope_config_id?: string | null;
  /**
   * Enable the (filtering feature)[https://docs.kombo.dev/other/filtering] for the integration. HRIS only.
   * @default false
   */
  enable_filtering?: boolean;
};

export type GetConnectIntegrationByTokenTokenParameterToken = string;

export interface GetConnectIntegrationByTokenTokenSuccessfulResponse {
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

export interface GetConnectIntegrationByTokenTokenErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

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

export type PostConnectActivateIntegrationRequestBody = {
  token: string;
};

export interface GetCustomDatevSystemInformationSuccessfulResponse {
  status: "success";
  /** @example {"consultant_number":1234567,"client_number":99999,"target_system":"LODAS"} */
  data: {
    /**
     * The consultant number used for this DATEV integration (BeraterNr).
     * @format double
     * @min 1000
     * @exclusiveMin false
     * @max 9999999
     * @exclusiveMax false
     */
    consultant_number: number;
    /**
     * The client number used for this DATEV integration (MandantenNr).
     * @format double
     * @min 1
     * @exclusiveMin false
     * @max 99999
     * @exclusiveMax false
     */
    client_number: number;
    /** The target system's name (Ziel). */
    target_system: "LODAS" | "LuG";
  };
}

export interface GetCustomDatevSystemInformationErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export interface PostCustomDatevPassthroughSuccessfulResponse {
  status: "success";
  data: object;
}

export interface PostCustomDatevPassthroughErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PostCustomDatevPassthroughRequestBody = {
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
};

export interface GetCustomDatevCheckEauPermissionSuccessfulResponse {
  status: "success";
  data: {
    ready: boolean;
    error?: string;
  };
}

export interface GetCustomDatevCheckEauPermissionErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type GetCustomDatevEauRequestsEauIdParameterEauId = string;

export interface GetCustomDatevEauRequestsEauIdSuccessfulResponse {
  status: "success";
  data: {
    /** @format any */
    raw?: any;
  };
}

export interface GetCustomDatevEauRequestsEauIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = string;

export interface PostCustomDatevEmployeesEmployeeIdDownloadDocumentSuccessfulResponse {
  status: "success";
  data: {
    /**
     * The URL to download the document from.
     * @format url
     */
    data_url: string;
    file_name: string;
    content_type: string;
  };
}

export interface PostCustomDatevEmployeesEmployeeIdDownloadDocumentErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

/** The data to request an electronic certificate of incapacity for work (eAU). */
export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = {
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
};

/** ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`) */
export type PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = string;

export interface PostCustomDatevEmployeesEmployeeIdEauRequestsSuccessfulResponse {
  status: "success";
  data: {
    eau_id: string;
  };
}

export interface PostCustomDatevEmployeesEmployeeIdEauRequestsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

/** The data to request an electronic certificate of incapacity for work (eAU). */
export type PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = {
  /**
   * Date "start_work_incapacity" from the original eAU-Request.
   * @pattern /^\d{4}-\d{2}-\d{2}$/
   */
  start_work_incapacity: string;
  notification?: {
    /**
     * This is the email address that should be notified as soon as a feedback is received.
     * @format email
     * @pattern /^[\w!#$%&'*+/=?^`{|}~-]+(?:\.[\w!#$%&'*+/=?^`{|}~-]+)*@(?:[\w-]+\.)+[\w-]{2,}$/
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
     * @pattern /([\d+])[\d ()/-]+/
     */
    telephone: string;
    /**
     * @minLength 0
     * @maxLength 20
     * @pattern /([\d+])[\d ()/-]+/
     */
    fax: string;
    /**
     * @minLength 0
     * @maxLength 70
     * @pattern /^(?=.{1,64}@)[\w-]+(\.[\w-]+)*@[^-][\dA-Za-z-]+(\.[\dA-Za-z-]+)*(\.[A-Za-z]{2,})$/
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
     * @pattern /[\dA-Za-z]/
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
};

/** ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`) */
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = string;

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

export type PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = {
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
  /**
   * Add custom entries to the DATEV Lodas Standard Erfassungstabelle.
   * @default []
   */
  custom_lodas?: {
    /**
     * This amount value will be mapped to Datev "Wert" field.
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    amount: number;
    /**
     * Choose a valid Lodas Lohnart.
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    lohnart: number;
    /**
     * Choose a valid Lodas Bearbeitungsschlüssel. We list the valid Bearbeitungsschlüssel [here](https://storage.googleapis.com/kombo-assets/integrations/datev/lodas_bs.json).
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    bearbeitungsschluessel: number;
  }[];
};

/** ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`) */
export type PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = string;

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

export type PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = {
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
    /**
     * The Lohnart that should be used for this compensation. If not specified, the default Lohnart that was requested in the connection flow will be used. Generally Lohnart is only available for monthly compensations.
     * @format int64
     * @min 1
     * @exclusiveMin false
     * @max 9999
     * @exclusiveMax false
     */
    lohnart?: number;
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

export type PostCustomDatevPushDataGeneralRequestBody = object;

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

export type PostCustomDatevPushDataPayrollRequestBody = {
  /**
   * Specify the month for which the payroll data should be submitted. The date must be specified as the first day of a month (e.g. 2022-12-01).
   * @format date-time
   * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
   */
  payroll_month: string;
};

/** ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`) */
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = string;

export interface PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsSuccessfulResponse {
  status: "success";
  data: object;
}

export interface PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}

export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = {
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
   * @min 5e-324
   * @exclusiveMin false
   * @max 1.7976931348623157e+308
   * @exclusiveMax false
   */
  element_amount?: number;
  /** The string of the supplement if it requires a string. */
  element_string?: string;
};

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

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

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

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.kombo.dev/v1";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

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
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: FormData) =>
      (Array.from(input.keys()) || []).reduce((formData, key) => {
        const property = input.get(key);
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
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

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
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

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
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
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
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
        GetCheckApiKeySuccessfulResponse,
        | GetCheckApiKeyErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Trigger a sync for a specific integration. <Warning>Please note that it is **not** necessary nor recommended to call this endpoint periodically on your side. Kombo already performs period syncs for you and you should only trigger syncs yourself in special cases (like when a user clicks on a "Sync" button in your app).</Warning>
     *
     * @tags General
     * @name PostForceSync
     * @summary Trigger sync
     * @request POST:/force-sync
     * @secure
     */
    postForceSync: (data: PostForceSyncRequestBody, params: RequestParams = {}) =>
      this.request<
        PostForceSyncSuccessfulResponse,
        | PostForceSyncErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Send a request to the specified integration's native API. At Kombo we put a lot of work into making sure that our unified API covers all our customers' use cases and that they never have to think about integration-specific logic again. There are cases, however, where our customers want to build features that are very integration-specific. That's where this endpoint comes in. Pass in details about the request you want to make to the integration's API and we'll forward it for you. We'll also take care of setting the right base URL and authenticating your requests. To get started, please pick the relevant API (some tools provide multiple to due different base URLs or authentication schemes) from the table below and pass in the `{tool}/{api}` identifier as part of the path. |Integration|`{tool}/{api}`|Description| |---|---|---| |Personio|`personio/personnel`|Personio's [Personnel Data API](https://developer.personio.de/reference/get_company-employees). We automatically authenticate all requests using the client ID and secret and use `https://api.personio.de/v1` as the base URL.| |Workday|`workday/soap`|[Workday's SOAP API](https://community.workday.com/sites/default/files/file-hosting/productionapi/index.html). We automatically authenticate all requests. Set `data` to your raw xml string. Use `/` as your `path`, as we will always send requests to `https://{domain}/ccx/service/{tenant}/{service_name}/38.2`. Set your `method` to `POST`. You need to specify the `api_options` object and set `service_name` to the name of the service you want to call. Find all available services [here](https://community.workday.com/sites/default/files/file-hosting/productionapi/versions/v41.0/index.html). The string that you submit as `data` will be the content of the `soapenv:Body` tag in the request.| |SAP SuccessFactors|`successfactors/odata-v2`|[SuccessFactors' OData V2 API](https://help.sap.com/doc/74597e67f54d4f448252bad4c2b601c9/2211/en-US/SF_HCM_OData_API_REF_en.pdf). We automatically authenticate all requests and use `https://{api_domain}/odata/v2` as the base URL.| |Lever|`lever/v1`|[Lever's v1 API](https://hire.lever.co/developer/documentation). We automatically authenticate all requests using the partner credentials which have been configured in the Lever tool settings (this uses Kombo's partner credentials by default).| |Recruitee|`recruitee/default`|The [Recruitee API](https://api.recruitee.com/docs/index.html). We automatically authenticate all requests and use `https://api.recruitee.com/c/{company_id}` as the base URL.| |Greenhouse|`greenhouse/harvest`|Greenhouse [Harvest API](https://developers.greenhouse.io/harvest.html). We automatically authenticate all requests using the API key and use `https://harvest.greenhouse.io/v1` as the base URL.| |Teamtailor|`teamtailor/v1`|Teamtailor's [JSON-API](https://docs.teamtailor.com/). We authenticate all request with the Teamtailor API key and use the base URL `https://api.teamtailor.com/v1`.| |Personio|`personio/recruiting`|Personio's [Recruiting API](https://developer.personio.de/reference/get_company-employees). We automatically authenticate all requests using the Recruiting access token and use `https://api.personio.de/v1/recruiting` as the base URL.| |Personio|`personio/jobboard`|API endpoints exposed on Personio's public job board pages ([currently just the XML feed](https://developer.personio.de/reference/get_xml)). We automatically use the right `https://{company}.jobs.personio.de` base URL.| |BambooHR|`bamboohr/v1`|BambooHR's [API](https://documentation.bamboohr.com/reference/get-employee). We automatically authenticate all requests using the customer credentials `https://api.bamboohr.com/api/gateway.php/{subdomain}/v1` as the base URL.| |Workable|`workable/v1`|Workable's [API](https://workable.readme.io/reference/generate-an-access-token). We automatically authenticate all requests using the client ID and secret and use `https://subdomain.workable.com/spi/v3` as the base URL.| |HiBob|`hibob/v1`|[HibBob's v1 API](https://apidocs.hibob.com/reference/get_people). We automatically authenticate all requests using the service user credentials (or, for old integrations, the API key) and use `https://api.hibob.com/v1` as the base URL.| |Entra ID|`entraid/v1`|[AzureAD's API](https://learn.microsoft.com/en-us/graph/api/resources/identity-network-access-overview?view=graph-rest-1.0). We automatically authenticate all requests.| |Pinpoint|`pinpoint/v1`|Pinpoint's [JSON:API](https://developers.pinpointhq.com/docs). We automatically authenticate all requests using the `X-API-KEY` header and use `https://{subdomain}.pinpointhq.com/api/v1` as the base URL.| |TRAFFIT|`traffit/v2`|Traffit's [v2 API](https://api.traffit.com). We authenticate all requests with the Traffit API key and use the base URL `https://yourdomain.traffit.com/api/integration/v2`.| |Haufe Umantis|`umantis/v1`|[Umantis API v1](https://recruitingapp-91005709.umantis.com/api/v1/swagger-ui). We automatically authenticate all requests and use `https://{subdomain}.umantis.com/api/v1` as the base URL.| |HRworks|`hrworks/v2`|HRWorks's v2 [API](https://developers.hrworks.de/2.0/endpoints). We automatically authenticate all requests using the customer credentials.| |JazzHR|`jazzhr/v1`|[JazzHR's v1 API](https://www.resumatorapi.com/v1/#!`). We automatically authenticate all requests.| <Note>Please note that the passthrough API endpoints are only meant for edge cases. That's why we only expose them for new integrations after understanding a concrete customer use case. If you have such a use case in mind, please reach out to Kombo.</Note>
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
        PostPassthroughToolApiSuccessfulResponse,
        | PostPassthroughToolApiErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
        DeleteIntegrationsIntegrationIdSuccessfulResponse,
        | DeleteIntegrationsIntegrationIdErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
        GetIntegrationsIntegrationIdSuccessfulResponse,
        | GetIntegrationsIntegrationIdErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
      params: RequestParams = {},
    ) =>
      this.request<
        PostIntegrationsIntegrationIdRelinkSuccessfulResponse,
        | PostIntegrationsIntegrationIdRelinkErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
        /** The number of results to return per page. */
        page_size?: GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetIntegrationsIntegrationIdIntegrationFieldsSuccessfulResponse,
        | GetIntegrationsIntegrationIdIntegrationFieldsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
        PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdSuccessfulResponse,
        | PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
        /** The number of results to return per page. */
        page_size?: GetIntegrationsIntegrationIdCustomFieldsParameterPageSize;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetIntegrationsIntegrationIdCustomFieldsSuccessfulResponse,
        | GetIntegrationsIntegrationIdCustomFieldsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
        PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdSuccessfulResponse,
        | PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
    getToolsCategory: (category: GetToolsCategoryParameterCategory, params: RequestParams = {}) =>
      this.request<
        GetToolsCategorySuccessfulResponse,
        | GetToolsCategoryErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
        PostHrisProvisioningGroupsGroupIdDiffSuccessfulResponse,
        PostHrisProvisioningGroupsGroupIdDiffErrorResponse
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
        PostHrisProvisioningGroupsGroupIdSetupLinksSuccessfulResponse,
        | PostHrisProvisioningGroupsGroupIdSetupLinksErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Retrieve all employees. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workdaycustomreport/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday Custom Reports</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" height="16px" width="16px" class="m-0 mr-2" />rexx systems</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfitcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfitpartner/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit Partner</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kenjo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HeavenHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/entraid/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Entra ID</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/azuread/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Azure AD</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/googleworkspace/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Google Workspace</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nmbrs</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Remote</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/iriscascade/icon.svg" height="16px" width="16px" class="m-0 mr-2" />IRIS Cascade</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/okta/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Okta</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagepeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eurécia</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle HCM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Officient</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacus/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohopeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gusto</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breathe HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/catalystone/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CatalystOne</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/mirus/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Mirus</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/trinet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TriNet (Zenefits)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Rippling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sapling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sapling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lucca</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zelt/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zelt</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/planday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Planday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/boondmanager/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BoondManager</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Hailey HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/datevhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />DATEV HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sympa/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sympa</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/youforce/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Visma Raet - Youforce</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nibelis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nibelis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note>Not interested in most fields? You can use our [our Scopes feature](/scopes) to customize what data points are synced.</Note> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisEmployeesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisEmployeesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
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
        /** Filter by a comma-separated list of work emails. We will only return employees who have _any_ of the work emails. */
        work_emails?: GetHrisEmployeesParameterWorkEmails;
        /** Filter by a comma-separated list of personal emails. We will only return employees who have _any_ of the personal emails. */
        personal_emails?: GetHrisEmployeesParameterPersonalEmails;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisEmployeesSuccessfulResponse,
        | GetHrisEmployeesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Create a new employee. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/googleworkspace/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Google Workspace</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nmbrs</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Remote</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/okta/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Okta</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle HCM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohopeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gusto</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breathe HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Rippling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sapling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sapling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Create and manage employees** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "first_name": "John", "last_name": "Doe", "work_email": "john.doe@acme.com", "gender": "MALE", "date_of_birth": "1986-01-01", "start_date": "2020-04-07", "job_title": "Integrations Team Lead", "home_address": { "city": "Berlin", "country": "DE", "state": "Berlin", "street_1": "Sonnenallee 63", "zip_code": "12045" } } ```
     *
     * @tags Unified HRIS API
     * @name PostHrisEmployees
     * @summary Create employee
     * @request POST:/hris/employees
     * @secure
     */
    postHrisEmployees: (data: PostHrisEmployeesRequestBody, params: RequestParams = {}) =>
      this.request<
        PostHrisEmployeesSuccessfulResponse,
        | PostHrisEmployeesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Update an employee. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Create and manage employees** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "BkgfzSr5muN9cUTMD4wDQFn4", "first_name": "John", "last_name": "Doe", "work_email": "john.doe@acme.com", "ssn": "555-32-6395", "tax_id": "12 345 678 901", "gender": "MALE", "marital_status": "MARRIED", "date_of_birth": "1986-01-01", "start_date": "2020-04-07", "termination_date": "2022-05-20", "job_title": "Integrations Team Lead", "nationality": "DE", "home_address": { "city": "Berlin", "country": "DE", "state": "Berlin", "street_1": "Sonnenallee 63", "zip_code": "12045" } } ```
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
        PatchHrisEmployeesEmployeeIdSuccessfulResponse,
        | PatchHrisEmployeesEmployeeIdErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Uploads an document file for the specified employee. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Manage documents** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "category_id": "3Cjwu7nA7pH5cX5X1NAPmb7M", "document": { "name": "Frank Doe Employment Contract.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "content_type": "text/plain" } } ```
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
        PostHrisEmployeesEmployeeIdDocumentsSuccessfulResponse,
        | PostHrisEmployeesEmployeeIdDocumentsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Currently in closed beta. <Warning>**This endpoint is currently in closed beta!** We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning>
     *
     * @tags Unified HRIS API
     * @name GetHrisEmployeesEmployeeIdTimesheets
     * @summary Get timesheets 🦄
     * @request GET:/hris/employees/{employee_id}/timesheets
     * @secure
     */
    getHrisEmployeesEmployeeIdTimesheets: (employeeId: string, params: RequestParams = {}) =>
      this.request<
        GetHrisEmployeesEmployeeIdTimesheetsSuccessfulResponse,
        | GetHrisEmployeesEmployeeIdTimesheetsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >({
        path: `/hris/employees/${employeeId}/timesheets`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update writable integrations fields on Employees in the remote system. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Create and manage employees** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "GVQYPEDvn4dBrJxHUPuxXJ9E", "integration_field_id": "8icrU24RMhQo5hW3gsRY5YU9", "value": "New integration field value!" } ```
     *
     * @tags Unified HRIS API
     * @name PatchHrisEmployeesEmployeeIdIntegrationFieldsIntegrationFieldId
     * @summary Update fields on Employees
     * @request PATCH:/hris/employees/{employee_id}/integration-fields/{integration_field_id}
     * @secure
     */
    patchHrisEmployeesEmployeeIdIntegrationFieldsIntegrationFieldId: (
      employeeId: PatchHrisEmployeesEmployeeIdIntegrationFieldsIntegrationFieldIdParameterEmployeeId,
      integrationFieldId: PatchHrisEmployeesEmployeeIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId,
      data: PatchHrisEmployeesEmployeeIdIntegrationFieldsIntegrationFieldIdRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PatchHrisEmployeesEmployeeIdIntegrationFieldsIntegrationFieldIdSuccessfulResponse,
        | PatchHrisEmployeesEmployeeIdIntegrationFieldsIntegrationFieldIdErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >({
        path: `/hris/employees/${employeeId}/integration-fields/${integrationFieldId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get employee document categories. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. */
        page_size?: GetHrisEmployeeDocumentCategoriesParameterPageSize;
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
        ids?: GetHrisEmployeeDocumentCategoriesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisEmployeeDocumentCategoriesParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisEmployeeDocumentCategoriesSuccessfulResponse,
        | GetHrisEmployeeDocumentCategoriesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Get the teams. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workdaycustomreport/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday Custom Reports</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" height="16px" width="16px" class="m-0 mr-2" />rexx systems</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kenjo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HeavenHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/entraid/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Entra ID</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/azuread/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Azure AD</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/googleworkspace/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Google Workspace</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nmbrs</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Remote</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/iriscascade/icon.svg" height="16px" width="16px" class="m-0 mr-2" />IRIS Cascade</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/okta/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Okta</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagepeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eurécia</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle HCM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Officient</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacus/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohopeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gusto</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breathe HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/mirus/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Mirus</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/trinet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TriNet (Zenefits)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Rippling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sapling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sapling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lucca</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zelt/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zelt</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/planday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Planday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/boondmanager/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BoondManager</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Hailey HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/datevhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />DATEV HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/youforce/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Visma Raet - Youforce</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Warning> **This endpoint is deprecated!** Please use [the `/groups` endpoint](/hris/v1/get-groups) instead. It returns the same data but the naming makes more sense as the model not only includes teams but also departments and cost centers.. </Warning> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisTeamsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisTeamsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
        ids?: GetHrisTeamsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisTeamsParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisTeamsSuccessfulResponse,
        | GetHrisTeamsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Retrieve all "groups" (teams, departments, and cost centers). <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workdaycustomreport/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday Custom Reports</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" height="16px" width="16px" class="m-0 mr-2" />rexx systems</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kenjo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HeavenHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/entraid/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Entra ID</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/azuread/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Azure AD</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/googleworkspace/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Google Workspace</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nmbrs</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Remote</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/iriscascade/icon.svg" height="16px" width="16px" class="m-0 mr-2" />IRIS Cascade</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/okta/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Okta</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagepeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eurécia</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle HCM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Officient</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacus/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohopeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gusto</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breathe HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/mirus/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Mirus</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/trinet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TriNet (Zenefits)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Rippling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sapling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sapling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lucca</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zelt/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zelt</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/planday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Planday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/boondmanager/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BoondManager</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Hailey HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/datevhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />DATEV HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/youforce/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Visma Raet - Youforce</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisGroupsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisGroupsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
        ids?: GetHrisGroupsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisGroupsParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisGroupsSuccessfulResponse,
        | GetHrisGroupsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Retrieve all employments. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workdaycustomreport/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday Custom Reports</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" height="16px" width="16px" class="m-0 mr-2" />rexx systems</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfitcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfitpartner/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit Partner</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kenjo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HeavenHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nmbrs</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Remote</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/iriscascade/icon.svg" height="16px" width="16px" class="m-0 mr-2" />IRIS Cascade</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagepeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eurécia</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle HCM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Officient</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gusto</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breathe HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/catalystone/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CatalystOne</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/trinet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TriNet (Zenefits)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sapling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sapling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lucca</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zelt/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zelt</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/boondmanager/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BoondManager</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Hailey HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/datevhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />DATEV HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sympa/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sympa</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/youforce/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Visma Raet - Youforce</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nibelis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nibelis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisEmploymentsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisEmploymentsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
        ids?: GetHrisEmploymentsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisEmploymentsParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisEmploymentsSuccessfulResponse,
        | GetHrisEmploymentsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Retrieve all work locations. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workdaycustomreport/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday Custom Reports</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kenjo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HeavenHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/entraid/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Entra ID</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/azuread/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Azure AD</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/googleworkspace/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Google Workspace</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nmbrs</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Remote</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle HCM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gusto</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breathe HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/catalystone/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CatalystOne</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/trinet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TriNet (Zenefits)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Rippling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sapling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sapling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lucca</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zelt/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zelt</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/boondmanager/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BoondManager</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Hailey HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sympa/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sympa</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/youforce/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Visma Raet - Youforce</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. */
        page_size?: GetHrisLocationsParameterPageSize;
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisLocationsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisLocationsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
        ids?: GetHrisLocationsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisLocationsParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisLocationsSuccessfulResponse,
        | GetHrisLocationsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Retrieve all absence types. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" height="16px" width="16px" class="m-0 mr-2" />rexx systems</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HeavenHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eurécia</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Officient</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohopeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/trinet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TriNet (Zenefits)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Rippling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lucca</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/boondmanager/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BoondManager</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/datev/icon.svg" height="16px" width="16px" class="m-0 mr-2" />DATEV LODAS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/datevlug/icon.svg" height="16px" width="16px" class="m-0 mr-2" />DATEV Lohn & Gehalt</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisAbsenceTypesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisAbsenceTypesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
        ids?: GetHrisAbsenceTypesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisAbsenceTypesParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisAbsenceTypesSuccessfulResponse,
        | GetHrisAbsenceTypesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Retrieve all time off balances. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eurécia</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisTimeOffBalancesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisTimeOffBalancesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
        ids?: GetHrisTimeOffBalancesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisTimeOffBalancesParameterRemoteIds;
        /** Filter by a specific employee using their ID. */
        employee_id?: GetHrisTimeOffBalancesParameterEmployeeId;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisTimeOffBalancesSuccessfulResponse,
        | GetHrisTimeOffBalancesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Retrieve all absences. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" height="16px" width="16px" class="m-0 mr-2" />rexx systems</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HeavenHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eurécia</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Officient</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohopeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/trinet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TriNet (Zenefits)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Rippling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lucca</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/boondmanager/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BoondManager</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Hailey HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisAbsencesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisAbsencesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
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
        GetHrisAbsencesSuccessfulResponse,
        | GetHrisAbsencesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Create a new absence. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/datev/icon.svg" height="16px" width="16px" class="m-0 mr-2" />DATEV LODAS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/datevlug/icon.svg" height="16px" width="16px" class="m-0 mr-2" />DATEV Lohn & Gehalt</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Check [this page](/hris/features/creating-absences) for a detailed guide. <Note> This endpoint requires the permission **Manage absences** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "wXJMxwDvPAjrJ4CyqdV9", "absence_type_id": "3YKtQ7qedsrcCady1jSyAkY1", "start_date": "2019-09-17", "end_date": "2019-09-21", "start_time": "08:30:00", "end_time": "16:00:00", "start_half_day": false, "end_half_day": false, "employee_note": "Visiting the aliens" } ```
     *
     * @tags Unified HRIS API
     * @name PostHrisAbsences
     * @summary Create absence
     * @request POST:/hris/absences
     * @secure
     */
    postHrisAbsences: (data: PostHrisAbsencesRequestBody, params: RequestParams = {}) =>
      this.request<
        PostHrisAbsencesSuccessfulResponse,
        | PostHrisAbsencesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Delete this absence. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Manage absences** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "absence_id": "wXJMxwDvPAjrJ4CyqdV9" } ```
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
        DeleteHrisAbsencesAbsenceIdSuccessfulResponse,
        | DeleteHrisAbsencesAbsenceIdErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Retrieve all legal entites. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workdaycustomreport/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday Custom Reports</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfitcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfitpartner/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit Partner</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kenjo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HeavenHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/entraid/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Entra ID</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/azuread/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Azure AD</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nmbrs</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/okta/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Okta</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagepeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle HCM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacus/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gusto</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breathe HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/catalystone/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CatalystOne</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/trinet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TriNet (Zenefits)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lucca</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/boondmanager/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BoondManager</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetHrisLegalEntitiesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetHrisLegalEntitiesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
        ids?: GetHrisLegalEntitiesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetHrisLegalEntitiesParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetHrisLegalEntitiesSuccessfulResponse,
        | GetHrisLegalEntitiesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Currently in closed beta. <Warning>**This endpoint is currently in closed beta!** We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning>
     *
     * @tags Unified HRIS API
     * @name GetHrisAttendance
     * @summary Get attendance 🦄
     * @request GET:/hris/attendance
     * @secure
     */
    getHrisAttendance: (params: RequestParams = {}) =>
      this.request<
        GetHrisAttendanceSuccessfulResponse,
        | GetHrisAttendanceErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >({
        path: `/hris/attendance`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  ats = {
    /**
     * @description Retrieve all applications. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstonetalentlink/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone TalentLink</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoftcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TalentSoft Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Softgarden</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JOIN</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Taleez</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BITE</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Flatchr</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/reachmee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ReachMee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Visit our in depth guide to learn more about: - 💡 [Being aware of which applications are tracked](/ats/features/implementation-guide/tracking-created-applications#be-aware-of-which-applications-are-tracked) - 🚦 [Hiring signals](/ats/features/implementation-guide/tracking-created-applications#hiring-signals) - 📈 [Application stage changes](/ats/features/implementation-guide/tracking-created-applications#application-stage-changes) - ❓ [ATS-specific limitations](/ats/features/implementation-guide/tracking-created-applications#ats-specific-limitations) Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetAtsApplicationsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsApplicationsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
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
        /** Filter applications by the day they were created in the remote system. This allows you to get applications that were created on or after a certain day. */
        remote_created_after?: GetAtsApplicationsParameterRemoteCreatedAfter;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsApplicationsSuccessfulResponse,
        | GetAtsApplicationsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Moves an application to a specified stage. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Set application stage** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "stage_id": "3PJ8PZhZZa1eEdd2DtPNtVup" } ```
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
        PutAtsApplicationsApplicationIdStageSuccessfulResponse,
        | PutAtsApplicationsApplicationIdStageErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Add a result link to an application. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoftcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TalentSoft Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> This can, for example, be used to link a candidate back to a test result/assessment in your application. As not all ATS tools have a "result link" feature, we sometimes repurpose other fields to expose it. <Note> This endpoint requires the permission **Add result links** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "application_id": "8Xi6iZrwusZqJmDGXs49GBmJ", "label": "Assessment Result", "url": "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG", "details": { "custom_field_name_prefix": "Acme:", "attributes": [ { "key": "Score", "value": "100%" }, { "key": "Time", "value": "2:30h" } ] } } ```
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
        PostAtsApplicationsApplicationIdResultLinksSuccessfulResponse,
        | PostAtsApplicationsApplicationIdResultLinksErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Add a note to an application. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Add extra information to an application. This can be any extra text information you want to add to an application. <Note> This endpoint requires the permission **Add notes** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "content": "A new message from the candidate is available in YourChat!", "content_type": "PLAIN_TEXT" } ```
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
        PostAtsApplicationsApplicationIdNotesSuccessfulResponse,
        | PostAtsApplicationsApplicationIdNotesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Get attachments from a candidate or application. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/reachmee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ReachMee</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Read document attachments** to be enabled in [your scope config](/scopes). </Note>
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
        GetAtsApplicationsApplicationIdAttachmentsSuccessfulResponse,
        | GetAtsApplicationsApplicationIdAttachmentsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Uploads an attachment file for the specified applicant. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstonetalentlink/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone TalentLink</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Taleez</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/reachmee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ReachMee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Warning> If adding an attachment to an application is not supported by the integration, the attachment will be [added to the candidate](/ats/v1/post-candidates-candidate-id-attachments) instead. </Warning> <Note> This endpoint requires the permission **Create attachments** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "application_id": "GRKdd9dibYKKCrmGRSMJf3wu", "attachment": { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } } ```
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
        PostAtsApplicationsApplicationIdAttachmentsSuccessfulResponse,
        | PostAtsApplicationsApplicationIdAttachmentsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Retrieve all candidates. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstonetalentlink/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone TalentLink</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoftcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TalentSoft Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JOIN</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Taleez</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BITE</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Flatchr</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/reachmee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ReachMee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetAtsCandidatesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsCandidatesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
        ids?: GetAtsCandidatesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsCandidatesParameterRemoteIds;
        /** Filter the candidates based on an email address. When set, returns only the candidates where the given `email` is in `email_addresses`.  */
        email?: GetAtsCandidatesParameterEmail;
        /** Filter by a comma-separated list of job IDs. We will only return candidates that have applied to _any_ of the jobs. */
        job_ids?: GetAtsCandidatesParameterJobIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsCandidatesSuccessfulResponse,
        | GetAtsCandidatesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Create a new candidate and application for the specified job. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstonetalentlink/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone TalentLink</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhousejobboard/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse Job Board</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoft/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TalentSoft</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/concludis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />concludis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" height="16px" width="16px" class="m-0 mr-2" />rexx systems</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Softgarden</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JOIN</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobylon/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobylon</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Taleez</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heyrecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Heyrecruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BITE</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/mysolution/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Mysolution</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hroffice/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR Office</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentclue/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Talent Clue</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ubeeo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ubeeo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Flatchr</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/reachmee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ReachMee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentadore/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TalentAdore</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/guidecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />GuideCom</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Warning> **This endpoint is deprecated!** We realized that in practice it was always more about creating _applications_ instead of _candidates_, so we created a new, more aptly named one that you should use instead: [Create application](/ats/v1/post-jobs-job-id-applications) Using it also has the benefit that we return the newly created applicant at the root level, so you can easily store its ID. </Warning> <Note> This endpoint requires the permission **Create applications and candidates** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "candidate": { "first_name": "Frank", "last_name": "Doe", "company": "Acme Inc.", "title": "Head of Integrations", "email_address": "frank.doe@example.com", "phone_number": "+1-541-754-3010", "gender": "MALE", "salary_expectations": { "amount": 100000, "period": "YEAR" }, "availability_date": "2021-01-01", "location": { "city": "New York", "country": "US" }, "social_links": [ { "url": "https://www.linkedin.com/in/frank-doe-123456789/" }, { "url": "https://twitter.com/frankdoe" } ] }, "application": { "job_id": "BDpgnpZ148nrGh4mYHNxJBgx", "stage_id": "8x3YKRDcuRnwShdh96ShBNn1" }, "attachments": [ { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } ], "screening_question_answers": [ { "question_id": "3phFBNXRweGnDmsU9o2vdPuQ", "answer": "Yes" }, { "question_id": "EYJjhMQT3LtVKXnTbnRT8s6U", "answer": [ "GUzE666zfyjeoCJX6A8n7wh6", "5WPHzzKAv8cx97KtHRUV96U8", "7yZfKGzWigXxxRTygqAfHvyE" ] } ], "remote_fields": {} } ```
     *
     * @tags Unified ATS API
     * @name PostAtsCandidates
     * @summary Create candidate
     * @request POST:/ats/candidates
     * @secure
     */
    postAtsCandidates: (data: PostAtsCandidatesRequestBody, params: RequestParams = {}) =>
      this.request<
        PostAtsCandidatesSuccessfulResponse,
        | PostAtsCandidatesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
      params: RequestParams = {},
    ) =>
      this.request<
        PatchAtsCandidatesCandidateIdSuccessfulResponse,
        | PatchAtsCandidatesCandidateIdErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >({
        path: `/ats/candidates/${candidateId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Uploads an attachment file for the specified candidate. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Taleez</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Warning> **This endpoint is deprecated!** Please use [Add attachment to application](/ats/v1/post-applications-application-id-attachments) instead. This action is deprecated because attachments usually concern applications and not candidates. Use endpoint nested under `/applications` instead.. </Warning> <Note> This endpoint requires the permission **Create attachments** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "candidate_id": "GRKdd9dibYKKCrmGRSMJf3wu", "attachment": { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } } ```
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
        PostAtsCandidatesCandidateIdAttachmentsSuccessfulResponse,
        | PostAtsCandidatesCandidateIdAttachmentsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Add a result link to a candidate. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Warning> **This endpoint is deprecated!** Please use [add result link to application](/ats/v1/post-applications-application-id-result-links) instead. This can, for example, be used to link a candidate back to a test result/assessment in your application. As not all ATS tools have a "result link" feature, we sometimes repurpose other fields to expose it. This action is deprecated because result links usually concern applications and not candidates. Use endpoint nested under `/applications` instead.. </Warning> <Note> This endpoint requires the permission **Add result links** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "label": "Assessment Result", "url": "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG", "details": { "custom_field_name_prefix": "Acme:", "attributes": [ { "key": "Score", "value": "100%" }, { "key": "Time", "value": "2:30h" } ] } } ```
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
        PostAtsCandidatesCandidateIdResultLinksSuccessfulResponse,
        | PostAtsCandidatesCandidateIdResultLinksErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Add a tag to a candidate. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Kombo takes care of creating the tag if required, finding out the right ID, and appending it to the list of tags. <Note> This endpoint requires the permission **Manage tags** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "tag": { "name": "Excellent Fit" } } ```
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
        PostAtsCandidatesCandidateIdTagsSuccessfulResponse,
        | PostAtsCandidatesCandidateIdTagsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Remove a tag from a candidate based on its name. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> This will also succeed if the tag does not exist on the candidate. <Note> This endpoint requires the permission **Manage tags** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "tag": { "name": "Excellent Fit" } } ```
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
        DeleteAtsCandidatesCandidateIdTagsSuccessfulResponse,
        | DeleteAtsCandidatesCandidateIdTagsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Update writable integrations fields on Candidates in the remote system. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Write custom fields on candidates** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "value": "New integration field value!" } ```
     *
     * @tags Unified ATS API
     * @name PatchAtsCandidatesCandidateIdIntegrationFieldsIntegrationFieldId
     * @summary Update fields on Candidates
     * @request PATCH:/ats/candidates/{candidate_id}/integration-fields/{integration_field_id}
     * @secure
     */
    patchAtsCandidatesCandidateIdIntegrationFieldsIntegrationFieldId: (
      candidateId: PatchAtsCandidatesCandidateIdIntegrationFieldsIntegrationFieldIdParameterCandidateId,
      integrationFieldId: PatchAtsCandidatesCandidateIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId,
      data: PatchAtsCandidatesCandidateIdIntegrationFieldsIntegrationFieldIdRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PatchAtsCandidatesCandidateIdIntegrationFieldsIntegrationFieldIdSuccessfulResponse,
        | PatchAtsCandidatesCandidateIdIntegrationFieldsIntegrationFieldIdErrorResponse
        | {
            status: "error";
            error: {
              message: string;
            };
          }
      >({
        path: `/ats/candidates/${candidateId}/integration-fields/${integrationFieldId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all tags. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JOIN</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Flatchr</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetAtsTagsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsTagsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
        ids?: GetAtsTagsParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsTagsParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsTagsSuccessfulResponse,
        | GetAtsTagsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Get all application stages available in the ATS. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstonetalentlink/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone TalentLink</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoftcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TalentSoft Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Softgarden</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Taleez</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BITE</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Flatchr</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Warning> **This endpoint is deprecated!** Get all application stages available in the ATS. This is deprecated because most ATS systems have separate sets of stages for each job. We'd recommend using the `stages` property on jobs instead.. </Warning> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetAtsApplicationStagesParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsApplicationStagesParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
        ids?: GetAtsApplicationStagesParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsApplicationStagesParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsApplicationStagesSuccessfulResponse,
        | GetAtsApplicationStagesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Retrieve all jobs. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstonetalentlink/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone TalentLink</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhousejobboard/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse Job Board</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoft/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TalentSoft</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoftcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TalentSoft Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/concludis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />concludis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" height="16px" width="16px" class="m-0 mr-2" />rexx systems</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Softgarden</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JOIN</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobylon/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobylon</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Taleez</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heyrecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Heyrecruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BITE</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/mysolution/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Mysolution</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hroffice/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR Office</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentclue/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Talent Clue</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ubeeo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ubeeo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Flatchr</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/reachmee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ReachMee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentadore/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TalentAdore</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/guidecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />GuideCom</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Visit our in depth guide to learn more about: - 🔄 [Getting updates of the data](/ats/features/implementation-guide/reading-jobs#getting-updates-of-the-data) - ❗ [Handling failing syncs](/ats/features/implementation-guide/reading-jobs#handling-failing-syncs) - 🔍 [Letting your customer choose which jobs to expose](/ats/features/implementation-guide/reading-jobs#let-your-customer-choose-which-jobs-to-expose-to-you) - 🔗 [Matching jobs in your database to ATS jobs](/ats/features/implementation-guide/reading-jobs#match-jobs-in-your-database-to-ats-jobs) - 🗑️ [Reacting to deleted/closed jobs](/ats/features/implementation-guide/reading-jobs#reacting-to-deleted-closed-jobs) Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetAtsJobsParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsJobsParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
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
        /** Filter by the `name` field. Can be used to find a job by keywords present in the job name. */
        name_contains?: GetAtsJobsParameterNameContains;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsJobsSuccessfulResponse,
        | GetAtsJobsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Create a new application and candidate for the specified job. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstonetalentlink/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone TalentLink</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhousejobboard/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse Job Board</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoft/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TalentSoft</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/concludis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />concludis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" height="16px" width="16px" class="m-0 mr-2" />rexx systems</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Softgarden</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JOIN</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobylon/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobylon</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Taleez</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heyrecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Heyrecruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BITE</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/mysolution/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Mysolution</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hroffice/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR Office</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentclue/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Talent Clue</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ubeeo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ubeeo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Flatchr</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/reachmee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ReachMee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentadore/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TalentAdore</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/guidecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />GuideCom</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Visit our in depth guide to learn more about: - 🌐 [Setting the source of the application](/ats/features/implementation-guide/creating-applications#set-the-source-of-the-application) - 📎 [Uploading attachments with the application](/ats/features/implementation-guide/creating-applications#upload-attachments-with-the-application) - ♻️ [Retry behaviour](/ats/features/implementation-guide/creating-applications#retry-behaviour) - ✏️ [Writing answers to screening questions](/ats/features/implementation-guide/creating-applications#write-answers-to-screening-questions) - ⚠️ [Handling ATS-specific limitations](/ats/features/implementation-guide/creating-applications#handle-ats-specific-limitations) <Note> This endpoint requires the permission **Create applications and candidates** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "candidate": { "first_name": "Frank", "last_name": "Doe", "company": "Acme Inc.", "title": "Head of Integrations", "email_address": "frank.doe@example.com", "phone_number": "+1-541-754-3010", "gender": "MALE", "salary_expectations": { "amount": 100000, "period": "YEAR" }, "availability_date": "2021-01-01", "location": { "city": "New York", "country": "US" } }, "stage_id": "8x3YKRDcuRnwShdh96ShBNn1", "attachments": [ { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } ], "screening_question_answers": [ { "question_id": "3phFBNXRweGnDmsU9o2vdPuQ", "answer": "Yes" }, { "question_id": "EYJjhMQT3LtVKXnTbnRT8s6U", "answer": [ "GUzE666zfyjeoCJX6A8n7wh6", "5WPHzzKAv8cx97KtHRUV96U8", "7yZfKGzWigXxxRTygqAfHvyE" ] } ], "remote_fields": {} } ```
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
        PostAtsJobsJobIdApplicationsSuccessfulResponse,
        | PostAtsJobsJobIdApplicationsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Retrieve all users. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Softgarden</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JOIN</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HRworks</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ubeeo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ubeeo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetAtsUsersParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsUsersParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
        ids?: GetAtsUsersParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsUsersParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsUsersSuccessfulResponse,
        | GetAtsUsersErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Retrieve all offers. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
        /** The number of results to return per page. */
        page_size?: GetAtsOffersParameterPageSize;
        /** Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden. */
        updated_after?: GetAtsOffersParameterUpdatedAfter;
        /** By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too. */
        include_deleted?: GetAtsOffersParameterIncludeDeleted;
        /** Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error. */
        ids?: GetAtsOffersParameterIds;
        /** Filter by a comma-separated list of remote IDs. */
        remote_ids?: GetAtsOffersParameterRemoteIds;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAtsOffersSuccessfulResponse,
        | GetAtsOffersErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
  };
  assessment = {
    /**
     * @description Get all available assessment packages for an integration. This is mainly intended for debugging. As you always need to submit the full list of available packages when using ["set packages"](/assessment/v1/put-packages), there shouldn't ever be a need to call this endpoint in production.
     *
     * @tags Unified ATS (Assessment) API
     * @name GetAssessmentPackages
     * @summary Get packages
     * @request GET:/assessment/packages
     * @secure
     */
    getAssessmentPackages: (params: RequestParams = {}) =>
      this.request<
        GetAssessmentPackagesSuccessfulResponse,
        | GetAssessmentPackagesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Replaces the list of available assessment packages. Packages that have been previously submitted through this endpoint but aren't included again will be marked as deleted.
     *
     * @tags Unified ATS (Assessment) API
     * @name PutAssessmentPackages
     * @summary Set packages
     * @request PUT:/assessment/packages
     * @secure
     */
    putAssessmentPackages: (data: PutAssessmentPackagesRequestBody, params: RequestParams = {}) =>
      this.request<
        PutAssessmentPackagesSuccessfulResponse,
        | PutAssessmentPackagesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Get all open assessment orders of an integration.
     *
     * @tags Unified ATS (Assessment) API
     * @name GetAssessmentOrdersOpen
     * @summary Get open orders
     * @request GET:/assessment/orders/open
     * @secure
     */
    getAssessmentOrdersOpen: (
      query?: {
        /** An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. */
        cursor?: GetAssessmentOrdersOpenParameterCursor;
        /** The number of results to return per page. */
        page_size?: GetAssessmentOrdersOpenParameterPageSize;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAssessmentOrdersOpenSuccessfulResponse,
        | GetAssessmentOrdersOpenErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Updates an assessment order result. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> ### Example Request Body ```json { "status": "COMPLETED", "score": 90, "max_score": 100, "result_url": "https://example.com", "completed_at": "2023-04-04T00:00:00.000Z", "attributes": [ { "field": "remarks", "value": "Test completed with passing score" } ] } ```
     *
     * @tags Unified ATS (Assessment) API
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
        PutAssessmentOrdersAssessmentOrderIdResultSuccessfulResponse,
        | PutAssessmentOrdersAssessmentOrderIdResultErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
  connect = {
    /**
     * @description Generate a unique link that allows your user to enter the embedded Kombo Connect flow. > Check out [our full guide](/connect/embedded-flow) for more details about implementing the connection flow into your app. > Kombo will not deduplicate integrations for you that are created with this endpoint. You are responsible for keeping track of integrations in your system and prevent customers from connecting the same tool again. Use the [reconnection link](/v1/post-integrations-integration-id-relink) endpoint if you want a customer to update their credentials. ### Example Request Body ```json { "end_user_email": "test@example.com", "end_user_organization_name": "Test Inc.", "integration_category": "HRIS", "integration_tool": "personio", "end_user_origin_id": "123", "language": "en" } ```
     *
     * @tags Kombo Connect
     * @name PostConnectCreateLink
     * @summary Create connection link
     * @request POST:/connect/create-link
     * @secure
     */
    postConnectCreateLink: (data: PostConnectCreateLinkRequestBody, params: RequestParams = {}) =>
      this.request<
        PostConnectCreateLinkSuccessfulResponse,
        | PostConnectCreateLinkErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
        GetConnectIntegrationByTokenTokenSuccessfulResponse,
        | GetConnectIntegrationByTokenTokenErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
    postConnectActivateIntegration: (data: PostConnectActivateIntegrationRequestBody, params: RequestParams = {}) =>
      this.request<
        PostConnectActivateIntegrationSuccessfulResponse,
        | PostConnectActivateIntegrationErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
        GetCustomDatevSystemInformationSuccessfulResponse,
        | GetCustomDatevSystemInformationErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
    postCustomDatevPassthrough: (data: PostCustomDatevPassthroughRequestBody, params: RequestParams = {}) =>
      this.request<
        PostCustomDatevPassthroughSuccessfulResponse,
        | PostCustomDatevPassthroughErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @summary Verify eAU is ready for this DATEV integration
     * @request GET:/custom/datev/check-eau-permission
     * @secure
     */
    getCustomDatevCheckEauPermission: (params: RequestParams = {}) =>
      this.request<
        GetCustomDatevCheckEauPermissionSuccessfulResponse,
        | GetCustomDatevCheckEauPermissionErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
    getCustomDatevEauRequestsEauId: (eauId: GetCustomDatevEauRequestsEauIdParameterEauId, params: RequestParams = {}) =>
      this.request<
        GetCustomDatevEauRequestsEauIdSuccessfulResponse,
        | GetCustomDatevEauRequestsEauIdErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
     * @description Download a document from DATEV <Note> This endpoint requires the permission **Manage documents** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "accounting_month": "2001-12-01", "document_type": "LSTB" } ```
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
        PostCustomDatevEmployeesEmployeeIdDownloadDocumentSuccessfulResponse,
        | PostCustomDatevEmployeesEmployeeIdDownloadDocumentErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
        PostCustomDatevEmployeesEmployeeIdEauRequestsSuccessfulResponse,
        | PostCustomDatevEmployeesEmployeeIdEauRequestsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
        PutCustomDatevEmployeesEmployeeIdPreparePayrollSuccessfulResponse,
        | PutCustomDatevEmployeesEmployeeIdPreparePayrollErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
        PutCustomDatevEmployeesEmployeeIdCompensationsSuccessfulResponse,
        | PutCustomDatevEmployeesEmployeeIdCompensationsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
        GetCustomDatevDataPushesSuccessfulResponse,
        | GetCustomDatevDataPushesErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
    postCustomDatevPushDataGeneral: (data: PostCustomDatevPushDataGeneralRequestBody, params: RequestParams = {}) =>
      this.request<
        PostCustomDatevPushDataGeneralSuccessfulResponse,
        | PostCustomDatevPushDataGeneralErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
    postCustomDatevPushDataPayroll: (data: PostCustomDatevPushDataPayrollRequestBody, params: RequestParams = {}) =>
      this.request<
        PostCustomDatevPushDataPayrollSuccessfulResponse,
        | PostCustomDatevPushDataPayrollErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
        PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsSuccessfulResponse,
        | PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsErrorResponse
        | {
            status: "error";
            error: {
              message: string;
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
