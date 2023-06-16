import React from "react";

// function Greet(){
//     return <h1>Hello Vishwas</h1>
// }

// This is a default export, and can be imported under any name, braces are not required
// const Greet = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         Hello {props.name} a.k.a. {props.heroName}
//       </h1>
//       {props.children}
//     </div>
//   );
// };

//Here we destructure props while passing, and no longer have to write props.name and props.heroName while displaying

//Destructuring in parameter
// const Greet = ({name, heroName}) => {
//     return (
//       <div>
//         <h1>
//           Hello {name} a.k.a. {heroName}
//         </h1>
//       </div>
//     );
//   };

// Destructuring in constructor
const Greet = (props) => {
  const { name, heroName } = props;

  return (
    <div>
      <h1>
        Hello {name} a.k.a. {heroName}
      </h1>
    </div>
  );
};

export default Greet;

// export const Greet = () => <h1>Hello Veronica</h1> // This is a named export  where it must be imported with the same name in braces
