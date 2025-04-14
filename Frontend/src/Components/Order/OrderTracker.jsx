import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import { color } from '../../Data/FilterData'

const steps=[
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out for Delivery",
    "Delivered"
]

function OrderTracker() {
    const [activeStep, setActiveStep] = React.useState(3);
  return (
    <div>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step)=><Step>
                <StepLabel sx={{color:'blue',fontSize:'44px' }}>{step}</StepLabel>
            </Step>)}

        </Stepper>
    </div>
  )
}

export default OrderTracker