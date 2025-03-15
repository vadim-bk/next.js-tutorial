type Props = {
  children: React.ReactNode;
};

export const Card = ({ children }: Readonly<Props>) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-md">
      {children}
    </div>
  );
};
