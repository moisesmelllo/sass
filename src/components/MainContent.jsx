import '../styles/components/MainContent.sass'
import About from './mainContent/About'
import Projetos from './mainContent/Projetos'
import Tecnologias from './mainContent/Tecnologias'

const MainContent = () => {
  return (
    <main id='main-content'>
      <About />
      <Tecnologias />
      <Projetos />
    </main>
  )
}

export default MainContent
