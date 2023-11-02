function ArrowFunctions() {
    const subtract = (a, b) => {
      return a - b;
    };
    const sevenMinusOne = subtract(7, 1);
    console.log(sevenMinusOne);
  
    return (
      <>
        <h3>New ES6 arrow functions</h3>
        sevenMinusOne = {sevenMinusOne}
        <br />
        subtract(7, 1) = {subtract(7, 1)}
        <br />
      </>
    );
  }
  
  export default ArrowFunctions;