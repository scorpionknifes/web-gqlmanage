import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import RoomEdit from '../../components/Room/RoomEdit'
import { Typography } from '@material-ui/core'
import SaveButton from '../../components/Button/SaveButton'
import Spinner from '../../components/Spinner/Spinner'
import RoomFragment from '../../fragments/RoomFragment'
import { useQuery, gql, useMutation } from '@apollo/client'
import Login from '../Login/Login'

const EditRoom = () => {
    let { id } = useParams()
    const history = useHistory()
    const [memo, setMemo] = useState("")

    const { loading, error, data } = useQuery(gql`
        query Room($id: ID!) {
            room(id: $id) {
                ...RoomFragment
            }
        }
        ${RoomFragment}
    `,{
        variables: { id: id }
    })

    useEffect(()=>{
        if (data) {
            setMemo(data?.room?.memo)
        }
    },[data])

    const [updateRoom] = useMutation( gql`
        mutation updateRoom($id: ID!, $input: RoomUpdate!) {
            updateRoom(id: $id, input: $input){
                id
                memo
                createdDate
            }
        }
    `)
    
    const save = () =>{
        updateRoom({
            variables: {
                id: id,
                input: {
                    memo: memo
                }
            }
        })
        history.push(`/room/${id}`)
    }

    if (loading){
        return <Spinner />
    }

    if (error){
        return <Login error={error}/>
    }

    return <>
        <Typography variant="h4">Room {data?.room?.roomNumber}</Typography>
        <br />
        <SaveButton back={`/room/${id}`} save={save} />
        <br />
        <RoomEdit 
            id={id} 
            room={data?.room} 
            memo={memo} setMemo={setMemo}
        />
    </>
}

export default EditRoom