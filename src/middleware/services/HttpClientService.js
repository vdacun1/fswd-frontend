"use server";

import axios from "axios";
import {cookies} from "next/headers";
import Config from "@/middleware/infrastructure/Config";
import {getToken} from "@/middleware/services/AuthService";

export default async function HttpClientService() {
  const config = await Config();
  return {
    get: async function (path, auth = false) {
      return axios.get(config.api.url + path, {
        headers: await setHeaders(auth),
      });
    },
    
    post: async function (path, data, auth = false) {
      return axios.post(config.api.url + path, data, {
        headers: await setHeaders(auth),
      });
    },
    
    delete: async function (path, auth = false) {
      return axios.delete(config.api.url + path, {
        headers: await setHeaders(auth),
      });
    },
  };
}

async function setHeaders(auth) {
  const token = await getToken();
  return {
    'Authorization': !!auth ? token.value : "",
    'Content-Type': "application/json",
  }
}
