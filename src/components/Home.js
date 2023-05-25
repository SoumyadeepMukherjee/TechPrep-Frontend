const Home = () => {
  const handleLogin = () => {
    console.log("Login button clicked!");
  };

  return (
    <div className="home">
      <h1>Welcome to ExamPrep!</h1>
      <div className="home-content">
        <p>ExamPrep is a One-Stop Place to Prepare for various Tech Stacks</p>
        <p>Navigate to the Categories to view the available courses</p>
        <p>Login to attempt our quizzes</p>
        <button onClick={handleLogin} type="button" class="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
