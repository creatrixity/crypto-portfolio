import axiosInstance from 'axios'

const REACT_APP_API_BASE_URL = "http://localhost:3001"

export const axios = axiosInstance.create({
    baseURL: REACT_APP_API_BASE_URL,
});

export function handleResponse(response) {
    if (response.data) {
      return Promise.resolve(response.data);
    }

    return Promise.resolve(response);
  }

export function handleError(error) {
    if (error.data) {
        return Promise.reject(error.data);
    }

    return Promise.reject(error);
}

export const fetchAll = (resource) => axios.get(resource).then(handleResponse).catch(handleError);

/**
 * Generates a list of steps for display by the steps component.
 * This function returns a function that accepts a step object and returns
 * the object with extra properties.
 *
 * @param {Object} route
 * @returns {Function}
 */
export function generateStepsList({ route }) {
    const routeParams = route.params
    const routeParamKeys = Object.keys(routeParams)

    // Swap out any dynamic routes with their param values so "/portfolio/:portfolioId" becomes "/portfolio/1"
    const replaceParams = (path, param) => path.replace(`:${param}`, routeParams[param]);

    const createStepEntry = ({ path, label }) => {
        let routePath = routeParamKeys.length ? routeParamKeys.reduce(replaceParams, path) : path
        let active = route.pathname === path

        return {
            path: routePath,
            active,
            label
        };
    }

    return createStepEntry;
  }
