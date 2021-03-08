import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchAll } from 'utils'
import { useFormikContext } from "formik";

import Steps from "components/Steps";
import styles from 'screens/Portfolio/Portfolio.module.scss'
import MarketplaceKeyField from "components/MarketplaceKeyField";

function AddKeys({ stepsList }) {
    const [selectedMarketplaces, setSelectedMarketplaces] = useState([])
    const { isLoading, error, data: marketplacesList = [] } = useQuery(
        "marketplaces",
        () => fetchAll("/marketplaces")
    );

    const marketplaces = marketplacesList.reduce((acc, curr) => ({
        ...acc,
        [curr.id]: curr
    }), {})

    const { values } = useFormikContext();

    useEffect(() => {
        const selectedMarketplaces = [
            ...new Set(
                Object.values(values.marketplaces).reduce(
                    (vendorsList, vendor) => [...vendorsList, ...vendor],
                    []
                )
            )
        ]

        setSelectedMarketplaces(selectedMarketplaces)
    }, [values.marketplaces])

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Error</p>

    return (
        <div>
            <section className={styles.Section__Heading}>
                <h2 className={styles.Section__Heading__Title}>Take control with your keys.</h2>
                <p>Adding your keys allows you more control over integrations.</p>
            </section>

            <div className={styles.Steps__Container}>
                <Steps steps={stepsList} />
            </div>

            <section className={styles.Form__Card}>
                {selectedMarketplaces.map((marketplaceId, idx) => (
                    <div className="mb-4" key={idx}>
                        <MarketplaceKeyField marketplace={marketplaces[marketplaceId]} />
                    </div>
                ))}
                <div className={styles.Form__Button__Container}>
                    <Link to={`/portfolio/create/select-crypto`} className="btn">
                        <span className="chevron left" />
                        Back
                    </Link>
                    <button
                        type="submit"
                        className="btn btn-sm btn-primary font-weight-bold"
                    >
                        Submit
                        <span className="chevron right" />
                    </button>
                </div>
            </section>
        </div>
    )
}

export default AddKeys