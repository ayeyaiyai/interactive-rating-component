import { useState } from "react"
import starIcon from '../images/icon-star.svg';
import '../styles/Rating.css';

function Rating() {
    const [rating, setRating] = useState();

    function handleClick(number) {
        setRating(number);
    }

    return (
        <div className="rating-container">
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
                <button className="submit-button">SUBMIT</button>
            </div>
        </div>
    )
}

export default Rating;