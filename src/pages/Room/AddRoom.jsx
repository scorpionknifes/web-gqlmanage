import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import UserFragment from '../../fragments/UserFragment'
import { useQuery, gql, useMutation } from '@apollo/client'
import RoomAdd from '../../components/Room/RoomAdd'
import Spinner from '../../components/Spinner/Spinner'
import Login from '../Login/Login'
import { hash, codec } from 'sjcl'
import { OpenhabCloud, Alexa } from '../../components/Room'

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

export default function HorizontalLinearStepper() {

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const [user, setUser] = useState();

    //fields

    const [roomNumber, setRoomNumber] = useState("")
    const [memo, setMemo] = useState("")

    const [name, setName] = useState("")
    const [model, setModel] = useState("")
    const [password, setPassword] = useState("")
    const [macAddress, setMacAddress] = useState("")
    const [memoController, setMemoController] = useState("")
    const [serialNumber, setSerialNumber] = useState("")
    const [status, setStatus] = useState(0)
    const [type, setType] = useState(1)


    const { loading, error, data } = useQuery(gql`
        query Users {
            users {
                ...UserFragment
            }
        }
        ${UserFragment}
    `)


    const [createRoom] = useMutation(gql`
        mutation($input:RoomInput!) {
            createRoom(input:$input){
                id
            }
        }`, {
        variables: {
            input: {
                roomNumber: roomNumber,
                memo: memo,
                devices: [{
                    name: name,
                    model: model,
                    macAddress: macAddress,
                    memo: memo,
                    serialNumber: serialNumber,
                    status: status,
                    type: type
                }],
                username: `${user?.abbr}_${roomNumber}@${user?.email}`,
                password: password
            }
        }
    })


    useEffect(() => {
        let users = data?.users
        if (users && users.length > 0) {
            setUser(users[0])
            console.log(users[0])
        }
    }, [data])

    useEffect(() => {
        let myHash = codec.hex.fromBits(hash.sha256.hash(`${user?.abbr}_${roomNumber}`))
        console.log(myHash)
        setPassword(myHash)
    }, [roomNumber, user])

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <Login error={error} />
    }

    const getStepContent = step => {
        switch (step) {
            case 0:
                return <RoomAdd
                    roomNumber={roomNumber} setRoomNumber={setRoomNumber}
                    memo={memo} setMemo={setMemo}
                    name={name} setName={setName}
                    model={model} setModel={setModel}
                    macAddress={macAddress} setMacAddress={setMacAddress}
                    memoController={memoController} setMemoController={setMemoController}
                    serialNumber={serialNumber} setSerialNumber={setSerialNumber}
                    status={status} setStatus={setStatus}
                    type={type} setType={setType} />
            case 1:
                return <OpenhabCloud
                    openhab={user?.openhab}
                    username={`${user?.abbr}_${roomNumber}@${user?.email}`}
                    password={password}
                />
            case 2:
                return <Alexa
                    username={`${user?.abbr}_${roomNumber}@${user?.email}`}
                    password={password}
                />
            case 3:
                return 'Verify Email'
            default:
                return 'Unknown step'
        }
    }


    const handleNext = event => {
        event.preventDefault()
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
                        <form onSubmit={handleNext}>
                            {getStepContent(activeStep)}
                            <br />
                            <div>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>Back</Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </form>
                    )}
            </div>
        </div>
    );
}