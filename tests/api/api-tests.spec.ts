import { test, expect } from "@playwright/test";
import ApiEndpoint from "../../API/ApiEndpoint";
import * as generate from "../../helper/helper";
import { faker } from "@faker-js/faker/locale/en";

test.describe("API - Calculate factorial", () => {
  let usersApi: ApiEndpoint;
  test.beforeEach(async ({ request }) => {
    usersApi = new ApiEndpoint(request);
  });

  test("TC01 - calculate specific factorial", async () => {
    const factorialInteger = 10;
    const factorial = await usersApi.postFactorial(factorialInteger);
    const calculateFactorial = generate.calculateFactorial(factorialInteger);
    const factorailRespnse = await factorial.json();
    const factorialAnswer = factorailRespnse.answer.toString();
    expect(factorialAnswer).toBe(calculateFactorial);
  });

  test("TC02 - calculate random factorial", async () => {
    const factorialInteger = faker.number.int({ min: 10, max: 100 });
    const factorial = await usersApi.postFactorial(factorialInteger);
    const calculateFactorial = generate.calculateFactorial(factorialInteger);
    const factorailRespnse = await factorial.json();
    const factorialAnswer = factorailRespnse.answer.toString();
    expect(factorialAnswer).toBe(calculateFactorial);
  });

  test("TC03 - calculate all factorial integers in range 10-100", async () => {
    for (
      let factorialInteger = 10;
      factorialInteger <= 100;
      factorialInteger++
    ) {
      const factorial = await usersApi.postFactorial(factorialInteger);
      const calculateFactorial = generate.calculateFactorial(factorialInteger);
      const factorialResponse = await factorial.json();
      const factorialAnswer = factorialResponse.answer.toString();
      expect(factorialAnswer).toBe(calculateFactorial);
    }
  });
});
