import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import "./Main.css"

const Main = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])
    return (
        <div>
            <h2>This is Main</h2>
            <h4>Volunteers Activities: {volunteers.length}</h4>
            <div className='activity-container'>
            {
                volunteers.map(activity=><Activity
                key={activity.taskId}
                activity={activity}
                ></Activity>)
            }
            </div>
        </div>
    );
};

export default Main;