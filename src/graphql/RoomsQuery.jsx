import gql from 'graphql-tag'
import JobFragment from './JobFragment'

export default gql`
query Jobs($input: JobsInput) {
    jobs(input: $input) {
        ...JobFragment
    }
}
${JobFragment}
`
