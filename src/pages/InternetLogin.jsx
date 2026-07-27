import React, { useState } from "react";
import { Wifi, User, Lock, Activity, Clock } from "lucide-react";

export default function InternetLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace with your authentication logic or API call
    alert(`Logging in as ${username}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 rounded-2xl bg-[#002147] p-8 text-white shadow-lg">
          <div className="flex items-center gap-4">
            <Wifi size={40} />
            <div>
              <h1 className="text-4xl font-bold">
                Campus Internet Login
              </h1>
              <p className="mt-2 text-blue-200">
                Connect to the CCYI Global Academy Internet Service.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Login Form */}
          <div className="rounded-xl bg-white p-8 shadow lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold">
              Sign In
            </h2>

            <form onSubmit={handleLogin} className="space-y-6">

              <div>
                <label className="mb-2 block font-medium">
                  Username
                </label>

                <div className="flex items-center rounded-lg border px-3">
                  <User className="text-gray-500" size={20} />
                  <input
                    type="text"
                    className="w-full p-3 outline-none"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Password
                </label>

                <div className="flex items-center rounded-lg border px-3">
                  <Lock className="text-gray-500" size={20} />
                  <input
                    type="password"
                    className="w-full p-3 outline-none"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input id="remember" type="checkbox" />
                <label htmlFor="remember">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#002147] py-3 font-semibold text-white hover:bg-blue-900"
              >
                Login
              </button>

            </form>
          </div>

          {/* Status Panel */}
          <div className="space-y-6">

            <div className="rounded-xl bg-white p-6 shadow">
              <div className="mb-4 flex items-center gap-3">
                <Activity className="text-green-600" />
                <h3 className="text-xl font-bold">
                  Connection Status
                </h3>
              </div>

              <p className="text-green-600 font-semibold">
                Offline
              </p>

              <p className="mt-2 text-gray-600">
                Log in to access the campus network.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="text-blue-600" />
                <h3 className="text-xl font-bold">
                  Usage Summary
                </h3>
              </div>

              <ul className="space-y-2 text-gray-700">
                <li>Today's Usage: 0 GB</li>
                <li>Monthly Usage: 0 GB</li>
                <li>Remaining Quota: --</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="mb-3 text-xl font-bold">
                Need Help?
              </h3>

              <p className="text-gray-600">
                Contact the ICT Help Desk if you experience login or connectivity issues.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}