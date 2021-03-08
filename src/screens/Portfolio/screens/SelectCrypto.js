import { useEffect } from 'react'
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useFormikContext } from "formik";

import Steps from "components/Steps";
import CryptoField from "components/CryptoField";

import styles from 'screens/Portfolio/Portfolio.module.scss'
import { fetchAll } from 'utils'

function SelectCrypto({ stepsList }) {
    const { values, setFieldValue } = useFormikContext();

    const { isLoading, error, data: cryptocurrencies } = useQuery(
        "cryptocurrencies",
        () => fetchAll("/crypto")
    );

    useEffect(() => {
        // Prefill all marketplaces by reducing the cryptocurrencies list
        if (!Object.keys(values.marketplaces).length && cryptocurrencies) {
          let marketplaces = cryptocurrencies.reduce((acc, curr) => {
            return {
              ...acc,
              [curr.id]: curr.marketplaces.map(({ id }) => id),
            };
          }, {});

          setFieldValue("marketplaces", marketplaces);
        }
    }, [cryptocurrencies, setFieldValue, values.marketplaces]);

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Error</p>

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
                {cryptocurrencies.map((crypto, idx) => (
                    <div className="mb-3" key={idx}>
                        <CryptoField
                            crypto={crypto}
                            selectedMarketplaces={values.marketplaces[crypto.id] || []}
                        />
                    </div>
                ))}

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