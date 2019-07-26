import React from 'react';
import Icons from '../icons/icon';

export default function About (){
    return (<div className='about'>
            <h3 id='goGreen'>About me:</h3><br />
          <div className='info'>
          At summer of 2017 I started to learn how to code, at that time I have a full time job
          and it was mostly like a hobby. My first programming language was Java,
           because... you know... Java requires updates on you windows
            machine so I thought that it's a thing. Then I tryed a couple more technologies like
            Python and PHP, after those I thought that it dosent metter witch one to choose,
            the concept will be the same (atleast for most popular ones), so I decided stick to 
            the JavaScript, because this language have browser runtime environment that makes it
            more visualy adapted and interesting to learn. So its ___ now and Im gonna launght 
            that portfolio.
         <h3 id='goGreen'>Tech stack I use:</h3>
          <Icons />
         </div>
          </div>)
}
