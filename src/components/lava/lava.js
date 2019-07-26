import React, { useState, useEffect, useRef, useReducer} from 'react';
import {Link} from 'react-router-dom';
import home from '../Home.svg';
import Test from'../../allax.js';
import './lava.css';


let Context = React.createContext()

function reducer(state,action){
	if(action.type == 'add'){

		return {...state,color:action.payload}
	}
	else{
		return []
	}
}
function Lava(){
	let val = useReducer(reducer, {color:'gwagwa'})
	
  return (
      <div>
      <Context.Provider value = {val}>

				<Test />
	  </Context.Provider>
      </div>
    )
}
export {Lava, Context}