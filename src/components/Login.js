import React from "react";

const Login = () => {
  return (
    <div>
      <div className="min-w-screen min-h-screen lg:max-w-4xl mx-auto flex flex-col items-center justify-center px-5 py-5">
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden md:flex">
          <div className="hidden w-1/2 bg-indigo-500 py-10 px-10 md:flex">
            <div className="text-4xl font-bold mb-12 text-white text-center flex justify-center items-center">
              <div>Showcase your Art on PIXEL</div>
            </div>
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
              <p>Enter your information to login</p>
            </div>
            <div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-5">
                  <label for="" class="text-xs font-semibold px-1">
                    Email
                  </label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                    <input
                      type="email"
                      class="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="johnsmith@example.com"
                    />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-12">
                  <label for="" class="text-xs font-semibold px-1">
                    Password
                  </label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                    <input
                      type="password"
                      class="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="************"
                    />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-5">
                  <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                    Login
                  </button>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-5">
                  <button class="block w-full max-w-xs mx-auto text-indigo-500 border-indigo-700 border-2 rounded-lg px-3 py-3 font-semibold">
                    Continue with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
