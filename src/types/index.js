// @flow
export interface IJson {
  path: string,
  text: string,
  component: string,
  props: any,
  children: any,
  schema: any
}

export interface ILink {
  rel: string,
  href: string
}

export interface IMeta {
  property: string,
  content: string,
  name: string
}

export interface IRoutes {
  text: string,
  path: string,
  json: Array<IJson>
}

export interface IAlert {
  alertText: string,
  className: string
}
export interface IColumn{

  id:string;
  displayText:string;
  className:string;
  canSort:boolean;
  canFilter:boolean;
  canGroup:boolean;
  canResize:boolean;
  canReorder:boolean;
  hidden:boolean;

  style:{};
}

export interface ITable {
  className:string;
  columns:Array<IColumn>;
  data:[]
}