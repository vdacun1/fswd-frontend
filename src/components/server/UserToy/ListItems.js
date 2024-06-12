"use server";

import Config from "@/middleware/infrastructure/Config";
import HttpClientService from "@/middleware/services/HttpClientService";
import UserToyItem from "@/components/server/UserToy/UserToyItem";

export default async function ListItems() {
  const config = await Config();
  const httpClientService = await HttpClientService();
  
  try {
    const response = await httpClientService.get(config.api.userToy.list
      .replace("{page}", "1")
      .replace("{limit}", "6"), true);
    
    return (
      <div className="w-full max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Lista</h2>
          <br/>
          <p>Esta es tu lista de peluches</p>
          <br/>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {response.data.map((item) => (
            <UserToyItem key={item.toy} item={item}/>
          ))}
        </div>
      </div>
    );
  } catch (e) {
    return(
      <div className="w-full max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Lista</h2>
          <br/>
          <p>Inicia sesión para obtener tu lista de peluches</p>
          <br/>
        </div>
      </div>
    );
  }
}
