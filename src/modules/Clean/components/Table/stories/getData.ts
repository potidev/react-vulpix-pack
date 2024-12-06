import { Payment } from "./types";

export function getData(): Payment[] {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@mail.com",
    },
    {
      id: "8a75fafs",
      amount: 300,
      status: "processing",
      email: "none@email.com",
    },
    {
      id: "8a75fafs",
      amount: 300,
      status: "processing",
      email: "none@email.com",
    },
    // ...
  ]
}
