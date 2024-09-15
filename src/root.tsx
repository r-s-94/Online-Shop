import "./root.scss";
import AboutUsComponent from "./about us/aboutUs";
import HeadComponent from "./header/head";
import ArticlePreviewComponent from "./articlePreview/articlePreview";
import FocusArticleComponent from "./focusArticle/focusArticle";
import FooterComponent from "./footer/footer";

export default function Root() {
  return (
    <>
      {" "}
      <HeadComponent />
      <FocusArticleComponent />
      <AboutUsComponent />
      <ArticlePreviewComponent />
      <FooterComponent />
    </>
  );

  /*  
 
      
     
     
  */
}
