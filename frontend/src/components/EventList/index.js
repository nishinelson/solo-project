import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getEvents } from '../../store/events';
import EventCard from './EventCard';

function EventList () {
    const events = useSelector( state => Object.values(state.events));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch]);

    const renderEvents = events.map(event =>{
        return (
            <div>
                <EventCard event={event}/>
            </div>
        )
    })

    return (
        <ul>
            {renderEvents}
        </ul>
    )
}

export default EventList;
