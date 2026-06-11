import { headers } from "next/headers";
import { auth } from "./auth";
import { redirect } from "next/navigation";

export const userSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user || null;
};

export const roleRequire = async (role) => {
  const user = await userSession();

  if (user?.role !== role) {
    return redirect("/unauthorized ");
  }
};
