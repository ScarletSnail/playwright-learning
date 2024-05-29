import { APIRequestContext, request } from "@playwright/test";
import { dataSet } from "./dataSet";

export class ApiUtils {
    apiContext: APIRequestContext;

    constructor (apiContext: APIRequestContext){
        this.apiContext = apiContext;
    };

    async createUser(email: string){
        const apiContext = await request.newContext();
        const userEmail = email;
        const data = {
            "firstName": `${dataSet.firstName}`,
            "lastName": `${dataSet.lastName}`,
            "userEmail": `${userEmail}`,
            "userRole": "customer",
            "occupation": "",
            "gender": "Female",
            "userMobile": `${dataSet.userMobile}`,
            "userPassword": `${dataSet.password}`,
            "confirmPassword": `${dataSet.password}`,
            "required": true
        };
        const apiRequest = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/register', {data: data, failOnStatusCode: true});
        return {
            userEmail,
        }
    };
};