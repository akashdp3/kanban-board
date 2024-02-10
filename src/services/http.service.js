import axios from "axios";

import { API_DOMAIN } from "@constants/api.constants";

class _HttpService {
  _apiDomain = API_DOMAIN;

  prepareURL(url) {
    return `${this._apiDomain}${url}`;
  }

  get(url, params) {
    const requestConfig = {
      method: "get",
      url,
      params,
    };

    return this.processRequest(requestConfig);
  }

  processRequest(requestConfig) {
    const config = {
      ...requestConfig,
      url: this.prepareURL(requestConfig.url),
    };

    return axios(config).then((response) => {
      if (response?.status && response.status >= 200 && response.status < 300) {
        return response.data;
      }

      throw Error(response);
    }).catch((error) => {

        // Handle unauthorised API requests
        if (error?.response?.status === 401) {
          // Log user out and redirect user to signin page
          return Promise.reject(error.response);
        }

        // Handle network error
        if (error?.message === "Network Error") {
          // TODO: Redirect to network error route
          return Promise.reject(error);
        }

        // Server errors
        if (error?.response?.status >= 500) {
          // TODO: Redirect to 500 route
          return Promise.reject(error);
        } 

        // Validation Errors
        if ([404, 403, 400].includes(error.response.status)) {
          // These errors will be handled 
          return Promise.reject(error);
        }

        return Promise.reject(error);
      });
  }
}

const HttpService = new _HttpService();
export default HttpService;
