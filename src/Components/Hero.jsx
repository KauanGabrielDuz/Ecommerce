import { Container, Button } from "react-bootstrap";

export default function Hero() {
  return (
    <div
      className="py-5 text-white"
      style={{
        background: "linear-gradient(135deg, #003566, #0d6efd)"
      }}
    >
      <Container className="text-center py-5">
        <h1 className="display-4 fw-bold">Templates Modernos</h1>
        <p className="lead mb-4">
          Estilos profissionais para seus projetos e negócios.
        </p>
        <Button size="lg" variant="light" className="text-primary fw-bold">
          Explorar Agora
        </Button>
      </Container>
    </div>
  );
}
