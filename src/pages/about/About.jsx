import aboutImageOne from "../../assets/aboutOne.png";
import aboutImageTwo from "../../assets/aboutTwo.png";
import aboutImageThree from "../../assets/aboutThree.png";
import "./about.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
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
		<>
			<section className="aboutSection">
				<div style={{ padding: "3.5rem", background: "rgb(243, 243, 243)" }}>
					<h1 style={{ fontWeight: "700" }}>About</h1>
					<h5>Home | About</h5>
				</div>

				{/* div One */}
				<div id="ourhistory" className="row m-0 py-4">
					<div
						className="col col-12 col-lg-7 col-md-12 col-sm-12"
						style={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						<h2 style={{ fontWeight: "700", color: "#0071cdd5" }}>
							Our History
						</h2>
						<p style={{ fontSize: "larger", fontWeight: "600" }}>
							EsJare is a U.S-based, Al-driven healthcare company focused on
							delivering innovative data science solutions to hospitals,
							clinics, research institutions, and emergency medical services.
							Founded by experts in healthcare and artificial intelligence, we
							are committed to transforming the industry through customized Al
							models that address specific operational and clinical challenges.
						</p>
					</div>
					<div className="col col-12 col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center">
						<div className="aboutImageCont">
							<img src={aboutImageOne} alt="image" />
						</div>
					</div>
				</div>

				{/* div two */}
				<div id="mission" className="row m-0 py-4">
					<div
						className="col col-12 col-lg-7 col-md-12 col-sm-12"
						style={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						<h2 style={{ fontWeight: "700", color: "#0071cdd5" }}>
							Our Mission
						</h2>
						<p style={{ fontSize: "larger", fontWeight: "600" }}>
							Our mission at EsJare HealthAl Solutions LLC is to revolutionize
							healthcare through the power of Al and data science. We aim to
							empower healthcare providers with predictive, actionable insights
							that enhance patient outcomes, streamline operations, and optimize
							resource utilization. By developing Al models tailored to the
							unique needs of each organization, we strive to create a future
							where technology drives healthcare efficiency, precision, and
							accessibility for all.
						</p>
					</div>
					<div className="col col-12 col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
						<div className="aboutImageCont">
							<img src={aboutImageThree} alt="image" />
						</div>
					</div>
				</div>

				{/* div three */}
				<div id="whychoose" className="row m-0 py-4">
					<div
						className="col col-12 col-lg-7 col-md-12 col-sm-12"
						style={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						<h2 style={{ fontWeight: "700", color: "#0071cdd5" }}>
							Why Choose Us
						</h2>
						<p style={{ fontSize: "larger", fontWeight: "600" }}>
							At EsJare, we are dedicated to transforming healthcare with
							innovative, Al-driven solutions that go beyond traditional
							analytics. We provide hospitals, clinics, and ambulance services
							with customizable Al models to address their unique operational
							and clinical needs. Our solutions deliver real-time insights to
							support decision-making in high-stakes situations, improve patient
							outcomes, and streamline workflows. By optimizing resource
							allocation and seamlessly integrating with existing systems, we
							empower healthcare providers to enhance efficiency and elevate
							patient care. Choose EsJare for tailored, impactful healthcare Al
							that drives measurable improvements across your organization.
						</p>
					</div>
					<div className="col col-12 col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
						<div className="aboutImageCont">
							<img src={aboutImageTwo} alt="image" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
