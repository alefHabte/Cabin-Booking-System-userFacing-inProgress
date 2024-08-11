import Header from "@/starter/components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: {
    template: "%s | The wild oasis",
    default: "Welcome | the wild oasis",
  },
  description:
    "Discover Entoto Cabins, a luxurious cabin hotel nestled in the lush forests of the Entoto mountains, just outside Addis Ababa, Ethiopia. Our exclusive cabins combine rustic charm with modern elegance, offering a tranquil escape surrounded by Ethiopia's breathtaking natural beauty. Enjoy premium amenities, private hot tubs, gourmet dining, and panoramic views of the forest and mountains from every room. Perfect for romantic getaways or family adventures, Entoto Cabins promises an unforgettable luxury experience in the heart of nature. Book your stay today and embrace the serenity of the Ethiopian wilderness at Entoto Cabins.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={josefin.className}>
      <body className="bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased">
        <Header />
        <div className=" px-8 py-12 flex-1 ">
          <main className="mx-auto   max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
