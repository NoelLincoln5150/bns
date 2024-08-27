/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductListsWhereInput } from "./ProductListsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductListsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductListsWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductListsWhereInput)
  @IsOptional()
  @Field(() => ProductListsWhereInput, {
    nullable: true,
  })
  every?: ProductListsWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductListsWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductListsWhereInput)
  @IsOptional()
  @Field(() => ProductListsWhereInput, {
    nullable: true,
  })
  some?: ProductListsWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductListsWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductListsWhereInput)
  @IsOptional()
  @Field(() => ProductListsWhereInput, {
    nullable: true,
  })
  none?: ProductListsWhereInput;
}
export { ProductListsListRelationFilter as ProductListsListRelationFilter };
