import Theme from "../styles/theme";
import Head from "next/head";
import "../styles/style.css"
import {ApolloClient , InMemoryCache , ApolloProvider} from "@apollo/client"
const client = new ApolloClient({
  uri:"https://portfilio-server.herokuapp.com/graphql",
  cache : new InMemoryCache()
})
const  App=({ Component, pageProps }) =>{
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          key="theme-color-light"
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#dfe8eb"
        />
        <meta
          key="theme-color-dark"
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#171a1c"
        />
        <meta name="google-site-verification" content="WEzxrBSW1ZOcD54bZ-xqoo8_YFWWvW6xUAO5300vRng" />
        <meta httpEquiv="X-UA-Compatible" content="ie-edge" />
        <meta name="description" content="Je suis cinéaste professionnel indépendant en ce sens que j’écris mes films, les réalise et les produits par moi-même, de l’idée jusqu’à la phase finale de la postproduction." />

        <meta property="abdelwaheb bouden" content="abdelwaheb bouden" key="abdelwaheb bouden" />
        <meta name="keywords" content="film tunisian cinéma  abdelwaheb bouden mer art" />
        <meta name="author" content="abdelwaheb bouden"  />
        <title>Abdelwaheb Bouden </title>
        
      </Head>
      <Theme>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
        </ApolloProvider >
      </Theme>
    </>
  );
}

export default App;
