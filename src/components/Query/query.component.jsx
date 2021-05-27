import React from 'react'
import './query.style.css'

const Query = ({query,onQueryClick}) => {
  
  return (
    <div className='queryContainer' onClick={()=>onQueryClick(query.title, query.link)}>
      <p className='author'>{query.owner.display_name}</p>
      <p className='title'>{query.title}</p>
      <p className='date'>{(new Date(query.creation_date * 1000)).toGMTString()}</p>
    </div>
  )
}

export default Query
