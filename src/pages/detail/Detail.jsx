import { request } from '@/api'
import Movies from '@/components/movies/Movies'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
   const {id} = useParams()
   const [data, setData] = useState(null)
   const [images, setImages] = useState(null)
   const [similer, setSimiler] = useState(null)

    useEffect(()=>{
        request
            .get(`/movie/${id}`)
            .then(res => setData(res.data))
    }, [id])

    useEffect(()=>{
        request
            .get(`/movie/${id}/images`)
            .then(res => setImages(res.data))
    }, [id])

    useEffect(()=>{
        request
            .get(`/movie/${id}/keywords`)
    }, [id])

    useEffect(()=>{
        request
            .get(`/movie/${id}/similar`)
            .then(res => setSimiler(res.data))
    }, [id])
    
    console.log(images);
    
  return (
    <div>
        <h2>{data?.title}</h2>
        <img src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path} alt="" />
        <div className='flex flex-wrap'>
        {
            images?.backdrops?.slice(0, 10)?.map((item, inx) => (
                <img key={inx} className='w-48' src={import.meta.env.VITE_IMAGE_URL + item.file_path} alt="" />
            ))
        }
        </div>

        {/* <Movies data={similer}/> */}
        
    </div>
  )
}

export default Detail