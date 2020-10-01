import { Input } from "antd";
const { Search } = Input;

import Link from "next/link";

const Head = () => {
  return (
    <>
      <div className="hed">
        <div className="container">
          <a href='../'>

            <img
              src="https://i.ibb.co/Rc8N9rN/logo.png"
              alt="logo"
              border="0"
              />
          </a>
          <Search
            className="srch"
            placeholder="input search text"
            onSearch={(value) => console.log(value)}
          />
        </div>
      </div>
    </>
  );
};

export default Head;
