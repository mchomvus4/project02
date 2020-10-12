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
            <div className="row contacts">
                <div className="col span-1-of-2">
                        <form className="myform">
                            <div className="contact-form">
                            <div>
                            <input type ="text" name="fname" id="name" placeholder="Full Name" required/>
                            </div>
                            <div>
                            <input type ="text" name="username" id="username" placeholder="User Name" required/>
                            </div>
                            <div>
                            <input type ="text" name="number" id="number" placeholder="Phone Number" required/>
                            </div>
                            <div>
                               <textarea cols="26" rows="5" placeholder="Message"></textarea>
                                </div>
                                <button className="btn-submit">SUBMIT</button>
                            </div>
                            
                      </form>
                </div>

                 <div className="col span-1-of-2">
                    <img src={contact} alt="contact-form" className="contact-img"/>
                </div>

            </div>
        </section>
        )
    }
}

export default Contact
