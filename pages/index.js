import { useLogin } from "@/LoginContext";
import { useState } from "react";

export default function Home() {
  const { dispatch } = useLogin();

  const [username, setUsername] = useState();

  function handleOnChange(e) {
    setUsername(e.target.value);
  }

  function handleLogin() {
    dispatch({ type: "login", username });
    setUsername("")
  }
  
  function handleLogout() {
    dispatch({ type: "logout" });
  }

  return (
    <main>
      <h1>Login</h1>
      <input value={username} type="text" onChange={handleOnChange} />
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
    </main>
  );
}
