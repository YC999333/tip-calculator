import React, { useState, useRef } from "react";

function App() {
  let [bill, setBill] = useState("142.55");
  let [custom, setCustom] = useState(false);
  let [customValue, setCustomValue] = useState();
  let [tipPercent, setTipPercent] = useState();
  let [person, setPerson] = useState("5");
  // const [{ tipAmount, total }, setForm] = useState({
  //   tipAmount: 0,
  //   total: 0,
  // });

  const errMsg = "Can't be zero";

  const customRef = useRef();

  const handleBill = (e) => {
    setBill(e.target.value);
  };

  const handleTips = (e) => {
    setCustom(false);
    setTipPercent(e.target.value);
  };

  const handleCustomValue = (e) => {
    let custValue = customRef.current.value;
    setCustomValue(custValue);
  };

  const handlePerson = (e) => {
    setPerson(e.target.value);
  };

  const handleCustom = () => {
    setCustom(true);
  };

  const handleReset = () => {
    setBill(0);
    setTipPercent(0);
    setPerson(1);
    setCustom(false);
    setCustomValue(0);
  };

  bill = Number(bill);
  tipPercent = Number(tipPercent);
  person = Number(person);
  customValue = Number(customValue);

  const tip = bill * tipPercent;
  let tipAmount = (tip / person).toFixed(2);
  let total = ((bill + tip) / person).toFixed(2);

  // const handleFormChange = (e) => {
  //   e.preventDefault();
  //   const form = Object.fromEntries(new FormData(e.currentTarget).entries());
  //   console.log(form);
  //   const data = {
  //     bill: Number(form.bill),
  //     tips: Number(form.tips),
  //     person: Number(form.person),
  //     custom: Number(form.custom),
  //   };

  //   console.log(data);
  // if (!data.person) return;

  // const tip = data.bill * (data.tips / 100);
  // const tipAmount = tip / data.person;
  // const total = (data.bill + tip) / data.person;

  // setForm({
  //   tipAmount,
  //   total,
  // });
  // };

  return (
    <div className="font-mono min-h-screen bg-gray-200 overflow-auto">
      <header className="mx-auto text-center py-12">
        <h1 className="text-darkgraycyan1 w-4/5 mx-auto text-2xl tracking-xwidest">
          SPLI
        </h1>
        <h1 className="text-darkgraycyan1 w-4/5 mx-auto text-2xl tracking-xwidest">
          TTER
        </h1>
      </header>
      <main>
        {/* <form> */}
        <div className="bg-white mx-2 sm:mx-20 sm:mb-8 md:p-8 p-5 sm:p-2 grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-2xl">
          <div className="flex flex-col">
            <div className="relative flex flex-col ">
              <label
                htmlFor="bill"
                className="mt-5 mb-2 ml-8 text-sm sm:text-lg text-darkgraycyan "
              >
                Bill
              </label>
              <input
                onChange={handleBill}
                className="mx-auto text-right pr-8 font-bold w-11/12 h-10 text-lg bg-gray-200 text-verydarkcyan rounded-md"
                id="bill"
                name="bill"
                type="number"
                value={bill}
                min="0"
                step="0.01"
              ></input>
              <svg
                className="absolute top-16 left-12 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="17"
              >
                <path
                  fill="#9EBBBD"
                  d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
                />
              </svg>
            </div>

            <div className="mx-auto w-full">
              <h5 className="ml-8 my-5 text-sm sm:text-lg text-darkgraycyan">
                Select Tip %
              </h5>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-8 lg:px-4">
                <div className="relative">
                  <label>
                    <input
                      onChange={handleTips}
                      type="radio"
                      value="0.05"
                      className="appearance-none hidden peer"
                      name="tips"
                    />
                    <div className="bg-verydarkcyan peer-checked:bg-darkgraycyan1 h-10 pt-1.5 rounded-lg text-white text-center text-lg w-full">
                      5%
                    </div>
                  </label>
                </div>
                <div className="relative">
                  <label>
                    <input
                      onChange={handleTips}
                      type="radio"
                      value="0.1"
                      className="appearance-none hidden peer"
                      name="tips"
                    />
                    <div className="bg-verydarkcyan peer-checked:bg-darkgraycyan1 h-10 pt-1.5 rounded-lg text-white text-center text-lg w-full">
                      10%
                    </div>
                  </label>
                </div>
                <div className="relative">
                  <label>
                    <input
                      onChange={handleTips}
                      type="radio"
                      value="0.15"
                      className="appearance-none hidden peer"
                      name="tips"
                    />
                    <div className="bg-verydarkcyan peer-checked:bg-darkgraycyan1 h-10 pt-1.5 rounded-lg text-white text-center text-lg w-full">
                      15%
                    </div>
                  </label>
                </div>
                <div className="relative">
                  <label>
                    <input
                      onChange={handleTips}
                      type="radio"
                      value="0.25"
                      className="appearance-none hidden peer"
                      name="tips"
                    />
                    <div className="bg-verydarkcyan peer-checked:bg-darkgraycyan1 h-10 pt-1.5 rounded-lg text-white text-center text-lg w-full">
                      25%
                    </div>
                  </label>
                </div>{" "}
                <div className="relative">
                  <label>
                    <input
                      onChange={handleTips}
                      type="radio"
                      value="0.5"
                      className="appearance-none hidden peer"
                      name="tips"
                    />
                    <div className="bg-verydarkcyan peer-checked:bg-darkgraycyan1 h-10 pt-1.5 rounded-lg text-white text-center text-lg w-full">
                      50%
                    </div>
                  </label>
                </div>
                <div className="relative">
                  <button
                    onClick={handleCustom}
                    className="bg-lightgraycyan h-12 rounded-lg text-darkgraycyan1 text-lg w-full"
                  >
                    {custom ? null : "Custom"}
                  </button>
                  {custom ? (
                    <>
                      {" "}
                      <label>
                        <input
                          className="absolute w-4/5 focus:outline-none left-2 top-2 bg-lightgraycyan text-verydarkcyan text-right text-lg"
                          onChange={handleCustomValue}
                          ref={customRef}
                          type="number"
                          name="custom"
                          value={customValue}
                          min="0"
                        />{" "}
                      </label>
                    </>
                  ) : null}
                </div>{" "}
              </div>
            </div>

            <div className="relative flex flex-col mt-5">
              <div className="flex mb-5 justify-between items-center">
                <label
                  htmlFor="number"
                  className="ml-8 text-sm sm:text-lg text-darkgraycyan"
                >
                  Number of People
                </label>
                <span className="mr-5 sm:mr-10 text-red-500">
                  {person === "0" ? errMsg : null}
                </span>
              </div>

              <input
                onChange={handlePerson}
                className="mx-auto text-right pr-8 font-bold w-11/12 h-10 text-lg bg-gray-200 text-verydarkcyan rounded-md"
                id="person"
                name="person"
                type="number"
                value={person}
                min="0"
              ></input>
              <svg
                className="absolute top-12 mt-2.5 sm:mt-2.5 left-12"
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="16"
              >
                <path
                  fill="#9EBBBD"
                  d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
                />
              </svg>
            </div>
          </div>
          <div className="bg-verydarkcyan text-white text-lg py-2 px-4 sm:px-12 lg:px-4 sm:py-7 mx-5 xl:px-20 rounded-lg">
            <div className="relative flex justify-between items-center">
              <h2 className="mt-10 ml-5 sm:ml-10">Tip Amount</h2>
              <h2 className="text-2xl sm:text-3xl text-darkgraycyan2 mt-10 mr-5 sm:mr-10">
                ${isNaN(tipAmount) || tipAmount === 0 ? "0.00" : tipAmount}
              </h2>
              <span className="absolute top-16 left-5 sm:left-10 text-sm sm:text-md text-darkgraycyan2">
                /person
              </span>
            </div>
            <div className="relative flex justify-between items-center my-7">
              <h2 className="mt-10 ml-5 sm:ml-10">Total</h2>
              <h2 className="text-2xl sm:text-3xl text-darkgraycyan2 mt-10 mr-5 sm:mr-10">
                ${isNaN(total) || total === 0 ? "0.00" : total}
              </h2>
              <span className="absolute top-16 left-5 sm:left-10 text-sm sm:text-md text-darkgraycyan2">
                /person
              </span>
            </div>
            <div className="justify-center flex w-full px-12 h-10 mt-20 mb-5 sm:mt-28">
              <button
                onClick={() => handleReset()}
                className="bg-darkgraycyan2 rounded-lg w-full font-bold text-verydarkcyan"
              >
                RESET
              </button>
            </div>
          </div>
        </div>
        {/* </form> */}
      </main>
    </div>
  );
}

export default App;
