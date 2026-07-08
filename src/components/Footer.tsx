import Link from "next/link";

export default function Footer() {
	return (
		<div className="footer">
			<p>&copy; 2024 ESRAFIL. All Rights Reserved.</p>
			<div className="footer__links">
				{["About", "Privacy Policy", "Licensing", "Contact"].map((item) => (
					<Link
						key={item}
						href={`/${item.toLowerCase().replace(" ", "-")}`}
						className="footer__link"
						scroll={false}
					>
						{item}
					</Link>
				))}
			</div>
		</div>
	);
}
