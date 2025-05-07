
import React, { useState } from 'react';
import { Button, Grid, TextField, Typography, Box } from '@mui/material';
import { login } from '../../store/Auth/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function LoginForm ({handleClose}) {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const user = {
      email: data.get("email"),
      password: data.get("password"),
    };
    try {
      const result = await dispatch(login(user));
      if(result?.token){
        localStorage.setItem("jwt",result.token)
        handleClose()
        navigate("/")
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f3f4f6',
        padding:"2rem"
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h5" fontWeight="600" gutterBottom sx={{ textAlign: 'center' }} className='py-5'>
          Welcome back
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email address"
                fullWidth
                autoComplete="email"
                variant="outlined"
                sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#e5e7eb',
                      },
                      '&:hover fieldset': {
                        borderColor: '#9ca3af',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#facc15',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#facc15',
                    },
                    backgroundColor: 'white',
                    borderRadius: '0.5rem',
                    width:'200%'
                  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                sx={{width:'200%',backgroundColor: 'white',
                    borderRadius: '0.5rem',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#e5e7eb',
                          },
                          '&:hover fieldset': {
                            borderColor: '#9ca3af',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#facc15',
                          },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#facc15',
                        },}}
              />
            </Grid>
          </Grid>

          {error && (
            <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: 3,
              backgroundColor: '#facc15',
              color: 'black',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#eab308',
              },
            }}
          >
            Sign in
          </Button>

          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }} className='text-sm pb-2'>
            Don't have an account? 
            <Button onClick={()=>navigate('/signup')} className=' text-blue-600'>Sign up</Button>
          </Typography>
        </form>
      </Box>
    </Box>
  );
}

export default LoginForm;
