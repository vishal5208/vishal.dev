import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
	return (
		<>
			<Head>
				<title>Vishal D</title>
			</Head>
			<Navbar />
			<main>
				<section>
					<div className="sec_title">
						<h2>CONTACT</h2>
						<p>Let&apos;s connect if you want to work with me.</p>
					</div>
				</section>

				<section className="contact">
					<div className="contact_left">
						<p>
							Reach out to me and let&apos;s start a conversation about your
							exciting project or collaboration. Whether you have a blockchain
							venture in mind or a groundbreaking idea waiting to be realized,
							I&apos;m here to bring it to life. Here&apos;s my{" "}
							<a href="mailto:vishald5208@gmail.com">email</a>.
						</p>
						<p>
							I am also availabe at these following platforms. You can follow me
							here.
						</p>
						<div className="contact_left-follow">
							{social.map((ele, ind) => {
								return (
									<a
										key={ind}
										href={ele.link}
										rel="noopener"
										target="_blank"
										className="hover_eff gap"
									>
										<Image
											src={ele.logo_link}
											alt={`${ele.name} Logo`}
											width={24}
											height={24}
											// layout="responsive"
											draggable="false"
										/>
										{ele.name}
									</a>
								);
							})}
						</div>
					</div>
				</section>

				<Footer />
			</main>
		</>
	);
}
const social = [
	{
		name: "GitHub",
		link: "https://github.com/vishal5208",
		logo_link: "/icons/github.svg",
	},
	{
		name: "Twitter",
		link: "https://twitter.com/vd9119",
		logo_link: "/icons/twitter.svg",
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/vishal5208/",
		logo_link: "/icons/linkedin.svg",
	},
];
