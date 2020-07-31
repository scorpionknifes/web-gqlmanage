import React, { useEffect, useState } from 'react'
import { gql, useSubscription, useQuery } from '@apollo/client'
import EmailTable from '../../components/Email/EmailTable';
import { EmailFragment } from '../../fragments'

const Emails = () => {

    const [emails, setEmails] = useState([])

    const { subscribeToMore, loading, data, error } = useQuery(gql`
        query Emails {
            emails {
                ...EmailFragment
            }
        }
        ${EmailFragment}
    `)

    useEffect(() => {
        subscribeToMore({
            document: SUBSCRIPTION,
            updateQuery(prev, { subscriptionData }) {
                // `prev` already contains the new data
                console.log(subscriptionData.data.newEmails)
                console.log(prev)

                
                return { emails:[subscriptionData.data.newEmails, ...prev.emails] }
             }
        })
    },[])

    useEffect(() => {
        if (!error && !loading && data) {
            console.log(data.emails)
            setEmails(data.emails)
        }
    }, [data])

    const SUBSCRIPTION = gql`
        subscription {
            newEmails{
                id
                from
                to
                data
                createdDate
            }
        }`

        const sub = useSubscription(SUBSCRIPTION)

    useEffect(()=>{
        console.log(sub)
    }, [sub])

    return <>
        <EmailTable emails={emails} />
    </>
}

export default Emails