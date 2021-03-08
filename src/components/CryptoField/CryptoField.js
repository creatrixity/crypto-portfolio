import React from "react";
import { FieldArray } from "formik";

import CheckboxRound from "components/CheckboxRound";
import CheckboxCard from "components/CheckboxCard";

const descriptions = {
    bitcoin: "Bitcoin was the first cryptocurrency to successfully record transactions on a secure, decentralized blockchain-based network.",
    ethereum: "Ethereum is a decentralized computing platform which runs smart contracts and uses the Ether cryptocurrency built on top of the open source Ethereum blockchain"
}

const CryptoField = ({ crypto, selectedMarketplaces }) => {
    return (
        <FieldArray
            name={`marketplaces.${crypto.id}`}
            render={(arrayHelpers) => (
                <section>
                    <section className="d-flex align-items-center">
                        <CheckboxRound
                            checked={selectedMarketplaces.length}
                            onChange={() => {
                                if (selectedMarketplaces.length) {
                                    selectedMarketplaces.map(() => arrayHelpers.pop());
                                } else {
                                    crypto.marketplaces.map(({ id }) => arrayHelpers.push(id));
                                }
                            }}
                            id={crypto.name}
                        />

                        <div className="ml-4 d-flex">
                            <img src={crypto.brand_url} alt={`${crypto.label} logo`} className="mr-6" />
                            <b className="h6">{crypto.label}</b>
                        </div>
                    </section>
                    <div className="w-100 mb-4 ml-3">
                        {descriptions.hasOwnProperty(crypto.name) ? (
                            <p className="text-muted small">{descriptions[crypto.name]}</p>
                        ) : null}
                    </div>

                    <div className="d-flex mb-3">
                    {crypto.marketplaces.map((marketplace, idx) => {
                        const marketplaceSelected = selectedMarketplaces.includes(marketplace.id);

                        return (
                            <section className="mr-4 flex-1" key={idx}>
                                <CheckboxCard
                                    checked={marketplaceSelected}
                                    onChange={(e) => {
                                        if (marketplaceSelected) {
                                            arrayHelpers.remove(
                                                selectedMarketplaces.indexOf(marketplace.id)
                                            );
                                        } else {
                                            arrayHelpers.push(marketplace.id);
                                        }
                                    }
                                }
                                label={marketplace.label}
                                >
                                <img src={marketplace.brand_url} alt="Marketplace logo" />
                                </CheckboxCard>
                            </section>
                        );
                    })}
                    </div>
                </section>
            )}
        />
    )
}

export default CryptoField