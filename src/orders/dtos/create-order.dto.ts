import { 
    IsEmail,
    IsNotEmpty,
    IsString,
    IsArray,
    ArrayMinSize,
    ValidateNested
} from "class-validator";
import { Type } from "class-transformer";
import { CreateOrderItemDto } from "./create-order-item.dto";

export class CreateOrderDto {
    @IsNotEmpty()
    @IsString()
    customerName: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    phone: string

    @IsNotEmpty()
    @IsArray()
    @ArrayMinSize(1, {message: 'Order must contain items'})
    @ValidateNested({ each: true })
    @Type(() => CreateOrderItemDto)
    items: CreateOrderItemDto[]
}