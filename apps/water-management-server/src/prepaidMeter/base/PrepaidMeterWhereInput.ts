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
import { AlertListRelationFilter } from "../../alert/base/AlertListRelationFilter";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { CommandListRelationFilter } from "../../command/base/CommandListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MeterDataListRelationFilter } from "../../meterData/base/MeterDataListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumPrepaidMeterStatus } from "./EnumPrepaidMeterStatus";

@InputType()
class PrepaidMeterWhereInput {
  @ApiProperty({
    required: false,
    type: () => AlertListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AlertListRelationFilter)
  @IsOptional()
  @Field(() => AlertListRelationFilter, {
    nullable: true,
  })
  alerts?: AlertListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CommandListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CommandListRelationFilter)
  @IsOptional()
  @Field(() => CommandListRelationFilter, {
    nullable: true,
  })
  commands?: CommandListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => MeterDataListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MeterDataListRelationFilter)
  @IsOptional()
  @Field(() => MeterDataListRelationFilter, {
    nullable: true,
  })
  meterDataItems?: MeterDataListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  meterNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumPrepaidMeterStatus,
  })
  @IsEnum(EnumPrepaidMeterStatus)
  @IsOptional()
  @Field(() => EnumPrepaidMeterStatus, {
    nullable: true,
  })
  status?: "Active" | "Inactive" | "Suspended" | "Closed";
}

export { PrepaidMeterWhereInput as PrepaidMeterWhereInput };
