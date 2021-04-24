import React, { Component } from 'react';
import '../Assets/sass/main.scss';

import Navbar from '../Components/1_Navbar/Navbar.jsx';
import Info from '../Components/2_Info/Info.jsx';
import LoginForm from '../Components/0_Forms/LoginForm.jsx';
import SignForm from '../Components/0_Forms/SignForm.jsx';
import InputLink from '../Components/3_InputLink/InputLink.jsx';
import Statistics from '../Components/4_Statistics/Statistic.jsx'


import iconBrand from '../Assets/images/icon-brand-recognition.svg';
import iconRecords from '../Assets/images/icon-detailed-records.svg';
import iconCustom from '../Assets/images/icon-fully-customizable.svg';
import BoostLinks from '../Components/5_BoostLinks/BoostLinks';
import Footer from '../Components/6_Footer/Footer';
import MobileNavbar from '../Components/7_MobileNavbar/MobileNavbar';

class App extends Component {
    state = {
        signForm: false,
        loginForm: false,
        mobileX: false,
        valueofInput: '',
        listArr: [],
        loader: false,
        isEmpty: false,
        img: [iconBrand, iconRecords, iconCustom],
        title: ["Brand Recognition", "Detailed Records", "Fully Customizable"],
        subtitle: [
            "Boost your brand recognition with each click. Generic links do not mean a thing. Branded links help instil confidence in your content.",
            "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
            "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        ],
        clickValue: '',
    };
    signForm = () => {
        this.setState({
            signForm: !this.state.signForm,
        })
    }
    loginForm = () => {
        this.setState({
            loginForm: !this.state.loginForm,
        })
    }
    inputValue = (e) => {
        let value = e.target.value
        this.setState({
            valueofInput: value,
        })
    }

    shownewElements = async (value) => {
        if (value) {
            this.setState({
                loader: true,
            })
            const url = `https://api.shrtco.de/v2/shorten?url=${value}`
            const response = await fetch(url)
            const data = await response.json()
            let originLink = data.result.original_link;
            let shortLink = data.result.short_link;
            let array = this.state.listArr;
            array.push([originLink, shortLink])
            this.setState({
                listArr: array,
                loader: false,
            })
        }
    }

    opclMobile = () => {
        this.setState({
            mobileX: !this.state.mobileX
        })
    }

    checkingError = () => {
        if (this.state.valueofInput == '' || this.state.valueofInput == ' ') {
            this.setState({
                isEmpty: true,
            })
        }
        else {
            this.setState({
                isEmpty: false,
            })
        }
    }

    render() {
        return (
            <>
                {/* ALL CONTENT  START*/}
                <main className={`main ${this.state.signForm || this.state.loginForm ? 'blur' : null}`}>
                    <Navbar
                        signForm={this.signForm}
                        status2={this.state.signForm}
                        loginForm={this.loginForm}
                        status={this.state.loginForm}
                        opclMobile={this.opclMobile}
                    />
                    <Info />
                    <InputLink
                        inputValue={(event) => this.inputValue(event)}
                        clicked={() => this.shownewElements(this.state.valueofInput)}
                        loader={this.state.loader}
                        isEmpty={this.state.isEmpty}
                        checkingError={this.checkingError}
                    />
                    <Statistics
                        inputList={this.state.listArr}
                        img={this.state.img}
                        title={this.state.title}
                        subtitle={this.state.subtitle}
                    />
                    <BoostLinks />
                    <Footer />

                </main>
                {/* ALL CONTENT  END*/}



                {/* MODAL FORMS  START*/}
                <LoginForm
                    loginForm={this.loginForm}
                    status={this.state.loginForm}
                />
                <SignForm
                    signForm={this.signForm}
                    status={this.state.signForm}
                />
                <MobileNavbar
                    className="mobilenavbar"
                    statusMobile={this.state.mobileX}
                    signForm={this.signForm}
                    loginForm={this.loginForm}
                />
                {/* MODAL FORMS  END*/}

            </>
        );
    }
}

export default App;
