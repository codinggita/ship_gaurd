import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const FONTS = "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Share+Tech+Mono&family=Rajdhani:wght@400;500;600;700&display=swap";
const mono  = { fontFamily: "'Share Tech Mono', monospace" };
const bebas = { fontFamily: "'Bebas Neue', cursive" };

const BOOT_LINES = ["> BOOT_SEQUENCE: OK", "> NETWORK_SYNC: ACTIVE", "> FIREWALL_LEVEL: MAXIMUM"];

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm]         = useState({ id: "", pass: "" });
  const [bootIdx, setBootIdx]   = useState(0);
  const [scanning, setScanning] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet"; link.href = FONTS;
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    if (bootIdx >= BOOT_LINES.length) return;
    const t = setTimeout(() => setBootIdx(i => i + 1), 600);
    return () => clearTimeout(t);
  }, [bootIdx]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setScanning(true);
    setErrorMsg("");
    
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.id, password: form.pass }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setTimeout(() => {
          login(data, data.token);
          navigate("/dashboard");
        }, 800);
      } else {
        setScanning(false);
        setErrorMsg(data.message || "AUTHENTICATION FAILED");
      }
    } catch (error) {
      setScanning(false);
      setErrorMsg("SERVER UNREACHABLE");
    }
  };

  return (
    <div className="min-h-screen flex" style={{ fontFamily: "'Rajdhani', sans-serif" }}>

      {/* LEFT PANEL */}
      <div className="w-[38%] bg-[#0A0A0A] flex flex-col justify-between px-12 py-12 relative overflow-hidden hidden lg:flex">

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#FF5A5A 1px,transparent 1px),linear-gradient(90deg,#FF5A5A 1px,transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />

        {/* Glow */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 80%,rgba(255,90,90,0.08) 0%,transparent 55%)" }} />

        {/* Edge fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32" style={{ background: "linear-gradient(to right,transparent,#0A0A0A)" }} />

        {/* Top */}
        <div className="relative z-10">
          <p className="text-[#FF5A5A] text-2xl font-bold tracking-[6px]" style={bebas}>SHIPGUARD_OS</p>
          <p className="text-[#4B5563] text-xs tracking-[3px] mt-2" style={mono}>SYSTEM_AUTH_PORTAL // v4.82.1</p>
        </div>

        {/* Middle */}
        <div className="relative z-10 mt-10">
          <div className="border-l-[4px] border-[#FF5A5A] pl-6 mb-12">
            <h1 className="text-[80px] leading-[0.9] text-white uppercase" style={bebas}>SECURE<br />TERMINAL</h1>
            <p className="text-[#60A5FA] text-xs tracking-[4px] mt-5" style={mono}>STATUS: AWAITING_CREDENTIALS</p>
          </div>

          {/* Info card */}
          <div className="border border-[#1F2937] bg-[#0F0F0F] p-6 max-w-[300px] relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#FF5A5A] opacity-60" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#FF5A5A] opacity-60" />
            <p className="text-[#374151] text-xs tracking-[2px] mb-4" style={mono}>SYS_REF: 0042-ALPHA</p>
            <div className="space-y-3">
              <p className="text-sm tracking-[2px]">
                <span className="text-[#FF5A5A]" style={mono}>LATENCY: </span>
                <span className="text-gray-300" style={mono}>14MS</span>
              </p>
              <p className="text-sm tracking-[2px]">
                <span className="text-[#6B7280]" style={mono}>ENCRYPTION: </span>
                <span className="text-[#22C55E]" style={mono}>AES-256</span>
              </p>
            </div>
          </div>

          {/* Pulse */}
          <div className="mt-10 relative w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-[#1F2937]" />
            <div className="absolute inset-2 rounded-full border border-[#FF5A5A] opacity-25 animate-ping" style={{ animationDuration: "2s" }} />
            <div className="absolute inset-2 rounded-full border border-[#FF5A5A] opacity-15 animate-ping" style={{ animationDuration: "2.6s", animationDelay: "0.4s" }} />
            <div className="w-5 h-5 rounded-full border-2 border-[#FF5A5A] opacity-60 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#FF5A5A]" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10">
          {BOOT_LINES.slice(0, bootIdx).map((line, i) => (
            <p key={i} className="text-[#22C55E] text-xs tracking-[1.5px] leading-[1.8]" style={mono}>{line}</p>
          ))}
          <div className="mt-8 border-t border-[#111827] pt-5">
            <p className="text-[#1F2937] text-[10px] tracking-[2px] leading-[2]" style={mono}>SHIPGUARD OPERATING SYSTEM</p>
            <p className="text-[#1F2937] text-[10px] tracking-[2px] leading-[2]" style={mono}>PROGRESSIVE NEURAL-LINK ENCRYPTION</p>
            <p className="text-[#1F2937] text-[10px] tracking-[2px] leading-[2]" style={mono}>© 2025.CENTAM.OS/LOGISTICS</p>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center relative min-h-screen"
        style={{ background: "linear-gradient(135deg,#0F0F0F 0%,#0A0A0A 50%,#111827 100%)" }}
      >
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />

        {/* Glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse,rgba(255,90,90,0.04) 0%,transparent 70%)" }}
        />

        {/* QR badge */}
        <div className="absolute top-10 right-10 w-[56px] h-[56px] border border-[#1F2937] bg-[#0F0F0F] p-3 flex items-center justify-center">
          <svg viewBox="0 0 32 32" width="38" height="38">
            {[[0,0,10,10],[18,0,10,10],[0,18,10,10]].map(([x,y,w,h],i) => (
              <rect key={i} x={x} y={y} width={w} height={h} fill="none" stroke="#374151" strokeWidth="2"/>
            ))}
            {[[3,3],[21,3],[3,21]].map(([x,y],i) => <rect key={i} x={x} y={y} width="4" height="4" fill="#374151"/>)}
            {[[14,6],[18,10],[14,10],[18,14],[22,14],[14,14],[18,18],[22,18],[14,22],[22,22],[18,22]].map(([x,y],i) =>
              <rect key={i} x={x} y={y} width="4" height="4" fill="#1F2937"/>
            )}
          </svg>
        </div>

        {/* AUTH CARD */}
        <div className="relative z-10 w-full max-w-[420px] mx-8">

          <div className="h-[3px] w-full" style={{ background: "linear-gradient(to right,#FF5A5A,#FF5A5A 40%,transparent)" }} />

          <div className="border border-[#1F2937] border-t-0 bg-[#0F0F0F] shadow-2xl">

            {/* Header */}
            <div className="px-10 pt-8 pb-6 border-b border-[#111827]">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-white text-sm tracking-[4px] mb-2" style={mono}>ACCESS_AUTHORIZATION</h2>
                  <p className="text-[#6B7280] text-xs tracking-[2px]" style={mono}>OPERATOR_ID REQUIRED FOR ENTRY</p>
                </div>
                <div className="w-10 h-10 border border-[#1F2937] bg-[#0A0A0A] flex items-center justify-center">
                  <span className="text-[#FF5A5A] text-lg">🔓</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-10 pt-8 pb-7 space-y-6">
              {errorMsg && (
                <div className="bg-[#B91C1C]/10 border border-[#B91C1C] text-[#FF5A5A] p-3 text-xs tracking-[2px]" style={mono}>
                  ERROR: {errorMsg}
                </div>
              )}

              {/* OPERATOR_ID */}
              <div>
                <label className="block text-[#9CA3AF] text-xs tracking-[3px] mb-2" style={mono}>OPERATOR_ID</label>
                <input
                  type="text"
                  placeholder="SG_USR_XXXX"
                  value={form.id}
                  onChange={e => setForm({ ...form, id: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-[#1F2937] text-gray-200 text-sm px-5 py-4 outline-none focus:border-[#FF5A5A] focus:bg-[#0F0A0A] transition-all duration-200 placeholder-[#4B5563]"
                  style={{ ...mono, letterSpacing: "2px" }}
                />
              </div>

              {/* SYS_PASSCODE */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[#9CA3AF] text-xs tracking-[3px]" style={mono}>SYS_PASSCODE</label>
                  <span className="text-[#FF5A5A] text-xs tracking-[2px] cursor-pointer hover:text-[#FF7070] transition-colors" style={mono}>RECOVER_KEY</span>
                </div>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="••••••••"
                    value={form.pass}
                    onChange={e => setForm({ ...form, pass: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-[#1F2937] text-gray-200 text-sm px-5 py-4 pr-12 outline-none focus:border-[#FF5A5A] focus:bg-[#0F0A0A] transition-all duration-200 placeholder-[#4B5563]"
                    style={{ ...mono, letterSpacing: "2px" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(p => !p)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#FF5A5A] transition-colors text-base"
                  >
                    {showPass ? "◉" : "◎"}
                  </button>
                </div>
              </div>

              {/* PRIMARY BUTTON */}
              <button
                type="submit"
                disabled={scanning}
                className="w-full py-4 text-sm font-bold tracking-[5px] transition-all duration-200 mt-2 relative overflow-hidden hover:brightness-110"
                style={{
                  ...mono,
                  background: scanning ? "#B91C1C" : "#FF5A5A",
                  color: "#000",
                }}
              >
                {scanning ? "AUTHENTICATING..." : "INITIATE_SESSION"}
                {scanning && (
                  <div className="absolute bottom-0 left-0 h-[3px] bg-black opacity-40 animate-pulse w-full" />
                )}
              </button>

              {/* SECONDARY BUTTON */}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="w-full border border-[#1F2937] bg-transparent text-[#9CA3AF] py-4 text-xs tracking-[3px] hover:border-[#FF5A5A] hover:text-white hover:bg-[#0F0A0A] transition-all duration-200"
                style={mono}
              >
                CREATE_NEW_ENTITY
              </button>

              {/* Divider */}
              <div className="flex items-center gap-5 pt-2">
                <div className="flex-1 h-px bg-[#111827]" />
                <span className="text-[#374151] text-xs tracking-[2px]" style={mono}>ALT_PROTOCOL</span>
                <div className="flex-1 h-px bg-[#111827]" />
              </div>

              {/* Alt auth */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "BIOMETRIC", icon: "⬡" },
                  { label: "NETWORK_ID", icon: "✦" },
                ].map(({ label, icon }) => (
                  <button
                    key={label}
                    type="button"
                    className="border border-[#1F2937] bg-[#0A0A0A] py-3.5 flex items-center justify-center gap-2 text-xs tracking-[2px] text-[#6B7280] hover:border-[#22C55E66] hover:text-[#22C55E] hover:bg-[#0F100A] transition-all duration-200"
                    style={mono}
                  >
                    <span className="text-sm">{icon}</span> {label}
                  </button>
                ))}
              </div>
            </form>

            {/* Footer */}
            <div className="px-10 py-4 border-t border-[#111827] bg-[#0A0A0A] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" style={{ boxShadow: "0 0 8px #22C55E" }} />
                <span className="text-[#22C55E] text-xs tracking-[3px]" style={mono}>SERVER_ACTIVE</span>
              </div>
              <span className="text-[#374151] text-[10px] tracking-widest" style={mono}>IP: 192.168.1.42 // PORT: 8080</span>
            </div>
          </div>

          <div className="h-[1px] w-full" style={{ background: "linear-gradient(to right,transparent,#FF5A5A33,transparent)" }} />
        </div>
      </div>
    </div>
  );
}