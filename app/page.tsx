/*import dotenv from "dotenv";*/
import React from "react";

export default function Home() {

  console.log("Hello Mailee");
  console.log(process.env.TEST);
  console.log("Testing for changes");
  /*
  dotenv.config();
  */
  const t2 = process.env.TEST;

  /*
  console.log(process.env.TEST);
  */

  const t1 = "Hello Mon";
  return (
    <div>
      <h1>Testing {t1}</h1>
      <div>
        JJ {t2}
        <br/>
        <p>My Test Var: {process.env.TEST}</p>
      </div>
    </div>
  );
}
