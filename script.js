const cards = document.querySelectorAll('.showcase-card')

cards.forEach(card => {
    card.addEventListener('click', () => {
        clearSelectedCards()
        card.classList.add('selected')
    })
})

function clearSelectedCards() {
    cards.forEach(card => {
        card.classList.remove('selected')
    })
}