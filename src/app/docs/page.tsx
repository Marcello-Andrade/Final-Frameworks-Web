"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { openapi } from "@/docs/openapi";

export default function DocsPage() {
  return (
    <main
      style={{
        padding: "20px",
      }}
    >
      <SwaggerUI spec={openapi} />
    </main>
  );
}