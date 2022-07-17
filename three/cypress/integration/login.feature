Feature:open amazon, login, search for item, then validate them and finally logout

Scenario Outline: sucess login of amazon two times
Given open amazon url
And click on signin
Then Give mail or mobile number '<username>'
And click on continue
#And give wrong credentials 
#Then click signinfull
#And check whether problem page loaded
And give credentials 
Then click on signinfull
And Validate username
And go to search
And validate url
#And validate wrong url
And validate first item name
And validate second item name
And validate third item name and items in cart
#And click on add
Then Compare items quantity
Examples:
    | username | 
    | 9381518678|


Scenario:signout
Then logout amazon
Then click on signout
