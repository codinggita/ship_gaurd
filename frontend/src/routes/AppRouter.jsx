import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/Landing/LandingPage'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import DashboardLayout from '../components/Layout/DashboardLayout'
import Dashboard from '../pages/Dashboard/Dashboard'
import Manifests from '../pages/Manifests/Manifests'
import FleetOps from '../pages/FleetOps/FleetOps'
import ClaimsTerminal from '../pages/ClaimsTerminal/ClaimsTerminal'
import InventoryGrid from '../pages/InventoryGrid/InventoryGrid'
import SystemLogs from '../pages/SystemLogs/SystemLogs'
import ProtectedRoute from './ProtectedRoute'
import { AuthProvider } from '../context/AuthContext'

export default function AppRouter() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes — no sidebar */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes — sidebar appears after login */}
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/manifests" element={<Manifests />} />
              <Route path="/fleet" element={<FleetOps />} />
              <Route path="/claims" element={<ClaimsTerminal />} />
              <Route path="/inventory" element={<InventoryGrid />} />
              <Route path="/logs" element={<SystemLogs />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}