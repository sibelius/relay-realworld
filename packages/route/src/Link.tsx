import React, { useCallback } from 'react';

import { useRoutingContext } from './RoutingContext';

/**
 * An alternative to react-router's Link component that works with
 * our custom RoutingContext.
 */
type Props = {
  to: string;
  children: React.ReactNode;
  className?: string;
};
const Link = (props: Props) => {
  const router = useRoutingContext();

  // When the user clicks, change route
  const changeRoute = useCallback(
    event => {
      event.preventDefault();
      router.history.push(props.to);
    },
    [props.to, router],
  );

  // Callback to preload just the code for the route:
  // we pass this to onMouseEnter, which is a weaker signal
  // that the user *may* navigate to the route.
  const preloadRouteCode = useCallback(() => {
    router.preloadCode(props.to);
  }, [props.to, router]);

  // Callback to preload the code and data for the route:
  // we pass this to onMouseDown, since this is a stronger
  // signal that the user will likely complete the navigation
  const preloadRoute = useCallback(() => {
    router.preload(props.to);
  }, [props.to, router]);

  return (
    <a
      href={props.to}
      onClick={changeRoute}
      onMouseEnter={preloadRouteCode}
      onMouseDown={preloadRoute}
      className={props.className}
    >
      {props.children}
    </a>
  );
};

export default Link;
