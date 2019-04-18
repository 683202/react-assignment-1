import React from 'react';


const UserInput = (props) => {
    return(
        <div>
            <input type="text" placeholder="Enter your text here" onChange = { props.change } value = { props.defaultName } ></input>
        </div>
    );
}

export default UserInput;