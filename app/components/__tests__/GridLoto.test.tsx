import { render, screen } from "@testing-library/react-native";
import GridLotoSelectStarTItle from "../LotoSelectStarTitle";

describe(`${GridLotoSelectStarTItle.name} component`, () => {
    test('should contains "Sélectionne le numero étoile"', () => {
        render(<GridLotoSelectStarTItle />)
        const title = screen.getByRole("text")
        expect(title).toHaveTextContent(/Sélectionne le numéro étoile/i)
    });
});