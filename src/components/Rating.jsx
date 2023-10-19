import { useState } from "react";
import starIcon from '../images/icon-star.svg';
import resultsImage from '../images/illustration-thank-you.svg';
import '../styles/Rating.css';

function Rating() {
    const [rating, setRating] = useState();
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleClick(number) {
        setRating(number);
    }

    function handleSubmit() {
        if (!rating) {
            console.log('no rating submitted');
        } else {
            setIsSubmitted(true);
        }
    }

    return (
        <div className="rating-container">
            {isSubmitted ? (
                <div className="results-container">
                    <div className="results-image"><img src={resultsImage} className="results-image" /></div>
                    <div className="rating-result-container">You selected {rating} out of 5</div>
                    <div className="result-title">Thank you!</div>
                    <div className="result-subtitle">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</div>
                </div>
            ) : (
                <div className="rating-selection-container">
                    <div className="star-container">
                        <img src={starIcon} className="star-image" />
                    </div>
                    <div className="selection-title">How did we do?</div>
                    <div className="selection-subtitle">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</div>
                    <div className="number-row">
                        <button className={`number-button ${rating === 1 ? "number-button-selected" : ""}`} onClick={() => handleClick(1)}>1</button>
                        <button className={`number-button ${rating === 2 ? "number-button-selected" : ""}`} onClick={() => handleClick(2)}>2</button>
                        <button className={`number-button ${rating === 3 ? "number-button-selected" : ""}`} onClick={() => handleClick(3)}>3</button>
                        <button className={`number-button ${rating === 4 ? "number-button-selected" : ""}`} onClick={() => handleClick(4)}>4</button>
                        <button className={`number-button ${rating === 5 ? "number-button-selected" : ""}`} onClick={() => handleClick(5)}>5</button>
                    </div>
                    <button className="submit-button" onClick={handleSubmit}>SUBMIT</button>
                </div>
            )}
        </div>
    );
}

export default Rating;
