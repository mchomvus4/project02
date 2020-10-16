import React from 'react'
import './Activity.css';
import '../Grid.css';
import activity01 from '../images/activity01.jpg';
import activity02 from '../images/activity02.jpg';
import activity03 from '../images/activity03.jpg';
function Activity() {
    return (
        <section className="section-activities">
            <div className="row">
                <h3 className="activity">Activities</h3>
                <p className="top-activity">Trending Activities</p>
            </div>
            <div className="row card-section">
                <div className="col span-1-of-3 bg-card">
                    <img src={activity01} alt="activity01" className="activities-img" />
                    <div>
                        <p className="activity-place"><i className="fa fa-map-marker icon-map"></i><span className="mimi">Alaska AMERICA</span> </p>
                        <p className="lorem-page">There are many variations of passages of Lorem </p>
                        <p className="ipsum">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    {/* <div className="booking">
                     <p><span className="price">$250.00</span><span><a className="btn-btn-activity" href ="#booknow">Book now</a></span></p>
                    </div> */}
                </div>

                <div className="col span-1-of-3 bg-card">
                    <img src={activity02} alt="activity02" className="activities-img" />
                    <div>
                        <p className="activity-place"><i className="fa fa-map-marker icon-map"></i><span className="mimi">Marangu TANZANIA</span> </p>
                        <p className="lorem-page">There are many variations of passages of Lorem </p>
                         <p className="ipsum">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    {/* <div className="booking">
                       <span className="price">$250.00</span><span><a className="btn-btn-activity" href ="#booknow">Book now</a></span>
                    </div> */}
                </div>

                <div className="col span-1-of-3 bg-card">
                    <img src={activity03} alt="activity03" className="activities-img" />
                    <div>
                        <p className="activity-place"><i className="fa fa-map-marker icon-map"></i><span className="mimi">London ENGLAND</span> </p>
                        <p className="lorem-page">There are many variations of passages of Lorem</p>
                         <p className="ipsum">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    {/* <div className="booking">
                       <span className="price">$250.00</span><span><a className="btn-btn-activity" href ="#booknow">Book now</a></span>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Activity
