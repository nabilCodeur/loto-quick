import { render, screen } from "@testing-library/react-native";
import BallMainModel from "../BallMainModel";

describe(`${BallMainModel.name} component`, () => {
    test("should contain text with props value", () => {
        const testValue = 5
        render(<BallMainModel ballValue={testValue} />)
        const text = screen.getByRole("text")
        expect(text).toHaveTextContent(testValue.toString())
    })
});