import { 
    IsEmail,
    IsNotEmpty,
    IsString,
    IsArray,
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
    @ValidateNested({ each: true })
    @Type(() => CreateOrderItemDto)
    items: CreateOrderItemDto[]
}