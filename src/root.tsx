import "./root.scss";
import AboutUsComponent from "./about us/about-us-Component";
import HeadComponent from "./header/headComponent";
import ArticlePreviewComponent from "./articlePreview/articlePreviewComponent";

export default function Root() {
  return (
    <>
      <HeadComponent />
      <AboutUsComponent />
      <ArticlePreviewComponent />
      <div className="online-shop-root-rooter-frame">Rooter</div>
    </>
  );

  /* 
     
     
  
  */
}
