import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addFirstName, addSecondName } from "./redux/counter/counterSlice";

function App() {
  // const firstName = useSelector((state) => state.counter.firstName);
  // const name = "Anshu";
  // const dispatch = useDispatch();
  // dispatch(increment());
  return (
    <>
      {/* <h1>{firstName}</h1>
      <button
        // aria-label="Increment value"
        onClick={() => dispatch(addFirstName(name))}
        className="btn btn-primary"
      >
        Increment
      </button> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
