import Image from "next/image";
import { wondersImages, type WonderImage } from "../../wonders";
import { Modal } from "@/components/Modal";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PhotoModal({ params }: Props) {
  const { id } = await params;

  const photo: WonderImage = wondersImages.find(
    (wondersImage) => wondersImage.id === id
  )!;

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
