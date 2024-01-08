Feature: Testing Cart for "Oz" website

  Background:
    Given I navigate to the "https://oz.by/" page

  Scenario: Add product to the cart
    When I search by phrase "Властелин Колец"
    And I click on "Search > First Search Submit" button
    And I click on "Search > First Search Results" button
    Then I should see cart contain "number"