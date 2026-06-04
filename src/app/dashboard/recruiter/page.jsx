"use client";

import StatsDashboard from "@/Components/Dashboard/StatsDashboard/StatsDashboard";
import { authClient } from "@/lib/auth-client";
import { div } from "motion/react-client";

const RecruiterPage = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div>
        <p className="text-sm">Loading...</p>
      </div>
    );
  }

  const user = session?.user;
  console.log(user);

  return (
    <div className="mt-8">
      <h2 className="text-3xl md:text-4xl font-medium">
        Welcome back, {user?.name}
      </h2>
      <StatsDashboard></StatsDashboard>
    </div>
  );
};

export default RecruiterPage;
