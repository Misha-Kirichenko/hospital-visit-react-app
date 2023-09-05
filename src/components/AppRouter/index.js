import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "../LoginForm";
import "./app.css";
import WithAuth from "../HOC/withAuth";
import Visits from "../Visits";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <WithAuth>
              <Visits />
            </WithAuth>
          }
        />
        <Route path="/login" exact element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
