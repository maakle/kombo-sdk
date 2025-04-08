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
  GetAtsInterviewsParameterIncludeDeleted: () => GetAtsInterviewsParameterIncludeDeleted,
  GetAtsJobsParameterIncludeDeleted: () => GetAtsJobsParameterIncludeDeleted,
  GetAtsJobsParameterStatus: () => GetAtsJobsParameterStatus,
  GetAtsOffersParameterIncludeDeleted: () => GetAtsOffersParameterIncludeDeleted,
  GetAtsRejectionReasonsParameterIncludeDeleted: () => GetAtsRejectionReasonsParameterIncludeDeleted,
  GetAtsTagsParameterIncludeDeleted: () => GetAtsTagsParameterIncludeDeleted,
  GetAtsUsersParameterIncludeDeleted: () => GetAtsUsersParameterIncludeDeleted,
  GetHrisAbsenceTypesParameterIncludeDeleted: () => GetHrisAbsenceTypesParameterIncludeDeleted,
  GetHrisAbsencesParameterIncludeDeleted: () => GetHrisAbsencesParameterIncludeDeleted,
  GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted: () => GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted,
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
var GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = /* @__PURE__ */ ((GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted2) => {
  GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted2["True"] = "true";
  GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted2["False"] = "false";
  return GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted2;
})(GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted || {});
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
var GetAtsOffersParameterIncludeDeleted = /* @__PURE__ */ ((GetAtsOffersParameterIncludeDeleted2) => {
  GetAtsOffersParameterIncludeDeleted2["True"] = "true";
  GetAtsOffersParameterIncludeDeleted2["False"] = "false";
  return GetAtsOffersParameterIncludeDeleted2;
})(GetAtsOffersParameterIncludeDeleted || {});
var GetAtsRejectionReasonsParameterIncludeDeleted = /* @__PURE__ */ ((GetAtsRejectionReasonsParameterIncludeDeleted2) => {
  GetAtsRejectionReasonsParameterIncludeDeleted2["True"] = "true";
  GetAtsRejectionReasonsParameterIncludeDeleted2["False"] = "false";
  return GetAtsRejectionReasonsParameterIncludeDeleted2;
})(GetAtsRejectionReasonsParameterIncludeDeleted || {});
var GetAtsInterviewsParameterIncludeDeleted = /* @__PURE__ */ ((GetAtsInterviewsParameterIncludeDeleted2) => {
  GetAtsInterviewsParameterIncludeDeleted2["True"] = "true";
  GetAtsInterviewsParameterIncludeDeleted2["False"] = "false";
  return GetAtsInterviewsParameterIncludeDeleted2;
})(GetAtsInterviewsParameterIncludeDeleted || {});
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
      const r = response.clone();
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
      if (!response.ok) throw data;
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
     * @description Send a request to the specified integration's native API. At Kombo we put a lot of work into making sure that our unified API covers all our customers' use cases and that they never have to think about integration-specific logic again. There are cases, however, where our customers want to build features that are very integration-specific. That's where this endpoint comes in. Pass in details about the request you want to make to the integration's API and we'll forward it for you. We'll also take care of setting the right base URL and authenticating your requests. To get started, please pick the relevant API (some tools provide multiple to due different base URLs or authentication schemes) from the table below and pass in the `{tool}/{api}` identifier as part of the path. |Integration|`{tool}/{api}`|Description| |---|---|---| |Personio|`personio/personnel`|Personio's [Personnel Data API](https://developer.personio.de/reference/get_company-employees). We automatically authenticate all requests using the client ID and secret and use `https://api.personio.de/v1` as the base URL.| |Personio|`personio/personnelv2`|Personio's [V2 Personnel Data API](https://developer.personio.de/v2.0/reference/introduction). We automatically authenticate all requests using the client ID and secret and use `https://api.personio.de/v2` as the base URL.| |Workday|`workday/soap`|[Workday's SOAP API](https://community.workday.com/sites/default/files/file-hosting/productionapi/index.html). We automatically authenticate all requests. Set `data` to your raw xml string. Use `/` as your `path`, as we will always send requests to `https://\{domain\}/ccx/service/\{tenant\}/\{service_name\}`. Set your `method` to `POST`. You need to specify the `api_options` object and set `service_name` to the name of the service you want to call. Find all available services [here](https://community.workday.com/sites/default/files/file-hosting/productionapi/versions/v41.0/index.html). The string that you submit as `data` will be the content of the `soapenv:Body` tag in the request.| |SAP SuccessFactors|`successfactors/odata-v2`|[SuccessFactors' OData V2 API](https://help.sap.com/doc/74597e67f54d4f448252bad4c2b601c9/2211/en-US/SF_HCM_OData_API_REF_en.pdf). We automatically authenticate all requests and use `https://\{api_domain\}/odata/v2` as the base URL.| |SmartRecruiters|`smartrecruiters/default`|Smartrecruiters [API](https://developers.smartrecruiters.com/reference/apply-api). We automatically authenticate all requests using OAuth and use `https://api.smartrecruiters.com` as the base URL.| |SmartRecruiters|`smartrecruiters/default`|Smartrecruiters [API](https://developers.smartrecruiters.com/reference/apply-api). We automatically authenticate all requests using the credentials supplied by the customer and use `https://api.smartrecruiters.com` as the base URL.| |Factorial|`factorial/api`|Factorial's [API](https://apidoc.factorialhr.com/). We automatically authenticate all requests and use `https://api.factorialhr.com/api` or `https://api.demo.factorial.dev/api` as the base URL, depending on the connected instance.| |Oracle Recruiting Cloud|`oraclerecruiting/rest`|[Oracles's REST API](https://docs.oracle.com/en/cloud/saas/human-resources/24d/farws/rest-endpoints.html). We automatically authenticate all requests and use 'https://\{company_url\}' as the base url.| |Lever|`lever/v1`|[Lever's v1 API](https://hire.lever.co/developer/documentation). We automatically authenticate all requests using the partner credentials which have been configured in the Lever tool settings (this uses Kombo's partner credentials by default).| |iCIMS|`icims/default`|[iCIMS Default API](https://developer-community.icims.com/). We automatically authenticate all requests and use `https://api.icims.com/customers/\{customer_id\}` as the base url.| |Recruitee|`recruitee/default`|The [Recruitee API](https://api.recruitee.com/docs/index.html). We automatically authenticate all requests and use `https://api.recruitee.com/c/\{company_id\}` as the base URL.| |Greenhouse|`greenhouse/harvest`|Greenhouse [Harvest API](https://developers.greenhouse.io/harvest.html). We automatically authenticate all requests using the API key and use `https://harvest.greenhouse.io/v1` as the base URL.| |Teamtailor|`teamtailor/v1`|Teamtailor's [JSON-API](https://docs.teamtailor.com/). We authenticate all request with the Teamtailor API key and use the base URL `https://api.teamtailor.com/v1`.| |Ashby|`ashby/v1`|Ashby's [V1 API](https://developers.ashbyhq.com/reference/introduction). We automatically authenticate all requests with the provided credentials and use `https://api.ashbyhq.com` as the base URL. Please note that Ashby uses an RPC-style API. Please check [the Ashby API documentation](https://developers.ashbyhq.com/reference/introduction) for details on how to use it.| |Onlyfy|`onlyfy/v1`|Onlyfy's [Public v1 REST API](https://onlyfy.io/doc/v1#section/Introduction). We automatically authenticate all requests using the `apikey` header and use `https://api.prescreenapp.io/v1` as the base URL.| |Personio|`personio/recruiting`|Personio's [Recruiting API](https://developer.personio.de/reference/get_company-employees). We automatically authenticate all requests using the Recruiting access token and use `https://api.personio.de/v1/recruiting` as the base URL.| |Personio|`personio/recruitingV2`|Personio's [V2 Recruiting API](https://developer.personio.de/reference/get_v2-recruiting-applications). We automatically authenticate all requests using the Recruiting access token, send the `Beta` header and use `https://api.personio.de/v2/recruiting` as the base URL.| |Personio|`personio/jobboard`|API endpoints exposed on Personio's public job board pages ([currently just the XML feed](https://developer.personio.de/reference/get_xml)). We automatically use the right `https://\{company\}.jobs.personio.de` base URL.| |UKG Pro|`ukgpro/recruting`|[UKG Pro's Recruiting API](https://developer.ukg.com/hcm/reference/retrieveapplications). We automatically authenticate all requests and use  `https://\{hostname\}/talent/recruiting/v2/\{tenantalias\}/api` as the base URL.| |UKG Ready|`ukgready/api`|UKG Ready [API](https://secure.saashr.com/ta/docs/rest/public/). We automatically authenticate all requests using the provided credentials and use `https://\{pod_url\}` as the base URL.| |ADP Workforce Now|`adpworkforcenow/default`|[ADP Workforce Now API v2](https://developers.adp.com/build/api-explorer/hcm-offrg-wfn). We automatically authenticate all requests and use the correct subdomain.| |rexx systems|`rexx/default`|Rexx's HRIS export API. There is only one endpoint: `Get /`| |BambooHR|`bamboohr/v1`|BambooHR's [API](https://documentation.bamboohr.com/reference/get-employee). We automatically authenticate all requests using the customer credentials `https://api.bamboohr.com/api/gateway.php/\{subdomain\}/v1` as the base URL.| |Bullhorn|`bullhorn/default`|[Bullhorn's API](https://bullhorn.github.io/rest-api-docs/index.html). We automatically use the right `https://rest.bullhornstaffing.com/rest-services/\{corpToken\}` base URL.| |Workable|`workable/v1`|Workable's [API](https://workable.readme.io/reference/generate-an-access-token). We automatically authenticate all requests using the client ID and secret and use `https://subdomain.workable.com/spi/v3` as the base URL.| |Employment Hero|`employmenthero/default`|EmploymentHero [API](https://developer.employmenthero.com/api-references/#icon-book-open-introduction). We automatically authenticate all requests using the credentials supplied by the customer and use `https://api.employmenthero.com/api` as the base URL.| |Fountain|`fountain/v2`|Fountain's [Hire API](https://developer.fountain.com/reference/get_v2-applicants). We automatically authenticate all requests and use `https://api.fountain.com/v2` as the base URL.| |Kenjo|`kenjo/api`|Kenjo's [API](https://kenjo.readme.io/reference/generate-the-api-key). We automatically authenticate all requests using the API key and use `https://api.kenjo.io/` as the base URL.| |HiBob|`hibob/v1`|[HibBob's v1 API](https://apidocs.hibob.com/reference/get_people). We automatically authenticate all requests using the service user credentials (or, for old integrations, the API key) and use `https://api.hibob.com/v1` as the base URL.| |Cezanne HR|`cezannehr/dataservice`|[CezanneHR's v7 dataservice API](https://api.cezannehr.com/).We automatically authenticate all requests and use the base URL `https://subdomain.cezanneondemand.com/cezanneondemand/v7/dataservice.svc`| |Microsoft Entra ID|`entraid/v1`|[AzureAD's API](https://learn.microsoft.com/en-us/graph/api/resources/identity-network-access-overview?view=graph-rest-1.0). We automatically authenticate all requests.| |Microsoft Azure AD|`azuread/v1`|[AzureAD's API](https://learn.microsoft.com/en-us/graph/api/resources/identity-network-access-overview?view=graph-rest-1.0). We automatically authenticate all requests.| |Google Workspace|`googleworkspace/people`|[Googles's API](https://developers.google.com/people/api/rest). We automatically authenticate all requests and use 'https://people.googleapis.com' as the base URL.| |Google Workspace|`googleworkspace/admin`|[Googles's API](https://developers.google.com/admin-sdk/directory/reference/rest). We automatically authenticate all requests and use 'https://admin.googleapis.com' as the base URL.| |Pinpoint|`pinpoint/v1`|Pinpoint's [JSON:API](https://developers.pinpointhq.com/docs). We automatically authenticate all requests using the `X-API-KEY` header and use `https://\{subdomain\}.pinpointhq.com/api/v1` as the base URL.| |d.vinci|`dvinci/rest-api`|[DVinci REST API](https://static.dvinci-easy.com/files/d.vinci%20rest-api.html).| |d.vinci admin|`dvinciadmin/rest-api`|[DVinci REST API](https://static.dvinci-easy.com/files/d.vinci%20rest-api.html).| |d.vinci admin|`dvinciadmin/odata-api`|[DVinci ODATA API](https://dvinci.freshdesk.com/en/support/solutions/articles/75000059523-odata-reporting-api).| |Deel|`deel/api`|Deel's [API](https://developer.deel.com/reference/). We automatically authenticate all requests using the provided credentials and use `https://\{api_domain\}/rest` as the base URL.| |Remote|`remotecom/default`|Remote's [API](https://remote.com/resources/api/getting-started). We automatically authenticate all requests using provided credentials.| |Okta|`okta/v1`|[Okta's API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApiServiceIntegrations/). We automatically authenticate all request ans use 'https://\<your-okta-domain\>/api/v1' as the base URL.| |Humaans|`humaans/api`|Humaans' [API](https://docs.humaans.io/api/). We automatically authenticate all requests using the API key and use `https://app.humaans.io/api` as the base URL.| |TRAFFIT|`traffit/v2`|Traffit's [v2 API](https://api.traffit.com). We authenticate all requests with the Traffit API key and use the base URL `https://yourdomain.traffit.com/api/integration/v2`.| |eRecruiter|`erecruiter/api`|[eRecruiter's API](https://api.erecruiter.net/swagger/ui/index). We automatically authenticate all requests and use `https://\{domain\}/Api` as the base URL.| |Abacus Umantis|`abacusumantis/v1`|[Umantis API v1](https://recruitingapp-91005709.umantis.com/api/v1/swagger-ui). We automatically authenticate all requests and use `https://\{subdomain\}.umantis.com/api/v1` as the base URL.| |Haufe Umantis|`umantis/v1`|[Umantis API v1](https://recruitingapp-91005709.umantis.com/api/v1/swagger-ui). We automatically authenticate all requests and use `https://\{subdomain\}.umantis.com/api/v1` as the base URL.| |Taleez|`taleez/0`|[Taleez's API](https://api.taleez.com/swagger-ui/index.html). We automatically authenticate all requests and use `https://api.taleez.com/0` as the base URL.| |HR WORKS|`hrworks/v2`|HRWorks's v2 [API](https://developers.hrworks.de/2.0/endpoints). We automatically authenticate all requests using the customer credentials.| |Zoho Recruit|`zohorecruit/v2`|Zoho Recruit's [V2 API](https://www.zoho.com/recruit/developer-guide/apiv2/modules-api.html). We automatically authenticate all requests and use `https://recruit.\{domain\}/recruit/v2` as the base URL.| |AlexisHR|`alexishr/v1`|[AlexisHR's v1 API](https://docs.alexishr.com/)We automatically authenticate all requests and use `https://\{subdomain\}.alexishr.com` as base URL.| |Eploy|`eploy/api`|Eploy's [API](https://www.eploy.com/resources/developers/api-documentation/). We automatically authenticate all requests and use `https://\{subdomain\}.eploy.net/api` as the base URL.| |JobDiva|`jobdiva/api`|We automatically authenticate all requests and use `https://api.jobdiva.com` as the base URL.| |Visma Peple|`peple/hrm`|[Visma Payroll Reporting API](https://api.analytics1.hrm.visma.net/docs/openapi.html). We automatically authenticate all requests using the client credentials and use 'https://api.analytics1.hrm.visma.net' as the base URL.| |Dayforce|`dayforce/V1`|[Dayforce's API](https://developers.dayforce.com/Build/Home.aspx). We automatically authenticate all requests using the service user credentials| |Paylocity|`paylocity/default`|[Paylocity's Weblink API](https://developer.paylocity.com/integrations/reference/authentication-weblink). We automatically authenticate all requests and use 'https://\{api|dc1demogw\}.paylocity.com/' as the base URL.| |Paycor|`paycor/v1`|[Paycors's v1 API](https://developers.paycor.com/explore#section/Getting-Started). We automatically authenticate all requests and use 'https://apis.paycor.com'.| |Apploi|`apploi/rest-api`|The [Apploi API](https://integrate.apploi.com/). We automatically authenticate all requests and use `https://partners.apploi.com/` as the base URL.| |Rippling|`rippling/api`|Rippling's [API](https://developer.rippling.com/documentation). We automatically authenticate all requests and use `https://api.rippling.com/platform/api` as the base URL.| |PeopleHR|`peoplehr/default`|[PeopleHR's API](https://apidocs.peoplehr.com/#). We automatically authenticate all request ans use 'https://api.peoplehr.net' as the base URL.| |JazzHR|`jazzhr/v1`|[JazzHR's v1 API](https://www.resumatorapi.com/v1/#!`). We automatically authenticate all requests.| |Lucca|`lucca/api`|[Luccas's API](https://developers.lucca.fr/api-reference/legacy/introduction). We automatically authenticate all requests and use 'https://\{account\}.\{ilucca|ilucca-demo\}.\{region\}/' as the base URL.| |BITE|`bite/v1`|[Bite's v1 API](https://api.b-ite.io/docs/#/). We automatically authenticate all requests and use 'https://api.b-ite.io/v1' as base URL.| |Zelt|`zelt/partner`|Zelt's [Partner API](https://go.zelt.app/apiv2/swagger). We automatically authenticate all requests using the connected OAuth credentials and use `https://go.zelt.app/apiv2/partner` as the base URL.| |Hailey HR|`haileyhr/api`|Hailey HR's [API](https://api.haileyhr.app/docs/index.html). We automatically authenticate all requests using the provided credentials and use `https://api.haileyhr.app` as the base URL.| |Silae|`silae/rest`|[Silae's REST API](https://silae-api.document360.io/docs). We automatically authenticate all requests and use 'https://payroll-api.silae.fr/payroll' as the base URL.| |Connexys By Bullhorn|`connexys/api`|[Connexy's API](https://api.conexsys.com/client/v2/docs/#section/Overview). We automatically authenticate all requests and use `https://\{connexys_domain\}/` as the base URL.| |HR4YOU|`hr4you/v2`|[HR4YOU's v2 API](https://apiprodemo.hr4you.org/api2/docs). We automatically authenticate all requests and use `https://\{subdomain\}.hr4you.org/api2/` as the base URL.| |Cornerstone OnDemand|`cornerstoneondemand/recruiting`|Cornerstone's [Recruiting API](https://csod.dev/reference/recruiting/). We automatically authenticate all requests using the client ID and secret and use `https://your_domain.csod.com/services/` as the base URL.| |Spark Hire Recruit|`comeet/api`|[Spark Hire Recruit's API.](https://developers.comeet.com/reference/recruiting-api-overview)We automatically authenticate all requests and use `https://api.comeet.com` as the base URL.| |Leapsome|`leapsome/scim`|Leapsome [SCIM API](https://api.leapsome.com/scim/v1/api-docs/). We automatically authenticate all requests using the credentials supplied by the customer and use `https://api.leapsome.com/scim/v1` as the base URL.| |Gem|`gem/api`|Gem's [ATS API](https://api.gem.com/ats/v0/reference) We automatically authenticate all requests.| |workforce.com|`workforcecom/api`|Workforce.com [API](https://my.workforce.com/api/v2/documentation). We automatically authenticate all requests using the provided credentials and use `https://my.tanda.co` as the base URL.| |DATEV|`datevhr/hr-exports`|DATEV's [hr-exports](https://developer.datev.de/en/product-detail/hr-exports/1.0.0/overview). We automatically authenticate all requests and use `https://hr-exports.api.datev.de/\{platform|platform-sandbox\}/v1/clients/\{client-id\}` as the base URL.| |DATEV|`datevhr/eau`|DATEV's [eau](https://developer.datev.de/en/product-detail/eau-api/1.0.0/overview) API. We automatically authenticate all requests and use `https://eau.api.datev.de/\{platform|platform-sandbox\}/v1/clients/\{client-id\}/` as the base URL.| |Sympa|`sympa/api`|Sympa's [API](https://documenter.getpostman.com/view/33639379/2sA3kXG1vX#intro). We automatically authenticate all requests and use `https://api.sympahr.net/api/` as the base URL.| |Breezy HR|`breezyhr/v3`|[BreezyHR's v3 API](https://developer.breezy.hr/reference/overview). We automatically authenticate all requests using the service user credentials| |Flatchr|`flatchr/api`|Flatchr's [API](https://developers.flatchr.io/docs/getting_started). We automatically authenticate all requests and use `https://api.flatchr.io` as the base URL.| |Flatchr|`flatchr/career`|Flatchr's [Career API](https://developers.flatchr.io/docs/QuickStart/Candidats/Creer_un_candidat). We automatically authenticate all requests and use `https://career.flatchr.io` as the base URL.| <Note>Please note that the passthrough API endpoints are only meant for edge cases. That's why we only expose them for new integrations after understanding a concrete customer use case. If you have such a use case in mind, please reach out to Kombo.</Note>
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
     * @description Create a link that will allow the user to reconnect an integration. This is useful if you want to allow your users to update the credentials if the old ones for example expired. Embed this the same way you would [embed the connect link](/connect/embedded-flow). By default, the link will be valid for 1 hour. ### Example Request Body ```json { "language": "en", "scope_config_id": "9Pv6aCFwNDEzPNmwjSsY9SQx", "link_type": "EMBEDDED" } ```
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
    getIntegrationsIntegrationIdIntegrationFields: (integrationId, query, params = {}) => this.request({
      path: `/integrations/${integrationId}/integration-fields`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
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
    patchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId: (integrationId, integrationFieldId, data, params = {}) => this.request({
      path: `/integrations/${integrationId}/integration-fields/${integrationFieldId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
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
    getIntegrationsIntegrationIdCustomFields: (integrationId, query, params = {}) => this.request({
      path: `/integrations/${integrationId}/custom-fields`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
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
    putIntegrationsIntegrationIdCustomFieldsCustomFieldId: (integrationId, customFieldId, data, params = {}) => this.request({
      path: `/integrations/${integrationId}/custom-fields/${customFieldId}`,
      method: "PUT",
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
     * @description Retrieve all employees. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workdaycustomreport/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday Custom Reports</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgready/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Ready</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/adpworkforcenow/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ADP Workforce Now</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" height="16px" width="16px" class="m-0 mr-2" />rexx systems</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfitcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfitpartner/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit Partner</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/employmenthero/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Employment Hero</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kenjo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HeavenHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/entraid/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Microsoft Entra ID</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/azuread/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Microsoft Azure AD</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/googleworkspace/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Google Workspace</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nmbrs</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Remote</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/iriscascade/icon.svg" height="16px" width="16px" class="m-0 mr-2" />IRIS Cascade</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/okta/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Okta</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagepeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eurécia</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle HCM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Officient</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacus/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohopeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gusto</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breathe HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/catalystone/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CatalystOne</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/mirus/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Mirus</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peple/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Visma Peple</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dayforce/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Dayforce</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/trinet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TriNet (Zenefits)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/paylocity/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Paylocity</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/paycor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Paycor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/namely/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Namely</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Rippling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sapling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kallidus (Sapling)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lucca</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zelt/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zelt</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/planday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Planday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/boondmanager/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BoondManager</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Hailey HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oysterhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OysterHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/kiwihr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />kiwiHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstoneondemand/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone OnDemand</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/square/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Square</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/perbilityhelix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Perbility Helix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/leapsome/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Leapsome</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/loket/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Loket</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workforcecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />workforce.com</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/scim/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SCIM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/datevhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />DATEV HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sympa/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sympa</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/youforce/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Visma Raet - Youforce</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nibelis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nibelis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftpfetch/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP Fetch</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note>Not interested in most fields? You can use our [our Scopes feature](/scopes) to customize what data points are synced.</Note> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Create a new employee. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/adpworkforcenow/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ADP Workforce Now</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/entraid/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Microsoft Entra ID</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/azuread/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Microsoft Azure AD</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/googleworkspace/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Google Workspace</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nmbrs</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Remote</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/okta/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Okta</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle HCM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohopeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gusto</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breathe HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dayforce/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Dayforce</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/paylocity/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Paylocity</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/paycor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Paycor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Rippling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sapling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kallidus (Sapling)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/planday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Planday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstoneondemand/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone OnDemand</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/square/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Square</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/leapsome/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Leapsome</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sympa/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sympa</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Create and manage employees** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "first_name": "John", "last_name": "Doe", "work_email": "john.doe@acme.com", "gender": "MALE", "date_of_birth": "1986-01-01", "start_date": "2020-04-07", "job_title": "Integrations Team Lead", "home_address": { "city": "Berlin", "country": "DE", "state": "Berlin", "street_1": "Sonnenallee 63", "zip_code": "12045" } } ```
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
     * @description Get the form for creating an employee. This form can be rendered dynamically on your frontend to allow your customers to create employees in their HRIS. Follow our [create employee guide here](/hris/features/create-employee) to learn how this form is generated and how you can use it. ### Example Form ```json { "properties": { "firstName": { "type": "text", "label": "First Name", "required": true, "description": "Employee's first name", "unified_key": "first_name", "min_length": 1, "max_length": 100 }, "startDate": { "type": "date", "label": "Start Date", "required": true, "description": "Employee's start date", "unified_key": "start_date" }, "workLocation": { "type": "object", "label": "Work Location", "required": false, "description": "Employee's work location", "unified_key": null, "properties": { "site": { "type": "single_select", "label": "Site", "required": true, "description": "Employee's site", "unified_key": null, "options": { "type": "inline", "entries": [ { "label": "Site 1", "id": "FXrER44xubBqA9DLgZ3PFNNx", "unified_value": "1" }, { "label": "Site 2", "id": "2rv75UKT2XBoQXsUb9agiTUm", "unified_value": "2" } ] } }, "keyNumbers": { "type": "array", "label": "Key Numbers", "required": false, "description": "Employee's key numbers", "unified_key": null, "min_items": 2, "max_items": 5, "item_type": { "type": "number", "label": "Key Number", "required": false, "description": "The number of the keys which belong to the employee", "unified_key": null, "min": 0, "max": 99 } } } } } } ```
     *
     * @tags Unified HRIS API
     * @name GetHrisEmployeesForm
     * @summary Get employee form
     * @request GET:/hris/employees/form
     * @secure
     */
    getHrisEmployeesForm: (params = {}) => this.request({
      path: `/hris/employees/form`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Create an employee, based on the form schema. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dayforce/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Dayforce</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/planday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Planday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Create and manage employees** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "properties": { "firstName": "John", "startDate": "2025-01-01", "workLocation": { "site": "8e422bf8cav", "keyNumbers": [ 142, 525, 63 ] } } } ```
     *
     * @tags Unified HRIS API
     * @name PostHrisEmployeesForm
     * @summary Create employee with form
     * @request POST:/hris/employees/form
     * @secure
     */
    postHrisEmployeesForm: (data, params = {}) => this.request({
      path: `/hris/employees/form`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
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
     * @description Uploads an document file for the specified employee. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nmbrs</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Manage documents** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "category_id": "3Cjwu7nA7pH5cX5X1NAPmb7M", "document": { "name": "Frank Doe Employment Contract.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "content_type": "text/plain" } } ```
     *
     * @tags Unified HRIS API
     * @name PostHrisEmployeesEmployeeIdDocuments
     * @summary Add document to employee
     * @request POST:/hris/employees/{employee_id}/documents
     * @secure
     */
    postHrisEmployeesEmployeeIdDocuments: (employeeId, data, params = {}) => this.request({
      path: `/hris/employees/${employeeId}/documents`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Update writable integrations fields on Employees in the remote system. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Create and manage employees** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "GVQYPEDvn4dBrJxHUPuxXJ9E", "integration_field_id": "8icrU24RMhQo5hW3gsRY5YU9", "value": "New integration field value!" } ```
     *
     * @tags Unified HRIS API
     * @name PatchHrisEmployeesEmployeeIdIntegrationFieldsIntegrationFieldId
     * @summary Update fields on Employees
     * @request PATCH:/hris/employees/{employee_id}/integration-fields/{integration_field_id}
     * @secure
     */
    patchHrisEmployeesEmployeeIdIntegrationFieldsIntegrationFieldId: (employeeId, integrationFieldId, data, params = {}) => this.request({
      path: `/hris/employees/${employeeId}/integration-fields/${integrationFieldId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Get employee document categories. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nmbrs</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftpfetch/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP Fetch</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
     *
     * @tags Unified HRIS API
     * @name GetHrisEmployeeDocumentCategories
     * @summary Get employee document categories
     * @request GET:/hris/employee-document-categories
     * @secure
     */
    getHrisEmployeeDocumentCategories: (query, params = {}) => this.request({
      path: `/hris/employee-document-categories`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Get the teams. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workdaycustomreport/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday Custom Reports</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgready/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Ready</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/adpworkforcenow/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ADP Workforce Now</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfitcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfitpartner/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit Partner</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/employmenthero/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Employment Hero</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kenjo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HeavenHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/entraid/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Microsoft Entra ID</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/azuread/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Microsoft Azure AD</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/googleworkspace/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Google Workspace</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nmbrs</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Remote</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/iriscascade/icon.svg" height="16px" width="16px" class="m-0 mr-2" />IRIS Cascade</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/okta/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Okta</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagepeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eurécia</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle HCM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Officient</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacus/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohopeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gusto</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breathe HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/mirus/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Mirus</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peple/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Visma Peple</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dayforce/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Dayforce</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/trinet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TriNet (Zenefits)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/paylocity/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Paylocity</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/paycor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Paycor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/namely/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Namely</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Rippling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sapling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kallidus (Sapling)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lucca</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zelt/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zelt</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/planday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Planday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/boondmanager/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BoondManager</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Hailey HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oysterhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OysterHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/kiwihr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />kiwiHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstoneondemand/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone OnDemand</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/perbilityhelix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Perbility Helix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/leapsome/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Leapsome</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/loket/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Loket</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workforcecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />workforce.com</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/scim/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SCIM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/datevhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />DATEV HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sympa/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sympa</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/youforce/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Visma Raet - Youforce</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftpfetch/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP Fetch</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Warning> **This endpoint is deprecated!** Please use [the `/groups` endpoint](/hris/v1/get-groups) instead. It returns the same data but the naming makes more sense as the model not only includes teams but also departments and cost centers.. </Warning> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Retrieve all "groups" (teams, departments, and cost centers). <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workdaycustomreport/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday Custom Reports</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgready/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Ready</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/adpworkforcenow/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ADP Workforce Now</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfitcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfitpartner/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit Partner</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/employmenthero/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Employment Hero</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kenjo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HeavenHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/entraid/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Microsoft Entra ID</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/azuread/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Microsoft Azure AD</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/googleworkspace/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Google Workspace</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nmbrs</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Remote</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/iriscascade/icon.svg" height="16px" width="16px" class="m-0 mr-2" />IRIS Cascade</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/okta/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Okta</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagepeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eurécia</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle HCM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Officient</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacus/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohopeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gusto</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breathe HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/mirus/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Mirus</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peple/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Visma Peple</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dayforce/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Dayforce</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/trinet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TriNet (Zenefits)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/paylocity/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Paylocity</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/paycor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Paycor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/namely/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Namely</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Rippling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sapling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kallidus (Sapling)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lucca</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zelt/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zelt</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/planday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Planday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/boondmanager/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BoondManager</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Hailey HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oysterhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OysterHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/kiwihr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />kiwiHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstoneondemand/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone OnDemand</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/perbilityhelix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Perbility Helix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/leapsome/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Leapsome</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/loket/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Loket</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workforcecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />workforce.com</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/scim/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SCIM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/datevhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />DATEV HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sympa/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sympa</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/youforce/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Visma Raet - Youforce</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftpfetch/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP Fetch</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Retrieve all employments. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workdaycustomreport/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday Custom Reports</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgready/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Ready</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/adpworkforcenow/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ADP Workforce Now</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfitcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfitpartner/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit Partner</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/employmenthero/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Employment Hero</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kenjo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HeavenHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nmbrs</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Remote</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/iriscascade/icon.svg" height="16px" width="16px" class="m-0 mr-2" />IRIS Cascade</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagepeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eurécia</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle HCM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Officient</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gusto</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breathe HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/catalystone/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CatalystOne</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peple/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Visma Peple</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dayforce/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Dayforce</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/trinet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TriNet (Zenefits)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/paylocity/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Paylocity</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/paycor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Paycor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/namely/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Namely</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sapling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kallidus (Sapling)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lucca</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zelt/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zelt</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/boondmanager/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BoondManager</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Hailey HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oysterhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OysterHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstoneondemand/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone OnDemand</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/square/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Square</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/perbilityhelix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Perbility Helix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/loket/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Loket</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workforcecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />workforce.com</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/datevhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />DATEV HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sympa/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sympa</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/youforce/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Visma Raet - Youforce</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nibelis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nibelis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftpfetch/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP Fetch</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Retrieve all work locations. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workdaycustomreport/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday Custom Reports</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/adpworkforcenow/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ADP Workforce Now</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kenjo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HeavenHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/entraid/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Microsoft Entra ID</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/azuread/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Microsoft Azure AD</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/googleworkspace/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Google Workspace</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nmbrs</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Remote</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle HCM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gusto</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breathe HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/catalystone/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CatalystOne</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/trinet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TriNet (Zenefits)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/paycor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Paycor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/namely/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Namely</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Rippling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sapling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kallidus (Sapling)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lucca</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zelt/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zelt</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/boondmanager/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BoondManager</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Hailey HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/kiwihr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />kiwiHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/square/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Square</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workforcecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />workforce.com</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sympa/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sympa</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/youforce/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Visma Raet - Youforce</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftpfetch/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP Fetch</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
     *
     * @tags Unified HRIS API
     * @name GetHrisLocations
     * @summary Get work locations
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
     * @description Retrieve all absence types. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/adpworkforcenow/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ADP Workforce Now</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/employmenthero/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Employment Hero</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HeavenHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Remote</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eurécia</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Officient</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohopeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/trinet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TriNet (Zenefits)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/paycor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Paycor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Rippling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lucca</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/boondmanager/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BoondManager</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/perbilityhelix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Perbility Helix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/datev/icon.svg" height="16px" width="16px" class="m-0 mr-2" />DATEV LODAS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/datevlug/icon.svg" height="16px" width="16px" class="m-0 mr-2" />DATEV Lohn & Gehalt</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftpfetch/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP Fetch</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Retrieve all time off balances. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/adpworkforcenow/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ADP Workforce Now</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Remote</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eurécia</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Rippling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftpfetch/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP Fetch</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Retrieve all absences. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/adpworkforcenow/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ADP Workforce Now</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/employmenthero/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Employment Hero</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HeavenHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/remotecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Remote</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eurecia/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eurécia</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/officient/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Officient</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohopeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/trinet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TriNet (Zenefits)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/paycor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Paycor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rippling/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Rippling</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lucca</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/boondmanager/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BoondManager</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Hailey HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/perbilityhelix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Perbility Helix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftpfetch/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP Fetch</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Create a new absence. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/paycor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Paycor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/datev/icon.svg" height="16px" width="16px" class="m-0 mr-2" />DATEV LODAS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/datevlug/icon.svg" height="16px" width="16px" class="m-0 mr-2" />DATEV Lohn & Gehalt</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Check [this page](/hris/features/creating-absences) for a detailed guide. <Note> This endpoint requires the permission **Manage absences** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "wXJMxwDvPAjrJ4CyqdV9", "absence_type_id": "3YKtQ7qedsrcCady1jSyAkY1", "start_date": "2019-09-17", "end_date": "2019-09-21", "start_time": "08:30:00", "end_time": "16:00:00", "start_half_day": false, "end_half_day": false, "employee_note": "Visiting the aliens" } ```
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
     * @description Delete this absence. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hibob/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HiBob</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sesamehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sesame HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Manage absences** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "absence_id": "wXJMxwDvPAjrJ4CyqdV9" } ```
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
     * @description Retrieve all legal entites. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workdaycustomreport/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday Custom Reports</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgready/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Ready</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/adpworkforcenow/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ADP Workforce Now</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfitcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfitpartner/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit Partner</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/payfit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PayFit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/employmenthero/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Employment Hero</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/kenjo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kenjo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heavenhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HeavenHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cezannehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cezanne HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/entraid/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Microsoft Entra ID</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/azuread/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Microsoft Azure AD</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/nmbrs/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Nmbrs</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/deel/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Deel</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/okta/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Okta</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagepeople/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage People</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/humaans/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Humaans</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclehcm/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle HCM</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/charliehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Charlie</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacus/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gusto/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gusto</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breathehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breathe HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/catalystone/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CatalystOne</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/alexishr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AlexisHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/trinet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TriNet (Zenefits)</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/paycor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Paycor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/namely/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Namely</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/peoplehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />PeopleHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lucca/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lucca</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/boondmanager/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BoondManager</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/haileyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Hailey HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oysterhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OysterHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/loket/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Loket</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sympa/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sympa</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftp/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sftpfetch/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SFTP Fetch</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
    getHrisAttendance: (params = {}) => this.request({
      path: `/hris/attendance`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Currently in closed beta. <Warning>**This endpoint is currently in closed beta!** We're testing it with selected customers before its public release. If you're interested in learning more or getting early access, please reach out.</Warning>
     *
     * @tags Unified HRIS API
     * @name GetHrisTimesheets
     * @summary Get timesheets 🦄
     * @request GET:/hris/timesheets
     * @secure
     */
    getHrisTimesheets: (params = {}) => this.request({
      path: `/hris/timesheets`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    })
  };
  ats = {
    /**
     * @description Retrieve all applications. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstonetalentlink/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone TalentLink</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoft/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CEGID TalentSoft FrontOffice</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoftcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CEGID TalentSoft Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/adpworkforcenow/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ADP Workforce Now</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Softgarden</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinciadmin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci admin</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JOIN</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacusumantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Taleez</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/careerplug/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CareerPlug</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eightfold/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eightfold</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/apploi/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Apploi</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BITE</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting by Zucchetti</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/connexys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Connexys By Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hr4you/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR4YOU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstoneondemand/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone OnDemand</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zvooverecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zvoove Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/comeet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Spark Hire Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/compleet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Compleet</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gem/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gem</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Flatchr</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/reachmee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ReachMee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Visit our in depth guide to learn more about: - 💡 [Being aware of which applications are tracked](/ats/features/implementation-guide/tracking-created-applications#be-aware-of-which-applications-are-tracked) - 🚦 [Hiring signals](/ats/features/implementation-guide/tracking-created-applications#hiring-signals) - 📈 [Application stage changes](/ats/features/implementation-guide/tracking-created-applications#application-stage-changes) - ❓ [ATS-specific limitations](/ats/features/implementation-guide/tracking-created-applications#ats-specific-limitations) Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Moves an application to a specified stage. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacusumantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting by Zucchetti</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gem/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gem</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Set application stage** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "stage_id": "3PJ8PZhZZa1eEdd2DtPNtVup" } ```
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
     * @description Add a result link to an application. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoftcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CEGID TalentSoft Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/adpworkforcenow/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ADP Workforce Now</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinciadmin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci admin</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacusumantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting by Zucchetti</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hr4you/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR4YOU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gem/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gem</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> This can, for example, be used to link a candidate back to a test result/assessment in your application. As not all ATS tools have a "result link" feature, we sometimes repurpose other fields to expose it. <Note> This endpoint requires the permission **Add result links** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "application_id": "8Xi6iZrwusZqJmDGXs49GBmJ", "label": "Assessment Result", "url": "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG", "details": { "custom_field_name_prefix": "Acme:", "attributes": [ { "key": "Score", "value": "100%" }, { "key": "Time", "value": "2:30h" } ] }, "remote_fields": {} } ```
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
     * @description Add a note to an application. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinciadmin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci admin</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacusumantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting by Zucchetti</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hr4you/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR4YOU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/comeet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Spark Hire Recruit</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Add extra information to an application. This can be any extra text information you want to add to an application. <Note> This endpoint requires the permission **Add notes** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "content": "A new message from the candidate is available in YourChat!", "content_type": "PLAIN_TEXT", "remote_fields": {} } ```
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
     * @description Get attachments from a candidate or application. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zvooverecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zvoove Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/comeet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Spark Hire Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/reachmee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ReachMee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Get attachments from an application. If the ATS stores the attachments on the candidate, it will get the attachments from the corresponding candidate instead. <Note> This endpoint requires the permission **Read document attachments** to be enabled in [your scope config](/scopes). </Note>
     *
     * @tags Unified ATS API
     * @name GetAtsApplicationsApplicationIdAttachments
     * @summary Get application attachments
     * @request GET:/ats/applications/{application_id}/attachments
     * @secure
     */
    getAtsApplicationsApplicationIdAttachments: (applicationId, params = {}) => this.request({
      path: `/ats/applications/${applicationId}/attachments`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Uploads an attachment file for the specified applicant. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstonetalentlink/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone TalentLink</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinciadmin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci admin</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Taleez</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting by Zucchetti</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hr4you/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR4YOU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/reachmee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ReachMee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Warning> If adding an attachment to an application is not supported by the integration, the attachment will be [added to the candidate](/ats/v1/post-candidates-candidate-id-attachments) instead. </Warning> <Note> This endpoint requires the permission **Add attachments** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "application_id": "GRKdd9dibYKKCrmGRSMJf3wu", "attachment": { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" }, "remote_fields": {} } ```
     *
     * @tags Unified ATS API
     * @name PostAtsApplicationsApplicationIdAttachments
     * @summary Add attachment to application
     * @request POST:/ats/applications/{application_id}/attachments
     * @secure
     */
    postAtsApplicationsApplicationIdAttachments: (applicationId, data, params = {}) => this.request({
      path: `/ats/applications/${applicationId}/attachments`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Rejects an application with a provided reason. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacusumantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Rejects an application with a provided reason. Optionally, you can provide a free text note. You can get the list of rejection reasons with our [Get rejection reasons endpoint](/ats/v1/get-rejection-reasons). <Note> This endpoint requires the permission **Reject applications** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "rejection_reason_id": "3PJ8PZhZZa1eEdd2DtPNtVup", "note": "Candidate was a great culture fit but didn't bring the hard skills we need.", "remote_fields": {} } ```
     *
     * @tags Unified ATS API
     * @name PostAtsApplicationsApplicationIdReject
     * @summary Reject application
     * @request POST:/ats/applications/{application_id}/reject
     * @secure
     */
    postAtsApplicationsApplicationIdReject: (applicationId, data, params = {}) => this.request({
      path: `/ats/applications/${applicationId}/reject`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all candidates. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstonetalentlink/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone TalentLink</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoft/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CEGID TalentSoft FrontOffice</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoftcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CEGID TalentSoft Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/adpworkforcenow/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ADP Workforce Now</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinciadmin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci admin</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JOIN</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacusumantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Taleez</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/careerplug/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CareerPlug</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eightfold/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eightfold</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/apploi/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Apploi</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BITE</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting by Zucchetti</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/connexys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Connexys By Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hr4you/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR4YOU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstoneondemand/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone OnDemand</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zvooverecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zvoove Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/comeet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Spark Hire Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/compleet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Compleet</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gem/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gem</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Flatchr</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/reachmee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ReachMee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Create a new candidate and application for the specified job. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstonetalentlink/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone TalentLink</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhousejobboard/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse Job Board</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoft/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CEGID TalentSoft FrontOffice</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/concludis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />concludis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/piloga/icon.svg" height="16px" width="16px" class="m-0 mr-2" />P&I Loga</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" height="16px" width="16px" class="m-0 mr-2" />rexx systems</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Softgarden</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JOIN</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacusumantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobylon/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobylon</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Taleez</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/careerplug/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CareerPlug</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/perview/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Perview</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eightfold/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eightfold</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/apploi/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Apploi</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heyrecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Heyrecruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BITE</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/mysolution/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Mysolution</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hroffice/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR Office</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentclue/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Talent Clue</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting by Zucchetti</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ubeeo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ubeeo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/connexys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Connexys By Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hr4you/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR4YOU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstoneondemand/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone OnDemand</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zvooverecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zvoove Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/comeet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Spark Hire Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/compleet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Compleet</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/softgardenpartner/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Softgarden Partner</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Flatchr</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/reachmee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ReachMee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentadore/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TalentAdore</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/guidecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />GuideCom</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Warning> **We recommend using the [Create application](/ats/v1/post-jobs-job-id-applications) endpoint instead.** We realized that in practice it was always more about creating _applications_ instead of _candidates_, so we created a new, more aptly named one that you should use instead: [Create application](/ats/v1/post-jobs-job-id-applications) Using it also has the benefit that we return the newly created applicant at the root level, so you can easily store its ID. </Warning> <Note> This endpoint requires the permission **Create applications and candidates** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "candidate": { "first_name": "Frank", "last_name": "Doe", "company": "Acme Inc.", "title": "Head of Integrations", "email_address": "frank.doe@example.com", "phone_number": "+1-541-754-3010", "gender": "MALE", "salary_expectations": { "amount": 100000, "period": "YEAR" }, "availability_date": "2021-01-01", "location": { "city": "New York", "country": "US" }, "social_links": [ { "url": "https://www.linkedin.com/in/frank-doe-123456789/" }, { "url": "https://twitter.com/frankdoe" } ] }, "application": { "job_id": "BDpgnpZ148nrGh4mYHNxJBgx", "stage_id": "8x3YKRDcuRnwShdh96ShBNn1" }, "attachments": [ { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } ], "screening_question_answers": [ { "question_id": "3phFBNXRweGnDmsU9o2vdPuQ", "answer": "Yes" }, { "question_id": "EYJjhMQT3LtVKXnTbnRT8s6U", "answer": [ "GUzE666zfyjeoCJX6A8n7wh6", "5WPHzzKAv8cx97KtHRUV96U8", "7yZfKGzWigXxxRTygqAfHvyE" ] } ], "remote_fields": {} } ```
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
     * @description Get attachments from a candidate, including all attachments of all of their applications. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gem/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gem</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Read document attachments** to be enabled in [your scope config](/scopes). </Note>
     *
     * @tags Unified ATS API
     * @name GetAtsCandidatesCandidateIdAttachments
     * @summary Get candidate attachments
     * @request GET:/ats/candidates/{candidate_id}/attachments
     * @secure
     */
    getAtsCandidatesCandidateIdAttachments: (candidateId, params = {}) => this.request({
      path: `/ats/candidates/${candidateId}/attachments`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Uploads an attachment file for the specified candidate. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Taleez</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting by Zucchetti</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hr4you/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR4YOU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Warning> **We recommend using the [add attachment to application](/ats/v1/post-applications-application-id-attachments) endpoint instead.** We realized that in practice it was always more about adding attachments to _applications_ instead of _candidates_, so we created a new, more aptly named one that you should use instead: [add attachment to application](/ats/v1/post-applications-application-id-attachments) </Warning> <Note> This endpoint requires the permission **Add attachments** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "candidate_id": "GRKdd9dibYKKCrmGRSMJf3wu", "attachment": { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } } ```
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
     * @description Add a result link to a candidate. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gem/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gem</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Warning> **We recommend to use [add result link to application](/ats/v1/post-applications-application-id-result-links) instead.** This can, for example, be used to link a candidate back to a test result/assessment in your application. As not all ATS tools have a "result link" feature, we sometimes repurpose other fields to expose it. </Warning> <Note> This endpoint requires the permission **Add result links** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "label": "Assessment Result", "url": "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG", "details": { "custom_field_name_prefix": "Acme:", "attributes": [ { "key": "Score", "value": "100%" }, { "key": "Time", "value": "2:30h" } ] }, "remote_fields": {} } ```
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
     * @description Add a tag to a candidate. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Kombo takes care of creating the tag if required, finding out the right ID, and appending it to the list of tags. <Note> This endpoint requires the permission **Manage tags** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "tag": { "name": "Excellent Fit" } } ```
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
     * @description Remove a tag from a candidate based on its name. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> This will also succeed if the tag does not exist on the candidate. <Note> This endpoint requires the permission **Manage tags** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "tag": { "name": "Excellent Fit" } } ```
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
     * @description Update writable integrations fields on Candidates in the remote system. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Note> This endpoint requires the permission **Write custom fields on candidates** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "value": "New integration field value!" } ```
     *
     * @tags Unified ATS API
     * @name PatchAtsCandidatesCandidateIdIntegrationFieldsIntegrationFieldId
     * @summary Update fields on Candidates
     * @request PATCH:/ats/candidates/{candidate_id}/integration-fields/{integration_field_id}
     * @secure
     */
    patchAtsCandidatesCandidateIdIntegrationFieldsIntegrationFieldId: (candidateId, integrationFieldId, data, params = {}) => this.request({
      path: `/ats/candidates/${candidateId}/integration-fields/${integrationFieldId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all tags. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JOIN</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eightfold/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eightfold</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Flatchr</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Get all application stages available in the ATS. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstonetalentlink/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone TalentLink</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoft/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CEGID TalentSoft FrontOffice</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoftcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CEGID TalentSoft Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/adpworkforcenow/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ADP Workforce Now</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Softgarden</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinciadmin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci admin</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacusumantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobylon/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobylon</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Taleez</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/careerplug/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CareerPlug</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BITE</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting by Zucchetti</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hr4you/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR4YOU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstoneondemand/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone OnDemand</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zvooverecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zvoove Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/comeet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Spark Hire Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gem/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gem</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Flatchr</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> <Warning> **This endpoint is deprecated!** Get all application stages available in the ATS. This is deprecated because most ATS systems have separate sets of stages for each job. We'd recommend using the `stages` property on jobs instead.. </Warning> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Retrieve all jobs. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstonetalentlink/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone TalentLink</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhousejobboard/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse Job Board</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoft/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CEGID TalentSoft FrontOffice</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoftcustomer/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CEGID TalentSoft Customer</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/concludis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />concludis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/piloga/icon.svg" height="16px" width="16px" class="m-0 mr-2" />P&I Loga</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/adpworkforcenow/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ADP Workforce Now</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" height="16px" width="16px" class="m-0 mr-2" />rexx systems</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Softgarden</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinciadmin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci admin</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JOIN</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacusumantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobylon/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobylon</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Taleez</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/careerplug/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CareerPlug</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/perview/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Perview</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eightfold/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eightfold</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/paylocity/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Paylocity</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/apploi/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Apploi</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heyrecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Heyrecruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BITE</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/mysolution/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Mysolution</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hroffice/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR Office</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentclue/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Talent Clue</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting by Zucchetti</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ubeeo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ubeeo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/connexys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Connexys By Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hr4you/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR4YOU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstoneondemand/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone OnDemand</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zvooverecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zvoove Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/comeet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Spark Hire Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/compleet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Compleet</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gem/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gem</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/softgardenpartner/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Softgarden Partner</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Flatchr</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/reachmee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ReachMee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentadore/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TalentAdore</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/guidecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />GuideCom</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Visit our in depth guide to learn more about: - 🔄 [Getting updates of the data](/ats/features/implementation-guide/reading-jobs#getting-updates-of-the-data) - ❗ [Handling failing syncs](/ats/features/implementation-guide/reading-jobs#handling-failing-syncs) - 🔍 [Letting your customer choose which jobs to expose](/ats/features/implementation-guide/reading-jobs#let-your-customer-choose-which-jobs-to-expose-to-you) - 🔗 [Matching jobs in your database to ATS jobs](/ats/features/implementation-guide/reading-jobs#match-jobs-in-your-database-to-ats-jobs) - 🗑️ [Reacting to deleted/closed jobs](/ats/features/implementation-guide/reading-jobs#reacting-to-deleted-closed-jobs) Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
     * @description Create a new application and candidate for the specified job. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Factorial</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstonetalentlink/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone TalentLink</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhousejobboard/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse Job Board</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoft/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CEGID TalentSoft FrontOffice</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/concludis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />concludis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/piloga/icon.svg" height="16px" width="16px" class="m-0 mr-2" />P&I Loga</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/personio/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Personio</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/rexx/icon.svg" height="16px" width="16px" class="m-0 mr-2" />rexx systems</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/afas/icon.svg" height="16px" width="16px" class="m-0 mr-2" />AFAS Software</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bamboohr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BambooHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Softgarden</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/welcometothejungle/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Welcome to the Jungle</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JOIN</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sagehr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Sage HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/erecruiter/icon.svg" height="16px" width="16px" class="m-0 mr-2" />eRecruiter</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/abacusumantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Abacus Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobylon/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobylon</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/taleez/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Taleez</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/careerplug/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CareerPlug</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/perview/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Perview</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eightfold/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eightfold</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/apploi/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Apploi</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/heyrecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Heyrecruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />BITE</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/homerun/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Homerun</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/mysolution/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Mysolution</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hroffice/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR Office</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentclue/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Talent Clue</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting by Zucchetti</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ubeeo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ubeeo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/connexys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Connexys By Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hr4you/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR4YOU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstoneondemand/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone OnDemand</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zvooverecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zvoove Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/comeet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Spark Hire Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/compleet/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Compleet</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/softgardenpartner/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Softgarden Partner</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/flatchr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Flatchr</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/reachmee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />ReachMee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentadore/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TalentAdore</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/guidecom/icon.svg" height="16px" width="16px" class="m-0 mr-2" />GuideCom</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Visit our in depth guide to learn more about: - 🌐 [Setting the source of the application](/ats/features/implementation-guide/creating-applications#set-the-source-of-the-application) - 📎 [Uploading attachments with the application](/ats/features/implementation-guide/creating-applications#upload-attachments-with-the-application) - ♻️ [Retry behaviour](/ats/features/implementation-guide/creating-applications#retry-behaviour) - ✏️ [Writing answers to screening questions](/ats/features/implementation-guide/creating-applications#write-answers-to-screening-questions) - ⚠️ [Handling ATS-specific limitations](/ats/features/implementation-guide/creating-applications#handle-ats-specific-limitations) <Note> This endpoint requires the permission **Create applications and candidates** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "candidate": { "first_name": "Frank", "last_name": "Doe", "company": "Acme Inc.", "title": "Head of Integrations", "email_address": "frank.doe@example.com", "phone_number": "+1-541-754-3010", "gender": "MALE", "salary_expectations": { "amount": 100000, "period": "YEAR" }, "availability_date": "2021-01-01", "location": { "city": "New York", "country": "US" } }, "stage_id": "8x3YKRDcuRnwShdh96ShBNn1", "attachments": [ { "name": "Frank Doe CV.txt", "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=", "type": "CV", "content_type": "text/plain" } ], "screening_question_answers": [ { "question_id": "3phFBNXRweGnDmsU9o2vdPuQ", "answer": "Yes" }, { "question_id": "EYJjhMQT3LtVKXnTbnRT8s6U", "answer": [ "GUzE666zfyjeoCJX6A8n7wh6", "5WPHzzKAv8cx97KtHRUV96U8", "7yZfKGzWigXxxRTygqAfHvyE" ] } ], "remote_fields": {} } ```
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
     * @description Retrieve all users. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/talentsoft/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CEGID TalentSoft FrontOffice</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/onlyfy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Onlyfy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhornlogin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn Login</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobvite/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Jobvite</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/fountain/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Fountain</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/softgarden/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Softgarden</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinci/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/dvinciadmin/icon.svg" height="16px" width="16px" class="m-0 mr-2" />d.vinci admin</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/join/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JOIN</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/traffit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />TRAFFIT</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hrworks/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR WORKS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/otys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />OTYS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eploy/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eploy</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jobdiva/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JobDiva</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/careerplug/icon.svg" height="16px" width="16px" class="m-0 mr-2" />CareerPlug</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/eightfold/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Eightfold</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />RECRU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/jazzhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />JazzHR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/carerix/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Carerix</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/inrecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />InRecruiting by Zucchetti</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ubeeo/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ubeeo</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/connexys/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Connexys By Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/hr4you/icon.svg" height="16px" width="16px" class="m-0 mr-2" />HR4YOU</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/cornerstoneondemand/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Cornerstone OnDemand</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gem/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gem</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
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
    }),
    /**
     * @description Retrieve all offers. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
     *
     * @tags Unified ATS API
     * @name GetAtsOffers
     * @summary Get offers
     * @request GET:/ats/offers
     * @secure
     */
    getAtsOffers: (query, params = {}) => this.request({
      path: `/ats/offers`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all rejection reasons. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/bullhorn/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Bullhorn</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/umantis/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Haufe Umantis</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Get all rejection reasons available in the system. The Kombo ID is required in the associated [reject application action](/ats/v1/post-applications-application-id-reject). Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
     *
     * @tags Unified ATS API
     * @name GetAtsRejectionReasons
     * @summary Get rejection reasons
     * @request GET:/ats/rejection-reasons
     * @secure
     */
    getAtsRejectionReasons: (query, params = {}) => this.request({
      path: `/ats/rejection-reasons`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve all interviews. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workable/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workable</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/pinpoint/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Pinpoint</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/zohorecruit/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Zoho Recruit</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/gem/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Gem</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/breezyhr/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Breezy HR</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`
     *
     * @tags Unified ATS API
     * @name GetAtsInterviews
     * @summary Get interviews
     * @request GET:/ats/interviews
     * @secure
     */
    getAtsInterviews: (query, params = {}) => this.request({
      path: `/ats/interviews`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Unified ATS API
     * @name GetAtsActionsAtsCreateCandidate
     * @request GET:/ats/actions/ats_create_candidate
     * @secure
     */
    getAtsActionsAtsCreateCandidate: (params = {}) => this.request({
      path: `/ats/actions/ats_create_candidate`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Unified ATS API
     * @name GetAtsActionsAtsCreateApplication
     * @request GET:/ats/actions/ats_create_application
     * @secure
     */
    getAtsActionsAtsCreateApplication: (params = {}) => this.request(
      {
        path: `/ats/actions/ats_create_application`,
        method: "GET",
        secure: true,
        format: "json",
        ...params
      }
    ),
    /**
     * No description
     *
     * @tags Unified ATS API
     * @name GetAtsActionsAtsAddApplicationAttachment
     * @request GET:/ats/actions/ats_add_application_attachment
     * @secure
     */
    getAtsActionsAtsAddApplicationAttachment: (params = {}) => this.request({
      path: `/ats/actions/ats_add_application_attachment`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Unified ATS API
     * @name GetAtsActionsAtsAddCandidateAttachment
     * @request GET:/ats/actions/ats_add_candidate_attachment
     * @secure
     */
    getAtsActionsAtsAddCandidateAttachment: (params = {}) => this.request({
      path: `/ats/actions/ats_add_candidate_attachment`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Import tracked application <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> Retroactively import existing applications into Kombo's tracking system. This is particularly useful if you have enabled the 'sync only created applications' setting and want to start tracking applications that were created before using Kombo. To import an application, you'll need to provide specific identifiers based on the ATS. The available `id_type` values are defined by Kombo based on the tool's API capabilities. Please reach out to Kombo support if you require further types to be supported. Once imported, Kombo will automatically fetch and update the application's complete data during the next sync. ### Example Request Body ```json { "tracked_at": "2024-04-12T14:33:47.000Z", "successfactors": { "id_type": "application_remote_id", "application_remote_id": "1224042" } } ```
     *
     * @tags Unified ATS API
     * @name PostAtsImportTrackedApplication
     * @summary Import tracked application
     * @request POST:/ats/import-tracked-application
     * @secure
     */
    postAtsImportTrackedApplication: (data, params = {}) => this.request({
      path: `/ats/import-tracked-application`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
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
     * @description Updates an assessment order result. <Accordion title="Supported integrations" icon="list-check"> This feature is currently available for the following integrations: <ul> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/workday/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Workday</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/successfactors/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SAP SuccessFactors</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/smartrecruiters/icon.svg" height="16px" width="16px" class="m-0 mr-2" />SmartRecruiters</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/oraclerecruiting/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Oracle Recruiting Cloud</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/lever/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Lever</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/icims/icon.svg" height="16px" width="16px" class="m-0 mr-2" />iCIMS</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/recruitee/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Recruitee</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/greenhouse/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Greenhouse</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/teamtailor/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Teamtailor</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ashby/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Ashby</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/ukgpro/icon.svg" height="16px" width="16px" class="m-0 mr-2" />UKG Pro</li> <li class="flex items-center"><img src="https://storage.googleapis.com/kombo-assets/integrations/sandbox/icon.svg" height="16px" width="16px" class="m-0 mr-2" />Kombo Sandbox</li> </ul> You'd like to see this feature for another integration? Please reach out! We're always happy to discuss extending our coverage. </Accordion> ### Example Request Body ```json { "status": "COMPLETED", "score": 90, "max_score": 100, "result_url": "https://example.com", "completed_at": "2023-04-04T00:00:00.000Z", "attributes": [ { "field": "remarks", "value": "Test completed with passing score" } ], "sub_results": [ { "id": "xyz", "title": "Title of the test", "score": 75, "max_score": 100, "status": "COMPLETED" } ] } ```
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
     * @description Generate a unique link that allows your user to enter the embedded Kombo Connect flow. > Check out [our full guide](/connect/embedded-flow) for more details about implementing the connection flow into your app. > Kombo will not deduplicate integrations for you that are created with this endpoint. You are responsible for keeping track of integrations in your system and prevent customers from connecting the same tool again. Use the [reconnection link](/v1/post-integrations-integration-id-relink) endpoint if you want a customer to update their credentials. ### Example Request Body ```json { "end_user_email": "test@example.com", "end_user_organization_name": "Test Inc.", "integration_category": "HRIS", "integration_tool": "personio", "end_user_origin_id": "123", "language": "en", "link_type": "EMBEDDED" } ```
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
     * @description Use this endpoint with the token you get from the connection flow to retrieve information about the created integration. It works in a similar way as the OAuth2 code flow to securely retrieve information and connect the integration to your user. > Check out [our full guide](/connect/embedded-flow) for more details about implementing the connection flow into your app. This endpoint is used to ensure users can't trick your system connecting their account in your system to another customers integration. You don't get the integration ID from the `showKomboConnect(link)` function but only the short lived token used for this endpoint so that users can't send you arbitrary data that you would put into your system.
     *
     * @tags Kombo Connect
     * @name GetConnectIntegrationByTokenToken
     * @summary Get integration by token
     * @request GET:/connect/integration-by-token/{token}
     * @secure
     */
    getConnectIntegrationByTokenToken: (token, params = {}) => this.request({
      path: `/connect/integration-by-token/${token}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
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
     * @description This endpoint returns BeraterNr (consultant_number), MandantenNr (client_number) and the payroll system (LODAS or Lohn und Gehalt). Useful to generate a DATEV ASCII file for the passthrough endpoint.
     *
     * @tags Custom Endpoints
     * @name GetCustomDatevSystemInformation
     * @summary Get DATEV system information
     * @request GET:/custom/datev/system-information
     * @secure
     */
    getCustomDatevSystemInformation: (params = {}) => this.request({
      path: `/custom/datev/system-information`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
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
     * @description This endpoint validates that this DATEV integration is ready to use the eAU feature.
     *
     * @tags Custom Endpoints
     * @name GetCustomDatevCheckEauPermission
     * @summary Verify service is enabled
     * @request GET:/custom/datev/check-eau-permission
     * @secure
     */
    getCustomDatevCheckEauPermission: (params = {}) => this.request({
      path: `/custom/datev/check-eau-permission`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
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
    getCustomDatevEauRequestsEauId: (eauId, params = {}) => this.request({
      path: `/custom/datev/eau-requests/${eauId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
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
    getCustomDatevCheckDocumentPermission: (params = {}) => this.request({
      path: `/custom/datev/check-document-permission`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
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
    getCustomDatevAvailableDocuments: (query, params = {}) => this.request({
      path: `/custom/datev/available-documents`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
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
    postCustomDatevDownloadDocument: (data, params = {}) => this.request({
      path: `/custom/datev/download-document`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
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
    postCustomDatevEmployeesEmployeeIdDownloadDocument: (employeeId, data, params = {}) => this.request({
      path: `/custom/datev/employees/${employeeId}/download-document`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
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
    postCustomDatevEmployeesEmployeeIdEauRequests: (employeeId, data, params = {}) => this.request({
      path: `/custom/datev/employees/${employeeId}/eau-requests`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
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
     * @description Sets the compensations for an employee on the specified effective date. Other compensations will end at the effective date. That means, if you would like to add a compensation, you also have to include the compensations that you would like to keep. <Note> This endpoint requires the permission **Manage payroll** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "3bdhemmSP1TPQDGWtRveRot9", "effective_date": "2022-12-01", "compensations": [ { "amount": 4500, "currency": "EUR", "period": "MONTH", "lohnart": 200 }, { "amount": 30, "currency": "EUR", "period": "HOUR" } ] } ```
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
     * @description This endpoint returns whether you can write to this DATEV integration.
     *
     * @tags Custom Endpoints
     * @name GetCustomDatevCheckWritePermission
     * @summary Verify service is enabled
     * @request GET:/custom/datev/check-write-permission
     * @secure
     */
    getCustomDatevCheckWritePermission: (params = {}) => this.request({
      path: `/custom/datev/check-write-permission`,
      method: "GET",
      secure: true,
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
     * @description Write a payroll supplement to Silae using the supplement code. <Note> This endpoint requires the permission **Manage payroll** to be enabled in [your scope config](/scopes). </Note> ### Example Request Body ```json { "employee_id": "EvLV61zdahkN4ftPJbmPCkdv", "supplement_code": "200", "effective_date": "2024-01-14", "element_amount": 6 } ```
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
  GetAtsInterviewsParameterIncludeDeleted,
  GetAtsJobsParameterIncludeDeleted,
  GetAtsJobsParameterStatus,
  GetAtsOffersParameterIncludeDeleted,
  GetAtsRejectionReasonsParameterIncludeDeleted,
  GetAtsTagsParameterIncludeDeleted,
  GetAtsUsersParameterIncludeDeleted,
  GetHrisAbsenceTypesParameterIncludeDeleted,
  GetHrisAbsencesParameterIncludeDeleted,
  GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted,
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
