import contactImageOne from "../../assets/contactImageOne.png";
import FeedbackForm from "../../components/Form/FeedbackForm";
import "./contact.css";

const Contact = () => {
	return (
		<section className="contactSection">
			<div style={{ padding: "3.5rem", background: "rgb(243, 243, 243)" }}>
				<h1 style={{ fontWeight: "700" }}>Contact Us</h1>
				<h5>Home | Contact Us</h5>
			</div>

			{/* div One */}
			<div id="contactDivOne" className="row m-0 py-4">
				<div
					className="col col-12 col-lg-6 col-md-12 col-sm-12"
					style={{
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<h2 style={{ fontWeight: "700", color: "#0071cdd5" }}>
						Ready to Experience the EsJare Difference?
					</h2>
					<span
						style={{
							fontSize: "large",
							fontWeight: "400",
							padding: "0px 1rem 1rem 1rem",
						}}
					>
						Reach out to us to explore how we can work together to make a
						meaningful impact in the healthcare industry.
					</span>
					<p style={{ fontSize: "larger", fontWeight: "500" }}>
						Choose EsJare for innovative and reliable healthcare solutions.
					</p>
				</div>
				<div className="col col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
					<div className="contactImageCont">
						<img src={contactImageOne} alt="image" />
					</div>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
				className="p-5"
			>
				<h2 style={{ fontWeight: "700", color: "#0071cdd5" }}>
					Send us a message
				</h2>
				<FeedbackForm incEmail={true} incSubject={true} incText={true}/>
			</div>
		</section>
	);
};

export default Contact;
