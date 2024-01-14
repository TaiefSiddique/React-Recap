
const Student = (props) => {
    const { id, name } = props.st;
    return (
        <div>
            <h1>{id}</h1>
            <h1>{name}</h1>

        </div>
    );
};

export default Student;