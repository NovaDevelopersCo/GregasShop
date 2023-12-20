import React from "react"
import ContentLoader from "react-content-loader"
import "../Collection.scss"

const Skeleton = (props) => (
  <ContentLoader 
    className="collection-container-skeleton"
    speed={2}
    width={312}
    height={407}
    viewBox="0 0 302 420"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="11" y="321" rx="2" ry="2" width="269" height="15" /> 
    <rect x="3" y="2" rx="0" ry="0" width="287" height="300" /> 
    <rect x="12" y="404" rx="2" ry="2" width="269" height="20" /> 
    <rect x="12" y="349" rx="2" ry="2" width="268" height="15" /> 
    <rect x="13" y="379" rx="2" ry="2" width="266" height="15" />
  </ContentLoader>
)

export default Skeleton
