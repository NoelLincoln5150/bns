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
import { B2bTransactionsListRelationFilter } from "../../b2bTransactions/base/B2bTransactionsListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CustomerMeterListRelationFilter } from "../../customerMeter/base/CustomerMeterListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class CustomersWhereInput {
  @ApiProperty({
    required: false,
    type: () => B2bTransactionsListRelationFilter,
  })
  @ValidateNested()
  @Type(() => B2bTransactionsListRelationFilter)
  @IsOptional()
  @Field(() => B2bTransactionsListRelationFilter, {
    nullable: true,
  })
  b2bTransactionsItems?: B2bTransactionsListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CustomerMeterListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CustomerMeterListRelationFilter)
  @IsOptional()
  @Field(() => CustomerMeterListRelationFilter, {
    nullable: true,
  })
  customerMeters?: CustomerMeterListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  deletedAt?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  hash?: StringNullableFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  phoneNumber?: StringNullableFilter;
}

export { CustomersWhereInput as CustomersWhereInput };
