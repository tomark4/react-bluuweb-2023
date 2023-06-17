import { Title } from "@/components";
import React from "react";

// page.js interfaz publica
// route.js para el api
// layout.js diseño compartido entre paginas
// template.js similiar al layout se crea cuando se navega entre rutas
// not-found.js pagina 404
// loading.js cargando
// error.js pagina de error
// global-error.js similar a error pero global

const AboutPage = () => {
  return (
    <div>
      <Title text={"About"} />
    </div>
  );
};

export default AboutPage;
