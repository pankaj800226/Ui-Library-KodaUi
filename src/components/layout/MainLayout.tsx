import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <main className="flex-1 lg:ml-72 p-1">
        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;
