"use server";

import Config from "@/middleware/infrastructure/Config";
import HttpClientService from "@/middleware/services/HttpClientService";

async function createUserToy({toy, color, accessory}) {
  const config = await Config();
  const httpClientService = await HttpClientService();
  
  try{
    const response = await httpClientService.post(
      config.api.userToy.create,
      {toy, color, accessory},
      true);
    
    return response.data;
  } catch (e) {
    console.error(e)
    return undefined;
  }
}

async function deleteUserToy({userToyId}) {
  const config = await Config();
  const httpClientService = await HttpClientService();
  
  try{
    const response = await httpClientService.delete(
      config.api.userToy.delete.replace("{userToyId}", userToyId),
      true);
    
    return response.data;
  } catch (e) {
    console.error(e)
    return undefined;
  }
}

export { createUserToy, deleteUserToy };
