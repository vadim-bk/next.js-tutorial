import { PropsWithChildren, ReactNode } from "react";
import "./styles.css";

type Props = PropsWithChildren<{
  photoModal: ReactNode;
}>;

export default function Layout({ photoModal, children }: Props) {
  return (
    <>
      {photoModal}
      {children}
    </>
  );
}
