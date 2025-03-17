import { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren & {
  analytics: ReactNode;
  children: ReactNode;
  login: ReactNode;
  notifications: ReactNode;
  revenue: ReactNode;
};

export default function DashboardLayout({
  analytics,
  children,
  login,
  notifications,
  revenue,
}: Props) {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return login;
  }

  return (
    <div className="flex flex-col gap-4">
      <div>{children}</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">{analytics}</div>

        <div className="col-span-1">{revenue}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">{notifications}</div>
      </div>
    </div>
  );
}
