import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { CreateOrderDto } from './dtos/create-order.dto';

@Injectable()
export class OrdersService {
    constructor(private prismaService: PrismaService){}

    public getAll(): Promise<Order[]> {
        return this.prismaService.order.findMany({
            include: {
                items: {
                    include: {
                        product: true
                    },
                },
            },
        });
    }

    public getById(id: Order['id']): Promise<Order | null> {
        return this.prismaService.order.findUnique({
            where: {id}
        })
    }

    public async create(orderData: CreateOrderDto) {
        try {
            //Make use of $transaction to ensure that either all is saved or nothing || 'tx' is prismaService in transaction mode
            return await this.prismaService.$transaction(async (tx) => {

                //assign customerData to order
                const order = await tx.order.create({
                    data: {
                        customerName: orderData.customerName,
                        email: orderData.email,
                        phone: orderData.phone
                    },
                });

                //map all items in orderData simultanously by via Promise.all
                const items = await Promise.all(
                    orderData.items.map(async (item) => {

                        //find corresponding product for given orderItem
                        const product = await tx.product.findUnique({
                            where: { id: item.productId },
                        });

                        //if product doesn't exist throw exception and cancel order (transaction)
                        if(!product) {
                            throw new NotFoundException(`Product not found: ${item.productId}`);
                        }

                        //complete product-side order and connect it with corresponding orderId and productId
                        return tx.orderItem.create({
                            data: {
                                amount: item.amount,
                                comment: item.comment,
                                //price pulled from database for consistency
                                priceAtPurchase: product.price,

                                order: {
                                    connect: { id: order.id },
                                },

                                product: {
                                    connect: { id: product.id },
                                },
                            }
                        })
                    })
                );
                //return complete order (client + products info)
                return {
                    ...order,
                    items,
                }
            }); 
        } catch (error: any) {
            throw error;
        }
    }

}
