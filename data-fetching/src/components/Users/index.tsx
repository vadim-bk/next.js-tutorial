import { User } from "@/types/User";

type Props = {
  users: User[];
};

export const Users = ({ users }: Props) => {
  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => (
        <li
          key={user.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <div className="font-bold">{user.name}</div>

          <div className="text-sm">
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
