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
import { DocumentPaymentsWhereInput } from "./DocumentPaymentsWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class DocumentPaymentsCountArgs {
  @ApiProperty({
    required: false,
    type: () => DocumentPaymentsWhereInput,
  })
  @Field(() => DocumentPaymentsWhereInput, { nullable: true })
  @Type(() => DocumentPaymentsWhereInput)
  where?: DocumentPaymentsWhereInput;
}

export { DocumentPaymentsCountArgs as DocumentPaymentsCountArgs };
