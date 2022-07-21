# Project: MyStore

This is the assessment project for Udacity Full Stack JavaScript Developer Nanodegree Program ( Angular Fundamentals).


### installation 

type `npm install` to install project dependencies 

### Run Application
type `ng serve` to run the application and navigate to the `http://localohst:4200` to check it.

### Pages / Components

| Page               | URL                          | Description                                                                                           | Conditions                                                                                               |
|--------------------|------------------------------|-------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Product List       | /                            | page that contain all products for the store                                                          | No                                                                                                       |
| Product details    | /product-details/{productId} | page to show the product details                                                                      | right product id and should be in the product list                                                       |
| checkout           | /checkout                    | checkout page that has user/order information                                                         | it will be empty if the user not selected any product to add it to the cart                              |
| success            | /success                     | informative page when user complete order checkout                                                    | Yes: will appear only if the user select products and complete his checkout information and click submit |
| 404 page           | /404                         | in case user try to navigate to route not exists                                                      | No                                                                                                       |
| Bad product Id     | /bad-product-id              | in case user type in the address bar string in product-details route like : /product-details/asdasdad | No                                                                                                       |
| product not exists | /product-not-exists          | it will appear in case the user type product id not exists in the product list                        | No                                                                                                       |




