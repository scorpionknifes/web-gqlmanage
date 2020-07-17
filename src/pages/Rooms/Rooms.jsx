import React from 'react'

const roomsQuery = useQuery(LocationQuery, {
    variables: { input: searchQuery }
})


useEffect(() => {
    const { loading, error, data } = locationQuery
    if (!error && !loading && data) {
        const { locations } = data
        console.log(locations)
        if (locations.length === 0) {
            console.log("no results")
            setJobs(null)
            return
        }
        setSlug(locations[0].slug)
        setType(locations[0].type)
    }
}, [locationQuery])