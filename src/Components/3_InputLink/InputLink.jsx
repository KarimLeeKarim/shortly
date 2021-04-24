import React from 'react'

export const InputLink = ({ inputValue, clicked, loader, isEmpty, checkingError }) => {
    const handleError = () => {
        checkingError()
        clicked()
    }
    return (
        <section className="inputlink">
            <div className="input">
                {
                    <input
                        style={isEmpty ? { border: "3px solid red" } : { border: "3px solid gray" }}
                        className="input__input"
                        type="text"
                        placeholder={isEmpty ? "Please add link" : "Shorten a link here..."}
                        onChange={inputValue}
                        required
                    />
                }

                {
                    !loader ? <button onClick={handleError} type="submit" className={`input__btn`}
                    >{loader ? "Loading" : "Shorten it"}</button> : <div className="loader"></div>
                }

            </div>

        </section>
    )
}

export default InputLink
