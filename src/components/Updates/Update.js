import React from 'react'
import './Update.css';
import '../Grid.css';
function Update() {
    return (
        <section className="section-update">
           <div className="row news-letter">
                <h3 className="updates">Connect with us</h3>
                <p className="news-update">Get updates & more</p>
                <div className="email input-icons">
                    <input className="input-field" type="email" placeholder="Your Email" />
                    <i class="fa fa-envelope icon fa-3x"></i> 

                </div>
            </div>
           
        </section>
    )
}

export default Update
