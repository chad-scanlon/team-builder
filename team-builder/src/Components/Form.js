import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: tan;
`;

const StyledLabel = styled.div`
  color: dodger-blue;
`;

const initialTeam = [
  {
    id: 0,
    fname: "Michael",
    lname: "Scott",
    email: "mscott@dmifflin.com",
    role: "Regional Manager",
  },
  {
    id: 1,
    fname: "Dwight",
    lname: "Schrute",
    email: "dschrute@dmifflin.com",
    role: "Assistant to the Regional Manager",
  },
  {
    id: 2,
    fname: "Pamela",
    lname: "Beasley",
    email: "pb@dmifflin.com",
    role: "Reception",
  },
  {
    id: 3,
    fname: "James",
    lname: "Halpert",
    email: "jh@dmifflin.com",
    role: "Sales",
  },
  {
    id: 4,
    fname: "Angela",
    lname: "Martin",
    email: "am@dmifflin.com",
    role: "Accounting",
  },
];
function Form() {
  const [team, setTeam] = useState(initialTeam);
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    email: "",
    role: "",
  });

  const onInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newMember = {
      id: Date.now(),
      fname: formValues.fname,
      lname: formValues.lname,
      email: formValues.email,
      role: formValues.role,
    };
    setTeam([...team, newMember]);
  };
  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <label>
          {" "}
          First Name
          <input
            onChange={onInputChange}
            value={formValues.fname}
            name="fname"
            type="text"
            placeholder="first name"
          />
        </label>
        <br />
        <label>
          {" "}
          Last Name
          <input
            onChange={onInputChange}
            value={formValues.lname}
            name="lname"
            type="text"
            placeholder="last name"
          />
        </label>
        <br />
        <label>
          {" "}
          Email Address
          <input
            onChange={onInputChange}
            value={formValues.email}
            name="email"
            type="email"
            placeholder="email"
          />
        </label>
        <br />
        <label>
          {" "}
          Role
          <input
            onChange={onInputChange}
            value={formValues.role}
            name="role"
            type="text"
            placeholder="role"
          />
        </label>
        <br />
        <StyledButton type="submit">Submit</StyledButton>
      </form>
      <h1>The Team</h1>
      {team.map((tm) => (
        <div key={tm.id}>
          {tm.fname} {tm.lname} {tm.email} {tm.role}
        </div>
      ))}
    </div>
  );
}

export default Form;
