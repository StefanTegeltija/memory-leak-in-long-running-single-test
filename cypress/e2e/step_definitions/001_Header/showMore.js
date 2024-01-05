When('Click on show more button 120 times', () => {
  cy.visit('/slots');
  clickingOnShowMoreButtonUntilItDisappear(3600, 30);
});
function clickingOnShowMoreButtonUntilItDisappear(
  totalNumberOfBonusesForAGivenGeo,
  incrementor
) {
  let bonusesAlreadyVisibleOnTheScreen = 15;
  if (totalNumberOfBonusesForAGivenGeo > 15) {
    for (let i = 1; i <= totalNumberOfBonusesForAGivenGeo; i++) {
      if (i > bonusesAlreadyVisibleOnTheScreen) {
        cy.get('.mb-5 > .flex').click({ force: true });
        cy.wait(500);
        bonusesAlreadyVisibleOnTheScreen += incrementor;
      }
    }
  }
}
