declare module '*.styl' {
  const classname: { readonly [key: string]: string };
  export default classname;
}

declare module '*.less' {
  const classname: { readonly [key: string]: string };
  export default classname;
}

declare module '*.scss' {
  const classname: { readonly [key: string]: string };
  export default classname;
}

declare module '*.sass' {
  const classname: { readonly [key: string]: string };
  export default classname;
}

interface Window{
  jeco: IJeco
}
