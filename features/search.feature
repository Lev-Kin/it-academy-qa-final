Feature: Testing Search Functionality on "Oz" website

  Background:
    Given I navigate to the "https://oz.by/" page

  Scenario: Successful search returns relevant results
    When I search by phrase "Lord of the Rings"
    Then I should see search results related to "Lord of the Rings"

  Scenario: Unsuccessful search with no results
    When I search by phrase "123xyz42"
    Then I should see a message indicating no results found "123xyz42"
