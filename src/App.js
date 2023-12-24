import './App.css';
import Tag from './components/Tag'
import Random from './components/Random'

function App() {
  return (
    <div className="w-full h-screen flex flex-col backgound relative 
    overflow-x-hidden items-center">

      <h1 className='bg-white rounded-lg w-11/12 text-center 
      mt-[40px] py-2 px-10 text-3xl font-bold '>
        RANDOM GIFS
      </h1>

      <div className='flex flex-col items-center w-full gap-y-10 mt-[30px] '>
        <Random></Random>
        <Tag></Tag>
      </div>

    </div>
  );
}

export default App;
