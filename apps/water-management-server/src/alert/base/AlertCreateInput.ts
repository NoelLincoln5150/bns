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
import { EnumAlertLevel } from "./EnumAlertLevel";
import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { PrepaidMeterWhereUniqueInput } from "../../prepaidMeter/base/PrepaidMeterWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class AlertCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumAlertLevel,
  })
  @IsEnum(EnumAlertLevel)
  @IsOptional()
  @Field(() => EnumAlertLevel, {
    nullable: true,
  })
  level?: "Info" | "Warning" | "Urgent" | "Error" | "Critical" | null;

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
  message?: string | null;

  @ApiProperty({
    required: false,
    type: () => PrepaidMeterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PrepaidMeterWhereUniqueInput)
  @IsOptional()
  @Field(() => PrepaidMeterWhereUniqueInput, {
    nullable: true,
  })
  prepaidMeter?: PrepaidMeterWhereUniqueInput | null;
}

export { AlertCreateInput as AlertCreateInput };
