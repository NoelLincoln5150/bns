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
import { MeterDataWhereInput } from "./MeterDataWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MeterDataOrderByInput } from "./MeterDataOrderByInput";

@ArgsType()
class MeterDataFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MeterDataWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MeterDataWhereInput, { nullable: true })
  @Type(() => MeterDataWhereInput)
  where?: MeterDataWhereInput;

  @ApiProperty({
    required: false,
    type: [MeterDataOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MeterDataOrderByInput], { nullable: true })
  @Type(() => MeterDataOrderByInput)
  orderBy?: Array<MeterDataOrderByInput>;

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

export { MeterDataFindManyArgs as MeterDataFindManyArgs };
