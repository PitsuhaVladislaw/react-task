import './App.css';
import Text from './components/Text/Text';

import Headphones from '../src/assets/img/image 2.png'
import Radio from './components/Radio/Radio';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="board">
      <div className="card">
        <img src={Headphones} alt='headphones' />
        <Text />
        <Radio />
        <Button />
        <a href="https://www.figma.com/file/veQLNJXiEhXPkp83krstLh/Product-card-(Community)?node-id=2%3A7&mode=dev">Read reviews</a>
      </div>
    </div>
  );
}

export default App;
