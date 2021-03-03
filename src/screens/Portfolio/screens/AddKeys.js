import { Field } from "formik";
import { Link } from "react-router-dom";

import Steps from "components/Steps";
import styles from 'screens/Portfolio/Portfolio.module.scss'

function SelectCrypto({ stepsList }) {
    return (
        <div>
            <section className={styles.Section__Heading}>
                <h2 className={styles.Section__Heading__Title}>Select the crypto you wish to manage</h2>
                <p>Pick cryptocurrencies and choose exchanges to trade them on.</p>
            </section>

            <div className={styles.Steps__Container}>
                <Steps steps={stepsList} />
            </div>

            <section className={styles.Form__Card}>
                <div className={styles.Form__Button__Container}>
                    <Link to={`/portfolio/create/pick-services`} className="btn">
                        <span className="chevron left" />
                        Back
                    </Link>
                    <Link to={`/portfolio/create/pick-services`} className="btn btn-primary">
                        Select Crypto
                        <span className="chevron right" />
                  </Link>
                </div>
            </section>
        </div>
    )
}

export default SelectCrypto