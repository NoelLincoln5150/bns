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
import { B2bTransactionsWhereInput } from "./B2bTransactionsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class B2bTransactionsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => B2bTransactionsWhereInput,
  })
  @ValidateNested()
  @Type(() => B2bTransactionsWhereInput)
  @IsOptional()
  @Field(() => B2bTransactionsWhereInput, {
    nullable: true,
  })
  every?: B2bTransactionsWhereInput;

  @ApiProperty({
    required: false,
    type: () => B2bTransactionsWhereInput,
  })
  @ValidateNested()
  @Type(() => B2bTransactionsWhereInput)
  @IsOptional()
  @Field(() => B2bTransactionsWhereInput, {
    nullable: true,
  })
  some?: B2bTransactionsWhereInput;

  @ApiProperty({
    required: false,
    type: () => B2bTransactionsWhereInput,
  })
  @ValidateNested()
  @Type(() => B2bTransactionsWhereInput)
  @IsOptional()
  @Field(() => B2bTransactionsWhereInput, {
    nullable: true,
  })
  none?: B2bTransactionsWhereInput;
}
export { B2bTransactionsListRelationFilter as B2bTransactionsListRelationFilter };
