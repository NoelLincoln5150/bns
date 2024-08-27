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
import { ProductListsWhereUniqueInput } from "./ProductListsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteProductListsArgs {
  @ApiProperty({
    required: true,
    type: () => ProductListsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductListsWhereUniqueInput)
  @Field(() => ProductListsWhereUniqueInput, { nullable: false })
  where!: ProductListsWhereUniqueInput;
}

export { DeleteProductListsArgs as DeleteProductListsArgs };
