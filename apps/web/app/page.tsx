import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { client } from "@repo/db/client";
type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div className={styles.page} style={{ fontSize: 40 }}>
       next js app 😋 <br />
      {"username: " + user?.username}
      <br />
      {"password: " + user?.password}
    </div>
  );
}
