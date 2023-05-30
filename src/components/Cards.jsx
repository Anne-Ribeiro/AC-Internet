import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from './Botao';
//import"../App.css"

function Cards() {
  const dados = [
    {
      titulo:'Biografias',
      descricao:'Biografias de diversas personalidades e intelectuais',
      foto:'https://images.pexels.com/photos/14454202/pexels-photo-14454202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      titulo:'Promocionais',
      descricao:'Livros que entraram em promoção nesse mês!',
      foto:'https://images.pexels.com/photos/13159182/pexels-photo-13159182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      titulo:'Romances',
      descricao:'Romances clássicos e jovens para todos os públicos!',
      foto:'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]
  return (
    <CardGroup>
      {dados.map(({titulo, descricao, foto}) =>(
        <Card key={titulo}>
          <Card.Img variant='top' src={foto}/>
          <Card.Body>
            <Card.Title className='titulo'>{titulo}</Card.Title>
            <Card.Text>{descricao}</Card.Text>
            <Button className='botao'>Saiba Mais</Button>
          </Card.Body>
        </Card>
    ))};
    </CardGroup>
   
  );
}

export default Cards;