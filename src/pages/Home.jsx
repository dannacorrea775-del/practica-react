import Card from "../components/Card/Card";
import Title from "../components/Title/Title";

function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <Title title={ <>
      Desarrollo Web
      <br />
      I. S. C.
    </>
  }
/>

      <Card
        title="Mi primer proyecto en React"
        description="Este es mi primer componente reutilizable en React"
      />
    </div>
  );
}

export default Home;
