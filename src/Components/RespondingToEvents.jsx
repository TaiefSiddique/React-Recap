
const RespondingToEvents = () => {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
};

export default RespondingToEvents;