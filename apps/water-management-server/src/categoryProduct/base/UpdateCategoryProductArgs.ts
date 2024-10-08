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
import { CategoryProductWhereUniqueInput } from "./CategoryProductWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CategoryProductUpdateInput } from "./CategoryProductUpdateInput";

@ArgsType()
class UpdateCategoryProductArgs {
  @ApiProperty({
    required: true,
    type: () => CategoryProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryProductWhereUniqueInput)
  @Field(() => CategoryProductWhereUniqueInput, { nullable: false })
  where!: CategoryProductWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CategoryProductUpdateInput,
  })
  @ValidateNested()
  @Type(() => CategoryProductUpdateInput)
  @Field(() => CategoryProductUpdateInput, { nullable: false })
  data!: CategoryProductUpdateInput;
}

export { UpdateCategoryProductArgs as UpdateCategoryProductArgs };
