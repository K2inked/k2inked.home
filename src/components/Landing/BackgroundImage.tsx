import { cn } from "@/utils";
import Image, { ImageProps } from "next/image";

type BackgroundImageProps = ImageProps & {
  className?: string;
  children?: React.ReactNode;
};

export const BackgroundImage = ({
  src,
  alt,
  className,
  children,
  ...props
}: BackgroundImageProps) => (
  <div className="relative h-fit desktop:h-screen overflow-hidden">
    <Image
      src={src}
      alt={alt}
      quality={75}
      fill
      sizes="100vw"
      className={cn("object-cover", className)}
      {...props}
    />
    <div className="relative z-10">{children}</div>
  </div>
);
