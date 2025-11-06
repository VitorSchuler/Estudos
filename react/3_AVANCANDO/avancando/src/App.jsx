import { useState } from 'react'
import './App.css'
import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import Conditional from './components/ConditionalRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUsername from './components/ShowUsername'
import CarDetails from './components/CarDetails'

function App() {
  const name = "Chico"


  return (
    <div className='App'>
      <h1>Avançando em React</h1>
      {/* Imagem no public*/}
      <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>
      {/* Imagem no src*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUsername name={name} />
      {/* deestructuring */}
      <CarDetails brand="Fiat" km={100000} color="Azul" newCar={false}  />
      {/* reaproveitando */}
      <CarDetails brand="BMW" km={50} color="Preto" newCar={true}  />
      <CarDetails brand="Mercedes" km={0} color="Vermelho" newCar={true} />
    </div>
  )
}

export default App
