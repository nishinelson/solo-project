import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGroups } from '../../store/groups';
import GroupsCard from './GroupCard';
import { NavLink } from 'react-router-dom';

function GroupList () {
    const groups = useSelector(state => Object.values(state.groups))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGroups())
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
        <ul>
          {renderGroups()}
        </ul>
    )
}

export default GroupList;
