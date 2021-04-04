import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getEvents } from '../../store/events';
import { useParams } from 'react-router-dom';
import { getGroups } from '../../store/groups';

function EventPage () {
    const { id } = useParams();
    const event = useSelector(state => state.events[id]) || {};
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch]);

    return(
        <div>
            <img src={event.imageUrl} alt='eventImage'/>
            <div>{event.date}</div>
            <div>{event.name}</div>
            <div>{event.details}</div>
            <div>{event.address}</div>
        </div>
    )
}

export default EventPage;
