import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
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
            document: gql`
                subscription {
                    newEmails{
                        id
                        from
                        to
                        data
                        createdDate
                    }
            }`,
            updateQuery(prev, { subscriptionData }) {
                return { emails: [subscriptionData.data.newEmails, ...prev.emails] }
            }
        })
    }, [subscribeToMore])

    useEffect(() => {
        if (!error && !loading && data) {
            console.log(data.emails)
            setEmails(data.emails)
        }
    }, [data, error, loading])

    return <>
        <EmailTable emails={emails} />
    </>
}

export default Emails