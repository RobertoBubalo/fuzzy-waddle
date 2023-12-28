import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";
import vue from "@vitejs/plugin-vue";

export default mergeConfig(
    {
        ...viteConfig,
        plugins: [
            vue({
                template: {
                    compilerOptions: {
                        isCustomElement: (tag) => {
                            return tag.startsWith("v-");
                        },
                    },
                },
            }),
        ],
    },
    defineConfig({
        test: {
            environment: "jsdom",
            exclude: [...configDefaults.exclude, "e2e/*"],
            root: fileURLToPath(new URL("./", import.meta.url)),
            server: {
                deps: {
                    inline: ["vuetify"],
                },
            },
        },
    })
);
