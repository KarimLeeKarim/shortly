import React from 'react'

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <section className="footer">
            <div className="containerFooter">
                <div className="containerFooter__word">
                    <p className="word">Shortly</p>
                </div>
                <div className="links">
                    <div className="links__divs">
                        <p className="divsP">Features</p>
                        <span>Link Shortening</span>
                        <span>Branded Links</span>
                        <span>Analytics</span>
                    </div>
                    <div className="links__divs">
                        <p className="divsP">Resources</p>
                        <span>Blog</span>
                        <span>Developers</span>
                        <span>Support</span>
                    </div>
                    <div className="links__divs">
                        <p className="divsP">Company</p>
                        <span>About</span>
                        <span>Our Team</span>
                        <span>Careers</span>
                        <span>Contact</span>
                    </div>
                </div>
                <div className="containerFooter__icons">
                    <FacebookIcon className="fb" />
                    <TwitterIcon className="tw" />
                    <PinterestIcon className="pi" />
                    <InstagramIcon className="in" />
                </div>












            </div>
        </section>
    )
}

export default Footer;
