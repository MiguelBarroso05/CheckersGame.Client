// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css"; // Tailwind base + components + utilities
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import { createSystem, defaultConfig } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
// Update the import path below to the correct ChakraProvider location, for example:
import { ChakraProvider } from "@chakra-ui/react";
// cria o sistema sem preflight (desliga o CSS reset do Chakra)
const system = createSystem(defaultConfig, { preflight: false });

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ChakraProvider value={system}>
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <RouterProvider router={router} />
    </ThemeProvider>
  </ChakraProvider>
  // </StrictMode>,
);
