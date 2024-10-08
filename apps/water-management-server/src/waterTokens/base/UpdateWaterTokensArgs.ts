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
import { WaterTokensWhereUniqueInput } from "./WaterTokensWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { WaterTokensUpdateInput } from "./WaterTokensUpdateInput";

@ArgsType()
class UpdateWaterTokensArgs {
  @ApiProperty({
    required: true,
    type: () => WaterTokensWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WaterTokensWhereUniqueInput)
  @Field(() => WaterTokensWhereUniqueInput, { nullable: false })
  where!: WaterTokensWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => WaterTokensUpdateInput,
  })
  @ValidateNested()
  @Type(() => WaterTokensUpdateInput)
  @Field(() => WaterTokensUpdateInput, { nullable: false })
  data!: WaterTokensUpdateInput;
}

export { UpdateWaterTokensArgs as UpdateWaterTokensArgs };
