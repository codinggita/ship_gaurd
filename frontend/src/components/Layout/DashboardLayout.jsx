import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function DashboardLayout() {
  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-sg-black text-sg-text font-rajdhani bg-grid-pattern">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto relative z-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
