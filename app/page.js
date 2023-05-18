import Image from "next/image";
import styles from "./page.module.css";
import About from "./about/page.mdx";
import "./styles/myMdx.css";

export default function Home() {
  return (
    <main>
      <h1>We are getting it right time</h1>
      <About />
    </main>
  );
}
