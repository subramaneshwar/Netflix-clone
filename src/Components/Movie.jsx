import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../Context/Auth.Context'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

function Movie({ movie }) {
  const [Liked, setLiked] = useState(false)
  const { user } = UserAuth()
  const moovieId = doc(db, 'users', `${user?.email}`)
  const savedshow = async () => {
    if (user?.email) {
      setLiked(!Liked)
      await updateDoc(moovieId, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path
        })
      })
    } 
    else {
      alert('please login to save movie')
    }
  }
  return (
    <>
      <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2'>
        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100  text-white'>
          <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center  '>
            {movie?.title}
          </p>
          <p onClick={savedshow}>
            {Liked ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
          </p>
        </div>
      </div>
    </>
  )
}

export default Movie