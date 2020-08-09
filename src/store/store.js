import { createStore } from 'redux'
import rootReducer from '../reducers';

const configureStore = () => {
    const store = createStore(
        rootReducer
        /** This section can be extended to include middleware */
    )

    return store;
}

const store = configureStore();

export default store;