Feature: User Login for "Oz" website

  Background:
    Given I navigate to the "https://oz.by/" page

  Scenario: As a user, I can't login with invalid email
    When I click on "Login Page > Enter Page" button
    And I click on "Login Page > Login From Email" button
    And I fill in "Login Page > Email Field" field with "qwerty"
    And I fill in "Login Page > Password Field" field with "28LE42vv"
    And I click on "Login Page > Disabled Login Button" button
    Then I expect element "Login Page > Login Error Message" is equal to "Введите корректный адрес электронной почты"
