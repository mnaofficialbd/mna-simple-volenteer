import React from 'react';
import useVolunteers from '../../hooks/useVolunteers';

const Volunteers = () => {
   const [volunteers, setVolunteers] =useVolunteers();
    return (
        <div>
            <h2>Volunteers</h2>
        </div>
    );
};

export default Volunteers;