import React, { Suspense } from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Formik } from "formik";

import styles from './Portfolio.module.scss'
import stepsComposer from './steps'

import StepsRouter from 'components/StepsRouter/StepsRouter'

import NotFound from 'screens/NotFound'

const initialFormValues = {
    portfolioName: ''
}

function Portfolio({ match: { url } }) {
    return (
        <div className={styles.Portfolio__Container}>
            <Formik initialValues={initialFormValues}>
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
            </Formik>
        </div>
    )
}

export default Portfolio