import React from 'react';

const FormComponent = (props) => {
  return (
    <main>
      <form>
        <input
          value={props.firstName}
          type="text"
          name="firstName"
          placeholder="first name"
          onChange={props.handleChange} />
        <br />

        <input 
          value={props.lastName} 
          type="text" 
          name="lastName" 
          placeholder="last name"
          onChange={props.handleChange} />
        <br />

        <input 
          value={props.age} 
          type="number" 
          name="age" 
          placeholder="age"
          onChange={props.handleChange} />
        <br />

        <label>
          <input 
            type="radio" 
            name="gender" 
            value="male"
            checked={props.gender === "male"}
            onChange={props.handleChange} /> male
        </label>
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="female"
            checked={props.gender === "female"}
            onChange={props.handleChange} /> female
        </label>
        <br />

        <select value={props.destination} name="destination" onChange={props.handleChange}>
          <option value="">Please choose a destination</option>
          <option value="germany">germany</option>
          <option value="spain">spain</option>
          <option value="norway">norway</option>
          <option value="france">france</option>
        </select>
        <br />

        <label>
          <input 
          type="checkbox"
          name="isVegan"
          onChange={props.handleChange}
          checked={props.dietaryRestrictions.isVegan} /> Vegan?
        </label>
        <br />
        <label>
          <input 
          type="checkbox"
          name="isKosher"
          onChange={props.handleChange}
          checked={props.dietaryRestrictions.isKosher} /> Kosher?
        </label>
        <br />
        <label>
          <input 
          type="checkbox"
          name="isLactoseFree"
          onChange={props.handleChange}
          checked={props.dietaryRestrictions.isLactoseFree} /> Lactose Free?
        </label>
        <br />

        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>your name: {props.firstName} {props.lastName}</p>
      <p>your age: {props.age}</p>
      <p>your gender: {props.gender}</p>
      <p>your destination: {props.destination}</p>
      <p>
        Your dietary restrictions:<br />
        Vegan: {props.dietaryRestrictions.isVegan ? "yes" : "no"}<br />
        Kosher: {props.dietaryRestrictions.isKosher ? "yes" : "no"}<br />
        Lactose Free: {props.dietaryRestrictions.isLactoseFree ? "yes" : "no"}
      </p>

    </main>
  )
}

export default FormComponent;