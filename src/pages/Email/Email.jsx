import React, { useEffect } from 'react'
import { gql, useSubscription } from '@apollo/client'

const Email = () => {

    const query = gql`
    subscription {
        newEmails{
            id
            from
            to
            data
            createdDate
        }
    }`

    const { data, error, loading } = useSubscription(
        query
    );

    useEffect(()=>{ 
        console.log(loading)
        console.log(data)
        console.log(error)
    },[data, loading, error])
    return <>Test</>
}

export default Email