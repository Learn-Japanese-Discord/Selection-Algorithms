// Define data structures and the relationships between different data
// The below interfaces are temporary reflections of the prospective prisma schema

interface Deck {
    id: number
    user: User
    cards: Array<Card>
    completed: boolean
    daysStudied: number
}

interface User {
    id: Snowflake
    decks: Array<Deck>
    xp: number
}

type Snowflake = number; // Integer between 16 and 18 digits

interface Card {
    id: number
    front: CardContent
    back: CardContent
    createdAt: Date
    updatedAt: Date
    nextReviewAt: Date
    interval: number
    easeFactor: number
    repetitions: number
    lapses: number
    isLearning: boolean
    lastInterval: number
}

interface CardContent {
    title: string
    subtext: string
    alts: Array<String>
    image: string
}


// Get deck and user's ID
// Sort through decks cards and find out which ones have the closest study date.
// Any study date longer than 24 hours will be ignored and not returned into the sorted card deck
// Any card that has NOT been studied on time should be included in this set
// Returns array of cards
async function getTodaysCards(userID: Snowflake, deck: Deck): Promise<Array<Card>> {
    // Code
}


// Get user ID, deck, and specific card to update, with the chosen option number
// Based on the user input (A number 1-4), calculate new intervals, ease factors, and dates
// Process any lapse in the card, update learning status of the card, and update the last interval
async function updateCard(userID: Snowflake, deck: Deck, card: Card, result: number): Promise<void> {
    // Code
}

module.exports = { getTodaysCards, updateCard }