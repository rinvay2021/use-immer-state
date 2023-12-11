export type Draft<T> = T

export type ImmerState<T> = T

export type InitialStateType = Record<string, any>

export type DispatchSetQueue = Record<string, any>

export type DispatchGetHandle = (value: any) => any

export type DispatchGetPath = string | number | (string | number)[]

export type UseImmerStateResult<T extends InitialStateType> = [
    ImmerState<T>,
    {
        dispatchSet: (queue: DispatchSetQueue) => void
        dispatchGet: <R>(
            path: DispatchGetPath,
            defaultValue?: R,
            handle?: DispatchGetHandle,
        ) => R | any
    },
]
