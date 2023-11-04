import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import '../styles/components/InformationContainer.sass'

const InformationContainer = () => {
  return (
    <section id='information-container'>
      <div className='info-card'>
        <AiFillPhone id='phone-icon' />
        <div>
          <h3>Telefone</h3>
          <p>(xx) xxxx-xxxx</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id='email-icon' />
        <div>
          <h3>E-mail</h3>
          <p>email@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id='pin-icon' />
        <div>
          <h3>Localicação</h3>
          <p>Guarulhos, SP</p>
        </div>
      </div>
    </section>
  )
}

export default InformationContainer