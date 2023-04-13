import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Stats from "./components/stats/Stats";
import Expert from "./components/stats/Expert";
import Department from "./components/department/Department";
import Feedback from "./components/feedback/Feedback";
import Teams from "./components/teams/Teams";
import ContactUs from "./components/footer/ContactUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="bg-white w-full">
      <div id="#home" className="bg-zinc-50 h-full pb-10">
        <Navbar />
        <Hero />
      </div>
      <div id="#product" className="h-full">
        <Stats />
        <Expert />
      </div>
      <div id="#pricing" className="bg-[#E5F9F7] h-full">
        <Department />
      </div>
      <div className="h-full">
        <Feedback />
      </div>
      <div className="h-full">
        <Teams />
      </div>
      <div id="#contact" className="h-full">
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
