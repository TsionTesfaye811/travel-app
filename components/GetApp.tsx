"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app flex w-full flex-wrap lg:flex-nowrap items-center justify-between">
        {/* Left content */}
        <div className="z-20 flex flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
          <p className="regular-16 text-gray-10">Available on iOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              className="flex-shrink-0 w-[200px]"
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              className="flex-shrink-0 w-[200px]"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="flex flex-1 items-center justify-end mt-10 lg:mt-0">
          <Image
            src="/phones.png"
            alt="phones"
            width={550}
            height={870}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
