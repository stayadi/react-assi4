import React, { useState } from "react";

// Maintaning State

const Form = () => {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [ques, setQues] = useState("Select an option");
  const [ans, setAns] = useState("");
  const [bio, setBio] = useState("");
  const [err, setErr] = useState({
    firstNameErr: "",
    lastNameErr: "",
    bioErr: "",
  });
  const [isdisabled, setIsdisabled] = useState(true);

  // Validating form data

  const handleInput = (e) => {
    var name = e.target.name;
    var value = e.target.value;

    // Validating first name

    if (name === "first-name") {
      if ((value.length < 3 || value.length > 15) && value.length > 0) {
        setErr({
          ...err,
          firstNameErr: "Length should be between 3 to 15 letters",
        });
      } else {
        setErr({ ...err, firstNameErr: "" });
      }
    }
    // Validating first name

    if (name === "last-name") {
      if ((value.length < 3 || value.length > 15) && value.length > 0) {
        setErr({
          ...err,
          lastNameErr: "Length should be between 3 to 15 letters",
        });
      } else {
        setErr({ ...err, lastNameErr: "" });
      }

    
    }

    // Bio Validation

    if (name === "bio") {
      if (value.length < 15 && value.length > 0) {
        setErr({
          ...err,
          bioErr: "length should be greater than 15 characters.",
        });
      } else {
        setErr({ ...err, bioErr: "" });
      }
    }

    if ((
        err.firstNameErr === "" &&
        err.lastNameErr === "" &&
        err.bioErr === "" ) &&
        (fname.length > 0 &&
        lname.length > 0 &&
        bio.length > 0 &&
        email.length > 0 &&
        ans.length > 0)
        ) {
        setIsdisabled(false);
        }
  };
  //   handling cancel button

  const handleCancel = () => {
    setfName("");
    setlName("");
    setEmail("");
    setQues("");
    setAns("");
    setBio("");
  };

  //   handling Submit button

  const handleSubmit = (e) => {
    console.log("firstName:", fname);
    console.log("lastName:", lname);
    console.log("Email:", email);
    console.log("SecurityQuestion:", ques);
    console.log("SecurityAnswer:", ans);
    console.log("Bio:", bio);
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form action="" className="form-control" onSubmit={handleSubmit}>
        <label>
          First Name:{" "}
          <span>
            <input
              type="text"
              name="first-name"
              value={fname}
              placeholder="Enter Your First Name"
              minLength="3"
              maxLength="15"
              onChange={(e) => setfName(e.target.value)}
              onKeyUp={handleInput}
            />
          </span>
        </label>
        <br />
        <p>{err.firstNameErr}</p>

        <label>
          Last Name:{" "}
          <span>
            <input
              type="text"
              name="last-name"
              value={lname}
              placeholder="Enter Your Last Name"
              minLength="3"
              maxLength="15"
              onChange={(e) => setlName(e.target.value)}
              onKeyUp={handleInput}
            />
          </span>
        </label>
        <br />
        <p>{err.lastNameErr}</p>

        <label>
          Email :{" "}
          <span>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter Your E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
        </label>
        <br />

        <label>Security Question: </label>
        <span>
          <select
            id="security-ques"
            value={ques}
            onChange={(e) => setQues(e.target.value)}
          >
            <option value="Select an option">{ques}</option>
            <option value="What is your mother's maiden name?">
              What is your mother's maiden name?
            </option>
            <option value="What was the name of your first pet?">
              What was the name of your first pet?
            </option>
            <option value="What was the name of your first school?">
              What was the name of your first school?
            </option>
          </select>
          <br />
          <br />

          <label>
            Security Answer :{" "}
            <span>
              <input
                type="text"
                name="answer"
                value={ans}
                placeholder="Answer"
                onChange={(e) => setAns(e.target.value)}
              />
            </span>
          </label>
          <br />
          <br />
          <label>
            Bio :
            <span>
              <textarea
                id="bio"
                name="bio"
                value={bio}
                placeholder="Write about yourself"
                onChange={(e) => setBio(e.target.value)}
                onKeyUp={handleInput}
                minLength="15"
                rows="4"
                cols="50"
              />
            </span>
          </label>
          <p>{err.bioErr}</p>
          <br />
        </span>

        <button type="submit"
          className="btn btn-primary"
          disabled={isdisabled}>
          Submit
        </button>
        <button type="button" className="btn btn-danger" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Form;
