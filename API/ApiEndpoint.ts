// Assuming you're using TypeScript, change the extension to .ts
import { APIRequestContext } from "@playwright/test";

class ApiEndpoint {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async postFactorial(userData: number) {
    if (!Number.isInteger(userData) || userData < 10 || userData > 100) {
      throw new Error("Input must be an integer between 10 and 100.");
    }
    const formData = new URLSearchParams();
    formData.append("number", userData.toString());

    const response = await this.request.post("/factorial", {
      data: formData.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    });
    return response;
  }
}

export default ApiEndpoint;
