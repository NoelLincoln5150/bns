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
import { PasswordResetsWhereInput } from "./PasswordResetsWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PasswordResetsCountArgs {
  @ApiProperty({
    required: false,
    type: () => PasswordResetsWhereInput,
  })
  @Field(() => PasswordResetsWhereInput, { nullable: true })
  @Type(() => PasswordResetsWhereInput)
  where?: PasswordResetsWhereInput;
}

export { PasswordResetsCountArgs as PasswordResetsCountArgs };
