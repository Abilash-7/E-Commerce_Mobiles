import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react'


const Contact = () => {

  
  const { loginWithRedirect,user, isAuthenticated} = useAuth0();


  const [users,setUser] = useState({
    Name:'',Email:'',Subject:'',Message:''
})

let Name,Value;
const data = (e) => {
    Name = e.target.name;
    Value = e.target.value;
    setUser({...users,[Name]: Value})
}

const sendData = async (e) => {
  const {Name,Email,Subject,Message} = users;
  e.preventDefault();

  const options = {
      method : 'POST',
      headers : {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
          Name,Email,Subject,Message
      })
  }
  const res = await fetch('https://e-commerce-43c0d-default-rtdb.firebaseio.com/Message.json',options)
  console.log(res);
  if(res){
      alert('Your Message Sent')
  }
  else
  {
      alert('An error Occured')
  }
}

  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center " style={{marginTop:'150px'}}>
        <div className="content  w-50">  
        <h1 className='text-center mb-5'>Contact US</h1>
            <div className="form ">
                <form method='POST' className='d-flex flex-column align-items-center'>
                    <input type="text" className='form-control mb-3' autoComplete='off' name='Name' value={users.Name} onChange={data} placeholder='Enter Your Full Name' required />
                    <input type="email" className='form-control  mb-3' name='Email' value={users.Email} onChange={data} placeholder='Enter Your Email' required />
                    <input type="text" className='form-control  mb-3' name='Subject' value={users.Subject} onChange={data} placeholder='Enter Your Subject' required />
                    <textarea name="Message" className='form-control  mb-3' placeholder='Message' value={users.Message} onChange={data} rows={3}></textarea>
              

                    {
                    isAuthenticated ? 
                    <button type='submit' onClick={sendData} className='btn btn-primary w-50'>Send</button>
                    :
                    <button type='submit' onClick={loginWithRedirect()} className='btn btn-primary w-50'>Login to Send a Message</button>

                   }
                   
                   
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact