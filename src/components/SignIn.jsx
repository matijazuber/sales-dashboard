import { useActionState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
const Signin = () => {
  const { signinUser } = useAuth();
  const navigate = useNavigate();
  const [error, submitAction, isPending] = useActionState(
    async (prevState, formData) => {
      const emailPasswordVars = {
        email: formData.get("email"),
        password: formData.get("password"),
      };

      const {
        success,
        data,
        error: signInError,
      } = await signinUser(emailPasswordVars.email, emailPasswordVars.password);

      if (signInError) {
        return new Error(signInError);
      }

      if (success && data?.session) {
        navigate("/dashboard");
        return null;
      }
      return null;
    },
    null,
  );
  return (
    <>
      <h1>Welcome to the Sales Login Dashboard</h1>
      <div>
        <form action={submitAction}>
          <h2>Sign in</h2>
          <p>
            Dont'have an account yet?<Link to="/signup"> Sign Up</Link>
          </p>
          <label htmlFor="email">Email</label>
          <input
            style={{ backgroundColor: "white", color: "black" }}
            type="email"
            name="email"
            id="email"
            placeholder=""
            required
          ></input>

          <label htmlFor="password">Password</label>
          <input
            style={{ backgroundColor: "white", color: "black" }}
            type="password"
            name="password"
            id="password"
          ></input>
          <br></br>
          <button style={{ marginTop: "20px" }} type="submit">
            {isPending ? "Signing in" : "Sign In"}
          </button>
          {error && (
            <div style={{ color: "red" }} id="signin-error" role="alert">
              {error.message}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Signin;
