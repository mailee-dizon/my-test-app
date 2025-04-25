import dotenv from "dotenv";

export default function Home() {
  
  dotenv.config();
  console.log(process.env.TEST);
  return (
    <div>
      <h1>Testing {process.env.TEST}</h1>
    </div>
  );
}
