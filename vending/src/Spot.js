import './Spot.css';
function Spot(){
    return(
        <div id='spot'>
            <div id='spotlight'>
            <h1 className="hoverable-element">SPOTLIGHTS</h1>
            <p className="hoverable-element">Powering India's Future: <span>24buy7</span> <br></br>
               Gets the Nod from....</p>
            <img className="hoverable-element" src='startup.png' alt='not available'/>
            <p className="hoverable-element">
                We're proud to announce that <span>24buy7</span> has been officially recognized and funded by the Startup India initiative. This government-backed program supports innovative enterprises driving economic growth and job creation in India. This recognition validates our mission and potential, positioning us among the country's most promising startups. The funding and support from Startup India will accelerate our growth and help us make a bigger impact in business sector. We're excited to leverage this opportunity to further innovate and contribute to India's entrepreneurial ecosystem.
            </p>
        </div>
        </div>
    );
}
export default Spot;