import React from 'react'
import './Style.css';


function NavBar() {
    return (
        <div>
            
            <header>
                <nav>
                    <div className="row">
                        <h3 className="logedesign"><span className="logo">LOGO</span>&nbsp;<span className="design">DESIGN</span></h3>   
                        <ul className="main-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Blog</a></li>
                            <li className="login"><a href="#">Login</a></li>
                        </ul>
                       {/* <div>
                            <ul className="social-media">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                                <li><a href="#">{IoLogoInstagram}</a></li>
                            
                        </ul>
                       </div> */}
                    </div>
                </nav>
                    <div className="travel-text-box">
                        <h2 className="travel">Travel Agency</h2>
                        <h1>Enjoy Your Journey with US</h1>
                        <p className="par-one">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan quis orci in sagittis.<br/> dolor mauris, tempus quis vestibulum non, feugiat non ipsum. </p>
                        <a className="btn-btn-contact" href ="#">Contact Us</a>
                    </div>
                </header>
            
        </div>
    )
}

export default NavBar
