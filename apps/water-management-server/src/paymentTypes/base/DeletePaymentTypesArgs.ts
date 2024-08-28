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
import { PaymentTypesWhereUniqueInput } from "./PaymentTypesWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeletePaymentTypesArgs {
  @ApiProperty({
    required: true,
    type: () => PaymentTypesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentTypesWhereUniqueInput)
  @Field(() => PaymentTypesWhereUniqueInput, { nullable: false })
  where!: PaymentTypesWhereUniqueInput;
}

export { DeletePaymentTypesArgs as DeletePaymentTypesArgs };
