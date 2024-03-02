import { Product } from "../models/product";

export interface IcatalogRepository{
    create(data: Product): Promise<Product>;
    update(data: Product): Promise<Product>;
    delete(id: any):any;
    find(): Promise<Product[]>
    findOne(id: number): Promise<Product>
};