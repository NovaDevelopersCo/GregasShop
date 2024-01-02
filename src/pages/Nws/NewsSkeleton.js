import React from "react"
import ContentLoader from "react-content-loader"
import style from "./Nws.module.scss";

const NewsSkeleton = (props) => (
    <ContentLoader 
    speed={2}
    width={1200}
    height={600}
    viewBox="0 0 800 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className={style.collectionContainerSkeleton}
    {...props}
  >
    <rect x="10" y="19" rx="2" ry="2" width="600" height="600" /> 
    <rect x="625" y="20" rx="2" ry="2" width="200" height="600" />
  </ContentLoader>
);

export default NewsSkeleton