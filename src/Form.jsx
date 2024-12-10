import { useState } from 'react';
import { Button, Box, Typography, TextField } from '@mui/material';
 
const FormValidation= () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const handleSubmit = () => {
    if (!name || !email || !password) {
      alert('All fields are required.')
      return
    }
 
    if (!nameRegex.test(name)) {
      alert('Name should contain only letters and spaces.')
      return
    }
 
    if (!emailRegex.test(email)) {
      alert('Enter a valid email address.')
      return
    }
 
    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters long and include a number.')
      return
    }
 
    alert(`Form Submitted!\nName: ${name}\nEmail: ${email}\nPassword: ${password}`)
    setName('')
    setEmail('')
    setPassword('')
  }
 
  return (

    <Box  display="flex"
          justifyContent="center"
          AlignItems="center" 
          height="100vh">         
     <Box
      display="flex"
      flexDirection="column"
      gap={2}
      sx={{ width: '300px', padding: '3' }}>
      <Typography variant="h3" textAlign="center">SIGN IN</Typography>
      <Typography>Name <span style={{ color: 'red' }}>*</span></Typography>
      <TextField  variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>
      <Typography> Email <span style={{ color: 'red' }}>*</span></Typography>
      <TextField variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <Typography> Password <span style={{ color: 'red' }}>*</span></Typography>
      <TextField  variant="outlined"  type="password" value={password}onChange={(e) => setPassword(e.target.value)}/>
 
      <Button variant="contained" sx={{ width: '150px' }}onClick={handleSubmit}>Submit</Button>
    </Box>
    </Box>
  )
}
export default FormValidation;
 