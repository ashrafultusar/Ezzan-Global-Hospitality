import { auth } from "@/auth";
import { User, UserCog, UserCheck } from "lucide-react";
import { LogoutButton } from "@/components/auth/LogoutButton";
import Link from "next/link";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="flex min-h-screen items-center justify-center p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 dark:from-gray-950 dark:via-amber-950 dark:to-yellow-950">
        {/* ... same as before ... */}
      </div>
    );
  }

  const getRoleIcon = (role?: string) => {
    const lowerRole = role?.toLowerCase();
    if (lowerRole === "admin") return <UserCog className="h-16 w-16 sm:h-20 sm:w-20 text-amber-700 dark:text-amber-300" strokeWidth={1.5} />;
    if (lowerRole === "moderator") return <UserCheck className="h-16 w-16 sm:h-20 sm:w-20 text-amber-700 dark:text-amber-300" strokeWidth={1.5} />;
    return <User className="h-16 w-16 sm:h-20 sm:w-20 text-amber-700 dark:text-amber-300" strokeWidth={1.5} />;
  };

  return (
    <div className="min-h-screen bg-yellow-800/30 dark:bg-yellow-900 pt-20 sm:pt-24 pb-12">
      
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-white/90 shadow-xl backdrop-blur-sm dark:bg-gray-900/85 border border-amber-200/30 dark:border-amber-800/30 relative z-10">
          {/* Header - reduced height to avoid pushing nav */}
          <div className="h-32 sm:h-40 bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,215,0,0.15)_0%,transparent_50%)] opacity-70" />
          </div>

          <div className="relative px-6 pb-10 sm:px-10">
            {/* Avatar - positive margin + z-index to stay above everything */}
            <div className="flex justify-center -mt-16 sm:-mt-20 relative z-20">
              <div className="rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 p-2 shadow-2xl ring-4 ring-amber-300/50 dark:ring-amber-700/50 dark:from-amber-900 dark:to-yellow-900">
                <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-white/95 dark:bg-gray-800/95 flex items-center justify-center border-4 border-amber-200/50 dark:border-amber-700/50">
                  {getRoleIcon(session.user.role)}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-amber-900 dark:text-amber-100">
                {session.user.name || "User"}
              </h1>
              <p className="mt-2 text-lg sm:text-xl text-amber-700 dark:text-amber-300">
                {session.user.email}
              </p>
              <div className="mt-4 inline-block rounded-full bg-amber-100/80 px-5 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base font-semibold uppercase tracking-wide text-amber-800 dark:bg-amber-900/50 dark:text-amber-200">
                {session.user.role || "User"}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <LogoutButton className="bg-amber-600 text-white hover:scale-105" />
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-amber-50/60 p-6 dark:bg-amber-950/30">
                <h3 className="text-sm font-medium uppercase text-amber-700 dark:text-amber-300">User ID</h3>
                <p className="mt-2 font-mono text-base break-all text-amber-900 dark:text-amber-100 bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                  {session.user.id}
                </p>
              </div>
              <div className="rounded-2xl bg-amber-50/60 p-6 dark:bg-amber-950/30">
                <h3 className="text-sm font-medium uppercase text-amber-700 dark:text-amber-300">Role</h3>
                <p className="mt-2 text-lg font-semibold text-amber-800 dark:text-amber-200">
                  {session.user.role || "Standard User"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}