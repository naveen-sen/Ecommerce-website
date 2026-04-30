import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] px-4 py-10'>
      <div className='text-center'>
        <h1 className='text-9xl font-bold text-gray-200'>404</h1>
        <h2 className='text-2xl font-semibold text-gray-800 mt-[-40px]'>Page Not Found</h2>
        <p className='text-gray-500 mt-4 mb-8'>
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Button 
          variant='contained' 
          onClick={() => navigate('/')}
          sx={{ 
            bgcolor: '#1976d2',
            '&:hover': { bgcolor: '#1565c0' }
          }}
        >
          Go to Home
        </Button>
      </div>
    </div>
  )
}
