import axios from "axios";

axios.defaults.timeout = 50000;

// http method
const METHOD = {
  GET: "get",
  POST: "post",
  DELETE: "delete",
  PUT: "put",
  PATCH: "patch",
};

async function request(url, method, params, config) {
  switch (method) {
    case METHOD.GET:
      return axios.get(url, { params, ...config });
    case METHOD.POST:
      return axios.post(url, params, config);
    case METHOD.PUT:
      return axios.put(url, params, config);
    case METHOD.PATCH:
      return axios.patch(url, params, config);
    case METHOD.DELETE:
      return axios.delete(url, { params, ...config });
    default:
      return axios.get(url, { params, ...config });
  }
}

export { METHOD, request };
