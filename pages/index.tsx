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
					<Image
						src="/img/profile.jpeg"
						alt="Vishal Ashok Daragade"
						width={300}
						height={300}
					/>
					<div className="heading_right">
						<RoughNotationGroup show={true}>
							<h2 className="heading_right-title">Vishal Ashok Daragade</h2>
							<h3 className="heading_right-subtitle">
								Blockchain Developer | Solidity, DeFi, Smart Contracts
							</h3>
							<br />
							<p className="heading_right-desc">
								Hi, I’m Vishal, a{" "}
								<Highlight color="#4E31AA" type="circle">
									blockchain developer
								</Highlight>{" "}
								with 3+ years building production DeFi and Web3 products on EVM
								chains. I wrote swap smart contracts at ChainSwap, a platform
								with{" "}
								<Highlight color="#C7D3FC" type="circle">
									$92M+ in lifetime trading volume
								</Highlight>
								, including Chainlink CCIP and Circle CCTP cross-chain swaps.
								Currently freelancing: building a gas-optimised arbitrage
								engine on Base, a live Polymarket trading bot and an automated
								P2P escrow bot that has completed 40+ deals.
							</p>
							<p className="heading_right-desc">
								Winner of the ZetaChain BTC Challenge Hackathon ($10,000). I
								thrive on solving complex problems and shipping production-grade
								smart contracts. When I&apos;m not coding or enjoying{" "}
								<Highlight color="#E96479" type="circle">
									Korean dramas
								</Highlight>{" "}
								I find relaxation in practicing meditation, traveling, and
								listening to music.
							</p>

							<a
								className="status"
								href="https://drive.google.com/file/d/1tBHiJTEzwWRepCioOfcvAdaSWzU288Ac/view?usp=sharing"
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
								<div>
									<h3 className="sec_work_left_item-title">
										Freelance Blockchain & Full Stack Developer
									</h3>
									<div className="sec_work_left_item-subtitle">
										<p>Self-employed, Remote</p>
										<p>Jul&apos;25 - Present</p>
									</div>
									<ul className="sec_work_left_item-ul">
										<li className="sec_work_left_item-ul-li">
											Deliver smart contracts, Node.js back ends and React and
											TypeScript front ends for multiple clients.
										</li>
										<li className="sec_work_left_item-ul-li">
											Built and deployed an automated Polymarket trading bot
											running unattended in live markets.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="sec_work">
						<div className="sec_work_left">
							<div className="sec_work_left_item">
								<div>
									<h3 className="sec_work_left_item-title">Decentia</h3>
									<div className="sec_work_left_item-subtitle">
										<p>Smart Contract & Backend Developer</p>
										<p>Sep&apos;24 - Jul&apos;25</p>
									</div>
									<ul className="sec_work_left_item-ul">
										<li className="sec_work_left_item-ul-li">
											Built a low-latency, gas-optimised arbitrage engine on
											Base with cross-DEX trade simulation.
										</li>
										<li className="sec_work_left_item-ul-li">
											Set up and ran backend infrastructure including full nodes
											for Base, Arbitrum and Ethereum.
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
									src="/img/chainswap.png"
									alt="ChainSwap"
									width={10}
									height={50}
									className="sec_work_left_item-img"
									draggable="false"
								/>
								<div>
									<h3 className="sec_work_left_item-title">ChainSwap
									</h3>
									<div className="sec_work_left_item-subtitle">
										<p>Full Stack Blockchain Developer</p>
										<p>March&apos;24 - Sep&apos;24 </p>
									</div>
									<ul className="sec_work_left_item-ul">
										<li className="sec_work_left_item-ul-li">
											Wrote and tested swap smart contracts with Node.js
											integrations and Uniswap V2/V3 support, on a platform that
											has processed over $92 million in lifetime trading volume.
										</li>
										<li className="sec_work_left_item-ul-li">
											Delivered same-chain swap, cross-chain swap (Chainlink
											CCIP), privacy swap, instant swap and Solana cross-chain
											swap (Circle CCTP).
										</li>
										<li className="sec_work_left_item-ul-li">
											Built the React user interface for the full swap product.
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
									src="/img/asap.png"
									alt="Asap Sniper Bot"
									width={120}
									height={50}
									className="sec_work_left_item-img"
									draggable="false"
								/>
								<div>
									<h3 className="sec_work_left_item-title">Asap Sniper Bot</h3>
									<div className="sec_work_left_item-subtitle">
										<p>Blockchain Developer</p>
										<p>Jan&apos;24 - Present</p>
									</div>
									<ul className="sec_work_left_item-ul">
										<li className="sec_work_left_item-ul-li">
											Developed the Discord UI, integrated support for Ethereum,
											Binance Smart Chain, and Base, and wrote and tested smart
											contracts for swapping tokens using Uniswap V2 & V3.
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
									alt="AST Consulting"
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
											Built a trust layer using the Substrate framework in Rust.
										</li>
										<li className="sec_work_left_item-ul-li">
											Developed React front ends with Material UI for multiple
											projects.
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
									src="/img/homi.jpeg"
									alt="Hominids"
									width={120}
									height={50}
									className="sec_work_left_item-img"
									draggable="false"
								/>
								<div>
									<h3 className="sec_work_left_item-title">HOMINIDS
									</h3>
									<div className="sec_work_left_item-subtitle">
										<p>Full Stack Blockchain Developer</p>
										<p>JUL&apos;23 - NOV&apos;23</p>
									</div>
									<ul className="sec_work_left_item-ul">
										<li className="sec_work_left_item-ul-li">
											Worked on Era-Homi, a cross-chain marketplace integrating
											ZetaChain, Polygon, Bitcoin and EVM chains.
										</li>
										<li className="sec_work_left_item-ul-li">
											Won first prize ($10,000) at the ZetaChain BTC Challenge
											Hackathon.
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
									alt="2xSolution"
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
											Developed and audited smart contracts for a cross-platform
											Raffle project; handled front-end work in React and
											TypeScript.
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
									alt="Dygnify"
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
											Analysed and wrote test cases for smart contracts using
											Chai and Mocha; ran security analysis with Slither, Echidna
											and Etheno.
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
							<li>TypeScript</li>
							<li>&#183;</li>
							<li>Solidity</li>
							<li>&#183;</li>
							<li>Python</li>
							<li>&#183;</li>
							<li>Rust</li>
							<li>&#183;</li>
							<li>HTML</li>
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
							<li>TypeScript</li>
							<li>&#183;</li>
							<li>Solidity</li>
							<li>&#183;</li>
							<li>Python</li>
							<li>&#183;</li>
							<li>Rust</li>
							<li>&#183;</li>
							<li>HTML</li>
							<li>&#183;</li>
							<li>CSS</li>
							<li>&#183;</li>
						</ul>
					</div>
					<div className="marquee marquee-2">
						<ul className="marquee__content scroll">
							<li>Blockchain - Solidity / EVM / DeFi</li>
							<li>&#183;</li>
							<li>Frontend - React.js / TypeScript</li>
							<li>&#183;</li>
							<li>Backend - Node.js / Python</li>
							<li>&#183;</li>
						</ul>
						<ul className="marquee__content scroll" aria-hidden="true">
							<li>Blockchain - Solidity / EVM / DeFi</li>
							<li>&#183;</li>
							<li>Frontend - React.js / TypeScript</li>
							<li>&#183;</li>
							<li>Backend - Node.js / Python</li>
							<li>&#183;</li>
						</ul>
					</div>
					<div className="marquee marquee-3">
						<ul className="marquee__content scroll">
							<li>Hardhat</li>
							<li>&#183;</li>
							<li>Ethers.js</li>
							<li>&#183;</li>
							<li>Uniswap V2/V3</li>
							<li>&#183;</li>
							<li>Chainlink CCIP</li>
							<li>&#183;</li>
							<li>Circle CCTP</li>
							<li>&#183;</li>
							<li>Slither</li>
							<li>&#183;</li>
							<li>Echidna</li>
							<li>&#183;</li>
							<li>Etheno</li>
							<li>&#183;</li>
							<li>IPFS</li>
							<li>&#183;</li>
							<li>Git</li>
							<li>&#183;</li>
						</ul>
						<ul className="marquee__content scroll" aria-hidden="true">
							<li>Hardhat</li>
							<li>&#183;</li>
							<li>Ethers.js</li>
							<li>&#183;</li>
							<li>Uniswap V2/V3</li>
							<li>&#183;</li>
							<li>Chainlink CCIP</li>
							<li>&#183;</li>
							<li>Circle CCTP</li>
							<li>&#183;</li>
							<li>Slither</li>
							<li>&#183;</li>
							<li>Echidna</li>
							<li>&#183;</li>
							<li>Etheno</li>
							<li>&#183;</li>
							<li>IPFS</li>
							<li>&#183;</li>
							<li>Git</li>
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
