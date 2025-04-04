import React from 'react';
import RateCalculator from '../components/RateCalculator';
import './css/Rates.css'; // Import your Rates.css file

function Rates() {
    return (
        <main>
            <section id="autopbox">
                <section>
                    <img id="rateimg" src="images/longterm.png" alt="Long Term Storage">
                    </img>
                </section>
                <div id="autext" className="boxaround">
                    <h2>Long-Term Storage Options</h2>
                    <p>
                        Our warehouse offers over 2,000 square feet of secure, climate-controlled space for long-term storage, ensuring your goods remain in excellent condition. With high ceilings
                        and optimized shelving, we can accommodate a variety of storage needs, from pallets to oversized equipment. Our facility is equipped with 24/7 security monitoring, giving
                        you peace of mind that your inventory is protected at all times. Regular maintenance and pest control measures are in place to keep the environment clean and safe for all
                        stored items.
                        We offer flexible storage plans to fit your business requirements, whether you need space for surplus inventory, seasonal stock, or long-term asset storage. Our experienced
                        staff carefully handle all incoming and outgoing shipments, ensuring accurate inventory management. With an organized layout and efficient retrieval process, you can access
                        your items quickly whenever needed. We also provide assistance with labeling, tracking, and shipping coordination for added convenience. Whether you require short-term
                        overflow storage or a permanent warehousing solution, our facility is designed to support your long-term storage needs with reliability and efficiency. Our warehouse also
                        offers customizable storage solutions, allowing you to scale up or down as your needs change. With a commitment to security, organization, and efficiency, we ensure that
                        your assets are stored safely and always ready for retrieval.
                    </p>
                </div>
            </section>
            <RateCalculator/>
        </main>
    );
}

export default Rates;