"use client";

import SelectOption from "@/components/server/SelectOption";

export default function ToySelect({toys, onChange, value}) {
  return (
    <div>
      <span className="block text-sm font-medium text-gray-700 mx-2 py-2">
        Peluche
      </span>
      <div className="relative">
        <select id="toy" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
        onChange={onChange} value={value}>
          {toys.map((toy) => (<SelectOption key={toy._id} id={toy._id} value={toy.name}/>))}
        </select>
      </div>
    </div>
  );
}
