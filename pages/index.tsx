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
									src="/img/homi.jpeg"
									alt="dygnify"
									width={120}
									height={50}
									className="sec_work_left_item-img"
									draggable="false"
								/>
								<div>
									<h3 className="sec_work_left_item-title">HOMINIDS
									</h3>
									<div className="sec_work_left_item-subtitle">
										<p>Full stack blockchian deeveloper</p>
										<p>JUL&apos;23 - Present</p>
									</div>
									<ul className="sec_work_left_item-ul">
										<li className="sec_work_left_item-ul-li">
											Spearheading development on Era‐Homi, a cross‐chain marketplace
											integrating ZetaChain, Polygon, Bitcoin, and EVM blockchains for
											seamless transactions and interoperability.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>


					<div className="sec_work">
						<div className="sec_work_left">
							<div className="sec_work_left_item">
								<Image
									src="/img/ast.jpeg"
									alt="dygnify"
									width={120}
									height={50}
									className="sec_work_left_item-img"
									draggable="false"
								/>
								<div>
									<h3 className="sec_work_left_item-title">AST Consulting
									</h3>
									<div className="sec_work_left_item-subtitle">
										<p>Substrate & Frontend Developer</p>
										<p>SEP&apos;23 - NOV&apos;23</p>
									</div>
									<ul className="sec_work_left_item-ul">
										<li className="sec_work_left_item-ul-li">
											Led Substrate‐based trust layer development and crafted frontend
											solutions for multiple projects as a skilled frontend engineer.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>


					<div className="sec_work">
						<div className="sec_work_left">
							<div className="sec_work_left_item">
								<Image
									src="/img/2xsolution.svg"
									alt="dygnify"
									width={120}
									height={50}
									className="sec_work_left_item-img"
									draggable="false"
								/>
								<div>
									<h3 className="sec_work_left_item-title">2xSolution</h3>
									<div className="sec_work_left_item-subtitle">
										<p>Blockchain Developer</p>
										<p>Jun&apos;23 - Jul&apos;23</p>
									</div>
									<ul className="sec_work_left_item-ul">
										<li className="sec_work_left_item-ul-li">
											Contributed to the development and auditing of smart contracts for
											a multi‐platform Raffle project, concurrently engaging in frontend
											development responsibilities.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="sec_work">
						<div className="sec_work_left">
							<div className="sec_work_left_item">
								<Image
									src="/img/dygnify.png"
									alt="dygnify"
									width={120}
									height={50}
									className="sec_work_left_item-img"
									draggable="false"
								/>
								<div>
									<h3 className="sec_work_left_item-title">Dygnify</h3>
									<div className="sec_work_left_item-subtitle">
										<p>Blockchain Developer</p>
										<p>January&apos;23 - May&apos;23</p>
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
