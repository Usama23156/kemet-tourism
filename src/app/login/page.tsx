import React from 'react'

function page() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div data-aos="fade-right" className="w-full max-w-md bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">

          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            Welcome Back
          </h1>
          <p className="text-center text-gray-400 mb-8">
            Sign in to your account
          </p>

          {/* Form */}
          <form className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0C1135]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0C1135]"
              />
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#0C1135]" />
                Remember me
              </label>
              <a href="#" className="hover:text-white">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#0C1135] text-white font-semibold hover:bg-[#141a5a] transition"
            >
              Sign In
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-gray-400 text-sm mt-8">
            Don’t have an account?{" "}
            <a href="Signup" className="text-white hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default page