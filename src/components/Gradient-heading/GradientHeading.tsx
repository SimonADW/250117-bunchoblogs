import React from "react";

type GradientHeadingProps = {
	children: React.ReactNode;
	angleDegrees?: number;
	color1?: string;
	color2?: string;
	heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const GradientHeading = ({
	children,
	angleDegrees = 90,
	color1 = "red",
	color2 = "blue",
	heading = "h1",
}: GradientHeadingProps) => {
	const Tag = heading;
	return (
		<Tag
			style={{
				// Gradient-related styles
				background: `linear-gradient(${angleDegrees}deg, ${color1}, ${color2})`,
				color: "transparent",
				backgroundClip: "text",
				// Other styles				
				letterSpacing: 4
			}}
		>
			{children}
		</Tag>
	);
};

export default GradientHeading;
