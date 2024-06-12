"use client";

import Link from "next/link";

export default function LoginButton() {
    return (
        <Link href="/login"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            Iniciar sesión
        </Link>
    );
}
