import { lazy } from "react"

const AddName = lazy(() => import("./screens/AddName"))
const SelectCrypto = lazy(() => import("./screens/SelectCrypto"))
const AddKeys = lazy(() => import("./screens/AddKeys"))

const stepsComposer = ({ url }) => [
    {
        path: `${url}/create/add-name`,
        Component: AddName,
        label: "Add Name"
    },
    {
        path: `${url}/create/select-crypto`,
        Component: SelectCrypto,
        label: "Select Crypto"
    },
    {
        path: `${url}/create/add-keys`,
        Component: AddKeys,
        label: "Add Keys"
    }
]

export default stepsComposer