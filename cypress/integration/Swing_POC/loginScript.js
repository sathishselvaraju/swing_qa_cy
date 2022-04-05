///<reference types="cypress" />

import DashboardPage from '../pageObjectsSwing/DashboardPage'
import StoryCreationPage from '../pageObjectsSwing/StoryCreationPage'
import TopicCreationPage from '../pageObjectsSwing/TopicCreationPage'


/* ============================= Test Suite Initiate ===========================================================  */
describe('Swing POC Suite',function() {

    
  before(function () {
        cy.log("Swing application launching using User data")
        
        cy.visit(Cypress.env('swingdev2url'))

        cy.fixture('logintestdata').then(function(testdata) {
            this.testdata = testdata;
          
        })
    })

    
   /* ============================= Login Swing Application ========================================================  */
    it('Verify Login and Navigate Swing App',function(testdata) {
            cy.wait(2000)
            cy.get('input[name="username"]').first().type(this.testdata.username)
            cy.get('input[name="password"]').first().type(this.testdata.userpassword,{log: false})
            cy.get('button[id="loginButton"]').first().click()
            // Cypress.config('defaultCommandTimeout',20000)
            cy.get("li[class='active tab-dashboard']").should('be.visible')
            cy.log("Swing Home/Dashboard page is displayed")
        }
    )

 /* ============================= Verifying Dashboard Elements ========================================================  */
    
    it('Verify Dashboard Objects',function() {

        const dashboard = new DashboardPage()
        dashboard.quickCreateStoryIcon().should('be.visible')
        dashboard.quickCreateTopicIcon().should('be.visible')
        dashboard.quickCreateGalleryIcon().should('be.visible')

        cy.log("Quick Launch Icons displayed in Dashboard page")
        }
    )

    /* ============================= New Story Creation =========================================================  */
    it('Create New Story by selection Quick Create Story',function() {
        cy.log("Story creation using + Symbol from homepage")

        const dashboard = new DashboardPage()
        dashboard.plusSymbol().click()
     
        
            cy.get('a[data-type="fullCreate"] span').each(($el,index,$list) => {

                if($el.text()==="New story")
                {
                    cy.wrap($el).click()
                    cy.log('New story creation option selected')
                }         
            })

        const storycreate  = new StoryCreationPage

        storycreate.nameFieldNewStory().type('Mar1 sample test')
        storycreate.createButtonNewStory().click()
        cy.pause

        
// For Checkbox - use Cy.get  . check().should('be.checked')
// For Static Select - use cy.get  .select
// 

        }
    )

    xit('Create New Story by selection New Topic',function() {

        

    }
)
    
})

