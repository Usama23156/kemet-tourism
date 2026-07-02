"use client";

import Link from "next/link";
import { useAos } from "@/lib/useAos";
import GlassCard from "@/_component/ui/GlassCard";
import Button from "@/_component/ui/Button";

export default function LoginPage() {
  useAos();

  return (
    <main className="mesh-bg flex min-h-[80vh] items-center justify-center px-4 py-28">
      <GlassCard padding="lg" className="w-full max-w-md">
        <div data-aos="fade-up">
          <h1 className="mb-2 text-center text-3xl font-bold text-white">
            Welcome Back
          </h1>
          <p className="mb-8 text-center text-sm text-kemet-muted">
            Sign in to your account
          </p>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-kemet-muted">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input-modern"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-kemet-muted">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input-modern"
              />
            </div>
            <div className="flex items-center justify-between text-sm text-kemet-muted">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-kemet-gold" />
                Remember me
              </label>
              <a href="#" className="hover:text-kemet-gold">
                Forgot password?
              </a>
            </div>
            <Button type="submit" variant="primary" className="w-full">
              Sign In
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-kemet-muted">
            Don&apos;t have an account?{" "}
            <Link href="/Signup" className="text-kemet-gold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </GlassCard>
    </main>
  );
}
