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
import { DocumentTypesWhereUniqueInput } from "./DocumentTypesWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DocumentTypesUpdateInput } from "./DocumentTypesUpdateInput";

@ArgsType()
class UpdateDocumentTypesArgs {
  @ApiProperty({
    required: true,
    type: () => DocumentTypesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DocumentTypesWhereUniqueInput)
  @Field(() => DocumentTypesWhereUniqueInput, { nullable: false })
  where!: DocumentTypesWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DocumentTypesUpdateInput,
  })
  @ValidateNested()
  @Type(() => DocumentTypesUpdateInput)
  @Field(() => DocumentTypesUpdateInput, { nullable: false })
  data!: DocumentTypesUpdateInput;
}

export { UpdateDocumentTypesArgs as UpdateDocumentTypesArgs };
