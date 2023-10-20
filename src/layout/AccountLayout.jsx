import { Outlet } from "react-router-dom";

const AccountLayout = () => {
  return (
    <div className="layout bg flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AccountLayout;
