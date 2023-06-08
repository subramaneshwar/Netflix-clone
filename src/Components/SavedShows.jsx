import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../Context/Auth.Context'
import { db } from '../firebase'
import { AiOutlineClose } from 'react-icons/ai'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'

function SavedShows() {
    const [movies, setmovies] = useState([])
    const { user } = UserAuth()
    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    console.log(movies);
    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setmovies(doc.data()?.savedShows);
        });
    }, [user?.email]);
    const movieRef = doc(db,'users', `${user?.email}`)
    async function deleteShow(id){
        try {
           const result = movies.filter(items => items.id !== id)
           await updateDoc(movieRef,{
            savedShows:result
           })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>

            <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
            <div className="relative flex items-center group p-2 ">
                <MdChevronLeft onClick={slideLeft} size={40} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
                <div id={"slider"} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' >
                    {
                        movies?.map((movie) => (
                            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2'>
                                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500${movie?.img}`} alt={movie?.title} />
                                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100  text-white'>
                                    <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                                        {movie?.title}
                                    </p>
                                    <p onClick={()=>deleteShow(movie.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
                                </div>
                            </div>
                        ))}
                </div>
                <MdChevronRight onClick={slideRight} size={40} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden  group-hover:block' />
            </div>
        </>
    )
}

export default SavedShows