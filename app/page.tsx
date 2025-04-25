/*import dotenv from "dotenv";*/
import React from "react";

export default function Home() {

  console.log("Hello Mailee");
  /*
  dotenv.config();
  */
  const t2 = process.env.TEST

  /*
  console.log(process.env.TEST);
  */

  const t1 = "Hello Mon"
  return (
    <div>
      <h1>Testing {t1}</h1>
      <div>
        Joel {t2}
      </div>
    </div>
  );
}
