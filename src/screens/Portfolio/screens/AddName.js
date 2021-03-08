import { Field } from "formik";
import { Link } from "react-router-dom";

import Steps from "components/Steps";
import styles from 'screens/Portfolio/Portfolio.module.scss'

function AddName({ stepsList }) {
    return (
        <div>
            <section className={styles.Section__Heading}>
                <h2 className={styles.Section__Heading__Title}>Give your portfolio a name.</h2>
                <p>A simple name to identify your portfolio by.</p>
            </section>

            <div className={styles.Steps__Container}>
                <Steps steps={stepsList} />
            </div>

            <section className={styles.Form__Card}>
                <label className={styles.Form__Label}>Portfolio Name</label>
                <Field
                  type="text"
                  name="portfolioName"
                  className={styles.Form__Field}
                />
                <div className={styles.Form__Button__Container}>
                    <Link to={`/portfolio`} className="btn">
                        <span className="chevron left" />
                        Back
                    </Link>
                    <Link to={`/portfolio/create/select-crypto`} className="btn btn-primary">
                        Select Crypto
                        <span className="chevron right" />
                  </Link>
                </div>
            </section>
        </div>
    )
}

export default AddName