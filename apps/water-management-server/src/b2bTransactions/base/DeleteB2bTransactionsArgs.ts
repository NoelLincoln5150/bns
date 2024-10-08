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
import { B2bTransactionsWhereUniqueInput } from "./B2bTransactionsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteB2bTransactionsArgs {
  @ApiProperty({
    required: true,
    type: () => B2bTransactionsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => B2bTransactionsWhereUniqueInput)
  @Field(() => B2bTransactionsWhereUniqueInput, { nullable: false })
  where!: B2bTransactionsWhereUniqueInput;
}

export { DeleteB2bTransactionsArgs as DeleteB2bTransactionsArgs };
