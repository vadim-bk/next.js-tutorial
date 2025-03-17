const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

type Props = {
  children: React.ReactNode;
};

export default function ProductLayout({ children }: Readonly<Props>) {
  const randomInt = getRandomInt(2);

  if (randomInt === 1) {
    throw new Error("Error loading product");
  }

  return (
    <div>
      {children}

      <h1>Featured products:</h1>
    </div>
  );
}
