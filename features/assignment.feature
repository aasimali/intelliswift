Feature: Cruise Test

@TC1
Scenario: HollandAmerica: Search a cruise and verify the result
Given Open "hollandamerica" website
And User click on "Close" option placed in top header
And User click on "Search icon" option placed in top header
And User type "Abu Dhabi" in the "Search" text field
And User click on "Search" button
Then User Verify that "Abu Dhabi" is displayed in the search result

@TC2
Scenario: Seabourn: Search a cruise and verify the result
Given Open "seabourn" website
And User click on "Close" option placed in top header
And User click on "Search icon" option placed in top header
And User type "Canada" in the "Search" text field
And User click on "Search" button
Then User Verify that "Canada" is displayed in the search result