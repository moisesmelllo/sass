import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import './styles/components/app.Sass';

function App() {

  return (
    <div id='portfolio'>
      <h1>Moises Melo</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App