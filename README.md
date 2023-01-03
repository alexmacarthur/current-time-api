# Current Time API

> :warning: This does not yet support returning the current hour, minute, or seconds. Please stay tuned for a future release.

Get the current date, month, and year by making separate GET requests. Using modern HTTP technology, you'll never have to manually update a timestamp again.

## Why?

Accessing the date, month, and year using language APIs is too simplistic and under-engineered. This is more architecturally interesting and may offer improved job security.

## Endpoints

### Get the Current Date

GET https://current-time-api.vercel.app/api/current-date

### Get the Current Month

GET https://current-time-api.vercel.app/api/current-month

### Get the Current Year

GET https://current-time-api.vercel.app/api/current-year

## Change Time Zone

By default, it uses the "America/Chicago" timezone. You can change this by passing a `tz` parameter. It must be a valid timezone recognized by JavaScript.

https://current-time-api.vercel.app/api/current-year?tz=Africa/Addis_Ababa

## Mocking the Year

For testing purposes, it may be helpful to mock the date, month, or year to be returned. You may do so using a `mockDate`, `mockMonth`, and `mockYear` parameters. Ex:

https://current-time-api.vercel.app/api/current-year?mockYear=1999
