import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import CreateButton from '../../components/Button/CreateButton'
import { RoomFragment, DeviceFragment } from '../../fragments'
import { useQuery, gql, useMutation } from '@apollo/client'
import Spinner from '../../components/Spinner/Spinner'
import { DeviceAdd } from '../../components/Device'
import Login from '../Login/Login'

const AddDevice = () => {
    let { id } = useParams()

    const [name, setName] = useState("")
    const [model, setModel] = useState("")
    const [macAddress, setMacAddress] = useState("")
    const [memo, setMemo] = useState("")
    const [serialNumber, setSerialNumber] = useState("")
    const [status, setStatus] = useState(0)
    const [type, setType] = useState(0)

    const history = useHistory()

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
                ...DeviceFragment
            }
        }${DeviceFragment}
        `,
    );

    const create = () => {
        createDevice({
            variables: {
                input: {
                    roomID: id,
                    name: name,
                    model: model,
                    macAddress: macAddress,
                    memo: memo,
                    serialNumber: serialNumber,
                    status: status,
                    type: type
                }
            },
            refetchQueries: [
                {
                    query: gql`
                        query Devices {
                            devices {
                                ...DeviceFragment
                            }
                        }
                        ${DeviceFragment}
                    `
                }, {
                    query: gql`
                        query Device($id: ID!) {
                            device(id: $id) {
                                ...DeviceFragment
                            }
                        }
                        ${DeviceFragment}
                    `,
                    variables: { id: id }
                }, {
                    query: gql`
                        query Room($id: ID!) {
                            room(id: $id) {
                                ...RoomFragment
                                devices{
                                    ...DeviceFragment
                                }
                            }
                        }
                        ${RoomFragment}
                        ${DeviceFragment}
                    `,
                    variables: { id: id }
                }
            ]
        })
        history.push(`/room/${id}`)
    }


    if (loading) {
        return <Spinner />
    }
    if (error) {
        return <Login error={error} />
    }

    return <>
        <Typography variant="h4">Add Device - Room {data?.room.roomNumber}</Typography>
        <br />
        <form onSubmit={create}>
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