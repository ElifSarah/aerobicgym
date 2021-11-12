import "react-datepicker/dist/react-datepicker.css";
import {NavLink} from 'react-router-dom';
import Navbar from './navbar.component';
import React, {  useState } from "react";




const Login = () => {

  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');




  const moveTo = ()  => {
      <NavLink to= '/create'>   </NavLink>
  }
   

  return (

     <> 
        <div style={{ display:'flex' , flexDirection:'row', marginTop:"5%", marginLeft:'5%'}}>
            <div className='shadow p-3 ' style={{flex:0.5,marginLeft:'20%' ,backgroundColor:'#ffff', 
                                     height:480, borderColor:"red", marginBottom:30, 
                          marginLeft:20, marginRight:15, borderRadius:10}}>

                <h3 style={{ marginLeft:"40%", fontWeight:'bold'}}> Sign In </h3>
                <form>
                    <div className="form-group" style={{marginTop:30}}>
                       
                        <div style={{display:'flex', flexDirection:'column',marginLeft:20, marginBottom:30}}>
                             
                              <div style={{display:'flex', flexDirection:'row',flex:1}}>
                                  <label  style={{ marginTop:5}}> <ion-icon name="mail-outline" size='large' ></ion-icon>   </label>
                                  <input type="text" name='email' className="form-control" id="email" aria-describedby="email" 
                                       value={email} onChange={(e) => setEmail(e.target.value)}
                                      placeholder="email" style={{marginTop:5, marginLeft:10,width:"70%"}} />
                              </div>

                              <div style={{display:'flex', flexDirection:'row',flex:1, marginTop:20}}>
                                  <label for="password" style={{ marginTop:5}}> <ion-icon name="lock-closed-outline" size='large' ></ion-icon>   </label>
                                  <input type="password" name="password" className="form-control" id="password" aria-describedby="password" 
                                      value={password} onChange={(e) => setPassword(e.target.value)}
                                     placeholder="password" style={{marginTop:5, marginLeft:10,width:"70%"}} />
                              </div>


                          </div>

                       
                          <button type="submit" class="btn" 
                              style={{marginLeft:'40%',width:'20%', height:50,backgroundColor:'#009387',fontSize:24, color:'white'}}
                               onClick= { () => moveTo()}
                              > 
                              Login</button>   
                
                    </div>
                
                  </form>

            </div>
  
        </div>

     </>
    
  );
}

export default Login;