import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";

test("To Check the logo to render", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // const logo = header.getAllByTestId("logo");

  // console.log(logo);

  // expect(logo[0].src).toBe("dummy.png");
});

test("To Check the cart with 0 items", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cartItems");

  console.log(cart);

  expect(cart.innerHTML).toBe("Cart - 0 items");

  // expect(cart)
});
