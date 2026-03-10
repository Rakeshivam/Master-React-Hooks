import React, { Suspense } from "react";

const Lazy = React.lazy(() => import("./LazyLoading"));

const Header = () => {
  return (
    <div className="App">
      <h1>Learn Lazy Loading</h1>
      <Suspense fallback={<div>Loading Data...</div>}>
        <Lazy />
      </Suspense>
    </div>
  );
};

export default Header;
