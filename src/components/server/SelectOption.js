"use client";

export default function SelectOption({id, value}) {
  return (<option key={id} value={value}>{value}</option>);
}
