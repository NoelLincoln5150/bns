/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductListStockCreateInput } from "./ProductListStockCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateProductListStockArgs {
  @ApiProperty({
    required: true,
    type: () => ProductListStockCreateInput,
  })
  @ValidateNested()
  @Type(() => ProductListStockCreateInput)
  @Field(() => ProductListStockCreateInput, { nullable: false })
  data!: ProductListStockCreateInput;
}

export { CreateProductListStockArgs as CreateProductListStockArgs };
