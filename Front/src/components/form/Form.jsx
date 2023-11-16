import {useState } from 'react'
import validation from '../../utils/validation';

const Form = ({login})=> {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
  });


  const handleChange = (event) =>{
    const {name, value} = event.target
    setUserData ({
      ...userData,
      [name]: value
    })
    setErrors (
      validation({
        ...userData,
        [name]: value
      })
    )
  }

  const hanleSubmit = (event) => {
    event.preventDefault()
    login (userData)
  }

  return (

   <div>

      <form onSubmit ={hanleSubmit}>
      
      
      <label> Email </label>
      <input 
      type="text" 
      id='email'
      name='email'
      value={userData.email}
      placeholder='Ingrese su email'
      onChange ={handleChange}
      />
      <p style={{color:"coral"}}>{ errors.email ? errors.email : null }</p>
      
      
      <label> Password </label>
      <input 
      type="password" 
      id='password'
      name='password'
      placeholder='ingrese su contraseña'
      value={userData.password}
      onChange ={handleChange}
      />
      <p style={{color:"coral"}}>{ errors.password && errors.password }</p>
      
      <hr />
      <button> Ingresar </button>
      
      
      </form>

    </div>
   
  )
}


export default Form;