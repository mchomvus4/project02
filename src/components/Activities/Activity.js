import React from 'react'
import './Activity.css';
import '../Grid.css';
import activity01 from '../images/activity01.jpg';
import activity02 from '../images/activity02.jpg';
import activity03 from '../images/activity03.jpg';
function Activity() {
    return (
        <section>
            <div className="row">
                <h3 className="destinaton">Activity</h3>
                <p className="top-destination">Trending Activities</p>
            </div>
            <div className="row">
                <div className="col span-1-of-3 bg-card">
                    <img src={activity01} alt="activity01" className="activities-img" />
                    <div>
                        <p className="activity-place">Alaska, Nouth AMERICA</p>
                        <p className="lorem-page">There are many variations of passages of Lorem </p>
                        <p className="ipsum">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="booking">
                      $250.0<span><a className="btn-btn-activity" href ="#booknow">Book now</a></span>
                    </div>
                </div>

                <div className="col span-1-of-3 bg-card">
                    <img src={activity02} alt="activity02" className="activities-img" />
                    <div>
                        <p className="activity-place">Marangu Waterfall, TANZANIA</p>
                        <p className="lorem-page">There are many variations of passages of Lorem </p>
                         <p className="ipsum">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="booking">
                      $250.0<span><a className="btn-btn-activity" href ="#booknow">Book now</a></span>
                    </div>
                </div>

                <div className="col span-1-of-3 bg-card">
                    <img src={activity03} alt="activity03" className="activities-img" />
                    <div>
                        <p className="activity-place">London ENGLAND</p>
                        <p className="lorem-page">There are many variations of passages of Lorem</p>
                         <p className="ipsum">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="booking">
                      $250.0<span><a className="btn-btn-activity" href ="#booknow">Book now</a></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activity
