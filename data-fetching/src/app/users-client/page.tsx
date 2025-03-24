"use client";

import { Users } from "@/components/Users";
import { User } from "@/types/User";
import { useEffect, useState } from "react";
import { apiUrl } from "@/api";

export default function UsersClientPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(`${apiUrl}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <Users users={users} />;
}
