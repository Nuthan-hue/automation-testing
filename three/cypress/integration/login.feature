Feature:open amazon and login

Scenario Outline: sucess login of amazon two times
Given open amazon url
And click on signin
Then Give mail or mobile number '<username>'
And click on continue
And give wrong credentials 
Then click signinfull
And check whether problem page loaded
And give credentials 
Then click on signinfull
And Validate username
And go to search
And validate url
#And validate wrong url
And validate first item name
And validate second item name
And validate third item name
#And click on add
Then Check items quantity
Then logout amazon
Then go to signout
Examples:
    | username | 
    | 9381518678|
