import React from 'react'
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import axios from 'axios'
import {useState} from 'react'
import './p2.css'

function P2() {
    const [donné, setdonné]=useState({
        degre:10,
        pays:'sénégal',
        max:13,
        min:5,
      })
      const handleclick2=(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=2157bb1c5b03372530b3080224bcce4a `)
        .then(res=>{console.log(res.data);
        setdonné({...donné, degre: (res.data.main.temp)-273 , pays: res.data.name,
          max: (res.data.main.temp_max)-273, min: (res.data.main.temp_min)-273})
        })
       .catch(err=>{alert('invalide')})
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
    return (
        <div>
            <div className='input2'>
             <input type='text' placeholder='pays' onChange={e=>setname(e.target.value)}/>
             <img src='../search.jpg' alt='img' id='img1' onClick={handleclick}/> <br></br>
            </div>
            <div className='d1'>
                <div className='div2'>
                   <img className='img2' src='../snowy.png'/>
                   <p className='p1'>{donné.pays}</p>
                   <p className='p2'>{Math.round(donné.degre)}°</p>
                   <p className='p3' id='p12'><FaArrowUp/> {Math.round(donné.max)}°<FaArrowDown/>{Math.round(donné.min)}°</p>
                </div>
                <div className='back'>
                    <div>
                        <p id='p001'><button id='btn' onClick={handleclick2}>°C</button></p>
                        <p id='p002'><button id='btn' onClick={handleclick}>°k</button></p>
                    </div><br></br><br></br><br></br>
                    <div className='back1'>
                        <p>Temps ensolellé toute la journée. Rafraie de vent alant jusqu'à 21km/h</p>
                    </div><br></br>
                    <div className='back2'>
                        <div></div>
                        <div className='at'><p>08 Mai 2023</p></div>
                        <div className='temps'>
                            <div className='T1'>
                                <p>Maintenant</p>
                                <img  className='img3' src='../soleil.jpg'  alt='photo'/>
                                <p>{Math.round(donné.degre)}°</p>
                            </div>
                            <div className='T2'>
                                <p>12h</p>
                                <img className='img3'  src='../soleil.jpg'  alt='photo'/>
                                <p>{Math.round(donné.degre)}°</p>
                            </div>
                            <div className='T3'>
                                <p>13h</p>
                                <img className='img3'  src='../soleil.jpg'  alt='photo'/>
                                <p>{Math.round(donné.degre)}°</p>
                            </div>
                            <div className='T4'>
                                <p>14h</p>
                                <img className='img3' src='../soleil.jpg'  alt='photo'/>
                                <p>{Math.round(donné.degre)}°</p>
                            </div>
                            <div className='T5'>
                                <p>15h</p>
                                <img  className='img3' src='../soleil.jpg'  alt='photo'/>
                                <p>{Math.round(donné.degre)}°</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default P2