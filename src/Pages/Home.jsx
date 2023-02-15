import React, {
  useEffect,
  useRef,
  useMemo,
  useState,
  useCallback,
} from "react";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const imageRef = useRef();

  const user = useMemo(() => {
    return {
      name: "Eshmat",
      email: "eshmat@gmail.com",
      age: 32,
    };
  }, []); // 1 => 1 => 2

  // const nimadir = useMemo(() => {
  //   return function () {};
  // }, []); // 3 => 3
  const nimadir = useCallback(function () {}, []); // 3 => 3

  useEffect(() => {
    // axios.post("/api/user", user)
    // check
    // allowed
    // setTimeout(() => {
    //   imageRef.current.click();
    // }, 3000);
    console.log("1234");
  }, [user /* 1 => 1 => 2 */, nimadir /* 3 => 3 */]);

  return (
    <div>
      Home
      <a
        ref={imageRef}
        href="/vite.svg"
        download="logo.svg"
        style={{ display: "none" }}
      >
        Download Image
      </a>
      <button onClick={() => setToggle(!toggle)}>toggle {toggle + ""}</button>
    </div>
  );
};

export default Home;
