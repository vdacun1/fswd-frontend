"use client";

import SelectOption from "@/components/server/SelectOption";

export default function ColorSelect({colors, onChange, value}) {
  return (
    <div>
      <span className="block text-sm font-medium text-gray-700 mx-2 py-2">
        Color
      </span>
      <div className="relative">
        <select id="color" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                onChange={onChange} value={value}>
          {colors.map((color) => (<SelectOption key={color._id} id={color._id} value={color.name}/>))}
        </select>
      </div>
    </div>
  );
}
