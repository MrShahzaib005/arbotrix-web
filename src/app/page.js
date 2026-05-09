import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Capabilities } from "../components/sections/Capabilities";
import { StatsBar } from "../components/sections/StatsBar";
import { FeaturedProject } from "../components/sections/FeaturedProject";
import { ProductTeaser } from "../components/sections/ProductTeaser";
import { CoursesTeaser } from "../components/sections/CoursesTeaser";

function App() {
  return (
    <main className="min-h-screen bg-bg-primary text-white">
      <Navbar />
      <Hero />
      <Capabilities />
      <StatsBar />
      <FeaturedProject />
      <ProductTeaser />
      <CoursesTeaser />
      <Footer />
    </main>
  );
}

export default App;