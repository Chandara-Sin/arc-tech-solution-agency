import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";

function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;

    signIn("member", () => {
      navigate("/users", { replace: true });
    });
  }

  return (
    <div>
      <p>You must log in to view the page at</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default SignIn;
