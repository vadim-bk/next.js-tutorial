import { Card } from "@/components/Card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <h2 className="text-xl font-bold">Archived Notifications</h2>

      <div className="flex gap-2 font-light">
        <Link href="/dashboard">Default</Link>
      </div>
    </Card>
  );
}
