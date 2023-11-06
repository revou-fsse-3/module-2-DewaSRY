// import Headers from "/src/components/Headers.js";
// import Hero from "/src/components/Hero.js";
import HeroSection from "../components/HeroSection/index.js";
import HeaderSection from "/src/components/HeaderSection/index.js";

const headerElement = document.getElementById("headers");
new HeaderSection(headerElement);
const heroElement = document.getElementById("hero");
new HeroSection(heroElement);
