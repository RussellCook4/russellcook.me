import "./App.css";
import ContentSection from "./Content";
import Header from "./Header";
import ARTICLES from "./articles";


function App() {
  return (
    <>
      <Header />
      {ARTICLES.map((article) => {
        return (
          <ContentSection
            title={article.title}
            contentText={article.contentText}
            imageSrc={article.imageSrc}
          />
        );
      })}
    </>
  );
}

export default App;
