@regression
Feature: Verify Date Functionality

  Background: 
    Given User is on Home Page

  
  Scenario: Verify user is able to select Date
    When user click on date
    Then user is able to see calender

  Scenario: Verify that user is able to select date
    When user click on date
    Then user select date
