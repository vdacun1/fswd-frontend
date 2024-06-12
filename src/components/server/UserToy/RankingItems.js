"use server";

import Config from "@/middleware/infrastructure/Config";
import HttpClientService from "@/middleware/services/HttpClientService";
import UserToyItem from "@/components/server/UserToy/UserToyItem";

export default async function RankingItems() {
  const config = await Config();
  const httpClientService = await HttpClientService();
  
  const response = await httpClientService.get(config.api.userToy.ranking);
  
  return (
    <div className="w-full max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold sm:text-4xl">Ranking</h2>
        <br/>
        <p>Estos fueron los peluches más vendidos</p>
        <br/>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {response.data.map((item) => (
          <UserToyItem key={btoa(JSON.stringify(item))} item={item}/>
        ))}
      </div>
    </div>
  );
}
