import Carrossel from '../components/Carrossel'
import NavProjeto from '../components/NavProjeto'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from '../components/CardGroup';
import Footer from '../components/Footer';
//import "../index.css"

function Home() {
    return (
      <>
        <div>
          <NavProjeto/>
          <Carrossel/>
          <br/>
          <CardGroup/>
          <br/>
          <Footer/>
        </div>
      </>
    )
  }
  
  export default Home