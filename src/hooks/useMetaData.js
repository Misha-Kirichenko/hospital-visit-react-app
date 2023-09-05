import { useEffect } from "react";

const useMetaData = (metaData) => {
  useEffect(() => {
    document.title = `Hospital - ${metaData.title}`;
    for (const metadaField in metaData.meta) {
      const metaTag = document.querySelector(`meta[name="${metadaField}"]`);
      metaTag.setAttribute("content", metaData.meta[metadaField]);
    }
  }, [metaData]);
};

export default useMetaData;
