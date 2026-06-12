import H1 from "./H1";
import Input from "./Input";
import Paragraph from "./Paragraph";

function App() {
  let number = 10;

  let arr = ["Apple", "Banana", "Orange"];

  let str = "Hello React";

  let obj = {
    name: "Ele",
    age: 25,
  };

  function fnc() {
    return "Function Result";
  }

  return (
    <>
      <H1 />
      <Input />
      <Paragraph />

      <h2>რა არის კომპონენტი?</h2>

      <p>
        კომპონენტი არის React-ში კოდის დამოუკიდებელი და მრავალჯერ გამოყენებადი
        ნაწილი, რომელიც აბრუნებს JSX-ს.
      </p>

      <h2>მონაცემების გამოჩენა</h2>

      <p>Number: {number}</p>

      <p>String: {str}</p>

      <p>Function: {fnc()}</p>

      <p>Array: {arr.join(", ")}</p>

      <p>Name: {obj.name}</p>

      <p>Age: {obj.age}</p>
    </>
  );
}

export default App;
კომპონენტი არის React-ში კოდის დამოუკიდებელი და მრავალჯერ გამოყენებადი ნაწილი