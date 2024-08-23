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
import { MeterWhereInput } from "./MeterWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MeterListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MeterWhereInput,
  })
  @ValidateNested()
  @Type(() => MeterWhereInput)
  @IsOptional()
  @Field(() => MeterWhereInput, {
    nullable: true,
  })
  every?: MeterWhereInput;

  @ApiProperty({
    required: false,
    type: () => MeterWhereInput,
  })
  @ValidateNested()
  @Type(() => MeterWhereInput)
  @IsOptional()
  @Field(() => MeterWhereInput, {
    nullable: true,
  })
  some?: MeterWhereInput;

  @ApiProperty({
    required: false,
    type: () => MeterWhereInput,
  })
  @ValidateNested()
  @Type(() => MeterWhereInput)
  @IsOptional()
  @Field(() => MeterWhereInput, {
    nullable: true,
  })
  none?: MeterWhereInput;
}
export { MeterListRelationFilter as MeterListRelationFilter };
