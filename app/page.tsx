import Image from "next/image";

require("dotenv").config();

console.log(process.env.TEST);

export default function Home() {
  return (
    <div>
      <h1>Testing</h1>
    </div>
  );
}
