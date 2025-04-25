/*import dotenv from "dotenv";*/
import React from "react";

export default function Home() {

  console.log("Hello Mailee");
  /*
  dotenv.config();
  console.log(process.env.TEST);
  */

  const t1 = "Hello Mon"
  return (
    <div>
      <h1>Testing {t1}</h1>
    </div>
  );
}
