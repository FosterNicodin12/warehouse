import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './css/Services.css';

function Services() {
    return (
        <>
        <main>
            <section className="boxaround">
                <h2>Service Synopsis</h2>
                <p>
                    We offer a comprehensive range of logistics solutions, including local drayage, transloading, cross-docking, long-term storage, and unloading/palletizing services. 
                    Our fleet of experienced drivers and well-maintained trucks ensure that your freight is moved efficiently and securely. Whether you need quick short-haul transport, 
                    organized palletizing, or seamless transfers between transportation modes, we’ve got you covered. Our state-of-the-art facility and skilled team work together to provide 
                    reliable, customer-focused services that streamline your supply chain. Whatever your logistics needs, we’re here to make the process smoother and more cost-effective.
                    Select one of the options to learn about it, and to go to the rate calculator!
                </p>
            </section>
            <section className="boxaround">
                <h2>Select the service you are interested in to learn more about it</h2>
                <section id="topimages">
                    <div id="service" className="one">
                        <Link to="/rates"><img src="images/longtermservice.png" alt="Long-Term Storage" /></Link>
                        <h3>Long-Term Storage</h3>
                    </div>
                    <div id="service" className="one">
                        <Link to = "/unload"><img src="images/unloadservice.jpg" alt="Unload and Palletize" /></Link>
                        <h3>Unload and Palletize</h3>
                    </div>
                    <div id="service" className="one">
                        <Link to="/transload"><img src="images/transloadservice.png" alt="Transload" /></Link>
                        <h3>Transload</h3>
                    </div>
                </section>
                <section id="bottomimages">
                    <div id="service" className="one">
                        <Link to="/crossdock"><img src="images/crossdockingservice.png" alt="Cross Docking" /></Link>
                        <h3>Cross Docking</h3>
                    </div>
                    <div id="service" className="one">
                        <Link to="/localdray"><img src="images/localservice.jpg" alt="Local Dray" /></Link>
                        <h3>Local Dray</h3>
                    </div>
                </section>
            </section>
            <script src="script.js"></script>
        </main>
        </>
    );
}

export default Services;