import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';

const name = 'tiptap-markdown';

export default {
    input: 'src/index.js',
    output: [
        {
            name,
            file: 'dist/tiptap-markdown.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            name,
            file: 'dist/tiptap-markdown.umd.js',
            format: 'umd',
            sourcemap: true,
        },
        {
            name,
            file: 'dist/tiptap-markdown.esm.js',
            format: 'es',
            sourcemap: true,
        },
    ],
    external: [
        /node_modules/
    ],
    plugins: [
        nodeResolve({
            preferBuiltins: false,
        }),
        commonjs(),
        json(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        }),
    ],
}
