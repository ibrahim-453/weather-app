import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import { WeatherProvider } from "./context/WeatherContext"
function App() {
  return (
    <div>
      <WeatherProvider>
      <Header />
      <HeroSection />
      </WeatherProvider>
    </div>
  )
}

export default App