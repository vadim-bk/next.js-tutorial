export const dynamicParams = false;

export const generateStaticParams = async () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      Product {id} detailed rendered at {new Date().toLocaleTimeString()}
    </div>
  );
}
