import React from "react";

//Fragments allow you to group a list of children elements without adding extra nodes to the dom, to contain them

function Columns() {
  const items = [];
  return (
    // <React.Fragment>
    //     {
    //         items.map(item => (
    //             <React.Fragment key = {item.id}>
    //                 <h1>Title</h1>
    //                 <p>{item.title} </p>
    //             </React.Fragment>
    //         ))
    //     }
    //   <td>Name</td>
    //   <td>Vishwas</td>
    // </React.Fragment>

    // Short hand syntax for React.Fragment, but you can't pass key attribute
    <>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title} </p>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Vishwas</td>
    </>
  );
}

export default Columns;
