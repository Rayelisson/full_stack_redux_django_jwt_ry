import { useDispatch } from "react-redux";
import Layout from "../components/Layout"
import { useEffect } from "react";
import { resetRegistered } from "../features/user";


const LoginPage = () => {
    const dispatch = useDispatch();

	useEffect(() => {
		dispatch(resetRegistered());
	}, []);
    return (
           <Layout title="Auth | Login" content="Login page">
            <h1>LoginPage</h1>
           </Layout>
        )

}

export default LoginPage