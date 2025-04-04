import React from 'react';
import './css/Trucking.css'; // Import your Trucking.css file

function Trucking() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Replace with your actual access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error submitting form:", data);
        setResult(data.message || "An error occurred during submission.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("Failed to send form. Please try again later.");
    }
  };

  return (
    <main>
      <section id="autopbox" className="boxaround">
        <section>
          <img src="images/trucking.jpg" alt="First Row" />
        </section>
        <div id="autext">
          <h2>Want to join our team?</h2>
          <p>
            At our company, we’re more than just a trucking service—we’re a family of dedicated professionals committed to providing top-notch logistics solutions. If you’re looking
            for reliable transportation services for your freight, we’ve got you covered with a fleet of well-maintained trucks and a team of experienced drivers who prioritize safety,
            efficiency, and customer satisfaction. From local drayage to long-haul routes, we specialize in delivering your goods on time and in excellent condition.
            But we’re not just looking to serve customers; we’re also looking to grow our team! If you’re a skilled and motivated truck driver, we want you on our team. We offer
            competitive pay, flexible schedules, and a supportive work environment where safety and respect are always top priorities. Whether you’re a seasoned pro or new to the
            road, we provide the training, equipment, and resources you need to succeed.
            Join a company that values your expertise and hard work. With opportunities for advancement, steady work, and a strong commitment to work-life balance, we’re here to
            help you thrive. Whether you’re looking for a long-term career or just need a reliable trucking partner, we’re ready to work together and make every mile count. Let’s
            drive success forward—together!
          </p>
          <p>We require at least 5 years of CDL experience along with passing a drug tests.</p>
        </div>
      </section>
      <section id="join" className="boxaround">
        <h2>Please provide your information if you are interested in joining and meet our requirements</h2>
        <div>
          <form method="POST" id="form" className="form-container" onSubmit={onSubmit}>
            <input type="hidden" name="access_key" value="9aa849df-2454-48d2-b4d9-9f69c525c85e" />
            <div className="form-group">
              <label htmlFor="fname">First Name:</label>
              <input type="text" id="fname" name="firstname" placeholder="Your first name" required />
            </div>
            <div className="form-group">
              <label htmlFor="lname">Last Name:</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="email" placeholder="Your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="XXX-XXX-XXXX"
                pattern="^[0-9]{3}-[0-9]{3}-[0-9]{4}$"
                title="Enter a phone number in the format 123-456-7890"
                required
              />
            </div>
            <div id="bottomform">
              <button id="submitbtn" type="submit">
                Submit Form
              </button>
              <div id="result">{result}</div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Trucking;