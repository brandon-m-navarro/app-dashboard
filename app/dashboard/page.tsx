"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { FaProjectDiagram, FaTasks } from "react-icons/fa";
import TodoAnimation from "@/components/todo-animation";
import DashboardAnimation from "@/components/dashboard-animation";

type User = {
  id: string;
  name: string | null;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/user");
        if (!res.ok) throw new Error("Not authorized");

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/login"),
      },
    });
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
        <p className="text-white text-lg animate-pulse">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#091a23] to-[purple-700] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-[#091a23] rounded-2xl shadow-2xl p-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-[20px] font-bold text-white">
              Welcome, {user?.name || "User"}
            </h1>
            <p className="text-gray-600 mt-1">{user?.email}</p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-[#D23741] px-4 py-2 font-semibold text-white hover:bg-[#B42F38] transition cursor-pointer"
          >
            Logout
          </button>
        </div>

        {/* App Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Widget 1: Next.js Intro Dashboard */}
          <div className="group bg-[#0d212c] border-[#163341] border-[1px] hover:border-[#5c707a] rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-indigo-600 text-white p-3 rounded-full">
                <FaProjectDiagram className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-semibold text-white">
                Next.js Learning Dashboard
              </h2>
            </div>

            <p className="text-[#8a99a0] mb-6">
              A comprehensive dashboard built while following the official
              Next.js tutorial.
              <strong className="text-white font-[400]">
                {" "}
                Includes Server Components, Suspense, and modern React patterns.
              </strong>
            </p>

            <DashboardAnimation />

            <button
              className="w-full rounded-lg bg-indigo-600 py-2 text-white font-semibold hover:bg-indigo-700 transition"
              onClick={() => {
                window.location.href = "/api/redirect/dashboard";
              }}
            >
              Open App
            </button>
          </div>

          {/* Widget 2: Todo */}
          <div className="group bg-[#0d212c] border-[#163341] border-[1px] hover:border-[#5c707a] rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
            <div className="flex items-center gap-4 mb-4 h-[64px]">
              <div className="bg-purple-600 text-white p-3 rounded-full">
                <FaTasks className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Todo App</h2>
            </div>

            <p className="text-[#8a99a0] mb-6 h-[96px]">
              A full-stack Todo application built with Next.js and Prisma.
              <strong className="text-white font-[400]">
                {" "}
                Manage your tasks efficiently with a sleek and intuitive UI.
              </strong>
            </p>

            <TodoAnimation />

            <button
              className="w-full rounded-lg bg-purple-600 py-2 text-white font-semibold cursor-pointer hover:bg-purple-700 transition"
              onClick={() => {
                window.location.href = "/api/redirect/todo";
              }}
            >
              Open App
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
