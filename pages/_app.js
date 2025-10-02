import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [bookmark, setBookmark] = useLocalStorageState("bookmarks", {
    defaultValue: [],
  });

  useEffect(() => {
    console.log("bookmarkschanged", bookmark);
  }, [bookmark]);

  function handleToggleBookmark(id) {
    setBookmark((prev) =>
      prev.includes(id) ? prev.filter((list) => list !== id) : [...prev, id]
    );
  }

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Header />
        <Component
          {...pageProps}
          bookmark={bookmark}
          onToggleBookmark={handleToggleBookmark}
        />
        <Navbar />
      </SWRConfig>
    </>
  );
}
