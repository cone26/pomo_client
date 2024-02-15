type NullAble<T> = {
    [P in keyof T]: T[P] | null;
}