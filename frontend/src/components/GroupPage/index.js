import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getEvents } from '../../store/events';
import { useParams } from 'react-router-dom';
import EventCard from '../EventList/EventCard';

function GroupPage () {
    const events = useSelector( state => Object.values(state.events));
    const { groupId } = useParams();
    console.log("HERE!!!:", groupId);
    const group = useSelector( state => state.group[groupId]);
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
        <div>
            <div>{group.imageUrl}</div>
            <div>{group.name}</div>
            <div>{group.city}, {group.state}</div>
            <div>{group.about}</div>
            <ul>
                {renderEvents}
            </ul>
        </div>
    )
}

export default GroupPage;
