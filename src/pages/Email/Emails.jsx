import React, { useEffect } from 'react'
import { gql, useSubscription } from '@apollo/client'

const Emails = () => {

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


    const { data, error, loading } = useSubscription(gql`
        subscription {
            newEmails{
                id
                from
                to
                data
                createdDate
            }
        }`
    );

    useEffect(()=>{ 
        console.log(loading)
        console.log(data)
        console.log(error)
    },[data, loading, error])
    return <>Test</>
}

export default Emails