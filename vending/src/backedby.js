import react from 'react';
import './backedby.css';
function Backedby(){
    return(
        <div>
            <div className='backed'>
                <p>BACKED BY</p>
                <div className='backedimages'>
                    <img height={'100vh'} src='riidl.png'/>
                    <img height={'100vh'} src='startup.png'/>
                    <img height={'100vh'} src='msis.png'/>
                    <img height={'100vh'} src='dpiit.png'/>
                </div>
            </div>
        </div>
    );
}
export default Backedby;