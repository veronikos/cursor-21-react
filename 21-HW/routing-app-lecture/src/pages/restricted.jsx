import { useLocation } from "react-router"
import { PageHeader } from "../components/page-header";

export const NotAllowedPage = () => {
    const location = useLocation();

    console.log(location)

    return (
        <>
            <PageHeader>Restricted!!!</PageHeader>
            <p>You're not allowed to visit this <strong>{location.state?.from}</strong> page. Please log in first</p>
        </>
    )
}