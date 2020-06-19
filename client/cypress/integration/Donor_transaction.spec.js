
describe('Input form', () => {

    //first we login as a donor
    it('Donor login test', () => {
        cy.visit('/');
        cy.get('input[id="email"]').type('threemail')
        cy.get('input[id="password"]').type('three')
        cy.get('div[id="demo-controlled-open-select"]').click()
        cy.get('li[data-value="Donor"]').click()
        cy.get('span[class="MuiButton-label"]').click()
    })
    it('success test', () => {
        cy.get('div[id="panel1d-header"]').click({multiple:true , force:true})
        cy.get('path[d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"]').click({multiple:true , force:true})
        cy.contains('Donate to').click() 
        cy.contains('Donation accepted')
    })
    it('fail test', () => {
        cy.get('div[id="panel1d-header"]').click({multiple:true , force:true})
        cy.contains('Donate to').click() 
        cy.contains('Donation cannot be accepted')
    })
    it('update test', () =>{
        cy.contains('Page Two').click()
    })
    
})