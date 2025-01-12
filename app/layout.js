import { Footer } from "@/components/Footer/Footer"
import GlobalStyles from "./GlobalStyles"
import Header from "@/components/Header/Header"
import { ROUTES as routes } from "@/data";

export const metadata = {
  title: "Foodieland",
  description: "A food delivery app",
};

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<body>
				{/* <Header links={routes} /> */}
				{children}
				<GlobalStyles />
				{/* <Footer /> */}
			</body>
		</html>
  )
}
