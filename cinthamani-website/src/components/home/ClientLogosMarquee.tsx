import Image from "next/image";

// 35 partner logos from cinthamani.com
const partners: { name: string; file: string }[] = [
  { name: "Apple Authorized Reseller", file: "apple-authorized-reseller.png" },
  { name: "Sony", file: "sony.jpg" },
  { name: "Panasonic", file: "panasonic.jpg" },
  { name: "Blackmagic Design", file: "blackmagic-design-2.png" },
  { name: "Canon", file: "canon.jpg" },
  { name: "Nikon", file: "nikon.jpg" },
  { name: "AJA", file: "Aja.jpg" },
  { name: "Harmonic", file: "harmonic.jpg" },
  { name: "Ross", file: "ross.jpg" },
  { name: "Vizrt", file: "vizrt.jpg" },
  { name: "LiveU", file: "live-u.jpg" },
  { name: "Magewell", file: "magewell.jpg" },
  { name: "PlayBox Neo", file: "playbox-neo.jpg" },
  { name: "Broadcast Pix", file: "broadcast-pix.jpg" },
  { name: "BroadStream", file: "broad-stream.png" },
  { name: "Tessact", file: "tessact-black.png" },
  { name: "Maxon", file: "maxon-1.png" },
  { name: "Altair", file: "altair.jpg" },
  { name: "AVM Matrix", file: "avm-matrix.jpg" },
  { name: "Softron", file: "softron.jpg" },
  { name: "Samvad", file: "samvad.jpg" },
  { name: "Optics", file: "optics.jpg" },
  { name: "Workflow Labs", file: "workflow-labs.jpg" },
  { name: "Venera", file: "venera.jpg" },
  { name: "Sprolink", file: "Sprolink.jpeg" },
  { name: "New Blue", file: "new-blue.jpg" },
  { name: "Mividi", file: "mividi.jpg" },
  { name: "Data Video", file: "data-vedio.jpg" },
  { name: "Dalte", file: "dalte.jpg" },
  { name: "Lumens", file: "lumens.jpg" },
  { name: "RTS", file: "rts.jpg" },
  { name: "VRI", file: "vri.jpg" },
  { name: "Kiloview", file: "kiloview.jpg" },
  { name: "River", file: "river.jpg" },
  { name: "Wasp", file: "wasp.jpg" },
];

export default function ClientLogosMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-6">
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="marquee-track flex w-max gap-6">
          {/* Render logos twice for seamless loop */}
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex h-16 w-28 shrink-0 items-center justify-center rounded-lg bg-white/95 px-3 py-2 shadow-sm sm:h-20 sm:w-32"
              title={partner.name}
            >
              <Image
                src={`/partners/${partner.file}`}
                alt={partner.name}
                width={120}
                height={60}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
