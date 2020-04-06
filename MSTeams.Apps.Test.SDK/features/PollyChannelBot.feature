Feature: Polly teams bot help users to create polls

    @regression
    Scenario: Verify Polly App response in channel scope
        Given You login to "https://teams.microsoft.com" using ID "admin@M365x218086.onmicrosoft.com " and Password "bxK7kf8u5D"
        When You go to "PollyAutoTest" Team channel
        And Navigate to channel compose box and you type "@polly"
        And Say "Hi" to polly bot
        Then You should be able to send the command with out issues

    @DeepDrive
    Scenario: To create a Poll with deafult value.
        And Navigate to channel compose box and you type "@polly"
        And Say "Hi" to polly bot
        Then You should be able to send the command with out issues
        Then You should get a respose from Polly bot
            | ID                                | Password   |
            | admin@M365x218086.onmicrosoft.com | bxK7kf8u5D |
