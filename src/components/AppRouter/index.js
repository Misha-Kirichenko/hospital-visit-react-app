import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "../LoginForm";
import "./app.css";
import WithAuth from "../HOC/WithAuth";
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
              <Visits
                metaData={{
                  title: "Visits",
                  meta: { description: "Visits table" },
                }}
              />
            </WithAuth>
          }
        />
        <Route
          path="/login"
          exact
          element={
            <LoginForm
              metaData={{
                title: "Login",
                meta: { description: "Login to admin" },
              }}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
