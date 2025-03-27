import Tree from '../components/Tree';
import './css/Home.css';
function App() {
  return (
    <>
    <section className = "columns">
      <Tree
      name="Live Oak"
      description="Doesn't lose it's leaves."
      image="images/live-oak.jpg"
      />
      <Tree
      name="Dogwood"
      description="Flowers in spring"
      image="images/dogwood.jpeg"
      />

    </section>
    </>
  );
}

export default App;
