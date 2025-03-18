import React, { useEffect, useState, useRef } from 'react';
import '../css/menuMain.css';
import Food from './Food';

function MenuMain({ isSelected, selectedSecondaryCategory, handleFoodClick, handleFoodId, foodClick, foodId }) {
    const texts = {
        food: "to eat? 🍇",
        bar: "to drink? 🍹",
        drinks: "to sip? ☕"
    };

    const [displayedText, setDisplayedText] = useState("");
    const [fullText, setFullText] = useState(texts.food);
    const [typingPhase, setTypingPhase] = useState("deleting"); // "deleting" or "typing"

    const topBarRef = useRef(null); // Reference to the topBar section

    useEffect(() => {
        setTypingPhase("deleting"); // Start deleting when isSelected changes
    }, [isSelected]);

    useEffect(() => {
        let index = typingPhase === "typing" ? 0 : fullText.length;
        let intervalSpeed = typingPhase === "typing" ? 100 : 50; // Typing is slower than deleting

        const interval = setInterval(() => {
            if (typingPhase === "deleting" && index >= 0) {
                setDisplayedText(fullText.slice(0, index));
                index--;
            } else if (typingPhase === "typing" && index < fullText.length) {
                setDisplayedText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
                if (typingPhase === "deleting") {
                    setDisplayedText(""); // Ensure it's empty before typing
                    setTimeout(() => {
                        setFullText(texts[isSelected] || "");
                        setTypingPhase("typing");
                    }, 200); // Small delay before retyping starts
                }
            }
        }, intervalSpeed);

        return () => clearInterval(interval);
    }, [typingPhase]);

    // Scroll to the topBar section when selectedSecondaryCategory changes
    useEffect(() => {
        if (selectedSecondaryCategory && topBarRef.current) {
            setTimeout(() => {
                topBarRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 300);
        }
    }, [selectedSecondaryCategory]);

    return (
        <div className='menuMain'>
            <div className="topBar" ref={topBarRef}>
                <p>What would you <br /> like <span>{displayedText}</span></p>
            </div>
            <Food isSelected={isSelected} selectedSecondaryCategory={selectedSecondaryCategory} handleFoodClick={handleFoodClick}
          handleFoodId={handleFoodId}
          foodClick={foodClick}
          foodId={foodId} />
        </div>
    );
}

export default MenuMain;
