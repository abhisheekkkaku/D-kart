import React, { useState } from "react";

function Login(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName.length === 0 || lastName.length === 0) {
      setError(true);
    }
    if (firstName && lastName) {
      console.log("first Name:", firstName, "Last Name:", lastName);
    }
  };
  return (
    <>
      <form className="L-F" onSubmit={handleSubmit}>
        <div className="h5 bg-info text-white p-2 rounded text-center">
          LOGIN FORM
          <div className="text-secondary py-2">
            <input
              placeholder="First Name"
              className="rounded"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <h6>
            {error && firstName.length <= 0 ? (
              <label className="text-danger">First Name Can't be Empty </label>
            ) : (
              ""
            )}
          </h6>
          <div className="form-group">
            <input
              placeholder="Last Name"
              className="rounded"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <h6>
            {error && lastName.length <= 0 ? (
              <label className="text-danger">Last Name Can't be Empty </label>
            ) : (
              ""
            )}
          </h6>
          <div>
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
