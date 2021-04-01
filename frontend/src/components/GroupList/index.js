import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGroups } from '../../store/groups';
import GroupsCard from './GroupCard';

function GroupList () {
    const groups = useSelector(state => Object.values(state.groups))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGroups())
    }, [dispatch]);

    const renderGroups = () => {
        return groups.map(group =>{
            return (
                <div>
                   <GroupsCard group={group}/>
                </div>
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
