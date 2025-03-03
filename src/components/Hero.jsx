import { useGSAP } from "@gsap/react";
import { useState, useRef, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import gsap from "gsap";
// import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Hero() {
  const [currentIndex, setcurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  // const miniVideoRef = useRef(null);
  const handleVideoload = () => {
    setLoadedVideos((prev) => prev + 1);
  };
  const upcomingVideoindex = (currentIndex % totalVideos) + 1;
  const handleminiVdClick = () => {
    setHasClicked(true);
    setcurrentIndex(upcomingVideoindex);
  };
  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setTimeout(() => {
        setIsloading(false);
      }, 3000);
    }
  }, [loadedVideos]);
  useGSAP(() => {
    if (hasClicked) {
      gsap.set("#next-video", { visibility: "visible" });
      gsap.to("#next-video", {
        transformOrigin: "center center",
        scale: 1,
        width: "100%",
        height: "100%",
        duration: 1,
        ease: "power1.inOut",

        onStart: () => nextVideoRef.current.play(),
      });
      gsap.from("#current-video", {
        transformOrigin: "center center",
        scale: 0,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }
  }, [currentIndex]);

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: " polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      // clipPath: " polygon(100% 40%, 68% 100%, 0 99%, 36% 9%)",
      borderRadius: "0 0 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: " polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0 ",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: "true",
      },
    });
  });
  const getvideoSrc = (index) => {
    return `videos/hero-${index}.mvv`;
  };
  return (
    <div id="home" className="relative h-dvh w-screen overflow-x-hidden">

      {isloading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleminiVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                src={getvideoSrc(upcomingVideoindex)}
                ref={nextVideoRef}
                loop

                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoload}
              ></video>
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getvideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoload}
          ></video>
          <video
            src={getvideoSrc(currentIndex)}
            // src={getvideoSrc(
            //   currentIndex === totalVideos - 1 ? 1 : currentIndex
            // )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoload}
          ></video>
        </div>
        <h1 className=" special-font hero-heading  absolute bottom-5 right-5 z-40  text-black ">
          K <b>a</b>isen
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font  hero-heading text-black ">
              ju<b>j</b>u<b>t</b>su
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the World of anime <br /> Unleash Your Imaginations
            </p>
            <Button
              id="watch-trailer"
              title="watch trailer"
              leftIcon={<TiLocationArrow />}
              containerclass="!bg-yellow-300 flex-center gap-1 "
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-white ">
        K <b>a</b>isen
      </h1>
    </div>
  );
}

export default Hero;
