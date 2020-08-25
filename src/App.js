import React,{useState,useEffect} from 'react'
import './App.css'
import SideBar from './SideBar'
import Chat from './Chat'
import Login from './Login'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { useStateValue } from "./StateProvider";
import reducer, { initialState } from "./reducer";
function App() {
  const [{user}, dispatch] = useStateValue()

  return (user) ?(

    <>
      <div className="app">
        <div className="app__body">
          <BrowserRouter>
          <Switch>
            <Route exact path="/"><h1>Welcome</h1></Route>
            
            <Route  exact path="/rooms/:roomid"><SideBar/><Chat/></Route>
            <Route exact path="/rooms"><SideBar/></Route>
          </Switch>
          </BrowserRouter>
        </div>
      </div>
    </>
  ):(
    <Login/>
  )
}

export default App
