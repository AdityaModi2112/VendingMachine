import "./Intro.css"
function Intro(){
    return(
        <div>
            <div id='intro'>
                <div id='introleft'>
                    <div id='d1'><h1 className="hoverable-element">SAVE TIME,</h1></div>
                    <div id='d2'><h1 className="hoverable-element">SAVE MONEY</h1> with</div>
                    <div className="hoverable-element" id='d3'>24buy7 <h1 className="hoverable-element">Vending Machines.</h1></div>
                    <div id='b'>
                        <button className="hoverable-element" id='b2'>Reach out to us!</button>
                        <button className="hoverable-element" id='b2'>Learn More!</button>
                    </div>
                </div>
                <div className="hoverable-element" id='introright'><img src='pic1.png' alt='not available'/></div>
            </div>
        </div>
    );
}
export default Intro;