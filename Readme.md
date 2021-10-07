# fmiddlewares.testing 
It is and repository for testing npm package __fmiddlewares__

# fmiddlewares
It is a library for nodejs that allows to make validations to the routes in a simpler way

- [Installing](#installing)
- [Import](#import)
- [Use](#use)
    - [Use in Body](#use-in-body)
    - [Use in Query](#use-in-query)
    - [Use in Headers](#use-in-headers)
    - [Use with env](#use-with-env)
- [Validate](#validate)
    - [String](#string)
        - [String, allow empty](#string-allow-empty)
    - [Email](#email)
    - [Password](#password)
    - [List](#list)
    - [Object](#object)
    - [Number](#number)
        - [Number with min](#number-with-min)
        - [Number with max](#number-with-max)
    - [Boolean](#boolean)
    - [Array](#array)
    - [Compare](#compare)
        - [Compare with function](#compare-with-function)
    - [Leave Undefined](#leave-undefined)
    - [Exact Data](#exact-data)
    - [Group](#group)
        - [Group with string](#group-with-string)
        - [Group with email](#group-with-email)
        - [Group with password](#group-with-password)
        - [Group with list](#group-with-list)
        - [Group with number](#group-with-number)
        - [Group with boolean](#group-with-boolean)
        - [Group with array](#group-with-array)
        - [Group with compare](#group-with-compare)
            - [Group with compare and function](#group-with-compare-and-function)
        - [Group with Leave Undefined](#group-with-leave-undefined)
        - [Group with exactItems](#group-with-exactItems)
- [Developer](#developer)
- [Repositories](#repositories)


## Installing
Using npm:
```bash
npm install fmiddlewares
```

## Import
```javascript
const fmiddlewares = require('fmiddlewares')
```

## Use

### Use in Body
```javascript
router.post(
    rute,
    [
        fmiddlewares.validateItem({
            config
        })
    ], 
    controller
)
```

### Use in Query
```javascript
router.post(
    rute,
    [
        fmiddlewares.validateItem({
            config
        },"query")
    ], 
    controller
)
```

### Use in Headers
```javascript
router.post(
    rute,
    [
        fmiddlewares.validateItem({
            config
        },"headers")
    ], 
    controller
)
```

### Use with env
```javascript
router.post(
    rute,
    [
        fmiddlewares.validateItem({
            key : {
                type:"compare",
                value: env.KEY
            }
        },"headers")
    ], 
    controller
)
```
## Validate
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/tree/master/src/routes) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/tree/master/src/routes)

### String
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/string/string.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/string/string.routes.js)
```javascript
fmiddlewares.validateItem({
    name : {
        type:"string"
    }
})
```

#### String, allow empty
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/string/stringEmpty.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/string/stringEmpty.routes.js)
```javascript
fmiddlewares.validateItem({
    name : {
        type:"string",
        isEmpty:true
    }
})
```

### Email
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/email.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/email.routes.js)
```javascript
fmiddlewares.validateItem({
    email : {
        type:"email"
    }
})
```

### Password
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/password.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/password.routes.js)
```javascript
fmiddlewares.validateItem({
    password:{
        type:"password",
        regexs:[
            {
                regex:/^.{8,}$/,
                msj:"minimum of 8 characters"
            },
            {
                regex:/[a-z]/,
                msj:"must contain lowercase letters"
            },
            {
                regex:/[A-Z]/,
                msj:"must contain capital letters"
            },
        ]
    }
})
```

### List
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/list.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/list.routes.js)
```javascript
fmiddlewares.validateItem({
    sex : {
        type:"list",
        list:[
            "male",
            "feminine"
        ]
    }
})
```

### Object
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/object.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/object.routes.js)
```javascript
fmiddlewares.validateItem({
    user:{
        type:"object",
        items:{
            id:{
                type:"string"
            },
            name:{
                type:"string"
            },
            email : {
                type:"email"
            },
            password:{
                type:"password",
                regexs:[
                    {
                        regex:/^.{8,}$/,
                        msj:"minimum of 8 characters"
                    },
                    {
                        regex:/[a-z]/,
                        msj:"must contain lowercase letters"
                    },
                    {
                        regex:/[A-Z]/,
                        msj:"must contain capital letters"
                    },
                ]
            }
        }
    }
})
```

### Number
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/number.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/number.routes.js)
```javascript
fmiddlewares.validateItem({
    age : {
        type:"number"
    }
})
```

#### Number with min
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/number.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/number.routes.js)
```javascript
fmiddlewares.validateItem({
    age : {
        type:"number",
        min: 10
    }
})
```

#### Number with max
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/number.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/number.routes.js)
```javascript
fmiddlewares.validateItem({
    age : {
        type:"number",
        max: 20
    }
})
```

### Boolean
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/boolean.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/boolean.routes.js)
```javascript
fmiddlewares.validateItem({
    married : {
        type:"boolean"
    }
})
```

### Array
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/array.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/array.routes.js)
```javascript
fmiddlewares.validateItem({
    items : {
        type:"array",
        min:1, //if need min elements
        max:3, //if need max elements
        typeElemets:"number" //if need all element is type typeElemets
    }
})
```

### Compare
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/compare.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/compare.routes.js)
```javascript
fmiddlewares.validateItem({
    element : {
        type:"compare",
        value:"value"
    }
})
```
#### Compare with function
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/compare.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/compare.routes.js)
```javascript
fmiddlewares.validateItem({
    element : {
        type:"compare",
        value:"value",
        function:(compare)=>{
            return compare.value == 1
        }
        //if use function, value is not use
    }
})
```

### Leave Undefined
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/leaveUndefined.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/leaveUndefined.routes.js)
```javascript
fmiddlewares.validateItem({
    company : {
        type:"string",
        isUndefined:true
    }
})
```

### Exact Data
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/exactData.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/exactData.routes.js)
```javascript
fmiddlewares.validateItem({
    exactItems:true,
    name : {
        type:"string",
    },
    company:{
        type:"object",
        items:{
            exactItems:true,
            name:{
                type:"text"
            },
            direction:{
                type:"text"
            }
        }
    }
})
```

### Group
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/tree/master/src/routes/group) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/tree/master/src/routes/group)

#### Group with string
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/group/string.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/group/string.routes.js)
```javascript
fmiddlewares.validateItem({
    elements:{
        type:"group",
        groupType:"string",
        items:[
            "id",
            "name",
            "phone"
        ]
    }
})
```

#### Group with email
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/group/email.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/group/email.routes.js)
```javascript
fmiddlewares.validateItem({
    elements:{
        type:"group",
        groupType:"email",
        items:[
            "email",
            "email_user",
            "email_login"
        ],
    }
})
```

#### Group with password
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/group/password.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/group/password.routes.js)
```javascript
fmiddlewares.validateItem({
    elements:{
        type:"group",
        groupType:"password",
        items:[
            "password",
            "password_user",
            "password_login"
        ],
        regexs:[
            {
                regex:/^.{8,}$/,
                msj:"minimum of 8 characters"
            },
            {
                regex:/[a-z]/,
                msj:"must contain lowercase letters"
            },
            {
                regex:/[A-Z]/,
                msj:"must contain capital letters"
            },
        ]
    }
})
```

#### Group with list
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/group/list.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/group/list.routes.js)
```javascript
fmiddlewares.validateItem({
    elements:{
        type:"group",
        groupType:"list",
        items:[
            "var1",
            "var2",
            "var3"
        ],
        list:[
            "option1",
            "option2",
            "option3",
        ]
    }
})
```

#### Group with number
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/group/number.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/group/number.routes.js)
```javascript
fmiddlewares.validateItem({
    elements:{
        type:"group",
        groupType:"number",
        items:[
            "age",
            "nitems",
            "price"
        ],
        min: 10, // if need min
        max: 20  // id need max
    }
})
```

#### Group with boolean
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/group/boolean.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/group/boolean.routes.js)
```javascript
fmiddlewares.validateItem({
    elements:{
        type:"group",
        groupType:"boolean",
        items:[
            "active",
            "show",
            "open"
        ],
    }
})
```

#### Group with array
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/group/array.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/group/array.routes.js)
```javascript
fmiddlewares.validateItem({
    elements:{
        type:"group",
        groupType:"array",
        min:1, //if need min elements
        max:3, //if need max elements
        typeElemets:"number" //if need all element is type typeElemets
        items:[
            "items",
            "list",
            "card"
        ],
    }
})
```

#### Group with compare
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/group/compare.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/group/compare.routes.js)
```javascript
fmiddlewares.validateItem({
    elements:{
        type:"group",
        groupType:"compare",
        items:[
            "key",
            "key2",
        ],
        value:"value"
    }
})
```
##### Group with compare and function
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/group/compare.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/group/compare.routes.js)
```javascript
fmiddlewares.validateItem({
    elements:{
            type:"group",
            groupType:"compare",
            items:[
                "key",
                "key2",
            ],
            value:"value",
            function: (compare) => {
              switch (compare.key) {
                case "key":
                  return compare.value == "value1"
                  break;
                case "key2":
                  return compare.value == "value2"
                  break;
                default:
                  return false
                  break;
              }
            }
            //if use function, value is not use
        }
})
```

#### Group with Leave Undefined
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/group/leaveUndefined.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/group/leaveUndefined.routes.js)
```javascript
fmiddlewares.validateItem({
    elements:{
        type:"group",
        groupType:"string",
        items:[
            "name",
            "phone",
        ],
        isUndefined:true
    }
})
```

#### Group with exactItems
###### Example [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares.testing/-/blob/master/src/routes/group/exactItems.routes.js) [Github](https://github.com/franciscoblancojn/fmiddlewares.testing/blob/master/src/routes/group/exactItems.routes.js)
```javascript
fmiddlewares.validateItem({
    elements:{
        type:"group",
        groupType:"string",
        items:[
            "name",
            "phone",
        ],
        exactItems:true,
    }
})
```

## Examples
[https://github.com/franciscoblancojn/fmiddlewares.testing](https://github.com/franciscoblancojn/fmiddlewares.testing)

[https://gitlab.com/npmjs_packages/fmiddlewares.testing](https://gitlab.com/npmjs_packages/fmiddlewares.testing)

## Developer
[Francisco Blanco](https://franciscoblanco.vercel.app/)

[Gitlab franciscoblancojn](https://gitlab.com/franciscoblancojn)

[Email blancofrancisco34@gmail.com](mailto:blancofrancisco34@gmail.com)

## Repositories

- [Gitlab](https://gitlab.com/npmjs_packages/fmiddlewares)
- [Github](https://github.com/franciscoblancojn/fmiddlewares)