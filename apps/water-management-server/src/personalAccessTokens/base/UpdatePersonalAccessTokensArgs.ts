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
import { PersonalAccessTokensWhereUniqueInput } from "./PersonalAccessTokensWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PersonalAccessTokensUpdateInput } from "./PersonalAccessTokensUpdateInput";

@ArgsType()
class UpdatePersonalAccessTokensArgs {
  @ApiProperty({
    required: true,
    type: () => PersonalAccessTokensWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PersonalAccessTokensWhereUniqueInput)
  @Field(() => PersonalAccessTokensWhereUniqueInput, { nullable: false })
  where!: PersonalAccessTokensWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PersonalAccessTokensUpdateInput,
  })
  @ValidateNested()
  @Type(() => PersonalAccessTokensUpdateInput)
  @Field(() => PersonalAccessTokensUpdateInput, { nullable: false })
  data!: PersonalAccessTokensUpdateInput;
}

export { UpdatePersonalAccessTokensArgs as UpdatePersonalAccessTokensArgs };
