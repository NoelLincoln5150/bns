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

import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  ValidateNested,
  IsString,
  MaxLength,
  IsDate,
} from "class-validator";

import { MeterWhereUniqueInput } from "../../meter/base/MeterWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class UsageCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amountUsed?: number | null;

  @ApiProperty({
    required: false,
    type: () => MeterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MeterWhereUniqueInput)
  @IsOptional()
  @Field(() => MeterWhereUniqueInput, {
    nullable: true,
  })
  meter?: MeterWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  meterRelation?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  usageDate?: Date | null;
}

export { UsageCreateInput as UsageCreateInput };
