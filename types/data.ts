export type TDataDTO = {
    title: string,
    _id: string,
    specializedSubjects: {
        _id: string,
        string: string,
        __v: number,
        id: string
    }[],
    // [key: string]: any,
}[]; //TODO: ожидаю контракт.

export type TDataNormalized = {
    id: string;
    programTitle: string;
    modules: TModule[]
}[]

export type TModule = {
    disciplines: string[]
}