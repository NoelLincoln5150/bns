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
import { PaymentChannelsWhereInput } from "./PaymentChannelsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PaymentChannelsOrderByInput } from "./PaymentChannelsOrderByInput";

@ArgsType()
class PaymentChannelsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PaymentChannelsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PaymentChannelsWhereInput, { nullable: true })
  @Type(() => PaymentChannelsWhereInput)
  where?: PaymentChannelsWhereInput;

  @ApiProperty({
    required: false,
    type: [PaymentChannelsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PaymentChannelsOrderByInput], { nullable: true })
  @Type(() => PaymentChannelsOrderByInput)
  orderBy?: Array<PaymentChannelsOrderByInput>;

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

export { PaymentChannelsFindManyArgs as PaymentChannelsFindManyArgs };
