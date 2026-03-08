import React, { useEffect, useState } from "react";

const Debouncing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTerm, setDebounceTerm] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounceTerm(searchTerm);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [searchTerm]);

  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          type="text"
          value={searchTerm}
          placeholder="Search..."
        />
      </div>
      <p>{debounceTerm}</p>
    </>
  );
};

export default Debouncing;
