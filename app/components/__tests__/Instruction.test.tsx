import Instruction from "@/app/components/Instruction";
import { render, screen } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';

describe("Instruction Component", () => {
    test("should contains text instruction 'Sélectionner le dé et/ou vos numéros fétiches'", () => {
        render(<Instruction />)
        const instruction = screen.getByRole("text",{name:/Sélectionner le dé et\/ou vos numéros fétiches/i})
        expect(instruction).toBeOnTheScreen()
    }
    )
}
)