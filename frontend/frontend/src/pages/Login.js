function Login() {

  const handleLogin = () => {
    window.open(
      "http://localhost:5000/auth/google",
      "_self"
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        onClick={handleLogin}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Login With Google
      </button>
    </div>
  );
}

export default Login;