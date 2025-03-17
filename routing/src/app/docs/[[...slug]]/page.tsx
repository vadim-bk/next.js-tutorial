type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function Docs({ params }: Readonly<Props>) {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }

  return <h1>Docs</h1>;
}
