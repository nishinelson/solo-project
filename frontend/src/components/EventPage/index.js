import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getOneEvent } from '../../store/events';
import { useParams } from 'react-router-dom';
// import { getGroups } from '../../store/groups';

function EventPage () {
    const { id } = useParams();
    const event = useSelector(state => state.events[id]) || {};
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneEvent(id))
    }, [dispatch]);


    let attendees = [];

    if(event.Users){
        attendees = event.Users;
    }

    return(
        <div>
            <img src={event.imageUrl} alt='eventImage'/>
            <div>{event.date}</div>
            <div>{event.name}</div>
            <div>{event.details}</div>
            <div>{event.address}</div>
            <div>Attendees: {attendees.length}</div>
        </div>
    )
}

export default EventPage;
