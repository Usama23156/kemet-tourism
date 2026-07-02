"use client";

import Link from "next/link";
import { useAos } from "@/lib/useAos";
import GlassCard from "@/_component/ui/GlassCard";
import Button from "@/_component/ui/Button";

export default function SignupPage() {
  useAos();

  return (
    <main className="mesh-bg flex min-h-[80vh] items-center justify-center px-4 py-28">
      <GlassCard padding="lg" className="w-full max-w-md">
        <div data-aos="fade-up">
          <h1 className="mb-2 text-center text-3xl font-bold text-white">
            Create Account
          </h1>
          <p className="mb-8 text-center text-sm text-kemet-muted">
            Join us and start your escape
          </p>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-kemet-muted">
                Full Name
              </label>
              <input type="text" placeholder="John Doe" className="input-modern" />
            </div>
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
            <div>
              <label className="mb-2 block text-sm text-kemet-muted">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input-modern"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-kemet-muted">
              <input type="checkbox" className="accent-kemet-gold" />
              <span>
                I agree to the{" "}
                <a href="#" className="text-kemet-gold hover:underline">
                  Terms &amp; Conditions
                </a>
              </span>
            </div>
            <Button type="submit" variant="primary" className="w-full">
              Sign Up
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-kemet-muted">
            Already have an account?{" "}
            <Link href="/login" className="text-kemet-gold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </GlassCard>
    </main>
  );
}
