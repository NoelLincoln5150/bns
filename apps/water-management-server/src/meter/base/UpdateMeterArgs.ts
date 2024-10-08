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
import { MeterWhereUniqueInput } from "./MeterWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MeterUpdateInput } from "./MeterUpdateInput";

@ArgsType()
class UpdateMeterArgs {
  @ApiProperty({
    required: true,
    type: () => MeterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MeterWhereUniqueInput)
  @Field(() => MeterWhereUniqueInput, { nullable: false })
  where!: MeterWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MeterUpdateInput,
  })
  @ValidateNested()
  @Type(() => MeterUpdateInput)
  @Field(() => MeterUpdateInput, { nullable: false })
  data!: MeterUpdateInput;
}

export { UpdateMeterArgs as UpdateMeterArgs };
