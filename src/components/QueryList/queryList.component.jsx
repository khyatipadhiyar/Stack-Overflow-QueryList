import React from 'react'
import './queryList.style.css';
import Query from '../Query/query.component';

const QueryList = ({queryList,onQueryClick,onCloseClick}) => {
  console.log(queryList)
  return (
    <div className='queryListContainer'>
      {queryList.map(query=>(
        <Query key={query.question_id} 
          query={query} 
          onQueryClick={onQueryClick}
          onCloseClick={ onCloseClick}/>
      ))}
    </div>
  )
}

export default QueryList
