import React, { useState } from 'react'

const List = ({ arr0, arr }) => {
    const [copy, setCopy] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText(arr[1])
        setCopy(true)
    }
    return (
        <li className="ul__li">
            <span className="ul__span">{arr0}</span>
            <p className="ul__p">
                <span className="span">{arr[1]}</span>
                <button
                    onClick={handleCopy}
                    className={`btn ${copy ? "dark" : null}`}
                >
                    {copy ? "Copied" : "Copy"}
                </button>
            </p>
        </li>
    )
}

export default List;