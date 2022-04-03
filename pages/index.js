import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home Page</h1>
      {/* link */}
      <ul>
        <li>
          <Link href="/">
            <a className="">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/product">
            <a>Product</a>
          </Link>
        </li>
        <li>
          <Link href="/product/mobile">
            <a>Mobile</a>
          </Link>
        </li>
        <li>
          <Link href="/product/laptop">
            <a>Laptop</a>
          </Link>
        </li>
      </ul>
      {/* image  */}
      <Image src="/images/girl.jpg" height={400} width={400} />
      {/* one css adding style */}
      <style jsx>{`
        h2 {
          color: red;
        }
      `}</style>
      <h2>I have Styled JSX</h2>
      {/* global css */}
      <h3>I have Global CSS</h3>
      {/* css module  */}
      <h4 className={styles.green}>I have COmponent Based Module CSS</h4>
    </div>
  );
}
