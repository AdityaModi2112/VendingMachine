import react from 'react';
import "./Note.css";
import Note from "./Note.js";
import notecontent from "./notecontent.js";
function Feeback(){
    return(
        <div className='feed'>
        <div id='feedback'>
            <h1>WHAT OUR CUSTOMERS SAY?</h1>
            <p>All time favourite among customers. Customer<br></br> growth rate increasing exponentially.</p>
        </div>
        <div className="scrollimg">
            {notecontent.map((notes)=>(<Note b={notes}/>))}
        </div>
        <div id='postbutton'><button id='post'>Post a Feedback →</button></div>
        </div>
    );
}
export default Feeback;

