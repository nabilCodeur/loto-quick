import { expect, test } from '@jest/globals';
import { render, screen } from "@testing-library/react-native";
import "@testing-library/react-native/extend-expect";
import Loto from "../Loto";

describe("Loto component", () => {
   
    test("main View should contains view avec test-id equals loto  on the screen", () => {
        render(<Loto/>)
        const viewApp=screen.getByTestId("loto")
        expect(viewApp).toBeOnTheScreen()
    })
    test("main view cintains classNAme with bg-green-900", () => {
         render(<Loto/>)
            const viewApp = screen.getByTestId("loto")
        expect(viewApp).toHaveProp("className","pt-2 pl-2 bg-green-900 flex-1")
        }
        )
 
}
)