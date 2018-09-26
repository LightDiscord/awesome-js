import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

import { main, module } from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        { 
            file: main, 
            name: 'awesome', 
            format: 'umd', 
            sourcemap: true 
        },
        {
            file: module,
            format: 'es',
            sourcemap: true
        }
    ],
    watch: {
        include: 'src/**',
    },
    plugins: [
        json(),
        typescript({ useTsconfigDeclarationDir: true }),
        commonjs(),
        resolve(),
    ]
}