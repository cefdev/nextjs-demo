import { useRouter } from "next/router";
import Link from "next/link";

const article = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <p>This is article {id}</p>
      <Link href="/">Home</Link>
    </>
  );
};

export default article;

// We are using 'useRouter' to access the router object, and get the query id.
// So the first article query id == 1, second article query id == 2, and so on
// This way we can display the article number in the UI
