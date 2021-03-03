import { generateStepsList } from "utils";

function EnhancedRoute ({ step, steps, ...props }) {
    const { match, location: { pathname } } = props;
    const { Component } = step

    const stepsList = steps.map(generateStepsList({
      route: { pathname, ...match },
    }));

    return (
        <Component {...props} stepsList={stepsList} />
    )
}

export default EnhancedRoute