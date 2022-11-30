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

  React.useEffect( () => {
    const fetchCountries = async() => {
      const res = await axios.get(`http://localhost:3000/countries`)
      setItems(res.data)
    }
    fetchCountries()
  }, [])


  return (
    <SearchContext.Provider value={ {searchItem, setSearchItem, items} }>
      <div className="conteiner"> 
        <Header />
        <Routes>
          <Route path='/' element></Rou>
        </Routes>
        <Content />
      </div>
    </SearchContext.Provider>
  )
}
