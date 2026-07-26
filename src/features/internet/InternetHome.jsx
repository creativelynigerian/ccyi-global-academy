import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Usage from "./pages/Usage";
import Training from "./pages/Training";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";

function InternetHome() {
  return (
    <div className="space-y-8">
      <Dashboard />
      <Login />
      <Usage />
      <Training />
      <FAQ />
      <Support />
    </div>
  );
}

export default InternetHome;