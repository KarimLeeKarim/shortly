import React from 'react'
import Cards from './Cards';
import List from './List';
let originalLinkCom = '';


const Statistic = ({ inputList, img, title, subtitle}) => {

    return (
        <section className="statistic">
            <ul className="ul">{
                inputList ? inputList.map(arr => {
                    if (arr[0].includes(".com")) {
                        let com = arr[0].search('.com')
                        originalLinkCom = arr[0].slice(0, com + 4)
                    }
                    return (
                        <List arr0={originalLinkCom}
                        arr={arr}
                        />
                    )
                }) : null

            }</ul>

            <div className="statisticTitle">

                <p className="statisticTitle__title">Advanced Statistics</p>
                <span className="statisticTitle__subtitle">Track how your links are performing across the web with our
                advanced statistics dashboard.
                </span>
            </div>
            <Cards
                img={img}
                title={title}
                subtitle={subtitle} />
        </section>
    )
}

export default Statistic