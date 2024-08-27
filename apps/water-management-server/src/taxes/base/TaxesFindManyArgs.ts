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
import { TaxesWhereInput } from "./TaxesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TaxesOrderByInput } from "./TaxesOrderByInput";

@ArgsType()
class TaxesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TaxesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TaxesWhereInput, { nullable: true })
  @Type(() => TaxesWhereInput)
  where?: TaxesWhereInput;

  @ApiProperty({
    required: false,
    type: [TaxesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TaxesOrderByInput], { nullable: true })
  @Type(() => TaxesOrderByInput)
  orderBy?: Array<TaxesOrderByInput>;

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

export { TaxesFindManyArgs as TaxesFindManyArgs };
