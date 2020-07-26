import {gql} from '@apollo/client'

export default gql`
  fragment RoomFragment on Room {
    id
    roomNumber
    memo
    username
    password
    createdDate
  }
`
