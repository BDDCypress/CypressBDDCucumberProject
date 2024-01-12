Feature: OrangeHRM Login Test

    Login to the OrangeHRM website

    Scenario: Login to the OrangeHRM application with valid credentials
        Given Launch OrangeHRM application URL
        Then Enter the Valid username
        And Enter the Valid password
        Then Click on Login button
        And Verify login is successful

    Scenario: Login to the OrangeHRM application with valid credentials and apply parameters
        Given Launch OrangeHRM application URL
        Then Enter the Valid username "Admin"
        And Enter the Valid password "admin123"
        Then Click on Login button
        And Verify login is successful

    Scenario: Login to the OrangeHRM website with invalid credentials
        Given Launch OrangeHRM application URL
        Then Enter the InValid username "aho"
        And Enter the Valid password
        Then Click on Login button
        And Verify the error message displayed "Invalid credentials"