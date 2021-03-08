import { FieldArray, useField } from "formik";

const MarketplaceKeyField = ({ marketplace }) => {
    const identifier = `secrets.${marketplace.id}`;
    const [field, , helpers] = useField(identifier);

    return (
        <FieldArray
            name={`marketplaces.${marketplace.id}`}
            render={() => {
            return (
                <div className="d-flex">
                <label htmlFor={identifier} className="mr-4" style={{ width: "50%" }}>
                    <img
                    src={marketplace.brand_url}
                    alt={marketplace.label}
                    className="img img-responsive"
                    />
                </label>
                    <input
                    className="d-inline-block w-100"
                    id={identifier}
                    name={identifier}
                    value={field.value || ""}
                    autoSave={"false"}
                    onChange={(e) => helpers.setValue(e.target.value)}
                    type="password"
                    />
                </div>
            );
            }}
      />
    )
}

export default MarketplaceKeyField