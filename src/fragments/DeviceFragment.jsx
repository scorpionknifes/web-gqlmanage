import {gql} from '@apollo/client'

export default gql`
  fragment DeviceFragment on Device {
    id
    name
    model
    macAddress
    memo
    serialNumber
    status
    createdDate
    lastModified
  }
`
