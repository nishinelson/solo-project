import './GroupCard.css'

function GroupsCard ({group}) {

    return (
        <div className='card'>
            <img className='cardPic' src={group.imageUrl} alt='something'/>
            <div className='cardContent'>
                <div className='cardName'>{group.name}</div>
                <div className='cardLocation'>{group.city}, {group.state}</div>
                <div className='cardDetails'>{group.about}</div>
            </div>
        </div>
    )
}

export default GroupsCard;
