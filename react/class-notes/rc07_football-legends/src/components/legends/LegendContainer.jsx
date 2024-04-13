import Form from "react-bootstrap/Form";
import { data } from "../../helpers/data";
import { Container, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const LegendContainer = () => {
  console.log(data);
  return (
    <div>
      <Form.Control type="search" placeholder="Search legends..." />
      <Container>
        <Row xs={1} md={2} lg={3}>
          {data.map((Legend) => (
            // <Col xs={10} sm={8} md={6} lg={4} xl={3}>
            <Col>
              <Card>
                <Card.Img variant="top" src={Legend.img} />
                <Card.Header>
                  <Card.Title>Card Title</Card.Title>
                  
                </Card.Header>
                <ul className="m-auto">
                    {
                     legend.statistics.map(item=><li className="list-unstyled">{item}</li>) 
                     
                    }
                </ul>
                <span>{legend.official_career}</span>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
