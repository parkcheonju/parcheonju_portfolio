import React, { useEffect } from "react";
import lottie from "lottie-web";
import lottieAni from "./logo.json";
import htmlAni from "./html.json";
import jsAni from "./js.json";
import reactAni from "./react.json";
import figmaAni from "./figma.json";
import vueAni from "./vue-js.json";
import githubAni from "./github.json";

const Lottie = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#lottie-ani"),
      animationData: lottieAni,
      loop: true,
      autoplay: true,
    });
  }, []);
  return <div id="lottie-ani" style={{ width: 100, height: 100 }}></div>;
};

const Html = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#html-ani"),
      animationData: htmlAni,
      loop: true,
      autoplay: true,
    });
  }, []);
  return <div id="html-ani" style={{ width: 100, height: 100, overflow: "hidden" }}></div>;
};

const Js = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#js-ani"),
      animationData: jsAni,
      loop: true,
      autoplay: true,
    });
  }, []);
  return <div id="js-ani" style={{ width: 100, height: 100, overflow: "hidden" }}></div>;
};

const LottieReact = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-ani"),
      animationData: reactAni,
      loop: true,
      autoplay: true,
    });
  }, []);
  return <div id="react-ani" style={{ width: 100, height: 100, overflow: "hidden" }}></div>;
};

const Lottievue = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#vue-ani"),
      animationData: vueAni,
      loop: true,
      autoplay: true,
    });
  }, []);
  return <div id="vue-ani" style={{ width: 100, height: 100, overflow: "hidden" }}></div>;
};

const Figma = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#figma-ani"),
      animationData: figmaAni,
      loop: true,
      autoplay: true,
    });
  }, []);
  return <div id="figma-ani" style={{ width: 80, height: 80, overflow: "hidden", marginTop: 10, }}></div>;
};

const Lottiegithub = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#github-ani"),
      animationData: githubAni,
      loop: true,
      autoplay: true,
    });
  }, []);
  return <div id="github-ani" style={{ width: 100, height: 100, overflow: "hidden" }}></div>;
};

export { Lottie, Html, Js, LottieReact, Figma, Lottievue, Lottiegithub };
