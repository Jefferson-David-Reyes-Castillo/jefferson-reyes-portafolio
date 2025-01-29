import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#fffff",
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      detectRetina: false,
      fpsLimit: 80,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: {
            delay: 0.5,
            enable: true,
          },
        },
      },
      particles: {
        bounce: {
          horizontal: {
            value: 1,
          },
          vertical: {
            value: 1,
          },
        },
        collisions: {
          enable: true,
          maxSpeed: 50,
          mode: "bounce",
          overlap: {
            enable: true,
          },
        },
        color: {
          value: "#ffffff",
        },
        move: {
          enable: true,
          direction: "top",
          speed: 0.5,
          straight: true,
        },
        number: {
          value: 80,
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.3,
          },
        },
        size: {
          value: {
            min: 2,
            max: 4,
          },
        },
        shape: {
          type: "circle",
        },
        zIndex: {
          value: 0,
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      motion: {
        disable: false,
      },
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id='tsparticles'
        particlesLoaded={particlesLoaded}
        options={options}
        className='-z-20 absolute'
      />
    );
  }

  return <></>;
};
