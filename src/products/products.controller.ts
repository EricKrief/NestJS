import { Controller, Post, Body, Get, Param, NotFoundException, Patch, HttpException, Catch, BadRequestException, ForbiddenException, UseFilters, UsePipes } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { HttpExceptionFilter } from "./http-exception-filter";
import { ProductsPipe } from "./products.pipe";


@Controller('products')
@UseFilters(HttpExceptionFilter)
export class ProductsController {

    constructor(private productService: ProductsService) { }

    @Post()
    addProduct(@Body('name') name: string, @Body('id') id: string, @Body('quantity') quantity: number, @Body('price') price: number) {
        this.productService.addProduct(id, name, price, quantity);
        return { id: id };
    }


    @Get()
    getProducts() {
        return this.productService.getProducts();
    }


    @UsePipes(ProductsPipe)
    @Get(':id')
    getProduct(@Param('id') id: string) {
        // const product = this.productService.getProduct(id);
        // if (!product) {
        //     throw new NotFoundException(`product with id ${id} was not found`);
        // }
        // return { ...product };
        // throw new ForbiddenException('this is the exception');
       return id;
    }

    @Patch(':id')
    updateProduct(@Param('id') id: string, @Body('name') newName: string) {
        const product = this.productService.updateProduct(id, newName);
        if (!product) {
            throw new NotFoundException(`Could not update product with id ${id}`);
        }
        return { ...product };
    }



}