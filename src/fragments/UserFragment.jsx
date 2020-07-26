import {gql} from '@apollo/client'

export default gql`
  fragment UserFragment on User {
    id
    name
    username
    location
    abbr
    email
    openhab
  }
`
