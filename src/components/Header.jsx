import { Search, MapPin } from 'lucide-react'
import { useState } from 'react'
import { useWeather } from '../context/WeatherContext'

function Header() {
    const { setCity } = useWeather()
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim() === "") {
            alert("Please Enter City Name")
        } else {
            setCity(input.trim())
            setInput("")
        }
    }

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto h-16 sm:h-20 flex justify-between items-center'>
                    <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl text-white drop-shadow-sm'>
                        WeatherNow
                    </h1>
                <form onSubmit={handleSubmit} className='relative'>
                    <div className='flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 sm:px-6 sm:py-3 min-w-[200px] sm:min-w-[280px] transition-all duration-300 hover:bg-white/25 focus-within:bg-white/25 focus-within:border-white/50'>
                        <input 
                            className='flex-1 bg-transparent outline-none text-white placeholder-white/70 text-sm sm:text-base' 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                            type="text" 
                            placeholder='Search for a city...'
                        />
                        <button 
                            type="submit"
                            className='ml-2 p-1 hover:bg-white/20 rounded-full transition-colors duration-200'
                        >
                            <Search size={18} className='text-white' /> 
                        </button>
                    </div>
                </form>
            </div>
        </header>
    )
}

export default Header
