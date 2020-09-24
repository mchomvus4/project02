import React from 'react'
import './Testimonial.css';
// import '../Grid.css';
import testimone from '../images/sam.png';
function Testimonial() {
    return (
        <section className="testimonial-section">
             <div className="row">
                <h3 className="destinaton-testimonial">Testimonial</h3>
                <p className="top-testimonial">Client Testimonials</p>
            </div>
            <div className="row card-main">
                <div className="col span-1-of-3 card">
                    <div className="card-header">
                        <img src={testimone} alt="testimonial" className="testimonial-img"/>
                    </div>
                    <div className="card-body">
                        <p className="testimone-page">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    </div>
                    <div className="card-footer">
                        <span className="star">******</span><h3 className="name">Samwel Mchomvu</h3>

                       
                    </div>
                </div>
                <div className="col span-1-of-3 card">
                     <div className="card-header">
                        <img src={testimone} alt="testimonial" className="testimonial-img"/>
                    </div>
                    <div className="card-body">
                        <p className="testimone-page">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    </div>
                    <div className="card-footer">
                        <p><span className="star">******</span></p><h3 className="name">Samwel Mchomvu</h3>
                      
                    </div>
                </div>
                <div className="col span-1-of-3 card">
                     <div className="card-header">
                        <img src={testimone} alt="testimonial" className="testimonial-img"/>
                    </div>
                    <div className="card-body">
                        <p className="testimone-page">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    </div>
                    <div className="card-footer">
                          <p><span className="star">******</span></p><h3 className="name">Samwel Mchomvu</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
