// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import buffer from "buffer";

export default defineConfig({
  define: {
    Buffer: buffer.Buffer,
    "process.env": {},
  },
  plugins: [react()],
});
