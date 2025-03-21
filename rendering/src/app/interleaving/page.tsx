import { ClientComponentOne } from "@/components/ClientComponentOne";
import { ServerComponentOne } from "@/components/ServerComponentOne";

export default function InterleavingPage() {
  return (
    <>
      <h1>Interleaving page</h1>

      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}
