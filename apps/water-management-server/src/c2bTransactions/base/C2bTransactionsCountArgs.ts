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
import { C2bTransactionsWhereInput } from "./C2bTransactionsWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class C2bTransactionsCountArgs {
  @ApiProperty({
    required: false,
    type: () => C2bTransactionsWhereInput,
  })
  @Field(() => C2bTransactionsWhereInput, { nullable: true })
  @Type(() => C2bTransactionsWhereInput)
  where?: C2bTransactionsWhereInput;
}

export { C2bTransactionsCountArgs as C2bTransactionsCountArgs };
