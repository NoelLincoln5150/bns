/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PaymentChannelsWhereUniqueInput } from "../../paymentChannels/base/PaymentChannelsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PaymentChannelsUpdateManyWithoutPaymentTypesItemsInput {
  @Field(() => [PaymentChannelsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentChannelsWhereUniqueInput],
  })
  connect?: Array<PaymentChannelsWhereUniqueInput>;

  @Field(() => [PaymentChannelsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentChannelsWhereUniqueInput],
  })
  disconnect?: Array<PaymentChannelsWhereUniqueInput>;

  @Field(() => [PaymentChannelsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentChannelsWhereUniqueInput],
  })
  set?: Array<PaymentChannelsWhereUniqueInput>;
}

export { PaymentChannelsUpdateManyWithoutPaymentTypesItemsInput as PaymentChannelsUpdateManyWithoutPaymentTypesItemsInput };
