// import logo from './logo.svg';
// import './App.css';
// import Clock from './Clock';
// import Bootstrap from './Bootstrap';
// import Card from './Card'
// import { useEffect } from 'react';
// // import Navbar from './Navbar';
// import{Route,Routes} from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import Event from './Event';

// function App() {
//   return (
//    <div>
//     {/* <Clock></Clock>
//     <Bootstrap></Bootstrap>
//     <Card></Card> */}

//     <App/>

//      <Navbar/>

//      <Routes>
//        <Route path='/' element={<Home/>} />
//        <Route path='/about' element={<About/>} />
//        <Route path='/contact' element={<Contact/>} />
//      </Routes>
       
     
//    </div>


//   )
// }



// useEffect

// import React , {useEffect , useState} from 'react';

// const App = () => 
// {
//   let [data , SetData] = useState([])
//   let [count , SetCount] = useState(10)
//   let [city , SetCity] = useState('Bhopal')

//   const fun1 = () => {
//     SetCity('Delhi')
//   }

//   function add(){
//     SetCount(count+10)
//   }
// }

//  useEffect(()=>
//  {
//   fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((res)=>
//   {
//     return res.json()
//   })
//   .then((x)=>
//   {
//     SetData(x);
//   })
//  },[])

//  return
//  (
//   <div>
//     <p>{count}</p>
//     <button onClick={add}>click me</button>
//     <p>{city}</p>
//     <button onClick={fun1}>Change the city</button>
//   <div/>

//   <>
//    {
//     data.map((a)=>{
//       return(
//         <>
//          <h1>{a.id}</h1>
//         </>
//       )
//     })
//    }
//   </>
//  )
// export default App;



// To do list //

// import React, { useState } from 'react'

// const App = () => {
// const [input,SetInput] = useState()
// const [data,SetData] = useState([])
// const fun1 = (e) =>{
//    SetInput(e.target.value)
// }
// const add =()=>{
//    SetData([...data,input])   //(... is a spread operator)
//    SetInput('')
// }
// function dlt(id){
//    let newArr = data.filter((val,index)=>{
//      return index != id
//    })
//   SetData(newArr)
// }

//   return (
//     <div>
//       <input name='input' value={input} onChange={fun1} type='text' placeholder='Enter your todo'/>
//       <button onClick={add}>Add</button>
//       {
//         data.map((a,b,c)=>{
//           return (
//             <>
//               <li>{a}</li>
//               <button onClick={()=>dlt(b)}>Delete</button>
//             </>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default App

//Table

// import React, { useEffect, useState } from 'react'

// function App() {

//   let [Input,SetInput]=useState({
//     firstName:"",
//     lastName : "",
//     email:"",
//     pass:""
//   })

//   let [data,SetData] = useState(null)

//   useEffect(()=>{
//     let val = localStorage.getItem('data')
//     let newData = JSON.parse(val)
//     console.log(newData,"rrr")
//     SetData(newData)
//   },[])

//   function fun1(e) {
//     const {name , value } = e.target
//     //console.log(e.target.name,e.target.value);
//     SetInput({...Input, [name]:value})
//    // console.log(Input)
//   }

//   function rem(){
//     localStorage.clear('data')
//     SetData(null)
//   }

//   const done =(e)=>{
//     e.preventDefault();
//     console.log(Input)
//     let a = JSON.stringify(Input)
//     localStorage.setItem('data',a)
//     // console.log(localStorage.getItem('data'))
//     SetData(Input) // for current updation
//   } 


//   return (
//     <div>
//         <form onSubmit={done}>
//             <input type="text"  onChange={fun1} name='firstName' value={Input.firstName} placeholder='First Name'/>
//             <br />
//             <br />

//             <input type="text" onChange={fun1} name='lastName' value={Input.lastName} placeholder='Last Name'/>
//             <br /> 
//             <br />

//             <input type="email" onChange={fun1} name='email' value={Input.email} placeholder='Email'/>
//             <br />
//             <br />

//             <input type="password" onChange={fun1} name='pass' value={Input.pass} placeholder='Password'/>
//             <br />
//             <br />

//             <button type='submit'>Submit</button>
           
//         </form>
//         {
//           data?(<>
//            <h1>{data.firstName}</h1>
//            <h1>{data.lastName}</h1>
//            <h2>{data.email}</h2>
//           </>):(<> <h2>nhi mila kuch</h2> </>)
//         }
//         {
//           data?(<button onClick={rem}>Remove</button>):""
//         }
         
//     </div>
//   )
// }

// export default App

// Props drealing

// import React from 'react'
// import A from './A'

// const App = () => {
  
//   return (
//     <div>
//       <A a={data} />
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Cart from './Cart'
// import {Route,Routes} from 'react-router-dom'
// import ViewCart from './ViewCart'

// const App = () => {
//   return (
//     <div>
//     <Routes>
//       <Route path='/' element={<Cart/>}></Route>
//       <Route path='/view' element={<ViewCart/>}></Route>
//     </Routes>
//     </div>
//   )
// }

// export default App



// Counter mini project

// import React, { useState } from 'react'
// import './App.css'

// const App = () => {
// //  let count = 0;
//  const [count,setCount] = useState(0)

//  function decHandler(){
//     // count = count-1;
//     setCount(count-1);
//  }

//  function incHandler(){
//   // count = count+1;
//   setCount(count+1);
// }

// function resetHandler(){
//   setCount(0);
// }


//   return (
//     <div className="container">
//       <div className='dcontainer'>Increment & Decrement</div>
//       <div className='bcontainer'>
//         <button onClick={decHandler}>-</button>
//         <div> </div>
//         <button onClick={incHandler}>+</button>
//       </div>
//       <div className='rcontainer'>
//         <button onClick={resetHandler}>Reset</button>
//       </div>
//     </div>
//   )
// }

// export default App


// import React , {useEffect , useState} from 'react';

// const App = () => 
// {
//   let [data , SetData] = useState([])
//   let [count , SetCount] = useState(10)
//   let [city , SetCity] = useState('Bhopal')

//   const fun1 = () => {
//     SetCity('Delhi')
//   }

//   function add(){
//     SetCount(count+10)
//   }
// }

//  useEffect(()=>
//  {
//   fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((res)=>
//   {
//     return res.json()
//   })
//   .then((x)=>
//   {
//     SetData(x);
//   })
//  },[])

//  return
//  (
//   <div>
//     <p>{count}</p>
//     <button onClick={add}>click me</button>
//     <p>{city}</p>
//     <button onClick={fun1}>Change the city</button>
//   <div/>

//   <>
//    {
//     data.map((a)=>{
//       return(
//         <>
//          <h1>{a.id}</h1>
//         </>
//       )
//     })
//    }
//   </>
//  )
// export default App;






// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [data,SetData] = useState([]);


//   useEffect(()=>{
//     fetch("https://dummyjson.com/recipes")
//     .then((res)=>{
//       return res.json()
//     })
//     .then((p)=>{
//       SetData(p.recipes)
//       console.log(p);
//     })
//   },[])

//   function Remover(id){
//     let p = data.filter((a,b)=>{
//       return b != id ;
//     })
//     SetData(p)
//   }

//   return (
//     <div>
//       {
//        data.map((a)=>{
//         return(
//           <>
//            <p>{a.name}</p>
//            <h1>{a.id}</h1>
//            <p>{a.image}</p>
//            <button onClick={()=>Remover(a.id)}>Dlt</button>
//           </>
//         )
//        })
//       }
//     </div>
//   )
// }

// export default App



//useRef

// import React, { useEffect, useRef, useState } from 'react'

// const App = () => {
//   let [data,SetData]=useState('')

//   const fun1=(abhi)=>{
//     SetData(abhi.target.value)
//   }

//     let a = useRef(0)
//     console.log(a.current.type,"helloo");
//   useEffect(()=>{
//     // SetData(data+1)
//     // a.current += 1

//   })

//   return (
//     <div>
//       <input     ref={a} onChange={fun1} type='text'  placeholder=''/>
//       <p>  dekho: {a.current}</p>
//     </div>
//   )
// }

// export default App




//useReducer

// import React , {useReducer} from 'react'

// let reducer = (state , action) => {
//   if(action.type==="increase"){
//     return state+1
//   }
//   else if(action.type==="decrease"  && state>0){
//     return state-1
//   }
//   else if(action.type==="reset"){
//     return 0
//   }
//    return state 
// }

// const App = () => {
//   let [state,dispatch] = useReducer(reducer,0)

//   return ( 
//     <div>
//       <p>{state}</p>
//       <button onClick={()=>dispatch({type: "increase"})}>Increment</button>
//       <button onClick={()=>dispatch({type: "decrease"})}>Decrement</button>
//       <button onClick={()=>dispatch({type: "reset"})}>Reset</button>
//     </div>
//   )
// }

// export default App




// Toggle

// import React , {useReducer} from 'react'

// const initialState = false;

// let reducer = (state , action) => {
//   switch (action.type){
//     case 'tgl':
//       return !state;
//      case 'reset':
//       return initialState ;
//       default :
//       return state;
//   }
// }
// const App = () => {
//   let [state , dispatch] = useReducer(reducer , initialState)
//   return (
//     <div>
//       <h1 style={{color : state ? 'green' : 'red' }}>{state ? 'on' : 'off'}</h1>
//       <button onClick={()=>dispatch({type : 'tgl'})}>Toggle</button>
//       <button onClick={()=>dispatch({type : 'reset'})}>Reset</button>
//     </div>
//   )
// }

// export default App



// Calculator

// import React from 'react'
// import InputField from './InputField'
// import Keypad from './Keypad'

// import './App.css';

// const App = () => {
//   return (
//     <div className='app'>
      
//     </div>
//   )
// }

// export default App





