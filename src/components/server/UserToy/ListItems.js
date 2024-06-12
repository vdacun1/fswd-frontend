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
            <UserToyItem key={item._id} item={item}/>
          ))}
        </div>
      <br/>
        <a href="/new-toy"
           type="button"
           className="inline-block rounded-lg bg-white px-5 py-3 text-sm font-medium text-blue-500 border-blue-500 border ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
        </a>
      </div>
    );
  } catch (e) {
    return (
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
