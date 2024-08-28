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
import { DocumentNumbersWhereUniqueInput } from "./DocumentNumbersWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DocumentNumbersUpdateInput } from "./DocumentNumbersUpdateInput";

@ArgsType()
class UpdateDocumentNumbersArgs {
  @ApiProperty({
    required: true,
    type: () => DocumentNumbersWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DocumentNumbersWhereUniqueInput)
  @Field(() => DocumentNumbersWhereUniqueInput, { nullable: false })
  where!: DocumentNumbersWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DocumentNumbersUpdateInput,
  })
  @ValidateNested()
  @Type(() => DocumentNumbersUpdateInput)
  @Field(() => DocumentNumbersUpdateInput, { nullable: false })
  data!: DocumentNumbersUpdateInput;
}

export { UpdateDocumentNumbersArgs as UpdateDocumentNumbersArgs };
