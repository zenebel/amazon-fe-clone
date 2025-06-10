import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
base: "/amazon-fe-clone/",
  plugins: [react()],
});
