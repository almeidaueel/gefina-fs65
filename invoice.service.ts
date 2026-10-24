interface Customer {
  name: string;
  email: string;
}

interface Invoice {
  id: number;
  amount: number;
  status: "paid" | "pending";
  issueDate: string;
  dueDate: string;
  customer: Customer;
}

const invoices: Invoice[] = [
  {
    id: 1,
    amount: 999,
    status: "paid",
    issueDate: "2026-09-10",
    dueDate: "2026-09-15",
    customer: {
      name: "A2O Lite",
      email: "comercial@a2o.com",
    },
  },
  {
    id: 2,
    amount: 1999,
    status: "pending",
    issueDate: "2026-08-05",
    dueDate: "2026-08-15",
    customer: {
      name: "Girls' Generation",
      email: "comercial@snsd.com",
    },
  },
  {
    id: 3,
    amount: 2999,
    status: "pending",
    issueDate: "2026-10-01",
    dueDate: "2026-10-31",
    customer: {
      name: "f(x)",
      email: "comercial@fx.com",
    },
  },
];

export function findManyInvoices(): Invoice[] {
  return invoices;
}
