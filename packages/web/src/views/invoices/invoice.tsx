import { useParams } from "react-router-dom";
import { getInvoice } from "../../services/data";

export const Invoice = () => {
  const params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId ?? "", 10));

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
};

export default Invoice;
