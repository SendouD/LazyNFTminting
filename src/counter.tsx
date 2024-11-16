import { prepareContractCall, getContract } from "thirdweb";
import { useReadContract, useSendTransaction } from "thirdweb/react";
import { useState } from "react";
import { client, chain } from "./client";

export function Counter() {
  const [value, setValue] = useState(1); // State for increment/decrement by value
  const contract = getContract({
    client,
    chain: chain,
    address: "0x194d1E0AFFDB9B1C6d54fd8b1F25C4895F13184B",
  });

  // Read the counter value
  const { data, isLoading: isReading } = useReadContract({
    contract,
    method: "function getCountervalue() external view returns(uint)",
  });

  // Send transactions
  const { mutate: sendTransaction, isPending: isSending } = useSendTransaction();

  // Function for incrementing the counter
  const incrementCounter = async () => {
    const transaction = prepareContractCall({
      contract,
      method: "function increament()",
    });
    sendTransaction(transaction);
  };

  // Function for decrementing the counter
  const decrementCounter = async () => {
    const transaction = prepareContractCall({
      contract,
      method: "function decrement()",
    });
    sendTransaction(transaction);
  };

  // Increment by a specific value
  const incrementByValue = async () => {
    const transaction = prepareContractCall({
      contract,
      method: "function increamentby(uint)",
      params: [BigInt(value)], // Pass the value from the state
    });
    sendTransaction(transaction);
  };

  // Decrement by a specific value
  const decrementByValue = async () => {
    const transaction = prepareContractCall({
      contract,
      method: "function decrementby(uint)",
      params: [BigInt(value)], // Pass the value from the state
    });
    sendTransaction(transaction);
  };

  // Reset the counter
  const resetCounter = async () => {
    const transaction = prepareContractCall({
      contract,
      method: "function reset()",
    });
    sendTransaction(transaction);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      {/* Displaying the Counter */}
      <h1 className="text-4xl font-bold">
        {isReading ? "Loading Counter..." : `Counter: ${data ? data.toString() : 0}`}
      </h1>

      {/* Increment and Decrement Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={incrementCounter}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          disabled={isSending}
        >
          {isSending ? "Incrementing..." : "Increment"}
        </button>
        <button
          onClick={decrementCounter}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          disabled={isSending}
        >
          {isSending ? "Decrementing..." : "Decrement"}
        </button>
      </div>

      {/* Input for Incrementing/Decrementing by specific value */}
      <div className="flex space-x-4 items-center">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="border py-2 px-4 rounded"
          placeholder="Enter value"
        />
        <button
          onClick={incrementByValue}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={isSending}
        >
          {isSending ? "Incrementing by..." : `Increment by ${value}`}
        </button>
        <button
          onClick={decrementByValue}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          disabled={isSending}
        >
          {isSending ? "Decrementing by..." : `Decrement by ${value}`}
        </button>
      </div>

      {/* Reset Button */}
      <button
        onClick={resetCounter}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        disabled={isSending}
      >
        {isSending ? "Resetting..." : "Reset Counter"}
      </button>
    </div>
  );
}
