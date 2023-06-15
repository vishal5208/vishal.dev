import Image from "next/image";
import { useRouter } from "next/router";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__copyright">
				<span className="thanks">© 2023 Vishal</span>
			</div>
			<div className="footer__links">
				<a
					href="mailto:vishald5208@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					title="email"
				>
					<span className="text">email</span>
					<Image
						src="/img/social/email.svg"
						alt="email"
						width={24}
						height={24}
					/>
				</a>
				<a
					href="https://twitter.com/vd9119"
					target="_blank"
					rel="noopener noreferrer"
					title="twitter"
				>
					<span className="text">twitter</span>{" "}
					<Image
						src="/img/social/twitter.svg"
						alt="twitter"
						width={24}
						height={24}
					/>
				</a>
				<a
					href="https://github.com/vishal5208"
					target="_blank"
					rel="noopener noreferrer"
					title="github"
				>
					<span className="text">github</span>
					<Image
						src="/img/social/github.svg"
						alt="github"
						width={24}
						height={24}
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/vishal5208/"
					rel="noopener noreferrer"
					target="_blank"
					title="linkedin"
				>
					<span className="text">linkedin</span>
					<Image
						src="/img/social/linkedin.svg"
						alt="linkedin"
						width={24}
						height={24}
					/>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
