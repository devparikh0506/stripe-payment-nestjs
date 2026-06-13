## paykit@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install paykit@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CustomersApi* | [**customersCreate**](docs/CustomersApi.md#customerscreate) | **POST** /api/v1/customers | Create a customer
*CustomersApi* | [**customersGet**](docs/CustomersApi.md#customersget) | **GET** /api/v1/customers/{id} | Get a customer
*CustomersApi* | [**customersList**](docs/CustomersApi.md#customerslist) | **GET** /api/v1/customers | List customers
*CustomersApi* | [**customersRemove**](docs/CustomersApi.md#customersremove) | **DELETE** /api/v1/customers/{id} | Delete a customer
*CustomersApi* | [**customersUpdate**](docs/CustomersApi.md#customersupdate) | **PATCH** /api/v1/customers/{id} | Update a customer
*HealthApi* | [**healthCheck**](docs/HealthApi.md#healthcheck) | **GET** /health | 
*InvoicesApi* | [**invoicesGet**](docs/InvoicesApi.md#invoicesget) | **GET** /api/v1/invoices/{id} | Get an invoice
*InvoicesApi* | [**invoicesList**](docs/InvoicesApi.md#invoiceslist) | **GET** /api/v1/invoices | List invoices, optionally by customer
*MetricsApi* | [**metricsMetrics**](docs/MetricsApi.md#metricsmetrics) | **GET** /metrics | 
*PaymentsApi* | [**paymentsCancel**](docs/PaymentsApi.md#paymentscancel) | **POST** /api/v1/payments/{id}/cancel | Cancel an uncaptured payment
*PaymentsApi* | [**paymentsCreate**](docs/PaymentsApi.md#paymentscreate) | **POST** /api/v1/payments | Create a payment intent
*PaymentsApi* | [**paymentsGet**](docs/PaymentsApi.md#paymentsget) | **GET** /api/v1/payments/{id} | Get a payment
*PaymentsApi* | [**paymentsList**](docs/PaymentsApi.md#paymentslist) | **GET** /api/v1/payments | List payments, optionally by customer
*PaymentsApi* | [**paymentsRefund**](docs/PaymentsApi.md#paymentsrefund) | **POST** /api/v1/payments/{id}/refund | Refund a succeeded payment
*PlansApi* | [**plansArchive**](docs/PlansApi.md#plansarchive) | **POST** /api/v1/plans/{id}/archive | Archive a plan (prices are immutable in Stripe)
*PlansApi* | [**plansCreate**](docs/PlansApi.md#planscreate) | **POST** /api/v1/plans | Create a plan (Stripe product + price)
*PlansApi* | [**plansGet**](docs/PlansApi.md#plansget) | **GET** /api/v1/plans/{id} | Get a plan
*PlansApi* | [**plansList**](docs/PlansApi.md#planslist) | **GET** /api/v1/plans | List plans
*SubscriptionsApi* | [**subscriptionsCancel**](docs/SubscriptionsApi.md#subscriptionscancel) | **DELETE** /api/v1/subscriptions/{id} | Cancel a subscription immediately
*SubscriptionsApi* | [**subscriptionsCreate**](docs/SubscriptionsApi.md#subscriptionscreate) | **POST** /api/v1/subscriptions | Create a subscription (first charge confirmed by frontend)
*SubscriptionsApi* | [**subscriptionsGet**](docs/SubscriptionsApi.md#subscriptionsget) | **GET** /api/v1/subscriptions/{id} | Get a subscription
*SubscriptionsApi* | [**subscriptionsList**](docs/SubscriptionsApi.md#subscriptionslist) | **GET** /api/v1/subscriptions | List subscriptions, optionally by customer
*WebhooksApi* | [**webhooksHandleStripeWebhook**](docs/WebhooksApi.md#webhookshandlestripewebhook) | **POST** /webhooks/stripe | 


### Documentation For Models

 - [CreateCustomerDto](docs/CreateCustomerDto.md)
 - [CreatePaymentDto](docs/CreatePaymentDto.md)
 - [CreatePlanDto](docs/CreatePlanDto.md)
 - [CreateSubscriptionDto](docs/CreateSubscriptionDto.md)
 - [HealthCheck200Response](docs/HealthCheck200Response.md)
 - [HealthCheck200ResponseInfoValue](docs/HealthCheck200ResponseInfoValue.md)
 - [UpdateCustomerDto](docs/UpdateCustomerDto.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="x-api-key"></a>
### x-api-key

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

