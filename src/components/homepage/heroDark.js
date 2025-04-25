import React, { useState } from "react";
import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import Team from "../about/team";

export default function HeroDark() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer.Root
        open={open}
        onOpenChange={({ open }) => setOpen(open)}
        size={"xl"}
      >
        {/* Hero section */}
        <div className="mx-auto">
          <div className="relative isolate overflow-hidden bg-[#09BC8A] px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#gradient-bg)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="gradient-bg">
                  <stop stopColor="#0F4D0F" />
                  <stop offset={1} stopColor="#CCFFCC" />
                </radialGradient>
              </defs>
            </svg>

            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Empowering Sustainable Mining for the Future
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-white-10">
                Our long-term mission is to support mining compliance that
                promotes sustainability, safety, and innovation across the
                mining and environmental sectors. Backed by deep industry
                knowledge, our experienced consultants create practical,
                forward-thinking solutions tailored to the unique challenges and
                financial goals of clients around the world—guiding them through
                every stage of the mining lifecycle.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Drawer.Trigger asChild>
                  <Button className="rounded-md bg-white-10 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Our Team
                  </Button>
                </Drawer.Trigger>
                <a
                  href="/gemstones"
                  className="text-sm/6 font-semibold text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt="App screenshot"
                src={require("../../assets/miningfields.jpg")}
                width={1824}
                height={1080}
                className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>

        {/* Drawer popup for Our Team */}
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content size="4xl" scrollBehavior="inside">
              <Drawer.Body>
                <Team />
              </Drawer.Body>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
}
