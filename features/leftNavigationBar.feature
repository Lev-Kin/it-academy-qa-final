Feature: Testing Left Navigation Bar on "Oz" website

  Background:
    Given I navigate to the "https://oz.by/" page

  Scenario: Accessing the Books section
    When I click on the Books section in the left navigation bar
    Then I should be taken to the Books category page

  Scenario: Accessing the Stationery section
    When I click on the Stationery section in the left navigation bar
    Then I should be taken to the Stationery category page
