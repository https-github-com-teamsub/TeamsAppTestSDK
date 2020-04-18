  Feature: To verify the channel bot request and respose. 

    @Common
    Scenario: Verify channel bot App response
        Given Login to teams with provided credentials
        When Go to any channel where app under test is configured
        And Navigate to channel compose box and invoke the app
        And Send help command in compose box
        Then You should get the respose from the bot