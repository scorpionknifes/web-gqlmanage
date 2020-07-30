import {gql} from '@apollo/client'

export default gql`
  fragment EmailFragment on Email {
    id
    from
    to
    data
    createdDate
  }
`
