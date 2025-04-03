import React, { useEffect, useState } from 'react'

import closeBtn from '../Images/closeBtn.svg';
import blueBubble from '../Images/walking blue speech bubble.svg';
import maps from '../Images/logos_google-maps.svg'
import insta from '../Images/skill-icons_instagram.svg'
import facebook from '../Images/logos_facebook.svg'
import feedback from '../Images/feedback.svg'

function ReviewUs({onClose, handleFeedbackClick}) {
    const [isOpen, setIsOpen] = useState(false);
    const [startY, setStartY] = useState(null);
    
    useEffect(() => {
        setIsOpen(true);
    }, []);
    
    const handleClose = () => {
        setIsOpen(false);
        setTimeout(() => {
            onClose(false);
        }, 400);
    };

    const handleTouchStart = (e) => {
        setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
        if (!startY) return;
        const endY = e.touches[0].clientY;
        const diff = endY - startY;
        
        if (diff > 50) { // Adjust threshold for swipe sensitivity
            handleClose(); // Close ReviewUs on downward swipe
        }
    };

    return (
        <div 
            className={`fd rvm ${isOpen ? "active" : ""}`} 
            // onTouchStart={handleTouchStart} 
            // onTouchMove={handleTouchMove}
        >
            <button className="fd-close" onClick={handleClose}>
                <img src={closeBtn} alt="close button" />
            </button>
            <div className="fd-content reviewMain">
                <div className="pfTop">
                    <div className="pftDesc">
                        <h1>
                            Loved it? <br /> Tell us!
                        </h1>
                        <p>Your feedback makes our <br /> menu even tastier! 🍕</p>
                    </div>
                    <img src={blueBubble} alt="blueBubble" />
                </div>
                <div className="pfInput rvBtns">
                    <button>Review Us on Google Maps <img src={maps} alt="maps" /></button>
                    <button>Follow Us on Instagram <img src={insta} alt="maps" /></button>
                    <button>Leave a like on Facebook <img src={facebook} alt="maps" /></button>
                    <button onClick={() => { handleFeedbackClick(true); handleClose(); }}>Feedback <img src={feedback} alt="maps" /></button>
                </div>
            </div>
        </div>
    );
}

export default ReviewUs;
