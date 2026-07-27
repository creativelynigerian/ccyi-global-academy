import { useNavigate } from 'react-router-dom';
import modules from "../data/modules";
import ModuleCard from "../components/dashboard/ModuleCard";
import StatCard from "../components/dashboard/StatCard";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">

      {/* Hero Banner */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#002147] via-blue-900 to-indigo-700 p-10 text-white shadow-xl">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome Back 👋
          </h1>
          <p className="mt-4 text-2xl">
            CCYI Global Academy Learning Platform
          </p>
          <p className="mt-5 text-lg text-blue-100">
            Complete your onboarding journey and master the
            digital platforms used across CCYI Global Academy.
          </p>

          <div className="mt-8">
            <div className="mb-2 flex justify-between">
              <span>Overall Progress</span>
              <span>16%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-blue-800">
              <div className="h-full w-[16%] rounded-full bg-yellow-400"></div>
            </div>
          </div>

          {/* ✅ This stays on the Dashboard */}
          <button 
            onClick={() => navigate('/dashboard')}
            className="mt-8 rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-[#002147] transition hover:bg-yellow-300"
          >
            Continue Learning →
          </button>
        </div>
      </section>

      {/* Statistics */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Training Modules"
          value="6"
          color="text-blue-900"
        />
        <StatCard
          title="Completed"
          value="1"
          color="text-green-600"
        />
        <StatCard
          title="Overall Progress"
          value="16%"
          color="text-orange-500"
        />
        <StatCard
          title="Certificate"
          value="Pending"
          color="text-red-600"
        />
      </section>

      {/* Modules */}
      <section>
        <h2 className="mb-6 text-3xl font-bold">
          Training Modules
        </h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
            />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Dashboard;