import NavProjeto from '../components/NavProjeto'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import Carrossel2 from '../components/Carrossel2';


function Sobre() {
  return (
    <>
      <div>
      <NavProjeto/>
      <Carrossel2/>
      <br/>
       <h1>Sobre Nós</h1>
       <br/>
       <p>
        A antiga livraria John Sandoe Books é um refúgio encantador para os amantes de livros. Com uma fachada histórica e um interior acolhedor, preenchido por estantes altas e estreitas, repletas de raridades literárias. As diversas obras e as encadernações antigas transportam os visitantes para uma era perdida. A atmosfera nostálgica e a experiência tangível da leitura tornam essa livraria um tesouro cultural. Também conta com obras novas e modernas para agradar todos os públicos.</p> 
      <br/> 
      <br />
      <br/>
          <Footer/>
      </div>
    </>
  )
}

export default Sobre