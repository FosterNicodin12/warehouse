import './css/Home.css';
function App() {
  return (
    <>
        <main className="boxaround">
            <img id="bottomimage" src={`${process.env.PUBLIC_URL}/images/mainimage.png`} alt="Charleston, SC Warehouse" />
            <p>Charleston, SC Warehouse</p>
            <p>
                We are here for all your warehousing and trucking needs. We have 12 docks along with space for 
                flatbeds to back into the warehouse for loading. There is also an onsite 2-acre drop lot, if the 
                containers do not need to be immediately unloaded, or for trips through the port.
            </p>
        </main>
    </>
  );
}

export default App;
