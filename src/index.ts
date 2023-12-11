import React from 'react'
import set from 'lodash.set'
import get from 'lodash.get'
import { useImmer, useImmerReducer } from 'use-immer'

import {
    Draft,
    InitialStateType,
    UseImmerStateResult,
    DispatchSetQueue,
    DispatchGetPath,
    DispatchGetHandle,
} from './interface'

const useImmerState = <T extends InitialStateType>(
    initialValue: T,
): UseImmerStateResult<T> => {
    const [state, update] = useImmer<T>(initialValue)

    const dispatchSet: (queue: DispatchSetQueue) => void = React.useCallback(
        (queue) => {
            for (const path in queue) {
                update((draft: Draft<any>) => {
                    if (Object.prototype.hasOwnProperty.call(queue, path)) {
                        const element = queue[path]
                        set(draft, path, element)
                    }
                })
            }
        },
        [state],
    )

    const dispatchGet: <R>(
        path: DispatchGetPath,
        defaultValue?: R,
        handle?: DispatchGetHandle,
    ) => R | any = React.useCallback(
        (path, defaultValue, handle) => {
            const targetVal = get(state, path, defaultValue)
            return typeof handle === 'function' ? handle(targetVal) : targetVal
        },
        [state],
    )

    return [state, { dispatchSet, dispatchGet }]
}

export default useImmerState

export { useImmerReducer }
