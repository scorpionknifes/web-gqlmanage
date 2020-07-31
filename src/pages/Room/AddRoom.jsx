import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import UserFragment from '../../fragments/UserFragment'
import { useQuery, gql } from '@apollo/client'
import RoomAdd from '../../components/Room/RoomAdd'
import Spinner from '../../components/Spinner/Spinner'
import Login from '../Login/Login'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Enter Room Details', 'OpenHAB Cloud', 'Alexa', 'Verify Email'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <RoomAdd />
        case 1:
            return 'Sign up to OpenHAB Cloud on custom server'
        case 2:
            return 'Sign up to Alexa'
        case 3:
            return 'Verify Email'
        default:
            return 'Unknown step'
    }
}

export default function HorizontalLinearStepper() {

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const steps = getSteps();

    //fields

    const [roomNumber, setRoomNumber] = useState("")


    const [name, setName] = useState("")
    const [model, setModel] = useState("")
    const [macAddress, setMacAddress] = useState("")
    const [memo, setMemo] = useState("")
    const [serialNumber, setSerialNumber] = useState("")
    const [status, setStatus] = useState(0)
    const [type, setType] = useState(0)


    const { loading, error, data } = useQuery(gql`
        query Users {
            users {
                ...UserFragment
            }
        }
        ${UserFragment}
    `)

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <Login error={error} />
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {}
                    const labelProps = {}
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset} className={classes.button}>Reset</Button>
                    </div>) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>Back</Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}