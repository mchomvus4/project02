import React from 'react'
import './Destination.css';
import '../Grid.css';
import image2 from '../images/pc2.jpeg';
import image1 from '../images/image1.jpg';
import image3 from '../images/pc3.jpg';
import image4 from '../images/pc4.jpeg';
function Destination() {
    return (
        <section className="destination-section">
            <div className="row">
                <h3 className="destinaton">Destination</h3>
                <p className="top-destination">Top Destination</p>
            </div>
            <div className="row bg-images">
                <div className="col span-1-of-4 image">
                    <img src={image2} alt="second" className="second" />
                    
                  
                </div>

                <div className="col span-1-of-4 image">
                    <img src={image1} alt="second" className="second" />
                    
                </div>

                <div className="col span-1-of-4 image">
                    <img src={image3} alt="second" className="second" />
                     
                </div>

                <div className="col span-1-of-4 image">
                    <img src={image4} alt="second" className="second"/>
                     
                </div>

            </div>
        </section>
        
    )
}

export default Destination
