import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getEvents } from '../../store/events';
import { useParams } from 'react-router-dom';
import EventCard from '../EventList/EventCard';
import { getGroups, getOneGroup } from '../../store/groups';
import { NavLink } from 'react-router-dom';
import './GroupPage.css';

function GroupPage () {
    const { id } = useParams();
    const group = useSelector( state => state.groups[id]) || {};
    // const events = useSelector( state => Object.values(state.events));
    // const events = useSelector(state => state.events.groupId)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents())
        // dispatch(getGroups())
        dispatch(getOneGroup(id))
    }, [dispatch]);

    // console.log("HERE!!!:", group);
    let renderEvents = [];
    if(group.Events) {
        renderEvents = group.Events.map(event =>{
            return (
                <NavLink to={`/events/${event.id}`}>
                    <EventCard event={event}/>
                </NavLink>
            )
        })
    }

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
