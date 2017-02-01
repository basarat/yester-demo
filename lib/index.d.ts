import { match, MatchResult, MatchResultParams } from './match';
export { match, MatchResult, MatchResultParams };
export interface RouteChangeEvent {
    oldPath: string;
    newPath: string;
}
export interface RouteEnterEvent extends RouteChangeEvent {
    params: MatchResultParams;
}
export declare type RouteBeforeEnterResult = null | undefined | {
    redirect: string;
    replace?: boolean;
} | Promise<{
    redirect: string;
    replace?: boolean;
}>;
export declare type RouteEnterResult = void;
export declare type RouteBeforeLeaveResult = null | undefined | boolean | Promise<boolean> | {
    redirect: string;
    replace?: boolean;
} | Promise<{
    redirect: string;
    replace?: boolean;
}>;
export interface RouteConfig {
    /**
     * The pattern to match against
     */
    $: string;
    /**
     * Called before entering a route. This is your chance to redirect if you want.
     **/
    beforeEnter?: (evt: RouteEnterEvent) => RouteBeforeEnterResult;
    /**
     * Called on entering a route.
     **/
    enter?: (evt: RouteEnterEvent) => RouteEnterResult;
    /**
     * On route leave,
     * you can redirect to elsewhere if you want or just return false to prevent leaving
     **/
    beforeLeave?: (evt: RouteChangeEvent) => RouteBeforeLeaveResult;
}
export declare class Router {
    routes: RouteConfig[];
    constructor(routes: RouteConfig[]);
    navigate(path: string, replace?: boolean): void;
    /**
     * Runs through the config and triggers an routes that matches the current path
     */
    init(): Promise<void>;
    private trigger;
}
