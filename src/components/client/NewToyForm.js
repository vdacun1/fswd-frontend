"use client";

import ToySelect from "@/components/client/Toy/ToySelect";
import ColorSelect from "@/components/client/Color/ColorSelect";
import AccessorySelect from "@/components/client/Accessory/AccessorySelect";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {createUserToy} from "@/middleware/services/UserToyService";
import UserToyItem from "@/components/server/UserToy/UserToyItem";

export default function NewToyForm({toys, colors, accessories}) {
  const router = useRouter();
  
  const [selectedToy, setSelectedToy] = useState(toys[0].name)
  const handleToyChange = (e) => {
    setSelectedToy(e.target.value)
  }
  const [selectedColor, setSelectedColor] = useState(colors[0].name)
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value)
  }
  const [selectedAccessory, setSelectedAccessory] = useState(accessories[0].name)
  const handleAccessoryChange = (e) => {
    setSelectedAccessory(e.target.value)
  }
  
  const [confirmationForm, setConfirmation] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setConfirmation(!confirmationForm);
  }
  
  const confirm = async () => {
    await createUserToy({toy: selectedToy, color: selectedColor, accessory: selectedAccessory});
    router.push("/");
  }
  
  return (
    <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      {!confirmationForm && (<>
        <ToySelect toys={toys} onChange={handleToyChange} value={selectedToy}/>
        <ColorSelect colors={colors} onChange={handleColorChange} value={selectedColor}/>
        <AccessorySelect accessories={accessories} onChange={handleAccessoryChange} value={selectedAccessory}/>
      </>)}
      
      {!!confirmationForm && (
        <span className="block text-sm font-medium text-gray-700 mx-2 py-2">
          <p className="text-lg mb-20">
            Has seleccionado un <strong>{selectedToy}</strong> de color <strong>{selectedColor}</strong> con una <strong>{selectedAccessory}</strong> como accesorio.
          </p>
          <UserToyItem item={{toy: selectedToy, color: selectedColor, accessory: selectedAccessory}}/>
          <p className="text-lg my-4">
            ¿Deseas confirmar la selección?
          </p>
        </span>)}
      
      <div className="flex items-center justify-between">
        
        {!confirmationForm && (<a
          href="/"
          type="button"
          className="inline-block rounded-lg bg-white px-5 py-3 text-sm font-medium text-blue-500 border-blue-500 border "
        >
          Cancelar
        </a>)}
        
        {!confirmationForm && (<button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Confirmar
        </button>)}
        
        {!!confirmationForm && (<button
          type="submit"
          className="inline-block rounded-lg bg-white px-5 py-3 text-sm font-medium text-blue-500 border-blue-500 border "
        >
          Cancelar
        </button>)}
        
        {!!confirmationForm && (<button
          onClick={confirm}
          type="button"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Confirmar
        </button>)}
      </div>
    </form>
  );
}
