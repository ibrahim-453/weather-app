import { Search } from 'lucide-react';
import { useState } from 'react';
import { useWeather } from '../context/WeatherContext';

function Header() {
  const { setCity } = useWeather();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Please Enter City Name');
    } else {
      setCity(input.trim());
      setInput('');
    }
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 px-4 sm:px-6 py-2'>
      <div className='max-w-7xl mx-auto flex items-center justify-between h-12 md:h-14 gap-2'>
        <h1 className='font-semibold text-[16px] md:text-2xl text-white whitespace-nowrap'>
          WeatherNow
        </h1>

        <form onSubmit={handleSubmit} className='max-w-[220px]'>
          <div className='flex justify-center items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1 duration-300 hover:bg-white/25 focus-within:bg-white/25'>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Search city...'
              className='flex-1 bg-transparent outline-none text-black placeholder-white/80 text-sm'
            />
            <button
              type='submit'
              className='p-1 hover:bg-white/20'
            >
              <Search size={18} className='text-black' />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
