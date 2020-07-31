import {gql} from '@apollo/client'

export default gql`
  fragment DeviceFragment on Device {
    id
    room{
        id
        roomNumber
    }
    name
    model
    macAddress
    memo
    serialNumber
    status
    type
    createdDate
    lastModified
  }
`
