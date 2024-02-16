import Image from "next/image";
import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTryshf9Lq7Cs761vTUcj2N5hd76UzRdM8hM8iuedjFt4/1.jpg`,
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
        url: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTryshf9Lq7Cs761vTUcj2N5hd76UzRdM8hM8iuedjFt4/1.jpg`,
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
  return <div>Hello</div>;
}
