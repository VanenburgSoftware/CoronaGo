import {
  RouteReuseStrategy,
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouterModule,
  Routes,
  UrlSegment
} from '@angular/router';


export class CacheRouteReuseStrategy implements RouteReuseStrategy {

  handlers: { [key: string]: DetachedRouteHandle } = {}

  /** Determines if this route (and its subtree) should be detached to be reused later */
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (!route.routeConfig || route.routeConfig.loadChildren) {
      return false;
    }

    return (route.routeConfig.path.includes('list')
      // || (route.routeConfig.path.includes('detail'))
      || (route.routeConfig.data && route.routeConfig.data.reuse));
  }

  /** Stores the detached route */
  public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.handlers[route.routeConfig.path] = handle;
  }

  /** Determines if this route (and its subtree) should be reattached */
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
  }

  /** Retrieves the previously stored route */
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) {
      return null;
    }

    if (route.routeConfig.loadChildren) return null;

    return this.handlers[route.routeConfig.path];
  }

  /** Determines if a route should be reused */
  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
