import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		istanbul({// istanbul is a function that is imported 
			//from the vite-plugin-istanbul module
			exclude: ["node_modules", "dist", "test", "cypress"],
			cypress: true,// cypress is a boolean value
			requireEnv: false
		}),
	],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/_tests_/setup.ts",
	}
});
