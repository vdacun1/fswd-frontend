"use server";

import Config from "@/middleware/infrastructure/Config";
import HttpClientService from "@/middleware/services/HttpClientService";

async function getUser() {
  const config = await Config();
  const httpClientService = await HttpClientService();
  
  try{
    const response = await httpClientService.get(config.api.user.info, true);
    
    return response.data.email;
  } catch (e) {
    return undefined;
  }
}

export { getUser };
