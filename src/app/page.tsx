import Image from "next/image";
import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image:
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Builders Connect Challange",
  description: "Builders Connect Challange",
  openGraph: {
    title: "Builders Connect Challange",
    description: "Builders Connect Challange",
    images: [
      {
        url: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        width: 800,
        height: 600,
        alt: "Builders Connect Challange",
      },
    ],
  },
  other: {
    ...frameMetadata,
  },
};
export default function Home() {
  return <div></div>;
}
