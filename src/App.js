import "./App.css";
// import Header from "./components/Header";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Profile from "./Pages/Profile";
// import NotFound from "./Pages/NotFound";
// import Post from "./Pages/Post";
import { useState } from "react";
import ProtectedRoute from "./components/route/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  // const [login, setLogin] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header />
        <button onClick={() => setLogin(!login)}>
          {login ? "Logout" : "Login"}
        </button>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route
            path="/profile"
            element={login ? <Profile /> : <Navigate to="/" />}
          />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}

        <Route path="/" exact>
          <button onClick={() => setIsAuth(true)}>Login</button>
          <button onClick={() => setIsAuth(false)}>Logout</button>
          <Link to="/dashboard">Go to dashboard</Link>
        </Route>
        <ProtectedRoute
          path="/dashboard"
          component={Dashboard}
          isAuth={isAuth}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
