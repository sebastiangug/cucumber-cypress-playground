Feature: Google Search
    Scenario: Search for Toshiba on Google.
        Given a user goes to "https://google.com"
        When they search for "Toshiba"
        Then they see "Toshiba"