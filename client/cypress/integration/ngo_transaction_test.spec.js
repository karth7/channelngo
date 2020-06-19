describe('Input form', () => {

    
    it('logs in as NGO', () => {
        
        cy.visit('/');
        cy.get('input[id="email"]').type('two@gmail.com')
        cy.get('input[id="password"]').type('two')
        cy.get('div[id="demo-controlled-open-select"]').click()
        cy.get('li[data-value="NGO"]').click()
        cy.get('span[class="MuiButton-label"]').click()
    })
    it('Success test', () => {
        
        cy.get('input[id="outlined-basic"]').type('cypress title test', {force:true})
        cy.get('textarea[id="outlined-multiline-basic"]').type('cypress description test', {force:true})
        cy.get('div[id="demo-controlled-open-select"]').click()
        cy.get('li[data-value="rohan@gmail.com"]').click()
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]').click()
        cy.contains('event added successfully')
    })
    it('fail test1', () => {
        
       
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]').click()
        cy.contains('Please enter a event name,description and select a volunteer')
    })
    it('fail test2', () => {
        
       
        cy.get('textarea[id="outlined-multiline-basic"]').type('cypress description test', {force:true})
        cy.get('div[id="demo-controlled-open-select"]').click()
        cy.get('li[data-value="rohan@gmail.com"]').click()
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]').click()
        cy.contains('Please enter a event description')
    })
    it('fail test3', () => {
        
        cy.get('input[id="outlined-basic"]').type('cypress title test', {force:true})
        
        cy.get('div[id="demo-controlled-open-select"]').click()
        cy.get('li[data-value="rohan@gmail.com"]').click()
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]').click()
        cy.contains('Please enter a event name')
    })
    it('fail test4', () => {
        
        cy.get('input[id="outlined-basic"]').type('cypress title test', {force:true})
        cy.get('textarea[id="outlined-multiline-basic"]').type('cypress description test', {force:true})
        
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]').click()
        
        cy.contains('select a volunteer')
    })
    it('fail test5', () => {
        
        
        cy.get('div[id="demo-controlled-open-select"]').click()
        cy.get('li[data-value="rohan@gmail.com"]').click()
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]').click()
        cy.contains('Please enter  event name and description')
    })
    it('fail test6', () => {
        
        cy.get('input[id="outlined-basic"]').type('cypress title test', {force:true})
        
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]').click()
        cy.contains('Please enter a event description and select a volunteer')
    })

    
})