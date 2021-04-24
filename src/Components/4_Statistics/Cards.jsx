import React, { Component } from 'react';


const Cards = ({ img, title, subtitle }) => {
    return (
        <>
            <div className="statisticContainer">
                <div className="statisticCard ">
                    <div className="statisticCard__img">
                        <img src={img[0]} />
                    </div>
                    <p className="statisticCard__title">{title[0]}</p>
                    <span className="statisticCard__subtitle">{subtitle[0]}</span>
                    <div className="line"></div>
                    
                </div>
                <div className="statisticCard iki" >
                    <div className="statisticCard__img">
                        <img src={img[1]} />
                    </div>
                    <p className="statisticCard__title">{title[1]}</p>
                    <span className="statisticCard__subtitle">{subtitle[1]}</span>
                    <div className="line"></div>
                    <div className="lineDown"></div>

                </div>
                <div className="statisticCard uch">
                    <div className="statisticCard__img">
                        <img src={img[2]} />
                    </div>
                    <p className="statisticCard__title">{title[2]}</p>
                    <span className="statisticCard__subtitle">{subtitle[2]}</span>
                    <div className="lineDown"></div>
                </div>
            </div>
        </>
    )
}

export default Cards
