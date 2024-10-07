import Image from "next/image";

interface ILogo {
  width: number;
  height: number;
}
const Logo = (props: ILogo) => {
  const { width, height } = props;

  return (
    <Image
      src="/logo.png"
      alt="Cyber logo"
      width={width}
      height={height}
      priority
    />
  );
};

export default Logo;
