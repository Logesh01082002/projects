import CartPage from "./Components/Cart/CartPage";
import LoginPage from "./Components/Login/LoginPage";
import RegisterPage from "./Components/Register/RegisterPage";
import StorePage from "./Components/Store/StorePage";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import AdminPage from "./Components/AdminPanel/AdminPage";
import Unauthorized from "./Components/Utils/Unauthorized";

function App() {
  // let role_data = localStorage.getItem("role");
  // role_data = JSON.parse(role_data);
  // console.log(role_data?.role);

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoutes allowedRoles={["admin"]} />}>
          <Route path="/dashboard" element={<AdminPage />} />
        </Route>

        <Route element={<ProtectedRoutes allowedRoles={["admin", "user"]} />}>
          <Route path="/store" element={<StorePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* <Route path="/store" element={<StorePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
