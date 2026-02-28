import "./root.scss";
import Nav from "./nav/nav-bar";
import HeadComponent from "./header/headEl";
import ArticlePreviewComponent from "./articlePreview/articlePreview";
import FocusArticleComponent from "./focusArticle/focusArticle";
import FooterComponent from "./footer/footer";
import ToTopEl from "./toTopEl";
import LogoShoppingcartEl from "./logoShoppingcart/logoShoppingcartEl";

export default function Root() {
  return (
    <>
      {" "}
      <Nav />
      <HeadComponent />
      <LogoShoppingcartEl />
      <FocusArticleComponent />
      <ArticlePreviewComponent />
      <ToTopEl />
      <FooterComponent />
    </>
  );

  /*  
    

      
     
  */
}
