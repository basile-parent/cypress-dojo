Feature: Add a todo item
  Scenario: List have two todo items by default
    Given I'm on the todo list
    Then I should see 2 items
    And item number 1 should be "Pay electric bill"
    And item number 2 should be "Walk the dog"

  Scenario: Add new item on submit
    Given I'm on the todo list
    When I type "New Item" on the input and validate
    Then I should see 3 items

  Scenario: Strike item when it's complete
    Given I'm on the todo list
    When I check the item "Pay electric bill"
    Then the item "Pay electric bill" be striked

  Scenario: Edit todo on double click
    Given I'm on the todo list
    When I double click on item "Walk the dog"
    And I change the label to "New item text" and validate
    Then the item label has changed to "New item text"
