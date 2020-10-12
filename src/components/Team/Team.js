import React from 'react'
import './Team.css';
import '../Grid.css';
import team from '../images/team4.jpg';
import 'font-awesome/css/font-awesome.min.css';
function Team() {
    return (
        <section className="section-team">
             <div className="row">
                <h3 className="team-heading">About us</h3>
                <p className="top-team">We are experienced team</p>
            </div>
            <div className="row content">
                <div className="col span-1-of-2">
                 <img src={team} alt="Team" className="my-team"/>
               
                </div>
                <div className="col span-1-of-2">
                    <p className="lorem-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan quis orci in sagittis. Ut dolor mauris, tempus quis vestibulum non, feugiat non ipsum. Mauris euismod vulputate neque sit amet lobortis. Vivamus scelerisque at tellus dictum consectetur. Etiam suscipit vehicula tortor et aliquet.</p>
                      <a className="btn-btn-readmore" href ="#readmore">ReadMore</a>
                </div>
            </div>
            <div className="row sub-team">
                <div className="col span-1-of-3">
                    <h4><i className="fa fa-twitter social "></i><span className="guide">1000+ Local Guide</span></h4>
                    <p className="sub-team-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                 <div className="col span-1-of-3">
                    <h4><i className="fa fa-instagram social"></i><span className="locator">Experienced Locator</span></h4>
                    <p className="sub-team-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                 <div className="col span-1-of-3">
                    <h4><i className="fa fa-facebook-f social"></i><span className="client">96% Happy Clients</span></h4>
                    <p className="sub-team-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
            </div>
        </section>
    )
}

export default Team
