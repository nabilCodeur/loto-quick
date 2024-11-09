import GridLotoStar from "../GridLotoStar";
import { render , screen } from "@testing-library/react-native"
import "@testing-library/react-native/extend-expect"

describe(`${GridLotoStar.name} component`, () => {
    test("should contains all number between 1 and 10 on screen", () => {
        render(<GridLotoStar />)
        for (let i = 1; i <= 10; i++ ){
            expect(screen.getByRole("text",{name:i.toString()}))
        }
    })
});

