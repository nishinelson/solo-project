import '../GroupList/GroupCard.css'

function EventCard ({event}) {
// console.log("HERE!!!", event)

    return (
        <div className='card'>
            <img className='cardPic' src={event.imageUrl} alt='something'/>
            <div className='cardContent'>
                <div className='cardLocation'>{event.date}</div>
                <div className='cardName'>{event.name}</div>
                <div className='cardDetails'>{event.about}</div>
            </div>
        </div>
    )
}

export default EventCard;
