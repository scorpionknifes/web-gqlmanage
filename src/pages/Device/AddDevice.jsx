import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import CreateButton from '../../components/Button/CreateButton';
import { RoomFragment } from '../../fragments';
import { useQuery, gql, useMutation } from '@apollo/client';
import Spinner from '../../components/Spinner/Spinner';
import { DeviceAdd } from '../../components/Device';

const AddDevice = () => {
    let { id } = useParams()

    const [name, setName] = useState("")
    const [model, setModel] = useState("")
    const [macAddress, setMacAddress] = useState("")
    const [memo, setMemo] = useState("")
    const [serialNumber, setSerialNumber] = useState("")
    const [status, setStatus] = useState(0)
    const [type, setType] = useState(0)

    const { loading, error, data } = useQuery(gql`
        query Room($id: ID!) {
            room(id: $id) {
                ...RoomFragment
            }
        }
        ${RoomFragment}
    `, {
        variables: { id: id }
    })

    const [createDevice] = useMutation(gql`
        mutation createDevice($input: DeviceInput!){
            createDevice(input: $input){
                id
            }
        }`,{
        variables: { input:{
            roomID: id,
            name: name,
            model: model,
            macAddress: macAddress,
            memo: memo,
            serialNumber: serialNumber,
            status: status,
            type: type
        } }
    }
    );

    return (loading||error) ? <Spinner /> : <>
        <Typography variant="h4">Add Device - Room {data?.room.roomNumber}</Typography>
        <br />
        <form onSubmit={createDevice}>
            <CreateButton back={`/room/${id}`} />
            <br />
            <DeviceAdd
                name={name} setName={setName}
                model={model} setModel={setModel}
                macAddress={macAddress} setMacAddress={setMacAddress}
                memo={memo} setMemo={setMemo}
                serialNumber={serialNumber} setSerialNumber={setSerialNumber}
                status={status} setStatus={setStatus}
                type={type} setType={setType}
            />
        </form>
    </>
}

export default AddDevice