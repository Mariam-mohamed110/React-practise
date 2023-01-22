import { React, useEffect, useState } from "react"

export default function TvShowList() {
    const[ show, setShow ] = useState([])

    useEffect(() => {
        const getShow = async () => {
            const res = await fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
            const json = await res.json()
            setShow(json)
        }
        getShow()
    }, [])

    return ()
}