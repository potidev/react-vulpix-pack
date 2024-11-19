declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.scss';

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.sass';