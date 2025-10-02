import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [bookmark, setBookmark] = useState([]);

  function handleToggleBookmark(id) {
    setBookmark((prev) =>
      prev.includes(id) ? prev.filter((list) => list !== id) : [...prev, id]
    );
  }

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component
          {...pageProps}
          bookmark={bookmark}
          onToggleBookmark={handleToggleBookmark}
        />
      </SWRConfig>
    </>
  );
}
