import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Highlight from "@/components/Highlight";
import Head from "next/head";
import Image from "next/image";
import { RoughNotationGroup } from "react-rough-notation";

const Home = () => {
	return (
		<>
			<Head>
				<title>Vishal D</title>
			</Head>
			<Navbar />
			<main>
				<div className="heading">
					<Image src="/img/updated.jpg" alt="email" width={300} height={300} />
					<div className="heading_right">
						<RoughNotationGroup show={true}>
							<h2 className="heading_right-title">Vishal Ashok Daragade</h2>
							<h3 className="heading_right-subtitle">
								Full Stack Blockchain Developer
							</h3>
							<br />
							<p className="heading_right-desc">
								Hi, I’m Vishal, a{" "}
								<Highlight color="#4E31AA" type="circle">
									computer science
								</Highlight>{" "}
								undergraduate from IIIT Vadodara. I’m curretly working as a
								<Highlight color="#C7D3FC" type="circle">
									Blockchain Developer
								</Highlight>
								with experience in developing and auditing projects on various
								blockchain platforms. I thrive on solving complex problems and
								creating innovative solutions
							</p>
							<p className="heading_right-desc">
								When I&apos;m not coding or enjoying{" "}
								<Highlight color="#E96479" type="circle">
									Korean dramas
								</Highlight>{" "}
								I find relaxation in practicing meditation, traveling, and
								listening to music.
							</p>

							<a
								className="status"
								href="https://drive.google.com/file/d/1lfwj1o-LU3fTOV6RhnBAqnp4OyeZQBM3/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="status__light">
									<div className="status__light__ring"></div>
									<div className="status__light__led"></div>{" "}
								</div>
								<div className="status__message underline-link">
									Hire me. My resume!
								</div>
							</a>
						</RoughNotationGroup>
					</div>
				</div>

				<section>
					<div className="sec_title">
						<h2>Proof of Work...</h2>
					</div>
				</section>

				<section>
					<div className="sec_work">
						<div className="sec_work_left">
							<div className="sec_work_left_item">
								<Image
									src="/img/dygnify.png"
									alt="dygnify"
									width={100}
									height={40}
									className="sec_work_left_item-img"
									draggable="false"
								/>
								<div>
									<h3 className="sec_work_left_item-title">Dygnify</h3>
									<div className="sec_work_left_item-subtitle">
										<p>Blockchain Developer</p>
										<p>January&apos;23 - Jun&apos;23</p>
									</div>
									<ul className="sec_work_left_item-ul">
										<li className="sec_work_left_item-ul-li">
											Conducted a comprehensive analysis of the Dygnify smart
											contracts and wrote test cases to ensure its functionality
											and security.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="sec_title">
						<h2>Skills...</h2>
					</div>
				</section>
				{/* this section copied from codepen and modified a little */}
				<section className="marquees-wrapper">
					<div className="marquee marquee-1">
						<ul className="marquee__content scroll">
							<li>LANGUAGES</li>
							<li>&#183;</li>
							<li>C/C++</li>
							<li>&#183;</li>
							<li>JavaScript</li>
							<li>&#183;</li>
							<li>Solidty</li>
							<li>&#183;</li>
							<li>Python</li>
							<li>&#183;</li>
							<li>Html</li>
							<li>&#183;</li>
							<li>CSS</li>
							<li>&#183;</li>
						</ul>
						<ul className="marquee__content scroll" aria-hidden="true">
							<li>LANGUAGES</li>
							<li>&#183;</li>
							<li>C/C++</li>
							<li>&#183;</li>
							<li>JavaScript</li>
							<li>&#183;</li>
							<li>Solidty</li>
							<li>&#183;</li>
							<li>Python</li>
							<li>&#183;</li>
							<li>Html</li>
							<li>&#183;</li>
							<li>CSS</li>
							<li>&#183;</li>
						</ul>
					</div>
					<div className="marquee marquee-2">
						<ul className="marquee__content scroll">
							<li>Frontend - React.js / Next.js</li>
							<li>&#183;</li>
							<li>Backend - Node.js / Nest.js</li>
							<li>&#183;</li>
							{/* <li>App dev - React Native</li> */}
							{/* <li>&#183;</li> */}
							{/* <li>Database - MYSQL / MongoDB NoSQL / Redis</li> */}
							{/* <li>&#183;</li> */}
						</ul>
						<ul className="marquee__content scroll" aria-hidden="true">
							<li>Frontend - React.js / Next.js</li>
							<li>&#183;</li>
							<li>Backend - Node.js / Nest.js</li>
							<li>&#183;</li>
							{/* <li>App dev - React Native</li> */}
							{/* <li>&#183;</li> */}
							{/* <li>Database - MYSQL / MongoDB NoSQL / Redis</li> */}
							{/* <li>&#183;</li> */}
						</ul>
					</div>
					<div className="marquee marquee-3">
						<ul className="marquee__content scroll">
							<li>Hardhat</li>
							<li>&#183;</li>
							<li>Remix IDE</li>
							<li>&#183;</li>
							<li>OpenZeppelin</li>
							<li>&#183;</li>
							<li>ChainLink</li>
							<li>&#183;</li>
							<li>Slither</li>
							<li>&#183;</li>
							<li>Echidna</li>
							<li>&#183;</li>
							<li>Etheno</li>
							<li>&#183;</li>
						</ul>
						<ul className="marquee__content scroll" aria-hidden="true">
							<li>Hardhat</li>
							<li>&#183;</li>
							<li>Remix IDE</li>
							<li>&#183;</li>
							<li>OpenZeppelin</li>
							<li>&#183;</li>
							<li>ChainLink</li>
							<li>&#183;</li>
							<li>Slither</li>
							<li>&#183;</li>
							<li>Echidna</li>
							<li>&#183;</li>
							<li>Etheno</li>
							<li>&#183;</li>
						</ul>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Home;
