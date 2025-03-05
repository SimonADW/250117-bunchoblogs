import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Auth0Provider
			domain="dev-pvbcq5zo3whlbzdh.us.auth0.com"
			clientId="6kxagzr95YCSwWlbz0wmR1GJMfeHGgKa"
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
		>
			<App />
		</Auth0Provider>
	</StrictMode>
);
