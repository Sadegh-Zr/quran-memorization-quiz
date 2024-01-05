import * as React from "react"
import { HADITH } from '../constants';
import { randomIntFromInterval } from '../utils';
import './index.css';
import { Link } from "gatsby";
import 'rodal/lib/rodal.css';
import Rodal from "rodal";

const getRandomHadith = () => {
  const randomNumber = randomIntFromInterval(0, HADITH.length - 1);
  return HADITH[randomNumber];
};

const useToggle = (defaultValue = false) => {
  const [state, updateState] = React.useState(defaultValue);
  const toggleState = () => { updateState(!state); };
  return [state, toggleState, updateState];
}

const juzList = [];
for (let i = 0; i < 30; i++) {
  juzList.push(i + 1);
}

const IndexPage = () => {
  const shownHadith = React.useRef(getRandomHadith());
  const [isModalVisible, toggleModal] = useToggle(true);
  const [juz, updateJuz] = React.useState('1');
  const renderJuz = () => {
    return juzList.map((juzNumber) => <option value={juzNumber}>جزء {juzNumber}</option>)
  }
  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <main className="Index">
      <div>
        <h1>آزمون‌های حفظ قرآن</h1>
        <p className="hadith">
          <span className="hadith__from">قال {shownHadith.current.from}:</span>
          <span>{` ${shownHadith.current.text}`}</span>
        </p>
        <p className="hadith-translation">
          <span>{shownHadith.current.from} فرمودند:</span>
          <span>{` ${shownHadith.current.translation}`}</span>
        </p>
      </div>
      <button onClick={toggleModal}>آزمون</button>
      <Rodal visible={isModalVisible} enterAnimation="slideUp" leaveAnimation="fade" onClose={toggleModal}>
        <div className="modal">
          <h1>تنظیمات آزمون</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="form__rangeWrapper">
              <select id="range" value={juz} onChange={({ target }) => { updateJuz(target.value) }}>
                <option value="total">کل قرآن</option>
                {renderJuz()}
              </select>
            </div>
            <button type="submit" onClick={handleSubmit}>شروع آزمون</button>
          </form>
        </div>
      </Rodal>
    </main>
  )
}

export default IndexPage;

export const Head = () => <title>آزمون‌های حفظ قرآن</title>
