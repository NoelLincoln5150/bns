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
import { SuppliersWhereInput } from "./SuppliersWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SuppliersOrderByInput } from "./SuppliersOrderByInput";

@ArgsType()
class SuppliersFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SuppliersWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SuppliersWhereInput, { nullable: true })
  @Type(() => SuppliersWhereInput)
  where?: SuppliersWhereInput;

  @ApiProperty({
    required: false,
    type: [SuppliersOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SuppliersOrderByInput], { nullable: true })
  @Type(() => SuppliersOrderByInput)
  orderBy?: Array<SuppliersOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SuppliersFindManyArgs as SuppliersFindManyArgs };
