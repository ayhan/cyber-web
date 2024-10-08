import Image from "next/image";

interface ILogo {
  width: number;
  height?: number;
  className?: string;
}
const Logo = (props: ILogo) => {
  const { width = 48, height = 48, className } = props;

  return (
    <Image
      src="/logo.png"
      alt="Cyber logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
};

export default Logo;
