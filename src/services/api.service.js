import HttpService from "./http.service";

import { API_URLS } from "@constants/api.constants";

export const getTasks = () => {
  return HttpService.get(API_URLS.TASKS);
};
