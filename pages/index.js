import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Zingnew | chuyển tiền</title>

      <meta property="fb:app_id" content="2034212100232051"></meta>

      <meta name="description" content="Doanh nghiệp cho rằng phải hạn chế xuất khẩu tiểu ngạch để hướng đến chính ngạch."></meta>
      <meta name="keywords" content="xuất khẩu nông sản sang trung quốc"></meta>
      <meta name="googlebot" content="noarchive"></meta>
      <meta name="robots" content="noarchive"></meta>
      <meta property="og:site_name" content="ZingNews.vn"></meta>
      <meta property="og:rich_attachment" content="true"></meta>
      <meta property="article:publisher" content="https://www.facebook.com/zing.vn"></meta>
      <meta property="og:type" content="article"></meta>
      <meta property="og:image" content="https://znews-photo-fbcrawler.zadn.vn/w1250/Uploaded/bfjysesfzyr/2022_01_06/xuat_khau_sang_TQ.jpg"></meta>
      <meta property="og:image:width" content="1200"></meta>
      <meta property="og:image:height" content="630"></meta>
      <meta property="article:modified_time" content="2022-01-06T15:11:01+0700"></meta>
      <meta property="article:published_time" content="2022-01-06T13:12:05+0700"></meta>
      <meta property="og:title" content="Cần hướng đến xuất khẩu chính ngạch"></meta>

      <meta property="og:description" content="Doanh nghiệp cho rằng phải hạn chế xuất khẩu tiểu ngạch để hướng đến chính ngạch."></meta>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing
          <code de className={styles.code}>
            pages/index.js
          </code>
        </p>

        <div className={styles.grid}>
          {/* <a href="https://nextjs.org/docs" className={styles.card}>
            <p>Find in-depth information about Next.js features and API.</p>
          </a> */}

          <Link href="/about">
            <div className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <a>About Us</a>
            </div>
          </Link>

          <Link href="/learn">
            <div className={styles.card}>
              <h2>Learn &rarr;</h2>
              <a>Learn about Next.js in an interactive course with quizzes!</a>
            </div>
          </Link>

         

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
