import React from 'react'

function loading() {
  return (
    <>
        <h1>TODOS</h1>   
        <div className="todos-container">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index} className="shimmer">
            <div className="shimmer-checkbox"></div>
            <div className="shimmer-text"></div>
          </li>
        ))}
      </div>
    </>
  )
}

export default loading