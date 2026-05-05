import { useActionState } from "react";
const Signin = () => {
  const [error, submitAction, isPending] = useActionState(
    async (prevState, formData) => {
      const emailPasswordVars = {
        email: formData.get("email"),
        password: formData.get("password"),
      };
      console.log(emailPasswordVars);

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
          <p>Dont'have an account yet? Sign Up</p>
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
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
