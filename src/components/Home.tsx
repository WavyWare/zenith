"use client";
import BlurIn from "@/components/ui/blur-in.tsx";
import Ripple from "@/components/ui/ripple.tsx";
import Navigation from "@/components/Navigation.tsx";
import {MoveRight} from "lucide-react";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

function Home() {
        return (
        <>
            <Navigation />
            <div
                className="relative flex h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
              <span className="md:w-[700px] break-words whitespace-normal bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center md:mx-20 font-semibold leading-none">
                  <BlurIn word={"zenith"} />
              </span>
              <Link to={'/'}>
                  <Button className={"my-5"}>
                      🪐&nbsp;|&nbsp;Introducing new, private notes app<MoveRight className={"ms-3"}/>
                  </Button>
              </Link>
                <Ripple
                    mainCircleSize={350}
                />
            </div>
            <div className={"md:mx-auto container"}>
                <h1 className={"text-4xl font-semibold"}> Why zenith?</h1>
            </div>
        </>
    )
}

export default Home;
