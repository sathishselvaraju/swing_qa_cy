class Dashboard {

    quickCreateStoryIcon(){
        return cy.get('[data-action="quickstory"] > p')
    }

    quickCreateTopicIcon() {
        return cy.get('[data-action="quicktopic"] > p')
    }

    quickCreateGalleryIcon() {
        return cy.get('[data-action="quickgallery"] > p')
    }

    newMessageIcon() {
        return cy.get('[data-action="newmessage"] > p')
    }

    plusSymbol() {
       return cy.get('.emui-info-newcontent > .dropdown-toggle')
    }

    dashboardWebElement() {
        return  cy.get('.active > a > span')
     }
   
     recentsContainerWebElement() {
        return cy.get('#U52733163421Ora > .emui-widget-datalist > .emui-widget-title-container')
     }

     fullCreateWebElements() {
        return  cy.get('a[data-type="fullCreate"] span')
     }
     
     quickCreateWebElements() {
        return  cy.get('a[data-type="quickCreate"] span')
     }
     


     

    //   () {
    //     return  
    //  }

    //  () {
    //     return  
    //  }

}

export default Dashboard;