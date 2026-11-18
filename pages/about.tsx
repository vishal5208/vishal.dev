import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Uses() {
	return (
		<>
			<Head>
				<title>Vishal D</title>
			</Head>
			<Navbar />
			<main style={{ maxWidth: "900px" }}>
				<section id="intro">
					<h1>About</h1>
					<p>
						I’m a blockchain developer with 3+ years building production DeFi and
						Web3 products on EVM chains: smart contracts in Solidity, DeFi
						integrations, and full stack delivery with Node.js, React and
						TypeScript.
					</p>
					<p>
						My expertise lies in
						<ul>
							<li>
								<strong>
									Languages → [ Solidity, JavaScript / TypeScript, Python, Rust
									]
								</strong>
							</li>
							<li>
								<strong>
									Blockchain → [ EVM, DeFi, Uniswap V2/V3, Chainlink CCIP,
									Circle CCTP, IPFS, Substrate ]
								</strong>
							</li>
							<li>
								<strong>
									Security & Testing → [ Slither, Echidna, Etheno, Hardhat,
									Chai, Mocha ]
								</strong>
							</li>
							<li>
								<strong>
									Back-End → [ Node.js, REST APIs, Telegram Bot API, Discord Bot
									API ]
								</strong>
							</li>
							<li>
								<strong>
									Front-End → [ React, TypeScript, TailwindCSS, Material UI ]
								</strong>
							</li>
							<li>
								<strong>
									Tools → [ Git/GitHub, Hardhat, Ethers.js, VS Code, Vim ]
								</strong>
							</li>
						</ul>
					</p>
					<p>
						Here is my{" "}
						<a
							href="https://drive.google.com/file/d/1tBHiJTEzwWRepCioOfcvAdaSWzU288Ac/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							Resume
						</a>
					</p>

					<p>
						Apart from professional things I love Anime, I have watched 200+
						shows. I love to travel and spend time with my family and friends.
					</p>
				</section>
				<section className="about_body"></section>
			</main>
		</>
	);
}
