import { Card } from "@/components/Card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <h2 className="text-xl font-bold">Notifications</h2>

      <div className="flex gap-2 font-light">
        <Link href="/dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}
