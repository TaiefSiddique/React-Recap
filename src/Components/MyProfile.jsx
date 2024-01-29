import PropTypes from 'prop-types';
const MyProfile = ({ name, imageUrl, imageSize }) => {
    console.log(name);
    return (
        <div>
            <h1>UserName is: {name}</h1>
            <img src={imageUrl} style={{
                width: imageSize,
                height: imageSize
            }}></img>

        </div>
    );
};

MyProfile.propTypes = {
    name: PropTypes.string, // Name should be a string and is required
    imageUrl: PropTypes.string, // imageUrl should be a string and is required
    imageSize: PropTypes.number, // imageSize should be a number and is required
};

export default MyProfile;