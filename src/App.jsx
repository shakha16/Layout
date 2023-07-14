import { useState } from 'react'
import verification from './assets/verification.svg'
import todo from './assets/todo.svg'
import headphones from './assets/headphones.svg'
import './App.css'
import './media.css'
import Btn from './components/btns'
import InfoItem from './components/infoItem'
import ItemInfo from './components/itemsInfo'
import Statistic from './components/Statistics'
import Links from './components/links'
import Programmer from './components/Programmer'
import Style from './components/Style'

let itemsInfo = [
    {
        id: 1,
        text: "UI/UX Design",
        description: "Rror te inal desiga othe fal dveoprer age your adcased men Mageeef speists",
        logo: "https://dora-react.vercel.app/images/icons/ui-ux.svg",
        color: "#9c19c9"
    },
    {
        id: 2,
        text: "Web Design",
        description: "Rror te inal desiga othe fal dveoprer age your adcased men Mageeef speists",
        logo: "https://dora-react.vercel.app/images/icons/web-desgin.svg",
        color: "#ffaf00"
    },
    {
        id: 3,
        text: "Digital Marketing",
        description: "Rror te inal desiga othe fal dveoprer age your adcased men Mageeef speists",
        logo: "https://dora-react.vercel.app/images/icons/digital-marketing.svg",
        color: "#ff4e6e"
    }
]

let statics = [
    {
        id: 1,
        name: "Facebook Marketing",
        percent: "90%"
    },
    {
        id: 2,
        name: "Affiliate Marketing",
        percent: "50%"
    },
    {
        id: 3,
        name: "Search Engine Optimization",
        percent: "80%"
    },
    {
        id: 4,
        name: "Graphic Design",
        percent: "90%"
    },
    {
        id: 5,
        name: "Content Writing",
        percent: "95%"
    },
    {
        id: 6,
        name: "Web Ui Design",
        percent: "49%"
    },
    {
        id: 7,
        name: "Youtube Marketing",
        percent: "72%"
    },
    {
        id: 8,
        name: "Web Design",
        percent: "70%"
    }
]

let programmers = [
    {
        id: 1,
        name: 'Beseie Cooper',
        work: 'Web Designer',
        title: 'Loved the template design, documentation, customizability and the customer support from Marketify team! I am a noob in programming with very little knowledge about coding.',
        img: 'https://dora-react.vercel.app/images/testimonials/1.png'
    },
    {
        id: 2,
        name: 'Beseie Cooper',
        work: 'Web Designer',
        title: 'Loved the template design, documentation, customizability and the customer support from Marketify team! I am a noob in programming with very little knowledge about coding.',
        img: 'https://dora-react.vercel.app/images/testimonials/2.png'
    }
]

let style = [
    {
        id: 1,
        text: 'UI/UX Design',
        date: '23 Oct 2023',
        title: 'User interface design or user interface engineering',
        img: 'https://dora-react.vercel.app/images/blog/1.png'
    },
    {
        id: 2,
        text: 'Web Design',
        date: '13 Dec 2023',
        title: 'Web design encompasses many different skills',
        img: 'https://dora-react.vercel.app/images/blog/2.png'
    },
    {
        id: 3,
        text: 'Web Development',
        date: '23 Dec 2023',
        title: 'Jim Morisson Says when the musics over turn off the light',
        img: 'https://dora-react.vercel.app/images/blog/3.png'
    }
]


function App() {

    return (
        <>
            <section className='mainSec'>
                <div className="container main__section">
                    <div className="item">
                        <span className='mainSpan'>
                            Hi, I'm
                        </span>
                        <h1>
                            Mary Hardy
                        </h1>
                        <h2>
                            Digital Marketing Expert
                        </h2>
                        <p className='fuck'>
                            Shot what able cold new the see hold. Friendly as an betrayed formerly he. Morning because as to society behaved moments
                        </p>
                        <div className="btnS">
                            <Btn id={"btn"} text={"Download CV"} />
                            <Btn id={"btn"} text={"Contact"} />
                        </div>
                    </div>
                    <div className="item">
                        <img className='problem' src="https://dora-react.vercel.app/images/hero-person-img.png" alt="" />
                    </div>
                </div>
            </section>
            <section className='modal'>
                <div className="container modal__section">
                    <div className="item__info">
                        <InfoItem src={verification} mainText={"8 years job"} text={"Experience"} />
                        <hr />
                        <InfoItem src={todo} mainText={"500+ Projects"} text={"Completed"} />
                        <hr />
                        <InfoItem src={headphones} mainText={"Support"} text={"Online 24/7"} />
                    </div>
                </div>
            </section>
            <section className='slider'>
                <div className="container slider__section">
                    <div className="itemss__main">
                        <span className="servis">
                            Services
                        </span><br />
                        <span className="wide">
                            I Provide Wide <br /> Range Of Digital <br /> Services
                        </span>
                        <div className="btn__arrows">
                            <Btn id={"arrows"} text={"❮"} />
                            <Btn id={"arrows"} text={"❯"} />
                        </div>
                    </div>
                    {
                        itemsInfo.map(item => (
                            <ItemInfo item={item} />
                        ))
                    }
                </div>
            </section>
            <section className="static">
                <div className="container static__section">
                    <h5 className="choose">
                        Why Choose Me
                    </h5>
                    <span className="area">
                        My Experience Area
                    </span>
                    <div className="statistics">
                        {
                            statics.map(item => (
                                <Statistic item={item} />
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="grid__images">
                <div className="container grid__images__section">
                    <h6 className="portfolio">Portfolio</h6>
                    <h6 className="works">My Amazing Works</h6> <br />
                    <ul>
                        <Links text="All" />
                        <Links text="Youtube" />
                        <Links text="Vimeo" />
                        <Links text="Soundcloud" />
                        <Links text="Popup" />
                        <Links text="Details" />
                    </ul>
                </div>
                <div className="images">
                    <div className="section">
                        <img src="https://dora-react.vercel.app/images/works/1.png" alt="" />
                        <img src="https://dora-react.vercel.app/images/works/6.png" alt="" />
                    </div>
                    <div className="section1">
                        <div className="section2">
                            <img src="https://dora-react.vercel.app/images/works/2.png" alt="" />
                            <img src="https://dora-react.vercel.app/images/works/5.png" alt="" />
                        </div>
                        <div className="section2">
                            <img src="https://dora-react.vercel.app/images/works/4.png" alt="" />
                            <img src="https://dora-react.vercel.app/images/works/3.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="programmers">
                <div className="container programmers__section">
                    <div className="slide">
                        <h6 className='client'>
                            Clients Are Satisfied For <br />
                            Our Work, View Feedback
                        </h6>
                        <div className="slide__btn">
                            <Btn id={"arrows"} text={"❮"} />
                            <Btn id={"arrows"} text={"❯"} />
                        </div>
                    </div>
                    <div className="pro">
                        {
                            programmers.map(item => (
                                <Programmer item={item} />
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="black">
                <div className="container black__section">
                    <h6 className="portfolio po">From My Blog</h6>
                    <h6 className="works1">Our Recent Updates, Blog, Tips, Tricks & More</h6> <br />
                    <div className="style">
                        {
                            style.map(item => (
                                <Style item={item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default App