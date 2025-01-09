import React, { useEffect } from 'react'

const Genre = ({searchParams, setSearchParams, data, setSelectedGenre, selectedGenre, setPage}) => {

    const handleChange = id => {
        setPage(1)
        if(selectedGenre.includes(id)){
            selectedGenre =  selectedGenre.filter(selectedId => selectedId !== id)
        }else{
            selectedGenre =  [...selectedGenre, id]
        }
        const params = new URLSearchParams(searchParams)
        params.set("page", "1")
        
        if(selectedGenre.length){
            params.set("genres", selectedGenre.join("-"))
        }else{
            params.delete("genres")
            params.delete("page")
        }
        setSelectedGenre(selectedGenre)
        setSearchParams(params)
    }

    // useEffect(()=>{
    //     if(selectedGenre.length){
    //         const params = new URLSearchParams(searchParams)
    //         params.set("genres", selectedGenre.join("-"))
    //         setSearchParams(params)
    //     }else{
    //         setSearchParams({})
    //     }
    // },[selectedGenre])

  return (
    <div className='flex gap-3 overflow-auto p-2 container'>
        {
            data?.map((item)=>(
                <div onClick={()=> handleChange(item.id)} className={`whitespace-nowrap p-1 bg-slate-200 rounded-md cursor-pointer select-none ${selectedGenre.includes(item.id) ? "bg-slate-400": ""} "`} key={item.id}>{item.name}</div>
            ))
        }
    </div>
  )
}

export default Genre