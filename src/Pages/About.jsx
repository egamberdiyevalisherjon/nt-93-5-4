import React, { useEffect, useState } from "react";

const wait = (delay) => new Promise((res) => setTimeout(res, delay));

const About = () => {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Mounted");
    // let unmounted = false;

    // async function getProducts() {
    // await wait(5000);
    // if (unmounted) return;
    // setProducts([{}, {}, {}]);
    // console.log("set products");
    // }

    // getProducts();

    return () => {
      // clearInterval(id);
      // unmounted = true;
      console.log("Unmounted");
    };
  }, [text]);

  return (
    <div>
      About {JSON.stringify(products)}
      <p>{text}</p>
      <button onClick={() => setText((ov) => ov + "a")}>Change</button>
    </div>
  );
};
export default About;
