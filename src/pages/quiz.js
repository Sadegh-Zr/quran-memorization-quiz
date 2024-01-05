import * as React from 'react';
import './quiz.css';
import { getAyahsInRange, getRandomAyah, randomIntFromInterval } from '../utils';
import 'react-toastify/dist/ReactToastify.css';

import { JUZ_RANGES } from '../constants';
import { ToastContainer, toast } from 'react-toastify';

const Quiz = () => {
    const [isPreviousVisible, updatePreviousVisibility] = React.useState(false);
    const [isNextVisible, updateNextVisibility] = React.useState(false);
    const [isContinueVisible, updateContinueVisibilty] = React.useState(false);
    const searchParams = window.location.search;
    const juzNumber = 1;
    const juzAyahs = React.useRef(getAyahsInRange(JUZ_RANGES[juzNumber - 1].from, JUZ_RANGES[juzNumber - 1].to))
    const [randomAyah, updateRandomAyah] = React.useState(getRandomAyah(juzAyahs.current));
    
    const getPartialText = () => {
        const words = randomAyah.text.split(' ');
        if(words.length <= 5) return words.slice(0, 2).join(' ');
        return words.slice(0, 3).join(' ');
    };
    const getSelectedAyahIndexFromList = () => {
        const selectedAyah = juzAyahs.current.find(a => (a.id === randomAyah.id) && (a.from === randomAyah.from));
        const index = juzAyahs.current.indexOf(selectedAyah);
        return index;
    }
    const shuffle = () => {
        const remainingAyahs = juzAyahs.current.filter(a => !a.hasShown);
        let newAyah = {};
        if (remainingAyahs.length === 0) {
            toast.success('شما یک دور کامل تمام آیات را مرور کردید', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
                theme: "light",
            });
            juzAyahs.current = juzAyahs.current.map(a => ({...a, hasShown: false}));
            newAyah = getRandomAyah(juzAyahs.current);
        }
        else if (remainingAyahs.length <= 3) newAyah = getRandomAyah(remainingAyahs);
        else {
            const removedPreviousAndNext = remainingAyahs.filter(a => {
                if ((a.from === randomAyah.from) && (Math.abs(a.id - randomAyah.id) === 1)) return false;
                return true;
            });
            newAyah = getRandomAyah(removedPreviousAndNext);
        }
        updateContinueVisibilty(false);
        updateNextVisibility(false);
        updatePreviousVisibility(false);
        updateRandomAyah(newAyah);
    };
    React.useEffect(() => {
        const newJuzAyahs = juzAyahs.current.map(a => {
            if ((a.id === randomAyah.id) && (a.from === randomAyah.from)) {
                return { ...a, hasShown: true };
            }
            return a;
        });
        juzAyahs.current = newJuzAyahs;
    }, [randomAyah]);
    return (
        <main className='quiz'>
            <h1>آزمون</h1>
            <p className='quiz__ayah ayah'>{getPartialText()}...</p>
            {!randomAyah.hasNoPrevious && (
                <div className='quiz__resultContainer'>
                    <span onClick={() => { updatePreviousVisibility(true); }}>آیه قبل: </span>
                    {isPreviousVisible && (<span className='ayah'>{juzAyahs.current[getSelectedAyahIndexFromList() - 1].text}</span>)}
                </div>
            )}
            {!randomAyah.hasNoNext && (
                <div className='quiz__resultContainer'>
                    <span onClick={() => { updateNextVisibility(true); }}>آیه بعد: </span>
                    {isNextVisible && (<span className='ayah'>{juzAyahs.current[getSelectedAyahIndexFromList() + 1].text}</span>)}
                </div>
            )}
            <div className='quiz__resultContainer'>
                <span onClick={() => { updateContinueVisibilty(true); }}>ادامه آیه: </span>
                {isContinueVisible && (<span className='ayah'>{randomAyah.text.slice(getPartialText().length)}</span>)}
            </div>
            <button onClick={shuffle}>بعدی</button>
            <ToastContainer rtl className="quiz__message" />
        </main>
    )
};


export default Quiz;