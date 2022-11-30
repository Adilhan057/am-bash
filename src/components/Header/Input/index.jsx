import React from 'react'
import { SearchContext } from '../../App';
import './Input.module.scss'

export const Input = () => {
  const {searchItem, setSearchItem} = React.useContext(SearchContext);

  return (
        <input
        value={searchItem}
        onChange={e => setSearchItem(e.target.value)}
        placeholder='tapy name of country' />
    )
}
