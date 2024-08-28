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
import { TaxesCreateInput } from "./TaxesCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateTaxesArgs {
  @ApiProperty({
    required: true,
    type: () => TaxesCreateInput,
  })
  @ValidateNested()
  @Type(() => TaxesCreateInput)
  @Field(() => TaxesCreateInput, { nullable: false })
  data!: TaxesCreateInput;
}

export { CreateTaxesArgs as CreateTaxesArgs };
