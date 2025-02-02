import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline:"none",
    p: 4,
  };

const AuthModal = ({handleClose,open}) => {
  return (
    <div>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>

   {/* <RegisterForm /> */}
   <LoginForm />
  </Box>
</Modal>
    </div>
  )
}

export default AuthModal
