import react from 'react';
import "./Intro.css"
function Intro(){
    return(
        <div>
            <div id='intro'>
                <div id='introleft'>
                    <div id='d1'><h1>SAVE TIME,</h1></div>
                    <div id='d2'><h1>SAVE MONEY</h1> with</div>
                    <div id='d3'>24buy7 <h1>Vending Machines.</h1></div>
                    <div id='b'>
                        <button id='b2'>Reach out to us!</button>
                        <button id='b2'>Learn More!</button>
                    </div>
                </div>
                <div id='introright'><img src='pic1.png'/></div>
            </div>
        </div>
    );
}
export default Intro;