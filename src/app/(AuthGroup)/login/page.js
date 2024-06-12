"use client";
import {login, logout} from "@/middleware/services/AuthService";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import Locale from "./locale";
import ErrorMessage from "@/components/client/ErrorMessage";

const LoginPage = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const text = Locale["es"];
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await login(email, password);
    console.log(response)
    if (response.status === 200) {
      router.push("/");
    } else {
      setMessage("Verifica los datos ingresados");
    }
  };
  
  useEffect(() => {
    logout().then(() => console.log("Logged out"));
  }, []);
  
  return (
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">{text.title}</h1>
    </div>
    
    <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder={text.email}
          />
          
          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
        </div>
      </div>
      
      <div>
        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder={text.password}
          />
          
          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </span>
        </div>
      </div>
      
      {!!message && (
        <ErrorMessage title="Error" message={message}/>
      )}
      
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {text.needToRegister}
          <a className="underline" href="/register">{text.register}</a>
        </p>
        
        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          onClick={handleSubmit}
        >
          {text.login}
        </button>
      </div>
    </form>
  </div>
  );
};

export default LoginPage;
