import React, { useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import EmailTable from '../../components/Email/EmailTable';
import { EmailFragment } from '../../fragments'
import Spinner from '../../components/Spinner/Spinner';
import Login from '../Login/Login';

const Emails = () => {
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
                return { emails: [...prev.emails,subscriptionData.data.newEmails ] }
            }
        })
    }, [subscribeToMore])

    if (loading){
        return <Spinner />
    }

    if (error){
        return <Login error={error}/>
    }

    return <>
        <EmailTable emails={data?.emails} />
    </>
}

export default Emails