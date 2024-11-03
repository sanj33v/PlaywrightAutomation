import { test } from "@playwright/test";
import dotenv from 'dotenv';
import path from "path";
dotenv.config({
   path: path.resolve(__dirname, '.env.qa')
   });
// dotenv.config({
//   path: `.env.qa`
// })

test("DemoTest", async ({ page}) => {
   //await page.goto(process.env.BASE_URL);
   console.log(process.env.BASE_URL);   
})