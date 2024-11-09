import * as LOTOVALUES from '@/constants/loto';
import randomBallResult from '@/utils/randomBallsResult';
import updateBallInputFromUser from '@/utils/updateBallFromUser';
import { create } from "zustand";

type BallsStore = {
    mainBalls: number[],
    starBalls:number[],
    resetAll: () => void,
    updateMainBallFromUser: (inputUser: number) => void,
    updateStarBallFromUser: (unputUser: number) => void,
    randomBallsMain: () => void,
    randomStarMain:()=>void
    
}

const useLoto = create<BallsStore>((set, get) => ({
    mainBalls: [2],
    starBalls: [],
    resetAll: () => set((state) => ({ mainBalls: [], starBalls: [] })),
    updateMainBallFromUser: (inputUser) => set((state) => {
        const updatedMainBalls = updateBallInputFromUser
            (inputUser, LOTOVALUES.MAIN_RANGE, state.mainBalls)
        return ({mainBalls:updatedMainBalls})
    }),
    updateStarBallFromUser: (inputUser) => set((state) => {
        const updatedStarBalls = updateBallInputFromUser(inputUser, LOTOVALUES.STAR_RANGE, state.starBalls);
        return ({ starBalls: updatedStarBalls });
    }),
    randomBallsMain: () => set(state => {
       
        const updateMainBalls = randomBallResult(LOTOVALUES.MAIN_MIN, LOTOVALUES.MAIN_MAX, LOTOVALUES.MAIN_RANGE, state.mainBalls);
        return ({ mainBalls: updateMainBalls });
    }),
    randomStarMain: () => set(state => {
        const updatedStarBalls = randomBallResult(LOTOVALUES.STAR_MIN, LOTOVALUES.STAR_MAX, LOTOVALUES.STAR_RANGE, state.starBalls);
        return ({ starBalls: updatedStarBalls });
    })
})
);

export default useLoto