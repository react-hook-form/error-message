import typescript from 'rollup-plugin-typescript2';

export function getConfig({
  tsconfig = './tsconfig.json',
  output = [
    {
      file: `dist/index.js`,
      format: 'cjs',
    },
    {
      file: `dist/index.es.js`,
      format: 'esm',
    },
  ],
} = {}) {
  return {
    input: 'src/index.tsx',
    external: ['react', 'react-dom'],
    plugins: [
      typescript({
        tsconfig,
        clean: true,
      }),
    ],
    output,
  };
}

export default getConfig();
