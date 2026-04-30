import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Card, CardContent, Chip, Typography } from '@mui/material';

function AddressCard({address, selected, onSelect}) {
  const handleClick = () => {
    if (onSelect) {
      onSelect(address);
    }
  };

  return (
    <Card 
      onClick={handleClick}
      sx={{ 
        maxWidth: 320, 
        marginBottom: 2, 
        cursor: 'pointer', 
        boxShadow: 3,
        border: selected ? 2 : 0,
        borderColor: selected ? '#1976d2' : 'transparent',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          boxShadow: 6,
          transform: 'translateY(-2px)'
        }
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Typography variant="h6" component="div" gutterBottom>
            {address?.firstName + " " + address?.lastName}
          </Typography>
          {selected && (
            <CheckCircleIcon sx={{ color: '#1976d2', fontSize: 20 }} />
          )}
        </Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {address?.addressLine1}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {address?.city}, {address?.state}, {address?.pincode}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Phone Number
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address?.phone}
        </Typography>
        {selected && (
          <Chip 
            label="Selected" 
            color="primary" 
            size="small" 
            sx={{ mt: 2, fontWeight: 'bold' }}
          />
        )}
      </CardContent>
    </Card>
  )
}

export default AddressCard
