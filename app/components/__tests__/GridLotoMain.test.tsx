import GridLotoMain from "../GridLotoMain";
import { render, screen } from "@testing-library/react-native"
import "@testing-library/react-native/extend-expect"


describe(`${GridLotoMain.name} component`, () => {
    test(`should contains 1 and 49 in the document`, () => {
        render(<GridLotoMain />)
        for (let i = 1; i <= 49; i++){
            expect(screen.getByRole("text",{name:i.toString()}))
        }
    });
});