import React from "react";

import { useTheme } from "../../context/ThemeProvider";
import { BsSun, BsMoon } from "react-icons/bs";

const Login = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="bg-sky-100 w-full h-screen flex justify-center items-center px-4 dark:bg-gray-950">
      <div className="bg-sky-200 dark:bg-gray-700 w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex items-center justify-center shadow-2xl rounded-2xl p-6">
        <form className="flex flex-col gap-8 w-full" action="">
          <div className="flex justify-around items-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-sky-950 dark:text-white text-center">Acesse com seu usuário...</h1>
            <button type="button" className="bg-sky-50 p-2 rounded-full hover:bg-sky-100 cursor-pointer transition-colors" onClick={toggleTheme}>
              { 
                darkMode ? 
                <BsMoon className="text-2xl sm:text-3xl text-sky-950 text-center dark:text-gray-800" /> :
                <BsSun className="text-2xl sm:text-3xl text-sky-950 text-center dark:text-gray-800" />
              }
            </button>
          </div>
          <div className="flex flex-col ">
            <label className="text-sky-950 text-lg font-extrabold mb-1 dark:text-white">Usuário</label>
            <input
              type="text"
              placeholder="Digite seu usuário..."
              className="shadow-md bg-sky-50 p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sky-950 text-lg font-extrabold mb-1 dark:text-white">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha..."
              className="shadow-md bg-sky-50 p-2 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-sky-700 dark:bg-gray-900 hover:bg-sky-800 dark:hover:bg-gray-600 text-white font-bold py-2 rounded-md transition cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
