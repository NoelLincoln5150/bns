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
import { WaterSourcesWhereInput } from "./WaterSourcesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WaterSourcesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WaterSourcesWhereInput,
  })
  @ValidateNested()
  @Type(() => WaterSourcesWhereInput)
  @IsOptional()
  @Field(() => WaterSourcesWhereInput, {
    nullable: true,
  })
  every?: WaterSourcesWhereInput;

  @ApiProperty({
    required: false,
    type: () => WaterSourcesWhereInput,
  })
  @ValidateNested()
  @Type(() => WaterSourcesWhereInput)
  @IsOptional()
  @Field(() => WaterSourcesWhereInput, {
    nullable: true,
  })
  some?: WaterSourcesWhereInput;

  @ApiProperty({
    required: false,
    type: () => WaterSourcesWhereInput,
  })
  @ValidateNested()
  @Type(() => WaterSourcesWhereInput)
  @IsOptional()
  @Field(() => WaterSourcesWhereInput, {
    nullable: true,
  })
  none?: WaterSourcesWhereInput;
}
export { WaterSourcesListRelationFilter as WaterSourcesListRelationFilter };
