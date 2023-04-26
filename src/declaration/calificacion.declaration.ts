export type Query = Record<string, any>;

export interface DatabaseRepository<T> {
    create(data: Array<any>, query?: Query): Promise<T>;
}