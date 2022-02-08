import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerPath = "api";

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle("ProductX")
  .setDescription(
    '“Product X” plans to provide smarter access to digital assets via secure, transparent and low-cost exposure. Built by experts at Tykhe with decades of investment experience, the fund takes a fiduciary-minded approach to product construction, offering a simple (No wallet, No key) and cost-effective way to invest in this cryptocurrency market.\n\n## Congratulations! Your application is ready.\n  \nPlease note that all endpoints are secured with JWT Bearer authentication.\nBy default, your app comes with one user with the username "admin" and password "admin".\nLearn more in [our docs](https://docs.amplication.com)'
  )
  .setVersion("dfjhs9yo")
  .addBearerAuth()
  .build();

export const swaggerSetupOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: "../swagger/swagger.css",
  customfavIcon: "../swagger/favicon.png",
  customSiteTitle: "ProductX",
};
