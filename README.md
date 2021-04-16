# oversimplified-express-validator
An oversimplified validator with simple options and an even simpler documentation
#usage
You can use it as a middleware, in your express app.
like :-

```
import middleware from 'oversimplified-express-validator';
app.post('/', middleware([{name:"email", email:true}, {name:"password", minLength: 8}, {name:"phoneNumber", minLength:10, maxLength:10}, {name:"name", equate:"MrBigFox"}, {name:'processor', includes:["AMD", "Ryzen"], minLength:8, maxLength:20}]), async (req, res) => {
    res.send("posted")
    console.log(req.body);
})
```

You have to provide an array with objects that are of the form:- 
``` {name:"name-of-the-perimeter", ...validators} ```
These are the available validators:-
 
| name      |  type                      |    description                                                                                     | example
| ----------|:--------------------------:|:--------------------------:|:--------------------------:|
| includes  |  array                     | It checks if the an array of items exist in the given request body data                            | ["Ryzen, "Amd"] |
| equate    |  any, but preferably string| It checks if the provided data equates with the given request body data                            | "MrBigFox" |
| minLength |  number                    | It checks if the given request body data's length is at least equal to the given number            | 8 |
| maxLength |  number                    | It checks if the given request body data's length is at most equal to the given number             | 8 |
| email     |  boolean                   | It checks if the given request body data is of the type "email", ie. of the form example@email.com | true |