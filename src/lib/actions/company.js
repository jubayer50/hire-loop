"use server";

import { serverMutation } from "../core/server";

export const createCompany = async (companyData) => {
  return serverMutation("/api/companies", companyData);
};

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const createCompany = async (companyData) => {
//   const res = await fetch(`${baseUrl}/api/companies`, {
//     method: "Post",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(companyData),
//   });
//   return res.json();
// };
