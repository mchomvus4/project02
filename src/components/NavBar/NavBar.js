import React from 'react'
import './Style.css';
import '../Grid.css';
function NavBar() {
    return (
        <div>
            <body>
                <header>
                    <div className="travel-text-box">
                        <h2 className="travel">Travel Agency</h2>
                        <h1>Enjoy Your Journey with US</h1>
                        <p className="par-one">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan quis orci in sagittis.<br/> dolor mauris, tempus quis vestibulum non, feugiat non ipsum. </p>
                        <a className="btn-btn-contact" href ="#">Contact Us</a>
                    </div>
                </header>
            </body>
        </div>
    )
}

export default NavBar
