import React, { Component } from 'react'
import './Contact.css';
class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
              <section>
            <div className="row">
                <h3 className="contact-header">Contact</h3>
                <p className="contact-sub">Contact Us</p>
            </div>
            <div className="row">
                <div className="col span-1-of-2">
                        <form>
                            
                      </form>
                </div>

                 <div className="col span-1-of-2">
                    
                </div>

            </div>
        </section>
        )
    }
}

export default Contact
