import React, { useEffect } from "react";
import "./styles.css";

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      const href = document.getElementById("link").href;
      window.location = href;
    }, 3000);
  }, []);

  return (
    <div className="App">
      <a
        id="link"
        href="https://nypost.com/2020/10/14/email-reveals-how-hunter-biden-introduced-ukrainian-biz-man-to-dad"
      >
        Loading NY Post Hunter Biden article
      </a>
    </div>
  );
}
