import { useFormik } from "formik"
import { Nav, LoginCard } from "../../components"
import "./loginPage.css"
export default function Loginpage(){
    return(
        <>
        <div className="loginpage-wrapper">
        <Nav />
        <div className="login-card-wrapper">
        <LoginCard />
        </div>
        </div>
        </>
    )
}