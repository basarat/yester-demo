export declare type Route = 'login' | 'profile';
export declare class RouteState {
    route: Route;
    setRoute(route: Route): void;
    loggedIn: boolean;
    loginRequiredMessage: string;
    setLoginRequiredMessage(message: string): void;
    login(): void;
    logout(): void;
    profileId: string;
    setProfile(profileId: string): void;
}
export declare const routeState: RouteState;
