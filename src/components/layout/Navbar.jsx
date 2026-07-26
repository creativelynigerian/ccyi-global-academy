import { Bell, Search, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8 shadow-sm">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Faculty Digital Onboarding Portal
        </h1>

        <p className="text-sm text-gray-500">
          Centre for Open Distance e-Learning (CCODeL)
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="hidden lg:flex items-center rounded-xl border bg-gray-100 px-4 py-2">
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search modules..."
            className="ml-3 bg-transparent outline-none"
          />
        </div>

        {/* Notification */}
        <button className="rounded-full bg-gray-100 p-3 hover:bg-gray-200">
          <Bell size={20} />
        </button>

        {/* User */}
        <div className="flex items-center gap-3">
          <UserCircle size={42} className="text-blue-900" />

          <div className="hidden md:block">
            <h4 className="font-semibold">Faculty Member</h4>

            <p className="text-sm text-gray-500">
              Covenant University
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;