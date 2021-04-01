import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGroups } from '../../store/groups';

function GroupList () {
    const groups = useSelector(state => state.groups)
    console.log("groups:", groups);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGroups())
    }, [dispatch]);

    const renderGroups = () => {
        return Object.values(groups).map(group =>{
            return (
                <li>
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
