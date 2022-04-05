
class StoryCreationPage {

    createTopicFromCheckbox() {
        return cy.get('#createTopicFrom')
    }


    nameFieldNewStory() {
        return cy.get('#name')
    }

    createButtonNewStory() {
        return cy.get('.jss198 > .MuiButton-label')
    }

    cancelButtonNewStory() {
        return cy.get('.jss180 > .MuiButton-label')
    }

    // () {
    //     return cy.get('')
    // }


    
}

export default StoryCreationPage;