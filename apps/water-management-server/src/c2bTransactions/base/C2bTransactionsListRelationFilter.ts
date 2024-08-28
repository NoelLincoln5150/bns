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
import { C2bTransactionsWhereInput } from "./C2bTransactionsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class C2bTransactionsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => C2bTransactionsWhereInput,
  })
  @ValidateNested()
  @Type(() => C2bTransactionsWhereInput)
  @IsOptional()
  @Field(() => C2bTransactionsWhereInput, {
    nullable: true,
  })
  every?: C2bTransactionsWhereInput;

  @ApiProperty({
    required: false,
    type: () => C2bTransactionsWhereInput,
  })
  @ValidateNested()
  @Type(() => C2bTransactionsWhereInput)
  @IsOptional()
  @Field(() => C2bTransactionsWhereInput, {
    nullable: true,
  })
  some?: C2bTransactionsWhereInput;

  @ApiProperty({
    required: false,
    type: () => C2bTransactionsWhereInput,
  })
  @ValidateNested()
  @Type(() => C2bTransactionsWhereInput)
  @IsOptional()
  @Field(() => C2bTransactionsWhereInput, {
    nullable: true,
  })
  none?: C2bTransactionsWhereInput;
}
export { C2bTransactionsListRelationFilter as C2bTransactionsListRelationFilter };
