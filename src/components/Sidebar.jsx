import perfil from '../img/perfil.jpg'

import SocialNetwork from './socialNetwork'
import InformationContainer from './InformationContainer'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={perfil} alt='perfil'/>
      <p className="title">Desenvolvedor</p>
      <SocialNetwork />
      <InformationContainer />
      <a href="" className='btn'>
        Download curriculo
      </a>
    </aside>
  )
}

export default Sidebar