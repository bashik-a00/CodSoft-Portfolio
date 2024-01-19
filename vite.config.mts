import svgr from 'vite-plugin-svgr';
import 'vite-plugin-file';
import react from "@vitejs/plugin-react";

export default({
  plugins: [react(),svgr()],
  root: "src",
  assetsInclude:/\.(png|jpe?g|gif|svg)$/i,
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
