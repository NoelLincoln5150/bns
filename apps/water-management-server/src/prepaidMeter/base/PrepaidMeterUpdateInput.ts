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
import { AlertUpdateManyWithoutPrepaidMetersInput } from "./AlertUpdateManyWithoutPrepaidMetersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { CommandUpdateManyWithoutPrepaidMetersInput } from "./CommandUpdateManyWithoutPrepaidMetersInput";
import { MeterDataUpdateManyWithoutPrepaidMetersInput } from "./MeterDataUpdateManyWithoutPrepaidMetersInput";
import { EnumPrepaidMeterStatus } from "./EnumPrepaidMeterStatus";

@InputType()
class PrepaidMeterUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AlertUpdateManyWithoutPrepaidMetersInput,
  })
  @ValidateNested()
  @Type(() => AlertUpdateManyWithoutPrepaidMetersInput)
  @IsOptional()
  @Field(() => AlertUpdateManyWithoutPrepaidMetersInput, {
    nullable: true,
  })
  alerts?: AlertUpdateManyWithoutPrepaidMetersInput;

  @ApiProperty({
    required: false,
    type: () => CommandUpdateManyWithoutPrepaidMetersInput,
  })
  @ValidateNested()
  @Type(() => CommandUpdateManyWithoutPrepaidMetersInput)
  @IsOptional()
  @Field(() => CommandUpdateManyWithoutPrepaidMetersInput, {
    nullable: true,
  })
  commands?: CommandUpdateManyWithoutPrepaidMetersInput;

  @ApiProperty({
    required: false,
    type: () => MeterDataUpdateManyWithoutPrepaidMetersInput,
  })
  @ValidateNested()
  @Type(() => MeterDataUpdateManyWithoutPrepaidMetersInput)
  @IsOptional()
  @Field(() => MeterDataUpdateManyWithoutPrepaidMetersInput, {
    nullable: true,
  })
  meterDataItems?: MeterDataUpdateManyWithoutPrepaidMetersInput;

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
  meterNumber?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumPrepaidMeterStatus,
  })
  @IsEnum(EnumPrepaidMeterStatus)
  @IsOptional()
  @Field(() => EnumPrepaidMeterStatus, {
    nullable: true,
  })
  status?: "Active" | "Inactive" | "Suspended" | "Closed" | null;
}

export { PrepaidMeterUpdateInput as PrepaidMeterUpdateInput };
