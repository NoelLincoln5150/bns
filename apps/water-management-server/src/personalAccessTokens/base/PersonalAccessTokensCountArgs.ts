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
import { PersonalAccessTokensWhereInput } from "./PersonalAccessTokensWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PersonalAccessTokensCountArgs {
  @ApiProperty({
    required: false,
    type: () => PersonalAccessTokensWhereInput,
  })
  @Field(() => PersonalAccessTokensWhereInput, { nullable: true })
  @Type(() => PersonalAccessTokensWhereInput)
  where?: PersonalAccessTokensWhereInput;
}

export { PersonalAccessTokensCountArgs as PersonalAccessTokensCountArgs };
