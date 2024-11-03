import * as LOTOVALUES from '@/constants/loto';
import randomBallResult from '@/utils/randomBallsResult';
import updateBallInputFromUser from '@/utils/updateBallFromUser';
import { createStore } from "zustand";

type BallsStore = {
    mainBalls: number[],
    starBalls:number[],
    resetAll: () => void,
    updateMainBallFromUser: (inputUser: number) => void,
    updateStarBallFromUser: (unputUser: number) => void,
    randomBallsMain: () => void,
    randomStarMain:()=>void
    
}

const useStoreLotoBalls = createStore<BallsStore>((set, get) => ({
    mainBalls: [],
    starBalls: [],
    resetAll: () => set((state) => ({ mainBalls: [], starBalls: [] })),
    updateMainBallFromUser: (inputUser) => set((state) => {
        const updatedMainBalls = updateBallInputFromUser(inputUser, LOTOVALUES.STAR_RANGE, state.mainBalls)
        return ({mainBalls:updatedMainBalls})
    }),
    updateStarBallFromUser: (inputUser) => set((state) => {
        const updatedStarBalls = updateBallInputFromUser(inputUser, LOTOVALUES.STAR_RANGE, state.starBalls);
        return ({ starBalls: updatedStarBalls });
    }),
    randomBallsMain: () => set(state => {
       
        const updateMainBalls = randomBallResult(LOTOVALUES.MAIN_MIN, LOTOVALUES.MAIN_MAX, LOTOVALUES.STAR_MAX, state.mainBalls);
        return ({ mainBalls: updateMainBalls });
    }),
    randomStarMain: () => set(state => {
        const updatedStarBalls = randomBallResult(LOTOVALUES.STAR_MIN, LOTOVALUES.STAR_MAX, LOTOVALUES.STAR_RANGE, state.starBalls);
        return ({ starBalls: updatedStarBalls });
    })
})
);

export default useStoreLotoBalls