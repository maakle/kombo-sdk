var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// Api.ts
var Api_exports = {};
__export(Api_exports, {
  Api: () => Api,
  ContentType: () => ContentType,
  GetAtsApplicationStagesParameterIncludeDeleted: () => GetAtsApplicationStagesParameterIncludeDeleted,
  GetAtsApplicationsParameterIncludeDeleted: () => GetAtsApplicationsParameterIncludeDeleted,
  GetAtsCandidatesParameterIncludeDeleted: () => GetAtsCandidatesParameterIncludeDeleted,
  GetAtsJobsParameterIncludeDeleted: () => GetAtsJobsParameterIncludeDeleted,
  GetAtsTagsParameterIncludeDeleted: () => GetAtsTagsParameterIncludeDeleted,
  GetAtsUsersParameterIncludeDeleted: () => GetAtsUsersParameterIncludeDeleted,
  GetHrisAbsenceTypesParameterIncludeDeleted: () => GetHrisAbsenceTypesParameterIncludeDeleted,
  GetHrisAbsencesParameterIncludeDeleted: () => GetHrisAbsencesParameterIncludeDeleted,
  GetHrisEmployeesParameterEmploymentStatus: () => GetHrisEmployeesParameterEmploymentStatus,
  GetHrisEmployeesParameterIncludeDeleted: () => GetHrisEmployeesParameterIncludeDeleted,
  GetHrisEmploymentsParameterIncludeDeleted: () => GetHrisEmploymentsParameterIncludeDeleted,
  GetHrisGroupsParameterIncludeDeleted: () => GetHrisGroupsParameterIncludeDeleted,
  GetHrisLegalEntitiesParameterIncludeDeleted: () => GetHrisLegalEntitiesParameterIncludeDeleted,
  GetHrisLocationsParameterIncludeDeleted: () => GetHrisLocationsParameterIncludeDeleted,
  GetHrisTeamsParameterIncludeDeleted: () => GetHrisTeamsParameterIncludeDeleted,
  GetHrisTimeOffBalancesParameterIncludeDeleted: () => GetHrisTimeOffBalancesParameterIncludeDeleted,
  GetToolsCategoryParameterCategory: () => GetToolsCategoryParameterCategory,
  HttpClient: () => HttpClient
});
module.exports = __toCommonJS(Api_exports);
var GetToolsCategoryParameterCategory = /* @__PURE__ */ ((GetToolsCategoryParameterCategory2) => {
  GetToolsCategoryParameterCategory2["Hris"] = "hris";
  GetToolsCategoryParameterCategory2["Ats"] = "ats";
  return GetToolsCategoryParameterCategory2;
})(GetToolsCategoryParameterCategory || {});
var GetHrisEmployeesParameterIncludeDeleted = /* @__PURE__ */ ((GetHrisEmployeesParameterIncludeDeleted2) => {
  GetHrisEmployeesParameterIncludeDeleted2["True"] = "true";
  GetHrisEmployeesParameterIncludeDeleted2["False"] = "false";
  return GetHrisEmployeesParameterIncludeDeleted2;
})(GetHrisEmployeesParameterIncludeDeleted || {});
var GetHrisEmployeesParameterEmploymentStatus = /* @__PURE__ */ ((GetHrisEmployeesParameterEmploymentStatus2) => {
  GetHrisEmployeesParameterEmploymentStatus2["ACTIVE"] = "ACTIVE";
  GetHrisEmployeesParameterEmploymentStatus2["PENDING"] = "PENDING";
  GetHrisEmployeesParameterEmploymentStatus2["INACTIVE"] = "INACTIVE";
  GetHrisEmployeesParameterEmploymentStatus2["LEAVE"] = "LEAVE";
  return GetHrisEmployeesParameterEmploymentStatus2;
})(GetHrisEmployeesParameterEmploymentStatus || {});
var GetHrisTeamsParameterIncludeDeleted = /* @__PURE__ */ ((GetHrisTeamsParameterIncludeDeleted2) => {
  GetHrisTeamsParameterIncludeDeleted2["True"] = "true";
  GetHrisTeamsParameterIncludeDeleted2["False"] = "false";
  return GetHrisTeamsParameterIncludeDeleted2;
})(GetHrisTeamsParameterIncludeDeleted || {});
var GetHrisGroupsParameterIncludeDeleted = /* @__PURE__ */ ((GetHrisGroupsParameterIncludeDeleted2) => {
  GetHrisGroupsParameterIncludeDeleted2["True"] = "true";
  GetHrisGroupsParameterIncludeDeleted2["False"] = "false";
  return GetHrisGroupsParameterIncludeDeleted2;
})(GetHrisGroupsParameterIncludeDeleted || {});
var GetHrisEmploymentsParameterIncludeDeleted = /* @__PURE__ */ ((GetHrisEmploymentsParameterIncludeDeleted2) => {
  GetHrisEmploymentsParameterIncludeDeleted2["True"] = "true";
  GetHrisEmploymentsParameterIncludeDeleted2["False"] = "false";
  return GetHrisEmploymentsParameterIncludeDeleted2;
})(GetHrisEmploymentsParameterIncludeDeleted || {});
var GetHrisLocationsParameterIncludeDeleted = /* @__PURE__ */ ((GetHrisLocationsParameterIncludeDeleted2) => {
  GetHrisLocationsParameterIncludeDeleted2["True"] = "true";
  GetHrisLocationsParameterIncludeDeleted2["False"] = "false";
  return GetHrisLocationsParameterIncludeDeleted2;
})(GetHrisLocationsParameterIncludeDeleted || {});
var GetHrisAbsenceTypesParameterIncludeDeleted = /* @__PURE__ */ ((GetHrisAbsenceTypesParameterIncludeDeleted2) => {
  GetHrisAbsenceTypesParameterIncludeDeleted2["True"] = "true";
  GetHrisAbsenceTypesParameterIncludeDeleted2["False"] = "false";
  return GetHrisAbsenceTypesParameterIncludeDeleted2;
})(GetHrisAbsenceTypesParameterIncludeDeleted || {});
var GetHrisTimeOffBalancesParameterIncludeDeleted = /* @__PURE__ */ ((GetHrisTimeOffBalancesParameterIncludeDeleted2) => {
  GetHrisTimeOffBalancesParameterIncludeDeleted2["True"] = "true";
  GetHrisTimeOffBalancesParameterIncludeDeleted2["False"] = "false";
  return GetHrisTimeOffBalancesParameterIncludeDeleted2;
})(GetHrisTimeOffBalancesParameterIncludeDeleted || {});
var GetHrisAbsencesParameterIncludeDeleted = /* @__PURE__ */ ((GetHrisAbsencesParameterIncludeDeleted2) => {
  GetHrisAbsencesParameterIncludeDeleted2["True"] = "true";
  GetHrisAbsencesParameterIncludeDeleted2["False"] = "false";
  return GetHrisAbsencesParameterIncludeDeleted2;
})(GetHrisAbsencesParameterIncludeDeleted || {});
var GetHrisLegalEntitiesParameterIncludeDeleted = /* @__PURE__ */ ((GetHrisLegalEntitiesParameterIncludeDeleted2) => {
  GetHrisLegalEntitiesParameterIncludeDeleted2["True"] = "true";
  GetHrisLegalEntitiesParameterIncludeDeleted2["False"] = "false";
  return GetHrisLegalEntitiesParameterIncludeDeleted2;
})(GetHrisLegalEntitiesParameterIncludeDeleted || {});
var GetAtsApplicationsParameterIncludeDeleted = /* @__PURE__ */ ((GetAtsApplicationsParameterIncludeDeleted2) => {
  GetAtsApplicationsParameterIncludeDeleted2["True"] = "true";
  GetAtsApplicationsParameterIncludeDeleted2["False"] = "false";
  return GetAtsApplicationsParameterIncludeDeleted2;
})(GetAtsApplicationsParameterIncludeDeleted || {});
var GetAtsCandidatesParameterIncludeDeleted = /* @__PURE__ */ ((GetAtsCandidatesParameterIncludeDeleted2) => {
  GetAtsCandidatesParameterIncludeDeleted2["True"] = "true";
  GetAtsCandidatesParameterIncludeDeleted2["False"] = "false";
  return GetAtsCandidatesParameterIncludeDeleted2;
})(GetAtsCandidatesParameterIncludeDeleted || {});
var GetAtsTagsParameterIncludeDeleted = /* @__PURE__ */ ((GetAtsTagsParameterIncludeDeleted2) => {
  GetAtsTagsParameterIncludeDeleted2["True"] = "true";
  GetAtsTagsParameterIncludeDeleted2["False"] = "false";
  return GetAtsTagsParameterIncludeDeleted2;
})(GetAtsTagsParameterIncludeDeleted || {});
var GetAtsApplicationStagesParameterIncludeDeleted = /* @__PURE__ */ ((GetAtsApplicationStagesParameterIncludeDeleted2) => {
  GetAtsApplicationStagesParameterIncludeDeleted2["True"] = "true";
  GetAtsApplicationStagesParameterIncludeDeleted2["False"] = "false";
  return GetAtsApplicationStagesParameterIncludeDeleted2;
})(GetAtsApplicationStagesParameterIncludeDeleted || {});
var GetAtsJobsParameterIncludeDeleted = /* @__PURE__ */ ((GetAtsJobsParameterIncludeDeleted2) => {
  GetAtsJobsParameterIncludeDeleted2["True"] = "true";
  GetAtsJobsParameterIncludeDeleted2["False"] = "false";
  return GetAtsJobsParameterIncludeDeleted2;
})(GetAtsJobsParameterIncludeDeleted || {});
var GetAtsUsersParameterIncludeDeleted = /* @__PURE__ */ ((GetAtsUsersParameterIncludeDeleted2) => {
  GetAtsUsersParameterIncludeDeleted2["True"] = "true";
  GetAtsUsersParameterIncludeDeleted2["False"] = "false";
  return GetAtsUsersParameterIncludeDeleted2;
})(GetAtsUsersParameterIncludeDeleted || {});
var ContentType = /* @__PURE__ */ ((ContentType2) => {
  ContentType2["Json"] = "application/json";
  ContentType2["FormData"] = "multipart/form-data";
  ContentType2["UrlEncoded"] = "application/x-www-form-urlencoded";
  ContentType2["Text"] = "text/plain";
  return ContentType2;
})(ContentType || {});
var HttpClient = class {
  baseUrl = "https://api.kombo.dev/v1";
  securityData = null;
  securityWorker;
  abortControllers = /* @__PURE__ */ new Map();
  customFetch = (...fetchParams) => fetch(...fetchParams);
  baseApiParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer"
  };
  constructor(apiConfig = {}) {
    Object.assign(this, apiConfig);
  }
  setSecurityData = (data) => {
    this.securityData = data;
  };
  encodeQueryParam(key, value) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }
  addQueryParam(query, key) {
    return this.encodeQueryParam(key, query[key]);
  }
  addArrayQueryParam(query, key) {
    const value = query[key];
    return value.map((v) => this.encodeQueryParam(key, v)).join("&");
  }
  toQueryString(rawQuery) {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys.map((key) => Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)).join("&");
  }
  addQueryParams(rawQuery) {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }
  contentFormatters = {
    ["application/json" /* Json */]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    ["text/plain" /* Text */]: (input) => input !== null && typeof input !== "string" ? JSON.stringify(input) : input,
    ["multipart/form-data" /* FormData */]: (input) => Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob ? property : typeof property === "object" && property !== null ? JSON.stringify(property) : `${property}`
      );
      return formData;
    }, new FormData()),
    ["application/x-www-form-urlencoded" /* UrlEncoded */]: (input) => this.toQueryString(input)
  };
  mergeRequestParams(params1, params2) {
    return {
      ...this.baseApiParams,
      ...params1,
      ...params2 || {},
      headers: {
        ...this.baseApiParams.headers || {},
        ...params1.headers || {},
        ...params2 && params2.headers || {}
      }
    };
  }
  createAbortSignal = (cancelToken) => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController2 = this.abortControllers.get(cancelToken);
      if (abortController2) {
        return abortController2.signal;
      }
      return void 0;
    }
    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };
  abortRequest = (cancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);
    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };
  request = async ({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }) => {
    const secureParams = (typeof secure === "boolean" ? secure : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || "application/json" /* Json */];
    const responseFormat = format || requestParams.format;
    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...requestParams.headers || {},
        ...type && type !== "multipart/form-data" /* FormData */ ? { "Content-Type": type } : {}
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body)
    }).then(async (response) => {
      const r = response;
      r.data = null;
      r.error = null;
      const data = !responseFormat ? r : await response[responseFormat]().then((data2) => {
        if (r.ok) {
          r.data = data2;
        } else {
          r.error = data2;
        }
        return r;
      }).catch((e) => {
        r.error = e;
        return r;
      });
      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }
      if (!response.ok)
        throw data;
      return data;
    });
  };
};
var Api = class extends HttpClient {
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
    getCheckApiKey: (params = {}) => this.request({
      path: `/check-api-key`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    })
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
    postForceSync: (data, params = {}) => this.request({
      path: `/force-sync`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    })
  };
  passthrough = {
    /**
     * @description Send a request to the specified integration's native API. At Kombo we put a lot of work into making sure that our unified API covers all our customers' use cases and that they never have to think about integration-specific logic again. There are cases, however, where our customers want to build features that are very integration-specfic. That's where this endpoint comes in. Pass in details about the request you want to make to the integration's API and we'll forward it for you. We'll also take care of setting the right base URL and authenticating your requests. To get started, please pick the relevant API (some tools provide multiple to due different base URLs or authentication schemes) from the table below and pass in the `{tool}/{api}` identifier as part of the path. |Integration|`{tool}/{api}`|Description| |---|---|---| |Personio|`personio/personnel`|Personio's [Personnel Data API](https://developer.personio.de/reference/get_company-employees). We automatically authenticate all requests using the client ID and secret and use `https://api.personio.de/v1` as the base URL.| |Personio|`personio/recruiting`|Personio's [Recruiting API](https://developer.personio.de/reference/get_company-employees). We automatically authenticate all requests using the Recruiting access token and use `https://api.personio.de/v1/recruiting` as the base URL.| |Personio|`personio/jobboard`|API endpoints exposed on Personio's public job board pages ([currently just the XML feed](https://developer.personio.de/reference/get_xml)). We automatically use the right `https://{company}.jobs.personio.de` base URL.| |SAP SuccessFactors|`successfactors/odata-v2`|[SuccessFactors' OData V2 API](https://help.sap.com/doc/74597e67f54d4f448252bad4c2b601c9/2211/en-US/SF_HCM_OData_API_REF_en.pdf). We automatically authenticate all requests and use `https://{api_domain}/odata/v2` as the base URL.| |Recruitee|`recruitee/default`|The [Recruitee API](https://api.recruitee.com/docs/index.html). We automatically authenticate all requests and use `https://api.recruitee.com/c/{company_id}` as the base URL.| |HiBob|`hibob/v1`|[HibBob's v1 API](https://apidocs.hibob.com/reference/get_people). We automatically authenticate all requests using the service user credentials (or, for old integrations, the API key) and use `https://api.hibob.com/v1` as the base URL.| <Note>Please note that the pass-through API endpoints are only meant for edge cases. That's why we only expose them for new integrations after understanding a concrete customer use case. If you have such a use case in mind, please reach out to Kombo.</Note>
     *
     * @tags General
     * @name PostPassthroughToolApi
     * @summary Send pass-through request
     * @request POST:/passthrough/{tool}/{api}
     * @secure
     */
    postPassthroughToolApi: (tool, api, data, params = {}) => this.request({
      path: `/passthrough/${tool}/${api}`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    })
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
    deleteIntegrationsIntegrationId: (integrationId, data, params = {}) => this.request({
      path: `/integrations/${integrationId}`,
      method: "DELETE",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
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
    getIntegrationsIntegrationId: (integrationId, params = {}) => this.request({
      path: `/integrations/${integrationId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
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
    postIntegrationsIntegrationIdRelink: (integrationId, data, params = {}) => this.request({
      path: `/integrations/${integrationId}/relink`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    })
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
    getToolsCategory: (category, params = {}) => this.request({
      path: `/tools/${category}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    })
  };
  hris = {
    /**
     * @description Retrieve all employees. <Note>Not interested in most fields? You can use our [our Scopes feature](/scopes) to customize what data points will synced.</Note>
     *
     * @tags Unified HRIS API
     * @name GetHrisEmployees
     * @summary Get employees
     * @request GET:/hris/employees
     * @secure
     */
    getHrisEmployees: (query, params = {}) => this.request({
      path: `/hris/employees`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Create a new employee. <Note> This endpoint requires the permission **Create and manage employees** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "first_name": "John", "last_name": "Doe", "work_email": "john.doe@acme.com", "gender": "MALE", "job_title": "Integrations Team Lead", "home_address": { "city": "Berlin", "country": "DE", "state": "Berlin", "street_1": "Sonnenallee 63", "zip_code": "12045" }, "date_of_birth": "1986-01-01", "start_date": "2020-04-07" } ```
     *
     * @tags Unified HRIS API
     * @name PostHrisEmployees
     * @summary Create employee
     * @request POST:/hris/employees
     * @secure
     */
    postHrisEmployees: (data, params = {}) => this.request({
      path: `/hris/employees`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Update an employee. <Note> This endpoint requires the permission **Create and manage employees** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "BkgfzSr5muN9cUTMD4wDQFn4", "first_name": "John", "last_name": "Doe", "work_email": "john.doe@acme.com", "ssn": "555-32-6395", "tax_id": "12 345 678 901", "gender": "MALE", "marital_status": "MARRIED", "date_of_birth": "1986-01-01", "start_date": "2020-04-07", "termination_date": "2022-05-20", "job_title": "Integrations Team Lead", "home_address": { "city": "Berlin", "country": "DE", "state": "Berlin", "street_1": "Sonnenallee 63", "zip_code": "12045" } } ```
     *
     * @tags Unified HRIS API
     * @name PatchHrisEmployeesEmployeeId
     * @summary Update employee
     * @request PATCH:/hris/employees/{employee_id}
     * @secure
     */
    patchHrisEmployeesEmployeeId: (employeeId, data, params = {}) => this.request({
      path: `/hris/employees/${employeeId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Currently in closed beta. <Warning>**This endpoint is currently in closed beta!** We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning>
     *
     * @tags Unified HRIS API
     * @name PostHrisEmployeesEmployeeIdAttachments
     * @summary Add attachment to employees 🦄
     * @request POST:/hris/employees/{employee_id}/attachments
     * @secure
     */
    postHrisEmployeesEmployeeIdAttachments: (employeeId, data, params = {}) => this.request({
      path: `/hris/employees/${employeeId}/attachments`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Get the teams. **(⚠️ Deprecated)** Please use [the `/groups` endpoint](/hris/v1/get-groups) instead. It returns the same data but the naming makes more sense as the model not only includes teams but also departments and cost centers.
     *
     * @tags Unified HRIS API
     * @name GetHrisTeams
     * @summary Get teams (deprecated)
     * @request GET:/hris/teams
     * @secure
     */
    getHrisTeams: (query, params = {}) => this.request({
      path: `/hris/teams`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all "groups" (teams, departments, and cost centers).
     *
     * @tags Unified HRIS API
     * @name GetHrisGroups
     * @summary Get groups
     * @request GET:/hris/groups
     * @secure
     */
    getHrisGroups: (query, params = {}) => this.request({
      path: `/hris/groups`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all employments.
     *
     * @tags Unified HRIS API
     * @name GetHrisEmployments
     * @summary Get employments
     * @request GET:/hris/employments
     * @secure
     */
    getHrisEmployments: (query, params = {}) => this.request({
      path: `/hris/employments`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all locations.
     *
     * @tags Unified HRIS API
     * @name GetHrisLocations
     * @summary Get locations
     * @request GET:/hris/locations
     * @secure
     */
    getHrisLocations: (query, params = {}) => this.request({
      path: `/hris/locations`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all absence types.
     *
     * @tags Unified HRIS API
     * @name GetHrisAbsenceTypes
     * @summary Get absence types
     * @request GET:/hris/absence-types
     * @secure
     */
    getHrisAbsenceTypes: (query, params = {}) => this.request({
      path: `/hris/absence-types`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all time off balances.
     *
     * @tags Unified HRIS API
     * @name GetHrisTimeOffBalances
     * @summary Get time off balances
     * @request GET:/hris/time-off-balances
     * @secure
     */
    getHrisTimeOffBalances: (query, params = {}) => this.request({
      path: `/hris/time-off-balances`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all absences.
     *
     * @tags Unified HRIS API
     * @name GetHrisAbsences
     * @summary Get absences
     * @request GET:/hris/absences
     * @secure
     */
    getHrisAbsences: (query, params = {}) => this.request({
      path: `/hris/absences`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Create a new absence. Check [this page](/hris/features/creating-absences) for a detailed guide. <Note> This endpoint requires the permission **Manage absences** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "wXJMxwDvPAjrJ4CyqdV9", "absence_type_id": "3YKtQ7qedsrcCady1jSyAkY1", "start_date": "2019-09-17", "end_date": "2019-09-21", "start_half_day": false, "end_half_day": false, "employee_note": "Visiting the aliens", "start_time": "08:30:00", "end_time": "16:00:00" } ```
     *
     * @tags Unified HRIS API
     * @name PostHrisAbsences
     * @summary Create absence
     * @request POST:/hris/absences
     * @secure
     */
    postHrisAbsences: (data, params = {}) => this.request({
      path: `/hris/absences`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
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
    deleteHrisAbsencesAbsenceId: (absenceId, data, params = {}) => this.request({
      path: `/hris/absences/${absenceId}`,
      method: "DELETE",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all legal entites.
     *
     * @tags Unified HRIS API
     * @name GetHrisLegalEntities
     * @summary Get legal entities
     * @request GET:/hris/legal-entities
     * @secure
     */
    getHrisLegalEntities: (query, params = {}) => this.request({
      path: `/hris/legal-entities`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    })
  };
  ats = {
    /**
     * @description Retrieve all applications.
     *
     * @tags Unified ATS API
     * @name GetAtsApplications
     * @summary Get applications
     * @request GET:/ats/applications
     * @secure
     */
    getAtsApplications: (query, params = {}) => this.request({
      path: `/ats/applications`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Moves an application to a specified stage. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "stage_id": "3PJ8PZhZZa1eEdd2DtPNtVup" } ```
     *
     * @tags Unified ATS API
     * @name PutAtsApplicationsApplicationIdStage
     * @summary Move application to stage
     * @request PUT:/ats/applications/{application_id}/stage
     * @secure
     */
    putAtsApplicationsApplicationIdStage: (applicationId, data, params = {}) => this.request({
      path: `/ats/applications/${applicationId}/stage`,
      method: "PUT",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Add a result link to an application. This can, for example, be used to link a candidate back to a test result/assessment in your application. As not all ATS tools have a "result link" feature, we sometimes repurpose other fields to expose it. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "application_id": "8Xi6iZrwusZqJmDGXs49GBmJ", "label": "Assessment Result", "url": "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG", "details": { "custom_field_name_prefix": "Acme:", "attributes": [ { "key": "Score", "value": "100%" }, { "key": "Time", "value": "2:30h" } ] } } ```
     *
     * @tags Unified ATS API
     * @name PostAtsApplicationsApplicationIdResultLinks
     * @summary Add result link to application
     * @request POST:/ats/applications/{application_id}/result-links
     * @secure
     */
    postAtsApplicationsApplicationIdResultLinks: (applicationId, data, params = {}) => this.request({
      path: `/ats/applications/${applicationId}/result-links`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all candidates.
     *
     * @tags Unified ATS API
     * @name GetAtsCandidates
     * @summary Get candidates
     * @request GET:/ats/candidates
     * @secure
     */
    getAtsCandidates: (query, params = {}) => this.request({
      path: `/ats/candidates`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description > We recommend the endpoint **Create Application** as it returns the application as the root object. That makes it easier to understand which application was created. Create a new candidate and application for the specified job. The first CV in the attachments will be treated as the resume of the candidate when the tool allows previewing a resume. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "candidate": { "first_name": "Frank", "last_name": "Doe", "company": "Acme Inc.", "title": "Head of Integrations", "email_address": "frank.doe@example.com", "phone_number": "+1-541-754-3010", "gender": "MALE", "salary_expectations": { "amount": 100000, "period": "YEAR" }, "availability_date": "2021-01-01", "location": { "city": "New York", "country": "US" } }, "application": { "job_id": "BDpgnpZ148nrGh4mYHNxJBgx", "stage_id": "8x3YKRDcuRnwShdh96ShBNn1" }, "screening_question_answers": [ { "question_id": "3phFBNXRweGnDmsU9o2vdPuQ", "answer": "Yes" }, { "question_id": "EYJjhMQT3LtVKXnTbnRT8s6U", "answer": [ "GUzE666zfyjeoCJX6A8n7wh6", "5WPHzzKAv8cx97KtHRUV96U8", "7yZfKGzWigXxxRTygqAfHvyE" ] } ], "attachments": [ { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } ] } ```
     *
     * @tags Unified ATS API
     * @name PostAtsCandidates
     * @summary Create candidate
     * @request POST:/ats/candidates
     * @secure
     */
    postAtsCandidates: (data, params = {}) => this.request({
      path: `/ats/candidates`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
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
    patchAtsCandidatesCandidateId: (candidateId, data, params = {}) => this.request({
      path: `/ats/candidates/${candidateId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Uploads an attachment file for the specified candidate. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "candidate_id": "GRKdd9dibYKKCrmGRSMJf3wu", "attachment": { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } } ```
     *
     * @tags Unified ATS API
     * @name PostAtsCandidatesCandidateIdAttachments
     * @summary Add attachment to candidate
     * @request POST:/ats/candidates/{candidate_id}/attachments
     * @secure
     */
    postAtsCandidatesCandidateIdAttachments: (candidateId, data, params = {}) => this.request({
      path: `/ats/candidates/${candidateId}/attachments`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description **(⚠️ Deprecated)** Add a result link to a candidate. Please use [add result link to application](/ats/v1/post-applications-application-id-result-links) instead. This can, for example, be used to link a candidate back to a test result/assessment in your application. As not all ATS tools have a "result link" feature, we sometimes repurpose other fields to expose it. This action is deprecated because result links usually concern applications and not candidates. Use endpoint nested under `/applications` instead. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "label": "Assessment Result", "url": "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG", "details": { "custom_field_name_prefix": "Acme:", "attributes": [ { "key": "Score", "value": "100%" }, { "key": "Time", "value": "2:30h" } ] } } ```
     *
     * @tags Unified ATS API
     * @name PostAtsCandidatesCandidateIdResultLinks
     * @summary Add result link to candidate
     * @request POST:/ats/candidates/{candidate_id}/result-links
     * @secure
     */
    postAtsCandidatesCandidateIdResultLinks: (candidateId, data, params = {}) => this.request({
      path: `/ats/candidates/${candidateId}/result-links`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Add a tag to a candidate. Kombo takes care of creating the tag if required, finding out the right ID, and appending it to the list of tags. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "tag": { "name": "Excellent Fit" } } ```
     *
     * @tags Unified ATS API
     * @name PostAtsCandidatesCandidateIdTags
     * @summary Add tag to candidate
     * @request POST:/ats/candidates/{candidate_id}/tags
     * @secure
     */
    postAtsCandidatesCandidateIdTags: (candidateId, data, params = {}) => this.request({
      path: `/ats/candidates/${candidateId}/tags`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Remove a tag from a candidate based on its name. This will also succeed if the tag does not exist on the candidate. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "tag": { "name": "Excellent Fit" } } ```
     *
     * @tags Unified ATS API
     * @name DeleteAtsCandidatesCandidateIdTags
     * @summary Remove tag from candidate
     * @request DELETE:/ats/candidates/{candidate_id}/tags
     * @secure
     */
    deleteAtsCandidatesCandidateIdTags: (candidateId, data, params = {}) => this.request({
      path: `/ats/candidates/${candidateId}/tags`,
      method: "DELETE",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all tags.
     *
     * @tags Unified ATS API
     * @name GetAtsTags
     * @summary Get tags
     * @request GET:/ats/tags
     * @secure
     */
    getAtsTags: (query, params = {}) => this.request({
      path: `/ats/tags`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Get all application stages available in the ATS. **(⚠️ Deprecated)** Get all application stages available in the ATS. This is deprecated because most ATS systems have separate sets of stages for each job. We'd recommend using the `stages` property on jobs instead.
     *
     * @tags Unified ATS API
     * @name GetAtsApplicationStages
     * @summary Get application stages
     * @request GET:/ats/application-stages
     * @secure
     */
    getAtsApplicationStages: (query, params = {}) => this.request({
      path: `/ats/application-stages`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all jobs.
     *
     * @tags Unified ATS API
     * @name GetAtsJobs
     * @summary Get jobs
     * @request GET:/ats/jobs
     * @secure
     */
    getAtsJobs: (query, params = {}) => this.request({
      path: `/ats/jobs`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Currently in closed beta. <Warning>**This endpoint is currently in closed beta!** We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning>
     *
     * @tags Unified ATS API
     * @name GetAtsJobsJobIdPostings
     * @summary Get job postings 🦄
     * @request GET:/ats/jobs/{job_id}/postings
     * @secure
     */
    getAtsJobsJobIdPostings: (jobId, params = {}) => this.request({
      path: `/ats/jobs/${jobId}/postings`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Create a new application and candidate for the specified job. The first CV in the attachments will be treated as the resume of the candidate when the tool allows previewing a resume. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "stage_id": "8x3YKRDcuRnwShdh96ShBNn1", "candidate": { "first_name": "Frank", "last_name": "Doe", "company": "Acme Inc.", "title": "Head of Integrations", "email_address": "frank.doe@example.com", "phone_number": "+1-541-754-3010", "gender": "MALE", "salary_expectations": { "amount": 100000, "period": "YEAR" }, "availability_date": "2021-01-01", "location": { "city": "New York", "country": "US" } }, "attachments": [ { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } ], "screening_question_answers": [ { "question_id": "3phFBNXRweGnDmsU9o2vdPuQ", "answer": "Yes" }, { "question_id": "EYJjhMQT3LtVKXnTbnRT8s6U", "answer": [ "GUzE666zfyjeoCJX6A8n7wh6", "5WPHzzKAv8cx97KtHRUV96U8", "7yZfKGzWigXxxRTygqAfHvyE" ] } ] } ```
     *
     * @tags Unified ATS API
     * @name PostAtsJobsJobIdApplications
     * @summary Create application
     * @request POST:/ats/jobs/{job_id}/applications
     * @secure
     */
    postAtsJobsJobIdApplications: (jobId, data, params = {}) => this.request({
      path: `/ats/jobs/${jobId}/applications`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all users.
     *
     * @tags Unified ATS API
     * @name GetAtsUsers
     * @summary Get users
     * @request GET:/ats/users
     * @secure
     */
    getAtsUsers: (query, params = {}) => this.request({
      path: `/ats/users`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    })
  };
  connect = {
    /**
     * @description Generate a unique link that allows your user to enter the embedded Kombo Connect flow. > Check out [our full guide](/connect/embedded-flow) for more details about implementing the connection flow into your app. > Kombo will not deduplicate integrations for you that are created with this endpoint. You are responsible for keeping track of integrations in your system and prevent customers from connecting the same tool again. Use the [reconnection link](/v1/post-integrations-integration-id-relink) endpoint if you want a customer to update their credentials. ### Example Request Body ```json { "end_user_email": "test@example.com", "end_user_organization_name": "Test Inc.", "end_user_origin_id": "123", "integration_category": "HRIS", "integration_tool": "personio", "language": "en" } ```
     *
     * @tags Kombo Connect
     * @name PostConnectCreateLink
     * @summary Create connection link
     * @request POST:/connect/create-link
     * @secure
     */
    postConnectCreateLink: (data, params = {}) => this.request({
      path: `/connect/create-link`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Activate an integration that was just created via Kombo Connect. > Check out [our full guide](/connect/embedded-flow) for more details about implementing the connection flow into your app. ### Example Request Body ```json { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiVGhpcyBpcyBub3QgYW4gYWN0dWFsIHRva2VuLiJ9.JulqgOZBMKceI8vh9YLpVX51efND0ZyfUNHDXLrPz_4" } ```
     *
     * @tags Kombo Connect
     * @name PostConnectActivateIntegration
     * @summary Activate integration
     * @request POST:/connect/activate-integration
     * @secure
     */
    postConnectActivateIntegration: (data, params = {}) => this.request({
      path: `/connect/activate-integration`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    })
  };
  custom = {
    /**
     * @description What DATEV requires to prepare payroll is very specific and currently, as DATEV is not providing "read", this is not part of the unified model. <Note> This endpoint requires the permission **Manage payroll** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "EvLV61zdahkN4ftPJbmPCkdv", "payroll_run": { "date": "2022-05-01" }, "hourly_payments": [ { "hours": 14, "lohnart": 200 }, { "hours": 16, "lohnart": 232 } ], "fixed_payments": [ { "amount": 560, "lohnart": 100 } ] } ```
     *
     * @tags Custom Endpoints
     * @name PutCustomDatevEmployeesEmployeeIdPreparePayroll
     * @summary Prepare DATEV Payroll
     * @request PUT:/custom/datev/employees/{employee_id}/prepare-payroll
     * @secure
     */
    putCustomDatevEmployeesEmployeeIdPreparePayroll: (employeeId, data, params = {}) => this.request({
      path: `/custom/datev/employees/${employeeId}/prepare-payroll`,
      method: "PUT",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Sets the compensations for an employee on the specified effective date. Other compensations will end at the effective date. That means, if you would like to add a compensation, you also have to include the compensations that you would like to keep. <Note> This endpoint requires the permission **Manage payroll** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "3bdhemmSP1TPQDGWtRveRot9", "effective_date": "2022-12-01", "compensations": [ { "amount": 4500, "currency": "EUR", "period": "MONTH" } ] } ```
     *
     * @tags Custom Endpoints
     * @name PutCustomDatevEmployeesEmployeeIdCompensations
     * @summary Set DATEV compensations
     * @request PUT:/custom/datev/employees/{employee_id}/compensations
     * @secure
     */
    putCustomDatevEmployeesEmployeeIdCompensations: (employeeId, data, params = {}) => this.request({
      path: `/custom/datev/employees/${employeeId}/compensations`,
      method: "PUT",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
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
    getCustomDatevDataPushes: (params = {}) => this.request({
      path: `/custom/datev/data-pushes`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
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
    postCustomDatevPushDataGeneral: (data, params = {}) => this.request({
      path: `/custom/datev/push-data/general`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
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
    postCustomDatevPushDataPayroll: (data, params = {}) => this.request({
      path: `/custom/datev/push-data/payroll`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    })
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Api,
  ContentType,
  GetAtsApplicationStagesParameterIncludeDeleted,
  GetAtsApplicationsParameterIncludeDeleted,
  GetAtsCandidatesParameterIncludeDeleted,
  GetAtsJobsParameterIncludeDeleted,
  GetAtsTagsParameterIncludeDeleted,
  GetAtsUsersParameterIncludeDeleted,
  GetHrisAbsenceTypesParameterIncludeDeleted,
  GetHrisAbsencesParameterIncludeDeleted,
  GetHrisEmployeesParameterEmploymentStatus,
  GetHrisEmployeesParameterIncludeDeleted,
  GetHrisEmploymentsParameterIncludeDeleted,
  GetHrisGroupsParameterIncludeDeleted,
  GetHrisLegalEntitiesParameterIncludeDeleted,
  GetHrisLocationsParameterIncludeDeleted,
  GetHrisTeamsParameterIncludeDeleted,
  GetHrisTimeOffBalancesParameterIncludeDeleted,
  GetToolsCategoryParameterCategory,
  HttpClient
});
