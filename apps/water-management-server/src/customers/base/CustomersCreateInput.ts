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
import { B2bTransactionsCreateNestedManyWithoutCustomersItemsInput } from "./B2bTransactionsCreateNestedManyWithoutCustomersItemsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CustomersCreateInput {
  @ApiProperty({
    required: false,
    type: () => B2bTransactionsCreateNestedManyWithoutCustomersItemsInput,
  })
  @ValidateNested()
  @Type(() => B2bTransactionsCreateNestedManyWithoutCustomersItemsInput)
  @IsOptional()
  @Field(() => B2bTransactionsCreateNestedManyWithoutCustomersItemsInput, {
    nullable: true,
  })
  b2bTransactionsItems?: B2bTransactionsCreateNestedManyWithoutCustomersItemsInput;
}

export { CustomersCreateInput as CustomersCreateInput };
