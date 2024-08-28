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
import { TaxesWhereUniqueInput } from "./TaxesWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class TaxesFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => TaxesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TaxesWhereUniqueInput)
  @Field(() => TaxesWhereUniqueInput, { nullable: false })
  where!: TaxesWhereUniqueInput;
}

export { TaxesFindUniqueArgs as TaxesFindUniqueArgs };
