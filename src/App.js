import { Link, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/dashboard");
      }}
    >
      Go to dashboard
    </button>
  );
}

function Dashboard() {
  return <div>Dashboard</div>;
}

export default App;
