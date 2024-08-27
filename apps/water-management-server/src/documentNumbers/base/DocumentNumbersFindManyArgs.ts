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
import { DocumentNumbersWhereInput } from "./DocumentNumbersWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DocumentNumbersOrderByInput } from "./DocumentNumbersOrderByInput";

@ArgsType()
class DocumentNumbersFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DocumentNumbersWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DocumentNumbersWhereInput, { nullable: true })
  @Type(() => DocumentNumbersWhereInput)
  where?: DocumentNumbersWhereInput;

  @ApiProperty({
    required: false,
    type: [DocumentNumbersOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DocumentNumbersOrderByInput], { nullable: true })
  @Type(() => DocumentNumbersOrderByInput)
  orderBy?: Array<DocumentNumbersOrderByInput>;

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

export { DocumentNumbersFindManyArgs as DocumentNumbersFindManyArgs };
