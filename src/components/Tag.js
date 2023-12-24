// import axios from 'axios';
import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';



const Tag = () => {

  // const [loading, setLoading] = useState("false")
  // const [gif, setGif] = useState('');

  const [tag, setTag] = useState('Car');

  const { gif, loading, fetchData } = useGif(tag);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   // console.log(imageSouce)
  //   setGif(imageSource) // linke image source to useState() 
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])

  // function clickHandler() {
  //   fetchData();
  // }
  // function changeHandler(event) {
  //   // setTag(event.target.value)
  // }

  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black 
    flex flex-col items-center gap-y-5 mt-[50px] '>

      <h1 className='text-2xl underline uppercase font-bold mt-[15px] '>
        Random{tag}Gif
      </h1>

      {
        loading ? (<Spinner />) : (<img src={gif} alt="" width={450} />)
      }

      <input type="text"
        className='w-10/12 bg-blue-200 text-lg py-2 rounded-lg mb-[2px] text-center '
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      <button onClick={() => fetchData(tag)}
        className='w-10/12 bg-blue-200 text-lg py-2 rounded-lg mb-[20px] '
      >
        Generate
      </button>
    </div>
  )
}

export default Tag