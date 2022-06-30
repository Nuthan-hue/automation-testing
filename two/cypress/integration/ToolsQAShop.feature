Feature: Shopping on Tools QA 
I want to shop on Tools QA Shopping Website

Scenario: Placing Order for 2 Shirts

Given I open the Account Page for Tools QA
And I do the login for my user by entering email address as "9381518678" and password as "skyNuthan23!!"
And I do the assertions for login Button and login successfully by entering new password 
as "cypresstutorials77"
When I do the search for shirts with below specifications
| ShirtSpec  | Size | Color |
| blue denim | 34 | Black |
| playboy | 40 | Grey |
Then I do the verification on the Cart Page that it contains "blue denim" and "playboy" 
and do the checkout successfully