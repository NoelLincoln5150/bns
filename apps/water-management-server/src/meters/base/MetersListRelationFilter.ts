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
import { MetersWhereInput } from "./MetersWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MetersListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MetersWhereInput,
  })
  @ValidateNested()
  @Type(() => MetersWhereInput)
  @IsOptional()
  @Field(() => MetersWhereInput, {
    nullable: true,
  })
  every?: MetersWhereInput;

  @ApiProperty({
    required: false,
    type: () => MetersWhereInput,
  })
  @ValidateNested()
  @Type(() => MetersWhereInput)
  @IsOptional()
  @Field(() => MetersWhereInput, {
    nullable: true,
  })
  some?: MetersWhereInput;

  @ApiProperty({
    required: false,
    type: () => MetersWhereInput,
  })
  @ValidateNested()
  @Type(() => MetersWhereInput)
  @IsOptional()
  @Field(() => MetersWhereInput, {
    nullable: true,
  })
  none?: MetersWhereInput;
}
export { MetersListRelationFilter as MetersListRelationFilter };
