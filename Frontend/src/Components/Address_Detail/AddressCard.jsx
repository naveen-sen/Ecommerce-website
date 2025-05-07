import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

function AddressCard({address}) {
  return (
    <Card sx={{ maxWidth: 320, marginBottom: 2, cursor: 'pointer', boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {address?.firstName + " " + address?.lastName}
        </Typography>
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
      </CardContent>
    </Card>
  )
}

export default AddressCard
