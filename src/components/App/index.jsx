import axios from 'axios'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Content } from '../Content'
import { Header } from '../Header'
import s from './App.module.scss'

export const SearchContext = React.createContext()

export const App = () => {
  console.log(SearchContext);

  const [items, setItems] = React.useState([  ])
  const [searchItem, setSearchItem] = React.useState('')
  const [parametr, setParametr] = React.useState('asd')

  React.useEffect( () => {
    const fetchCountries = async() => {
      const res = await axios.get(`https://6386df5de399d2e473eed691.mockapi.io/items?sortBy=price&order=${parametr}&search=${searchItem}`)
      setItems(res.data)
    }
    fetchCountries()
  }, [searchItem, parametr])


  return (
    <SearchContext.Provider value={ {searchItem, setSearchItem, items} }>
      <div className="conteiner"> 
        <Header setParametr={setParametr} />
        <Routes>
          <Route path='/' element={<Content />}></Route>
        </Routes>
        {/* <Content /> */}
      </div>
    </SearchContext.Provider>
  )
}
