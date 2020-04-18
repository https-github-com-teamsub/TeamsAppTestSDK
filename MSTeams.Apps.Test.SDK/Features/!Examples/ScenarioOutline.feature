Feature: To search keywords in google

@OutlineScenario
Scenario Outline: Searching on google
  
  Given I am on "<search>" search page
  When I type "<search keyword>"
  Then I click on search button
  Then I clear the search text

  Examples:
    | search | search keyword | 
    |  google   | cucumber |
    |  cucumber | protractor |
    |  protractor | typescript | 



   # Feature: Login

	#Background: Open the app
	#	Given I launch de Sauce Labs Swag Lab

	Scenario: I should be able to login with a standard user
		When I login as a "standard" user
		Then I should be able to see the swag item overview page

	Scenario Outline: I should not be able to login with a <errorType> user
		When I login as a "<errorType>" user
		Then I should be able to see the "<errorType>" error message

		Examples:
			| errorType   |
			| locked      |
			| no username |
			| no password |
			| no match    |