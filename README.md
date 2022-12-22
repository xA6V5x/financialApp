# financialApp

## Project Objectives

-    Build an App using React Native and Expo.
-    Affirm and connect the concepts learned in the class.
-    Implement best coding practices.
-    Learn and practice the GIT workflow.
-    Descriptive GIT commits.

## Statement

The general idea is to create an Static App aimed at financing based on the JSON structure.
Use any UI library framework for that. Besides practicing in decomposition, it’s interesting what UI you will get finally.

## Json Data

{
"user": {
"name": "John Doe",
"email": "johndoe@gmail.com",
"accounts": [
{
"type": "Checking",
"balance": 1000.5
},
{
"type": "Savings",
"balance": 2500.0
}
]
},
"transactions": [
{
"type": "Deposit",
"amount": 500.0,
"account": "Checking"
},
{
"type": "Withdrawal",
"amount": 100.0,
"account": "Savings"
},
{
"type": "Transfer",
"amount": 200.0,
"fromAccount": "Checking",
"toAccount": "Savings"
}
],
"friends": [
{
"name": "Jane Smith",
"email": "janesmith@gmail.com"
},
{
"name": "Bob Johnson",
"email": "bobjohnson@gmail.com"
}
]
}

## UI Result

### - Friends Screen

<p align="center">
  <img height="300" src="https://raw.githubusercontent.com/xA6V5x/financialApp/main/assets/screensReadme/friendsScreen.png" />
</p>

### - Transactions Screen

<p align="center">
  <img height="300" src="https://raw.githubusercontent.com/xA6V5x/financialApp/main/assets/screensReadme/transactionsScreen.png" />
</p>

### - User Profile Screen

<p align="center">
  <img height="300" src="https://raw.githubusercontent.com/xA6V5x/financialApp/main/assets/screensReadme/profileScreen.png" />
</p>
