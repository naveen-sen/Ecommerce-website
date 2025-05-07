import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { useLocation } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 500, sm: 550 },
  bgcolor: 'transparent',
  borderRadius: 5,
  boxShadow: 24,
  p: 0, // <-- No padding at all
  overflow: 'hidden', // In case the form has internal margin/padding
};

function AuthModal({ handleClose, open }) {

  const location = useLocation()

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* Close Button - position needs to be adjusted if keeping it */}
        <Box sx={{ position: 'absolute', top: 4, right: 12, zIndex: 1 }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
          {location.pathname==='/login' ? <LoginForm/>:<SignupForm />}
        {/* Signup Form */}
        
      </Box>
    </Modal>
  );
}

export default AuthModal;
