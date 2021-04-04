import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getEvents } from '../../store/events';
import EventCard from './EventCard';
import { NavLink } from 'react-router-dom';

function EventList () {
    const events = useSelector( state => Object.values(state.events));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch]);

    const renderEvents = events.map(event =>{
        return (
            <NavLink to={`/events/${event.id}`}>
                <EventCard event={event}/>
            </NavLink>
        )
    })

    return (
        <div>
            {renderEvents}
        </div>
    )
}

export default EventList;
