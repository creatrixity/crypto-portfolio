import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import Steps from "components/Steps";
import styles from 'screens/Portfolio/Portfolio.module.scss'
import { fetchAll } from 'utils'

function SelectCrypto({ stepsList }) {
    const { isLoading, error, data: cryptocurrencies, refetch } = useQuery(
        "cryptocurrencies",
        () => fetchAll("/crypto")
    );

    console.log({ cryptocurrencies, isLoading, error })
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
                    <Link to={`/portfolio/create`} className="btn">
                        <span className="chevron left" />
                        Back
                    </Link>
                    <Link to={`/portfolio/create/add-keys`} className="btn btn-primary">
                        Add Keys
                        <span className="chevron right" />
                  </Link>
                </div>
            </section>
        </div>
    )
}

export default SelectCrypto