import React from 'react';

const UserOutput = (props) => {
    return(
        <div>
            <p>This is an output paragraph for { props.name } </p>
            <p>This is another paragraph.</p>
        </div>
    );
}

export default UserOutput;