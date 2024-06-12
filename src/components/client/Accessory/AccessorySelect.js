"use client";

import SelectOption from "@/components/server/SelectOption";

export default function AccessorySelect({accessories, onChange, value}) {
  return (
    <div>
      <span className="block text-sm font-medium text-gray-700 mx-2 py-2">
        Accesorio
      </span>
      <div className="relative">
        <select id="accessory" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                onChange={onChange} value={value}>
          {accessories.map((accessory) => (<SelectOption key={accessory._id} id={accessory._id} value={accessory.name}/>))}
        </select>
      </div>
    </div>
  );
}
