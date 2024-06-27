import react from 'react';
import './intro.css';
function Intro(){
    return(
        <div className='introbg'>
            <div id='intro'>
                <p className='heading'>Bringing Convenience to Your Doorstep</p>
                <p className='intro'>Welcome to 24buy7, your trusted partner in delivering top-notch snack and beverage vending solutions. We cater to a diverse range of clients including corporate offices, schools, colleges, and industrial settings. Our goal is to ensure that you have access to your favourite snacks and drinks whenever you need them, 24/7.</p>
            </div>
            <div id='introbutton'>
                <div id='introb'>
                <button id='reachb'>Reach out us us!</button>
                <button id='learnb'>Learn More</button>
                </div>
            </div>
        </div>
    );
}
export default Intro;