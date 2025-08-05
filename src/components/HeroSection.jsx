import hero from "../assets/heroimage.jpeg";
import Weather from "./Weather";
function HeroSection() {
  return (
    <div
      style={{ backgroundImage: `url(${hero})` }}
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative mt-20 z-10 px-4">
        <Weather />
      </div>
    </div>
  );
}

export default HeroSection;
