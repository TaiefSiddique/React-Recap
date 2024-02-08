import { useState } from "react";
import { PropTypes } from 'prop-types';

const MyButton = ({ count, handleClick }) => {


    return <>
        <button onClick={handleClick}>Clicked {count}Times</button>
    </>
}

const CounterUpdatingTogether = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <MyButton count={count} handleClick={handleClick}></MyButton>
            <MyButton count={count} handleClick={handleClick}></MyButton>
        </div>
    );
};

export default CounterUpdatingTogether;

MyButton.propTypes = {
    count: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
};