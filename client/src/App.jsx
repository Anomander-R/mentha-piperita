/* eslint-disable react/no-unescaped-entities */
import { Route, Routes } from "react-router-dom";
import { Home, About, SignIn, SignUp, Projects, Dashboard } from "./pages/";

function NotFound() {
  return <>You have landed on a page that does not exist</>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
