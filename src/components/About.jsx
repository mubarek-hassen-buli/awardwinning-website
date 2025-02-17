import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import AnimatedTitle from "./AnimatedTitle";
import SplitText from "./SplitText";
import RollingGallery from "./RollingGallery";

// {/* <RollingGallery autoplay={true} pauseOnHover={true} /> */}
function About() {
  useGSAP(() => {
    const clipanimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "=+800 center ",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipanimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: "0",
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen ">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-4">
        <SplitText
          text=" welcome to in a world of sorcery"
          className="font-general text-sm uppercase md:text-[20px]"
          delay={80}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
        {/* <h2 className="font-general text-sm uppercase md:text-[20px]">
         
        </h2> */}
        <AnimatedTitle
          title=" History of Jujutsu-Kaisen"
          containerClass="mt-5 !text-black text-center"
        />
      </div>
      <div className=" flex-row space-x-6 justify-between px-9 md:flex md:space-x-8 md:space-y-2 ">
        <div className=" w-full md:w-1/2 ">
          <RollingGallery autoplay={true} pauseOnHover={true} />
        </div>
        <div className="mt-28 ">
          <h1 className=" special-font uppercase font-zentry font-black md:text-5xl  lg:text-[4rem] pr-14  mb-10 text-center items-center text-3xl ">
            J <b>u</b>jutsu K <b>a</b>isen
          </h1>
          <div className="">
            <p className="">
              Jujutsu Kaisen is a Japanese manga series written and illustrated
              by Gege Akutami. It was first serialized in Weekly Shōnen Jump on
              March 5, 2018, and has since become one of the most popular modern
              shōnen series. The story follows Yuji Itadori, a high school
              student who accidentally becomes the host of a powerful Cursed
              Spirit, Ryomen Sukuna, and joins the Jujutsu Sorcerers to fight
              against Curses. Anime Adaptation The anime adaptation of Jujutsu
              Kaisen was produced by MAPPA, one of the top animation studios in
              Japan. The first season aired from October 3, 2020, to March 27,
              2021, covering the introduction of the story and the Kyoto
              Goodwill Event arc. It was widely praised for its breathtaking
              animation, especially during fight sequences, as well as its dark
              yet humorous storytelling. Following the success of the anime, the
              Jujutsu Kaisen 0 movie was released on December 24, 2021, serving
              as a prequel to the main story and focusing on Yuta Okkotsu. The
              film was a massive hit, further cementing the series&#39;
              popularity throughout worldwide and universe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
