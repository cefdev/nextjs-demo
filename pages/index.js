import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev Home Page</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

// Data Fetching using 'getStaticProps'
export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  // To pass the the fetched data to the component, Just return it to 'props'
  return {
    props: {
      articles,
    },
  };
};
