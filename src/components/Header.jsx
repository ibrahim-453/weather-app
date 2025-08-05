import { Search } from 'lucide-react'
import { useState } from 'react'
import { useWeather } from '../context/WeatherContext'
function Header() {
    const {setCity} = useWeather()
    const [input,setInput] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(input.trim() === "" ){
            alert("Please Enter City Name")
        }
        else{
            setCity(input.trim())
            setInput("")
        }
    }
  return (
    <div className='fixed md:top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur md:rounded-full mt-5 px-8 w-full md:max-w-7xl mx-auto h-16 flex justify-between items-center'>
        <div>
            <h1 className='font-bold text-xl md:text-2xl'>Weather App</h1>
        </div>
        <div className='max-w-[250px] border-2 border-black px-2 py-1 md:px-4 rounded-full flex items-center'>
            <input className='outline-none' value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Search City'/>
            <button onClick={handleSubmit}>
                <Search /> 
            </button>
        </div>
    </div>
  )
}

export default Header
