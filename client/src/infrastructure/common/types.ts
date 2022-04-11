export interface iRoute {
    path: string;
    name: string;
    element: React.ComponentType<any>;
    index?: false | undefined;
    routes?: iRoute[];
}