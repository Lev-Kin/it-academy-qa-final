Feature: Testing Main Page of "Oz" website

  Background:
    Given I navigate to the "https://oz.by/" page

  Scenario: Viewing main slider
    Then I should see the main "slider" with various offers

