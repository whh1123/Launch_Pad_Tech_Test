# Launch-Pizza Backend Tech Test
<br/>

To run
```bash
$ cd Launch_Pad_Tech_Test
$ node .
```

**User Example**

{
    "name":"Alice",
    "userID":"adb8c447-33e1-47ad-a51b-f3f6a12fe41c",
    "orderID":["90ce20cb-b8bc-404c-bc00-22839e5cb371"]
}

User: user's name, identical user id, order id purchased by user.

**Order Example**
{
    "orderID":"90ce20cb-b8bc-404c-bc00-22839e5cb371",
    "userID":"adb8c447-33e1-47ad-a51b-f3f6a12fe41c",
    "pizzas":["76c4b906-0172-43bf-88f8-838ad173f6c1","0550cf96-c602-46bb-bc8f-5119a1eddad6"],
    "pizzasQuantity":[1, 2],
    "status":"onTheWay"
}
Order: order id, user id, user_id, pizzas id bought in this order, pizzas' quantity, this order's status("onTheway" and "Delivered").

**Users.js APIs**

Furthermore, all APIs have been tested using Postman

|Operation      |Endpoint       |Description                                              |
|-------------  |-------------   |------------------------------------------------------- |
|GET  |http://localhost:5001/users/menu           |Fetch all pizzas in the menu           |
|GET  |http://localhost:5001/users                |Fetch all users' information           |
|POST |http://localhost:5001/users                |Add a new user into database           |
|GET  |http://localhost:5001/users/{userID}      |Fetch a user's information via user_id |


**Order.js APIs**

 
|Operation      |Endpoint        |Description                                                                                                          |
|-------------  |-------------   |-------------------------------------------------------------------------------------------------------------------- |
|GET  |http://localhost:5001/orders                                       |Fetch all order history in the database                                     |
|POST |http://localhost:5001/orders/{userID}                              |Add a new order                                                             |
|GET  |http://localhost:5001/orders/{orderID}                             |Fetch the specific order                                                    |

**Potential Improvements**

1. any customer can order a pizza from a set menu by calling API in users(|GET|http://localhost:5001/users/menu|Fetch all pizzas in the menu|)
2. track the order status of the pizza can be realized by fetching order information according to order id.
3. a receipt for their order for up to one year can be fetched in users' order history(as a variable in orderID array)






