import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getOneEvent } from '../../store/events';
import { useParams } from 'react-router-dom';
import { joinEvent } from '../../store/rsvps';
import './EventPage.css';

function EventPage () {
    const { id } = useParams();
    const event = useSelector(state => state.events[id]) || {};
    const sessionUser = useSelector(state => state.session.user) || {};
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneEvent(id))
    }, [dispatch]);


    let attendees = [];
    let rsvpsObj = {};

    if(event.Users){
        attendees = event.Users;
        rsvpsObj = attendees.reduce((newRSVP, rsvp) =>{
            return {
                ...newRSVP,
                [rsvp.id]: rsvp
            }
        }, {})
    }

    const handleSubmit = e => {
        // e.preventDefault();
        //look into how to rerender
        const userId = sessionUser.id;
        dispatch(joinEvent(userId, id))
    }

    let form = "";

    if(!rsvpsObj[sessionUser.id]){

            form = <form onSubmit={handleSubmit}><button type='submit'>Embark on this Quest!</button></form>

    }

    return(
        <div className='event-container'>
            <div className='cont'>
                <div className='name'>{event.name}</div>
                <img className='img' src={event.imageUrl} alt='eventImage'/>
                <div>{event.date}</div>
                <div>{event.details}</div>
                <div>{event.city}, {event.state}</div>
                <div>{event.address}</div>
                <div>Attendees: {attendees.length}</div>
                <div>{form}</div>
            </div>

        </div>
    )
}

export default EventPage;
