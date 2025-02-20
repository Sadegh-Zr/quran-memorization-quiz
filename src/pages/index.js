import * as React from "react"
import './index.css';
import 'rodal/lib/rodal.css';
import { navigate } from "gatsby";
import { JUZ_RANGES } from "../constants";


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
  const [juz, updateJuz] = React.useState('1');
  const [startingPage, updateStartingPage] = React.useState('');
  const [endingPage, updateEndingPage] =  React.useState('');
  const renderJuz = () => {
    return juzList.map((juzNumber) => <option value={juzNumber}>جزء {juzNumber}</option>)
  }
  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/quiz?juz=${juz}`)
  }

  React.useEffect(() => {
    const [juzStartPage, juzEndPage] = JUZ_RANGES.find(juzItem => juzItem.id === Number(juz))?.pages;
    updateStartingPage(juzStartPage);
    updateEndingPage(juzEndPage);
  }, [juz])
  return (
    <main className="Index">
      <h1>آزمون حفظ قرآن</h1>
      <div className="options">
        <select id="range" value={juz} onChange={({ target }) => { updateJuz(target.value) }}>
          <option value="total">کل قرآن</option>
          {renderJuz()}
        </select>
        <div className="options__pageRangeContainer">
          <input onFocus={({ target }) => target.select() } placeholder="صفحه آغازین" type="number" value={startingPage} onChange={({ target }) => updateStartingPage(target.value)} />
          <input onFocus={({ target }) => target.select() } placeholder="صفحه پایانی" type="number" value={endingPage} onChange={({ target }) => updateEndingPage(target.value)} />
        </div>
      </div>
      <button onClick={handleSubmit}>شروع</button>
    </main>
  )
}

export default IndexPage;

export const Head = () => <title>آزمون‌های حفظ قرآن</title>
