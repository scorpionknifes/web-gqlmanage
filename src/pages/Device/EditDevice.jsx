import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import DeviceFragment from '../../fragments/DeviceFragment'
import SaveButton from '../../components/Button/SaveButton'
import { DeviceEdit } from '../../components/Device'
import { Typography } from '@material-ui/core'
import { useQuery, gql, useMutation } from '@apollo/client'
import Spinner from '../../components/Spinner/Spinner'
import Login from '../Login/Login'

const EditDevice = () => {
    let { id } = useParams();
    const history = useHistory()
    const [device, setDevice] = useState("")
    const [name, setName] = useState("")
    const [model, setModel] = useState("")
    const [macAddress, setMacAddress] = useState("")
    const [memo, setMemo] = useState("")
    const [serialNumber, setSerialNumber] = useState("")
    const [status, setStatus] = useState(0)
    const [type, setType] = useState(0)

    const { loading, error, data } = useQuery(gql`
        query Device($id: ID!) {
            device(id: $id) {
                ...DeviceFragment
            }
        }
        ${DeviceFragment}
    `, {
        variables: { id: id }
    })

    useEffect(() => {
        if (data) {
            const { device } = data
            setDevice(device)
            setName(device.name)
            setModel(device.model)
            setMacAddress(device.macAddress)
            setMemo(device.memo)
            setSerialNumber(device.serialNumber)
            setStatus(device.status)
            setType(device.type)
        }
    }, [data])

    const [updateDevice] = useMutation(gql`
        mutation updateDevice($id: ID!, $input: DeviceUpdate!) {
            updateDevice(id: $id, input: $input){
                id
                name
                model
                macAddress
                memo
                serialNumber
                status 
                type
            }
        }
    `)

    const save = () => {
        updateDevice({
            variables: {
                id: id,
                input: {
                    name: name,
                    model: model,
                    macAddress: macAddress,
                    memo: memo,
                    serialNumber: serialNumber,
                    status: status,
                    type: type,
                }
            }
        })
        history.push(`/device/${id}`)
    }

    if (loading){
        return <Spinner />
    }

    if (error){
        return <Login error={error} />
    }

    return <>
        <Typography variant="h4">Edit - {device?.name}</Typography>
        <br />
        <SaveButton back={`/device/${id}`} save={save} />
        <br />
        <DeviceEdit
            id={id}
            name={name} setName={setName}
            roomNumber={device?.room?.roomNumber}
            model={model} setModel={setModel}
            macAddress={macAddress} setMacAddress={setMacAddress}
            memo={memo} setMemo={setMemo}
            serialNumber={serialNumber} setSerialNumber={setSerialNumber}
            status={status} setStatus={setStatus}
            type={type} setType={setType}
        />
    </>
}

export default EditDevice