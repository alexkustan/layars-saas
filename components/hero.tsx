import React from "react";
import Button from "./ui/Button";

export const Hero: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="rounded-full text-neutral-950 inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, created efforthlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8">
          Design tools shouldn&apos;t slow you down.Layers combines powerful
          features with an intuative interface that keeps you in your creative
          flow.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8">
          <input
            placeholder="Enter your email"
            type="email"
            className="bg-transparent px-4"
          />
          <Button type="submit" variant="primary">
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};
