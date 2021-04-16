# oversimplified-express-validator
An oversimplified validator with simple options and an even simpler documentation
#usage
You can use it as a middleware, in your express app.
like :-

``` app.post('/', middleware([{name:"email", email:true}, {name:"password", minLength: 8}, {name:"phoneNumber", minLength:10, maxLength:10}, {name:"name", equate:"MrBigFox"}, {name:'processor', includes:["AMD", "Ryzen"], minLength:8, maxLength:20}]), async (req, res) => {
    res.send("posted")
    console.log(req.body);
}) ```


You have to provide an array, which is the form :- 
``` [{name:"name-of-the-perimeter", ...validators}] ```
These are the available validators:-
 
| name      |  type                      |    
| ----------|:--------------------------:|
| includes  |  array                     | 
| equate    |  any, but preferably string|
| minLength |  number                    |
| maxLength |  number                    |
| email     |  boolean                   |
