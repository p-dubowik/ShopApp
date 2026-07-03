import { Controller, Get, Post, Param, Body NotFoundException } from '@nestjs/common';
import { ParseUUIDPipe } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService){}

    @Get('/')
    getAll(): any {
        return this.ordersService.getAll();
    }

    @Get('/:id')
    async getById(@Param('id', new ParseUUIDPipe()) id: string) {
        const order = await this.ordersService.getById(id);
        if(!order) throw new NotFoundException('Order not found');
        return order;
    }

    @Post('/')
    create(@Body() orderData: CreateOrderDto) {
        return this.ordersService.create(orderData);
    }
}
