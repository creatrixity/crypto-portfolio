import React, { Suspense } from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Formik } from "formik";
import { useMutation } from "react-query";

import styles from './Portfolio.module.scss'
import stepsComposer from './steps'

import StepsRouter from 'components/StepsRouter/StepsRouter'

import NotFound from 'screens/NotFound'

const initialFormValues = {
    portfolioName: '',
    marketplaces: {},
    secrets: {}
}

const portfolioCreationRequest = async (payload) => {
    console.log(JSON.stringify(payload))

    setTimeout(() => Promise.resolve("success"), 3000)
};

function Portfolio({ match: { url, path }, history }) {
    const mutation = useMutation(portfolioCreationRequest, {
        onSuccess: () => {
          history.push(`${path}/success`);
        },
      });

    const handleFormSubmit = (values) => {
        const { portfolioName, marketplaces, secrets } = values;
        const payload = {
            portfolioName,
            marketplaces,
            secrets
        }

        mutation.mutate(payload)
    }

    return (
        <div className={styles.Portfolio__Container}>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <BrowserRouter>
                        <Suspense fallback={<NotFound />}>
                            <Switch>
                                <Route path="/portfolio" exact render={() => <Redirect to={`${url}/create`} />} />
                                <Route exact path={`${url}/create`} render={() => <Redirect to={`${url}/create/add-name`} />} />
                                <StepsRouter steps={stepsComposer({ url })} />
                                <Route component={NotFound} />
                            </Switch>
                        </Suspense>
                    </BrowserRouter>
                </form>
            )}
            </Formik>
        </div>
    )
}

export default Portfolio