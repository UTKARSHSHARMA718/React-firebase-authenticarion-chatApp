import React from 'react'
import './SearchBar.scss'

type Props = {}
const SearchBar = (props: Props) => {
  return (
    <>
        <div className='search-container'>
            <input type="text" placeholder='Find a user' />
        </div>
    </>
  )
}

export default SearchBar