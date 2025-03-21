"use client";

import ImageSlider from "@/components/ImageSlider";
import { useTheme } from "@/components/ThemeProvider";
import { clientSideFunction } from "@/utils/client-utils";
export default function ClientRoutePage() {
  const { colors } = useTheme();

  const result = clientSideFunction();

  return (
    <>
      <h2 style={{ color: colors.secondary }}>Client route page</h2>

      <p>{result}</p>

      <ImageSlider />
    </>
  );
}
