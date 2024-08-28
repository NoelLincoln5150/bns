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
import { CustomerMeterWhereInput } from "./CustomerMeterWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CustomerMeterOrderByInput } from "./CustomerMeterOrderByInput";

@ArgsType()
class CustomerMeterFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CustomerMeterWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CustomerMeterWhereInput, { nullable: true })
  @Type(() => CustomerMeterWhereInput)
  where?: CustomerMeterWhereInput;

  @ApiProperty({
    required: false,
    type: [CustomerMeterOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CustomerMeterOrderByInput], { nullable: true })
  @Type(() => CustomerMeterOrderByInput)
  orderBy?: Array<CustomerMeterOrderByInput>;

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

export { CustomerMeterFindManyArgs as CustomerMeterFindManyArgs };
