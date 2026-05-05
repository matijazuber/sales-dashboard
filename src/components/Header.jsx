import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const { signOutUser } = useAuth();
  const [error, setError] = useState("Failed to sign out");
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();

    const { success, error } = await signOutUser();
    if (success) {
      navigate("/");
    } else {
      setError(error.message);
    }
  };
  return (
    <>
      <header>
        <h1>
          <button onClick={handleSignOut}>Sign out</button>
          {error}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "8px" }}
          >
            <path
              d="M12 2v8M12 14v8M4.93 4.93l5.66 5.66M13.41 13.41l5.66 5.66M2 12h8M14 12h8M4.93 19.07l5.66-5.66M13.41 10.59l5.66-5.66"
              stroke="#29d952"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          Sales Team Dashboard
        </h1>
      </header>
    </>
  );
}

export default Header;
