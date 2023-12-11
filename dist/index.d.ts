import { useImmerReducer } from 'use-immer';
import { UseImmerStateResult } from './interface';
declare const useImmerState: <T extends Record<string, any>>(initialValue: T) => UseImmerStateResult<T>;
export default useImmerState;
export { useImmerReducer };
