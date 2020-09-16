import React, { Component } from 'react'
import './Contact.css';
import contact from '../images/contact.png'
class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
              <section className="section-form">
            <div className="row">
                <h3 className="contact-header">Contact</h3>
                <p className="contact-sub">Contact Us</p>
            </div>
            <div className="row">
                <div className="col span-1-of-2">
                        <form>
                            <div className="contact-form">
                            <div>
                            <input type ="text" name="fname" id="name" placeholder="Full Name" required/>
                            </div>
                            <div>
                            <input type ="text" name="username" id="name" placeholder="User Name" required/>
                            </div>
                            <div>
                            <input type ="text" name="number" id="name" placeholder="Phone Number" required/>
                            </div>
                            <div>
                                <textarea col="10" row="10" name="message" placeholder="Message"></textarea>
                                <input type ="submit" value="SUBMIT"/>
                                </div>
                            </div>
                            
                      </form>
                </div>

                 <div className="col span-1-of-2">
                    <img src={contact} alt="contact-form"/>
                </div>

            </div>
        </section>
        )
    }
}

export default Contact
