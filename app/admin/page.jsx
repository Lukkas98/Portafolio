"use client";
import { verifyAdmin } from "@/api/verifyAdmin";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

export default function Admin() {
  const [state, formAction, isPending] = useActionState(verifyAdmin, {
    user: "",
    password: "",
  });
  const { push } = useRouter();

  useEffect(() => {
    if (state.success) push("/admin/projects");
  }, [state.success]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Administración - Login
        </h2>
        <form action={formAction}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Usuario
            </label>
            <input
              type="text"
              name="user"
              id="user"
              autoComplete="off"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="JhonDoe123"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Contraseña
            </label>
            <input
              autoComplete="off"
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          {isPending ? (
            <div className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200">
              Verificando...
            </div>
          ) : (
            !state.success && (
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
              >
                Iniciar sesión
              </button>
            )
          )}
          {state.message && (
            <div
              className={`mt-4 text-center text-sm ${
                state.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {state.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
