import React from 'react'
import './Team.css';
import '../Grid.css';
import team from '../images/team.jpg';
import 'font-awesome/css/font-awesome.min.css';
function Team() {
    return (
        <section className="section-team">
             <div className="row">
                <h3 className="destinaton">About us</h3>
                <p className="top-destination">We are experienced team</p>
            </div>
            <div className="row bg-color">
                <div className="col span-1-of-2">
                    <img src={team} alt="team" className="team"/>
                </div>
                <div className="col span-1-of-2 bg">
                    <p className="lorem-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan quis orci in sagittis. Ut dolor mauris, tempus quis vestibulum non, feugiat non ipsum. Mauris euismod vulputate neque sit amet lobortis. Vivamus scelerisque at tellus dictum consectetur. Etiam suscipit vehicula tortor et aliquet. Etiam dapibus, est sit amet mollis pellentesque, risus ipsum commodo quam, non luctus arcu risus eleifend justo. Morbi bibendum dictum ipsum ut pulvinar.</p>
                      <a className="btn-btn-readmore" href ="#">ReadMore</a>
                </div>
            </div>
            <div className="row sub-team">
                <div className="col span-1-of-3">
                    <h4><i className="fa fa-twitter social"></i>1000+ Local Guide</h4>
                    <p className="sub-team-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                 <div className="col span-1-of-3">
                    <h4><i className="fa fa-instagram social"></i>Exh4erienced Locator</h4>
                    <p className="sub-team-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                 <div className="col span-1-of-3">
                    <h4><i className="fa fa-facebook-f social"></i>96% Happy Clients</h4>
                    <p className="sub-team-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
            </div>
        </section>
    )
}

export default Team
