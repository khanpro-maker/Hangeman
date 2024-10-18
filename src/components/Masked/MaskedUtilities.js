export function getAllMaskedWords(original, guessedWords) {
    guessedWords = guessedWords.map(word => word.toUpperCase());
    
    const guessedWordsSet = new Set(guessedWords);
    const result = original.toUpperCase().split('').map(char => {
        if (guessedWordsSet.has(char)) {
            return char;
        } else {
            return '_';
        }
    });

    return result;
}