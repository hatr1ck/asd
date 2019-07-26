import React, { useState, useEffect, useRef, useContext} from 'react';
import {Context} from './components/lava/lava'

export default function Test(){
	let [val, dispatch] = useContext(Context)
  return (
      <div>
      {val.color}
      <div onClick={()=>{dispatch({type:'add', payload:'blue'})}}>

      BIEAAATCH
      </div> 
      </div>
    )
}