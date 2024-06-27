import react from 'react';
import './backedby.css';
function Backedby(){
    return(
        <div>
            <div className='backed'>
                <p>BACKED BY</p>
                <div className='backedimages'>
                    <img src='riidl.png'/>
                    <img src='startup.png'/>
                    <img src='msis.png'/>
                    <img src='dpiit.png'/>
                </div>
            </div>
        </div>
    );
}
export default Backedby;