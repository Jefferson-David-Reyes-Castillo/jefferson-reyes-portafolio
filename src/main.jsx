import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Nav } from "./assets/components/Nav";
import { Presentacion } from "./assets/sections/Presentacion";
import { Proyectos } from "./assets/sections/Proyectos";
import { Formacion } from "./assets/sections/Formacion";
import { Footer } from "./assets/components/Footer";
import { ParticlesComponent } from "./assets/components/Particles";





createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav/>
    <Presentacion />
    <Proyectos />
    <Formacion />
    <Footer />
<ParticlesComponent/>
  </StrictMode>
);
