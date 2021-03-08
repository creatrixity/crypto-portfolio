import { Route } from "react-router-dom";

import EnhancedRoute from "./EnhancedRoute";

const StepsRouter = ({ steps }) => {
    return (
        <>
            {steps.map((step, index) => (
                <Route
                    path={step.path}
                    key={index}
                    exact
                    render={props => <EnhancedRoute {...props} step={step} steps={steps} />}
                />
            ))}
        </>
    );
}

export default StepsRouter;