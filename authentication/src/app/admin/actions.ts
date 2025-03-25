"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { Role } from "../../../types/globals";
import { revalidatePath } from "next/cache";

export const setRole = async (id: string, role: Role) => {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata.role !== "admin") {
    throw new Error("Not authorized");
  }

  const { users } = await clerkClient();

  try {
    await users.updateUser(id, { publicMetadata: { role } });

    revalidatePath("/admin");
  } catch {
    throw new Error("Failed to set role");
  }
};

export const removeRole = async (id: string) => {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata.role !== "admin") {
    throw new Error("Not authorized");
  }

  const { users } = await clerkClient();

  try {
    await users.updateUser(id, { publicMetadata: { role: null } });

    revalidatePath("/admin");
  } catch {
    throw new Error("Failed to remove role");
  }
};
