import { memo, useEffect } from "react";
import otherServicesOne from "../../assets/OtherServicesOne.png";
import otherServicesTwo from "../../assets/OtherServicesTwo.png";
import otherServicesThree from "../../assets/cloudImage.webp";
import otherServicesFour from "../../assets/otherImageFour.jpg";
import otherServicesFive from "../../assets/otherServicesFive.webp";
import otherServicesSix from "../../assets/otherServicesSix.avif";
import otherServicesSeven from "../../assets/otherServicesSeven.avif";
import otherServicesEight from "../../assets/otherServicesEight.jpg";
import otherServicesNine from "../../assets/otherServicesNine.jpg";
import otherServicesTen from "../../assets/otherServicesTen.webp";
import "./services.css";
import FlipCard from "../../components/card/flip card/FlipCard";
import { useLocation } from "react-router-dom";

const servicesData = [
	{
		title: "Business Intelligence & Analytics",
		description:
			"Transform organizational data into actionable insights. Empower decision-making with real-time analytics and intuitive dashboards. Drive efficiency and innovation through data-driven strategies.",
		image: otherServicesSix,
	},
	{
		title: "Cloud Services & Virtualization",
		description:
			"Scale efficiently with secure cloud environments suited to any industry. Enhance flexibility with tailored cloud solutions and seamless migrations. Optimize performance and reduce costs with advanced virtualization strategies.",
		image: otherServicesThree,
	},
	{
		title: "Cybersecurity Solutions",
		description:
			"Protect your organization with industry-leading security measures. Detect, prevent, and respond to threats with cutting-edge technology. Ensure compliance and safeguard data with robust risk management strategies.",
		image: otherServicesTwo,
	},
	{
		title: "Digital Marketing Services",
		description:
			"Set up robust networks and IoT solutions for data-driven operations. Boost online presence with tailored SEO, PPC, and content strategies. Drive engagement and growth with analytics-driven marketing campaigns.",
		image: otherServicesTen,
	},
	{
		title: "IT Consulting & Strategy",
		description:
			"Get expert guidance on IT strategy aligned with industry-specific goals. Optimize workflows with innovative technology solutions. Empower your business with scalable and future-proof IT strategies.",
		image: otherServicesOne,
	},
	{
		title: "Machine Learning & AI Development",
		description:
			"Tailored machine learning solutions to meet unique organizational requirements. Leverage predictive analytics for smarter decision-making. Enhance efficiency with cutting-edge AI-driven automation tools.",
		image: otherServicesEight,
	},
	{
		title: "Managed IT Services & Support",
		description:
			"Comprehensive support and management of IT systems to ensure business continuity. Proactive monitoring and maintenance to minimize downtime. Flexible solutions tailored to your evolving IT needs.",
		image: otherServicesFour,
	},
	{
		title: "Network Setup & IoT Services",
		description:
			"Set up robust networks and IoT solutions for data-driven operations. Ensure seamless connectivity across devices and platforms. Enhance operational efficiency with scalable, secure network architectures.",
		image: otherServicesNine,
	},
	{
		title: "Software & Application Development",
		description:
			"Custom applications built for specific industry needs. Streamline processes with innovative, user-friendly solutions. Leverage cutting-edge technologies to drive digital transformation.",
		image: otherServicesFive,
	},
	{
		title: "System Integration & Infrastructure Management",
		description:
			"Integrate and manage systems seamlessly across departments. Ensure optimal performance with unified infrastructure solutions. Facilitate scalability and reliability for long-term growth.",
		image: otherServicesSeven,
	},
];

const ServiceItem = ({ title, description, image }) => (
	<div
		className="col col-12 col-lg-4 col-md-6 col-sm-12 pt-4 pb-4"
		style={{
			textAlign: "center",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		}}
	>
		<FlipCard image={image} title={title} text={description} />
		{/* <div className="col col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
				<div className="servicesImageCont">
					<img src={image} alt="image" />
				</div>
			</div> */}
	</div>
);

const OtherServices = () => {
	const location = useLocation();

	useEffect(() => {
		// Check if the URL contains a hash
		if (location.hash) {
			const targetId = location.hash.substring(1); // Remove the '#' from the hash
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the element
			}
		}
	}, [location]);
	return (
		<section className="servicesSection">
			<div style={{ padding: "3.5rem", background: "rgb(243, 243, 243)" }} id="services">
				<h1 style={{ fontWeight: "700" }}>Other Services</h1>
				<h5>Services | Other Services</h5>
			</div>
			<div
				className="row m-0 py-4 d-flex justify-content-center"
				style={{ flexDirection: "row" }}
			>
				{servicesData.map((service, index) => (
					<ServiceItem
						key={index}
						title={service.title}
						description={service.description}
						image={service.image}
					/>
				))}
			</div>
		</section>
	);
};

export default memo(OtherServices);

////////////////////    2    /////////////////////
// import { memo } from "react";
// import otherServicesOne from "../../assets/OtherServicesOne.png";
// import otherServicesTwo from "../../assets/OtherServicesTwo.png";
// import otherServicesThree from "../../assets/cloudImage.webp";
// import otherServicesFour from "../../assets/otherImageFour.jpg";
// import otherServicesFive from "../../assets/otherServicesFive.webp";
// import otherServicesSix from "../../assets/otherServicesSix.avif";
// import otherServicesSeven from "../../assets/otherServicesSeven.avif";
// import otherServicesEight from "../../assets/otherServicesEight.jpg";
// import otherServicesNine from "../../assets/otherServicesNine.jpg";
// import otherServicesTen from "../../assets/otherServicesTen.webp";
// import "./services.css";

// const servicesData = [
// 	{
// 		title: "Business Intelligence & Analytics",
// 		description: "Transform organizational data into actionable insights.",
// 		image: otherServicesSix,
// 	},
// 	{
// 		title: "Cloud Services & Virtualization",
// 		description:
// 			"Scale efficiently with secure cloud environments suited to any industry.",
// 		image: otherServicesThree,
// 	},
// 	{
// 		title: "Cybersecurity Solutions",
// 		description:
// 			"Protect your organization with industry-leading security measures.",
// 		image: otherServicesTwo,
// 	},
// 	{
// 		title: "Digital Marketing Services",
// 		description:
// 			"Set up robust networks and IoT solutions for data-driven operations.",
// 		image: otherServicesTen,
// 	},
// 	{
// 		title: "IT Consulting & Strategy",
// 		description:
// 			"Get expert guidance on IT strategy aligned with industry-specific goals.",
// 		image: otherServicesOne,
// 	},
// 	{
// 		title: "Machine Learning & AI Development",
// 		description:
// 			"Tailored machine learning solutions to meet unique organizational requirements.",
// 		image: otherServicesEight,
// 	},
// 	{
// 		title: "Managed IT Services & Support",
// 		description:
// 			"Comprehensive support and management of IT systems to ensure business continuity.",
// 		image: otherServicesFour,
// 	},
// 	{
// 		title: "Network Setup & IoT Services",
// 		description:
// 			"Set up robust networks and IoT solutions for data-driven operations.",
// 		image: otherServicesNine,
// 	},
// 	{
// 		title: "Software & Application Development",
// 		description: "Custom applications built for specific industry needs.",
// 		image: otherServicesFive,
// 	},
// 	{
// 		title: "System Integration & Infrastructure Management",
// 		description: "Integrate and manage systems seamlessly across departments.",
// 		image: otherServicesSeven,
// 	},
// ];

// const ServiceItem = ({ title, description, image }) => (
// 	<div
// 		className="col col-12 col-lg-6 col-md-12 col-sm-12 p-4"
// 		style={{
// 			textAlign: "center",
// 			display: "flex",
// 			flexDirection: "column",
// 			// justifyContent: "center",
// 			alignItems: "center",
// 		}}
// 	>
// 		{/* <div className="col col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center"> */}
// 		<div className="servicesImageCont">
// 			<img src={image} alt="service" />
// 		</div>
// 		{/* </div> */}
// 		<h3
// 			style={{
// 				fontWeight: "700",
// 				color: "#0071cdd5",
// 				paddingTop: "15px",
// 				width: "88%",
// 			}}
// 		>
// 			{title}
// 		</h3>
// 		<p style={{ fontSize: "larger", fontWeight: "600", width: "88%", }}>{description}</p>
// 	</div>
// );

// const OtherServices = () => {
// 	return (
// 		<section className="servicesSection">
// 			<div style={{ padding: "3.5rem", background: "rgb(243, 243, 243)" }}>
// 				<h1 style={{ fontWeight: "700" }}>Other Services</h1>
// 				<h5>Services | Other Services</h5>
// 			</div>
// 			<div className="row m-0 py-4 d-flex">
// 				{servicesData.map((service, index) => (
// 					<ServiceItem
// 						key={index}
// 						title={service.title}
// 						description={service.description}
// 						image={service.image}
// 					/>
// 				))}
// 			</div>
// 		</section>
// 	);
// };

// export default memo(OtherServices);

/////////////////////   1       /////////////
// import { memo } from "react";
// import otherServicesOne from "../../assets/OtherServicesOne.png";
// import otherServicesTwo from "../../assets/OtherServicesTwo.png";
// import otherServicesThree from "../../assets/cloudImage.webp";
// import otherServicesFour from "../../assets/otherImageFour.jpg";
// import otherServicesFive from "../../assets/otherServicesFive.webp";
// import otherServicesSix from "../../assets/otherServicesSix.avif";
// import otherServicesSeven from "../../assets/otherServicesSeven.avif";
// import otherServicesEight from "../../assets/otherServicesEight.jpg";
// import otherServicesNine from "../../assets/otherServicesNine.jpg";
// import otherServicesTen from "../../assets/otherServicesTen.webp";
// import "./services.css";

// const OtherServices = () => {
// 	return (
// 		<section className="servicesSection">
// 			<div style={{ padding: "3.5rem", background: "rgb(243, 243, 243)" }}>
// 				<h1 style={{ fontWeight: "700" }}>Other Services</h1>
// 				<h5>Services | Other Services</h5>
// 			</div>

// 			{/* div One */}
// 			<div className="row m-0 py-4">
// 				<div
// 					className="col col-12 col-lg-6 col-md-12 col-sm-12"
// 					style={{
// 						textAlign: "center",
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "center",
// 					}}
// 				>
// 					<h2
// 						style={{
// 							fontWeight: "700",
// 							color: "#0071cdd5",
// 							paddingTop: "10px",
// 						}}
// 					>
// 						Business Intelligence & Analytics
// 					</h2>
// 					<p style={{ fontSize: "larger", fontWeight: "600" }}>
// 						Transform organizational data into actionable insights.
// 					</p>
// 				</div>
// 				<div className="col col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
// 					<div className="servicesImageCont">
// 						<img src={otherServicesSix} alt="image" />
// 					</div>
// 				</div>
// 			</div>

// 			{/* div Two */}
// 			<div className="row m-0 py-4">
// 				<div
// 					className="col col-12 col-lg-6 col-md-12 col-sm-12"
// 					style={{
// 						textAlign: "center",
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "center",
// 					}}
// 				>
// 					<h2
// 						style={{
// 							fontWeight: "700",
// 							color: "#0071cdd5",
// 							paddingTop: "10px",
// 						}}
// 					>
// 						Cloud Services & Virtualization
// 					</h2>
// 					<p style={{ fontSize: "larger", fontWeight: "600" }}>
// 						Scale efficiently with secure cloud environments suited to any
// 						industry.
// 					</p>
// 				</div>
// 				<div className="col col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
// 					<div className="servicesImageCont">
// 						<img src={otherServicesThree} alt="image" />
// 					</div>
// 				</div>
// 			</div>

// 			{/* div Three */}
// 			<div className="row m-0 py-4">
// 				<div
// 					className="col col-12 col-lg-6 col-md-12 col-sm-12"
// 					style={{
// 						textAlign: "center",
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "center",
// 					}}
// 				>
// 					<h2
// 						style={{
// 							fontWeight: "700",
// 							color: "#0071cdd5",
// 							paddingTop: "10px",
// 						}}
// 					>
// 						Cybersecurity Solutions
// 					</h2>
// 					<p style={{ fontSize: "larger", fontWeight: "600" }}>
// 						Protect your organization with industry-leading security measures.
// 					</p>
// 				</div>
// 				<div className="col col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
// 					<div className="servicesImageCont">
// 						<img src={otherServicesTwo} alt="image" />
// 					</div>
// 				</div>
// 			</div>

// 			{/* div Four */}
// 			<div className="row m-0 py-4">
// 				<div
// 					className="col col-12 col-lg-6 col-md-12 col-sm-12"
// 					style={{
// 						textAlign: "center",
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "center",
// 					}}
// 				>
// 					<h2
// 						style={{
// 							fontWeight: "700",
// 							color: "#0071cdd5",
// 							paddingTop: "10px",
// 						}}
// 					>
// 						Digital marketing Services
// 					</h2>
// 					<p style={{ fontSize: "larger", fontWeight: "600" }}>
// 						Set up robust networks and IoT solutions for data-driven operations.
// 					</p>
// 				</div>
// 				<div className="col col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
// 					<div className="servicesImageCont">
// 						<img src={otherServicesTen} alt="image" />
// 					</div>
// 				</div>
// 			</div>

// 			{/* div Five */}
// 			<div className="row m-0 py-4">
// 				<div
// 					className="col col-12 col-lg-6 col-md-12 col-sm-12"
// 					style={{
// 						textAlign: "center",
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "center",
// 					}}
// 				>
// 					<h2
// 						style={{
// 							fontWeight: "700",
// 							color: "#0071cdd5",
// 							paddingTop: "10px",
// 						}}
// 					>
// 						IT Consulting & Strategy
// 					</h2>
// 					<p style={{ fontSize: "larger", fontWeight: "600" }}>
// 						Get expert guidance on IT strategy aligned with industry-specific
// 						goals.
// 					</p>
// 				</div>
// 				<div className="col col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
// 					<div className="servicesImageCont">
// 						<img src={otherServicesOne} alt="image" />
// 					</div>
// 				</div>
// 			</div>

// 			{/* div Six */}
// 			<div className="row m-0 py-4">
// 				<div
// 					className="col col-12 col-lg-6 col-md-12 col-sm-12"
// 					style={{
// 						textAlign: "center",
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "center",
// 					}}
// 				>
// 					<h2
// 						style={{
// 							fontWeight: "700",
// 							color: "#0071cdd5",
// 							paddingTop: "10px",
// 						}}
// 					>
// 						Machine Learning & AI Development
// 					</h2>
// 					<p style={{ fontSize: "larger", fontWeight: "600" }}>
// 						Tailored machine learning solutions to meet unique organizational
// 						requirements.
// 					</p>
// 				</div>
// 				<div className="col col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
// 					<div className="servicesImageCont">
// 						<img src={otherServicesEight} alt="image" />
// 					</div>
// 				</div>
// 			</div>

// 			{/* div Seven */}
// 			<div className="row m-0 py-4">
// 				<div
// 					className="col col-12 col-lg-6 col-md-12 col-sm-12"
// 					style={{
// 						textAlign: "center",
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "center",
// 					}}
// 				>
// 					<h2
// 						style={{
// 							fontWeight: "700",
// 							color: "#0071cdd5",
// 							paddingTop: "10px",
// 						}}
// 					>
// 						Managed IT Services & Support
// 					</h2>
// 					<p style={{ fontSize: "larger", fontWeight: "600" }}>
// 						Comprehensive support and management of IT systems to ensure
// 						business continuity.
// 					</p>
// 				</div>
// 				<div className="col col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
// 					<div className="servicesImageCont">
// 						<img src={otherServicesFour} alt="image" />
// 					</div>
// 				</div>
// 			</div>

// 			{/* div Eight */}
// 			<div className="row m-0 py-4">
// 				<div
// 					className="col col-12 col-lg-6 col-md-12 col-sm-12"
// 					style={{
// 						textAlign: "center",
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "center",
// 					}}
// 				>
// 					<h2
// 						style={{
// 							fontWeight: "700",
// 							color: "#0071cdd5",
// 							paddingTop: "10px",
// 						}}
// 					>
// 						Network Setup & IoT Services
// 					</h2>
// 					<p style={{ fontSize: "larger", fontWeight: "600" }}>
// 						Set up robust networks and IoT solutions for data-driven operations.
// 					</p>
// 				</div>
// 				<div className="col col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
// 					<div className="servicesImageCont">
// 						<img src={otherServicesNine} alt="image" />
// 					</div>
// 				</div>
// 			</div>

// 			{/* div Nine */}
// 			<div className="row m-0 py-4">
// 				<div
// 					className="col col-12 col-lg-6 col-md-12 col-sm-12"
// 					style={{
// 						textAlign: "center",
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "center",
// 					}}
// 				>
// 					<h2
// 						style={{
// 							fontWeight: "700",
// 							color: "#0071cdd5",
// 							paddingTop: "10px",
// 						}}
// 					>
// 						Software & Application Development
// 					</h2>
// 					<p style={{ fontSize: "larger", fontWeight: "600" }}>
// 						Custom applications built for specific industry needs.
// 					</p>
// 				</div>
// 				<div className="col col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
// 					<div className="servicesImageCont">
// 						<img src={otherServicesFive} alt="image" />
// 					</div>
// 				</div>
// 			</div>

// 			{/* div Ten */}
// 			<div className="row m-0 py-4">
// 				<div
// 					className="col col-12 col-lg-6 col-md-12 col-sm-12"
// 					style={{
// 						textAlign: "center",
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "center",
// 					}}
// 				>
// 					<h2
// 						style={{
// 							fontWeight: "700",
// 							color: "#0071cdd5",
// 							paddingTop: "10px",
// 						}}
// 					>
// 						System Integration & Infrastructure Management
// 					</h2>
// 					<p style={{ fontSize: "larger", fontWeight: "600" }}>
// 						Integrate and manage systems seamlessly across departments.
// 					</p>
// 				</div>
// 				<div className="col col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
// 					<div className="servicesImageCont">
// 						<img src={otherServicesSeven} alt="image" />
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default memo(OtherServices);
