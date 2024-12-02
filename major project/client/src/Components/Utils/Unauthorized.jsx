import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./unauth.css";
import useAuth from "../../Hooks/useAuth";

const Unauthorized = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  console.log("test", auth);

  const goBack = () => navigate(-1);

  return (
    <div className="auth-main">
      <div className="auth-container">
        <div className="title">Oops!</div>
        <div className="subtitle">403 Permission Denied</div>
        <p className="content">Sorry you don't have an access to this page</p>
        <div className="back-button">
          <Button variant="outlined" onClick={goBack}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
