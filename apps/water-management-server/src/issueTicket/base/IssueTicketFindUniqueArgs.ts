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
import { IssueTicketWhereUniqueInput } from "./IssueTicketWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class IssueTicketFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => IssueTicketWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IssueTicketWhereUniqueInput)
  @Field(() => IssueTicketWhereUniqueInput, { nullable: false })
  where!: IssueTicketWhereUniqueInput;
}

export { IssueTicketFindUniqueArgs as IssueTicketFindUniqueArgs };
