import React from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
        .then(response => response.json())
        .then(data => setCurrentVan(data.vans))
    }, [])

    return (
        <h1>Hi</h1>
    )
}