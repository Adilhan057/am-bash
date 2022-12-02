import axios from 'axios'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Content } from '../Content'
import { Header } from '../Header'
import s from './App.module.scss'

export const SearchContext = React.createContext()

export const App = () => {
  console.log(SearchContext);

  const [items, setItems] = React.useState([ ])
  const [searchItem, setSearchItem] = React.useState('')
  const [parametr, setParametr] = React.useState('asd')
  
  const [pagiNum, setPagiNum] = React.useState(1)
  const [pagiArr, setPagiArr] = React.useState([])
  const [num, setNum] = React.useState(0)



  React.useEffect(()=>{
    const fetchCountries = async()=>{
      const res = await axios.get(`https://6386df5de399d2e473eed691.mockapi.io/items?sortBy=price&order=${parametr}&search=${searchItem}`)
      setNum(res.data.length)
    }
    fetchCountries() 
  },[])

  React.useEffect(()=>{
    const fetchCountries = async()=>{
      const res = await axios.get(`https://6386df5de399d2e473eed691.mockapi.io/items?page=${pagiNum}&limit=3&sortBy=price&order=${parametr}&search=${searchItem}`)
      setItems(res.data)
    }
    fetchCountries() 
    return(()=>{
      setPagiArr([])
    })
  },[searchItem, parametr, pagiNum])


  for(let i = 1; i <=  Math.ceil(num / 3); i++){
    if(pagiArr.length <= Math.ceil(num / 3)){
      pagiArr.push(i)
    } 
  }

  if(pagiArr.length > Math.ceil(num / 3)){
    pagiArr.pop()
  }

  return (
    <SearchContext.Provider value={ {searchItem, setSearchItem, items, setParametr} }>
      <div className="conteiner"> 
        <Header />
        <Routes>
          <Route path='/' element={<Content />}></Route>
        </Routes>
        <div className={s.pagin__block}>
        {pagiArr.map((num, ind)=>
          <button className={s.pagin__btn } value={num}  onClick={(e)=>{setPagiNum(e.target.value)}}  key={ind}>{num}</button>
        )}
        </div>
      </div>
    </SearchContext.Provider>
  )
}
