import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGroups } from '../../store/groups';
import GroupsCard from './GroupCard';
import { NavLink } from 'react-router-dom';

function GroupList () {
    const groups = useSelector(state => Object.values(state.groups));
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGroups(user.city, user.state))
    }, [dispatch]);

    const renderGroups = () => {
        return groups.map(group =>{
            return (
                <NavLink to={`/groups/${group.id}`}>
                   <GroupsCard group={group}/>
                </NavLink>
            )
        });
    };

    return (
        <div>
          {renderGroups()}
        </div>
    )
}

export default GroupList;
