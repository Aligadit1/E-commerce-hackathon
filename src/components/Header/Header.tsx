import HeaderP1 from "./HeaderP1";
import HeaderP2 from "./HeaderP2";
import HeaderP3 from "./HeaderP3";
export default function Header() {
  return (
    // header is divided into 3 parts
    <div className="max-w-[1920px] mx-auto ">
      {/*Headerpart1, Headerpart2, Headerpart3*/}
      <HeaderP1 />
      <HeaderP2 />
      <HeaderP3 />
    </div>
  );
}
