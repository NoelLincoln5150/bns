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
import { NotesWhereInput } from "./NotesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class NotesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => NotesWhereInput,
  })
  @ValidateNested()
  @Type(() => NotesWhereInput)
  @IsOptional()
  @Field(() => NotesWhereInput, {
    nullable: true,
  })
  every?: NotesWhereInput;

  @ApiProperty({
    required: false,
    type: () => NotesWhereInput,
  })
  @ValidateNested()
  @Type(() => NotesWhereInput)
  @IsOptional()
  @Field(() => NotesWhereInput, {
    nullable: true,
  })
  some?: NotesWhereInput;

  @ApiProperty({
    required: false,
    type: () => NotesWhereInput,
  })
  @ValidateNested()
  @Type(() => NotesWhereInput)
  @IsOptional()
  @Field(() => NotesWhereInput, {
    nullable: true,
  })
  none?: NotesWhereInput;
}
export { NotesListRelationFilter as NotesListRelationFilter };
