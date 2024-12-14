"use client";

import React from "react";

import { DividedLoginPageProps } from "./types";
import { cn } from "@/modules/ShadcnUI/lib";

export const DividedLoginPage = ({ children, logoTitle, logoSrc, logoClassName, caption, subCaption }: DividedLoginPageProps) => {
  return (
    <>
      <div className="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <img className={cn("mr-2 h-6 w-6", logoClassName)} src={logoSrc} alt={logoTitle} />
            {logoTitle}
          </div>
          {
            caption && (
              <div className="relative z-20 mt-auto">
                <blockquote className="space-y-2">
                  <p className="text-lg">
                    {caption}
                  </p>
                  {subCaption && <footer className="text-sm">{subCaption}</footer>}
                </blockquote>
              </div>
            )
          }
        </div>
        <div className="lg:p-8 p-4">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};