# Crypton Backend

## User Requests

### Sign In

`localhost:5000/api/users/signin`

Allows a user to sign in and returns a jwt token to keep the user authenticated.

#### Request
```
{
    "email": "youremail@domain.com",
    "password": "yourpassword"
}
```

#### Output

```
{
    "_id": "objectId",
    "name": "your_username",
    "email": "your_email@domain.com",
    "token": "your_jwt_token"
}
```

### Sign Up

`localhost:5000/api/users/signup`

Adds user to the database.

#### Request

```
{
    "name": "your_username",
    "email": "your_email@domain.com",
    "password": "your_password"
}
```

#### Output

```
{
    "_id": "objectId",
    "name": "your_username",
    "email": "your_email@domain.com",
    "token": "your_jwt_token"
}
```