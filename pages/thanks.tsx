import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Index() {
	return (
		<>
			<Head>
				<title>Visahl D</title>
			</Head>
			<Navbar />
			<main style={{ maxWidth: "800px" }}>
				<section id="intro">
					<h1>Thanks! ❤️</h1>
					<p>
						I am truly grateful to all the people that have supported me and my
						endeavours in development. Thanks to everyone who supported me to
						continue learning.
					</p>
				</section>
			</main>
			<Footer />
		</>
	);
}
