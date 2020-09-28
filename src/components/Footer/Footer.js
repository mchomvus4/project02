import React from 'react'
import './Footer.css';
function Footer() {
    return (
        <section>
            <div className="row footer">
                <div className="col span-1-of-5">
                    <h3 className="logedesign-footer"><span className="logo">LOGO</span>&nbsp;<span className="design">DESIGN</span></h3> 
                    <p className="footer-one">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    
                </div>

                <div className="col span-1-of-5 camp-column">
                    <h3 className="company">COMPANY</h3> 
                    <p className="column-two">Career</p>
                    <p className="column-two">About Us</p>
                    <p className="column-two">Blog</p>
                    <p className="column-two">Press info</p>
                    <p className="column-two">Features</p>
                    <p className="column-two">Success</p>
                </div>

                <div className="col span-1-of-5">
                    <h3 className="travellers">TRAVELLERS</h3> 
                    <p className="column-three">Why Travellers</p>
                    <p className="column-three">Enterprise</p>
                    <p className="column-three">Customer Stories</p>
                    <p className="column-three">Pricing</p>
                    <p className="column-three">Security</p>
                  
                </div>

                <div className="col span-1-of-5">
                    <h3 className="quick-links">QUICK LINKS</h3> 
                    <p className="column-four">Home</p>
                    <p className="column-four">About Us</p>
                    <p className="column-four">Contact</p>
                    <p className="column-four">Reviews</p>
                </div>

                <div className="col span-1-of-5">
                    <h3 className="connect-with-us">CONNECT WITH US</h3> 
                    <p className="column-five">info@support.com</p>
                    <p className="column-five">+255 758 139 619</p>
                    <p className="column-five">33318 Dar es Salaam</p>
                    <p className="btn-subscribe">SUBSCRIBE NOW</p>
                    <form>
                        <input type="text"  placeholder="Your Email"/>
                    </form>
                </div>
                 <div className="footer-button">
                       <span className="developer">2020&copy;|Developed by Samwel Mchomvu from NOTTECH Lab</span> 
                </div>
               
            </div>
            
        </section>
    )
}

export default Footer
