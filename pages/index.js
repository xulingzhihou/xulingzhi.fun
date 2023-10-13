import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Homepage() {
  return (
    <>
      <div className="flex justify-center m-16">
        <div className="flex flex-col space-y-4 h-40 opacity-100 z-40 font-mono">
          <h1 className="text-5xl font-bold "> Hello, I am Lingzhi!</h1>

          <h1 className="text-3xl font-bold ">
            I am a software engineer based in San Francisco
          </h1>

		  <div>
			This is just a fun space where I showcase my love for photography and art
		  </div>
        </div>
      </div>
	  <div id="#gallery" className="flex justify-center">
		<div>This is gallery</div>
	  </div>
    </>
  );
}
