# Current Year API

Get the current year by making a GET request. Using modern HTTP technology, never manually update your site footer again.

## Why? 

Accessing the year using language APIs is too simplistic and under-engineered. This is more architecturally interesting and may offer improved job security.

## Try It

https://current-year-api.vercel.app/api/current-year

## Change Time Zone

By default, it uses the "America/Chicago" timezone. You can change this by passing a `tz` parameter. It must be a valid timezone recognized by JavaScript.

https://current-year-api.vercel.app/api/current-year?tz=Africa/Addis_Ababa

## Mocking the Year

For testing purposes, it may be helpful to mock the year to be returned. You may do so using a `mockYear` parameter.

https://current-year-api.vercel.app/api/current-year?mockYear=1999
