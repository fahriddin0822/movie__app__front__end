import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

const MovieItem = ({title, poster_path, vote_average, id}) => {
  const navigate =  useNavigate()
  return (
    <div className='w-56 border'>
        <img onClick={()=>navigate(`/product/${id}`)} src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`} alt="" />
        <h3>{title}</h3>
        <p>{vote_average}</p>
    </div>
  )
}

export default memo(MovieItem)