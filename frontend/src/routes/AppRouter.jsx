import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/Landing/LandingPage'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import DashboardLayout from '../components/Layout/DashboardLayout'
import Dashboard from '../pages/Dashboard/Dashboard'
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
              {/* Add other sidebar routes here like /manifests, /fleet, etc. */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}