import hero from "../assets/heroimage.jpeg";
import Weather from "./Weather";

function HeroSection() {
    return (
        <div
            style={{ backgroundImage: `url(${hero})` }}
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
        >

            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
            <div className="relative z-10 w-full max-w-6xl mx-auto pt-20 sm:pt-24">
                <Weather />
            </div>
        </div>
    );
}

export default HeroSection;