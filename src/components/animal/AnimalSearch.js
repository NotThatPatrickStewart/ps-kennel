import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalSearch = (props) => {
    const { setSearchTerms } = useContext(AnimalContext)

    return (
        <>
            Animal Search:
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search for an animal" />
        </>
    )
}