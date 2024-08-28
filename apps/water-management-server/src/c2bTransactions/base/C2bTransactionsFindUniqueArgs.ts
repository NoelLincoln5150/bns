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
import { C2bTransactionsWhereUniqueInput } from "./C2bTransactionsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class C2bTransactionsFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => C2bTransactionsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => C2bTransactionsWhereUniqueInput)
  @Field(() => C2bTransactionsWhereUniqueInput, { nullable: false })
  where!: C2bTransactionsWhereUniqueInput;
}

export { C2bTransactionsFindUniqueArgs as C2bTransactionsFindUniqueArgs };
