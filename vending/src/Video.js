import react from 'react';
import './video.css';
function Video(){
    return(
        <div>
        <div id='how'><h1>HOW IT WORKS?</h1></div>
            <div id='video'>
                <div id='videoleft'>
                    <video width="320" height="240" autoplay>
                    <source src="backgroundvideo.mp4" type="video/mp4"></source>
                    </video>
                </div>
                <div id='videoright'>
                <button>1</button>
                <p>Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor.</p></div>
            </div>
            <div id='video'>
                <div id='videoleft'>
                <button>2</button>
                <p>Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor.</p>
                </div>
                <div id='videoright'>
                <video width="320" height="240" autoplay>
                    <source src="backgroundvideo.mp4" type="video/mp4"></source>
                    </video>
                </div>
            </div>
            <div id='video'>
                <div id='videoleft'>
                <video width="320" height="240" autoplay>
                    <source src="backgroundvideo.mp4" type="video/mp4"></source>
                    </video>
                </div>
                <div id='videoright'>
                <button>3</button>
                <p>Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor.</p></div>
            </div>
            <div id='video'>
                <div id='videoleft'>
                <button>4</button>
                <p>Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor.</p></div>
                <div id='videoright'>
                <video width="320" height="240" autoplay>
                    <source src="backgroundvideo.mp4" type="video/mp4"></source>
                    </video>
                </div>
            </div>
            <div className='videoend'>
                <h1>TRUSTED BY TOP BRANDS</h1>
                <p>Developed a network among growing startups, 
                <br></br>MNCs, hospitals, educational institutes and 
                <br></br>many more...</p>
            </div>
        </div>
    );
}
export default Video;