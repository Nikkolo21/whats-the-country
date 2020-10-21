import create, { GetState, SetState } from 'zustand';

type MyState = {
    language: string;
    currency: string;
    region: string;
}

export default create((setState: SetState<MyState>, getState: GetState<MyState>): MyState => {
    return {
        language: "",
        currency: "",
        region: ""
    }
});