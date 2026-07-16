module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/bookshelf-manager/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "build/chunks/1c76b_f37e5d83._.js",
  "build/chunks/[root-of-the-server]__a1006ae2._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/bookshelf-manager/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];