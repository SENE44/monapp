import React from 'react'
import {useState} from 'react'
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom';
import './aceuille.css'



function Accueille() {
    const handleclick2=(()=>{
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=2157bb1c5b03372530b3080224bcce4a `)
      .then(res=>{console.log(res.data);
      setdonné({...donné, degre: (res.data.main.temp)-273 , pays: res.data.name,
        max: (res.data.main.temp_max)-273, min: (res.data.main.temp_min)-273})
      })
      .catch(err=>{alert('invalide')})
      })
     
  
  
    const [donné, setdonné]=useState({
        degre:'10',
        pays:'sénégal',
        max:13,
        min:5,
      })
    
      const[name,setname]=useState('');
      const handleclick=(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=2157bb1c5b03372530b3080224bcce4a`)
        .then(res=>{console.log(res.data);
        setdonné({...donné, degre: res.data.main.temp, pays: res.data.name,
          max: res.data.main.temp_max, min: res.data.main.temp_min})
        })
       .catch(err=>{alert('invalide')})
      })

      const navigate=useNavigate()
      //l'autre page
      return (
        <div className="App">
          <div className='inp'>
            <input type='text' placeholder='pays' onChange={e=>setname(e.target.value)}/>
            <img src='../search.jpg' alt='img' id='img1' onClick={handleclick}/> <br></br>
          </div>
          <div id='div'>
            <div id='np' >
              <p id='p01' >météo </p>
              <p id='p001'><button id='btn' onClick={handleclick2}>°C</button></p>
              <p id='p002'><button  id='btn' onClick={handleclick}>°k</button></p>
            </div><br></br><br></br>
            <p id='p02'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam provident repudiandae quaerat, hic incidunt, dolorum ratione placeat eaque doloribus ab. Incidunt dolorum officia minima eligendi itaque odit aut obcaecati.</p>
          </div>
          <div id='div2'>
           <NavLink to={'/detail'} id='img2' > <img id='img2' src='../snowy.png'/></NavLink>
            <div id='div3'>
              <p id='p1'>{donné.pays}</p>
              <p id='p2'>03 mars 2023</p>
              <p id='p3'>Ensoleillé</p>
            </div>
            <div id='div4'>
              <p id='p11'>{Math.round(donné.degre)}°</p>
              <p id='p12'><FaArrowUp/> {Math.round(donné.max)}°<FaArrowDown/>{Math.round(donné.min)}°</p>
            </div>
          </div>
        </div>
      );
}

export default Accueille