import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../../store/events";
// import * as sessionActions from "../../store/session";

function CreateNewEvent (props){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [date, setDate] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState([]);

    const userId = sessionUser.id;
    let groupId;

    const handleSubmit = e => {
        e.preventDefault();
        return dispatch(createEvent({ name, details, imageUrl, date, city, state, address, userId, groupId }))
        // .catch(async (res) => {
        //   const data = await res.json();
        //   if (data && data.errors) setErrors(data.errors);
        // });
    }

    return (
     <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label>
        Event Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Details
        <input
          type="textarea"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        />
      </label>
      <label>
        Image URL
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>
      <label>
        Date
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        City
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>
      <label>
        State
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </label>
      <label>
        Address
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create Event</button>
    </form>
    )
}

export default CreateNewEvent;
