"use server";

import {cookies} from "next/headers";
import Config from "@/middleware/infrastructure/Config";
import HttpClientService from "@/middleware/services/HttpClientService";

async function login(email, password) {
  const config = await Config();
  const httpClientService = await HttpClientService();
  
  const response = await httpClientService.post(config.api.auth.login, {email, password});
  await setToken(response.data.token)
}

async function logout() {
  await setToken('')
}

async function getToken() {
  const config = await Config();
  return cookies().get(config.token);
}

async function setToken(token) {
  const config = await Config();
  return cookies().set(config.token, token);
}

export {login, logout, getToken};
