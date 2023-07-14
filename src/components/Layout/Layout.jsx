import React from "react";
import Links from '../links'
import Btn from '../btns'




function Layout(props) {
    return (
        <>
            <header>
                <div className="container cont__header">
                    <div className="header">
                        <div className="logo">
                            <img src="https://dora-react.vercel.app/images/logo.png" alt="" />
                        </div>
                        <ul className="header__ul">
                            <Links text={"Home"} />
                            <Links text={"Services"} />
                            <Links text={"Works"} />
                            <Links text={"Blog"} />
                            <Links text={"Contact"} />
                        </ul>
                        <Btn id={"btn"} text={"Hire Me"} />
                    </div>
                </div>
            </header>
            <main>
                {props.children}
            </main>
            <footer className='slava__bogu'>
                <section className="slava__bogu1">
                    <div className="container slava__bogu__section">
                        <div className="left">
                            <h6 className='con'>Let's Connect</h6>
                            <h6 className="monday">Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</h6>
                            <div className="cets">
                                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/512/4701/4701482.png" alt="" />
                            </div>
                        </div>
                        <div className="left">
                            <h6 className="con">Let's message me and mack something together</h6>
                            <input type="text" name="" id="name" placeholder='Your Name' />
                            <input type="text" name="" id="email" placeholder='Your Email' />
                            <input type="text" name="" id="message" placeholder='Message' />
                            <Btn id={"btn"} text={"Send Message"} />
                        </div>
                    </div>
                    <div className="lastDiv">
                        <h5 className='love'>Developed with love by <b>Codeefly</b> © 2023</h5>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Layout