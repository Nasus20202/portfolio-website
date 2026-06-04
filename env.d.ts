/// <reference types="astro/client" />
declare module '*.astro' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const component: any;
  export default component;
}
