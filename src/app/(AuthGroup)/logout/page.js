"use client";

import LocalProxy from "@/components/client/LocalProxy";
import {logout} from "@/middleware/services/AuthService";
import {useEffect} from "react";

export default async function LogoutPage() {
  useEffect(() => {
    logout().then(() => console.log("Logged out"));
  }, []);
  
  return <LocalProxy page="/" />;
}
