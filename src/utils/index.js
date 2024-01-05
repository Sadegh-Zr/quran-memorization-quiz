import quran from '../data/quran.json';

export const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getAyahsInRange = (from, to) => {
    const surahs = quran.filter(surah => (surah.id >= from.id) && (surah.id <= to.id));
    const ayahs = surahs
        .reduce((previous , next) => {
            const ayahs = next.verses.filter(ayah => {
                if (((next.id === from.id) && (ayah.id < from.ayah)) || ((next.id === to.id) && (ayah.id > to.ayah))) return false;
                return true;
            }).map(ayah => ({ ...ayah, from: next.id }));
            return [...previous, ...ayahs]
        }, []);
    ayahs[0].hasNoPrevious = true;
    ayahs[ayahs.length - 1].hasNoNext = true;
    return ayahs;
};

export const getRandomAyah = list => list[randomIntFromInterval(0, list.length - 1)];