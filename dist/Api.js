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
  GetAtsApplicationsParameterOutcome: () => GetAtsApplicationsParameterOutcome,
  GetAtsCandidatesParameterIncludeDeleted: () => GetAtsCandidatesParameterIncludeDeleted,
  GetAtsJobsParameterIncludeDeleted: () => GetAtsJobsParameterIncludeDeleted,
  GetAtsJobsParameterStatus: () => GetAtsJobsParameterStatus,
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
  GetToolsCategoryParameterCategory2["Assessment"] = "assessment";
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
var GetAtsApplicationsParameterOutcome = /* @__PURE__ */ ((GetAtsApplicationsParameterOutcome2) => {
  GetAtsApplicationsParameterOutcome2["PENDING"] = "PENDING";
  GetAtsApplicationsParameterOutcome2["HIRED"] = "HIRED";
  GetAtsApplicationsParameterOutcome2["DECLINED"] = "DECLINED";
  return GetAtsApplicationsParameterOutcome2;
})(GetAtsApplicationsParameterOutcome || {});
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
var GetAtsJobsParameterStatus = /* @__PURE__ */ ((GetAtsJobsParameterStatus2) => {
  GetAtsJobsParameterStatus2["OPEN"] = "OPEN";
  GetAtsJobsParameterStatus2["CLOSED"] = "CLOSED";
  GetAtsJobsParameterStatus2["DRAFT"] = "DRAFT";
  GetAtsJobsParameterStatus2["ARCHIVED"] = "ARCHIVED";
  return GetAtsJobsParameterStatus2;
})(GetAtsJobsParameterStatus || {});
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
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
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
     * @description Send a request to the specified integration's native API. At Kombo we put a lot of work into making sure that our unified API covers all our customers' use cases and that they never have to think about integration-specific logic again. There are cases, however, where our customers want to build features that are very integration-specific. That's where this endpoint comes in. Pass in details about the request you want to make to the integration's API and we'll forward it for you. We'll also take care of setting the right base URL and authenticating your requests. To get started, please pick the relevant API (some tools provide multiple to due different base URLs or authentication schemes) from the table below and pass in the `{tool}/{api}` identifier as part of the path. |Integration|`{tool}/{api}`|Description| |---|---|---| |Personio|`personio/personnel`|Personio's [Personnel Data API](https://developer.personio.de/reference/get_company-employees). We automatically authenticate all requests using the client ID and secret and use `https://api.personio.de/v1` as the base URL.| |Workday|`workday/soap`|[Workday's SOAP API](https://community.workday.com/sites/default/files/file-hosting/productionapi/index.html). We automatically authenticate all requests. Set `data` to your raw xml string. Use `/` as your `path`, as we will always send requests to `https://{domain}/ccx/service/{tenant}/{service_name}/38.2`. Set your `method` to `POST`. You need to specify the `api_options` object and set `service_name` to the name of the service you want to call. Find all available services [here](https://community.workday.com/sites/default/files/file-hosting/productionapi/versions/v41.0/index.html). The string that you submit as `data` will be the content of the `soapenv:Body` tag in the request.| |SAP SuccessFactors|`successfactors/odata-v2`|[SuccessFactors' OData V2 API](https://help.sap.com/doc/74597e67f54d4f448252bad4c2b601c9/2211/en-US/SF_HCM_OData_API_REF_en.pdf). We automatically authenticate all requests and use `https://{api_domain}/odata/v2` as the base URL.| |Recruitee|`recruitee/default`|The [Recruitee API](https://api.recruitee.com/docs/index.html). We automatically authenticate all requests and use `https://api.recruitee.com/c/{company_id}` as the base URL.| |Greenhouse|`greenhouse/harvest`|Greenhouse [Harvest API](https://developers.greenhouse.io/harvest.html). We automatically authenticate all requests using the API key and use `https://harvest.greenhouse.io/v1` as the base URL.| |Teamtailor|`teamtailor/v1`|Teamtailor's [JSON-API](https://docs.teamtailor.com/). We authenticate all request with the Teamtailor API key and use the base URL `https://api.teamtailor.com/v1`.| |Personio|`personio/recruiting`|Personio's [Recruiting API](https://developer.personio.de/reference/get_company-employees). We automatically authenticate all requests using the Recruiting access token and use `https://api.personio.de/v1/recruiting` as the base URL.| |Personio|`personio/jobboard`|API endpoints exposed on Personio's public job board pages ([currently just the XML feed](https://developer.personio.de/reference/get_xml)). We automatically use the right `https://{company}.jobs.personio.de` base URL.| |BambooHR|`bamboohr/v1`|BambooHR's [API](https://documentation.bamboohr.com/reference/get-employee). We automatically authenticate all requests using the customer credentials `https://api.bamboohr.com/api/gateway.php/{subdomain}/v1` as the base URL.| |Workable|`workable/v1`|Workable's [API](https://workable.readme.io/reference/generate-an-access-token). We automatically authenticate all requests using the client ID and secret and use `https://subdomain.workable.com/spi/v3` as the base URL.| |HiBob|`hibob/v1`|[HibBob's v1 API](https://apidocs.hibob.com/reference/get_people). We automatically authenticate all requests using the service user credentials (or, for old integrations, the API key) and use `https://api.hibob.com/v1` as the base URL.| |Pinpoint|`pinpoint/v1`|Pinpoint's [JSON:API](https://developers.pinpointhq.com/docs). We automatically authenticate all requests using the `X-API-KEY` header and use `https://{subdomain}.pinpointhq.com/api/v1` as the base URL.| |Haufe Umantis|`umantis/v1`|[Umantis API v1](https://recruitingapp-91005709.umantis.com/api/v1/swagger-ui). We automatically authenticate all requests and use `https://{subdomain}.umantis.com/api/v1` as the base URL.| <Note>Please note that the passthrough API endpoints are only meant for edge cases. That's why we only expose them for new integrations after understanding a concrete customer use case. If you have such a use case in mind, please reach out to Kombo.</Note>
     *
     * @tags General
     * @name PostPassthroughToolApi
     * @summary Send passthrough request
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
     * @description Get the list of users to provision, deprovision, and optionally update based on the users you've already provisioned in your system.
     *
     * @tags Unified HRIS API
     * @name PostHrisProvisioningGroupsGroupIdDiff
     * @summary Get provisioning diff
     * @request POST:/hris/provisioning-groups/{group_id}/diff
     * @secure
     */
    postHrisProvisioningGroupsGroupIdDiff: (groupId, data, params = {}) => this.request({
      path: `/hris/provisioning-groups/${groupId}/diff`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
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
    postHrisProvisioningGroupsGroupIdSetupLinks: (groupId, data, params = {}) => this.request({
      path: `/hris/provisioning-groups/${groupId}/setup-links`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all employees. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Personio</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Factorial</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />rexx systems</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />AFAS Software</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />PayFit</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Kenjo</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HeavenHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HiBob</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/azuread/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Azure AD</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/googleworkspace/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Google Workspace</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Deel</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Remote</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/okta/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Okta</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sage HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Humaans</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Eurécia</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Oracle HCM</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Officient</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sesame HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Charlie</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HRworks</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Gusto</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Breathe HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Rippling</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Nmbrs</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />PeopleHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lucca</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Hailey HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/silae/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Silae</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/iriscascade/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />IRIS Cascade</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note>Not interested in most fields? You can use our [our Scopes feature](/scopes) to customize what data points are synced.</Note> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Create a new employee. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Personio</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Factorial</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HiBob</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Remote</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sage HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Humaans</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Breathe HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Nmbrs</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/silae/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Silae</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Create and manage employees** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "first_name": "John", "last_name": "Doe", "work_email": "john.doe@acme.com", "gender": "MALE", "job_title": "Integrations Team Lead", "home_address": { "city": "Berlin", "country": "DE", "state": "Berlin", "street_1": "Sonnenallee 63", "zip_code": "12045" }, "date_of_birth": "1986-01-01", "start_date": "2020-04-07" } ```
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
     * @description Update an employee. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/silae/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Silae</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/datev/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />DATEV LODAS</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/datevlug/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />DATEV Lohn & Gehalt</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Create and manage employees** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "BkgfzSr5muN9cUTMD4wDQFn4", "first_name": "John", "last_name": "Doe", "work_email": "john.doe@acme.com", "ssn": "555-32-6395", "tax_id": "12 345 678 901", "gender": "MALE", "marital_status": "MARRIED", "date_of_birth": "1986-01-01", "start_date": "2020-04-07", "termination_date": "2022-05-20", "job_title": "Integrations Team Lead", "nationality": "DE", "home_address": { "city": "Berlin", "country": "DE", "state": "Berlin", "street_1": "Sonnenallee 63", "zip_code": "12045" } } ```
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
     * @description Get the teams. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Personio</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Factorial</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />rexx systems</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />AFAS Software</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />PayFit</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Kenjo</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HeavenHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HiBob</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/azuread/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Azure AD</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/googleworkspace/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Google Workspace</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Deel</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/okta/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Okta</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Humaans</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Eurécia</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Oracle HCM</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Officient</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sesame HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Charlie</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HRworks</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Gusto</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Breathe HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Rippling</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Nmbrs</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />PeopleHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lucca</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Hailey HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/silae/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Silae</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/iriscascade/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />IRIS Cascade</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Warning> **This endpoint is deprecated!** Please use [the `/groups` endpoint](/hris/v1/get-groups) instead. It returns the same data but the naming makes more sense as the model not only includes teams but also departments and cost centers.. </Warning> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Retrieve all "groups" (teams, departments, and cost centers). <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Personio</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Factorial</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />rexx systems</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />AFAS Software</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />PayFit</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Kenjo</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HeavenHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HiBob</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/azuread/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Azure AD</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/googleworkspace/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Google Workspace</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Deel</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/okta/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Okta</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Humaans</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Eurécia</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Oracle HCM</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Officient</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sesame HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Charlie</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HRworks</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Gusto</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Breathe HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Rippling</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Nmbrs</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />PeopleHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lucca</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Hailey HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/silae/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Silae</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/iriscascade/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />IRIS Cascade</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Retrieve all employments. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Personio</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Factorial</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />rexx systems</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />AFAS Software</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />PayFit</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Kenjo</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HeavenHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HiBob</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Deel</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Remote</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sage HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Humaans</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Eurécia</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Oracle HCM</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Officient</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Charlie</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HRworks</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Breathe HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Nmbrs</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />PeopleHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lucca</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Hailey HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/silae/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Silae</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/iriscascade/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />IRIS Cascade</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Retrieve all locations. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Personio</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Factorial</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />PayFit</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Kenjo</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HeavenHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HiBob</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/azuread/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Azure AD</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Deel</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Remote</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Humaans</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Oracle HCM</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sesame HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Charlie</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HRworks</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Gusto</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Breathe HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Rippling</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Nmbrs</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />PeopleHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Hailey HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Retrieve all absence types. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Personio</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Factorial</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />rexx systems</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />PayFit</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Kenjo</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HiBob</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Deel</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sage HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Humaans</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Eurécia</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Officient</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sesame HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Charlie</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HRworks</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Rippling</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />PeopleHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/silae/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Silae</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/datev/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />DATEV LODAS</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/datevlug/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />DATEV Lohn & Gehalt</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Retrieve all time off balances. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Personio</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HiBob</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Deel</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sage HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Humaans</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Eurécia</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Charlie</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HRworks</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Retrieve all absences. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Personio</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Factorial</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />rexx systems</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />PayFit</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Kenjo</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HiBob</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Deel</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sage HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Humaans</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Eurécia</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Officient</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sesame HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Charlie</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HRworks</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Rippling</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />PeopleHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Hailey HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/silae/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Silae</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Create a new absence. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Personio</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Factorial</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HiBob</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Deel</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sesame HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/silae/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Silae</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/datev/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />DATEV LODAS</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/datevlug/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />DATEV Lohn & Gehalt</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Check [this page](/hris/features/creating-absences) for a detailed guide. <Note> This endpoint requires the permission **Manage absences** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "wXJMxwDvPAjrJ4CyqdV9", "absence_type_id": "3YKtQ7qedsrcCady1jSyAkY1", "start_date": "2019-09-17", "end_date": "2019-09-21", "start_half_day": false, "end_half_day": false, "employee_note": "Visiting the aliens", "start_time": "08:30:00", "end_time": "16:00:00" } ```
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
     * @description Delete this absence. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Personio</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Factorial</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HiBob</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Deel</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sesame HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Manage absences** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "absence_id": "wXJMxwDvPAjrJ4CyqdV9" } ```
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
     * @description Retrieve all legal entites. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Personio</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Factorial</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />PayFit</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Deel</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Gusto</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Nmbrs</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lucca</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/silae/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Silae</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Retrieve all applications. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SmartRecruiters</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Oracle Recruiting Cloud</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lever</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Recruitee</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Greenhouse</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Teamtailor</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Ashby</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Onlyfy</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />AFAS Software</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Bullhorn</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workable</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Fountain</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Softgarden</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Pinpoint</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Welcome to the Jungle</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />d.vinci</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />JOIN</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Jobvite</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sage HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />TRAFFIT</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />eRecruiter</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Haufe Umantis</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Taleez</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HRworks</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />OTYS</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />RECRU</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />JazzHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BITE</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Homerun</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Breezy HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Flatchr</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/applicantstack/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />ApplicantStack</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Moves an application to a specified stage. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SmartRecruiters</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Oracle Recruiting Cloud</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lever</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Recruitee</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Greenhouse</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Teamtailor</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Ashby</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workable</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />TRAFFIT</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Homerun</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "stage_id": "3PJ8PZhZZa1eEdd2DtPNtVup" } ```
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
     * @description Add a note to an application. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lever</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Recruitee</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Greenhouse</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Teamtailor</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Ashby</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Homerun</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Add extra information to an application. This can be any extra text information you want to add to an application. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "content": "A new message from the candidate is available in YourChat!", "content_type": "PLAIN_TEXT" } ```
     *
     * @tags Unified ATS API
     * @name PostAtsApplicationsApplicationIdNotes
     * @summary Add note to application
     * @request POST:/ats/applications/{application_id}/notes
     * @secure
     */
    postAtsApplicationsApplicationIdNotes: (applicationId, data, params = {}) => this.request({
      path: `/ats/applications/${applicationId}/notes`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all candidates. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SmartRecruiters</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Oracle Recruiting Cloud</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lever</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Recruitee</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Greenhouse</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Teamtailor</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Ashby</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Onlyfy</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />AFAS Software</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Bullhorn</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workable</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Fountain</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Pinpoint</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Welcome to the Jungle</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />JOIN</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Jobvite</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sage HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />TRAFFIT</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />eRecruiter</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Haufe Umantis</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Taleez</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HRworks</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />OTYS</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />RECRU</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />JazzHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BITE</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Homerun</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Breezy HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Flatchr</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/applicantstack/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />ApplicantStack</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Create a new candidate and application for the specified job. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SmartRecruiters</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Oracle Recruiting Cloud</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lever</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Recruitee</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Greenhouse</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Teamtailor</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Ashby</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Onlyfy</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Personio</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />rexx systems</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />AFAS Software</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Bullhorn</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workable</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Fountain</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Softgarden</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Pinpoint</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Welcome to the Jungle</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />d.vinci</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />JOIN</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sage HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />TRAFFIT</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />eRecruiter</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Haufe Umantis</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Taleez</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HRworks</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />OTYS</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/heyrecruit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Heyrecruit</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />RECRU</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />JazzHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BITE</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Homerun</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/mysolution/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Mysolution</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Breezy HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Flatchr</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/concludis/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />concludis</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Warning> **This endpoint is deprecated!** We realized that in practice it was always more about creating _applications_ instead of _candidates_, so we created a new, more aptly named one that you should use instead: [Create application](/ats/v1/post-jobs-job-id-applications) Using it also has the benefit that we return the newly created applicant at the root level, so you can easily store its ID. </Warning> <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "candidate": { "first_name": "Frank", "last_name": "Doe", "company": "Acme Inc.", "title": "Head of Integrations", "email_address": "frank.doe@example.com", "phone_number": "+1-541-754-3010", "gender": "MALE", "salary_expectations": { "amount": 100000, "period": "YEAR" }, "availability_date": "2021-01-01", "location": { "city": "New York", "country": "US" }, "social_links": [ { "url": "https://www.linkedin.com/in/frank-doe-123456789/" }, { "url": "https://twitter.com/frankdoe" } ] }, "application": { "job_id": "BDpgnpZ148nrGh4mYHNxJBgx", "stage_id": "8x3YKRDcuRnwShdh96ShBNn1" }, "screening_question_answers": [ { "question_id": "3phFBNXRweGnDmsU9o2vdPuQ", "answer": "Yes" }, { "question_id": "EYJjhMQT3LtVKXnTbnRT8s6U", "answer": [ "GUzE666zfyjeoCJX6A8n7wh6", "5WPHzzKAv8cx97KtHRUV96U8", "7yZfKGzWigXxxRTygqAfHvyE" ] } ], "attachments": [ { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } ] } ```
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
     * @description Uploads an attachment file for the specified candidate. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SmartRecruiters</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lever</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Recruitee</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Greenhouse</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Teamtailor</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Ashby</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Onlyfy</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Bullhorn</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workable</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Welcome to the Jungle</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />eRecruiter</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Taleez</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HRworks</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />OTYS</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Homerun</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Breezy HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "candidate_id": "GRKdd9dibYKKCrmGRSMJf3wu", "attachment": { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } } ```
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
     * @description Add a result link to a candidate. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SmartRecruiters</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lever</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Recruitee</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Greenhouse</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Teamtailor</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Ashby</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Onlyfy</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Bullhorn</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workable</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Welcome to the Jungle</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />JOIN</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Jobvite</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />eRecruiter</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />OTYS</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />JazzHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Homerun</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Breezy HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Warning> **This endpoint is deprecated!** Please use [add result link to application](/ats/v1/post-applications-application-id-result-links) instead. This can, for example, be used to link a candidate back to a test result/assessment in your application. As not all ATS tools have a "result link" feature, we sometimes repurpose other fields to expose it. This action is deprecated because result links usually concern applications and not candidates. Use endpoint nested under `/applications` instead.. </Warning> <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "label": "Assessment Result", "url": "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG", "details": { "custom_field_name_prefix": "Acme:", "attributes": [ { "key": "Score", "value": "100%" }, { "key": "Time", "value": "2:30h" } ] } } ```
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
     * @description Add a tag to a candidate. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SmartRecruiters</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lever</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Recruitee</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Greenhouse</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Teamtailor</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Ashby</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Onlyfy</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workable</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Welcome to the Jungle</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />eRecruiter</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />RECRU</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Kombo takes care of creating the tag if required, finding out the right ID, and appending it to the list of tags. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "tag": { "name": "Excellent Fit" } } ```
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
     * @description Remove a tag from a candidate based on its name. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SmartRecruiters</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lever</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Recruitee</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Greenhouse</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Teamtailor</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Onlyfy</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workable</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Welcome to the Jungle</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />eRecruiter</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> This will also succeed if the tag does not exist on the candidate. <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "tag": { "name": "Excellent Fit" } } ```
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
     * @description Retrieve all tags. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SmartRecruiters</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lever</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Recruitee</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Greenhouse</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Teamtailor</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Ashby</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Onlyfy</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workable</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Pinpoint</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Welcome to the Jungle</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />JOIN</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />TRAFFIT</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />eRecruiter</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />RECRU</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Breezy HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Flatchr</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Get all application stages available in the ATS. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SmartRecruiters</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Oracle Recruiting Cloud</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lever</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Recruitee</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Greenhouse</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Teamtailor</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Ashby</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Onlyfy</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />AFAS Software</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Bullhorn</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workable</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Fountain</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Softgarden</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Pinpoint</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Welcome to the Jungle</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />d.vinci</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Jobvite</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sage HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />TRAFFIT</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />eRecruiter</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Haufe Umantis</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Taleez</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HRworks</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />OTYS</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />RECRU</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />JazzHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BITE</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Homerun</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Breezy HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Flatchr</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/applicantstack/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />ApplicantStack</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Warning> **This endpoint is deprecated!** Get all application stages available in the ATS. This is deprecated because most ATS systems have separate sets of stages for each job. We'd recommend using the `stages` property on jobs instead.. </Warning> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Retrieve all jobs. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SmartRecruiters</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Oracle Recruiting Cloud</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lever</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Recruitee</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Greenhouse</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Teamtailor</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Ashby</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Onlyfy</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Personio</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />rexx systems</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />AFAS Software</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Bullhorn</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workable</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Fountain</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Softgarden</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Pinpoint</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Welcome to the Jungle</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />d.vinci</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />JOIN</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Jobvite</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sage HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />TRAFFIT</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />eRecruiter</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Haufe Umantis</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Taleez</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HRworks</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />OTYS</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/heyrecruit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Heyrecruit</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />RECRU</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />JazzHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BITE</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Homerun</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/mysolution/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Mysolution</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Breezy HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Flatchr</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/applicantstack/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />ApplicantStack</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/concludis/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />concludis</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Create a new application and candidate for the specified job. The first CV in the attachments will be treated as the resume of the candidate when the tool allows previewing a resume. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SmartRecruiters</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Oracle Recruiting Cloud</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lever</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Recruitee</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Greenhouse</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Teamtailor</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Ashby</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Onlyfy</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Personio</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />rexx systems</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />AFAS Software</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BambooHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Bullhorn</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workable</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Fountain</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Softgarden</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Pinpoint</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Welcome to the Jungle</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />d.vinci</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />JOIN</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sage HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />TRAFFIT</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />eRecruiter</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Haufe Umantis</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Taleez</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HRworks</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />OTYS</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/heyrecruit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Heyrecruit</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />RECRU</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />JazzHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />BITE</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Homerun</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/mysolution/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Mysolution</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Breezy HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Flatchr</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/concludis/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />concludis</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Create and manage candidates and applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "stage_id": "8x3YKRDcuRnwShdh96ShBNn1", "candidate": { "first_name": "Frank", "last_name": "Doe", "company": "Acme Inc.", "title": "Head of Integrations", "email_address": "frank.doe@example.com", "phone_number": "+1-541-754-3010", "gender": "MALE", "salary_expectations": { "amount": 100000, "period": "YEAR" }, "availability_date": "2021-01-01", "location": { "city": "New York", "country": "US" } }, "attachments": [ { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } ], "screening_question_answers": [ { "question_id": "3phFBNXRweGnDmsU9o2vdPuQ", "answer": "Yes" }, { "question_id": "EYJjhMQT3LtVKXnTbnRT8s6U", "answer": [ "GUzE666zfyjeoCJX6A8n7wh6", "5WPHzzKAv8cx97KtHRUV96U8", "7yZfKGzWigXxxRTygqAfHvyE" ] } ] } ```
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
     * @description Retrieve all users. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SmartRecruiters</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Lever</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Recruitee</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Greenhouse</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Teamtailor</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Ashby</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Onlyfy</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workable</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Softgarden</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Pinpoint</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />d.vinci</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />JOIN</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Jobvite</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />TRAFFIT</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />HRworks</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />OTYS</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />RECRU</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />JazzHR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Breezy HR</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
    getAssessmentPackages: (params = {}) => this.request({
      path: `/assessment/packages`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
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
    putAssessmentPackages: (data, params = {}) => this.request({
      path: `/assessment/packages`,
      method: "PUT",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
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
    getAssessmentOrdersOpen: (query, params = {}) => this.request({
      path: `/assessment/orders/open`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Updates an assessment order result. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Workday</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SAP SuccessFactors</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />SmartRecruiters</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Recruitee</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Greenhouse</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Ashby</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> ### Example Request Body ```json { "status": "COMPLETED", "result_url": "https://example.com", "completed_at": "2023-04-04T00:00:00.000Z", "score": 90, "max_score": 100, "attributes": [ { "field": "remarks", "value": "Test completed with passing score" } ] } ```
     *
     * @tags Unified ATS (Assessment) API
     * @name PutAssessmentOrdersAssessmentOrderIdResult
     * @summary Update order result
     * @request PUT:/assessment/orders/{assessment_order_id}/result
     * @secure
     */
    putAssessmentOrdersAssessmentOrderIdResult: (assessmentOrderId, data, params = {}) => this.request({
      path: `/assessment/orders/${assessmentOrderId}/result`,
      method: "PUT",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
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
     * @description This action allows to send an arbitrary ASCII file directly to DATEV LODAS or Lohn und Gehalt. Kombo adds validation for the file format but not on the content. This action allows you to implement any use case that you might have with DATEV payroll ASCII imports.
     *
     * @tags Custom Endpoints
     * @name PostCustomDatevPassthrough
     * @summary Write raw DATEV ASCII file
     * @request POST:/custom/datev/passthrough
     * @secure
     */
    postCustomDatevPassthrough: (data, params = {}) => this.request({
      path: `/custom/datev/passthrough`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description What DATEV requires to prepare payroll is very specific and currently, as DATEV is not providing "read", this is not part of the unified model. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/datev/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />DATEV LODAS</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/datevlug/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />DATEV Lohn & Gehalt</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Manage payroll** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "EvLV61zdahkN4ftPJbmPCkdv", "payroll_run": { "date": "2022-05-01" }, "hourly_payments": [ { "hours": 14, "lohnart": 200 }, { "hours": 16, "lohnart": 232 } ], "fixed_payments": [ { "amount": 560, "lohnart": 100 } ] } ```
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
     * @description Sets the compensations for an employee on the specified effective date. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/datev/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />DATEV LODAS</li> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/datevlug/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />DATEV Lohn & Gehalt</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Other compensations will end at the effective date. That means, if you would like to add a compensation, you also have to include the compensations that you would like to keep. <Note> This endpoint requires the permission **Manage payroll** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "3bdhemmSP1TPQDGWtRveRot9", "effective_date": "2022-12-01", "compensations": [ { "amount": 4500, "currency": "EUR", "period": "MONTH", "lohnart": 200 }, { "amount": 30, "currency": "EUR", "period": "HOUR" } ] } ```
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
    }),
    /**
     * @description Write a payroll supplement to Silae using the supplement code. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li style={{display: 'flex', alignItems: 'center'}}><img src="https://storage.googleapis.com/kombo-assets/integrations/silae/icon.svg" style={{"width":"16px","height":"16px","marginTop":"0 !important","marginBottom":"0 !important","marginRight":"8px !important"}} />Silae</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Manage payroll** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "EvLV61zdahkN4ftPJbmPCkdv", "supplement_code": "200", "effective_date": "2024-01-14", "element_amount": 6 } ```
     *
     * @tags Custom Endpoints
     * @name PostCustomSilaeEmployeesEmployeeIdPayrollSupplements
     * @summary Write Payroll Supplement
     * @request POST:/custom/silae/employees/{employee_id}/payroll-supplements
     * @secure
     */
    postCustomSilaeEmployeesEmployeeIdPayrollSupplements: (employeeId, data, params = {}) => this.request({
      path: `/custom/silae/employees/${employeeId}/payroll-supplements`,
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
  GetAtsApplicationsParameterOutcome,
  GetAtsCandidatesParameterIncludeDeleted,
  GetAtsJobsParameterIncludeDeleted,
  GetAtsJobsParameterStatus,
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
