export type ValueOf<T> = T[keyof T];
export type ArrayElementType<T, DT = unknown> = T extends (infer TE)[] ? TE : DT;
