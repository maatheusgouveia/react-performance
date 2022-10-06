import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html>
			<Head />

			<body>
				<Main />

				<NextScript />

				<Script id="google-analytics" strategy="afterInteractive">
					{`
          				<!-- Google tag (gtag.js) -->
						<script async src="https://www.googletagmanager.com/gtag/js?id=G-V1SPWPVB0P"></script>
						<script>
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', 'G-V1SPWPVB0P');
						</script>
        			`}
				</Script>
			</body>
		</Html>
	);
}
