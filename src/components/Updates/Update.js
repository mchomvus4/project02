import React from 'react'
import './Update.css';
import '../Grid.css';
import 'font-awesome/css/font-awesome.min.css';
function Update() {
    return (
        <section className="section-update">
           <div className="row news-letter">
                <h3 className="updates">Connect with us</h3>
                <p className="news-update">Get updates & more</p>
                <div className="email">
                    <i className="fa fa-facebook email"></i>
                    <input className="input-field" type="email"/>

                </div>
            </div>
           
        </section>
    )
}

export default Update
