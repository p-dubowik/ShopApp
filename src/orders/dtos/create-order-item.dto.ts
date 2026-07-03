import { 
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    Min
} from "class-validator";

export class CreateOrderItemDto {
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    productId: string

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    amount: number

    @IsString()
    @IsOptional()
    comment?: string
}