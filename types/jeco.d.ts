interface IJeco{
  MODE: string;
  ROUTES: JecoRouter[];
  CONFIG: any;
  VERSION: string;
}

interface JecoRouter{
  path: string;
}