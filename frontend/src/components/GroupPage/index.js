import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getEvents } from '../../store/events';
import { useParams } from 'react-router-dom';
import EventCard from '../EventList/EventCard';
import { getGroups } from '../../store/groups';
import './GroupPage.css';

function GroupPage () {
    const events = useSelector( state => Object.values(state.events));
    const { id } = useParams();
    const group = useSelector( state => state.groups[id]) || {};
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents())
        dispatch(getGroups())
    }, [dispatch]);

    const renderEvents = events.map(event =>{
        return (
            <div>
                <EventCard event={event}/>
            </div>
        )
    })

    return (
        <div className='page'>
            <div className='top-half'>
                <img className='groupImg' src={group.imageUrl} alt='groupImg'/>
                <div className='info'>
                    <div className='name'>{group.name}</div>
                    <div>{group.city}, {group.state}</div>
                </div>
            </div>
            <div className='bottom-half'>
                <div className='about'>
                    <label>What we're all about:</label>
                    <div>{group.about}</div>
                </div>
                <div className='events'>
                    <label>Upcoming Events:</label>
                    <div>
                        {renderEvents}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupPage;
