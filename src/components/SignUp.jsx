import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <div className="sign-form-container">
        <form
          // action={}
          aria-label="Sign up form"
          aria-describedby="form-description"
        >
          <div>
            Use this form to create a new account. Enter your email and
            password.
          </div>

          <h2>Sign up today!</h2>
          <p>
            Already have an account?<Link to="/"> Sign in</Link>
          </p>

          <label htmlFor="email">Email</label>
          <input
            style={{ backgroundColor: "white", color: "black" }}
            type="email"
            name="email"
            id="email"
            placeholder=""
            required
          />

          <label htmlFor="password">Password</label>
          <input
            style={{ backgroundColor: "white", color: "black" }}
            type="password"
            name="password"
            id="password"
            placeholder=""
            required
          />
          <br></br>
          <button
            type="submit"
            className="form-button"
            //disabled=
            //aria-busy=
          >
            Sign Up
            {/*'Signing up...' when pending*/}
          </button>

          {/* Error message */}
        </form>
      </div>
    </>
  );
};

export default Signup;
