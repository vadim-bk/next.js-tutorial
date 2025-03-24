import { Users } from "@/components/Users";
import { User } from "@/types/User";
import { apiUrl } from "@/api";

export default async function UsersServerPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(`${apiUrl}/users`);
  const users: User[] = await response.json();

  return <Users users={users} />;
}
