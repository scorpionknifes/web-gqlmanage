import React from 'react'
import { useParams } from 'react-router-dom';
import EditButton from '../../components/Button/EditButton';

const Device = () => {
    let { id } = useParams()
    return <>
    <EditButton/>
    </>
}
export default Device