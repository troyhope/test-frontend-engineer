type OrderSummaryProps = {
  quantity: number;
  amount: number;
};

export function OrderSummary({ quantity, amount }: OrderSummaryProps) {
  return (
    <div className="border p-4 rounded-lg h-fit">
      <h2 className="font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Items ({quantity})</span>
          <span>${amount.toFixed(2)}</span>
        </div>
        <hr />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${amount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
