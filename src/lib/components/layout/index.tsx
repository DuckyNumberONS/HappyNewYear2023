"use client";
import React, { useContext, useEffect, useState } from "react";
import Clock from "@/lib/components/clock";
import Meo from "@/lib/components/meo";
import MusicPlayer from "@/lib/components/music-player";
import { ReactNode } from "react";
import { trackList } from "@/lib/config/track";
import Popup, { PopupContext } from "@/lib/hook/Context/popup";
import HappyNewYear from "../happy-new-year";

interface Props {
  children: ReactNode;
}

const NavBar: React.FC<Props> = ({ children }) => {
  const { popup } = useContext(PopupContext);
  return (
    <>
      {popup ? (
        <>
          <HappyNewYear />
        </>
      ) : (
        <nav className="mx-auto max-w-md my-24 border-8 border-solid border-red-roseBud rounded-md bg-[#1a1e2d]">
          <div className="p-3 grid grid-cols-12 gap-2">
            {/* <main className="col-span-8 elative p-3 bg-red-roseBud rounded-xl relative">
                {children}
              </main> */}
            <div className="col-span-12 relative p-3 bg-red-roseBud rounded-xl">
              <Clock />
              <Meo />
              {/* <MusicPlayer tracks={trackList} /> */}
              {children}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
export default NavBar;
