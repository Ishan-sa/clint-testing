import Head from "next/head";
import Image from "next/image";
import Nav from "@/comps/nav";

export default function Home() {
  const imgIcons = [
    "/assets/html.png",
    "/assets/css.png",
    "/assets/js.png",
    "/assets/react.png",
    "/assets/next.png",
    "/assets/node.png",
  ];

  const imgIcons2 = [
    "/assets/firebase.png",
    "/assets/styled-components.png",
    "/assets/wp.png",
    "/assets/mongodb.png",
    "/assets/nginx.png",
    "/assets/git.png",
  ];

  const projectImg = [
    "/projects/firstmaps.png",
    "/projects/pronunci-asian.png",
    "/projects/raincheck.png",
    "/projects/tweetaholic.png",
    "/projects/open-weather.png",
  ];

  return (
    <>
      <Head>
        <title>Clint Javillo</title>
        <meta name="description" content="Clint Javillo Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="bg-white flex justify-center items-center align-middle flex-col gap-20">
        <div className="text-black flex justify-center items-center flex-col gap-10">
          <h1 className="font-semibold text-center text-9xl">Clint Javillo</h1>
          <button className="border rounded-full py-2 px-2 text-white bg-black">
            Projects
          </button>
          <h4 className="text-center font-semibold text-4xl">
            a front-end web developer that can do it all!
          </h4>
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex gap-[58px] w-[200% absolute]">
            {imgIcons.map((img, i) => {
              return (
                <div
                  key={i}
                  className="w-[125px] h-[125px] flex justify-center items-center shadow-2xl rounded-lg"
                >
                  <Image
                    width={95}
                    height={95}
                    src={img}
                    quality={100}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
          <div className="flex gap-[38px] justify-center">
            {imgIcons2.map((img, i) => {
              return (
                <div
                  key={i}
                  className="w-[125px] h-[125px] flex justify-center items-center shadow-2xl rounded-lg"
                >
                  <Image
                    width={95}
                    height={95}
                    src={img}
                    quality={100}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col  justify-center items-center gap-8">
          <h1 className="font-semibold text-8xl">Projects</h1>
          <div className="h-full flex overflow-hidden flex-col justify-center items-center gap-12 pb-8">
            <div className="w-[1000px] h-[528px] flex justify-evenly items-center bg-[#272727] text-white gap-8 px-16 rounded-xl shadow-2xl ">
              <div>
                <Image
                  height={315}
                  width={294}
                  src={projectImg[0]}
                  quality={100}
                  alt=""
                />
              </div>
              <p className="max-w-[597px] text-3xl text-center">
                First Maps is an interactive resource for indigenous community
                members and the general public to establish and strengthen
                connections in the spheres of culture, art and tourism.
              </p>
            </div>
            <div className="w-[1000px] h-[528px] flex justify-evenly items-center bg-gradient-to-r from-[#F05F6D] to-[#5C80BC] text-white gap-8 px-16 rounded-xl shadow-2xl ">
              <div>
                <Image
                  height={315}
                  width={294}
                  src={projectImg[1]}
                  quality={100}
                  alt=""
                />
              </div>
              <p className="max-w-[597px] text-3xl text-center">
                Pronunci-Asian is a social awareness pronunciation web app aimed
                to normalize Asian names through a visual and engaging way.
              </p>
            </div>
            <div className="w-[1000px] h-[528px] flex justify-evenly items-center bg-[#3B3368] text-white gap-8 px-16 rounded-xl shadow-2xl ">
              <div>
                <Image
                  height={315}
                  width={294}
                  src={projectImg[2]}
                  quality={100}
                  alt=""
                />
              </div>
              <p className="max-w-[597px] text-3xl text-center">
                Raincheck is a web application made to see the affordability of
                homes in Vancouver based on user income.
              </p>
            </div>
            <div className="w-[1000px] h-[528px] flex flex-col justify-center items-center bg-[#F6F0F0] text-[#5B5B5B] gap-2 px-16 rounded-xl shadow-2xl ">
              <div>
                <Image
                  height={512}
                  width={256}
                  src={projectImg[3]}
                  quality={100}
                  alt=""
                />
              </div>
              <p className="max-w-[597px] text-3xl text-center">
                Twootaholics is a web application that promotes open
                communication on the web between users.
              </p>
            </div>
            <div className="w-[1000px] h-[528px] flex flex-col justify-center items-center bg-[#363636] text-white gap-8 px-16 rounded-xl shadow-2xl ">
              <div>
                <Image
                  height={315}
                  width={294}
                  src={projectImg[4]}
                  quality={100}
                  alt=""
                />
              </div>
              <p className="max-w-[597px] text-3xl text-center">
                Mini app that checks the weather based on user input.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
