import React, { useState } from "react";
import styled from "styled-components";

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
    setFormValues({
      fname: "",
      lname: "",
      email: "",
      role: "",
    });
  };

  const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: left;
    padding: 1%;
  `;
  const StyledName = styled.div`
    margin-right: 4px;
    font-size: 1.2rem;
    margin-bottom: 3px;
  `;
  const StyledInfo = styled.div`
    display: flex;
  `;

  const StyledTitle = styled.h1`
    display: flex;
    margin-top: 3%;
  `;

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

        <button type="submit">Submit</button>
      </form>
      <StyledTitle>The Team</StyledTitle>
      {team.map((tm) => (
        <StyledDiv key={tm.id}>
          <StyledName>
            {tm.fname} {tm.lname}
          </StyledName>
          <StyledInfo>{tm.email}</StyledInfo>
          <StyledInfo>{tm.role}</StyledInfo>
        </StyledDiv>
      ))}
    </div>
  );
}

export default Form;
