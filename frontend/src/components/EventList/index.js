import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getEvents } from '../../store/events';

function EventList () {
    const events = useSelector( state => Object.values(state.events));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch]);

    const renderEvents = events.map(event =>{
        return (
            <li>
                {event.name} - Details: {event.details}
            </li>
        )
    })

    return (
        <ul>
            {renderEvents}
        </ul>
    )
}

export default EventList;
