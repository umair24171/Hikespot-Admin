import React from 'react'
import './Search.css'


const Search = () => {
  return (
    <>
      <div className="search-bar">
        <form action="" className="search-form d-flex align-items-center">
          <input
            type="text"
            name="query"
            placeholder="Search"
            title="Enter Search Keywords"
          />
          <button type="submit" title="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </>
  )
}

export default Search