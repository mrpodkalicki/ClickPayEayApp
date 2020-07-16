import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../utilities/redux';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;