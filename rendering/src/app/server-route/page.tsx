import ImageSlider from "@/components/ImageSlider";
// import { clientSideFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();

  // const result = clientSideFunction();

  return (
    <>
      <h2>Server route page</h2>

      <p>{result}</p>

      <ImageSlider />
    </>
  );
}
