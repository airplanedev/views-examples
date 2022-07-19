import { Container, ThemeProvider, ViewProvider } from "@airplane/views";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { worker } from "./mockData";
worker.start();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ViewProvider>
        <Container size="xl" py={96}>
          <App />
        </Container>
      </ViewProvider>
    </ThemeProvider>
  </React.StrictMode>
);
