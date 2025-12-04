import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Products() {
  const items = [
    { title: "Arroz Camil 5kg", sales: 310, img: "https://picsum.photos/400/200?1" },
    { title: "Feijão Preto 1kg", sales: 180, img: "https://picsum.photos/400/200?2" },
    { title: "Óleo de Soja 900ml", sales: 450, img: "https://picsum.photos/400/200?3" },
  ];

  return (
    <Container className="my-4">
      <Row>
        {items.map((item, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="card-custom shadow-sm">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="text-yellow">{item.sales} vendidos</Card.Text>

                <div className="d-flex justify-content-between">
                  <Button className="btn-warning-custom">Detalhes</Button>
                  <Button variant="primary">Adicionar 🛒</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
