import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";

function productList() {
  const [pageContent, setPageContent] = useState();
  useEffect(() => {
    fetch("http://localhost:1337/page")
      .then((res) => res.json())
      .then((data) => setPageContent(data.content))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <ReactMarkdown>{pageContent}</ReactMarkdown>
    </div>
  );
}

export default productList;
