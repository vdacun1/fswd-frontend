"use server";

import Config from "@/middleware/infrastructure/Config";
import HttpClientService from "@/middleware/services/HttpClientService";
import Authorize from "@/components/server/Authorize";
import NewToyForm from "@/components/client/NewToyForm";

export default async function NewToy() {
  const config = await Config();
  const httpClientService = await HttpClientService();
  
  const [toys, colors, accessories] = await Promise.all([
    httpClientService.get(config.api.toy.list),
    httpClientService.get(config.api.color.list),
    httpClientService.get(config.api.accessory.list)
  ]);
  
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Authorize/>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-2xl font-bold sm:text-3xl">Nuevo peluche</h1>
          <p className="mt-4 text-gray-500">
            Selecciona tu nuevo peluche, su color y su accesorio en el siguiente formulario.
          </p>
        </div>
        
        <NewToyForm toys={toys.data} colors={colors.data} accessories={accessories.data}/>
      </div>
    </main>
  );
}
