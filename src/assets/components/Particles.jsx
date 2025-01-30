import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
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
          direction: "none",
          random: true,
          straight: false,
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
