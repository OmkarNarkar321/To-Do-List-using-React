import React, { Component, useState } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm w-80 text-center hover:shadow-md transition">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Class Component Counter
        </h2>
        <p className="text-4xl font-bold text-gray-900 mb-5">
          {this.state.count}
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={this.increment}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            +
          </button>
          <button
            onClick={this.decrement}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

function FunctionCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm w-80 text-center hover:shadow-md transition">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Function Component Counter
      </h2>
      <p className="text-4xl font-bold text-gray-900 mb-5">{count}</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={increment}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default function Assignment1() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-12">
        Assignment-1 Counter Application
      </h1>
      <div className="flex flex-col md:flex-row gap-12">
        <ClassCounter />
        <FunctionCounter />
      </div>
    </div>
  );
}
