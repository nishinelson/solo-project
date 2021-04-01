import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGroups } from '../../store/groups';

function GroupList () {
    const groups = useSelector(state => Object.values(state.groups))
    console.log("groups:", groups);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGroups())
    }, [dispatch]);

    const renderGroups = () => {
        return groups.map(group =>{
            return (
                <li key={group.id}>
                    {group.name} - Description: {group.about}
                </li>
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
