/* eslint-disable @next/next/no-img-element */
import React from "react";
import Services from "./home/services";
import Introduction from "./home/introduction";

function HomePage() {
  return (
    <div>
      <Introduction />
      <Services />
    </div>
  );
}

export default HomePage;
