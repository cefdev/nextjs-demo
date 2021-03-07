import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

/* NOTES */
// Next.js automatically adds the React import when JSX is used indeed. However keep in mind that we do still need to import React from 'react' when the React variable is used.

// Any page has it own url (No nedd for React route), for example About.js component can be accessed from the url 'http://localhost:3000/about'

// Use lowercase for pages and Uppercase for other components

/*Any stylesheet related to a page has to be wrritten this way:
###.module.css
and you can import it to the targeted page this way:
import styles from "../styles/###.module.css"
*/

/* Head component is used to add information like title, meta ... to HTML's head for pages, you can import it this way:
import Head from "next/head"
this is an example of how to use it inside a component:
  <Head>
    <title>About</title>
    <meta name="keywords" content="about web development" />
  </Head>
*/
