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
        </>
    )
}

export default Layout