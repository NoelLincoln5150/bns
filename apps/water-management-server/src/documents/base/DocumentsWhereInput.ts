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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DocumentPaymentsListRelationFilter } from "../../documentPayments/base/DocumentPaymentsListRelationFilter";
import { DocumentTypesWhereUniqueInput } from "../../documentTypes/base/DocumentTypesWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

@InputType()
class DocumentsWhereInput {
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
    type: () => DocumentPaymentsListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DocumentPaymentsListRelationFilter)
  @IsOptional()
  @Field(() => DocumentPaymentsListRelationFilter, {
    nullable: true,
  })
  documentPaymentsItems?: DocumentPaymentsListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DocumentTypesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DocumentTypesWhereUniqueInput)
  @IsOptional()
  @Field(() => DocumentTypesWhereUniqueInput, {
    nullable: true,
  })
  documentType?: DocumentTypesWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  documentableId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  documentableType?: StringNullableFilter;

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
  numberField?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  paid?: BooleanNullableFilter;
}

export { DocumentsWhereInput as DocumentsWhereInput };
