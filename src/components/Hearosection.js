import { useEffect, useState } from "react";
import "../components/Hearosection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Slide } from "react-awesome-reveal";
import hi from "../assets/hi.png";
function HeroSection() {
    const [onLoad, setOnLoad] = useState(false);

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
        });
        const handleLoad = () => {
            setOnLoad(true);
        };
        window.addEventListener("load", handleLoad);
        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <div className="relative w-[150%] h-screen " id="hero">
            <div>
                <div
                    className={`absolute ${
                        onLoad
                            ? "lg:w-[2000px] lg:h-[2000px] w-[1000px]  h-[1000px] duration-1000 ease-in-out"
                            : "w-[100px] h-[100px]  duration-1000 ease-in-out"
                    } container -bottom-52 lg:-bottom-96 -left-52`}
                    id="bulletone"
                ></div>
                <div
                    className={`absolute ${
                        onLoad
                            ? "lg:w-[2000px] lg:h-[2000px] w-[800px] h-[800px]  duration-1000 ease-in-out"
                            : "w-[100px] h-[100px]  duration-1000 ease-in-out"
                    } lg:-bottom-96 lg:-right-32 -top-96 -right-28 containerOne`}
                    id="bulletone"
                ></div>
                <div
                    data-aos="fade-down"
                    className="absolute lg:w-[38%] w-full pb-10 pt-10 h-screen flex lg:items-center lg:pb-32 items-start lg:ml-18 "
                >
                    <Slide cascade>
                        <h2 className=" lg:p-10 p-5 lg:top-20 lg:left-20 bottom-20 lg:w-full w-[370px] left-20 text-white font-bold lg:text-5xl text-2xl lg:tracking-wide">
                            Hi, I'm <span className="lg:text-second  text-black">Mazen </span>,
                            a web developer passionate about creating sleek
                            websites{" "}
                            <span className="lg:text-second text-black">together </span>!
                        </h2>
                    </Slide>
                </div>
            </div>
            <div className=" relative w-full h-full flex  lg:items-end lg:justify-center  items-end ">
                <div className=" right-0 lg:w-[700px] lg:h-[700px]  w-96 h-96  ">
                    <img src={hi} alt="Mazen" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
}
export default HeroSection;
