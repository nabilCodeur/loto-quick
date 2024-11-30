import { render, screen } from "@testing-library/react-native";
import BallMainModel from "../BallMainModel";
import BallStarModel from "../BallStarModel";

describe(`${BallStarModel.name} component`, () => {
    test("should contain text with props value", () => {
        const testValue = 5
        render(<BallStarModel value={testValue} />)
        const text = screen.getByRole("text")
        expect(text).toHaveTextContent(testValue.toString())
    })
});