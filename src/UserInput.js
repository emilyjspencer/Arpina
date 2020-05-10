import React from 'react';
import './UserInput.css';

const UserInput = () => {
    return (
        <div id="input">
            <label>City</label>
  <input type="text" name="city"  placeholder="Enter a city" />
  <br />
  <br />
  <button>Check the weather</button>
  </div>
    )
}



export default UserInput 