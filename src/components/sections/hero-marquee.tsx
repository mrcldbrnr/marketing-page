import Image from "next/image";

const marqueeImages = [
  "/home-header/tag-pics_akkuschrauber.png",
  "/home-header/tag-pics_kamera.png",
  "/home-header/tag-pics_powerbank.png",
  "/home-header/tag-pics_schuh.png",
  "/home-header/tag-pics_stuhl.png",
];

const track = [...marqueeImages, ...marqueeImages];

export function HeroMarquee() {
  return (
    <div aria-hidden className="relative h-[300px] w-screen overflow-hidden">
      <div className="animate-hero-marquee flex h-full w-max">
        {track.map((src, index) => (
          <div key={`${src}-${index}`} className="mr-[44px] h-[300px] w-[300px] shrink-0 overflow-hidden rounded-3xl">
            <Image src={src} alt="" width={300} height={300} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
