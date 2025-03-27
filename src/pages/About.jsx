import './css/About.css';

function About() {
    return (
        <>
             <main>
            <section id="autopbox" class="boxaround">
                <section>
                    <img id="ourstafftopimg" src="images/about.png" alt="First Row"/>
                </section>
                <div id="autext">
                    <h2>Our Staff</h2>
                    <p>We are equipped with four highly skilled and experienced forklift operators, each bringing valuable expertise to our team. With a combined experience of over 50 years, 
                        they are dedicated to ensuring your truck is loaded quickly, safely, and efficiently. Their knowledge allows them to handle a variety of loads with precision, minimizing 
                        any risk of damage or delays. If you have concerns about securing your load, our operators will assist in strapping it down to ensure stability during transit. They are 
                        also committed to following all safety regulations, so if a requested loading method is deemed unsafe, they will provide alternative solutions that comply with our strict 
                        safety protocols.

                        Beyond our skilled operators, our office is staffed by two highly efficient and knowledgeable managers who will check you in upon arrival, verify your load, and ensure 
                        you’re on your way as quickly as possible. With several years of experience in our operation, as well as time spent working in the railroad industry, they bring a wealth 
                        of logistical expertise. Their familiarity with freight handling allows them to assist in loading your container when necessary, ensuring every aspect of your visit runs 
                        smoothly. Whether it’s coordinating shipments, handling paperwork, or providing hands-on assistance, our team is dedicated to offering seamless service from check-in to 
                        departure.Their strong attention to detail ensures that every load is properly accounted for and that drivers receive the correct shipments without delay. With a commitment 
                        to efficiency and customer satisfaction, our entire team works together to provide a smooth, hassle-free loading experience every time.
                    </p>
                </div>
            </section>
            <section class="employee boxaround">
                <img class="employeeimg" src="images/employee3.jpg"/>
                <div class="employeediv">
                <h2>Travis Dunlap</h2>
                <p>Travis Dunlap is a dedicated Warehouse Manager who ensures daily operations run efficiently and smoothly. With years of experience in logistics, he excels at optimizing storage, 
                    coordinating shipments, and managing a hardworking team. Known for his hands-on leadership style, Travis isn’t afraid to jump in and help when things get hectic. 
                    His attention to detail and problem-solving skills keep the warehouse organized and running like a well-oiled machine.Travis Dunlap has spent over a decade mastering warehouse 
                    logistics, making him a trusted leader in operations management. He takes pride in mentoring his team, ensuring every employee is trained to handle the fast-paced demands of 
                    the warehouse. Always looking for ways to improve efficiency, Travis implements new strategies to streamline workflows and reduce downtime. His ability to stay calm under 
                    pressure and make quick decisions keeps the warehouse running at peak performance.</p>
                </div>
            </section>
            <section class="employee boxaround">
                <img class="employeeimg" src="images/employee2.png"/>
                <div class="employeediv">
                <h2>Jake Thornton</h2>
                <p>Jake Thornton is the hardworking Assistant Warehouse Manager who keeps operations running seamlessly alongside the management team. He specializes in employee coordination, 
                    inventory oversight, and ensuring safety protocols are always followed. Known for his strong communication skills, Jake is the go-to person when issues arise on the warehouse 
                    floor. His dedication and problem-solving mindset make him an invaluable asset to the company.</p>
                </div>
            </section>            <section class="employee boxaround">
                <img class="employeeimg" src="images/employee1.jpg"/>
                <div class="employeediv">
                <h2>Robin Williams</h2>
                <p>Robin is a meticulous warehouse accounting specialist who ensures every shipment and inventory record is accurately documented. Known for their keen eye for detail, 
                    Robin quickly identifies discrepancies and resolves them before they become major issues. Despite working behind the scenes, Robin’s efficiency keeps the entire warehouse 
                    running smoothly.</p>
                </div>
            </section>            
            <section class="employee boxaround">
                <img class="employeeimg" src="images/employee4.jpg"/>
                <div class="employeediv">
                <h2>Bryce Holloway</h2>
                <p>Bryce Holloway is a skilled Forklift Operator with 12 years of experience, known for his precision and efficiency in handling warehouse inventory. He expertly navigates 
                    tight spaces and ensures that products are safely loaded, unloaded, and stored. With a strong focus on safety, Bryce follows all protocols to prevent accidents and keep 
                    operations running smoothly. His reliability and work ethic make him a key player in the warehouse team. Bryce takes great pride in his ability to move heavy shipments 
                    quickly and safely, ensuring the warehouse operates efficiently. Over his 12-year career, he has developed a keen eye for spotting potential hazards and preventing 
                    accidents before they happen. His coworkers appreciate his reliability and willingness to help, whether it’s assisting with loading trucks or maintaining equipment. 
                    Bryce’s dedication to his craft makes him an essential part of the warehouse team, keeping operations smooth and on schedule.
                </p>
                </div>
            </section>



            <section id="aubottombox" class="boxaround">
                <div id="contacttext">
                    <h2>Contact Information</h2>
                        <ul id="contactinfo">
                            <li><a><img id="contactimg" src="images/email.png"/>Email: tdunlap@cla.com</a></li>
                            <li><a> <img id="contactimg" src="images/phone.png"/>Phone: (843)123-4567</a></li>
                        </ul>
                </div>
            </section>
            <script src="script.js"></script>
        </main>
        </>
    );
}

export default About;