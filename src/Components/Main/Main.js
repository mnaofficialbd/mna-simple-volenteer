import React from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';
import "./Main.css"

const Main = () => {
    const [volunteers] = useVolunteers();

    const handleSearchChange = (event) => {
        console.log(event.target.value);
    }
    return (
        <div>
            <h4>Volunteers Activities: {volunteers.length}</h4>
            <div style={{ 'margin': '20px' }}>
                <input onChange={handleSearchChange} type="text" placeholder='Search' />
            </div>
            <div className='activity-container'>
                {
                    volunteers.map(activity => <Activity
                        key={activity.taskId}
                        activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Main;