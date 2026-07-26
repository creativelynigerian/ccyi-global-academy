import Dashboard from "./pages/Dashboard";
import Editor from "./pages/Editor";
import Training from "./pages/Training";
import Videos from "./pages/Videos";
import Downloads from "./pages/Downloads";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";

export default function GrammarlyHome() {
  return (
    <div className="space-y-8">
      <Dashboard />
      <Editor />
      <Training />
      <Videos />
      <Downloads />
      <FAQ />
      <Support />
    </div>
  );
}