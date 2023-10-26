# Tracking_order-App-Node-js

## API Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Base URL](#base-url)
3. [Authentication](#authentication)
4. [Setting Up Environment Variables](#setting-up-environment-variables)
5. [Get Third Party API Key Steps](#get-third-party-api-key-steps)
6. [My API Endpoints](#my-api-endpoints)
    6.1 [Welcome Message](#welcome-message)
    6.2 [Retrieve Tracking Information](#retrieve-tracking-information)
7. [Testing Using Postman Setting](#testing-using-postman-setting)
8. [Other Information to Use Tracking API](#other-information-to-use-tracking-api)
9. [Error Handling](#error-handling)
10. [Example Request and Response](#example-request-and-response)

## Introduction

The Tracking Order API allows you to retrieve tracking information for orders using a provided order ID. A third-party API service is used.

## Base URL

- Base URL: `https://localhost:8080`

## Authentication

The API uses API keys for authentication. You need to set up environment variables to provide your API keys. Refer to the "Setting Up Environment Variables" section for details.

## Setting Up Environment Variables

To use this API, set the following environment variables in a `.env` file:

- `TRACKSHIP_API_KEY`: Your API key for accessing the TrackShip service.
- `app_name`: Your application name, required by the TrackShip API.

## Get Third Party API Key Steps

URL for Reading Trackship documentation: [Trackship Documentation](https://docs.trackship.com/docs/tracking-api/create-shipment/)

Steps:
1. Sign Up to the Trackship website.
2. You will receive email authentication to your registered email.
3. Go to the [authentication documentation](https://docs.trackship.com/docs/tracking-api/api-requests-authentication/) and follow the steps. Remember, it requires the given images information in your application as authentication header information.
 <img width="790" alt="Screen Shot 2023-10-26 at 1 01 52 AM" src="https://github.com/DKruti/Tracking_order-App-Node-js/assets/120690177/a85b819b-c34a-499b-abe2-61f0ed9f4d6c">   
4. How to find the API key from your account, then go to [My Trackship](https://my.trackship.com/) and follow the steps as shown in the screenshots.
   <img width="787" alt="Screen Shot 2023-10-26 at 1 02 04 AM" src="https://github.com/DKruti/Tracking_order-App-Node-js/assets/120690177/8fbf4248-4423-48b8-8fbf-1dc93ce1672d">

Copy the given API key to your **`.env`** file of your application. For example: `apikey = <paste your API key>`.
5. To set the app name, follow the steps below the images. Do not necessarily use webhooks.
   <img width="695" alt="Screen Shot 2023-10-26 at 1 02 11 AM" src="https://github.com/DKruti/Tracking_order-App-Node-js/assets/120690177/d086a853-4e46-45c0-b1ec-b4c3838bf57f">
Save your app name in your **`.env`** file of your application. For example: `app_name=<your App name>`
6. Done

## My API Endpoints

### Welcome Message

- **Endpoint:** `/`
- **HTTP Method:** GET
- **Description:** Get a welcome message indicating successful API access.
- **Request Format:** No request required.
- **Response Format:** A text response with the welcome message.
- **Status Codes:**
  - 200: Success - The API is accessible.

### Retrieve Tracking Information

- **Endpoint:** `/order/tracker/:order_id`
- **HTTP Method:** POST
- **Description:** Retrieve tracking information for a specific order provided in `:order_id`.
- **Request Format:**
  - URL Parameter:
    - `:order_id` (string, required) - The unique order ID to retrieve tracking information for.
- **Response Format with status code:**
  - 200: Success - JSON response containing tracking information.
    <img width="334" alt="Screen Shot 2023-10-26 at 1 17 29 AM" src="https://github.com/DKruti/Tracking_order-App-Node-js/assets/120690177/d4495394-b927-462b-9e6c-56abd7a89b24">
  - 404: Order Not Found - Text response: "Order not found."
  - 404: Tracking Information Not Found - Text response: "Tracking information not found."
  - 500: Server Error - Text response: "An error occurred during tracker API execution."

## Testing Using Postman Setting

As it's a POST method, to test on Postman, set the following details in the Header of POSTMAN.
<img width="661" alt="Screen Shot 2023-10-26 at 1 17 07 AM" src="https://github.com/DKruti/Tracking_order-App-Node-js/assets/120690177/3a584f79-2d9b-4ef3-bfe3-92c595c33607">

- **POSTMAN Body:** As mentioned in the third-party API documentation.
<img width="334" alt="Screen Shot 2023-10-26 at 1 17 29 AM" src="https://github.com/DKruti/Tracking_order-App-Node-js/assets/120690177/91ae214e-e824-4a9f-8824-7e4326d8fbc7">

## Other Information to Use Tracking App API

- My app URL: `https://localhost:8080/order/track/13`
- Third-party URL embedded in the code: `https://my.trackship.com/api/create-tracker/customapp/` - pass as a post API.
- Use the same name as per the documentation for header parameter setting and other information setting
<img width="291" alt="Screen Shot 2023-10-26 at 1 30 19 AM" src="https://github.com/DKruti/Tracking_order-App-Node-js/assets/120690177/27145096-8224-4ab7-8fd4-d8a35db921f8">

-POST Request
<img width="425" alt="Screen Shot 2023-10-26 at 1 16 41 AM" src="https://github.com/DKruti/Tracking_order-App-Node-js/assets/120690177/a3fddc2f-bfe6-4356-b189-e881173f281d">

**Request Parameter:**
- `"order_id": "string"` -> Respective Order ID

## Error Handling

The API provides detailed error responses for different scenarios. Please check the status codes and response messages mentioned above.

## Example Request and Response

### Request-> Welcome page

- **URL:** GET `https://localhost:8080/`
- **Response:** Welcome page
  - Success
<img width="421" alt="Screen Shot 2023-10-26 at 12 33 08 PM" src="https://github.com/DKruti/Tracking_order-App-Node-js/assets/120690177/c1204a3c-0387-4903-af64-ff11ee7e92b7">

### Request-> Retrieve Tracking Information

- **URL:** POST `https://localhost:8080/order/track/13`
- **Response:** Retrieve Tracking Information
  - Success
    <img width="344" alt="Screen Shot 2023-10-26 at 12 37 42 PM" src="https://github.com/DKruti/Tracking_order-App-Node-js/assets/120690177/d745a9b9-1129-4f21-97d9-a1fd78f5cd40">

  -(404 Order not Found)
    - Error generation URL: POST `https://localhost:8080/order/track/34`
    - Response:
    <img width="175" alt="Screen Shot 2023-10-26 at 12 37 55 PM" src="https://github.com/DKruti/Tracking_order-App-Node-js/assets/120690177/aea5916f-a98a-4e2f-848a-eec14c50d98d">
  
  - (404 Tracking Information not Found)
    -Error generation URL: POST `https://localhost:8080/order/track/1`
    -Response:
      <img width="446" alt="Screen Shot 2023-10-26 at 12 39 32 PM" src="https://github.com/DKruti/Tracking_order-App-Node-js/assets/120690177/05a82b17-65b0-463f-81df-e4cab09aefc1">

 - (500 server error) -> when the third-party API is wrong or down
    - Error generation URL: POST `https://localhost:8080/order/track/13`
    - Response:
    - <img width="366" alt="Screen Shot 2023-10-26 at 12 43 28 PM" src="https://github.com/DKruti/Tracking_order-App-Node-js/assets/120690177/c807bc61-0197-4b5c-9610-a3d395c364f6">

