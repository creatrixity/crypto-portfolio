import React, { Suspense, lazy } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from 'screens/NotFound'

const Portfolio = lazy(() => import("screens/Portfolio"))

function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<NotFound />}>
        <Switch>
          <Route component={Portfolio} path="/portfolio" />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
