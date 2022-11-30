import React from 'react'
import { CountryItem } from './CountryItem'
import s from './Context.module.scss'
import { SearchContext } from '../App';

export const Content = () => {
 
  const {items, searchItem} = React.useContext(SearchContext);

  const countries = 
  items
    .filter( item => {
        if(item.title.toLowerCase().includes(searchItem)){
          return item
        }
    })
    .map(item => <CountryItem {...item} />)

  return (
    <div className={s.country__list}>
      {
        countries
      }
    </div>
  )
}
