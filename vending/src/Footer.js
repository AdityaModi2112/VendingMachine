import react from 'react';
import './footer.css'
function Footer(){
    return(
        <div id='foot'>
            <div id='footer'>
            <div id='footerleft'>
                <h3>Quick links</h3>
                <div>
                    <a href="">Home</a>
                    <a href="">Backed By</a>
                    <a href="">Blogs</a>
                    <a href="">About us</a>
                    <a href="">Partnerships</a>
                    <a href="">FAQs</a>
                    <a href="">Contact</a>
                </div>
                <h3>Categories</h3>
                <div>
                    <a href="">Office</a>
                    <a href="">Hostipals</a>
                    <a href="">Educational Institutions</a>
                    <a href="">Stationary</a>
                    <a href="">Gym</a>
                    <a href="">Hostel</a>
                    <a href="">Mails</a>
                </div>
                <div>
                    <p><img src='location.png'/> Appen your address here</p>
                    <p><img src='location.png'/> info@gmail.com</p>
                    <p><img src='location.png'/>+919999999999</p>
                </div>
            </div>
            <div id="footerright">
                <h3>Social Media Links</h3>
                <p><img src='location.png'/><img src='location.png'/><img src='location.png'/><img src='location.png'/><img src='location.png'/><img src='location.png'/></p>
                Terms and Conditions 
                <br></br>
                <br></br>Privacy Policy
            </div>
        </div>
        <p id='footp'>Copyright © 2022 24buy7</p>
        </div>
    );
}
export default Footer;