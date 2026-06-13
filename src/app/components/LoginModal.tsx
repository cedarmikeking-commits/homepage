import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export function LoginModal({ open, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: { email?: string; password?: string } = {};
    if (!email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Please enter a valid email";
    if (!password) next.password = "Password is required";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      window.location.href = "https://www.dualdeep.com/";
    }
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 cursor-pointer text-[#0d1117]/40 transition-colors hover:text-[#0d1117]"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-[#0d1117]">Learner Login</h2>
        <p className="mt-2 text-[#0d1117]/60">
          Sign in to access your learning dashboard
        </p>

        <form className="mt-7 space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="space-y-2">
            <label className="block text-[#0d1117]">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`w-full rounded-lg border px-4 py-3 text-[#0d1117] outline-none transition-colors placeholder:text-[#0d1117]/40 focus:border-[#1d4ed8] ${
                errors.email ? "border-[#d4183d]" : "border-black/15"
              }`}
            />
            {errors.email && (
              <p className="text-sm text-[#d4183d]">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-[#0d1117]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={`w-full rounded-lg border px-4 py-3 text-[#0d1117] outline-none transition-colors placeholder:text-[#0d1117]/40 focus:border-[#1d4ed8] ${
                errors.password ? "border-[#d4183d]" : "border-black/15"
              }`}
            />
            {errors.password && (
              <p className="text-sm text-[#d4183d]">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-[#0d1117]">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-black/30 accent-[#1d4ed8]"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-[#1d4ed8] hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-[#1d4ed8] py-3 font-medium text-white transition-colors hover:bg-[#1a44bd]"
          >
            Sign In
          </button>
        </form>

        <p className="mt-5 text-center text-[#0d1117]/70">
          Don't have an account?{" "}
          <a
            href="https://www.aigent7.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#1d4ed8] hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}
