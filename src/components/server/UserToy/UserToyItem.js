"use server";

export default async function UserToyItem({item}) {
  return (
    <div className="rounded-lg border-gray-100 border-2 m-1 p-8">
      <p>{item.toy}</p>
      <p>{item.color}</p>
      <p>{item.accessory}</p>
      <p>{!!item.quantity ? item.quantity : item.total}</p>
    </div>
  );
}
