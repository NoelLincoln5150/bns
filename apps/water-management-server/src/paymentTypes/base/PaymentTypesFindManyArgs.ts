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
import { PaymentTypesWhereInput } from "./PaymentTypesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PaymentTypesOrderByInput } from "./PaymentTypesOrderByInput";

@ArgsType()
class PaymentTypesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PaymentTypesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PaymentTypesWhereInput, { nullable: true })
  @Type(() => PaymentTypesWhereInput)
  where?: PaymentTypesWhereInput;

  @ApiProperty({
    required: false,
    type: [PaymentTypesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PaymentTypesOrderByInput], { nullable: true })
  @Type(() => PaymentTypesOrderByInput)
  orderBy?: Array<PaymentTypesOrderByInput>;

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

export { PaymentTypesFindManyArgs as PaymentTypesFindManyArgs };
