const synonymMap = {
    'shinmai': 'newbie',
    'ossan': 'ossan',
    'boukensha': 'adventurer',
    'isekai shikkaku': 'no longer allowed in another world',
    'katsute mahou shoujo to aku wa tekitai shiteita': 'magical girl and evil lieutenant used to be archenemies',
    'maougun saikyou no majutsushi wa ningen datta': 'strongest magician in demon lord\'s army was a human',
    'go toubun no hanayome': 'quintessential quintuplets',
    'tokidoki bosotto russia-go de dereru tonari no alya-san': 'alya sometimes hides her feelings in russian',
    'megami no cafe terrace': 'the caf terrace and its goddesses',
    'senpai wa otokonoko': 'senpai is a otokonoko',
    'ore wa subete wo parry suru': 'i parry everything',
    'tasogare out focus': 'twilight out of focus',
    'giji harem': 'pseudo harem',
    '2.5-jigen no ririsa': '2.5 dimensional seduction',
    'dungeon no naka no hito': 'dungeon people',
    'boku no hero academia': 'my hero academia',
    'tensei shitara slime datta ken': 'that time i got reincarnated as a slime',
    'boku no tsuma wa kanjou ga nai': 'my wife has no emotion',
    'elf-san wa yaserarenai': 'plus-sized elf',
    'naze boku no sekai wo daremo oboeteinai no ka': 'why does nobody remember me in this world',
    'tensui no sakuna-hime': 'sakuna: of rice and ruin',
    'nige jouzu no wakagimi':  'the elusive samurai',
    'tsue to tsurugi no wistoria': 'wistoria wand and sword',
    'vTuber nandaga haishin kiri wasuretara densetsu ni natteta': 'vtuber legend: how i went viral after forgetting to turn off my stream',
    'isekai yururi kikou': 'a journey through another world',
    'tasuuketsu': 'tasuketsu -fate of the majority-',
    'shikanoko nokonoko koshitantan': 'my deer friend nokotan',
    'koi wa futago de warikirenai': 'love is indivisible by twins',
    'gimai seikatasu': 'days with my stepsister',
    'hazurewaku': 'failure frame: i became the strongest and annihilated everything with low-level spells',
    'madougushi dahliya wa utsumukanai': 'dahlia in bloom: crafting a fresh start with magical tools',
    'mob kara hajimaru tansaku eiyuutan': 'a nobody\'s way up to an exploration hero',
    'make heroine ga oosugiru!': 'losing heroines',
};

function filterSynonyms(str) {
    str = str.toLowerCase();
    Object.keys(synonymMap).forEach((phrase) => {
        const regex = new RegExp(`\\b${phrase}\\b`, 'g');
        str = str.replace(regex, synonymMap[phrase]);
    });
    return str.split(/\W+/).map((word) => synonymMap[word] || word).join(' ');
}

const removeStopWordsAndNumbers = (str) => {
    const stopWords = ['season', 'cour', 'episode', '2024', '(2024)', 'arc'];
    return str.split(/\W+/)
        .filter((word) => !stopWords.includes(word.toLowerCase()) && isNaN(word))
        .join(' ');
};

const jaccardSimilarity = (str1, str2) => {
    const set1 = new Set(removeStopWordsAndNumbers(str1).split(/\s+/));
    const set2 = new Set(removeStopWordsAndNumbers(str2).split(/\s+/));

    const intersection = new Set([...set1].filter((word) => set2.has(word)));
    const union = new Set([...set1, ...set2]);
    return intersection.size / union.size;
};

module.exports = {
    jaccardSimilarity,
    filterSynonyms
};

// const getCustomCatalog = (itemName) => {
//     const filteredItemName = filterSynonyms(itemName.toLowerCase());
//     let bestMatchItem = null;
//     let highestSimilarityRatio = 0;
//     for (let i = 0; i < boardCatalogs.length; i++) {
//         const filteredCatalogName = filterSynonyms(boardCatalogs[i].name.toLowerCase());
//         const similarityRatio = jaccardSimilarity(filteredCatalogName, filteredItemName);
//         if (similarityRatio === 1) {
//             return boardCatalogs[i];
//         }

//         if (similarityRatio > highestSimilarityRatio) {
//             highestSimilarityRatio = similarityRatio;
//             bestMatchItem = boardCatalogs[i];
//         }
//     }
//     return bestMatchItem;
// };