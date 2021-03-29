1) install dependencies

npm i

2) add db details in environment file





// normal procedure

 user can login
 then user can like product
                        if liked it will save to wish list collecton with userid  and product id


  if user  unliked proudct
                        remove product id from the wishListSchema for perticular user

get wishlist  for user

                        send userid 
                        using userid fetch all wishlist and populate .


                        productSchema:{
                                name:"prod1"
                        }

                        userSchema:{
                                username:"",
                                password:""
                        }
                        
                            wishListSchema:    {
                                        userid:"user1"
                                        productList:["prodUid1","prodUid2"]
                                }





 //what i have done


 added dummy user

 he can login 

 will get a  access token for user


 add token in like product api


 