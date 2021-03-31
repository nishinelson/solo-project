import { useSelector } from 'react-redux';

function GroupList () {
    const groups = useSelector(state => state.groups)
    console.log(groups)

    return (
        <ul>

        </ul>
    )
}

export default GroupList;
