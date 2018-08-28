// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

// Allows for importing JSON values as ES modules in TypeScript
declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
