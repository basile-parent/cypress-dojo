Scenario: Read a mail
  Given I'm connected with my mail address
  And I'm in my inbox
  When I click on the first mail of the list
  Then I can read the content of the mail