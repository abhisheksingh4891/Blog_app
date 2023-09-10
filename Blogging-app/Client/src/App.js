import Home from "./pages/Home/Home";
import TopBar from "./components/Topbar/TopBar";
// import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <TopBar />
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/register" element={user ? <Home /> : <Register />}/>
          <Route path="/login" element={user ? <Home /> : <Login />}/>
          <Route path="/write" element={user ? <Write/> : <Register/>}/>
          <Route path="/settings" element={user ? <Settings /> : <Register />}/>
          <Route path="/post/:postId">
        </Route>
      </Routes>
    </>
  );
}

export default App;
