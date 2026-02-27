import Image from "next/image";

export function DaisyDivider() {
  return (
    <div className="relative h-24 md:h-32 overflow-hidden">
      <Image
        src="/images/backgrounds/divider-daisies.jpg"
        alt=""
        fill
        className="object-cover object-center"
        quality={75}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30" />
    </div>
  );
}
