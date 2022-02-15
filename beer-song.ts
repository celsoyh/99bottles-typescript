export class Beer {
    public static verse(verseNumber: number) {
        const takeCondition = verseNumber === 1 ? 'it' : 'one';
        const secondParagraph = verseNumber === 0 ? `Go to the store and buy some more, ${this.bottlePlural(99)}` : `Take ${takeCondition} down and pass it around, ${this.bottlePlural(verseNumber - 1).toLowerCase()}`;

        return `${this.bottlePlural(verseNumber)} of beer on the wall, ${this.bottlePlural(verseNumber).toLowerCase()} of beer.\n${secondParagraph} of beer on the wall.\n`;
    }

    public static bottlePlural(verseNumber: number): string {
        const numberOfBottleOrNoMore = verseNumber === 0 ? 'No more' : verseNumber.toString();

        return verseNumber === 1 ? `${verseNumber} bottle` : `${numberOfBottleOrNoMore} bottles`
    }

    public static sing(fromVerse: number = 99, toVerse: number = 0) {
        let song = '';
        for (let i = fromVerse; i >= toVerse; i--) {
            song += `${this.verse(i)}${i === toVerse ? '' : '\n'}`;
        }
        return song;
    }
}
